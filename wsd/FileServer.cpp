/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4; fill-column: 100 -*- */
/*
 * This file is part of the LibreOffice project.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

#include <config.h>

#include <iomanip>
#include <string>
#include <vector>

#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>
#include <zlib.h>
#include <security/pam_appl.h>

#include <openssl/evp.h>

#include <Poco/DateTime.h>
#include <Poco/DateTimeFormat.h>
#include <Poco/DateTimeFormatter.h>
#include <Poco/Exception.h>
#include <Poco/FileStream.h>
#include <Poco/Net/HTMLForm.h>
#include <Poco/Net/HTTPBasicCredentials.h>
#include <Poco/Net/HTTPCookie.h>
#include <Poco/Net/HTTPRequest.h>
#include <Poco/Net/HTTPResponse.h>
#include <Poco/Net/NameValueCollection.h>
#include <Poco/Net/NetException.h>
#include <Poco/RegularExpression.h>
#include <Poco/Runnable.h>
#include <Poco/StreamCopier.h>
#include <Poco/StringTokenizer.h>
#include <Poco/URI.h>

#include "Auth.hpp"
#include <Common.hpp>
#include <Crypto.hpp>
#include "FileServer.hpp"
#include "LOOLWSD.hpp"
#include <Log.hpp>
#include <Protocol.hpp>
#include <Util.hpp>

using Poco::Net::HTMLForm;
using Poco::Net::HTTPBasicCredentials;
using Poco::Net::HTTPRequest;
using Poco::Net::HTTPResponse;
using Poco::Net::NameValueCollection;
using Poco::Util::Application;

std::map<std::string, std::pair<std::string, std::string>> FileServerRequestHandler::FileHash;

namespace {

int functionConversation(int /*num_msg*/, const struct pam_message** /*msg*/,
                         struct pam_response **reply, void *appdata_ptr)
{
    *reply = (struct pam_response *)malloc(sizeof(struct pam_response));
    (*reply)[0].resp = strdup(static_cast<char *>(appdata_ptr));
    (*reply)[0].resp_retcode = 0;

    return PAM_SUCCESS;
}

/// Use PAM to check for user / password.
bool isPamAuthOk(const std::string& userProvidedUsr, const std::string& userProvidedPwd)
{
    struct pam_conv localConversation { functionConversation, nullptr };
    pam_handle_t *localAuthHandle = NULL;
    int retval;

    localConversation.appdata_ptr = const_cast<char *>(userProvidedPwd.c_str());

    retval = pam_start("loolwsd", userProvidedUsr.c_str(), &localConversation, &localAuthHandle);

    if (retval != PAM_SUCCESS)
    {
        LOG_ERR("pam_start returned " << retval);
        return false;
    }

    retval = pam_authenticate(localAuthHandle, 0);

    if (retval != PAM_SUCCESS)
    {
       if (retval == PAM_AUTH_ERR)
       {
           LOG_ERR("PAM authentication failure for user \"" << userProvidedUsr << "\".");
       }
       else
       {
           LOG_ERR("pam_authenticate returned " << retval);
       }
       return false;
    }

    LOG_INF("PAM authentication success for user \"" << userProvidedUsr << "\".");

    retval = pam_end(localAuthHandle, retval);

    if (retval != PAM_SUCCESS)
    {
        LOG_WRN("pam_end returned " << retval);
    }

    return true;
}

