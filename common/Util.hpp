/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4; fill-column: 100 -*- */
/*
 * This file is part of the LibreOffice project.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

#ifndef INCLUDED_UTIL_HPP
#define INCLUDED_UTIL_HPP

#include <cassert>
#include <cerrno>
#include <cstddef>
#include <cstring>
#include <atomic>
#include <functional>
#include <memory>
#include <mutex>
#include <set>
#include <sstream>
#include <string>

#include <memory.h>

#ifndef __linux
#include <thread>
#endif

#include <Poco/File.h>
#include <Poco/Path.h>
#include <Poco/Process.h>
#include <Poco/RegularExpression.h>

#define LOK_USE_UNSTABLE_API
#include <LibreOfficeKit/LibreOfficeKitEnums.h>

namespace Util
{
    namespace rng
    {
        void reseed();
        unsigned getNext();

        /// Generate an array of random characters.
        std::vector<char> getBytes(const size_t length);

        /// Generate a string of random characters.
        std::string getHexString(const size_t length);

        /// Generates a random string suitable for
        /// file/directory names.
        std::string getFilename(const size_t length);
    }

    /// Create randomized temporary directory
    std::string createRandomTmpDir();

#if !MOBILEAPP
    /// Get number of threads in this process or -1 on error
    int getProcessThreadCount();

    /// Spawn a process if stdInput is non-NULL it contains a writable descriptor
    /// to send data to the child.
    int spawnProcess(const std::string &cmd, const std::vector<std::string> &args,
                     int *stdInput = nullptr);
#endif

    /// Hex to unsigned char
    bool dataFromHexString(const std::string& hexString, std::vector<unsigned char>& data);
    /// Encode an integral ID into a string, with padding support.
    std::string encodeId(const unsigned number, const int padding = 5);
    /// Decode an integral ID from a string.
    unsigned decodeId(const std::string& str);

    bool windowingAvailable();

#if !defined(BUILDING_TESTS) && !defined(KIT_IN_PROCESS) && !MOBILEAPP

    /// Send a message to all clients.
    void alertAllUsers(const std::string& msg);

    /// Send a 'error:' message with the specified cmd and kind parameters to all connected
    /// clients. This function can be called either in loolwsd or loolkit processes, even if only
    /// loolwsd obviously has contact with the actual clients; in loolkit it will be forwarded to
    /// loolwsd for redistribution. (This function must be implemented separately in each program
    /// that uses it, it is not in Util.cpp.)
    void alertAllUsers(const std::string& cmd, const std::string& kind);
#else

    /// No-op implementation in the test programs
    inline void alertAllUsers(const std::string&)
    {
    }

    /// No-op implementation in the test programs
    inline void alertAllUsers(const std::string&, const std::string&)
    {
    }
#endif

    /// Assert that a lock is already taken.
    template <typename T>
    void assertIsLocked(const T& lock)
    {
#ifdef NDEBUG
        (void) lock;
#else
        assert(lock.owns_lock());
#endif
    }

    inline void assertIsLocked(std::mutex& mtx)
    {
#ifdef NDEBUG
        (void) mtx;
#else
        assert(!mtx.try_lock());
#endif
    }

#if !MOBILEAPP
    /// Print given number of bytes in human-understandable form (KB,MB, etc.)
    std::string getHumanizedBytes(unsigned long nBytes);

    /// Returns the total physical memory (in kB) available in the system
    size_t getTotalSystemMemoryKb();

    /// Returns the process PSS in KB (works only when we have perms for /proc/pid/smaps).
    size_t getMemoryUsagePSS(const Poco::Process::PID pid);

    /// Returns the process RSS in KB.
    size_t getMemoryUsageRSS(const Poco::Process::PID pid);

    /// Returns the RSS and PSS of the current process in KB.
    /// Example: "procmemstats: pid=123 rss=12400 pss=566"
    std::string getMemoryStats(FILE* file);

    size_t getCpuUsage(const Poco::Process::PID pid);

    size_t getStatFromPid(const Poco::Process::PID pid, int ind);
#endif

    std::string replace(std::string s, const std::string& a, const std::string& b);

    std::string formatLinesForLog(const std::string& s);

    void setThreadName(const std::string& s);

    const char *getThreadName();

#ifdef __linux
    pid_t getThreadId();
#else
    std::thread::id getThreadId();
#endif

    /// Get version information
    void getVersionInfo(std::string& version, std::string& hash);

    /// Return a string that is unique across processes and calls.
    std::string UniqueId();

    // Extract all json entries into a map.
    std::map<std::string, std::string> JsonToMap(const std::string& jsonString);

    inline int hexDigitFromChar(char c)
    {
        if (c >= '0' && c <= '9')
            return c - '0';
        else if (c >= 'a' && c <= 'f')
            return c - 'a' + 10;
        else if (c >= 'A' && c <= 'F')
            return c - 'A' + 10;
        else
            return -1;
    }

    /// Dump a lineof data as hex
    inline std::string stringifyHexLine(
                            const std::vector<char> &buffer,
                            unsigned int offset,
                            const unsigned int width = 32)
    {
        char scratch[64];
        std::stringstream os;

        for (unsigned int i = 0; i < width; i++)
        {
            if (i && (i % 8) == 0)
                os << " ";
            if ((offset + i) < buffer.size())
                sprintf (scratch, "%.2x ", (unsigned char)buffer[offset+i]);
            else
                sprintf (scratch, "   ");
            os << scratch;
        }
        os << " | ";

        for (unsigned int i = 0; i < width; i++)
        {
            if ((offset + i) < buffer.size() && ::isprint(buffer[offset+i]))
                sprintf (scratch, "%c", buffer[offset+i]);
            else
                sprintf (scratch, ".");
            os << scratch;
        }

        return os.str();
    }

    /// Dump data as hex and chars to stream
    inline void dumpHex (std::ostream &os, const char *legend, const char *prefix,
                         const std::vector<char> &buffer, bool skipDup = true,
                         const unsigned int width = 32)
    {
        unsigned int j;
        char scratch[64];
        int skip = 0;
        std::string lastLine;

        os << legend;
        for (j = 0; j < buffer.size() + width - 1; j += width)
        {
            sprintf (scratch, "%s0x%.4x  ", prefix, j);
            os << scratch;

            std::string line = stringifyHexLine(buffer, j, width);
            if (skipDup && lastLine == line)
                skip++;
            else {
                if (skip > 0)
                {
                    os << "... dup " << skip - 1 << "...";
                    skip = 0;
                }
                else
                    os << line;
            }
            lastLine.swap(line);

            os << "\n";
        }
        os.flush();
    }

    inline std::string dumpHex (const char *legend, const char *prefix,
                                const std::vector<char>::iterator &startIt,
                                const std::vector<char>::iterator &endIt,
                                bool skipDup = true, const unsigned int width = 32)
    {
        std::ostringstream oss;
        std::vector<char> data(startIt, endIt);
        dumpHex(oss, legend, prefix, data, skipDup, width);
        return oss.str();
    }

    /// Trim spaces from the left. Just spaces.
    inline std::string& ltrim(std::string& s)
    {
        const size_t pos = s.find_first_not_of(' ');
        if (pos != std::string::npos)
        {
            s = s.substr(pos);
        }

        return s;
    }

    /// Trim spaces from the left and copy. Just spaces.
    inline std::string ltrimmed(const std::string& s)
    {
        const size_t pos = s.find_first_not_of(' ');
        if (pos != std::string::npos)
        {
            return s.substr(pos);
        }

        return s;
    }

    /// Trim spaces from both left and right. Just spaces.
    inline std::string& trim(std::string& s)
    {
        const size_t first = s.find_first_not_of(' ');
        const size_t last = s.find_last_not_of(' ');
        if (first != std::string::npos)
        {
            if (last != std::string::npos)
            {
                s = s.substr(first, last + 1 - first);
            }
            else
            {
                s = s.substr(first);
            }
        }
        else
        {
            if (last != std::string::npos)
            {
                s = s.substr(0, last + 1);
            }
            else
            {
                s.clear();
            }
        }

        return s;
    }

    /// Trim spaces from both left and right and copy. Just spaces.
    inline std::string trimmed(const std::string& s)
    {
        const size_t first = s.find_first_not_of(' ');
        const size_t last = s.find_last_not_of(' ');
        if (first != std::string::npos)
        {
            if (last != std::string::npos)
            {
                return s.substr(first, last + 1 - first);
            }

            return s.substr(first);
        }

        if (last != std::string::npos)
        {
            return s.substr(0, last + 1);
        }

        return std::string();
    }

    /// Trim spaces from left and right. Just spaces.
    inline std::string trimmed(const char* s)
    {
        return trimmed(std::string(s));
    }

    /// Return true iff s starts with t.
    inline bool startsWith(const std::string& s, const std::string& t)
    {
        return s.length() >= t.length() && memcmp(s.c_str(), t.c_str(), t.length()) == 0;
    }

    /// Return true iff s starts with t.
    inline bool startsWith(const std::string& s, const char* t)
    {
        if (t != nullptr && !s.empty())
        {
            const size_t len = std::strlen(t);
            return s.length() >= len && memcmp(s.c_str(), t, len) == 0;
        }

        return false;
    }

#ifdef IOS

    inline void *memrchr(const void *s, int c, size_t n)
    {
        char *p = (char*)s + n - 1;
        while (p >= (char*)s)
        {
            if (*p == c)
                return p;
            p--;
        }
        return nullptr;
    }

#if 0

// Unit test for the above memrchr()

int main(int argc, char**argv)
{
  int success = 1;
  char *s;
  char *p;

#define TEST(s_,c,n,e) \
  s = s_; \
  printf("memrchr(\"%s\",'%c',%d)=",s,c,n); \
  p = memrchr(s, c, n); \
  if (p) \
    printf("\"%s\"", p); \
  else \
    printf("NULL"); \
  if (p == e) \
    printf(" OK\n"); \
  else \
    { \
      printf(" FAIL\n"); \
      success = 0; \
    }

  TEST("abc", 'x', 0, NULL);
  TEST("abc", 'x', 1, NULL);
  TEST("abc", 'x', 3, NULL);
  TEST("abc", 'a', 0, NULL);
  TEST("abc", 'a', 1, s);
  TEST("abc", 'a', 3, s);
  TEST("abc", 'b', 0, NULL);
  TEST("abc", 'b', 1, NULL);
  TEST("abc", 'b', 2, s+1);
  TEST("abc", 'b', 3, s+1);
  TEST("abc", 'c', 0, NULL);
  TEST("abc", 'c', 1, NULL);
  TEST("abc", 'c', 2, NULL);
  TEST("abc", 'c', 3, s+2);

  if (success)
    return 0;
  else
    return 1;
}

#endif

#endif

    inline size_t getLastDelimiterPosition(const char* message, const int length, const char delim)
    {
        if (message && length > 0)
        {
            const char *founddelim = static_cast<const char *>(memrchr(message, delim, length));
            const auto size = (founddelim == nullptr ? length : founddelim - message);
            return size;
        }

        return 0;
    }

    /// Return the symbolic name for an errno value, or in decimal if not handled here.
    inline std::string symbolicErrno(int e)
    {
        // Errnos from <asm-generic/errno-base.h> and <asm-generic/errno.h> on Linux.
        switch (e)
        {
        case EPERM: return "EPERM";
        case ENOENT: return "ENOENT";
        case ESRCH: return "ESRCH";
        case EINTR: return "EINTR";
        case EIO: return "EIO";
        case ENXIO: return "ENXIO";
        case E2BIG: return "E2BIG";
        case ENOEXEC: return "ENOEXEC";
        case EBADF: return "EBADF";
        case ECHILD: return "ECHILD";
        case EAGAIN: return "EAGAIN";
        case ENOMEM: return "ENOMEM";
        case EACCES: return "EACCES";
        case EFAULT: return "EFAULT";
        case ENOTBLK: return "ENOTBLK";
        case EBUSY: return "EBUSY";
        case EEXIST: return "EEXIST";
        case EXDEV: return "EXDEV";
        case ENODEV: return "ENODEV";
        case ENOTDIR: return "ENOTDIR";
        case EISDIR: return "EISDIR";
        case EINVAL: return "EINVAL";
        case ENFILE: return "ENFILE";
        case EMFILE: return "EMFILE";
        case ENOTTY: return "ENOTTY";
        case ETXTBSY: return "ETXTBSY";
        case EFBIG: return "EFBIG";
        case ENOSPC: return "ENOSPC";
        case ESPIPE: return "ESPIPE";
        case EROFS: return "EROFS";
        case EMLINK: return "EMLINK";
        case EPIPE: return "EPIPE";
        case EDOM: return "EDOM";
        case ERANGE: return "ERANGE";
        case EDEADLK: return "EDEADLK";
        case ENAMETOOLONG: return "ENAMETOOLONG";
        case ENOLCK: return "ENOLCK";
        case ENOSYS: return "ENOSYS";
        case ENOTEMPTY: return "ENOTEMPTY";
        case ELOOP: return "ELOOP";
        case ENOMSG: return "ENOMSG";
        case EIDRM: return "EIDRM";
#ifdef ECHRNG
        case ECHRNG: return "ECHRNG";
#endif
#ifdef EL2NSYNC
        case EL2NSYNC: return "EL2NSYNC";
#endif
#ifdef EL3HLT
        case EL3HLT: return "EL3HLT";
#endif
#ifdef EL3RST
        case EL3RST: return "EL3RST";
#endif
#ifdef ELNRNG
        case ELNRNG: return "ELNRNG";
#endif
#ifdef EUNATCH
        case EUNATCH: return "EUNATCH";
#endif
#ifdef ENOCSI
        case ENOCSI: return "ENOCSI";
#endif
#ifdef EL2HLT
        case EL2HLT: return "EL2HLT";
#endif
#ifdef EBADE
        case EBADE: return "EBADE";
#endif
#ifdef EBADR
        case EBADR: return "EBADR";
#endif
#ifdef EXFULL
        case EXFULL: return "EXFULL";
#endif
#ifdef ENOANO
        case ENOANO: return "ENOANO";
#endif
#ifdef EBADRQC
        case EBADRQC: return "EBADRQC";
#endif
#ifdef EBADSLT
        case EBADSLT: return "EBADSLT";
#endif
#ifdef EBFONT
        case EBFONT: return "EBFONT";
#endif
        case ENOSTR: return "ENOSTR";
        case ENODATA: return "ENODATA";
        case ETIME: return "ETIME";
        case ENOSR: return "ENOSR";
#ifdef ENONET
        case ENONET: return "ENONET";
#endif
#ifdef ENOPKG
        case ENOPKG: return "ENOPKG";
#endif
        case EREMOTE: return "EREMOTE";
        case ENOLINK: return "ENOLINK";
#ifdef EADV
        case EADV: return "EADV";
#endif
#ifdef ESRMNT
        case ESRMNT: return "ESRMNT";
#endif
#ifdef ECOMM
        case ECOMM: return "ECOMM";
#endif
        case EPROTO: return "EPROTO";
        case EMULTIHOP: return "EMULTIHOP";
#ifdef EDOTDOT
        case EDOTDOT: return "EDOTDOT";
#endif
        case EBADMSG: return "EBADMSG";
        case EOVERFLOW: return "EOVERFLOW";
#ifdef ENOTUNIQ
        case ENOTUNIQ: return "ENOTUNIQ";
#endif
#ifdef EBADFD
        case EBADFD: return "EBADFD";
#endif
#ifdef EREMCHG
        case EREMCHG: return "EREMCHG";
#endif
#ifdef ELIBACC
        case ELIBACC: return "ELIBACC";
#endif
#ifdef ELIBBAD
        case ELIBBAD: return "ELIBBAD";
#endif
#ifdef ELIBSCN
        case ELIBSCN: return "ELIBSCN";
#endif
#ifdef ELIBMAX
        case ELIBMAX: return "ELIBMAX";
#endif
#ifdef ELIBEXEC
        case ELIBEXEC: return "ELIBEXEC";
#endif
        case EILSEQ: return "EILSEQ";
#ifdef ERESTART
        case ERESTART: return "ERESTART";
#endif
#ifdef ESTRPIPE
        case ESTRPIPE: return "ESTRPIPE";
#endif
        case EUSERS: return "EUSERS";
        case ENOTSOCK: return "ENOTSOCK";
        case EDESTADDRREQ: return "EDESTADDRREQ";
        case EMSGSIZE: return "EMSGSIZE";
        case EPROTOTYPE: return "EPROTOTYPE";
        case ENOPROTOOPT: return "ENOPROTOOPT";
        case EPROTONOSUPPORT: return "EPROTONOSUPPORT";
        case ESOCKTNOSUPPORT: return "ESOCKTNOSUPPORT";
        case EOPNOTSUPP: return "EOPNOTSUPP";
        case EPFNOSUPPORT: return "EPFNOSUPPORT";
        case EAFNOSUPPORT: return "EAFNOSUPPORT";
        case EADDRINUSE: return "EADDRINUSE";
        case EADDRNOTAVAIL: return "EADDRNOTAVAIL";
        case ENETDOWN: return "ENETDOWN";
        case ENETUNREACH: return "ENETUNREACH";
        case ENETRESET: return "ENETRESET";
        case ECONNABORTED: return "ECONNABORTED";
        case ECONNRESET: return "ECONNRESET";
        case ENOBUFS: return "ENOBUFS";
        case EISCONN: return "EISCONN";
        case ENOTCONN: return "ENOTCONN";
        case ESHUTDOWN: return "ESHUTDOWN";
        case ETOOMANYREFS: return "ETOOMANYREFS";
        case ETIMEDOUT: return "ETIMEDOUT";
        case ECONNREFUSED: return "ECONNREFUSED";
        case EHOSTDOWN: return "EHOSTDOWN";
        case EHOSTUNREACH: return "EHOSTUNREACH";
        case EALREADY: return "EALREADY";
        case EINPROGRESS: return "EINPROGRESS";
        case ESTALE: return "ESTALE";
#ifdef EUCLEAN
        case EUCLEAN: return "EUCLEAN";
#endif
#ifdef ENOTNAM
        case ENOTNAM: return "ENOTNAM";
#endif
#ifdef ENAVAIL
        case ENAVAIL: return "ENAVAIL";
#endif
#ifdef EISNAM
        case EISNAM: return "EISNAM";
#endif
#ifdef EREMOTEIO
        case EREMOTEIO: return "EREMOTEIO";
#endif
        case EDQUOT: return "EDQUOT";
#ifdef ENOMEDIUM
        case ENOMEDIUM: return "ENOMEDIUM";
#endif
#ifdef EMEDIUMTYPE
        case EMEDIUMTYPE: return "EMEDIUMTYPE";
#endif
        case ECANCELED: return "ECANCELED";
#ifdef ENOKEY
        case ENOKEY: return "ENOKEY";
#endif
#ifdef EKEYEXPIRED
        case EKEYEXPIRED: return "EKEYEXPIRED";
#endif
#ifdef EKEYREVOKED
        case EKEYREVOKED: return "EKEYREVOKED";
#endif
#ifdef EKEYREJECTED
        case EKEYREJECTED: return "EKEYREJECTED";
#endif
        case EOWNERDEAD: return "EOWNERDEAD";
        case ENOTRECOVERABLE: return "ENOTRECOVERABLE";
#ifdef ERFKILL
        case ERFKILL: return "ERFKILL";
#endif
#ifdef EHWPOISON
        case EHWPOISON: return "EHWPOISON";
#endif
        default: return std::to_string(e);
        }
    }

    inline size_t getDelimiterPosition(const char* message, const int length, const char delim)
    {
        if (message && length > 0)
        {
            const char *founddelim = static_cast<const char *>(std::memchr(message, delim, length));
            const size_t size = (founddelim == nullptr ? length : founddelim - message);
            return size;
        }

        return 0;
    }

    inline
    std::string getDelimitedInitialSubstring(const char *message, const int length, const char delim)
    {
        const size_t size = getDelimiterPosition(message, length, delim);
        return std::string(message, size);
    }

    /// Split a string in two at the delimeter, removing it.
    inline
    std::pair<std::string, std::string> split(const char* s, const int length, const char delimeter = ' ', bool removeDelim = true)
    {
        const size_t size = getDelimiterPosition(s, length, delimeter);

        std::string after;
        int after_pos = size + (removeDelim? 1: 0);
        if (after_pos < length)
            after = std::string(s + after_pos, length - after_pos);

        return std::make_pair(std::string(s, size), after);
    }

    /// Split a string in two at the delimeter, removing it.
    inline
    std::pair<std::string, std::string> split(const std::string& s, const char delimeter = ' ', bool removeDelim = true)
    {
        return split(s.c_str(), s.size(), delimeter, removeDelim);
    }

    /// Split a string in two at the delimeter.
    inline
    std::pair<std::string, std::string> splitLast(const char* s, const int length, const char delimeter = ' ', bool removeDelim = true)
    {
        const size_t size = getLastDelimiterPosition(s, length, delimeter);

        std::string after;
        int after_pos = size + (removeDelim? 1: 0);
        if (after_pos < length)
            after = std::string(s + after_pos, length - after_pos);

        return std::make_pair(std::string(s, size), after);
    }

    /// Split a string in two at the delimeter, removing it.
    inline
    std::pair<std::string, std::string> splitLast(const std::string& s, const char delimeter = ' ', bool removeDelim = true)
    {
        return splitLast(s.c_str(), s.size(), delimeter, removeDelim);
    }

    /// Splits a URL into path (with protocol), filename, extension, parameters.
    /// All components are optional, depending on what the URL represents (can be a unix path).
    std::tuple<std::string, std::string, std::string, std::string> splitUrl(const std::string& url);

    /// Check for the URI scheme validity.
    /// For now just a basic sanity check, can be extended if necessary.
    bool isValidURIScheme(const std::string& scheme);

    /// Check for the URI host validity.
    /// For now just a basic sanity check, can be extended if necessary.
    bool isValidURIHost(const std::string& host);

    /// Anonymize a sensitive string to avoid leaking it.
    /// Called on strings to be logged or exposed.
    std::string anonymize(const std::string& text);

    /// Sets the anonymized version of a given plain-text string.
    /// After this, 'anonymize(plain)' will return 'anonymized'.
    void mapAnonymized(const std::string& plain, const std::string& anonymized);

    /// Anonymize the basename of filenames only, preserving the path and extension.
    std::string anonymizeUrl(const std::string& url);

    /// Extract and return the filename given a url or path.
    std::string getFilenameFromURL(const std::string& url);

    /// Given one or more patterns to allow, and one or more to deny,
    /// the match member will return true if, and only if, the subject
    /// matches the allowed list, but not the deny.
    /// By default, everything is denied.
    class RegexListMatcher
    {
    public:
        RegexListMatcher() :
            _allowByDefault(false)
        {
        }

        RegexListMatcher(const bool allowByDefault) :
            _allowByDefault(allowByDefault)
        {
        }

        RegexListMatcher(std::initializer_list<std::string> allowed) :
            _allowByDefault(false),
            _allowed(allowed)
        {
        }

        RegexListMatcher(std::initializer_list<std::string> allowed,
                         std::initializer_list<std::string> denied) :
            _allowByDefault(false),
            _allowed(allowed),
            _denied(denied)
        {
        }

        RegexListMatcher(const bool allowByDefault,
                         std::initializer_list<std::string> denied) :
            _allowByDefault(allowByDefault),
            _denied(denied)
        {
        }

        void allow(const std::string& pattern) { _allowed.insert(pattern); }
        void deny(const std::string& pattern)
        {
            _allowed.erase(pattern);
            _denied.insert(pattern);
        }

        void clear()
        {
            _allowed.clear();
            _denied.clear();
        }

        bool match(const std::string& subject) const
        {
            return (_allowByDefault || match(_allowed, subject)) && !match(_denied, subject);
        }

    private:
        static bool match(const std::set<std::string>& set, const std::string& subject)
        {
            if (set.find(subject) != set.end())
            {
                return true;
            }

            // Not a perfect match, try regex.
            for (const auto& value : set)
            {
                try
                {
                    // Not performance critical to warrant caching.
                    Poco::RegularExpression re(value, Poco::RegularExpression::RE_CASELESS);
                    Poco::RegularExpression::Match reMatch;

                    // Must be a full match.
                    if (re.match(subject, reMatch) && reMatch.offset == 0 && reMatch.length == subject.size())
                    {
                        return true;
                    }
                }
                catch (const std::exception& exc)
                {
                    // Nothing to do; skip.
                }
            }

            return false;
        }

    private:
        const bool _allowByDefault;
        std::set<std::string> _allowed;
        std::set<std::string> _denied;
    };

    /// A logical constant that is allowed to initialize
    /// exactly once and checks usage before initialization.
    template <typename T>
    class RuntimeConstant
    {
        T _value;
        std::atomic<bool> _initialized;

    public:
        RuntimeConstant()
            : _value()
            , _initialized(false)
        {
        }

        /// Use a compile-time const instead.
        RuntimeConstant(const T& value) = delete;

        const T& get()
        {
            if (_initialized)
            {
                return _value;
            }

            throw std::runtime_error("RuntimeConstant instance read before being initialized.");
        }

        void set(const T& value)
        {
            assert(!_initialized);

            _initialized = true;
            _value = value;
        }
    };

    //// Return current time in HTTP format.
    std::string getHttpTimeNow();
} // end namespace Util

#endif

/* vim:set shiftwidth=4 softtabstop=4 expandtab: */