/// Check for user / password set in loolwsd.xml.
bool isConfigAuthOk(const std::string& userProvidedUsr, const std::string& userProvidedPwd)
{
    const auto& config = Application::instance().config();
    const std::string& user = config.getString("admin_console.username", "");

    // Check for the username
    if (user.empty())
    {
        LOG_ERR("Admin Console username missing, admin console disabled.");
        return false;
    }
    else if (user != userProvidedUsr)
    {
        LOG_ERR("Admin Console wrong username.");
        return false;
    }

    const char useLoolconfig[] = " Use loolconfig to configure the admin password.";

    // do we have secure_password?
    if (config.has("admin_console.secure_password"))
    {
        const std::string securePass = config.getString("admin_console.secure_password", "");
        if (securePass.empty())
        {
            LOG_ERR("Admin Console secure password is empty, denying access." << useLoolconfig);
            return false;
        }

#if HAVE_PKCS5_PBKDF2_HMAC
        // Extract the salt from the config
        std::vector<unsigned char> saltData;
        std::vector<std::string> tokens = LOOLProtocol::tokenize(securePass, '.');
        if (tokens.size() != 5 ||
            tokens[0] != "pbkdf2" ||
            tokens[1] != "sha512" ||
            !Util::dataFromHexString(tokens[3], saltData))
        {
            LOG_ERR("Incorrect format detected for secure_password in config file." << useLoolconfig);
            return false;
        }

        unsigned char userProvidedPwdHash[tokens[4].size() / 2];
        PKCS5_PBKDF2_HMAC(userProvidedPwd.c_str(), -1,
                          saltData.data(), saltData.size(),
                          std::stoi(tokens[2]),
                          EVP_sha512(),
                          sizeof userProvidedPwdHash, userProvidedPwdHash);

        std::stringstream stream;
        for (unsigned long j = 0; j < sizeof userProvidedPwdHash; ++j)
            stream << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(userProvidedPwdHash[j]);

        // now compare the hashed user-provided pwd against the stored hash
        return stream.str() == tokens[4];
#else
        const std::string pass = config.getString("admin_console.password", "");
        LOG_ERR("The config file has admin_console.secure_password setting, "
                << "but this application was compiled with old OpenSSL version, "
                << "and this setting cannot be used." << (!pass.empty()? " Falling back to plain text password.": ""));

        // careful, a fall-through!
#endif
    }

    const std::string pass = config.getString("admin_console.password", "");
    if (pass.empty())
    {
        LOG_ERR("Admin Console password is empty, denying access." << useLoolconfig);
        return false;
    }

    return pass == userProvidedPwd;
}

}

bool FileServerRequestHandler::isAdminLoggedIn(const HTTPRequest& request,
                                               HTTPResponse &response)
{
    assert(LOOLWSD::AdminEnabled);

    const auto& config = Application::instance().config();

    NameValueCollection cookies;
    request.getCookies(cookies);
    try
    {
        const std::string jwtToken = cookies.get("jwt");
        LOG_INF("Verifying JWT token: " << jwtToken);
        JWTAuth authAgent("admin", "admin", "admin");
        if (authAgent.verify(jwtToken))
        {
            LOG_TRC("JWT token is valid");
            return true;
        }

        LOG_INF("Invalid JWT token, let the administrator re-login");
    }
    catch (const Poco::Exception& exc)
    {
        LOG_INF("No existing JWT cookie found");
    }

    // If no cookie found, or is invalid, let the admin re-login
    HTTPBasicCredentials credentials(request);
    const std::string& userProvidedUsr = credentials.getUsername();
    const std::string& userProvidedPwd = credentials.getPassword();

    // Deny attempts to login without providing a username / pwd and fail right away
    // We don't even want to allow a password-less PAM module to be used here,
    // or anything.
    if (userProvidedUsr.empty() || userProvidedPwd.empty())
    {
        LOG_WRN("An attempt to log into Admin Console without username or password.");
        return false;
    }

    // Check if the user is allowed to use the admin console
    if (config.getBool("admin_console.enable_pam", "false"))
    {
        // use PAM - it needs the username too
        if (!isPamAuthOk(userProvidedUsr, userProvidedPwd))
            return false;
    }
    else
    {
        // use the hash or password in the config file
        if (!isConfigAuthOk(userProvidedUsr, userProvidedPwd))
            return false;
    }

    // authentication passed, generate and set the cookie
    JWTAuth authAgent("admin", "admin", "admin");
    const std::string jwtToken = authAgent.getAccessToken();

    Poco::Net::HTTPCookie cookie("jwt", jwtToken);
    // bundlify appears to add an extra /dist -> dist/dist/admin
    cookie.setPath(LOOLWSD::ServiceRoot + "/loleaflet/dist/");
    cookie.setSecure(LOOLWSD::isSSLEnabled() ||
                     LOOLWSD::isSSLTermination());
    response.addCookie(cookie);

    return true;
}

void FileServerRequestHandler::handleRequest(const HTTPRequest& request, Poco::MemoryInputStream& message,
                                             const std::shared_ptr<StreamSocket>& socket)
{
    try
    {
        bool noCache = false;
#if ENABLE_DEBUG
        noCache = true;
#endif
        Poco::Net::HTTPResponse response;
        Poco::URI requestUri(request.getURI());
        LOG_TRC("Fileserver request: " << requestUri.toString());
        requestUri.normalize(); // avoid .'s and ..'s

        std::string path(requestUri.getPath());
        if (path.find("loleaflet/" LOOLWSD_VERSION_HASH "/") == std::string::npos)
        {
            LOG_WRN("client - server version mismatch, disabling browser cache.");
            noCache = true;
        }

        std::vector<std::string> requestSegments;
        requestUri.getPathSegments(requestSegments);
        const std::string relPath = getRequestPathname(request);
        // Is this a file we read at startup - if not; its not for serving.
        if (requestSegments.size() < 1 || FileHash.find(relPath) == FileHash.end())
            throw Poco::FileNotFoundException("Invalid URI request: [" + requestUri.toString() + "].");

        const auto& config = Application::instance().config();
        const std::string loleafletHtml = config.getString("loleaflet_html", "loleaflet.html");
        const std::string endPoint = requestSegments[requestSegments.size() - 1];
        if (endPoint == loleafletHtml)
        {
            preprocessFile(request, message, socket);
            return;
        }

        if (request.getMethod() == HTTPRequest::HTTP_GET)
        {
            if (endPoint == "admin.html" ||
                endPoint == "adminSettings.html" ||
                endPoint == "adminHistory.html" ||
                endPoint == "adminAnalytics.html")
            {
                preprocessAdminFile(request, socket);
                return;
            }

            if (endPoint == "admin-bundle.js" ||
                endPoint == "admin-localizations.js")
            {
                noCache = true;

                if (!LOOLWSD::AdminEnabled)
                    throw Poco::FileAccessDeniedException("Admin console disabled");

                if (!FileServerRequestHandler::isAdminLoggedIn(request, response))
                    throw Poco::Net::NotAuthenticatedException("Invalid admin login");

                // Ask UAs to block if they detect any XSS attempt
                response.add("X-XSS-Protection", "1; mode=block");
                // No referrer-policy
                response.add("Referrer-Policy", "no-referrer");
            }

            // Do we have an extension.
            const std::size_t extPoint = endPoint.find_last_of('.');
            if (extPoint == std::string::npos)
                throw Poco::FileNotFoundException("Invalid file.");

            const std::string fileType = endPoint.substr(extPoint + 1);
            std::string mimeType;
            if (fileType == "js")
                mimeType = "application/javascript";
            else if (fileType == "css")
                mimeType = "text/css";
            else if (fileType == "html")
                mimeType = "text/html";
            else if (fileType == "png")
                mimeType = "image/png";
            else if (fileType == "svg")
                mimeType = "image/svg+xml";
            else
                mimeType = "text/plain";

            auto it = request.find("If-None-Match");
            if (it != request.end())
            {
                // if ETags match avoid re-sending the file.
                if (!noCache && it->second == "\"" LOOLWSD_VERSION_HASH "\"")
                {
                    // TESTME: harder ... - do we even want ETag support ?
                    std::ostringstream oss;
                    Poco::DateTime now;
                    Poco::DateTime later(now.utcTime(), int64_t(1000)*1000 * 60 * 60 * 24 * 128);
                    oss << "HTTP/1.1 304 Not Modified\r\n"
                        "Date: " << Poco::DateTimeFormatter::format(
                            now, Poco::DateTimeFormat::HTTP_FORMAT) << "\r\n"
                        "Expires: " << Poco::DateTimeFormatter::format(
                            later, Poco::DateTimeFormat::HTTP_FORMAT) << "\r\n"
                        "User-Agent: " WOPI_AGENT_STRING "\r\n"
                        "Cache-Control: max-age=11059200\r\n"
                        "\r\n";
                    socket->send(oss.str());
                    socket->shutdown();
                    return;
                }
            }

            response.set("User-Agent", HTTP_AGENT_STRING);
            response.set("Date", Util::getHttpTimeNow());

            bool gzip = request.hasToken("Accept-Encoding", "gzip");
            const std::string *content;
#if ENABLE_DEBUG
            if (std::getenv("LOOL_SERVE_FROM_FS"))
            {
                // Useful to not serve from memory sometimes especially during loleaflet development
                // Avoids having to restart loolwsd everytime you make a change in loleaflet
                const std::string filePath = Poco::Path(LOOLWSD::FileServerRoot, relPath).absolute().toString();
                HttpHelper::sendFile(socket, filePath, mimeType, response, noCache);
                return;
            }
#endif
            if (gzip)
            {
                response.set("Content-Encoding", "gzip");
                content = getCompressedFile(relPath);
            }
            else
                content = getUncompressedFile(relPath);

            if (!noCache)
            {
                // 60 * 60 * 24 * 128 (days) = 11059200
                response.set("Cache-Control", "max-age=11059200");
                response.set("ETag", "\"" LOOLWSD_VERSION_HASH "\"");
            }
            response.setContentType(mimeType);
            response.add("X-Content-Type-Options", "nosniff");

            std::ostringstream oss;
            response.write(oss);
            const std::string header = oss.str();
            LOG_TRC("#" << socket->getFD() << ": Sending " <<
                    (!gzip ? "un":"") << "compressed : file [" << relPath << "]: " << header);
            socket->send(header);
            socket->send(*content);
        }
    }
    catch (const Poco::Net::NotAuthenticatedException& exc)
    {
        LOG_ERR("FileServerRequestHandler::NotAuthenticated: " << exc.displayText());
        sendError(401, request, socket, "", "", "WWW-authenticate: Basic realm=\"online\"\r\n");
    }
    catch (const Poco::FileAccessDeniedException& exc)
    {
        LOG_ERR("FileServerRequestHandler: " << exc.displayText());
        sendError(403, request, socket, "403 - Access denied!",
                  "You are unable to access");
    }
    catch (const Poco::FileNotFoundException& exc)
    {
        LOG_WRN("FileServerRequestHandler: " << exc.displayText());
        sendError(404, request, socket, "404 - file not found!",
                  "There seems to be a problem locating");
    }
}

void FileServerRequestHandler::sendError(int errorCode, const Poco::Net::HTTPRequest& request,
                                         const std::shared_ptr<StreamSocket>& socket,
                                         const std::string& shortMessage, const std::string& longMessage,
                                         const std::string& extraHeader)
{
    Poco::URI requestUri(request.getURI());
    const std::string& path = requestUri.getPath();
    std::ostringstream oss;
    oss << "HTTP/1.1 " << errorCode << "\r\n"
        "Content-Type: text/html charset=UTF-8\r\n"
        "Date: " << Util::getHttpTimeNow() << "\r\n"
        "User-Agent: " << WOPI_AGENT_STRING << "\r\n"
        << extraHeader
        << "\r\n";
    if (!shortMessage.empty())
    {
        oss << "<h1>Error: " << shortMessage << "</h1>"
            "<p>" << longMessage << " " << path << "</p>"
            "<p>Please contact your system administrator.</p>";
    }
    socket->send(oss.str());
}

void FileServerRequestHandler::readDirToHash(const std::string &basePath, const std::string &path)
{
    struct dirent *currentFile;
    struct stat fileStat;
    DIR *workingdir;

    LOG_TRC("Pre-reading directory: " << basePath << path);
    workingdir = opendir((basePath + path).c_str());

    if (!workingdir)
        return;

    while ((currentFile = readdir(workingdir)) != nullptr)
    {
        if (currentFile->d_name[0] == '.')
            continue;

        const std::string relPath = path + '/' + currentFile->d_name;
        stat ((basePath + relPath).c_str(), &fileStat);

        if (S_ISDIR(fileStat.st_mode))
            readDirToHash(basePath, relPath);

        else if (S_ISREG(fileStat.st_mode))
        {
            LOG_TRC("Reading file: '" << basePath << relPath << " as '" << relPath << "'");

            std::ifstream file(basePath + relPath, std::ios::binary);

            z_stream strm;
            strm.zalloc = Z_NULL;
            strm.zfree = Z_NULL;
            strm.opaque = Z_NULL;
            deflateInit2(&strm, Z_DEFAULT_COMPRESSION, Z_DEFLATED, 31, 8, Z_DEFAULT_STRATEGY);

            std::unique_ptr<char[]> buf(new char[fileStat.st_size]);
            std::string compressedFile;
            compressedFile.reserve(fileStat.st_size);
            std::string uncompressedFile;
            uncompressedFile.reserve(fileStat.st_size);
            do
            {
                file.read(&buf[0], fileStat.st_size);
                const long unsigned int size = file.gcount();
                if (size == 0)
                    break;

                const long unsigned int compSize = compressBound(size);
                char *cbuf = (char *)calloc(compSize, sizeof(char));

                strm.next_in = (unsigned char *)&buf[0];
                strm.avail_in = size;
                strm.avail_out = compSize;
                strm.next_out = (unsigned char *)&cbuf[0];

                deflate(&strm, Z_FINISH);

                const long unsigned int haveComp = compSize - strm.avail_out;
                std::string partialcompFile(cbuf, haveComp);
                std::string partialuncompFile(buf.get(), size);
                compressedFile += partialcompFile;
                uncompressedFile += partialuncompFile;
                free(cbuf);

            } while(true);

            FileHash.emplace(relPath, std::make_pair(uncompressedFile, compressedFile));
            deflateEnd(&strm);
        }
    }
    closedir(workingdir);
}

void FileServerRequestHandler::initialize()
{
    static const std::vector<std::string> subdirs = { "/loleaflet/dist" };
    for(const auto& subdir: subdirs)
    {
        try {
            readDirToHash(LOOLWSD::FileServerRoot, subdir);
        } catch (...) {
            LOG_ERR("Failed to read from directory " << subdir);
        }
    }
}

const std::string *FileServerRequestHandler::getCompressedFile(const std::string &path)
{
    return &FileHash[path].second;
}

const std::string *FileServerRequestHandler::getUncompressedFile(const std::string &path)
{
    return &FileHash[path].first;
}

std::string FileServerRequestHandler::getRequestPathname(const HTTPRequest& request)
{
    Poco::URI requestUri(request.getURI());
    // avoid .'s and ..'s
    requestUri.normalize();

    std::string path(requestUri.getPath());
    Poco::RegularExpression gitHashRe("/([0-9a-f]+)/");
    std::string gitHash;
    if (gitHashRe.extract(path, gitHash))
    {
        // Convert version back to a real file name.
        Poco::replaceInPlace(path, std::string("/loleaflet" + gitHash), std::string("/loleaflet/dist/"));
    }

    return path;
}

constexpr char BRANDING[] = "branding";
#if ENABLE_SUPPORT_KEY
constexpr char BRANDING_UNSUPPORTED[] = "branding-unsupported";
#endif

void FileServerRequestHandler::preprocessFile(const HTTPRequest& request, Poco::MemoryInputStream& message, const std::shared_ptr<StreamSocket>& socket)
{
    const auto host = ((LOOLWSD::isSSLEnabled() || LOOLWSD::isSSLTermination()) ? "wss://" : "ws://") + (LOOLWSD::ServerName.empty() ? request.getHost() : LOOLWSD::ServerName);
    const Poco::URI::QueryParameters params = Poco::URI(request.getURI()).getQueryParameters();

    // Is this a file we read at startup - if not; its not for serving.
    const std::string relPath = getRequestPathname(request);
    LOG_DBG("Preprocessing file: " << relPath);
    std::string preprocess = *getUncompressedFile(relPath);

    HTMLForm form(request, message);
    const std::string accessToken = form.get("access_token", "");
    const std::string accessTokenTtl = form.get("access_token_ttl", "");
    LOG_TRC("access_token=" << accessToken << ", access_token_ttl=" << accessTokenTtl);
    const std::string accessHeader = form.get("access_header", "");
    LOG_TRC("access_header=" << accessHeader);

    // Escape bad characters in access token.
    // This is placed directly in javascript in loleaflet.html, we need to make sure
    // that no one can do anything nasty with their clever inputs.
    std::string escapedAccessToken, escapedAccessHeader;
    Poco::URI::encode(accessToken, "'", escapedAccessToken);
    Poco::URI::encode(accessHeader, "'", escapedAccessHeader);

    unsigned long tokenTtl = 0;
    if (!accessToken.empty())
    {
        if (!accessTokenTtl.empty())
        {
            try
            {
                tokenTtl = std::stoul(accessTokenTtl);
            }
            catch (const std::exception& exc)
            {
                LOG_ERR("access_token_ttl must be represented as the number of milliseconds since January 1, 1970 UTC, when the token will expire");
            }
        }
        else
        {
            LOG_INF("WOPI host did not pass optional access_token_ttl");
        }
    }

    Poco::replaceInPlace(preprocess, std::string("%ACCESS_TOKEN%"), escapedAccessToken);
    Poco::replaceInPlace(preprocess, std::string("%ACCESS_TOKEN_TTL%"), std::to_string(tokenTtl));
    Poco::replaceInPlace(preprocess, std::string("%ACCESS_HEADER%"), escapedAccessHeader);
    Poco::replaceInPlace(preprocess, std::string("%HOST%"), host);
    Poco::replaceInPlace(preprocess, std::string("%VERSION%"), std::string(LOOLWSD_VERSION_HASH));
    Poco::replaceInPlace(preprocess, std::string("%SERVICE_ROOT%"), LOOLWSD::ServiceRoot);

    static const std::string linkCSS("<link rel=\"stylesheet\" href=\"%s/loleaflet/" LOOLWSD_VERSION_HASH "/%s.css\">");
    static const std::string scriptJS("<script src=\"%s/loleaflet/" LOOLWSD_VERSION_HASH "/%s.js\"></script>");

    std::string brandCSS(Poco::format(linkCSS, LOOLWSD::ServiceRoot, std::string(BRANDING)));
    std::string brandJS(Poco::format(scriptJS, LOOLWSD::ServiceRoot, std::string(BRANDING)));

    const auto& config = Application::instance().config();
#if ENABLE_SUPPORT_KEY
    const std::string keyString = config.getString("support_key", "");
    SupportKey key(keyString);
    if (!key.verify() || key.validDaysRemaining() <= 0)
    {
        brandCSS = Poco::format(linkCSS, LOOLWSD::ServiceRoot, std::string(BRANDING_UNSUPPORTED));
        brandJS = Poco::format(scriptJS, LOOLWSD::ServiceRoot, std::string(BRANDING_UNSUPPORTED));
    }
#endif

    Poco::replaceInPlace(preprocess, std::string("<!--%BRANDING_CSS%-->"), brandCSS);
    Poco::replaceInPlace(preprocess, std::string("<!--%BRANDING_JS%-->"), brandJS);

    // Customization related to document signing.
    std::string documentSigningDiv;
    const std::string documentSigningURL = config.getString("per_document.document_signing_url", "");
    if (!documentSigningURL.empty())
    {
        documentSigningDiv = "<div id=\"document-signing-bar\"></div>";
    }
    Poco::replaceInPlace(preprocess, std::string("<!--%DOCUMENT_SIGNING_DIV%-->"), documentSigningDiv);
    Poco::replaceInPlace(preprocess, std::string("%DOCUMENT_SIGNING_URL%"), documentSigningURL);

    const auto loleafletLogging = config.getString("loleaflet_logging", "false");
    Poco::replaceInPlace(preprocess, std::string("%LOLEAFLET_LOGGING%"), loleafletLogging);
    const std::string outOfFocusTimeoutSecs= config.getString("per_view.out_of_focus_timeout_secs", "60");
    Poco::replaceInPlace(preprocess, std::string("%OUT_OF_FOCUS_TIMEOUT_SECS%"), outOfFocusTimeoutSecs);
    const std::string idleTimeoutSecs= config.getString("per_view.idle_timeout_secs", "900");
    Poco::replaceInPlace(preprocess, std::string("%IDLE_TIMEOUT_SECS%"), idleTimeoutSecs);

    const std::string mimeType = "text/html";

    std::ostringstream oss;
    oss << "HTTP/1.1 200 OK\r\n"
        "Date: " << Util::getHttpTimeNow() << "\r\n"
        "Last-Modified: " << Util::getHttpTimeNow() << "\r\n"
        "User-Agent: " << WOPI_AGENT_STRING << "\r\n"
        "Cache-Control:max-age=11059200\r\n"
        "ETag: \"" LOOLWSD_VERSION_HASH "\"\r\n"
        "Content-Length: " << preprocess.size() << "\r\n"
        "Content-Type: " << mimeType << "\r\n"
        "X-Content-Type-Options: nosniff\r\n"
        "X-XSS-Protection: 1; mode=block\r\n"
        "Referrer-Policy: no-referrer\r\n";

    // Document signing: if endpoint URL is configured, whitelist that for
    // iframe purposes.
    std::ostringstream cspOss;
    cspOss << "Content-Security-Policy: default-src 'none'; "
           "frame-src 'self' blob: " << documentSigningURL << "; "
           "connect-src 'self' " << host << "; "
           "script-src 'unsafe-inline' 'self'; "
           "style-src 'self' 'unsafe-inline'; "
           "font-src 'self' data:; "
           "object-src blob:; ";

    // Frame ancestors: Allow loolwsd host, wopi host and anything configured.
    std::string configFrameAncestor = config.getString("net.frame_ancestors", "");
    std::string frameAncestors = configFrameAncestor;
    Poco::URI uriHost(host);
    if (uriHost.getHost() != configFrameAncestor)
        frameAncestors += " " + uriHost.getHost() + ":*";

    for (const auto& param : params)
    {
        if (param.first == "WOPISrc")
        {
            std::string wopiFrameAncestor;
            Poco::URI::decode(param.second, wopiFrameAncestor);
            Poco::URI uriWopiFrameAncestor(wopiFrameAncestor);
            // Remove parameters from URL
            wopiFrameAncestor = uriWopiFrameAncestor.getHost();
            if (wopiFrameAncestor != uriHost.getHost() && wopiFrameAncestor != configFrameAncestor)
            {
                frameAncestors += " " + wopiFrameAncestor + ":*";
                LOG_TRC("Picking frame ancestor from WOPISrc: " << wopiFrameAncestor);
            }
            break;
        }
    }

    if (!frameAncestors.empty())
    {
        LOG_TRC("Allowed frame ancestors: " << frameAncestors);
        // X-Frame-Options supports only one ancestor, ignore that
        //(it's deprecated anyway and CSP works in all major browsers)
        cspOss << "img-src 'self' data: " << frameAncestors << "; "
                << "frame-ancestors " << frameAncestors;
    }
    else
    {
        LOG_TRC("Denied all frame ancestors");
        cspOss << "img-src 'self' data: none;";
    }
    cspOss << "\r\n";
    // Append CSP to response headers too
    oss << cspOss.str();

    // Setup HTTP Public key pinning
    if ((LOOLWSD::isSSLEnabled() || LOOLWSD::isSSLTermination()) && config.getBool("ssl.hpkp[@enable]", false))
    {
        size_t i = 0;
        std::string pinPath = "ssl.hpkp.pins.pin[" + std::to_string(i) + "]";
        std::ostringstream hpkpOss;
        bool keysPinned = false;
        while (config.has(pinPath))
        {
            const std::string pin = config.getString(pinPath, "");
            if (!pin.empty())
            {
                hpkpOss << "pin-sha256=\"" << pin << "\"; ";
                keysPinned = true;
            }
            pinPath = "ssl.hpkp.pins.pin[" + std::to_string(++i) + "]";
        }

        if (keysPinned && config.getBool("ssl.hpkp.max_age[@enable]", false))
        {
            int maxAge = 1000; // seconds
            try
            {
                maxAge = config.getInt("ssl.hpkp.max_age", maxAge);
            }
            catch (Poco::SyntaxException& exc)
            {
                LOG_WRN("Invalid value of HPKP's max-age directive found in config file. Defaulting to "
                        << maxAge);
            }
            hpkpOss << "max-age=" << maxAge << "; ";
        }

        if (keysPinned && config.getBool("ssl.hpkp.report_uri[@enable]", false))
        {
            const std::string reportUri = config.getString("ssl.hpkp.report_uri", "");
            if (!reportUri.empty())
            {
                hpkpOss << "report-uri=" << reportUri << "; ";
            }
        }

        if (!hpkpOss.str().empty())
        {
            if (config.getBool("ssl.hpkp[@report_only]", false))
            {
                // Only send validation failure reports to reportUri while still allowing UAs to
                // connect to the server
                oss << "Public-Key-Pins-Report-Only: " << hpkpOss.str() << "\r\n";
            }
            else
            {
                oss << "Public-Key-Pins: " << hpkpOss.str() << "\r\n";
            }
        }
    }

    oss << "\r\n"
        << preprocess;

    socket->send(oss.str());
    LOG_DBG("Sent file: " << relPath << ": " << preprocess);
}

void FileServerRequestHandler::preprocessAdminFile(const HTTPRequest& request,const std::shared_ptr<StreamSocket>& socket)
{
    Poco::Net::HTTPResponse response;

    if (!LOOLWSD::AdminEnabled)
        throw Poco::FileAccessDeniedException("Admin console disabled");

    if (!FileServerRequestHandler::isAdminLoggedIn(request, response))
        throw Poco::Net::NotAuthenticatedException("Invalid admin login");

    static const std::string scriptJS("<script src=\"%s/loleaflet/" LOOLWSD_VERSION_HASH "/%s.js\"></script>");
    static const std::string footerPage("<div class=\"footer navbar-fixed-bottom text-info text-center\"><strong>Key:</strong> %s &nbsp;&nbsp;<strong>Expiry Date:</strong> %s</div>");

    const std::string relPath = getRequestPathname(request);
    LOG_DBG("Preprocessing file: " << relPath);
    std::string adminFile = *getUncompressedFile(relPath);
    std::string brandJS(Poco::format(scriptJS, LOOLWSD::ServiceRoot, std::string(BRANDING)));
    std::string brandFooter;

#if ENABLE_SUPPORT_KEY
    const auto& config = Application::instance().config();
    const std::string keyString = config.getString("support_key", "");
    SupportKey key(keyString);

    if (!key.verify() || key.validDaysRemaining() <= 0)
    {
        brandJS = Poco::format(scriptJS, std::string(BRANDING_UNSUPPORTED));
        brandFooter = Poco::format(footerPage, key.data(), Poco::DateTimeFormatter::format(key.expiry(), Poco::DateTimeFormat::RFC822_FORMAT));
    }
#endif

    Poco::replaceInPlace(adminFile, std::string("<!--%BRANDING_JS%-->"), brandJS);
    Poco::replaceInPlace(adminFile, std::string("<!--%FOOTER%-->"), brandFooter);
    Poco::replaceInPlace(adminFile, std::string("%VERSION%"), std::string(LOOLWSD_VERSION_HASH));
    Poco::replaceInPlace(adminFile, std::string("%SERVICE_ROOT%"), LOOLWSD::ServiceRoot);

    // Ask UAs to block if they detect any XSS attempt
    response.add("X-XSS-Protection", "1; mode=block");
    // No referrer-policy
    response.add("Referrer-Policy", "no-referrer");
    response.add("X-Content-Type-Options", "nosniff");
    response.set("User-Agent", HTTP_AGENT_STRING);
    response.set("Date", Util::getHttpTimeNow());

    response.setContentType("text/html");
    response.setChunkedTransferEncoding(false);

    std::ostringstream oss;
    response.write(oss);
    oss << adminFile;
    socket->send(oss.str());
}

/* vim:set shiftwidth=4 softtabstop=4 expandtab: */
