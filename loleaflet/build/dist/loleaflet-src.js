/* -*- js-indent-level: 8 -*- */
/*
 Leaflet 56eb8e64b, a JS library for interactive maps. http://leafletjs.com
 (c) 2010-2015 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
(function (window, document, undefined) {

/* -*- js-indent-level: 8 -*- */
var L = {
	version: '0.8-dev'
};

function expose() {
	var oldL = window.L;

	L.noConflict = function () {
		window.L = oldL;
		return this;
	};

	window.L = L;
}

// define Leaflet for Node module pattern loaders, including Browserify
if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = L;

// define Leaflet as an AMD module
} else if (typeof define === 'function' && define.amd) {
	define(L);
}

// define Leaflet as a global L variable, saving the original L to restore later if needed
if (typeof window !== 'undefined') {
	expose();
}

/* -*- js-indent-level: 8 -*- */

/* global vex _ getParameterByName */
var errorMessages = {};

vex.defaultOptions.className = 'vex-theme-plain';

var lang = getParameterByName('lang');
if (lang) {
	String.locale = lang;
}

errorMessages.diskfull = _('No disk space left on server, please contact the server administrator to continue.');
errorMessages.emptyhosturl = _('The host URL is empty. The loolwsd server is probably misconfigured, please contact the administrator.');
errorMessages.limitreached = _('This is an unsupported version of {productname}. To avoid the impression that it is suitable for deployment in enterprises, this message appears when more than {docs} documents or {connections} connections are in use concurrently');
errorMessages.infoandsupport = _('More information and support');
errorMessages.limitreachedprod = _('This service is limited to %0 documents, and %1 connections total by the admin. This limit has been reached. Please try again later.');
errorMessages.serviceunavailable = _('Service is unavailable. Please try again later and report to your administrator if the issue persists.');
errorMessages.unauthorized = _('Unauthorized WOPI host. Please try again later and report to your administrator if the issue persists.');
errorMessages.wrongwopisrc = _('Wrong or missing WOPISrc parameter, please contact support.');
errorMessages.sessionexpiry = _('Your session will expire in %time. Please save your work and refresh the session (or webpage) to continue.');
errorMessages.sessionexpired = _('Your session has been expired. Further changes to document might not be saved. Please refresh the session (or webpage) to continue.');
errorMessages.faileddocloading = _('Failed to load the document. Please ensure the file type is supported and not corrupted, and try again.');
errorMessages.invalidLink = _('Invalid link: \'%url\'');
errorMessages.leaving = _('You are leaving the editor, are you sure you want to visit %url?');

errorMessages.storage = {
	loadfailed: _('Failed to read document from storage. Please contact your storage server (%storageserver) administrator.'),
	savediskfull: _('Save failed due to no disk space left on storage server. Document will now be read-only. Please contact the server (%storageserver) administrator to continue editing.'),
	saveunauthorized: _('Document cannot be saved due to expired or invalid access token.'),
	savefailed: _('Document cannot be saved. Check your permissions or contact the storage server administrator.'),
	renamefailed: _('Document cannot be renamed. Check your permissions or contact the storage server administrator.')
};

if (typeof window !== 'undefined') {
	window.errorMessages = errorMessages;
}

// Don't modify, generated using unocommands.py

var unoCommandsArray = {
	AcceptAllTrackedChanges:{text:{menu:_('Accept All'),},},
	AcceptTrackedChanges:{text:{menu:_('~Manage...'),},},
	AlignBlock:{spreadsheet:{menu:_('Justified'),},},
	AlignHorizontalCenter:{spreadsheet:{menu:_('Align Center'),},text:{menu:_('Center Horizontal'),},},
	AlignLeft:{spreadsheet:{menu:_('Align Left'),},text:{menu:_('Align Left'),},},
	AlignRight:{spreadsheet:{menu:_('Align Right'),},text:{menu:_('Align Right'),},},
	AnchorMenu:{global:{menu:_('Anc~hor'),},},
	ArrangeFrameMenu:{text:{menu:_('Arrange'),},},
	ArrangeMenu:{global:{menu:_('A~rrange'),},presentation:{menu:_('~Arrange'),},},
	AutoFormatMenu:{text:{menu:_('AutoCorr~ect'),},},
	BackColor:{text:{menu:_('Highlight Color'),},},
	BackgroundColor:{global:{menu:_('Background Color'),},},
	Bold:{global:{menu:_('Bold'),},},
	BringToFront:{global:{menu:_('~Bring to Front'),},},
	CenterPara:{global:{context:_('Align Center'),menu:_('Center'),},},
	ChangeCaseRotateCase:{global:{menu:_('Cycle Case'),},},
	ChangeCaseToLower:{global:{menu:_('~lowercase'),},},
	ChangeCaseToSentenceCase:{global:{menu:_('~Sentence case'),},},
	ChangeCaseToTitleCase:{global:{menu:_('~Capitalize Every Word'),},},
	ChangeCaseToToggleCase:{global:{menu:_('~tOGGLE cASE'),},},
	ChangeCaseToUpper:{global:{menu:_('~UPPERCASE'),},},
	ChangesMenu:{global:{menu:_('Track Chan~ges'),},},
	ClearOutline:{global:{menu:_('~Remove Outline'),},},
	ColorScaleFormatDialog:{spreadsheet:{menu:_('Color Scale...'),},},
	CommonAlignBottom:{global:{menu:_('Bottom'),},},
	CommonAlignHorizontalCenter:{global:{menu:_('Centered'),},},
	CommonAlignJustified:{global:{menu:_('Justified'),},},
	CommonAlignLeft:{global:{menu:_('Left'),},},
	CommonAlignRight:{global:{menu:_('Right'),},},
	CommonAlignTop:{global:{menu:_('Top'),},},
	CommonAlignVerticalCenter:{global:{menu:_('Center'),},},
	CondDateFormatDialog:{spreadsheet:{menu:_('Date...'),},},
	ConditionalFormatDialog:{spreadsheet:{menu:_('Condition...'),},},
	ConditionalFormatManagerDialog:{spreadsheet:{menu:_('Manage...'),},},
	ConditionalFormatMenu:{spreadsheet:{menu:_('C~onditional'),},},
	ContinueNumbering:{text:{menu:_('Continue previous numbering'),},},
	ControlCodes:{text:{menu:_('For~matting Marks'),},},
	Copy:{global:{menu:_('Cop~y'),},},
	CopyHyperlinkLocation:{text:{menu:_('Copy Hyperlink Location'),},},
	Cut:{global:{menu:_('~Cut'),},},
	DataBarFormatDialog:{spreadsheet:{menu:_('Data Bar...'),},},
	DataFilterAutoFilter:{spreadsheet:{menu:_('Auto~Filter'),},},
	DataFilterHideAutoFilter:{spreadsheet:{menu:_('~Hide AutoFilter'),},},
	DataFilterRemoveFilter:{spreadsheet:{menu:_('~Reset Filter'),},},
	DataFilterSpecialFilter:{spreadsheet:{menu:_('~Advanced Filter...'),},},
	DataFilterStandardFilter:{spreadsheet:{menu:_('~Standard Filter...'),},},
	DataMenu:{global:{menu:_('~Data'),},},
	DataSort:{spreadsheet:{menu:_('~Sort...'),},},
	DecrementIndent:{global:{context:_('Decrease Indent'),menu:_('Decrease Indent'),},},
	DecrementLevel:{text:{menu:_('Demote One Level'),},},
	DecrementSubLevels:{text:{menu:_('Demote One Level With Subpoints'),},},
	DefaultBullet:{global:{context:_('Toggle Bulleted List'),menu:_('~Bulleted List'),},},
	DefaultNumbering:{global:{context:_('Toggle Numbered List'),menu:_('~Numbered List'),},},
	DelBreakMenu:{spreadsheet:{menu:_('Delete Page ~Break'),},},
	DeleteAllNotes:{global:{menu:_('Delete All Comments'),},spreadsheet:{menu:_('Delete All Comments'),},},
	DeleteAuthor:{global:{menu:_('Delete All Comments by This Author'),},},
	DeleteColumnbreak:{spreadsheet:{menu:_('~Column Break'),},},
	DeleteColumns:{presentation:{menu:_('Delete Column'),},spreadsheet:{menu:_('Delete Columns'),},text:{menu:_('~Columns'),},},
	DeleteComment:{global:{menu:_('Delete Comment'),},},
	DeleteRowbreak:{spreadsheet:{menu:_('~Row Break'),},},
	DeleteRows:{presentation:{menu:_('Delete Row'),},spreadsheet:{menu:_('Delete Rows'),},text:{menu:_('~Rows'),},},
	DeleteSlide:{presentation:{menu:_('~Delete Slide'),},},
	DeleteTable:{text:{menu:_('~Table'),},},
	DownSearch:{global:{menu:_('Find Next'),},},
	DuplicateSlide:{presentation:{menu:_('Duplicate ~Slide'),},},
	EditHeaderAndFooter:{spreadsheet:{menu:_('~Headers and Footers...'),},},
	EditMenu:{global:{menu:_('~Edit'),},},
	EditStyle:{global:{menu:_('~Edit Style...'),},presentation:{menu:_('E~dit Style...'),},},
	EntireCell:{text:{menu:_('C~ell'),},},
	EntireColumn:{presentation:{menu:_('Select Column'),},text:{menu:_('~Column'),},},
	EntireRow:{presentation:{menu:_('Select Row'),},text:{menu:_('~Row'),},},
	FilterMenu:{spreadsheet:{menu:_('More ~Filters'),},},
	FontColor:{global:{menu:_('Font Color'),},text:{menu:_('Font Color'),},},
	FontDialog:{global:{menu:_('C~haracter...'),},},
	FormatArea:{global:{menu:_('A~rea...'),},},
	FormatBulletsMenu:{global:{menu:_('Lis~ts'),},},
	FormatCellDialog:{spreadsheet:{context:_('~Format Cells...'),menu:_('Ce~lls...'),},},
	FormatColumns:{text:{menu:_('Co~lumns...'),},},
	FormatLine:{global:{menu:_('L~ine...'),},},
	FormatMenu:{global:{menu:_('F~ormat'),},},
	FormatPaintbrush:{global:{context:_('Clone Formatting (double click for multi-selection)'),menu:_('Clone'),},text:{context:_('Clone Formatting (double click and Ctrl or Cmd to alter behavior)'),menu:_('Clone'),},},
	FormatSpacingMenu:{global:{menu:_('~Spacing'),},},
	FormatTextMenu:{global:{menu:_('Te~xt'),},},
	FormattingMarkMenu:{global:{menu:_('Formatting Mark'),},},
	FullScreen:{global:{menu:_('F~ull Screen'),},},
	GoalSeekDialog:{spreadsheet:{menu:_('~Goal Seek...'),},},
	Group:{global:{menu:_('~Group...'),},},
	GroupOutlineMenu:{spreadsheet:{menu:_('~Group and Outline'),},},
	Grow:{global:{menu:_('Increase Size'),},},
	HeaderAndFooter:{presentation:{menu:_('~Header and Footer...'),},},
	HelpMenu:{global:{menu:_('~Help'),},},
	Hide:{spreadsheet:{menu:_('~Hide Sheet'),},},
	HideColumn:{spreadsheet:{context:_('H~ide Columns'),menu:_('~Hide'),},},
	HideDetail:{global:{menu:_('~Hide Details'),},},
	HideRow:{spreadsheet:{context:_('H~ide Rows'),menu:_('H~ide'),},},
	HyperlinkDialog:{global:{context:_('Insert Hyperlink'),menu:_('~Hyperlink...'),},},
	IconSetFormatDialog:{spreadsheet:{menu:_('Icon Set...'),},},
	IncrementIndent:{global:{context:_('Increase Indent'),menu:_('Increase Indent'),},},
	IncrementLevel:{text:{menu:_('Promote One Level'),},},
	IncrementSubLevels:{text:{menu:_('Promote One Level With Subpoints'),},},
	IndexesMenu:{text:{menu:_('Table of Contents and Inde~x'),},},
	InsertAnnotation:{global:{context:_('Insert Comment'),menu:_('Comme~nt'),},presentation:{menu:_('Comme~nt'),},spreadsheet:{context:_('Insert Co~mment'),menu:_('Comm~ent'),},},
	InsertAuthorField:{presentation:{menu:_('~Author'),},text:{menu:_('First ~Author'),},},
	InsertAuthoritiesEntry:{text:{menu:_('~Bibliography Entry...'),},},
	InsertBreakMenu:{spreadsheet:{menu:_('Insert Page ~Break'),},},
	InsertColumnBreak:{spreadsheet:{menu:_('~Column Break'),},text:{menu:_('Insert Column Break'),},},
	InsertColumnsAfter:{presentation:{menu:_('Insert Column After'),},spreadsheet:{context:_('Insert Columns ~After'),menu:_('Columns ~After'),},text:{menu:_('Columns ~After'),},},
	InsertColumnsBefore:{presentation:{menu:_('Insert Column Before'),},spreadsheet:{context:_('Insert Columns ~Before'),menu:_('Columns ~Before'),},text:{menu:_('Columns ~Before'),},},
	InsertColumnsMenu:{spreadsheet:{menu:_('Insert Co~lumns'),},},
	InsertDateField:{text:{menu:_('~Date'),},},
	InsertEndnote:{text:{menu:_('~Endnote'),},},
	InsertField:{text:{menu:_('~More Fields...'),},},
	InsertFootnote:{text:{menu:_('~Footnote'),},},
	InsertGraphic:{global:{context:_('Insert Image...'),menu:_('~Image...'),},},
	InsertHardHyphen:{global:{menu:_('Non-br~eaking Hyphen'),},},
	InsertHeaderFooterMenu:{text:{menu:_('He~ader and Footer'),},},
	InsertIndexesEntry:{text:{menu:_('~Index Entry...'),},},
	InsertLRM:{global:{menu:_('~Left-to-right Mark'),},},
	InsertMenu:{global:{menu:_('~Insert'),},},
	InsertNeutralParagraph:{text:{menu:_('Insert Unnumbered Entry'),},},
	InsertNonBreakingSpace:{global:{menu:_('~Non-breaking Space'),},},
	InsertObjectChart:{global:{context:_('Insert Chart'),menu:_('~Chart...'),},},
	InsertPageCountField:{text:{menu:_('Page ~Count'),},},
	InsertPageFooter:{text:{menu:_('Foote~r'),},},
	InsertPageHeader:{text:{menu:_('He~ader'),},},
	InsertPageNumberField:{global:{menu:_('~Page Numbers...'),},text:{menu:_('~Page Number'),},},
	InsertPagebreak:{text:{menu:_('~Page Break'),},},
	InsertRLM:{global:{menu:_('~Right-to-left Mark'),},},
	InsertRowBreak:{spreadsheet:{menu:_('~Row Break'),},},
	InsertRowsAfter:{presentation:{menu:_('Insert Row Below'),},spreadsheet:{context:_('Insert Rows ~Below'),menu:_('Rows ~Below'),},text:{menu:_('Rows ~Below'),},},
	InsertRowsBefore:{presentation:{menu:_('Insert Row Above'),},spreadsheet:{context:_('Insert Rows ~Above'),menu:_('Rows ~Above'),},text:{menu:_('Rows ~Above'),},},
	InsertRowsMenu:{spreadsheet:{menu:_('Insert ~Rows'),},},
	InsertSection:{text:{menu:_('Se~ction...'),},},
	InsertSlide:{presentation:{menu:_('~New Slide'),},},
	InsertSoftHyphen:{global:{menu:_('S~oft Hyphen'),},},
	InsertSymbol:{global:{context:_('Insert Special Character'),menu:_('S~pecial Character...'),},},
	InsertTimeField:{global:{menu:_('Time Field'),},text:{menu:_('~Time'),},},
	InsertTitleField:{text:{menu:_('T~itle'),},},
	InsertTopicField:{text:{menu:_('~Subject'),},},
	InsertZWNBSP:{global:{menu:_('No-width No ~Break'),},},
	InsertZWSP:{global:{menu:_('No-~width Optional Break'),},},
	Italic:{global:{menu:_('Italic'),},},
	JumpDownThisLevel:{text:{menu:_('To Next Paragraph in Level'),},},
	JumpUpThisLevel:{text:{menu:_('To Previous Paragraph in Level'),},},
	JustifyPara:{global:{menu:_('Justified'),},},
	LanguageMenu:{global:{menu:_('Language'),},},
	LayoutStatus:{presentation:{menu:_('Layout'),},},
	LeftPara:{global:{context:_('Align Left'),menu:_('Left'),},},
	MergeCells:{presentation:{menu:_('Merge Cells'),},spreadsheet:{menu:_('Merge Cells'),},text:{menu:_('Merge Cells'),},},
	MoveDown:{text:{menu:_('Move Down'),},},
	MoveDownSubItems:{text:{menu:_('Move Down with Subpoints'),},},
	MoveUp:{text:{menu:_('Move Up'),},},
	MoveUpSubItems:{text:{menu:_('Move Up with Subpoints'),},},
	NextTrackedChange:{text:{menu:_('Next'),},},
	NumberFormatCurrency:{spreadsheet:{context:_('Format as Currency'),menu:_('Currency'),},text:{menu:_('Number Format: Currency'),},},
	NumberFormatDecDecimals:{spreadsheet:{menu:_('Delete Decimal Place'),},},
	NumberFormatIncDecimals:{spreadsheet:{menu:_('Add Decimal Place'),},},
	NumberFormatPercent:{spreadsheet:{context:_('Format as Percent'),menu:_('Percent'),},text:{menu:_('Number Format: Percent'),},},
	NumberingStart:{text:{menu:_('Restart Numbering'),},},
	ObjectBackOne:{global:{menu:_('Back One'),},},
	ObjectForwardOne:{global:{menu:_('Forward One'),},},
	OnlineAutoFormat:{text:{menu:_('~While Typing'),},},
	OpenHyperlinkOnCursor:{global:{menu:_('Open Hyperlink'),},},
	OutlineBullet:{global:{menu:_('~Bullets and Numbering...'),},},
	OutlineFont:{global:{menu:_('Outline'),},},
	Overline:{global:{menu:_('Overline'),},},
	PageDialog:{global:{menu:_('~Page...'),},text:{menu:_('~Page...'),},},
	PageDown:{text:{menu:_('Next Page'),},},
	PageFormatDialog:{spreadsheet:{menu:_('~Page...'),},},
	PageSetup:{presentation:{menu:_('Properties...'),},},
	PageUp:{text:{menu:_('Previous Page'),},},
	ParaLeftToRight:{global:{menu:_('Left-To-Right'),},},
	ParaRightToLeft:{global:{menu:_('Right-To-Left'),},},
	ParagraphDialog:{global:{menu:_('P~aragraph...'),},},
	ParaspaceDecrease:{global:{context:_('Decrease Paragraph Spacing'),menu:_('Decrease Paragraph Spacing'),},},
	ParaspaceIncrease:{global:{context:_('Increase Paragraph Spacing'),menu:_('Increase Paragraph Spacing'),},},
	Paste:{global:{menu:_('~Paste'),},},
	PickList:{global:{menu:_('~File'),},},
	PreviousTrackedChange:{text:{menu:_('Pr~evious'),},},
	Print:{global:{menu:_('~Print...'),},},
	RecalcPivotTable:{spreadsheet:{menu:_('~Refresh'),},},
	Redo:{global:{menu:_('~Redo'),},},
	RejectAllTrackedChanges:{text:{menu:_('Reject All'),},},
	Remove:{spreadsheet:{menu:_('~Delete Sheet...'),},},
	RemoveHyperlink:{text:{menu:_('Remove Hyperlink'),},},
	RemoveTableOf:{text:{menu:_('Delete index'),},},
	RenameTable:{spreadsheet:{menu:_('~Rename Sheet...'),},},
	ReplyComment:{global:{menu:_('Reply Comment'),},},
	ResetAttributes:{global:{menu:_('~Clear Direct Formatting'),},spreadsheet:{context:_('Clear Direct Formatting'),menu:_('Clear ~Direct Formatting'),},text:{context:_('Clear Direct Formatting'),menu:_('Clear ~Direct Formatting'),},},
	RightPara:{global:{context:_('Align Right'),menu:_('Right'),},},
	RotateLeft:{text:{menu:_('Rotate 90° ~Left'),},},
	RotateMenu:{global:{menu:_('Rot~ate'),},},
	RotateRight:{text:{menu:_('Rotate 90° ~Right'),},},
	Save:{global:{menu:_('~Save'),},},
	SaveAs:{global:{menu:_('Save ~As...'),},},
	SearchDialog:{global:{menu:_('Find & Rep~lace...'),},},
	SelectAll:{global:{menu:_('Select ~All'),},},
	SelectTable:{presentation:{menu:_('~Select...'),},text:{menu:_('~Table'),},},
	SendToBack:{global:{menu:_('~Send to Back'),},},
	SetAnchorAtChar:{text:{menu:_('To ~Character'),},},
	SetAnchorToChar:{text:{menu:_('As C~haracter'),},},
	SetAnchorToFrame:{text:{menu:_('To ~Frame'),},},
	SetAnchorToPage:{spreadsheet:{menu:_('To P~age'),},text:{menu:_('To P~age'),},},
	SetAnchorToPara:{text:{menu:_('To ~Paragraph'),},},
	SetLanguageAllTextMenu:{global:{menu:_('For All Text'),},},
	SetLanguageParagraphMenu:{global:{menu:_('For Paragraph'),},},
	SetLanguageSelectionMenu:{global:{menu:_('For Selection'),},},
	SetOptimalColumnWidth:{presentation:{menu:_('Optimal Column Width'),},spreadsheet:{menu:_('~Optimal Width...'),},text:{menu:_('Optimal Column Width'),},},
	SetOptimalRowHeight:{presentation:{menu:_('Optimal Row Height'),},spreadsheet:{menu:_('~Optimal Height...'),},text:{menu:_('Optimal Row Height'),},},
	Shadowed:{global:{menu:_('Shadow'),},},
	SheetMenu:{spreadsheet:{menu:_('~Sheet'),},},
	Show:{spreadsheet:{menu:_('~Show Sheet...'),},},
	ShowColumn:{spreadsheet:{context:_('S~how Columns'),menu:_('~Show'),},},
	ShowDetail:{global:{menu:_('~Show Details'),},},
	ShowRow:{spreadsheet:{context:_('Sho~w Rows'),menu:_('~Show'),},},
	ShowTrackedChanges:{text:{menu:_('~Show'),},},
	Shrink:{global:{menu:_('Decrease Size'),},},
	SlideMenu:{presentation:{menu:_('S~lide'),},},
	SmallCaps:{global:{menu:_('Small capitals'),},},
	SortAscending:{spreadsheet:{menu:_('Sort Ascending'),},},
	SortDescending:{spreadsheet:{menu:_('Sort Descending'),},},
	SpacePara1:{global:{menu:_('Line Spacing: 1'),},},
	SpacePara15:{global:{menu:_('Line Spacing: 1.5'),},},
	SpacePara2:{global:{menu:_('Line Spacing: 2'),},},
	SpellOnline:{global:{menu:_('~Automatic Spell Checking'),},},
	SpellingAndGrammarDialog:{global:{menu:_('~Spelling...'),},},
	SplitCell:{presentation:{menu:_('Split Cells'),},spreadsheet:{menu:_('Split Cells'),},text:{menu:_('Split Cells...'),},},
	Strikeout:{global:{menu:_('Strikethrough'),},},
	SubScript:{global:{menu:_('Subscript'),},text:{menu:_('Subscript'),},},
	SuperScript:{global:{menu:_('Superscript'),},text:{menu:_('Superscript'),},},
	TableDeleteMenu:{global:{menu:_('~Delete'),},},
	TableDialog:{presentation:{menu:_('~Properties...'),},text:{menu:_('~Properties...'),},},
	TableInsertMenu:{global:{menu:_('~Insert'),},},
	TableMenu:{global:{menu:_('T~able'),},},
	TableSelectMenu:{text:{menu:_('~Select'),},},
	TaskPaneInsertPage:{presentation:{menu:_('Insert Slide'),},},
	Text:{global:{context:_('Insert Text Box'),menu:_('~Text Box'),},},
	TextAlign:{global:{menu:_('Alig~n'),},},
	ThesaurusDialog:{global:{menu:_('~Thesaurus...'),},text:{menu:_('~Thesaurus...'),},},
	ToggleMergeCells:{spreadsheet:{menu:_('M~erge and Center Cells'),},},
	ToolsMenu:{global:{menu:_('~Tools'),},},
	TrackChanges:{text:{menu:_('~Record'),},},
	TransformDialog:{global:{menu:_('Position and Si~ze...'),},},
	Underline:{global:{menu:_('Underline'),},},
	UnderlineDouble:{global:{menu:_('Double Underline'),},},
	Undo:{global:{menu:_('~Undo'),},},
	Ungroup:{global:{menu:_('~Ungroup...'),},},
	UpSearch:{global:{menu:_('Find Previous'),},},
	UpdateCurIndex:{text:{context:_('Update index'),menu:_('Current ~Index'),},},
	Validation:{spreadsheet:{menu:_('~Validity...'),},},
	ViewMenu:{global:{menu:_('~View'),},},
	Watermark:{text:{menu:_('Watermark...'),},},
	WordCountDialog:{text:{menu:_('~Word Count...'),},},
	WrapAnchorOnly:{text:{menu:_('~First Paragraph'),},},
	WrapContour:{text:{menu:_('~Contour'),},},
	WrapIdeal:{text:{menu:_('~Optimal Page Wrap'),},},
	WrapLeft:{text:{menu:_('Wrap Left'),},},
	WrapMenu:{text:{menu:_('~Wrap'),},},
	WrapOff:{text:{menu:_('Wrap Off'),},},
	WrapOn:{text:{menu:_('~Page Wrap'),},},
	WrapRight:{text:{menu:_('Wrap Right'),},},
	WrapText:{spreadsheet:{menu:_('Wrap Text'),},},
	WrapThrough:{text:{menu:_('~Wrap Through'),},},
	WrapThroughTransparent:{text:{menu:_('In ~Background'),},},
	ZoomMinus:{global:{menu:_('Zoom Out'),},},
	ZoomPlus:{global:{menu:_('Zoom In'),},},
};

window._UNO = function(string, component, isContext) {
	var command = string.substr(5);
	var context = 'menu';
	if (isContext === true) {
		context = 'context';
	}
	var entry = unoCommandsArray[command];
	if (entry === undefined) {
		return command;
	}
	var componentEntry = entry[component];
	if (componentEntry === undefined) {
		componentEntry = entry['global'];
		if (componentEntry === undefined) {
			return command;
		}
	}
	var text = componentEntry[context];
	if (text === undefined) {
		text = componentEntry['menu'];
		if (text === undefined) {
			return command;
		}
	}

	// Remove access key markers from translated strings
	// 1. access key in parenthesis in case of non-latin scripts
	text = text.replace(/\(~[A-Za-z]\)/, '');
	// 2. remove normal access key
	text = text.replace('~', '');

	return text;
}

!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=190)}([,,,function(t,n,e){var r=e(6),o=e(19),i=e(16),c=e(20),u=e(23),a=function t(n,e,a){var s,f,l,p,v=n&t.F,d=n&t.G,h=n&t.P,m=n&t.B,y=d?r:n&t.S?r[e]||(r[e]={}):(r[e]||{}).prototype,g=d?o:o[e]||(o[e]={}),_=g.prototype||(g.prototype={});for(s in d&&(a=e),a)l=((f=!v&&y&&void 0!==y[s])?y:a)[s],p=m&&f?u(l,r):h&&"function"==typeof l?u(Function.call,l):l,y&&c(y,s,l,n&t.U),g[s]!=l&&i(g,s,p),h&&_[s]!=l&&(_[s]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.ERR_CONNECTION_DESTROYED="ConnectionDestroyed",o=n.ERR_CONNECTION_TIMEOUT="ConnectionTimeout",i=n.ERR_NOT_IN_IFRAME="NotInIframe",c={"http:":"80","https:":"443"},u=/^(https?:)?\/\/([^\/:]+)(:(\d+))?/,a={ERR_CONNECTION_DESTROYED:r,ERR_CONNECTION_TIMEOUT:o,ERR_NOT_IN_IFRAME:i,Promise:function(){try{return window?window.Promise:null}catch(t){return null}}(),debug:!1},s=function(){var t=0;return function(){return++t}}(),f=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];var r;a.debug&&(r=console).log.apply(r,["[Penpal]"].concat(n))},l=function(t){var n=[];return t(function(){n.forEach(function(t){t()})}),{then:function(t){n.push(t)}}},p=function(t){return{name:t.name,message:t.message,stack:t.stack}},v=function(t,n,e,o){var i=n.localName,c=n.local,u=n.remote,l=n.remoteOrigin,p=!1;f(i+": Connecting call sender");var v=function(t){return function(){for(var n=arguments.length,e=Array(n),o=0;o<n;o++)e[o]=arguments[o];if(f(i+": Sending "+t+"() call"),p){var v=new Error("Unable to send "+t+"() call due to destroyed connection");throw v.code=r,v}return new a.Promise(function(n,r){var o=s();c.addEventListener("message",function e(a){if(a.source===u&&a.origin===l&&"reply"===a.data.penpal&&a.data.id===o){f(i+": Received "+t+"() reply"),c.removeEventListener("message",e);var s=a.data.returnValue;a.data.returnValueIsError&&(s=function(t){var n=new Error;return Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(s)),("fulfilled"===a.data.resolution?n:r)(s)}}),u.postMessage({penpal:"call",id:o,methodName:t,args:e},l)})}};o.then(function(){p=!0}),e.reduce(function(t,n){return t[n]=v(n),t},t)},d=function(t,n,e){var r=t.localName,o=t.local,i=t.remote,c=t.remoteOrigin,u=!1;f(r+": Connecting call receiver");var s=function(t){if(t.source===i&&t.origin===c&&"call"===t.data.penpal){var e=t.data,o=e.methodName,s=e.args,l=e.id;if(f(r+": Received "+o+"() call"),o in n){var v=function(t){return function(n){if(f(r+": Sending "+o+"() reply"),u)f(r+": Unable to send "+o+"() reply due to destroyed connection");else{var e={penpal:"reply",id:l,resolution:t,returnValue:n};"rejected"===t&&n instanceof Error&&(e.returnValue=p(n),e.returnValueIsError=!0);try{i.postMessage(e,c)}catch(t){throw"DataCloneError"===t.name&&i.postMessage({penpal:"reply",id:l,resolution:"rejected",returnValue:p(t),returnValueIsError:!0},c),t}}}};new a.Promise(function(t){return t(n[o].apply(n,s))}).then(v("fulfilled"),v("rejected"))}}};o.addEventListener("message",s),e.then(function(){u=!0,o.removeEventListener("message",s)})};a.connectToChild=function(t){var n=t.url,e=t.appendTo,i=t.methods,s=void 0===i?{}:i,p=t.timeout,h=void 0,m=new l(function(t){h=t}),y=window,g=document.createElement("iframe");(e||document.body).appendChild(g),m.then(function(){g.parentNode&&g.parentNode.removeChild(g)});var _=g.contentWindow||g.contentDocument.parentWindow,w=function(t){var n=document.location,e=u.exec(t),r=void 0,o=void 0,i=void 0;return e?(r=e[1]?e[1]:n.protocol,o=e[2],i=e[4]):(r=n.protocol,o=n.hostname,i=n.port),r+"//"+o+(i&&i!==c[r]?":"+i:"")}(n);return{promise:new a.Promise(function(t,e){var i=void 0;void 0!==p&&(i=setTimeout(function(){var t=new Error("Connection to child timed out after "+p+"ms");t.code=o,e(t),h()},p));var c={},u=void 0,a=void 0,x=function(n){if(n.source===_&&n.origin===w&&"handshake"===n.data.penpal){f("Parent: Received handshake, sending reply"),n.source.postMessage({penpal:"handshake-reply",methodNames:Object.keys(s)},n.origin);var e={localName:"Parent",local:y,remote:_,remoteOrigin:n.origin};a&&a();var r=new l(function(t){m.then(t),a=t});d(e,s,r),u&&u.forEach(function(t){delete c[t]}),u=n.data.methodNames,v(c,e,u,m),clearTimeout(i),t(c)}};y.addEventListener("message",x),m.then(function(){y.removeEventListener("message",x);var t=new Error("Connection destroyed");t.code=r,e(t)}),f("Parent: Loading iframe"),g.src=n}),iframe:g,destroy:h}},a.connectToParent=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.parentOrigin,e=void 0===n?"*":n,c=t.methods,u=void 0===c?{}:c,s=t.timeout;if(window===window.top){var p=new Error("connectToParent() must be called within an iframe");throw p.code=i,p}var h=void 0,m=new l(function(t){h=t}),y=window,g=y.parent;return{promise:new a.Promise(function(t,n){var i=void 0;void 0!==s&&(i=setTimeout(function(){var t=new Error("Connection to parent timed out after "+s+"ms");t.code=o,n(t),h()},s));var c=function n(r){if(("*"===e||e===r.origin)&&r.source===g&&"handshake-reply"===r.data.penpal){f("Child: Received handshake reply"),y.removeEventListener("message",n);var o={localName:"Child",local:y,remote:g,remoteOrigin:r.origin},c={};d(o,u,m),v(c,o,r.data.methodNames,m),clearTimeout(i),t(c)}};y.addEventListener("message",c),m.then(function(){y.removeEventListener("message",c);var t=new Error("Connection destroyed");t.code=r,n(t)}),f("Child: Sending handshake"),g.postMessage({penpal:"handshake",methodNames:Object.keys(u)},e)}),destroy:h}},n.default=a},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(59)("wks"),o=e(36),i=e(6).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===e(t)?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(7),o=e(97),i=e(31),c=Object.defineProperty;n.f=e(12)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},,function(t,n,e){var r=e(13),o=e(40);t.exports=e(12)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(6),o=e(16),i=e(21),c=e(36)("src"),u=Function.toString,a=(""+u).split("toString");e(19).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,c)||o(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(61),o=e(27);t.exports=function(t){return r(o(t))}},,function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(21),o=e(18),i=e(62)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},,function(t,n){t.exports=!1},function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports={}},,,,function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},,,,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(99),o=e(72);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13).f,o=e(21),i=e(8)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(8)("unscopables"),o=Array.prototype;void 0==o[r]&&e(16)(o,r,{}),t.exports=function(t){o[r][t]=!0}},,,function(t,n,e){var r=e(22),o=e(8)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(7),o=e(98),i=e(72),c=e(62)("IE_PROTO"),u=function(){},a=function(){var t,n=e(60)("iframe"),r=i.length;for(n.style.display="none",e(73).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(26),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(23),o=e(101),i=e(86),c=e(7),u=e(14),a=e(87),s={},f={};(n=t.exports=function(t,n,e,l,p){var v,d,h,m,y=p?function(){return t}:a(t),g=r(e,l,n?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=u(t.length);v>_;_++)if((m=n?g(c(d=t[_])[0],d[1]):g(t[_]))===s||m===f)return m}else for(h=y.call(t);!(d=h.next()).done;)if((m=o(h,g,d.value,n))===s||m===f)return m}).BREAK=s,n.RETURN=f},function(t,n,e){var r=e(20);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(6),o=e(13),i=e(12),c=e(8)("species");t.exports=function(t){var n=r[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},,,,,,,function(t,n,e){var r=e(19),o=e(6),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(30)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(9),o=e(6).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(59)("keys"),o=e(36);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7),o=e(17),i=e(8)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){"use strict";var r=e(17);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},,,,,,function(t,n,e){"use strict";var r=e(30),o=e(3),i=e(20),c=e(16),u=e(32),a=e(84),s=e(42),f=e(28),l=e(8)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,m,y){a(e,n,d);var g,_,w,x=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",O="values"==h,E=!1,S=t.prototype,P=S[l]||S["@@iterator"]||h&&S[h],T=P||x(h),j=h?O?x("entries"):T:void 0,L="Array"==n&&S.entries||P;if(L&&(w=f(L.call(new t)))!==Object.prototype&&w.next&&(s(w,b,!0),r||"function"==typeof w[l]||c(w,l,v)),O&&P&&"values"!==P.name&&(E=!0,T=function(){return P.call(this)}),r&&!y||!p&&!E&&S[l]||c(S,l,T),u[n]=T,u[b]=v,h)if(g={values:O?T:x("values"),keys:m?T:x("keys"),entries:j},y)for(_ in g)_ in S||i(S,_,g[_]);else o(o.P+o.F*(p||E),n,g);return g}},function(t,n,e){var r=e(24),o=e(14),i=e(48);t.exports=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(6).document;t.exports=r&&r.documentElement},function(t,n,e){var r,o,i,c=e(23),u=e(102),a=e(73),s=e(60),f=e(6),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,m=0,y={},g=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){g.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++m]=function(){u("function"==typeof t?t:Function(t),n)},r(m),m},v=function(t){delete y[t]},"process"==e(22)(l)?r=function(t){l.nextTick(c(g,t,1))}:h&&h.now?r=function(t){h.now(c(g,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:p,clear:v}},function(t,n,e){var r=e(6).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(8)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},,,,,,,function(t,n,e){var r=e(26),o=e(27);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(47),o=e(40),i=e(42),c={};e(16)(c,e(8)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){"use strict";var r=e(43),o=e(100),i=e(32),c=e(24);t.exports=e(70)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(32),o=e(8)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(46),o=e(8)("iterator"),i=e(32);t.exports=e(19).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(6),o=e(74).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(22)(c);t.exports=function(){var t,n,e,s=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(7),o=e(9),i=e(64);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},,,,,,,function(t,n,e){t.exports=!e(12)&&!e(10)(function(){return 7!=Object.defineProperty(e(60)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(13),o=e(7),i=e(41);t.exports=e(12)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},function(t,n,e){var r=e(21),o=e(24),i=e(71)(!1),c=e(62)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(46),o={};o[e(8)("toStringTag")]="z",o+""!="[object z]"&&e(20)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,n,e){"use strict";var r=e(83)(!0);e(70)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){for(var r=e(85),o=e(41),i=e(20),c=e(6),u=e(16),a=e(32),s=e(8),f=s("iterator"),l=s("toStringTag"),p=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(v),h=0;h<d.length;h++){var m,y=d[h],g=v[y],_=c[y],w=_&&_.prototype;if(w&&(w[f]||u(w,f,p),w[l]||u(w,l,y),a[y]=p,g))for(m in r)w[m]||i(w,m,r[m],!0)}},function(t,n,e){"use strict";var r,o,i,c,u=e(30),a=e(6),s=e(23),f=e(46),l=e(3),p=e(9),v=e(17),d=e(49),h=e(50),m=e(63),y=e(74).set,g=e(88)(),_=e(64),w=e(89),x=e(75),b=e(90),O=a.TypeError,E=a.process,S=E&&E.versions,P=S&&S.v8||"",T=a.Promise,j="process"==f(E),L=function(){},M=o=_.f,C=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e(8)("species")]=function(t){t(L,L)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof n&&0!==P.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c,u=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{u?(o||(2==t._h&&A(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),c=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=N(e))?i.call(e,a,s):a(e)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&k(t)})}},k=function(t){y.call(a,function(){var n,e,r,o=t._v,i=I(t);if(i&&(n=w(function(){j?E.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||I(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},A=function(t){y.call(a,function(){var n;j?E.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},F=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},D=function t(n){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===n)throw O("Promise can't be resolved itself");(e=N(n))?g(function(){var o={_w:r,_d:!1};try{e.call(n,s(t,o,1),s(F,o,1))}catch(t){F.call(o,t)}}):(r._v=n,r._s=1,R(r,!1))}catch(t){F.call({_w:r,_d:!1},t)}}};C||(T=function(t){d(this,T,"Promise","_h"),v(t),r.call(this);try{t(s(D,this,1),s(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(51)(T.prototype,{then:function(t,n){var e=M(m(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?E.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(F,t,1)},_.f=M=function(t){return t===T||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:T}),e(42)(T,"Promise"),e(52)("Promise"),c=e(19).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!C),"Promise",{resolve:function(t){return b(u&&this===c?T:this,t)}}),l(l.S+l.F*!(C&&e(76)(function(t){T.all(t).catch(L)})),"Promise",{all:function(t){var n=this,e=M(n),r=e.resolve,o=e.reject,i=w(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=M(n),r=e.reject,o=w(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){"use strict";var r=e(3),o=e(19),i=e(6),c=e(63),u=e(90);r(r.P+r.R,"Promise",{finally:function(t){var n=c(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(3),o=e(64),i=e(89);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){e(191),t.exports=e(192)},function(t,n,e){e(116),e(117),e(118),e(119),e(120),e(121),t.exports=e(19).Promise},function(t,n,e){var r=e(5).default;window.setupViamAPI=function(t,n,e,o,i){return o||(o="".concat(window.location.origin,"/api/"),console.warn("API host URL not specified. Fall back to ".concat(o))),i||(i="".concat(window.location.origin,"/wopi/"),console.warn("WOPI host URL not specified. Fall back to ".concat(i))),e||(e="".concat(window.location.origin,"/vcl/js/iframe"),console.warn("Iframe URL not specified. Fall back to ".concat(e))),r.connectToChild({url:e,appendTo:document.getElementById(t),methods:n}).promise.then(function(t){return t.initialize(o,i).then(function(){return t})})}}]);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Log contains methods for logging the activity
 */

L.Log = {
	log: function (msg, direction, tileCoords, time) {
		if (!time) {
			time = Date.now();
		}
		if (!this._logs) {
			this._logs = [];
		}
		msg = msg.replace(/(\r\n|\n|\r)/gm, ' ');
		this._logs.push({msg : msg, direction : direction,
			coords : tileCoords, time : time});
		//console.log(time + '-' + direction + ': ' + msg);
	},

	_getEntries: function () {
		this._logs.sort(function (a, b) {
			if (a.time < b.time) { return -1; }
			if (a.time > b.time) { return 1; }
			return 0;
		});
		var data = '';
		for (var i = 0; i < this._logs.length; i++) {
			data += this._logs[i].time + '.' + this._logs[i].direction + '.' +
					this._logs[i].msg + '.' + this._logs[i].coords;
			data += '\n';
		}
		return data;
	},

	print: function () {
		// console.log(this._getEntries());
	},

	save: function () {
		var blob = new Blob([this._getEntries()], {type: 'text/csv'}),
		    e = document.createEvent('MouseEvents'),
		    a = document.createElement('a');

		a.download = Date.now() + '.csv';
		a.href = window.URL.createObjectURL(blob);
		a.dataset.downloadurl =  ['text/csv', a.download, a.href].join(':');
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e);
	},

	clear: function () {
		this._logs = [];
	}
};

L.INCOMING = 'INCOMING';
L.OUTGOING = 'OUTGOING';

/* -*- js-indent-level: 8 -*- */
/*
 * L.Util contains various utility functions used throughout Leaflet code.
 */

L.Util = {
	// extend an object with properties of one or more other objects
	extend: function (dest) {
		var i, j, len, src;

		for (j = 1, len = arguments.length; j < len; j++) {
			src = arguments[j];
			for (i in src) {
				dest[i] = src[i];
			}
		}
		return dest;
	},

	// create an object from a given prototype
	create: Object.create || (function () {
		function F() {}
		return function (proto) {
			F.prototype = proto;
			return new F();
		};
	})(),

	// bind a function to be called with a given context
	bind: function (fn, obj) {
		var slice = Array.prototype.slice;

		if (fn.bind) {
			return fn.bind.apply(fn, slice.call(arguments, 1));
		}

		var args = slice.call(arguments, 2);

		return function () {
			return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
		};
	},

	// return unique ID of an object
	stamp: function (obj) {
		/*eslint-disable */
		obj._leaflet_id = obj._leaflet_id || ++L.Util.lastId;
		return obj._leaflet_id;
		/*eslint-enable */
	},

	lastId: 0,

	// return a function that won't be called more often than the given interval
	throttle: function (fn, time, context) {
		var lock, args, wrapperFn, later;

		later = function () {
			// reset lock and call if queued
			lock = false;
			if (args) {
				wrapperFn.apply(context, args);
				args = false;
			}
		};

		wrapperFn = function () {
			if (lock) {
				// called too soon, queue to call later
				args = arguments;

			} else {
				// call and lock until later
				fn.apply(context, arguments);
				setTimeout(later, time);
				lock = true;
			}
		};

		return wrapperFn;
	},

	// wrap the given number to lie within a certain range (used for wrapping longitude)
	wrapNum: function (x, range, includeMax) {
		var max = range[1],
		    min = range[0],
		    d = max - min;
		return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
	},

	// do nothing (used as a noop throughout the code)
	falseFn: function () { return false; },

	// round a given number to a given precision
	formatNum: function (num, digits) {
		var pow = Math.pow(10, digits || 5);
		return Math.round(num * pow) / pow;
	},

	// trim whitespace from both sides of a string
	trim: function (str) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	},

	// split a string into words
	splitWords: function (str) {
		return L.Util.trim(str).split(/\s+/);
	},

	// set options to an object, inheriting parent's options as well
	setOptions: function (obj, options) {
		if (!obj.hasOwnProperty('options')) {
			obj.options = obj.options ? L.Util.create(obj.options) : {};
		}
		for (var i in options) {
			obj.options[i] = options[i];
		}
		return obj.options;
	},

	// make a URL with GET parameters out of a set of properties/values
	getParamString: function (obj, existingUrl, uppercase) {
		var params = [];
		for (var i in obj) {
			params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
		}
		return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
	},

	round: function(x, e) {
		if (!e) {
			return Math.round(x);
		}
		var f = 1.0/e;
		return Math.round(x * f) * e;
	},

	// super-simple templating facility, used for TileLayer URLs
	template: function (str, data) {
		return str.replace(L.Util.templateRe, function (str, key) {
			var value = data[key];

			if (value === undefined) {
				throw new Error('No value provided for variable ' + str);

			} else if (typeof value === 'function') {
				value = value(data);
			}
			return value;
		});
	},

	templateRe: /\{ *([\w_]+) *\}/g,

	isArray: Array.isArray || function (obj) {
		return (Object.prototype.toString.call(obj) === '[object Array]');
	},

	// minimal image URI, set to an image when disposing to flush memory
	emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',

	getDpiScaleFactor: function() {
		var dpiScale = window.devicePixelRatio ? Math.ceil(window.devicePixelRatio) : 1;
		if (dpiScale == 1 && L.Browser.retina) {
			dpiScale = 2;
		}

		return dpiScale;
	},

	toggleFullScreen: function() {
		if (!document.fullscreenElement &&
			!document.mozFullscreenElement &&
			!document.msFullscreenElement &&
			!document.webkitFullscreenElement) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
};

(function () {
	// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

	function getPrefixed(name) {
		return window['webkit' + name] || window['moz' + name] || window['ms' + name];
	}

	var lastTime = 0;

	// fallback for IE 7-8
	function timeoutDefer(fn) {
		var time = +new Date(),
		    timeToCall = Math.max(0, 16 - (time - lastTime));

		lastTime = time + timeToCall;
		return window.setTimeout(fn, timeToCall);
	}

	var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer,
	    cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
	               getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };


	L.Util.requestAnimFrame = function (fn, context, immediate) {
		if (immediate && requestFn === timeoutDefer) {
			fn.call(context);
		} else {
			return requestFn.call(window, L.bind(fn, context));
		}
	};

	L.Util.cancelAnimFrame = function (id) {
		if (id) {
			cancelFn.call(window, id);
		}
	};
})();

// shortcuts for most used utility functions
L.extend = L.Util.extend;
L.bind = L.Util.bind;
L.stamp = L.Util.stamp;
L.setOptions = L.Util.setOptions;
L.round = L.Util.round;
L.getDpiScaleFactor = L.Util.getDpiScaleFactor;
L.toggleFullScreen = L.Util.toggleFullScreen;

/* -*- js-indent-level: 8 -*- */
/*
 * L.LOUtil contains various LO related utility functions used throughout the code
 */

L.LOUtil = {
	// Based on core.git's colordata.hxx: COL_AUTHOR1_DARK...COL_AUTHOR9_DARK
	// consisting of arrays of RGB values
	// Maybe move the color logic to separate file when it becomes complex
	darkColors: [
		[198, 146, 0],
		[6,  70, 162],
		[87, 157,  28],
		[105,  43, 157],
		[197,   0,  11],
		[0, 128, 128],
		[140, 132,  0],
		[53,  85, 107],
		[209, 118,   0]
	],

	startSpinner: function (spinnerCanvas, spinnerSpeed) {
		var spinnerInterval;
		spinnerCanvas.width = 50;
		spinnerCanvas.height = 50;

		var context = spinnerCanvas.getContext('2d');
		context.lineWidth = 8;
		context.strokeStyle = 'grey';
		var x = spinnerCanvas.width / 2;
		var y = spinnerCanvas.height / 2;
		var radius = y - context.lineWidth / 2;
		spinnerInterval = setInterval(function() {
			context.clearRect(0, 0, x * 2, y * 2);
			// Move to center
			context.translate(x, y);
			context.rotate(spinnerSpeed * Math.PI / 180);
			context.translate(-x, -y);
			context.beginPath();
			context.arc(x, y, radius, 0, Math.PI * 1.3);
			context.stroke();
		}, 30);

		return spinnerInterval;
	},

	getViewIdColor: function(viewId) {
		var color = this.darkColors[(viewId + 1) % this.darkColors.length];
		return (color[2] | (color[1] << 8) | (color[0] << 16));
	},

	rgbToHex: function(color) {
		return '#' + ('000000' + color.toString(16)).slice(-6);
	},

	stringToPoint: function(point) {
		var numbers = point.match(/\d+/g);
		return L.point(parseInt(numbers[0]), parseInt(numbers[1]));
	},

	stringToBounds: function(bounds) {
		var numbers = bounds.match(/\d+/g);
		var topLeft = L.point(parseInt(numbers[0]), parseInt(numbers[1]));
		var bottomRight = topLeft.add(L.point(parseInt(numbers[2]), parseInt(numbers[3])));
		return L.bounds(topLeft, bottomRight);
	},

	stringToRectangles: function(strRect) {
		var matches = strRect.match(/\d+/g);
		var rectangles = [];
		if (matches !== null) {
			for (var itMatch = 0; itMatch < matches.length; itMatch += 4) {
				var topLeft = L.point(parseInt(matches[itMatch]), parseInt(matches[itMatch + 1]));
				var size = L.point(parseInt(matches[itMatch + 2]), parseInt(matches[itMatch + 3]));
				var topRight = topLeft.add(L.point(size.x, 0));
				var bottomLeft = topLeft.add(L.point(0, size.y));
				var bottomRight = topLeft.add(size);
				rectangles.push([bottomLeft, bottomRight, topLeft, topRight]);
			}
		}
		return rectangles;
	},

	/// oldFileName = Example.odt, suffix = new
	/// returns: Example_new.odt
	generateNewFileName: function(oldFileName, suffix) {
		var idx = oldFileName.lastIndexOf('.');
		return oldFileName.substring(0, idx) + suffix + oldFileName.substring(idx);
	}
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Class powers the OOP facilities of the library.
 * Thanks to John Resig and Dean Edwards for inspiration!
 */

L.Class = function () {};

L.Class.extend = function (props) {

	// extended class with the new prototype
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = L.Util.create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		L.extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		L.Util.extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = L.Util.extend(L.Util.create(proto.options), props.options);
	}

	// mix given properties into the prototype
	L.extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// method for adding properties to prototype
L.Class.include = function (props) {
	L.extend(this.prototype, props);
};

// merge new default options to the Class
L.Class.mergeOptions = function (options) {
	L.extend(this.prototype.options, options);
};

// add a constructor hook
L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Evented is a base class that Leaflet classes inherit from to handle custom events.
 */

L.Evented = L.Class.extend({

	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = L.Util.splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = L.Util.splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {

		var events = this._events = this._events || {},
		    contextId = context && context !== this && L.stamp(context);

		if (contextId) {
			// store listeners with custom context in a separate hash (if it has an id);
			// gives a major performance boost when firing and removing events (e.g. on map object)

			var indexKey = type + '_idx',
			    indexLenKey = type + '_len',
			    typeIndex = events[indexKey] = events[indexKey] || {},
			    id = L.stamp(fn) + '_' + contextId;

			if (!typeIndex[id]) {
				typeIndex[id] = {fn: fn, ctx: context};

				// keep track of the number of keys in the index to quickly check if it's empty
				events[indexLenKey] = (events[indexLenKey] || 0) + 1;
			}

		} else {
			// individual layers mostly use "this" for context and don't fire listeners too often
			// so simple array makes the memory footprint better while not degrading performance

			events[type] = events[type] || [];
			events[type].push({fn: fn});
		}
	},

	_off: function (type, fn, context) {
		var events = this._events,
		    indexKey = type + '_idx',
		    indexLenKey = type + '_len';

		if (!events) { return; }

		if (!fn) {
			// clear all listeners for a type if function isn't specified
			delete events[type];
			delete events[indexKey];
			delete events[indexLenKey];
			return;
		}

		var contextId = context && context !== this && L.stamp(context),
		    listeners, i, len, listener, id;

		if (contextId) {
			id = L.stamp(fn) + '_' + contextId;
			listeners = events[indexKey];

			if (listeners && listeners[id]) {
				listener = listeners[id];
				delete listeners[id];
				events[indexLenKey]--;
			}

		} else {
			listeners = events[type];

			if (listeners) {
				for (i = 0, len = listeners.length; i < len; i++) {
					if (listeners[i].fn === fn) {
						listener = listeners[i];
						listeners.splice(i, 1);
						break;
					}
				}
			}
		}

		// set the removed listener to noop so that's not called if remove happens in fire
		if (listener) {
			listener.fn = L.Util.falseFn;
		}
	},

	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = L.Util.extend({}, data, {type: type, target: this}),
		    events = this._events;

		if (events) {
			var typeIndex = events[type + '_idx'],
			    i, len, listeners, id;

			if (events[type]) {
				// make sure adding/removing listeners inside other listeners won't cause infinite loop
				listeners = events[type].slice();

				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].fn.call(this, event);
				}
			}

			// fire event for the context-indexed listeners as well
			for (id in typeIndex) {
				typeIndex[id].fn.call(typeIndex[id].ctx, event);
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	listens: function (type, propagate) {
		var events = this._events;

		if (events && (events[type] || events[type + '_len'])) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = L.bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// adds a parent to propagate events to (when you fire with true as a 3rd argument)
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[L.stamp(obj)] = obj;
		return this;
	},

	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[L.stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, L.extend({layer: e.target}, e), true);
		}
	}
});

var proto = L.Evented.prototype;

// aliases; we should ditch those eventually
proto.addEventListener = proto.on;
proto.removeEventListener = proto.clearAllEventListeners = proto.off;
proto.addOneTimeEventListener = proto.once;
proto.fireEvent = proto.fire;
proto.hasEventListeners = proto.listens;

L.Mixin = {Events: proto};

/* -*- js-indent-level: 8; fill-column: 100 -*- */
/*
 * L.Socket contains methods for the communication with the server
 */

/* global _ vex $ errorMessages Uint8Array brandProductName brandProductFAQURL */

L.Socket = L.Class.extend({
	ProtocolVersionNumber: '0.1',
	ReconnectCount: 0,
	WasShownLimitDialog: false,

	getParameterValue: function (s) {
		var i = s.indexOf('=');
		if (i === -1)
			return undefined;
		return s.substring(i+1);
	},

	initialize: function (map) {
		console.debug('socket.initialize:');
		this._map = map;
		this._msgQueue = [];
	},

	getWebSocketBaseURI: function(map) {
		return map.options.server + map.options.serviceRoot + '/lool/' + encodeURIComponent(map.options.doc + '?' + $.param(map.options.docParams)) + '/ws';
	},

	connect: function(socket) {
		var map = this._map;
		if (map.options.permission) {
			map.options.docParams['permission'] = map.options.permission;
		}
		if (this.socket) {
			this.close();
		}
		if (socket && (socket.readyState === 1 || socket.readyState === 0)) {
			this.socket = socket;
		} else if (window.ThisIsAMobileApp) {
			// We have already opened the FakeWebSocket over in global.js
		} else	{
			var wopiSrc = '';
			if (map.options.wopiSrc != '') {
				wopiSrc = '?WOPISrc=' + map.options.wopiSrc + '&compat=/ws';
			}

			try {
				this.socket = new WebSocket(this.getWebSocketBaseURI(map) + wopiSrc);
			} catch (e) {
				// On IE 11 there is a limitation on the number of WebSockets open to a single domain (6 by default and can go to 128).
				// Detect this and hint the user.
				var msgHint = '';
				var isIE11 = !!window.MSInputMethodContext && !!document.documentMode; // https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
				if (isIE11)
					msgHint = _('IE11 has reached its maximum number of connections. Please see this document to increase this limit if needed: https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/general-info/ee330736(v=vs.85)#websocket-maximum-server-connections');

				this._map.fire('error', {msg: _('Oops, there is a problem connecting to LibreOffice Online : ').replace('LibreOffice Online', (typeof brandProductName !== 'undefined' ? brandProductName : 'LibreOffice Online')) + e + msgHint, cmd: 'socket', kind: 'failed', id: 3});
				return;
			}
		}

		this.socket.onerror = L.bind(this._onSocketError, this);
		this.socket.onclose = L.bind(this._onSocketClose, this);
		this.socket.onopen = L.bind(this._onSocketOpen, this);
		this.socket.onmessage = L.bind(this._onMessage, this);
		this.socket.binaryType = 'arraybuffer';
		if (map.options.docParams.access_token && parseInt(map.options.docParams.access_token_ttl)) {
			var tokenExpiryWarning = 900 * 1000; // Warn when 15 minutes remain
			clearTimeout(this._accessTokenExpireTimeout);
			this._accessTokenExpireTimeout = setTimeout(L.bind(this._sessionExpiredWarning, this),
			                                            parseInt(map.options.docParams.access_token_ttl) - Date.now() - tokenExpiryWarning);
		}

		// process messages for early socket connection
		if (socket && ((socket.readyState === 1 || socket.readyState === 0)) &&
			window.queueMsg && window.queueMsg.length > 0) {
			for (var it = 0; it < window.queueMsg.length; it++) {
				this._onMessage({data: window.queueMsg[it]});
			}
			window.queueMsg = [];
		}
	},

	_sessionExpiredWarning: function() {
		clearTimeout(this._accessTokenExpireTimeout);
		var expirymsg = errorMessages.sessionexpiry;
		if (parseInt(this._map.options.docParams.access_token_ttl) - Date.now() <= 0) {
			expirymsg = errorMessages.sessionexpired;
		}
		var dateTime = new Date(parseInt(this._map.options.docParams.access_token_ttl));
		var dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
		var timerepr = dateTime.toLocaleDateString(String.locale, dateOptions);
		this._map.fire('warn', {msg: expirymsg.replace('%time', timerepr)});

		// If user still doesn't refresh the session, warn again periodically
		this._accessTokenExpireTimeout = setTimeout(L.bind(this._sessionExpiredWarning, this),
		                                            120 * 1000);
	},

	close: function () {
		this.socket.onerror = function () {};
		this.socket.onclose = function () {};
		this.socket.onmessage = function () {};
		this.socket.close();

		// Reset wopi's app loaded so that reconnecting again informs outerframe about initialization
		this._map['wopi'].resetAppLoaded();
		this._map.fire('docloaded', {status: false});
		clearTimeout(this._accessTokenExpireTimeout);
	},

	connected: function() {
		return this.socket && this.socket.readyState === 1;
	},

	sendMessage: function (msg, coords) {
		if (this._map._fatal) {
			// Avoid communicating when we're in fatal state
			return;
		}

		if (!this._map._active) {
			// Avoid communicating when we're inactive.
			if (typeof msg !== 'string')
				return;

			if (!msg.startsWith('useractive') && !msg.startsWith('userinactive'))
				return;
		}

		var socketState = this.socket.readyState;
		if (socketState === 2 || socketState === 3) {
			this._map.loadDocument();
		}

		if (socketState === 1) {
			this.socket.send(msg);
			// Only attempt to log text frames, not binary ones.
			if (typeof msg === 'string') {
				L.Log.log(msg, L.OUTGOING, coords);
				if (this._map._docLayer && this._map._docLayer._debug) {
					console.log2(+new Date() + ' %cOUTGOING%c: ' + msg.concat(' ').replace(' ', '%c '), 'background:#fbb;color:black', 'color:red', 'color:black');
				}
			}
		}
		else {
			// push message while trying to connect socket again.
			this._msgQueue.push({msg: msg, coords: coords});
		}
	},

	_doSend: function(msg, coords) {
		// Only attempt to log text frames, not binary ones.
		if (typeof msg === 'string') {
			L.Log.log(msg, L.OUTGOING, coords);
			if (this._map._docLayer && this._map._docLayer._debug) {
				console.log2(+new Date() + ' %cOUTGOING%c: ' + msg.concat(' ').replace(' ', '%c '), 'background:#fbb;color:black', 'color:red', 'color:black');
			}
		}

		this.socket.send(msg);
	},

	_getParameterByName: function(url, name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'), results = regex.exec(url);
		return results === null ? '' : results[1].replace(/\+/g, ' ');
	},

	_onSocketOpen: function () {
		console.debug('_onSocketOpen:');
		this._map._serverRecycling = false;
		this._map._documentIdle = false;

		// Always send the protocol version number.
		// TODO: Move the version number somewhere sensible.
		this._doSend('loolclient ' + this.ProtocolVersionNumber);

		var msg = 'load url=' + encodeURIComponent(this._map.options.doc);
		if (this._map._docLayer) {
			this._reconnecting = true;
			// we are reconnecting after a lost connection
			msg += ' part=' + this._map.getCurrentPartNumber();
		}
		if (this._map.options.timestamp) {
			msg += ' timestamp=' + this._map.options.timestamp;
		}
		if (this._map._docPassword) {
			msg += ' password=' + this._map._docPassword;
		}
		if (String.locale) {
			msg += ' lang=' + String.locale;
		}
		if (this._map.options.renderingOptions) {
			var options = {
				'rendering': this._map.options.renderingOptions
			};
			msg += ' options=' + JSON.stringify(options);
		}
		this._doSend(msg);
		for (var i = 0; i < this._msgQueue.length; i++) {
			this._doSend(this._msgQueue[i].msg, this._msgQueue[i].coords);
		}
		this._msgQueue = [];

		this._map._activate();
	},

	_utf8ToString: function (data) {
		var strBytes = '';
		for (var it = 0; it < data.length; it++) {
			strBytes += String.fromCharCode(data[it]);
		}
		return strBytes;
	},

	_onMessage: function (e) {
		var imgBytes, index, textMsg, img;

		if (typeof (e.data) === 'string') {
			textMsg = e.data;
		}
		else if (typeof (e.data) === 'object') {
			imgBytes = new Uint8Array(e.data);
			index = 0;
			// search for the first newline which marks the end of the message
			while (index < imgBytes.length && imgBytes[index] !== 10) {
				index++;
			}
			textMsg = String.fromCharCode.apply(null, imgBytes.subarray(0, index));
		}

		if (this._map._docLayer && this._map._docLayer._debug) {
			console.log2(+new Date() + ' %cINCOMING%c: ' + textMsg.concat(' ').replace(' ', '%c '), 'background:#ddf;color:black', 'color:blue', 'color:black');
		}

		var command = this.parseServerCmd(textMsg);
		if (textMsg.startsWith('loolserver ')) {
			// This must be the first message, unless we reconnect.
			var loolwsdVersionObj = JSON.parse(textMsg.substring(textMsg.indexOf('{')));
			var h = loolwsdVersionObj.Hash;
			if (parseInt(h,16).toString(16) === h.toLowerCase().replace(/^0+/, '')) {
				if (!window.ThisIsTheiOSApp) {
					h = '<a target="_blank" href="https://hub.libreoffice.org/git-online/' + h + '">' + h + '</a>';
				}
				$('#loolwsd-version').html(loolwsdVersionObj.Version + ' (git hash: ' + h + ')');
			}
			else {
				$('#loolwsd-version').text(loolwsdVersionObj.Version);
			}

			var idUri = this._map.options.server + this._map.options.serviceRoot + '/hosting/discovery';
			idUri = idUri.replace(/^ws:/, 'http:');
			idUri = idUri.replace(/^wss:/, 'https:');
			$('#loolwsd-id').html('<a href="' + idUri + '">' + loolwsdVersionObj.Id + '</a>');

			// TODO: For now we expect perfect match in protocol versions
			if (loolwsdVersionObj.Protocol !== this.ProtocolVersionNumber) {
				this._map.fire('error', {msg: _('Unsupported server version.')});
			}
		}
		else if (textMsg.startsWith('lokitversion ')) {
			var lokitVersionObj = JSON.parse(textMsg.substring(textMsg.indexOf('{')));
			h = lokitVersionObj.BuildId.substring(0, 7);
			if (!window.ThisIsTheiOSApp && parseInt(h,16).toString(16) === h.toLowerCase().replace(/^0+/, '')) {
				h = '<a target="_blank" href="https://hub.libreoffice.org/git-core/' + h + '">' + h + '</a>';
			}
			$('#lokit-version').html(lokitVersionObj.ProductName + ' ' +
			                         lokitVersionObj.ProductVersion + lokitVersionObj.ProductExtension.replace('.10.','-') +
			                         ' (git hash: ' + h + ')');
		}
		else if (textMsg.startsWith('perm:')) {
			var perm = textMsg.substring('perm:'.length);

			// This message is often received very early before doclayer is initialized
			// Change options.permission so that when docLayer is initialized, it
			// picks up the new value of permission rather than something else
			this._map.options.permission = 'readonly';
			// Lets also try to set the permission ourself since this can well be received
			// after doclayer is initialized. There's no harm to call this in any case.
			this._map.setPermission(perm);

			return;
		}
		else if (textMsg.startsWith('wopi: ')) {
			// Handle WOPI related messages
			var wopiInfo = JSON.parse(textMsg.substring(textMsg.indexOf('{')));
			this._map.fire('wopiprops', wopiInfo);
			return;
		}
		else if (textMsg.startsWith('loadstorage: ')) {
			if (textMsg.substring(textMsg.indexOf(':') + 2) === 'failed') {
				console.debug('Loading document from a storage failed');
				this._map.fire('postMessage', {
					msgId: 'App_LoadingStatus',
					args: {
						Status: 'Failed'
					}
				});
			}
		}
		else if (textMsg.startsWith('lastmodtime: ')) {
			var time = textMsg.substring(textMsg.indexOf(' ') + 1);
			this._map.updateModificationIndicator(time);
			return;
		}
		else if (textMsg.startsWith('commandresult: ')) {
			var commandresult = JSON.parse(textMsg.substring(textMsg.indexOf('{')));
			if (commandresult['command'] === 'savetostorage' && commandresult['success']) {
				// Close any open confirmation dialogs
				vex.closeAll();
			}
			return;
		}
		else if (textMsg.startsWith('close: ')) {
			textMsg = textMsg.substring('close: '.length);
			msg = '';
			var postMsgData = {};
			var showMsgAndReload = false;
			// This is due to document owner terminating the session
			if (textMsg === 'ownertermination') {
				msg = _('Session terminated by document owner');
				postMsgData['Reason'] = 'OwnerTermination';
			}
			else if (textMsg === 'idle' || textMsg === 'oom') {
				msg = _('Idle document - please click to reload and resume editing');
				this._map._documentIdle = true;
				postMsgData['Reason'] = 'DocumentIdle';
				if (textMsg === 'oom')
					postMsgData['Reason'] = 'OOM';
			}
			else if (textMsg === 'shuttingdown') {
				msg = _('Server is shutting down for maintenance (auto-saving)');
				postMsgData['Reason'] = 'ShuttingDown';
			}
			else if (textMsg === 'docdisconnected') {
				msg = _('Oops, there is a problem connecting the document');
				postMsgData['Reason'] = 'DocumentDisconnected';
			}
			else if (textMsg === 'recycling') {
				msg = _('Server is recycling and will be available shortly');
				this._map._active = false;
				this._map._serverRecycling = true;

				// Prevent reconnecting the world at the same time.
				var min = 5000;
				var max = 10000;
				var timeoutMs = Math.floor(Math.random() * (max - min) + min);

				var socket = this;
				map = this._map;
				vex.timer = setInterval(function() {
					if (socket.connected()) {
						// We're connected: cancel timer and dialog.
						clearTimeout(vex.timer);
						vex.closeAll();
						return;
					}

					try {
						map.loadDocument(map);
					} catch (error) {
						console.warn('Cannot load document.');
					}
				}, timeoutMs);
			}
			else if (textMsg.startsWith('documentconflict')) {
				msg = _('Document has changed in storage. Loading the new document. Your version is available as revision.');
				showMsgAndReload = true;
			}
			else if (textMsg.startsWith('versionrestore:')) {
				textMsg = textMsg.substring('versionrestore:'.length).trim();
				if (textMsg === 'prerestore_ack') {
					msg = _('Restoring older revision. Any unsaved changes will be available in version history');
					this._map.fire('postMessage', {msgId: 'App_VersionRestore', args: {Status: 'Pre_Restore_Ack'}});
					showMsgAndReload = true;
				}
			}

			if (showMsgAndReload) {
				if (this._map._docLayer) {
					this._map._docLayer.removeAllViews();
				}
				// Detach all the handlers from current socket, otherwise _onSocketClose tries to reconnect again
				// However, we want to reconnect manually here.
				this.close();

				// Reload the document
				this._map._active = false;
				map = this._map;
				vex.timer = setInterval(function() {
					try {
						// Activate and cancel timer and dialogs.
						map._activate();
					} catch (error) {
						console.warn('Cannot activate map');
					}
				}, 3000);
			}

			// Close any open dialogs first.
			vex.closeAll();

			var message = '';
			if (!this._map['wopi'].DisableInactiveMessages) {
				message = msg;
			}

			var dialogOpened = vex.dialog.open({
				message: message,
				contentClassName: 'loleaflet-user-idle'
			});

			if (textMsg === 'idle' || textMsg === 'oom') {
				var map = this._map;
				dialogOpened.contentEl.onclick = function() {
					console.debug('idleness: reactivating');
					map._documentIdle = false;
					return map._activate();
				};
			}

			if (postMsgData['Reason']) {
				// Tell WOPI host about it which should handle this situation
				this._map.fire('postMessage', {msgId: 'Session_Closed', args: postMsgData});
			}

			if (textMsg === 'ownertermination') {
				this._map.remove();
			}

			return;
		}
		else if (textMsg.startsWith('error:') && command.errorCmd === 'storage') {
			this._map.hideBusy();
			var storageError;
			if (command.errorKind === 'savediskfull') {
				storageError = errorMessages.storage.savediskfull;
			}
			else if (command.errorKind === 'savefailed') {
				storageError = errorMessages.storage.savefailed;
			}
			else if (command.errorKind === 'renamefailed') {
				storageError = errorMessages.storage.renamefailed;
			}
			else if (command.errorKind === 'saveunauthorized') {
				storageError = errorMessages.storage.saveunauthorized;
			}
			else if (command.errorKind === 'loadfailed') {
				storageError = errorMessages.storage.loadfailed;
				// Since this is a document load failure, wsd will disconnect the socket anyway,
				// better we do it first so that another error message doesn't override this one
				// upon socket close.
				this.close();
			}
			else if (command.errorKind === 'documentconflict')
			{
				storageError = errorMessages.storage.documentconflict;

				vex.closeAll();

				vex.dialog.open({
					message: _('Document has been changed in storage. What would you like to do with your unsaved changes?'),
					escapeButtonCloses: false,
					overlayClosesOnClick: false,
					buttons: [
						$.extend({}, vex.dialog.buttons.YES, { text: _('Discard'),
						                                      click: function() {
							                                      this.value = 'discard';
							                                      this.close();
						                                      }}),
						$.extend({}, vex.dialog.buttons.YES, { text: _('Overwrite'),
						                                      click: function() {
							                                      this.value = 'overwrite';
							                                      this.close();
						                                      }}),
						$.extend({}, vex.dialog.buttons.YES, { text: _('Save to new file'),
						                                      click: function() {
							                                      this.value = 'saveas';
							                                      this.close();
						                                      }})
					],
					callback: function(value) {
						if (value === 'discard') {
							// They want to refresh the page and load document again for all
							this.sendMessage('closedocument');
						} else if (value === 'overwrite') {
							// They want to overwrite
							this.sendMessage('savetostorage force=1');
						} else if (value === 'saveas') {
							var filename = this._map['wopi'].BaseFileName;
							if (filename) {
								filename = L.LOUtil.generateNewFileName(filename, '_new');
								this._map.saveAs(filename);
							}
						}
					},
					afterOpen: function() {
						this.contentEl.style.width = '600px';
					}
				});

				return;
			}

			// Parse the storage url as link
			var tmpLink = document.createElement('a');
			tmpLink.href = this._map.options.doc;
			// Insert the storage server address to be more friendly
			storageError = storageError.replace('%storageserver', tmpLink.host);
			this._map.fire('warn', {msg: storageError});

			return;
		}
		else if (textMsg.startsWith('error:') && command.errorCmd === 'internal') {
			this._map.hideBusy();
			this._map._fatal = true;
			if (command.errorKind === 'diskfull') {
				this._map.fire('error', {msg: errorMessages.diskfull});
			}
			else if (command.errorKind === 'unauthorized') {
				this._map.fire('error', {msg: errorMessages.unauthorized});
			}

			if (this._map._docLayer) {
				this._map._docLayer.removeAllViews();
				this._map._docLayer._resetClientVisArea();
			}
			this.close();

			return;
		}
		else if (textMsg.startsWith('error:') && command.errorCmd === 'saveas') {
			this._map.hideBusy();
		}
		else if (textMsg.startsWith('error:') && command.errorCmd === 'load') {
			this._map.hideBusy();
			this.close();

			var errorKind = command.errorKind;
			var passwordNeeded = false;
			if (errorKind.startsWith('passwordrequired')) {
				passwordNeeded = true;
				var msg = '';
				var passwordType = errorKind.split(':')[1];
				if (passwordType === 'to-view') {
					msg += _('Document requires password to view.');
				}
				else if (passwordType === 'to-modify') {
					msg += _('Document requires password to modify.');
					msg += ' ';
					msg += _('Hit Cancel to open in view-only mode.');
				}
			} else if (errorKind.startsWith('wrongpassword')) {
				passwordNeeded = true;
				msg = _('Wrong password provided. Please try again.');
			} else if (errorKind.startsWith('faileddocloading')) {
				this._map._fatal = true;
				this._map.fire('error', {msg: errorMessages.faileddocloading});
			} else if (errorKind.startsWith('docunloading')) {
				// The document is unloading. Have to wait a bit.
				this._map._active = false;

				if (this.ReconnectCount++ >= 10) {
					clearTimeout(vex.timer);
					return; // Give up.
				}

				map = this._map;
				vex.timer = setInterval(function() {
					try {
						// Activate and cancel timer and dialogs.
						map._activate();
					} catch (error) {
						console.warn('Cannot activate map');
					}
				}, 1000);
			}

			if (passwordNeeded) {
				// Ask the user for password
				vex.dialog.open({
					message: msg,
					input: '<input name="password" type="password" required />',
					callback: L.bind(function(data) {
						if (data) {
							this._map._docPassword = data.password;
							this._map.loadDocument();
						} else if (passwordType === 'to-modify') {
							this._map._docPassword = '';
							this._map.loadDocument();
						} else {
							this._map.hideBusy();
						}
					}, this)
				});
				return;
			}
		}
		else if (textMsg.startsWith('error:') && !this._map._docLayer) {
			textMsg = textMsg.substring(6);
			if (command.errorKind === 'hardlimitreached') {

				textMsg = errorMessages.limitreachedprod;
				textMsg = textMsg.replace(/%0/g, command.params[0]);
				textMsg = textMsg.replace(/%1/g, command.params[1]);
			}
			else if (command.errorKind === 'serviceunavailable') {
				textMsg = errorMessages.serviceunavailable;
			}
			this._map._fatal = true;
			this._map._active = false; // Practically disconnected.
			this._map.fire('error', {msg: textMsg});
		}
		else if (textMsg.startsWith('info:') && command.errorCmd === 'socket') {
			if (command.errorKind === 'limitreached' && !this.WasShownLimitDialog) {
				this.WasShownLimitDialog = true;
				textMsg = errorMessages.limitreached;
				textMsg = textMsg.replace(/{docs}/g, command.params[0]);
				textMsg = textMsg.replace(/{connections}/g, command.params[1]);
				textMsg = textMsg.replace(/{productname}/g, (typeof brandProductName !== 'undefined' ?
						brandProductName : 'LibreOffice Online'));
				var brandFAQURL = (typeof brandProductFAQURL !== 'undefined') ?
						brandProductFAQURL : 'https://hub.libreoffice.org/professional-online-support';
				this._map.fire('infobar',
					{
						msg: textMsg,
						action: brandFAQURL,
						actionLabel: errorMessages.infoandsupport
					});
			}
		}
		else if (textMsg.startsWith('pong ') && this._map._docLayer && this._map._docLayer._debug) {
			var times = this._map._docLayer._debugTimePING;
			var timeText = this._map._docLayer._debugSetTimes(times, +new Date() - this._map._docLayer._debugPINGQueue.shift());
			this._map._docLayer._debugData['ping'].setPrefix('Server ping time: ' + timeText +
					'. Rendered tiles: ' + command.rendercount +
					', last: ' + (command.rendercount - this._map._docLayer._debugRenderCount));
			this._map._docLayer._debugRenderCount = command.rendercount;
		}
		else if (textMsg.startsWith('saveas:') || textMsg.startsWith('renamefile:')) {
			this._map.hideBusy();
			if (command !== undefined && command.url !== undefined && command.url !== '') {
				this.close();
				var url = command.url;
				var accessToken = this._getParameterByName(url, 'access_token');
				var accessTokenTtl = this._getParameterByName(url, 'access_token_ttl');

				if (accessToken !== undefined) {
					if (accessTokenTtl === undefined) {
						accessTokenTtl = 0;
					}
					this._map.options.docParams = { 'access_token': accessToken, 'access_token_ttl': accessTokenTtl };
				}
				else {
					this._map.options.docParams = {};
				}

				// setup for loading the new document, and trigger the load
				var docUrl = url.split('?')[0];
				this._map.options.doc = docUrl;
				this._map.options.wopiSrc = encodeURIComponent(docUrl);
				this._map.loadDocument();
				this._map.sendInitUNOCommands();

				if (textMsg.startsWith('renamefile:')) {
					this._map.fire('postMessage', {
						msgId: 'File_Rename',
						args: {
							NewName: command.filename
						}
					});
				}
			}
			// var name = command.name; - ignored, we get the new name via the wopi's BaseFileName
		}
		else if (textMsg.startsWith('statusindicator:')) {
			//FIXME: We should get statusindicator when saving too, no?
			this._map.showBusy(_('Connecting...'), true);
			if (textMsg.startsWith('statusindicator: ready')) {
				// We're connected: cancel timer and dialog.
				this.ReconnectCount = 0;
				clearTimeout(vex.timer);
				vex.closeAll();
			}
		}
		else if (!textMsg.startsWith('tile:') && !textMsg.startsWith('renderfont:') && !textMsg.startsWith('windowpaint:')) {
			// log the tile msg separately as we need the tile coordinates
			L.Log.log(textMsg, L.INCOMING);

			if (imgBytes !== undefined) {
				try {
					// if it's not a tile, parse the whole message
					textMsg = String.fromCharCode.apply(null, imgBytes);
				} catch (error) {
					// big data string
					textMsg = this._utf8ToString(imgBytes);
				}
			}

			// Decode UTF-8 in case it is binary frame
			if (typeof e.data === 'object') {
				// FIXME: Not sure what this code is supposed to do. Doesn't
				// decodeURIComponent() exactly reverse what window.escape() (which
				// is a deprecated equivalent of encodeURIComponent()) does? In what
				// case is this code even hit? If somebody figures out what is going
				// on here, please replace this comment with an explanation.
				textMsg = decodeURIComponent(window.escape(textMsg));
			}
		}
		else if (window.ThisIsTheiOSApp) {
			// In the iOS app, the native code sends us the PNG tile already as a data: URL after the newline
			var newlineIndex = textMsg.indexOf('\n');
			if (newlineIndex > 0) {
				img = textMsg.substring(newlineIndex+1);
				textMsg = textMsg.substring(0, newlineIndex);
			}
		}
		else {
			var data = imgBytes.subarray(index + 1);

			if (data.length > 0 && data[0] == 68 /* D */)
			{
				console.log('Socket: got a delta !');
				img = data;
			}
			else
			{
				// read the tile data
				var strBytes = '';
				for (var i = 0; i < data.length; i++) {
					strBytes += String.fromCharCode(data[i]);
				}
				img = 'data:image/png;base64,' + window.btoa(strBytes);
			}
		}

		if (textMsg.startsWith('status:')) {
			if (!this._map._docLayer) {
				// first status message, we need to create the document layer
				var tileWidthTwips = this._map.options.tileWidthTwips;
				var tileHeightTwips = this._map.options.tileHeightTwips;
				if (this._map.options.zoom !== this._map.options.defaultZoom) {
					var scale = this._map.options.crs.scale(this._map.options.defaultZoom - this._map.options.zoom);
					tileWidthTwips = Math.round(tileWidthTwips * scale);
					tileHeightTwips = Math.round(tileHeightTwips * scale);
				}

				var docLayer = null;
				if (command.type === 'text') {
					docLayer = new L.WriterTileLayer('', {
						permission: this._map.options.permission,
						tileWidthTwips: tileWidthTwips,
						tileHeightTwips: tileHeightTwips,
						docType: command.type
					});
				}
				else if (command.type === 'spreadsheet') {
					docLayer = new L.CalcTileLayer('', {
						permission: this._map.options.permission,
						tileWidthTwips: tileWidthTwips,
						tileHeightTwips: tileHeightTwips,
						docType: command.type
					});
					if (!this._map.options.backgroundLayer) {
						this._map.options.backgroundLayer = new L.CalcBackground().addTo(this._map);
					}
				}
				else {
					if (command.type === 'presentation' &&
					    this._map.options.defaultZoom === this._map.options.zoom) {
						// If we have a presentation document and the zoom level has not been set
						// in the options, resize the document so that it fits the viewing area.
						// FIXME: Should this 256 be window.tileSize? Unclear to me.
						var verticalTiles = this._map.getSize().y / 256;
						tileWidthTwips = Math.round(command.height / verticalTiles);
						tileHeightTwips = Math.round(command.height / verticalTiles);
					}
					docLayer = new L.ImpressTileLayer('', {
						permission: this._map.options.permission,
						tileWidthTwips: tileWidthTwips,
						tileHeightTwips: tileHeightTwips,
						docType: command.type
					});
				}

				this._map._docLayer = docLayer;
				this._map.addLayer(docLayer);
				this._map.fire('doclayerinit');
			}
			else if (this._reconnecting) {
				// we are reconnecting ...
				this._reconnecting = false;
				this._map._docLayer._resetClientVisArea();
				this._map._docLayer._requestNewTiles();
				this._map.fire('statusindicator', {statusType: 'reconnected'});
				this._map.setPermission(this._map.options.permission);
			}

			this._map.fire('docloaded', {status: true});
		}

		// These can arrive very early during the startup, and never again.
		if (textMsg.startsWith('statusindicator')) {
			if (textMsg.startsWith('statusindicatorstart:')) {
				this._map.fire('statusindicator', {statusType : 'start'});
				return;
			}
			else if (textMsg.startsWith('statusindicatorsetvalue:')) {
				var value = textMsg.match(/\d+/g)[0];
				this._map.fire('statusindicator', {statusType : 'setvalue', value : value});
				return;
			}
			else if (textMsg.startsWith('statusindicatorfinish:')) {
				this._map.fire('statusindicator', {statusType : 'finish'});
				this._map._fireInitComplete('statusindicatorfinish');
				return;
			}
		}

		if (this._map._docLayer) {
			this._map._docLayer._onMessage(textMsg, img);
		}
	},

	_onSocketError: function () {
		console.debug('_onSocketError:');
		this._map.hideBusy();
		// Let onclose (_onSocketClose) report errors.
	},

	_onSocketClose: function () {
		console.debug('_onSocketClose:');
		var isActive = this._map._active;
		this._map.hideBusy();
		this._map._active = false;

		if (this._map._docLayer) {
			this._map._docLayer.removeAllViews();
			this._map._docLayer._resetClientVisArea();
		}

		if (isActive && this._reconnecting) {
			// Don't show this before first transparently trying to reconnect.
			this._map.fire('error', {msg: _('Well, this is embarrassing, we cannot connect to your document. Please try again.'), cmd: 'socket', kind: 'closed', id: 4});
		}

		// Reset wopi's app loaded so that reconnecting again informs outerframe about initialization
		this._map['wopi'].resetAppLoaded();
		this._map.fire('docloaded', {status: false});

		if (!this._reconnecting) {
			this._reconnecting = true;
			this._map._activate();
		}
	},

	parseServerCmd: function (msg) {
		var tokens = msg.split(/[ \n]+/);
		var command = {};
		for (var i = 0; i < tokens.length; i++) {
			if (tokens[i].substring(0, 9) === 'tileposx=') {
				command.x = parseInt(tokens[i].substring(9));
			}
			else if (tokens[i].substring(0, 9) === 'tileposy=') {
				command.y = parseInt(tokens[i].substring(9));
			}
			else if (tokens[i].substring(0, 2) === 'x=') {
				command.x = parseInt(tokens[i].substring(2));
			}
			else if (tokens[i].substring(0, 2) === 'y=') {
				command.y = parseInt(tokens[i].substring(2));
			}
			else if (tokens[i].substring(0, 10) === 'tilewidth=') {
				command.tileWidth = parseInt(tokens[i].substring(10));
			}
			else if (tokens[i].substring(0, 11) === 'tileheight=') {
				command.tileHeight = parseInt(tokens[i].substring(11));
			}
			else if (tokens[i].substring(0, 6) === 'width=') {
				command.width = parseInt(tokens[i].substring(6));
			}
			else if (tokens[i].substring(0, 7) === 'height=') {
				command.height = parseInt(tokens[i].substring(7));
			}
			else if (tokens[i].substring(0, 5) === 'part=') {
				command.part = parseInt(tokens[i].substring(5));
			}
			else if (tokens[i].substring(0, 6) === 'parts=') {
				command.parts = parseInt(tokens[i].substring(6));
			}
			else if (tokens[i].substring(0, 8) === 'current=') {
				command.selectedPart = parseInt(tokens[i].substring(8));
			}
			else if (tokens[i].substring(0, 3) === 'id=') {
				// remove newline characters
				command.id = tokens[i].substring(3).replace(/(\r\n|\n|\r)/gm, '');
			}
			else if (tokens[i].substring(0, 5) === 'type=') {
				// remove newline characters
				command.type = tokens[i].substring(5).replace(/(\r\n|\n|\r)/gm, '');
			}
			else if (tokens[i].substring(0, 4) === 'cmd=') {
				command.errorCmd = tokens[i].substring(4);
			}
			else if (tokens[i].substring(0, 5) === 'code=') {
				command.errorCode = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 5) === 'kind=') {
				command.errorKind = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 5) === 'jail=') {
				command.jail = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 4) === 'dir=') {
				command.dir = tokens[i].substring(4);
			}
			else if (tokens[i].substring(0, 5) === 'name=') {
				command.name = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 9) === 'filename=') {
				command.filename = tokens[i].substring(9);
			}
			else if (tokens[i].substring(0, 5) === 'port=') {
				command.port = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 5) === 'font=') {
				command.font = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 5) === 'char=') {
				command.char = tokens[i].substring(5);
			}
			else if (tokens[i].substring(0, 4) === 'url=') {
				command.url = tokens[i].substring(4);
			}
			else if (tokens[i].substring(0, 7) === 'viewid=') {
				command.viewid = tokens[i].substring(7);
			}
			else if (tokens[i].substring(0, 7) === 'params=') {
				command.params = tokens[i].substring(7).split(',');
			}
			else if (tokens[i].substring(0, 9) === 'renderid=') {
				command.renderid = tokens[i].substring(9);
			}
			else if (tokens[i].substring(0, 12) === 'rendercount=') {
				command.rendercount = parseInt(tokens[i].substring(12));
			}
			else if (tokens[i].startsWith('wid=')) {
				command.wireId = this.getParameterValue(tokens[i]);
			}
			else if (tokens[i].substring(0, 6) === 'title=') {
				command.title = tokens[i].substring(6);
			}
			else if (tokens[i].substring(0, 12) === 'dialogwidth=') {
				command.dialogwidth = tokens[i].substring(12);
			}
			else if (tokens[i].substring(0, 13) === 'dialogheight=') {
				command.dialogheight = tokens[i].substring(13);
			}
			else if (tokens[i].substring(0, 10) === 'rectangle=') {
				command.rectangle = tokens[i].substring(10);
			}
			else if (tokens[i].substring(0, 12) === 'hiddenparts=') {
				var hiddenparts = tokens[i].substring(12).split(',');
				command.hiddenparts = [];
				hiddenparts.forEach(function (item) {
					command.hiddenparts.push(parseInt(item));
				});
			}
		}
		if (command.tileWidth && command.tileHeight && this._map._docLayer) {
			var defaultZoom = this._map.options.zoom;
			var scale = command.tileWidth / this._map._docLayer.options.tileWidthTwips;
			// scale = 1.2 ^ (defaultZoom - zoom)
			// zoom = defaultZoom -log(scale) / log(1.2)
			command.zoom = Math.round(defaultZoom - Math.log(scale) / Math.log(1.2));
		}
		return command;
	}
});

L.socket = function (map) {
	return new L.Socket(map);
};

/* -*- js-indent-level: 8 -*- */
/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

(function () {

	var ua = navigator.userAgent.toLowerCase(),
	    doc = document.documentElement,

	    ie = 'ActiveXObject' in window,

	    webkit    = ua.indexOf('webkit') !== -1,
	    phantomjs = ua.indexOf('phantom') !== -1,
	    android23 = ua.search('android [23]') !== -1,
	    chrome    = ua.indexOf('chrome') !== -1,
	    gecko     = ua.indexOf('gecko') !== -1  && !webkit && !window.opera && !ie,

	    win = navigator.platform.indexOf('Win') === 0,

	    mobile = typeof orientation !== 'undefined' || ua.indexOf('mobile') !== -1,
	    msPointer = !window.PointerEvent && window.MSPointerEvent,
	    pointer = (window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints) || msPointer,

	    ie3d = ie && ('transition' in doc.style),
	    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
	    gecko3d = 'MozPerspective' in doc.style,
	    opera12 = 'OTransition' in doc.style;


	var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch));

	L.Browser = {

		// @property ie: Boolean
		// `true` for all Internet Explorer versions (not Edge).
		ie: ie,

		// @property ielt9: Boolean
		// `true` for Internet Explorer versions less than 9.
		ielt9: ie && !document.addEventListener,

		// @property edge: Boolean
		// `true` for the Edge web browser.
		edge: 'msLaunchUri' in navigator && !('documentMode' in document),

		// @property webkit: Boolean
		// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
		webkit: webkit,

		// @property gecko: Boolean
		// `true` for gecko-based browsers like Firefox.
		gecko: gecko,

		// @property android: Boolean
		// `true` for any browser running on an Android platform.
		android: ua.indexOf('android') !== -1,

		// @property android23: Boolean
		// `true` for browsers running on Android 2 or Android 3.
		android23: android23,

		// @property chrome: Boolean
		// `true` for the Chrome browser.
		chrome: chrome,

		// @property safari: Boolean
		// `true` for the Safari browser.
		safari: !chrome && ua.indexOf('safari') !== -1,


		// @property win: Boolean
		// `true` when the browser is running in a Windows platform
		win: win,


		// @property ie3d: Boolean
		// `true` for all Internet Explorer versions supporting CSS transforms.
		ie3d: ie3d,

		// @property webkit3d: Boolean
		// `true` for webkit-based browsers supporting CSS transforms.
		webkit3d: webkit3d,

		// @property gecko3d: Boolean
		// `true` for gecko-based browsers supporting CSS transforms.
		gecko3d: gecko3d,

		// @property opera12: Boolean
		// `true` for the Opera browser supporting CSS transforms (version 12 or later).
		opera12: opera12,

		// @property any3d: Boolean
		// `true` for all browsers supporting CSS transforms.
		any3d: !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantomjs,


		// @property mobile: Boolean
		// `true` for all browsers running in a mobile device.
		mobile: mobile,

		// @property mobileWebkit: Boolean
		// `true` for all webkit-based browsers in a mobile device.
		mobileWebkit: mobile && webkit,

		// @property mobileWebkit3d: Boolean
		// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
		mobileWebkit3d: mobile && webkit3d,

		// @property mobileOpera: Boolean
		// `true` for the Opera browser in a mobile device.
		mobileOpera: mobile && window.opera,

		// @property mobileGecko: Boolean
		// `true` for gecko-based browsers running in a mobile device.
		mobileGecko: mobile && gecko,


		// @property touch: Boolean
		// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
		touch: !!touch,

		// @property msPointer: Boolean
		// `true` for browsers implementing the Microsoft touch events model (notably IE10).
		msPointer: !!msPointer,

		// @property pointer: Boolean
		// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
		pointer: !!pointer,


		// @property retina: Boolean
		// `true` for browsers on a high-resolution "retina" screen.
		retina: (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1
	};

}());

/**
 * @class  L.Matrix
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 * @param {Number} e
 * @param {Number} f
 */
L.Matrix = function(a, b, c, d, e, f) {

	/**
	* @type {Array.<Number>}
	*/
	this._matrix = [a, b, c, d, e, f];
};


L.Matrix.prototype = {


	/**
	* @param  {L.Point} point
	* @return {L.Point}
	*/
	transform: function(point) {
		return this._transform(point.clone());
	},


	/**
	* Destructive
	*
	* [ x ] = [ a  b  tx ] [ x ] = [ a * x + b * y + tx ]
	* [ y ] = [ c  d  ty ] [ y ] = [ c * x + d * y + ty ]
	*
	* @param  {L.Point} point
	* @return {L.Point}
	*/
	_transform: function(point) {
		var matrix = this._matrix;
		var x = point.x, y = point.y;
		point.x = matrix[0] * x + matrix[1] * y + matrix[4];
		point.y = matrix[2] * x + matrix[3] * y + matrix[5];
		return point;
	},


	/**
	* @param  {L.Point} point
	* @return {L.Point}
	*/
	untransform: function (point) {
		var matrix = this._matrix;
		return new L.Point(
			(point.x / matrix[0] - matrix[4]) / matrix[0],
			(point.y / matrix[2] - matrix[5]) / matrix[2]
		);
	},


	/**
	* @return {L.Matrix}
	*/
	clone: function() {
		var matrix = this._matrix;
		return new L.Matrix(
			matrix[0], matrix[1], matrix[2],
			matrix[3], matrix[4], matrix[5]
		);
	},


	/**
	* @param {L.Point=|Number=} translate
	* @return {L.Matrix|L.Point}
	*/
	translate: function(translate) {
		if (translate === undefined) {
			return new L.Point(this._matrix[4], this._matrix[5]);
		}

		var translateX, translateY;
		if (typeof translate === 'number') {
			translateX = translateY = translate;
		} else {
			translateX = translate.x;
			translateY = translate.y;
		}

		return this._add(1, 0, 0, 1, translateX, translateY);
	},


	/**
	* @param {L.Point=|Number=} scale
	* @return {L.Matrix|L.Point}
	*/
	scale: function(scale, origin) {
		if (scale === undefined) {
			return new L.Point(this._matrix[0], this._matrix[3]);
		}

		var scaleX, scaleY;
		origin = origin || L.point(0, 0);
		if (typeof scale === 'number') {
			scaleX = scaleY = scale;
		} else {
			scaleX = scale.x;
			scaleY = scale.y;
		}

		return this
			._add(scaleX, 0, 0, scaleY, origin.x, origin.y)
			._add(1, 0, 0, 1, -origin.x, -origin.y);
	},


	/**
	* m00  m01  x - m00 * x - m01 * y
	* m10  m11  y - m10 * x - m11 * y
	* @param {Number}   angle
	* @param {L.Point=} origin
	* @return {L.Matrix}
	*/
	rotate: function(angle, origin) {
		var cos = Math.cos(angle);
		var sin = Math.sin(angle);

		origin = origin || new L.Point(0, 0);

		return this
			._add(cos, sin, -sin, cos, origin.x, origin.y)
			._add(1, 0, 0, 1, -origin.x, -origin.y);
	},


	/**
	* Invert rotation
	* @return {L.Matrix}
	*/
	flip: function() {
		this._matrix[1] *= -1;
		this._matrix[2] *= -1;
		return this;
	},


	/**
	* @param {Number|L.Matrix} a
	* @param {Number} b
	* @param {Number} c
	* @param {Number} d
	* @param {Number} e
	* @param {Number} f
	*/
	_add: function(a, b, c, d, e, f) {
		var result = [[], [], []];
		var src = this._matrix;
		var m = [
			[src[0], src[2], src[4]],
			[src[1], src[3], src[5]],
			[     0,      0,     1]
		];
		var other = [
			[a, c, e],
			[b, d, f],
			[0, 0, 1]
		], val;


		if (a && a instanceof L.Matrix) {
			src = a._matrix;
			other = [
				[src[0], src[2], src[4]],
				[src[1], src[3], src[5]],
				[     0,      0,     1]];
		}

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				val = 0;
				for (var k = 0; k < 3; k++) {
					val += m[i][k] * other[k][j];
				}
				result[i][j] = val;
			}
		}

		this._matrix = [
			result[0][0], result[1][0], result[0][1],
			result[1][1], result[0][2], result[1][2]
		];
		return this;
	}


};


L.matrix = function(a, b, c, d, e, f) {
	return new L.Matrix(a, b, c, d, e, f);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Point represents a point with x and y coordinates.
 */

L.Point = function (x, y, round) {
	this.x = (round ? Math.round(x) : x);
	this.y = (round ? Math.round(y) : y);
};

L.Point.prototype = {

	clone: function () {
		return new L.Point(this.x, this.y);
	},

	// non-destructive, returns a new point
	add: function (point) {
		return this.clone()._add(L.point(point));
	},

	// destructive, used directly for performance in situations where it's safe to modify existing point
	_add: function (point) {
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	subtract: function (point) {
		return this.clone()._subtract(L.point(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	distanceTo: function (point) {
		point = L.point(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	equals: function (point) {
		point = L.point(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	contains: function (point) {
		point = L.point(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	toString: function () {
		return 'Point(' +
		        L.Util.formatNum(this.x) + ', ' +
		        L.Util.formatNum(this.y) + ')';
	}
};

L.point = function (x, y, round) {
	if (x instanceof L.Point) {
		return x;
	}
	if (L.Util.isArray(x)) {
		return new L.Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	return new L.Point(x, y, round);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
 */

L.Bounds = function (a, b) { //(Point, Point) or Point[]
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
};

L.Bounds.prototype = {
	// extend the bounds to contain the given point
	extend: function (point) { // (Point)
		point = L.point(point);

		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	getCenter: function (round) { // (Boolean) -> Point
		return new L.Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	getBottomLeft: function () { // -> Point
		return new L.Point(this.min.x, this.max.y);
	},

	getTopRight: function () { // -> Point
		return new L.Point(this.max.x, this.min.y);
	},

	getSize: function () {
		return this.max.subtract(this.min);
	},

	contains: function (obj) { // (Bounds) or (Point) -> Boolean
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof L.Point) {
			obj = L.point(obj);
		} else {
			obj = L.bounds(obj);
		}

		if (obj instanceof L.Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = L.bounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	toString: function () {
		return '[' +
		        this.min.toString() + ', ' +
		        this.max.toString() + ']';
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};

L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
	if (!a || a instanceof L.Bounds) {
		return a;
	}
	return new L.Bounds(a, b);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
 */

L.Transformation = function (a, b, c, d) {
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
};

L.Transformation.prototype = {
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	untransform: function (point, scale) {
		scale = scale || 1;
		return new L.Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.DomUtil contains various utility functions for working with DOM.
 */

L.DomUtil = {
	get: function (id) {
		return typeof id === 'string' ? document.getElementById(id) : id;
	},

	getStyle: function (el, style) {

		var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

		if ((!value || value === 'auto') && document.defaultView) {
			var css = document.defaultView.getComputedStyle(el, null);
			value = css ? css[style] : null;
		}

		return value === 'auto' ? null : value;
	},

	setStyle: function (el, style, value) {
		el.style[style] = value;
	},

	create: function (tagName, className, container) {

		var el = document.createElement(tagName);
		el.className = className;

		if (container) {
			container.appendChild(el);
		}

		return el;
	},

	createWithId: function (tagName, id, container) {

		var el = document.createElement(tagName);
		el.id = id;

		if (container) {
			container.appendChild(el);
		}

		return el;
	},

	remove: function (el) {
		var parent = el.parentNode;
		if (parent) {
			parent.removeChild(el);
		}
	},

	empty: function (el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	},

	toFront: function (el) {
		el.parentNode.appendChild(el);
	},

	toBack: function (el) {
		var parent = el.parentNode;
		parent.insertBefore(el, parent.firstChild);
	},

	hasClass: function (el, name) {
		if (el.classList !== undefined) {
			return el.classList.contains(name);
		}
		var className = L.DomUtil.getClass(el);
		return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
	},

	addClass: function (el, name) {
		if (el.classList !== undefined) {
			var classes = L.Util.splitWords(name);
			for (var i = 0, len = classes.length; i < len; i++) {
				el.classList.add(classes[i]);
			}
		} else if (!L.DomUtil.hasClass(el, name)) {
			var className = L.DomUtil.getClass(el);
			L.DomUtil.setClass(el, (className ? className + ' ' : '') + name);
		}
	},

	removeClass: function (el, name) {
		if (el.classList !== undefined) {
			el.classList.remove(name);
		} else {
			L.DomUtil.setClass(el, L.Util.trim((' ' + L.DomUtil.getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
		}
	},

	setClass: function (el, name) {
		if (el.className.baseVal === undefined) {
			el.className = name;
		} else {
			// in case of SVG element
			el.className.baseVal = name;
		}
	},

	getClass: function (el) {
		return el.className.baseVal === undefined ? el.className : el.className.baseVal;
	},

	setOpacity: function (el, value) {

		if ('opacity' in el.style) {
			el.style.opacity = value;

		} else if ('filter' in el.style) {
			L.DomUtil._setOpacityIE(el, value);
		}
	},

	_setOpacityIE: function (el, value) {
		var filter = false,
		    filterName = 'DXImageTransform.Microsoft.Alpha';

		// filters collection throws an error if we try to retrieve a filter that doesn't exist
		try {
			filter = el.filters.item(filterName);
		} catch (e) {
			// don't set opacity to 1 if we haven't already set an opacity,
			// it isn't needed and breaks transparent pngs.
			if (value === 1) { return; }
		}

		value = Math.round(value * 100);

		if (filter) {
			filter.Enabled = (value !== 100);
			filter.Opacity = value;
		} else {
			el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
		}
	},

	testProp: function (props) {

		var style = document.documentElement.style;

		for (var i = 0; i < props.length; i++) {
			if (props[i] in style) {
				return props[i];
			}
		}
		return false;
	},

	setTransform: function (el, offset, scale) {
		var pos = offset || new L.Point(0, 0);

		el.style[L.DomUtil.TRANSFORM] =
			'translate3d(' + pos.x + 'px,' + pos.y + 'px' + ',0)' + (scale ? ' scale(' + scale + ')' : '');
	},

	setPosition: function (el, point, no3d) { // (HTMLElement, Point[, Boolean])

		/*eslint-disable */
		el._leaflet_pos = point;
		/*eslint-enable */

		if (L.Browser.any3d && !no3d) {
			L.DomUtil.setTransform(el, point);
		} else {
			el.style.left = point.x + 'px';
			el.style.top = point.y + 'px';
		}
	},

	getPosition: function (el) {
		// this method is only used for elements previously positioned using setPosition,
		// so it's safe to cache the position for performance

		return el._leaflet_pos;
	}
};


(function () {
	// prefix style property names

	L.DomUtil.TRANSFORM = L.DomUtil.testProp(
			['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);


	// webkitTransition comes first because some browser versions that drop vendor prefix don't do
	// the same for the transitionend event, in particular the Android 4.1 stock browser

	var transition = L.DomUtil.TRANSITION = L.DomUtil.testProp(
			['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

	L.DomUtil.TRANSITION_END =
			transition === 'webkitTransition' || transition === 'OTransition' ? transition + 'End' : 'transitionend';


	if ('onselectstart' in document) {
		L.DomUtil.disableTextSelection = function () {
			L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
		};
		L.DomUtil.enableTextSelection = function () {
			L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
		};

	} else {
		var userSelectProperty = L.DomUtil.testProp(
			['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

		L.DomUtil.disableTextSelection = function () {
			if (userSelectProperty) {
				var style = document.documentElement.style;
				this._userSelect = style[userSelectProperty];
				style[userSelectProperty] = 'none';
			}
		};
		L.DomUtil.enableTextSelection = function () {
			if (userSelectProperty) {
				document.documentElement.style[userSelectProperty] = this._userSelect;
				delete this._userSelect;
			}
		};
	}

	L.DomUtil.disableImageDrag = function () {
		L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
	};
	L.DomUtil.enableImageDrag = function () {
		L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
	};

	L.DomUtil.preventOutline = function (element) {
		L.DomUtil.restoreOutline();
		this._outlineElement = element;
		this._outlineStyle = element.style.outline;
		element.style.outline = 'none';
		L.DomEvent.on(window, 'keydown', L.DomUtil.restoreOutline, this);
	};
	L.DomUtil.restoreOutline = function () {
		if (!this._outlineElement) { return; }
		this._outlineElement.style.outline = this._outlineStyle;
		delete this._outlineElement;
		delete this._outlineStyle;
		L.DomEvent.off(window, 'keydown', L.DomUtil.restoreOutline, this);
	};
})();

/* -*- js-indent-level: 8 -*- */
/*
 * L.LatLng represents a geographical point with latitude and longitude coordinates.
 */

L.LatLng = function (lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	this.lat = +lat;
	this.lng = +lng;

	if (alt !== undefined) {
		this.alt = +alt;
	}
};

L.LatLng.prototype = {
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = L.latLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	toString: function (precision) {
		return 'LatLng(' +
		        L.Util.formatNum(this.lat, precision) + ', ' +
		        L.Util.formatNum(this.lng, precision) + ')';
	},

	distanceTo: function (other) {
		return L.CRS.Earth.distance(this, L.latLng(other));
	},

	wrap: function () {
		return L.CRS.Earth.wrapLatLng(this);
	},

	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return L.latLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	}
};


// constructs LatLng with different signatures
// (LatLng) or ([Number, Number]) or (Number, Number) or (Object)

L.latLng = function (a, b, c) {
	if (a instanceof L.LatLng) {
		return a;
	}
	if (L.Util.isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new L.LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new L.LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new L.LatLng(a, b, c);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
 */

L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
	if (!southWest) { return; }

	var latlngs = northEast ? [southWest, northEast] : southWest;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
};

L.LatLngBounds.prototype = {

	// extend the bounds to contain the given point or bounds
	extend: function (obj) { // (LatLng) or (LatLngBounds)
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof L.LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof L.LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(L.latLng(obj) || L.latLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new L.LatLng(sw2.lat, sw2.lng);
			this._northEast = new L.LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// extend the bounds by a percentage
	pad: function (bufferRatio) { // (Number) -> LatLngBounds
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new L.LatLngBounds(
		        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	getCenter: function () { // -> LatLng
		return new L.LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	getSouthWest: function () {
		return this._southWest;
	},

	getNorthEast: function () {
		return this._northEast;
	},

	getNorthWest: function () {
		return new L.LatLng(this.getNorth(), this.getWest());
	},

	getSouthEast: function () {
		return new L.LatLng(this.getSouth(), this.getEast());
	},

	getWest: function () {
		return this._southWest.lng;
	},

	getSouth: function () {
		return this._southWest.lat;
	},

	getEast: function () {
		return this._northEast.lng;
	},

	getNorth: function () {
		return this._northEast.lat;
	},

	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
			obj = L.latLng(obj);
		} else {
			obj = L.latLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof L.LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	intersects: function (bounds) { // (LatLngBounds)
		bounds = L.latLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	equals: function (bounds) { // (LatLngBounds)
		if (!bounds) { return false; }

		bounds = L.latLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest()) &&
		       this._northEast.equals(bounds.getNorthEast());
	},

	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

L.LatLngBounds.createDefault = function() {
	return new L.LatLngBounds(new L.LatLng(0, 0), new L.LatLng(0, 0));
};

//TODO International date line?

L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
	if (!a || a instanceof L.LatLngBounds) {
		return a;
	}
	return new L.LatLngBounds(a, b);
};

/* -*- js-indent-level: 8 -*- */
/*
 * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
 */

L.Projection = {};

L.Projection.LonLat = {
	project: function (latlng) {
		return new L.Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new L.LatLng(point.y, point.x);
	},

	bounds: L.bounds([-180, -90], [180, 90])
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.CRS is the base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
 */

L.CRS = {
	// converts geo coords to pixel ones
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// converts pixel coords to geo coords
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// converts geo coords to projection-specific coords (e.g. in meters)
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// converts projected coords to geo coords
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// defines how the world scales with zoom
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// returns the bounds of the world in projected coords if applicable
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return L.bounds(min, max);
	},

	// whether a coordinate axis wraps in a given range (e.g. longitude from -180 to 180); depends on CRS
	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// if true, the coordinate space will be unbounded (infinite in all directions)
	// infinite: false,

	// wraps geo coords in certain ranges if applicable
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? L.Util.wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? L.Util.wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat;

		return L.latLng(lat, lng);
	}
};

/* -*- js-indent-level: 8 -*- */
/*
 * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
 */

L.CRS.Simple = L.extend({}, L.CRS, {
	projection: L.Projection.LonLat,
	transformation: new L.Transformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(1.2, zoom);
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

/* -*- js-indent-level: 8; fill-column: 100 -*- */
/*
 * L.Map is the central class of the API - it is used to create a map.
 */

function moveObjectVertically(obj, diff) {
	if (obj) {
		var prevTop = obj.css('top');
		if (prevTop) {
			prevTop = parseInt(prevTop.slice(0, -2)) + diff;
		}
		else {
			prevTop = 0 + diff;
		}
		obj.css({'top': String(prevTop) + 'px'});
	}
}

function isAnyVexDialogActive() {
	var res = false;
	for (var vexId in vex.getAll()) {
		res = res || vex.getById(vexId).isOpen;
	}
	return res;
}

/* global closebutton vex revHistoryEnabled $ _ */
L.Map = L.Evented.extend({

	options: {
		crs: L.CRS.Simple,
		center: [0, 0],
		zoom: 10,
		minZoom: 6,
		maxZoom: 14,
		maxBounds: L.latLngBounds([0, 0], [-100, 100]),
		fadeAnimation: false, // Not useful for typing.
		trackResize: true,
		markerZoomAnimation: true,
		defaultZoom: 10,
		// 15 = 1440 twips-per-inch / 96 dpi.
		// Chosen to match previous hardcoded value of 3840 for
		// the current tile pixel size of 256.
		tileWidthTwips: window.tileSize * 15,
		tileHeightTwips: window.tileSize * 15,
		urlPrefix: 'lool',
		wopiSrc: '',
		cursorURL: 'images/cursors'
	},

	lastActiveTime: Date.now(),

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = L.setOptions(this, options);

		if (this.options.documentContainer) {
			// have it as DOM object
			this.options.documentContainer = L.DomUtil.get(this.options.documentContainer);
		}

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = L.bind(this._onResize, this);

		// Start with readonly toolbars on desktop
		if (!L.Browser.mobile) {
			L.DomUtil.addClass(L.DomUtil.get('toolbar-wrapper'), 'readonly');
		}

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(L.latLng(options.center), options.zoom, {reset: true});
		}

		L.Cursor.imagePath = options.cursorURL;

		if (options.webserver === undefined) {
			var protocol = window.location.protocol === 'file:' ? 'https:' : window.location.protocol;
			options.webserver = options.server.replace(/^(ws|wss):/i, protocol);
		}

		// we are adding components like '/insertfile' at the end which would
		// lead to URL's of the form <webserver>//insertfile/...
		options.webserver = options.webserver.replace(/\/*$/, '');

		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;
		this._bDisableKeyboard = false;
		this._active = true;
		this._fatal = false;
		this._enabled = true;
		this._debugAlwaysActive = false; // disables the dimming / document inactivity when true
		this._serverRecycling = false;
		this._documentIdle = false;
		this._helpTarget = null; // help page that fits best the current context

		this.callInitHooks();

		if (this.options.imagePath) {
			L.Icon.Default.imagePath = this.options.imagePath;
		}
		this._addLayers(this.options.layers);
		this._socket = L.socket(this);

		var center = this.getCenter();
		if (L.Browser.mobile) {
			var doubledProgressHeight = 200;
			var size = new L.point(screen.width, screen.height - doubledProgressHeight);
			center = this.layerPointToLatLng(size._divideBy(2));
		}
		this._progressBar = L.progressOverlay(center, new L.point(150, 25));

		if (L.Browser.mobile) {
			this._clipboardContainer = L.control.mobileInput().addTo(this);
			if (this.tap !== undefined) {
				this._clipboardContainer._cursorHandler.on('up', this.tap._onCursorClick, this.tap);
			}
		} else {
			this._clipboardContainer = L.clipboardContainer();
			this.addLayer(this._clipboardContainer);
		}

		// Avoid white bar on the bottom - force resize-detector to get full size
		if (window.mode.isMobile()) {
			$('#document-container').css('bottom', '0px');
			this._clipboardContainer._textArea.blur();
			this._clipboardContainer._textArea.focus();
		}

		// When all these conditions are met, fire statusindicator:initializationcomplete
		this.initConditions = {
			'doclayerinit': false,
			'statusindicatorfinish': false,
			'StyleApply': false,
			'CharFontName': false,
			'updatepermission': false
		};
		this.initComplete = false;

		this.on('updatepermission', function(e) {
			if (!this.initComplete) {
				this._fireInitComplete('updatepermission');
			}

			if (e.perm === 'readonly') {
				L.DomUtil.addClass(this._container.parentElement, 'readonly');
				if (!L.Browser.mobile) {
					L.DomUtil.addClass(L.DomUtil.get('toolbar-wrapper'), 'readonly');
				}
				L.DomUtil.addClass(L.DomUtil.get('main-menu'), 'readonly');
				L.DomUtil.addClass(L.DomUtil.get('presentation-controls-wrapper'), 'readonly');
				L.DomUtil.addClass(L.DomUtil.get('spreadsheet-row-column-frame'), 'readonly');
			}
			else {
				L.DomUtil.removeClass(this._container.parentElement, 'readonly');
				if (!L.Browser.mobile) {
					L.DomUtil.removeClass(L.DomUtil.get('toolbar-wrapper'), 'readonly');
				}
				L.DomUtil.removeClass(L.DomUtil.get('main-menu'), 'readonly');
				L.DomUtil.removeClass(L.DomUtil.get('presentation-controls-wrapper'), 'readonly');
				L.DomUtil.removeClass(L.DomUtil.get('spreadsheet-row-column-frame'), 'readonly');
			}
		}, this);
		this.on('doclayerinit', function() {
			if (!this.initComplete) {
				this._fireInitComplete('doclayerinit');
			}
			if (!L.Browser.mobile && this._docLayer._docType == 'text') {
				var interactiveRuler = this._permission === 'edit' ? true : false;
				L.control.ruler({position:'topleft', interactive:interactiveRuler}).addTo(this);
			}
		});
		this.on('updatetoolbarcommandvalues', function(e) {
			if (this.initComplete) {
				return;
			}
			if (e.commandName === '.uno:StyleApply') {
				this._fireInitComplete('StyleApply');
			}
			else if (e.commandName === '.uno:CharFontName') {
				this._fireInitComplete('CharFontName');
			}
		});

		this.showBusy(_('Initializing...'), false);
		this.on('statusindicator', this._onUpdateProgress, this);

		this.on('editorgotfocus', this._onEditorGotFocus, this);

		// View info (user names and view ids)
		this._viewInfo = {};
		this._viewInfoByUserName = {};

		// View color map
		this._viewColors = {};

		// This becomes true if document was ever modified by the user
		this._everModified = false;

		// Document is completely loaded or not
		this._docLoaded = false;

		this.on('commandstatechanged', function(e) {
			if (e.commandName === '.uno:ModifiedStatus')
				this._everModified = this._everModified || (e.state === 'true');
		}, this);

		this.on('docloaded', function(e) {
			this._docLoaded = e.status;
			if (this._docLoaded) {
				// so that dim timer starts from now()
				this.lastActiveTime = Date.now();
				if (!document.hasFocus()) {
					this._deactivate();
				} else {
					this._activate();
				}
			} else if (this._docLayer) {
				// remove the comments and changes
				this._docLayer.clearAnnotations();
			}

			this.initializeModificationIndicator();
		}, this);
	},

	loadDocument: function(socket) {
		this._socket.connect(socket);
	},

	sendInitUNOCommands: function() {
		// TODO: remove duplicated init code
		this._socket.sendMessage('commandvalues command=.uno:LanguageStatus');
		this._socket.sendMessage('commandvalues command=.uno:ViewAnnotations');
		this.fire('updaterowcolumnheaders');
		this._docLayer._getToolbarCommandsValues();
	},

	// public methods that modify map state

	getViewId: function (username) {
		for (var idx in this._viewInfo) {
			if (this._viewInfo[idx].username === username) {
				return this._viewInfo[idx].id;
			}
		}
		return -1;
	},

	addView: function(viewInfo) {
		this._viewInfo[viewInfo.id] = viewInfo;
		if (viewInfo.userextrainfo !== undefined && viewInfo.userextrainfo.avatar !== undefined) {
			this._viewInfoByUserName[viewInfo.username] = viewInfo;
		}
		this.fire('postMessage', {msgId: 'View_Added', args: {Deprecated: true, ViewId: viewInfo.id, UserId: viewInfo.userid, UserName: viewInfo.username, UserExtraInfo: viewInfo.userextrainfo, Color: L.LOUtil.rgbToHex(viewInfo.color), ReadOnly: viewInfo.readonly}});

		// Fire last, otherwise not all events are handled correctly.
		this.fire('addview', {viewId: viewInfo.id, username: viewInfo.username, extraInfo: viewInfo.userextrainfo, readonly: this.isViewReadOnly(viewInfo.id)});

		this.updateAvatars();
	},

	removeView: function(viewid) {
		var username = this._viewInfo[viewid].username;
		delete this._viewInfoByUserName[this._viewInfo[viewid].username];
		delete this._viewInfo[viewid];
		this.fire('postMessage', {msgId: 'View_Removed', args: {Deprecated: true, ViewId: viewid}});

		// Fire last, otherwise not all events are handled correctly.
		this.fire('removeview', {viewId: viewid, username: username});
	},


	// replaced by animation-powered implementation in Map.PanAnimation.js
	setView: function (center, zoom) {
		zoom = zoom === undefined ? this.getZoom() : zoom;
		this._resetView(L.latLng(center), this._limitZoom(zoom));
		return this;
	},

	updateAvatars: function() {
		if (this._docLayer && this._docLayer._annotations && this._docLayer._annotations._items) {
			for (var idxAnno in this._docLayer._annotations._items) {
				var annotation = this._docLayer._annotations._items[idxAnno];
				var username = annotation._data.author;
				if (this._viewInfoByUserName[username])
					annotation._data.avatar = this._viewInfoByUserName[username].userextrainfo.avatar;
				annotation._updateContent();
			}
		}
	},

	initializeModificationIndicator: function() {
		var lastModButton = L.DomUtil.get('menu-last-mod');
		if (lastModButton !== null && lastModButton !== undefined
			&& lastModButton.firstChild.innerHTML !== null
			&& lastModButton.firstChild.childElementCount == 0) {
			var mainSpan = document.createElement('span');
			var label = document.createTextNode(_('Last modification'));
			var separator = document.createTextNode(': ');
			this.lastModIndicator = document.createElement('span');
			mainSpan.appendChild(label);
			mainSpan.appendChild(separator);
			mainSpan.appendChild(this.lastModIndicator);

			this.updateModificationIndicator(this._lastmodtime);

			// Replace menu button body with new content
			lastModButton.firstChild.innerHTML = '';
			lastModButton.firstChild.appendChild(mainSpan);

			if (revHistoryEnabled) {
				L.DomUtil.setStyle(lastModButton, 'cursor', 'pointer');
			}
		}
	},

	updateModificationIndicator: function(newModificationTime) {
		var timeout;

		if (typeof newModificationTime === 'string') {
			this._lastmodtime = newModificationTime;
		}

		clearTimeout(this._modTimeout);

		if (this.lastModIndicator !== null && this.lastModIndicator !== undefined) {
			var dateTime = new Date(this._lastmodtime.replace(/,.*/, 'Z'));
			var dateValue = dateTime.toLocaleDateString(String.locale,
				{ year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

			var elapsed = Date.now() - dateTime;
			if (elapsed < 60000) {
				dateValue = _('%d seconds ago').replace('%d', Math.round(elapsed / 1000));
				timeout = 6000;
			} else if (elapsed < 3600000) {
				dateValue = _('%d minutes ago').replace('%d', Math.round(elapsed / 60000));
				timeout = 60000;
			}

			this.lastModIndicator.innerHTML = dateValue;

			if (timeout) {
				this._modTimeout = setTimeout(L.bind(this.updateModificationIndicator, this, -1), timeout);
			}
		}
	},

	showBusy: function(label, bar) {
		// If document is already loaded, ask the toolbar widget to show busy
		// status on the bottom statusbar
		if (this._docLayer) {
			this.fire('showbusy', {label: label});
			return;
		}

		this._progressBar.setLabel(label);
		this._progressBar.setBar(bar);
		this._progressBar.setValue(0);

		if (!this.hasLayer(this._progressBar)) {
			this.addLayer(this._progressBar);
		}
	},

	hideBusy: function () {
		this.fire('hidebusy');

		if (this.hasLayer(this._progressBar)) {
			this.removeLayer(this._progressBar);
		}
	},

	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = this._limitZoom(zoom);
			return this;
		}
		if (this._docLayer && this._docLayer._docType === 'spreadsheet') {
			// for spreadsheets, when the document is smaller than the viewing area
			// we want it to be glued to the row/column headers instead of being centered
			this._docLayer._checkSpreadSheetBounds(zoom);
		}
		var curCenter = this.getCenter();
		if (this._docLayer && this._docLayer._visibleCursor && this.getBounds().contains(this._docLayer._visibleCursor.getCenter())) {
			// Calculate new center after zoom. The intent is that the caret
			// position stays the same.
			var zoomScale = 1.0 / this.getZoomScale(zoom, this._zoom);
			var caretPos = this._docLayer._visibleCursor.getCenter();
			var newCenter = new L.LatLng(curCenter.lat + (caretPos.lat - curCenter.lat) * (1.0 - zoomScale),
						     curCenter.lng + (caretPos.lng - curCenter.lng) * (1.0 - zoomScale));
			return this.setView(newCenter, zoom, {zoom: options});
		}
		return this.setView(curCenter, zoom, {zoom: options});
	},

	zoomIn: function (delta, options) {
		return this.setZoom(this._zoom + (delta || 1), options);
	},

	zoomOut: function (delta, options) {
		return this.setZoom(this._zoom - (delta || 1), options);
	},

	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	fitBounds: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

		var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = options.maxZoom ? Math.min(options.maxZoom, zoom) : zoom;

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return this.setView(center, zoom, options);
	},

	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	panBy: function (offset) { // (Point)
		// replaced with animated panBy in Map.PanAnimation.js
		this.fire('movestart');

		this._rawPanBy(L.point(offset));

		this.fire('move');
		return this.fire('moveend');
	},

	setMaxBounds: function (bounds) {
		bounds = L.latLngBounds(bounds);

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	setDocBounds: function (bounds) {
		bounds = L.latLngBounds(bounds);
		this.options.docBounds = bounds;
	},

	panInsideBounds: function (bounds, options) {
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, bounds);

		if (center.equals(newCenter)) { return this; }

		return this.panTo(newCenter, options);
	},

	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = L.extend({
			animate: false,
			pan: false
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	stop: function () {
		L.Util.cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	// TODO handler.addTo
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		// Check for the special proof-of-concept case where no WOPI is involved but we
		// still run loleaflet in an iframe of its own and thus need to receive the
		// postMessage things.
		if (name === 'wopi' && this.options['notWopiButIframe']) {
			handler.addHooks();
		}

		return this;
	},

	remove: function () {

		this._initEvents(true);

		try {
			// throws error in IE6-8
			delete this._container._leaflet;
		} catch (e) {
			this._container._leaflet = undefined;
		}

		L.DomUtil.remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}

		this._clearHandlers();

		if (this._loaded) {
			this.fire('unload');
		}

		if (this._docLayer) {
			this.removeLayer(this._docLayer);
		}
		this.removeControls();
		this._socket.close();
		return this;
	},

	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = L.DomUtil.create('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},


	// public methods for getting map state

	getViewName: function(viewid) {
		return this._viewInfo[viewid].username;
	},

	getViewColor: function(viewid) {
		return this._viewInfo[viewid].color;
	},

	isViewReadOnly: function(viewid) {
		return this._viewInfo[viewid].readonly !== '0';
	},

	getCenter: function () { // (Boolean) -> LatLng
		this._checkIfLoaded();
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	getZoom: function () {
		return this._zoom;
	},

	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new L.LatLngBounds(sw, ne);
	},

	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	getLayerMaxBounds: function () {
		return L.bounds(this.latLngToLayerPoint(this.options.maxBounds.getNorthWest()),
			this.latLngToLayerPoint(this.options.maxBounds.getSouthEast()));
	},

	getLayerDocBounds: function () {
		return L.bounds(this.latLngToLayerPoint(this.options.docBounds.getNorthWest()),
			this.latLngToLayerPoint(this.options.docBounds.getSouthEast()));
	},

	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = L.latLngBounds(bounds);

		var zoom = this.getMinZoom() - (inside ? 1 : 0),
		    maxZoom = this.getMaxZoom(),
		    size = this.getSize(),

		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),

		    zoomNotFound = true,
		    boundsSize;

		padding = L.point(padding || [0, 0]);

		do {
			zoom++;
			boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding).floor();
			zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

		} while (zoomNotFound && zoom <= maxZoom);

		if (zoomNotFound && inside) {
			return null;
		}

		return inside ? zoom : zoom - 1;
	},

	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new L.Point(
				this._container.clientWidth,
				this._container.clientHeight);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	getPanes: function () {
		return this._panes;
	},

	getContainer: function () {
		return this._container;
	},


	// TODO replace with universal implementation after refactoring projections

	getZoomScale: function (toZoom, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	getScaleZoom: function (scale, fromZoom) {
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return fromZoom + (Math.log(scale) / Math.log(1.2));
	},


	// conversion methods

	project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
		zoom = zoom === undefined ? this._zoom : zoom;
		var projectedPoint = this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
		return new L.Point(L.round(projectedPoint.x, 1e-6), L.round(projectedPoint.y, 1e-6));
	},

	unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(L.point(point), zoom);
	},

	layerPointToLatLng: function (point) { // (Point)
		var projectedPoint = L.point(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	latLngToLayerPoint: function (latlng) { // (LatLng)
		var projectedPoint = this.project(L.latLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(L.latLng(latlng));
	},

	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(L.latLng(latlng1), L.latLng(latlng2));
	},

	containerPointToLayerPoint: function (point) { // (Point)
		return L.point(point).subtract(this._getMapPanePos());
	},

	layerPointToContainerPoint: function (point) { // (Point)
		return L.point(point).add(this._getMapPanePos());
	},

	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(L.point(point));
		return this.layerPointToLatLng(layerPoint);
	},

	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
	},

	mouseEventToContainerPoint: function (e) { // (MouseEvent)
		return L.DomEvent.getMousePosition(e, this._container);
	},

	mouseEventToLayerPoint: function (e) { // (MouseEvent)
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},

	focus: function () {
		this._clipboardContainer.focus();
	},

	setHelpTarget: function(page) {
		this._helpTarget = page;
	},

	showHelp: function() {
		var helpURL = 'https://help.libreoffice.org/help.html';
		var helpVersion = '6.0';
		if (this._helpTarget !== null) {
			helpURL += '?Target=' + this._helpTarget + '&Language=' + String.locale + '&System=UNIX&Version=' + helpVersion;
		}

		this.fire('hyperlinkclicked', {url: helpURL});
	},

	_fireInitComplete: function (condition) {
		if (this.initComplete) {
			return;
		}

		this.initConditions[condition] = true;
		for (var key in this.initConditions) {
			if (!this.initConditions[key]) {
				return;
			}
		}
		this.fire('statusindicator', {statusType: 'initializationcomplete'});
		this.initComplete = true;
	},

	_initContainer: function (id) {
		var container = this._container = L.DomUtil.get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet) {
			throw new Error('Map container is already initialized.');
		}

		this._resizeDetector = L.DomUtil.create('iframe', 'resize-detector', container);
		this._fileDownloader = L.DomUtil.create('iframe', '', container);
		L.DomUtil.setStyle(this._fileDownloader, 'display', 'none');

		this._resizeDetector.contentWindow.addEventListener('touchstart', L.DomEvent.preventDefault, {passive: false});

		L.DomEvent.on(this._resizeDetector.contentWindow, 'contextmenu', L.DomEvent.preventDefault);
		L.DomEvent.on(this._fileDownloader.contentWindow, 'contextmenu', L.DomEvent.preventDefault);
		L.DomEvent.addListener(container, 'scroll', this._onScroll, this);
		container._leaflet = true;
	},

	_onScroll: function() {
		this._container.scrollTop = 0;
		this._container.scrollLeft = 0;
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && L.Browser.any3d;

		L.DomUtil.addClass(container, 'leaflet-container' +
			(L.Browser.touch ? ' leaflet-touch' : '') +
			(L.Browser.retina ? ' leaflet-retina' : '') +
			(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
			(L.Browser.safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = L.DomUtil.getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'absolute';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		this._mapPane = this.createPane('mapPane', this._container);

		this.createPane('tilePane');
		this.createPane('shadowPane');
		this.createPane('overlayPane');
		this.createPane('markerPane');
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			L.DomUtil.addClass(panes.markerPane, 'leaflet-zoom-hide');
			L.DomUtil.addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	_resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

		var zoomChanged = (this._zoom !== zoom);

		if (!afterZoomAnim) {
			this.fire('movestart');

			if (zoomChanged) {
				this.fire('zoomstart');
			}
		}

		this._zoom = zoom;

		if (!preserveMapOffset) {
			L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
		}

		this._pixelOrigin = this._getNewPixelOrigin(center);

		var loading = !this._loaded;
		this._loaded = true;

		this.fire('viewreset', {hard: !preserveMapOffset});

		if (loading) {
			this.fire('load');
		}

		this.fire('move');

		if (zoomChanged || afterZoomAnim) {
			this.fire('zoomend');
			this.fire('zoomlevelschange');
		}

		this.fire('moveend', {hard: !preserveMapOffset});
	},

	_rawPanBy: function (offset) {
		L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	_initEvents: function (remove) {
		if (!L.DomEvent) { return; }

		this._targets = {};

		this._mouseOut = false;

		var onOff = remove ? 'off' : 'on';

		L.DomEvent[onOff](this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove dragover drop ' +
			'trplclick qdrplclick', this._handleDOMEvent, this);

		if (this.options.trackResize && this._resizeDetector.contentWindow) {
			L.DomEvent[onOff](this._resizeDetector.contentWindow, 'resize', this._onResize, this);
		}

		L.DomEvent[onOff](window, 'blur', this._onLostFocus, this);
		L.DomEvent[onOff](window, 'focus', this._onGotFocus, this);
	},

	_onResize: function () {
		L.Util.cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = L.Util.requestAnimFrame(
			function () { this.invalidateSize({debounceMoveend: true}); }, this, false, this._container);
	},

	makeActive: function() {
		console.log('Force active');
		this.lastActiveTime = Date.now();
		return this._activate();
	},

	_activate: function () {
		if (this._serverRecycling || this._documentIdle) {
			return false;
		}

		console.debug('_activate:');
		clearTimeout(vex.timer);

		if (!this._active) {
			// Only activate when we are connected.
			if (this._socket.connected()) {
				console.debug('sending useractive');
				this._socket.sendMessage('useractive');
				this._active = true;
				if (this._docLayer) {
					this._docLayer._resetClientVisArea();
					this._docLayer._requestNewTiles();
				}

				if (isAnyVexDialogActive()) {
					for (var vexId in vex.getAll()) {
						var opts = vex.getById(vexId).options;
						if (!opts.overlayClosesOnClick || !opts.escapeButtonCloses) {
							return false;
						}
					}

					this._startInactiveTimer();
					if (!L.Browser.mobile) {
						this.focus();
					}
					return vex.closeAll();
				}
			} else {
				this.loadDocument();
			}
		}

		this._startInactiveTimer();
		if (!L.Browser.mobile) {
			this.focus();
		}
		return false;
	},

	_dim: function() {
		if (this.options.alwaysActive || this._debugAlwaysActive === true) {
			return;
		}

		console.debug('_dim:');
		if (!this._socket.connected()) {
			return;
		}

		this._active = false;
		clearTimeout(vex.timer);

		var message = '';
		var map = this;
		if (!map['wopi'].DisableInactiveMessages) {
			message = _('Inactive document - please click to resume editing');
		}

		vex.open({
			content: message,
			contentClassName: 'loleaflet-user-idle',
			afterOpen: function() {
				var $vexContent = $(this.contentEl);
				$vexContent.bind('click.vex', function() {
					console.debug('_dim: click.vex function');
					return map._activate();
				});
			},
			showCloseButton: false
		});

		this._doclayer && this._docLayer._onMessage('textselection:', null);
		console.debug('_dim: sending userinactive');
		map.fire('postMessage', {msgId: 'User_Idle'});
		this._socket.sendMessage('userinactive');
	},

	notifyActive : function() {
		this.lastActiveTime = Date.now();
	},

	_dimIfInactive: function () {
		console.debug('_dimIfInactive: diff=' + (Date.now() - this.lastActiveTime));
		if (this._docLoaded && // don't dim if document hasn't been loaded yet
		    (Date.now() - this.lastActiveTime) >= this.options.idleTimeoutSecs * 1000) {
			this._dim();
		} else {
			this._startInactiveTimer();
		}
	},

	_startInactiveTimer: function () {
		if (this._serverRecycling || this._documentIdle || !this._docLoaded) {
			return;
		}

		console.debug('_startInactiveTimer:');
		clearTimeout(vex.timer);
		var map = this;
		vex.timer = setTimeout(function() {
			map._dimIfInactive();
		}, 1 * 60 * 1000); // Check once a minute
	},

	_deactivate: function () {
		if (this._serverRecycling || this._documentIdle || !this._docLoaded) {
			return;
		}

		console.debug('_deactivate:');
		clearTimeout(vex.timer);

		if (!this._active || isAnyVexDialogActive()) {
			// A dialog is already dimming the screen and probably
			// shows an error message. Leave it alone.
			this._active = false;
			this._docLayer && this._docLayer._onMessage('textselection:', null);
			if (this._socket.connected()) {
				console.debug('_deactivate: sending userinactive');
				this._socket.sendMessage('userinactive');
			}

			return;
		}

		var map = this;
		vex.timer = setTimeout(function() {
			map._dim();
		}, map.options.outOfFocusTimeoutSecs * 1000);
	},

	// The editor got focus (probably a dialog closed or user clicked to edit).
	_onEditorLostFocus: function() {
		if (!this._loaded) { return; }

		var doclayer = this._docLayer;
		if (doclayer)
		{
			doclayer._isFocused = false;
			doclayer._updateCursorAndOverlay();
		}
	},

	// Our browser tab lost focus.
	_onLostFocus: function () {
		this._onEditorLostFocus();
		this._deactivate();
	},

	// The editor got focus (probably a dialog closed or user clicked to edit).
	_onEditorGotFocus: function() {
		if (!this._loaded) { return; }

		var doclayer = this._docLayer;
		if (doclayer)
		{
			doclayer._isFocused = true;
			// we restore the old cursor position by a small delay, so that if the user clicks
			// inside the document we skip to restore it, so that the user does not see the cursor
			// jumping from the old position to the new one
			setTimeout(function () {
				console.debug('apply focus change in timeout');
				doclayer._updateCursorAndOverlay();
			}, 300);
		}

	},

	// Our browser tab lost focus.
	_onGotFocus: function () {
		this._onEditorGotFocus();
		this._activate();
	},

	_onUpdateProgress: function (e) {
		if (e.statusType === 'start') {
			if (this._socket.socket.readyState === 1) {
				// auto-save
				this.showBusy(_('Saving...'), true);
			}
			else {
				this.showBusy(_('Loading...'), true);
			}
		}
		else if (e.statusType === 'setvalue') {
			this._progressBar.setValue(e.value);
		}
		else if (e.statusType === 'finish' || e.statusType === 'loleafletloaded' || e.statusType === 'reconnected') {
			this.hideBusy();
		}
	},

	_isMouseEnteringLeaving: function (e) {
		var target = e.target || e.srcElement,
		    related = e.relatedTarget;

		if (!target) { return false; }

		return (L.DomUtil.hasClass(target, 'leaflet-tile')
			&& !(related && (L.DomUtil.hasClass(related, 'leaflet-tile')
				|| L.DomUtil.hasClass(related, 'leaflet-cursor'))));
	},

	_handleDOMEvent: function (e) {
		this.notifyActive();

		if (!this._docLayer || !this._loaded || !this._enabled || L.DomEvent._skipped(e)) { return; }

		// find the layer the event is propagating from
		var target = this._targets[L.stamp(e.target || e.srcElement)],
			//type = e.type === 'keypress' && e.keyCode === 13 ? 'click' : e.type;
		    type = e.type;

		// For touch devices, to pop-up the keyboard, it is required to call
		// .focus() method on hidden input within actual 'click' event here
		// Calling from some other place with no real 'click' event doesn't work.

		// (tml: For me, for this to work with a mobile device, we need to
		// accept 'mouseup', too, and check the _wasSingleTap flag set over in Map.Tap.js.)
		if (type === 'click' || (type === 'mouseup' &&
					 typeof this._container._wasSingleTap !== 'undefined' &&
					 this._container._wasSingleTap)) {
			if (this._permission === 'edit') {
				this.focus();
			}

			// unselect if anything is selected already
			if (this._docLayer && this._docLayer._annotations && this._docLayer._annotations.unselect) {
				this._docLayer._annotations.unselect();
			}
		}

		// we need to keep track about the last action, this
		// will help us to avoid wrongly removing the editor
		if (type === 'keypress') {
			this.lastActionByUser = true;
		}

		// we need to keep track if we have entered/left the map
		this._mouseEnteringLeaving = false;
		// mouse leaving the map ?
		if (!target && !this._mouseOut && type === 'mouseout') {
			this._mouseEnteringLeaving = this._isMouseEnteringLeaving(e);
			this._mouseOut = this._mouseEnteringLeaving; // event type == mouseout
		}
		// mouse entering the map ?
		if (!target && this._mouseOut && type === 'mouseover') {
			this._mouseEnteringLeaving = this._isMouseEnteringLeaving(e);
			this._mouseOut = !this._mouseEnteringLeaving; // event type == mouseover
		}

		// special case for map mouseover/mouseout events so that they're actually mouseenter/mouseleave
		if (!target && !this._mouseEnteringLeaving && (type === 'mouseover' || type === 'mouseout') &&
				!L.DomEvent._checkMouse(this._container, e)) { return; }

		// prevents outline when clicking on keyboard-focusable element
		if (type === 'mousedown') {
			L.DomUtil.preventOutline(e.target || e.srcElement);
			// Prevents image dragging on Mozilla when map's dragging
			// option is set to false
			e.preventDefault();
		}

		// workaround for drawing shapes, wihout this shapes cannot be shrunken
		if (target !== undefined && target._path !== undefined && type === 'mousemove') {
			target = undefined;
		}
		this._fireDOMEvent(target || this, e, type);
	},

	_fireDOMEvent: function (target, e, type) {
		if (!target.listens(type, true) && (type !== 'click' || !target.listens('preclick', true))) { return; }

		if (type === 'contextmenu') {
			L.DomEvent.preventDefault(e);
		}

		// prevents firing click after you just dragged an object
		if (e.type === 'click' && !e._simulated && this._draggableMoved(target)) { return; }

		var data = {
			originalEvent: e
		};
		if (e.type !== 'keypress' && e.type !== 'keyup' && e.type !== 'keydown' &&
			e.type !== 'copy' && e.type !== 'cut' && e.type !== 'paste' &&
		    e.type !== 'compositionstart' && e.type !== 'compositionupdate' && e.type !== 'compositionend' && e.type !== 'textInput') {
			data.containerPoint = target instanceof L.Marker ?
					this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = this.layerPointToLatLng(data.layerPoint);
		}
		if (type === 'click') {
			target.fire('preclick', data, true);
		}
		target.fire(type, data, true);
	},

	_draggableMoved: function (obj) {
		obj = obj.options.draggable ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return L.DomUtil.getPosition(this._mapPane) || new L.Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		// TODO round on display, not calculation to increase precision?
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
		    seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

		    dx = this._rebound(nwOffset.x, -seOffset.x),
		    dy = this._rebound(nwOffset.y, -seOffset.y);

		return new L.Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		// TODO: do we really need ceil and floor ?
		// for spreadsheets it can cause one pixel alignment offset btw grid and row/column header
		// and a one pixel horizontal auto-scrolling issue;
		// both issues have been fixed by rounding the projection: see Map.project above;
		// anyway in case of similar problems, this code needs to be checked
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom();

		return Math.max(min, Math.min(max, zoom));
	},

	enable: function(enabled) {
		this._enabled = enabled;
		if (this._enabled) {
			$('.scroll-container').mCustomScrollbar('update');
		}
		else {
			$('.scroll-container').mCustomScrollbar('disable');
		}
	},

	_goToViewId: function(id) {
		if (id === -1)
			return;

		if (this.getDocType() === 'spreadsheet') {
			this._docLayer.goToCellViewCursor(id);
		} else if (this.getDocType() === 'text' || this.getDocType() === 'presentation') {
			this._docLayer.goToViewCursor(id);
		}
	},

	_setFollowing: function(followingState, viewId) {
		var userDefined = viewId !== null && viewId !== undefined;
		var followDefined = followingState !== null && followingState !== undefined;

		var followEditor = true;
		var followUser = false;

		if (userDefined && viewId !== -1 && viewId !== this._docLayer.viewId) {
			followUser = true;
			followEditor = false;
		}

		if (followDefined && followingState === false) {
			followEditor = false;
			followUser = false;
		}

		this._docLayer._followUser = followUser;
		this._docLayer._followEditor = followEditor;

		if (followUser) {
			this._goToViewId(viewId);
			this._docLayer._followThis = viewId;
		}
		else if (followEditor) {
			var editorId = this._docLayer._editorId;
			if (editorId !== -1 && editorId !== this._docLayer.viewId) {
				this._goToViewId(editorId);
				this._docLayer._followThis = editorId;
			}
		}
		else {
			this.fire('deselectuser', {viewId: this._docLayer._followThis});
			this._docLayer._followThis = -1;
		}

		// Notify about changes
		this.fire('postMessage', {msgId: 'FollowUser_Changed',
			args: {FollowedViewId: this._docLayer._followThis,
				IsFollowUser: followUser,
				IsFollowEditor: followEditor}});
	},

	showMenubar: function() {
		if (!this.isMenubarHidden())
			return;
		$('.main-nav').show();
		if (closebutton && !window.mode.isTablet()) {
			$('#closebuttonwrapper').show();
		}

		var obj = $('.unfold');
		obj.removeClass('unfold');
		obj.addClass('fold');

		moveObjectVertically($('#spreadsheet-row-column-frame'), 36);
		moveObjectVertically($('#document-container'), 36);
		moveObjectVertically($('#presentation-controls-wrapper'), 36);
	},

	hideMenubar: function() {
		if (this.isMenubarHidden())
			return;
		$('.main-nav').hide();
		if (closebutton) {
			$('#closebuttonwrapper').hide();
		}

		var obj = $('.fold');
		obj.removeClass('fold');
		obj.addClass('unfold');

		moveObjectVertically($('#spreadsheet-row-column-frame'), -36);
		moveObjectVertically($('#document-container'), -36);
		moveObjectVertically($('#presentation-controls-wrapper'), -36);
	},

	isMenubarHidden: function() {
		return $('.main-nav').css('display') === 'none';
	},

	toggleMenubar: function() {
		if (this.isMenubarHidden())
			this.showMenubar();
		else
			this.hideMenubar();
	}
});

L.map = function (id, options) {
	return new L.Map(id, options);
};

/* -*- js-indent-level: 8 -*- */

L.Layer = L.Evented.extend({

	options: {
		pane: 'overlayPane'
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[L.stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[L.stamp(targetEl)];
		return this;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		this.onAdd(map);

		if (this.getEvents) {
			map.on(this.getEvents(), this);
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});


L.Map.include({
	addLayer: function (layer) {
		var id = L.stamp(layer);
		if (this._layers[id]) { return layer; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	removeLayer: function (layer) {
		var id = L.stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getEvents) {
			this.off(layer.getEvents(), layer);
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	hasLayer: function (layer) {
		return !!layer && (L.stamp(layer) in this._layers);
	},

	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[L.stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = L.stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.GridLayer is used as base class for grid-like layers like TileLayer.
 */

L.GridLayer = L.Layer.extend({

	options: {
		pane: 'tilePane',

		tileSize: window.tileSize,
		opacity: 1,

		updateWhenIdle: L.Browser.mobile,
		updateInterval: 200,

		attribution: null,
		zIndex: null,
		bounds: null,

		minZoom: 0
		// maxZoom: <Number>
	},

	initialize: function (options) {
		L.setOptions(this, options);

		this._resetClientVisArea()
	},

	onAdd: function () {
		this._initContainer();
		this._levels = {};
		this._tiles = {};
		this._viewReset();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		L.DomUtil.remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = null;
		clearTimeout(this._preFetchIdle);
		clearTimeout(this._previewInvalidator);
		clearInterval(this._tilesPreFetcher);

		if (this._selections) {
			this._map.removeLayer(this._selections);
		}
		if (this._cursorMarker) {
			this._cursorMarker.remove();
		}
		if (this._graphicMarker) {
			this._graphicMarker.remove();
		}
		for (var key in this._selectionHandles) {
			this._selectionHandles[key].remove();
		}
	},

	bringToFront: function () {
		if (this._map) {
			L.DomUtil.toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	bringToBack: function () {
		if (this._map) {
			L.DomUtil.toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	getAttribution: function () {
		return this.options.attribution;
	},

	getContainer: function () {
		return this._container;
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._map) {
			this._updateOpacity();
		}
		return this;
	},

	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewreset: this._viewReset,
			movestart: this._moveStart,
			moveend: this._move
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			events.move = L.Util.throttle(this._move, this.options.updateInterval, this);
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	createTile: function () {
		return document.createElement('div');
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (!L.Browser.ielt9 && !this._map._fadeAnimated) {
			L.DomUtil.setOpacity(this._container, opacity);
			return;
		}

		var now = +new Date(),
		    nextFrame = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded || tile.active) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);
			if (fade < 1) {
				L.DomUtil.setOpacity(tile.el, opacity * fade);
				nextFrame = true;
			} else {
				L.DomUtil.setOpacity(tile.el, opacity);
				tile.active = true;
				this._pruneTiles();
			}
		}

		if (nextFrame) {
			L.Util.cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
		}
	},

	_initContainer: function () {
		if (this._container) { return; }

		this._container = L.DomUtil.create('div', 'leaflet-layer');
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {
		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
			} else {
				L.DomUtil.remove(this._levels[z].el);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = L.DomUtil.create('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			L.Util.falseFn(level.el.offsetWidth);
		}

		this._level = level;

		return level;
	},

	_pruneTiles: function () {
		var key, tile;

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.part, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.part, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_retainParent: function (x, y, z, part, minZoom) {
		var x2 = Math.floor(x / 1.2),
		    y2 = Math.floor(y / 1.2),
		    z2 = z - 1;

		var key = x2 + ':' + y2 + ':' + z2 + ':' + part,
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, part, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, part, maxZoom) {

		for (var i = 1.2 * x; i < 1.2 * x + 2; i++) {
			for (var j = 1.2 * y; j < 1.2 * y + 2; j++) {

				var key = Math.floor(i) + ':' + Math.floor(j) + ':' +
					(z + 1) + ':' + part,
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, part, maxZoom);
				}
			}
		}
	},

	_viewReset: function (e) {
		this._reset(this._map.getCenter(), this._map.getZoom(), e && e.hard);
	},

	_animateZoom: function (e) {
		this._reset(e.center, e.zoom, false, true, e.noUpdate);
	},

	_reset: function (center, zoom, hard, noPrune, noUpdate) {
		var tileZoom = Math.round(zoom),
		    tileZoomChanged = this._tileZoom !== tileZoom;

		if (!noUpdate && (hard || tileZoomChanged)) {
			this._resetClientVisArea();

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._tileZoom = tileZoom;
			if (tileZoomChanged) {
				this._updateTileTwips();
				this._updateMaxBounds(null, null, zoom);
			}
			this._updateLevels();
			this._resetGrid();

			if (!L.Browser.mobileWebkit) {
				this._update(center, tileZoom);
			}

			if (!noPrune) {
				this._pruneTiles();
			}
		}

		this._setZoomTransforms(center, zoom);
	},

	// These variables indicates the clientvisiblearea sent to the server and stored by the server
	// We need to reset them when we are reconnecting to the server or reloading a document
	// because the server needs new data even if the client is unmodified.
	_resetClientVisArea: function ()  {
		this._clientZoom = '';
		this._clientVisibleArea = '';
	},

	_updateTileTwips: function () {
		// smaller zoom = zoom in
		var factor = Math.pow(1.2, (this._map.options.zoom - this._tileZoom));
		this._tileWidthTwips = Math.round(this.options.tileWidthTwips * factor);
		this._tileHeightTwips = Math.round(this.options.tileHeightTwips * factor);
	},

	_updateMaxBounds: function (sizeChanged, extraSize, options, zoom) {
		if (this._docWidthTwips === undefined || this._docHeightTwips === undefined) {
			return;
		}
		if (!zoom) {
			zoom = this._map.getZoom();
		}
		var docPixelLimits = new L.Point(this._docWidthTwips / this.options.tileWidthTwips,
			this._docHeightTwips / this.options.tileHeightTwips);
		docPixelLimits = docPixelLimits.multiplyBy(this._tileSize);
		var scale = this._map.getZoomScale(zoom, 10);
		var topLeft = new L.Point(0, 0);
		topLeft = this._map.unproject(topLeft.multiplyBy(scale));
		var bottomRight = new L.Point(docPixelLimits.x, docPixelLimits.y);
		bottomRight = bottomRight.multiplyBy(scale);
		if (extraSize) {
			bottomRight = bottomRight.add(extraSize);
		}
		bottomRight = this._map.unproject(bottomRight);

		if (this._documentInfo === '' || sizeChanged) {
			// we just got the first status so we need to center the document
			this._map.setMaxBounds(new L.LatLngBounds(topLeft, bottomRight), options);
			this._map.setDocBounds(new L.LatLngBounds(topLeft, this._map.unproject(docPixelLimits.multiplyBy(scale))));
		}

		var scrollPixelLimits = new L.Point(this._docWidthTwips / this._tileWidthTwips,
			this._docHeightTwips / this._tileHeightTwips);
		scrollPixelLimits = extraSize ? scrollPixelLimits.multiplyBy(this._tileSize).add(extraSize.multiplyBy(scale)) :
			scrollPixelLimits.multiplyBy(this._tileSize);
		this._docPixelSize = {x: scrollPixelLimits.x, y: scrollPixelLimits.y};
		this._map.fire('docsize', {x: scrollPixelLimits.x, y: scrollPixelLimits.y, extraSize: extraSize});
	},

	_checkSpreadSheetBounds: function (newZoom) {
		// for spreadsheets, when the document is smaller than the viewing area
		// we want it to be glued to the row/column headers instead of being centered
		// In the future we probably want to remove this and set the bonds only on the
		// left/upper side of the spreadsheet so that we can have an 'infinite' number of
		// cells downwards and to the right, like we have on desktop
		var viewSize = this._map.getSize();
		var scale = this._map.getZoomScale(newZoom);
		var width = this._docWidthTwips / this._tileWidthTwips * this._tileSize * scale;
		var height = this._docHeightTwips / this._tileHeightTwips * this._tileSize * scale;
		if (width < viewSize.x || height < viewSize.y) {
			// if after zoomimg the document becomes smaller than the viewing area
			width = Math.max(width, viewSize.x);
			height = Math.max(height, viewSize.y);
			if (!this._map.options._origMaxBounds) {
				this._map.options._origMaxBounds = this._map.options.maxBounds;
			}
			scale = this._map.options.crs.scale(1);
			this._map.setMaxBounds(new L.LatLngBounds(
					this._map.unproject(new L.Point(0, 0)),
					this._map.unproject(new L.Point(width * scale, height * scale))));
		}
		else if (this._map.options._origMaxBounds) {
			// if after zoomimg the document becomes larger than the viewing area
			// we need to restore the inital bounds
			this._map.setMaxBounds(this._map.options._origMaxBounds);
			this._map.options._origMaxBounds = null;
		}
	},

	_updateScrollOffset: function () {
		var centerPixel = this._map.project(this._map.getCenter());
		var newScrollPos = centerPixel.subtract(this._map.getSize().divideBy(2));
		var x = Math.round(newScrollPos.x < 0 ? 0 : newScrollPos.x);
		var y = Math.round(newScrollPos.y < 0 ? 0 : newScrollPos.y);
		this._map.fire('updatescrolloffset', {x: x, y: y});
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		L.DomUtil.setTransform(level.el, translate, scale);
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this._getTileSize(),
		    tileZoom = this._tileZoom;
		if (this._tileWidthTwips === undefined) {
			this._tileWidthTwips = this.options.tileWidthTwips;
		}
		if (this._tileHeightTwips === undefined) {
			this._tileHeightTwips = this.options.tileHeightTwips;
		}

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize)
		];
		this._wrapY = crs.wrapLat && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize)
		];
	},

	_getTileSize: function () {
		return this.options.tileSize;
	},

	_moveStart: function () {
		this._resetPreFetching();
	},

	_move: function () {
		this._update();
		this._resetPreFetching(true);
		this._onCurrentPageUpdate();
	},

	_update: function (center, zoom) {
		var map = this._map;
		if (!map || this._documentInfo === '') {
			return;
		}

		// TODO move to reset
		// var zoom = this._map.getZoom();

		// if (zoom > this.options.maxZoom ||
		//     zoom < this.options.minZoom) { return; }

		if (center === undefined) { center = map.getCenter(); }
		if (zoom === undefined) { zoom = Math.round(map.getZoom()); }

		var pixelBounds = map.getPixelBounds(center, zoom),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    queue = [];

		for (var key in this._tiles) {
			if (this._keyToTileCoords(key).z !== zoom ||
					this._keyToTileCoords(key).part !== this._selectedPart) {
				this._tiles[key].current = false;
			}
		}

		// if there is no exiting tile in the current view
		var newView = true;
		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new L.Point(i, j);
				coords.z = zoom;
				coords.part = this._selectedPart;

				if (!this._isValidTile(coords)) { continue; }

				key = this._tileCoordsToKey(coords);
				var tile = this._tiles[key];
				var invalid = tile && tile._invalidCount && tile._invalidCount > 0;
				if (tile && tile.loaded && !invalid) {
					tile.current = true;
					newView = false;
				} else if (invalid) {
					tile._invalidCount = 1;
					queue.push(coords);
				} else {
					queue.push(coords);
				}
			}
		}

		this._sendClientVisibleArea(true);

		this._sendClientZoom(true);

		if (queue.length !== 0) {
			if (newView) {
				// we know that a new set of tiles that cover the whole view has been requested
				// so we're able to cancel the previous requests that are being processed
				this._cancelTiles();
			}

			// if its the first batch of tiles to load
			if (this._noTilesToLoad()) {
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();
			this._addTiles(queue, fragment);
			this._level.el.appendChild(fragment);
		}
	},

	_updateOnChangePart: function () {
		var map = this._map;
		if (!map || this._documentInfo === '') {
			return;
		}
		var key, coords, tile;
		var center = map.getCenter();
		var zoom = Math.round(map.getZoom());

		var pixelBounds = map.getPixelBounds(center, zoom),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    queue = [];

		for (key in this._tiles) {
			if (this._keyToTileCoords(key).z !== zoom ||
					this._keyToTileCoords(key).part !== this._selectedPart) {
				this._tiles[key].current = false;
			}
		}

		// if there is no exiting tile in the current view
		var newView = true;
		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				coords = new L.Point(i, j);
				coords.z = zoom;
				coords.part = this._selectedPart;

				if (!this._isValidTile(coords)) { continue; }

				key = this._tileCoordsToKey(coords);
				tile = this._tiles[key];
				if (tile) {
					tile.current = true;
					newView = false;
				} else {
					queue.push(coords);
				}
			}
		}

		if (queue.length !== 0) {
			if (newView) {
				// we know that a new set of tiles that cover the whole view has been requested
				// so we're able to cancel the previous requests that are being processed
				this._cancelTiles();
			}

			// if its the first batch of tiles to load
			if (this._noTilesToLoad()) {
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();
			var tilePositionsX = '';
			var tilePositionsY = '';

			for (i = 0; i < queue.length; i++) {
				coords = queue[i];
				var tilePos = this._getTilePos(coords);
				key = this._tileCoordsToKey(coords);

				if (coords.part === this._selectedPart) {
					tile = this.createTile(this._wrapCoords(coords), L.bind(this._tileReady, this, coords));

					this._initTile(tile);

					// if createTile is defined with a second argument ("done" callback),
					// we know that tile is async and will be ready later; otherwise
					if (this.createTile.length < 2) {
						// mark tile as ready, but delay one frame for opacity animation to happen
						setTimeout(L.bind(this._tileReady, this, coords, null, tile), 0);
					}

					// we prefer top/left over translate3d so that we don't create a HW-accelerated layer from each tile
					// which is slow, and it also fixes gaps between tiles in Safari
					L.DomUtil.setPosition(tile, tilePos, true);

					// save tile in cache
					this._tiles[key] = {
						el: tile,
						coords: coords,
						current: true
					};

					fragment.appendChild(tile);

					this.fire('tileloadstart', {
						tile: tile,
						coords: coords
					});
				}
				if (!this._tileCache[key]) {
					var twips = this._coordsToTwips(coords);
					if (tilePositionsX !== '') {
						tilePositionsX += ',';
					}
					tilePositionsX += twips.x;
					if (tilePositionsY !== '') {
						tilePositionsY += ',';
					}
					tilePositionsY += twips.y;
				}
				else {
					tile.src = this._tileCache[key];
				}
			}

			if (tilePositionsX !== '' && tilePositionsY !== '') {
				var message = 'tilecombine ' +
					'part=' + this._selectedPart + ' ' +
					'width=' + this._tileWidthPx + ' ' +
					'height=' + this._tileHeightPx + ' ' +
					'tileposx=' + tilePositionsX + ' ' +
					'tileposy=' + tilePositionsY + ' ' +
					'tilewidth=' + this._tileWidthTwips + ' ' +
					'tileheight=' + this._tileHeightTwips;

				this._map._socket.sendMessage(message, '');
			}

			this._level.el.appendChild(fragment);
		}
	},

	_requestNewTiles: function () {
		this._onMessage('invalidatetiles: EMPTY', null);
		this._update();
	},

	toggleTileDebugMode: function() {
		this.toggleTileDebugModeImpl();
		this._requestNewTiles();
	},

	_sendClientVisibleArea: function (forceUpdate) {
		var visibleTopLeft = this._latLngToTwips(this._map.getBounds().getNorthWest());
		var visibleBottomRight = this._latLngToTwips(this._map.getBounds().getSouthEast());
		var visibleArea = new L.Bounds(visibleTopLeft, visibleBottomRight);
		var size = new L.Point(visibleArea.getSize().x, visibleArea.getSize().y);
		var newClientVisibleArea = 'clientvisiblearea x=' + Math.round(visibleTopLeft.x) + ' y=' + Math.round(visibleTopLeft.y) +
			' width=' + Math.round(size.x) + ' height=' + Math.round(size.y);

		if (this._clientVisibleArea !== newClientVisibleArea || forceUpdate) {
			// Visible area is dirty, update it on the server
			this._map._socket.sendMessage(newClientVisibleArea);
			if (!this._map._fatal && this._map._active && this._map._socket.connected())
				this._clientVisibleArea = newClientVisibleArea
			if (this._debug) {
				this._debugInfo.clearLayers();
				for (var key in this._tiles) {
					this._tiles[key]._debugPopup = null;
					this._tiles[key]._debugTile = null;
				}
			}
		}
	},

	_sendClientZoom: function (forceUpdate) {

		var newClientZoom = 'tilepixelwidth=' + this._tileWidthPx + ' ' +
			'tilepixelheight=' + this._tileHeightPx + ' ' +
			'tiletwipwidth=' + this._tileWidthTwips + ' ' +
			'tiletwipheight=' + this._tileHeightTwips;

		if (this._clientZoom !== newClientZoom || forceUpdate) {
			// the zoom level has changed
			this._map._socket.sendMessage('clientzoom ' + newClientZoom);

			if (!this._map._fatal && this._map._active && this._map._socket.connected())
				this._clientZoom = newClientZoom;
		}
	},

	_cancelTiles: function() {
		this._map._socket.sendMessage('canceltiles');
		for (var key in this._tiles) {
			var tile = this._tiles[key];
			// When _invalidCount > 0 the tile has been invalidated, however the new tile content
			// has not yet been fetched and because of `canceltiles` message it will never be
			// so we need to remove the tile, or when the tile is back inside the visible area
			// its content would be the old invalidated one. Drop only those tiles which are not in
			// the new visible area.
			// example: a tile is invalidated but a sudden scroll to the cell cursor position causes
			// to move the tile out of the visible area before the new content is fetched

			var dropTile = !tile.loaded;
			var coords = tile.coords;
			if (coords.part === this._selectedPart) {
				var visibleTopLeft = this._latLngToTwips(this._map.getBounds().getNorthWest());
				var visibleBottomRight = this._latLngToTwips(this._map.getBounds().getSouthEast());
				var visibleArea = new L.Bounds(visibleTopLeft, visibleBottomRight);
				var tileTopLeft = this._coordsToTwips(coords);
				var tileBottomRight = new L.Point(this._tileWidthTwips, this._tileHeightTwips);
				var tileBounds = new L.Bounds(tileTopLeft, tileTopLeft.add(tileBottomRight));
				dropTile |= (tile._invalidCount > 0 && !visibleArea.intersects(tileBounds));
			}
			else {
				dropTile |= tile._invalidCount > 0;
			}


			if (dropTile) {
				L.DomUtil.remove(tile.el);
				delete this._tiles[key];
				if (this._debug && this._debugDataCancelledTiles) {
					this._debugCancelledTiles++;
					this._debugDataCancelledTiles.setPrefix('Cancelled tiles: ' + this._debugCancelledTiles);
				}
			}
		}
		this._emptyTilesCount = 0;
	},

	_isValidTile: function (coords) {
		if (coords.x < 0 || coords.y < 0) {
			return false;
		}
		if (coords.x * this._tileWidthTwips >= this._docWidthTwips ||
				coords.y * this._tileHeightTwips >= this._docHeightTwips) {
			return false;
		}
		return true;
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {

		var map = this._map,
		    tileSize = this._getTileSize(),

		    nwPoint = coords.multiplyBy(tileSize),
		    sePoint = nwPoint.add([tileSize, tileSize]),

		    nw = map.wrapLatLng(map.unproject(nwPoint, coords.z)),
		    se = map.wrapLatLng(map.unproject(sePoint, coords.z));

		return new L.LatLngBounds(nw, se);
	},

	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z + ':' + coords.part;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		coords = new L.Point(+k[0], +k[1]);
		coords.z = +k[2];
		coords.part = +k[3];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		// FIXME: this _tileCache is used for prev/next slide; but it is
		// dangerous in connection with typing / invalidation
		if (!(this._tiles[key]._invalidCount > 0)) {
			this._tileCache[key] = tile.el.src;
		}

		if (!tile.loaded && this._emptyTilesCount > 0) {
			this._emptyTilesCount -= 1;
		}
		L.DomUtil.remove(tile.el);
		if (this._debug && this._debugInfo && this._tiles[key]._debugPopup) {
			this._debugInfo.removeLayer(this._tiles[key]._debugPopup);
		}
		delete this._tiles[key];

		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		L.DomUtil.addClass(tile, 'leaflet-tile');

		tile.style.width = this._tileSize + 'px';
		tile.style.height = this._tileSize + 'px';

		tile.onselectstart = L.Util.falseFn;
		tile.onmousemove = L.Util.falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (L.Browser.ielt9 && this.options.opacity < 1) {
			L.DomUtil.setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (L.Browser.android && !L.Browser.android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTiles: function (coordsQueue, fragment) {
		var coords, key;
		// first take care of the DOM
		for (var i = 0; i < coordsQueue.length; i++) {
			coords = coordsQueue[i];

			var tilePos = this._getTilePos(coords);
			key = this._tileCoordsToKey(coords);

			if (coords.part === this._selectedPart) {
				if (!this._tiles[key]) {
					var tile = this.createTile(this._wrapCoords(coords), L.bind(this._tileReady, this, coords));

					this._initTile(tile);

					// if createTile is defined with a second argument ("done" callback),
					// we know that tile is async and will be ready later; otherwise
					if (this.createTile.length < 2) {
						// mark tile as ready, but delay one frame for opacity animation to happen
						setTimeout(L.bind(this._tileReady, this, coords, null, tile), 0);
					}

					// we prefer top/left over translate3d so that we don't create a HW-accelerated layer from each tile
					// which is slow, and it also fixes gaps between tiles in Safari
					L.DomUtil.setPosition(tile, tilePos, true);

					// save tile in cache
					this._tiles[key] = {
						el: tile,
						coords: coords,
						current: true
					};

					fragment.appendChild(tile);

					this.fire('tileloadstart', {
						tile: tile,
						coords: coords
					});

					if (this._tileCache[key]) {
						tile.src = this._tileCache[key];
					}
				}
			}

		}

		// sort the tiles by the rows
		coordsQueue.sort(function(a, b) {
			if (a.y !== b.y) {
				return a.y - b.y;
			} else {
				return a.x - b.x;
			}
		});

		// try group the tiles into rectangular areas
		var rectangles = [];
		while (coordsQueue.length > 0) {
			coords = coordsQueue[0];

			// tiles that do not interest us
			key = this._tileCoordsToKey(coords);
			if (this._tileCache[key] || coords.part !== this._selectedPart) {
				coordsQueue.splice(0, 1);
				continue;
			}

			var rectQueue = [coords];
			var bound = new L.Point(coords.x, coords.y);

			// remove it
			coordsQueue.splice(0, 1);

			// find the close ones
			var rowLocked = false;
			var hasHole = false;
			i = 0;
			while (i < coordsQueue.length) {
				var current = coordsQueue[i];

				// extend the bound vertically if possible (so far it was
				// continous)
				if (!hasHole && (current.y === bound.y + 1)) {
					rowLocked = true;
					++bound.y;
				}

				if (current.y > bound.y) {
					break;
				}

				if (!rowLocked) {
					if (current.y === bound.y && current.x === bound.x + 1) {
						// extend the bound horizontally
						++bound.x;
						rectQueue.push(current);
						coordsQueue.splice(i, 1);
					} else {
						// ignore the rest of the row
						rowLocked = true;
						++i;
					}
				} else if (current.x <= bound.x && current.y <= bound.y) {
					// we are inside the bound
					rectQueue.push(current);
					coordsQueue.splice(i, 1);
				} else {
					// ignore this one, but there still may be other tiles
					hasHole = true;
					++i;
				}
			}

			rectangles.push(rectQueue);
		}

		var twips, msg;
		for (var r = 0; r < rectangles.length; ++r) {
			rectQueue = rectangles[r];
			var tilePositionsX = '';
			var tilePositionsY = '';
			for (i = 0; i < rectQueue.length; i++) {
				coords = rectQueue[i];
				twips = this._coordsToTwips(coords);

				if (tilePositionsX !== '') {
					tilePositionsX += ',';
				}
				tilePositionsX += twips.x;

				if (tilePositionsY !== '') {
					tilePositionsY += ',';
				}
				tilePositionsY += twips.y;
			}

			twips = this._coordsToTwips(coords);
			msg = 'tilecombine ' +
				'part=' + coords.part + ' ' +
				'width=' + this._tileWidthPx + ' ' +
				'height=' + this._tileHeightPx + ' ' +
				'tileposx=' + tilePositionsX + ' '	+
				'tileposy=' + tilePositionsY + ' ' +
				'tilewidth=' + this._tileWidthTwips + ' ' +
				'tileheight=' + this._tileHeightTwips;
			this._map._socket.sendMessage(msg, '');
		}
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map) { return; }

		if (err) {
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			L.DomUtil.setOpacity(tile.el, 0);
			L.Util.cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
		}

		L.DomUtil.addClass(tile.el, 'leaflet-tile-loaded');

		if (this._noTilesToLoad()) {
			this.fire('load');
			this._pruneTiles();
		}
	},

	_getTilePos: function (coords) {
		return coords.multiplyBy(this._tileSize).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new L.Point(
			this._wrapX ? L.Util.wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? L.Util.wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		newCoords.part = coords.part;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		return new L.Bounds(
			bounds.min.divideBy(this._tileSize).floor().subtract([1, 1]),
			bounds.max.divideBy(this._tileSize).ceil());
	},

	_twipsToCoords: function (twips) {
		return new L.Point(
				Math.round(twips.x / twips.tileWidth),
				Math.round(twips.y / twips.tileHeight));
	},

	_coordsToTwips: function (coords) {
		return new L.Point(
				coords.x * this._tileWidthTwips,
				coords.y * this._tileHeightTwips);
	},

	_twipsToLatLng: function (twips, zoom) {
		var pixels = new L.Point(
				twips.x / this._tileWidthTwips * this._tileSize,
				twips.y / this._tileHeightTwips * this._tileSize);
		return this._map.unproject(pixels, zoom);
	},

	_latLngToTwips: function (latLng, zoom) {
		var pixels = this._map.project(latLng, zoom);
		return new L.Point(
				Math.round(pixels.x / this._tileSize * this._tileWidthTwips),
				Math.round(pixels.y / this._tileSize * this._tileHeightTwips));
	},

	_twipsToPixels: function (twips) {
		return new L.Point(
				twips.x / this._tileWidthTwips * this._tileSize,
				twips.y / this._tileHeightTwips * this._tileSize);
	},

	_pixelsToTwips: function (pixels) {
		return new L.Point(
				pixels.x * this._tileWidthTwips / this._tileSize,
				pixels.y * this._tileHeightTwips / this._tileSize);
	},

	_twipsRectangleToPixelBounds: function (strRectangle) {
		// TODO use this more
		// strRectangle = x, y, width, height
		var strTwips = strRectangle.match(/\d+/g);
		if (!strTwips) {
			return null;
		}
		var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
		var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
		var bottomRightTwips = topLeftTwips.add(offset);
		return new L.Bounds(
				this._twipsToPixels(topLeftTwips),
				this._twipsToPixels(bottomRightTwips));
	},

	_twipsRectanglesToPixelBounds: function (strRectangles) {
		// used when we have more rectangles
		strRectangles = strRectangles.split(';');
		var boundsList = [];
		for (var i = 0; i < strRectangles.length; i++) {
			var bounds = this._twipsRectangleToPixelBounds(strRectangles[i]);
			if (bounds) {
				boundsList.push(bounds);
			}
		}
		return boundsList;
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	},

	_preFetchTiles: function () {
		if (this._emptyTilesCount > 0 || !this._map) {
			return;
		}
		var center = this._map.getCenter();
		var zoom = this._map.getZoom();
		var tilesToFetch = 10;
		var maxBorderWidth = 5;

		if (this._map._permission === 'edit') {
			tilesToFetch = 5;
			maxBorderWidth = 3;
		}

		if (!this._preFetchBorder) {
			if (this._selectedPart !== this._preFetchPart) {
				// all tiles from the new part have to be pre-fetched
				var tileBorder = this._preFetchBorder = new L.Bounds(new L.Point(0, 0), new L.Point(0, 0));
			}
			else {
				var pixelBounds = this._map.getPixelBounds(center, zoom);
				tileBorder = this._pxBoundsToTileRange(pixelBounds);
				this._preFetchBorder = tileBorder;
			}
		}
		else {
			tileBorder = this._preFetchBorder;
		}
		var queue = [],
		    finalQueue = [],
		    visitedTiles = {},
		    borderWidth = 0;
		// don't search on a border wider than 5 tiles because it will freeze the UI

		while ((tileBorder.min.x >= 0 || tileBorder.min.y >= 0 ||
				tileBorder.max.x * this._tileWidthTwips < this._docWidthTwips ||
				 tileBorder.max.y * this._tileHeightTwips < this._docHeightTwips) &&
				tilesToFetch > 0 && borderWidth < maxBorderWidth) {
			// while the bounds do not fully contain the document

			for (var i = tileBorder.min.x; i <= tileBorder.max.x; i++) {
				// tiles below the visible area
				var coords = new L.Point(i, tileBorder.max.y);
				queue.push(coords);
			}
			for (i = tileBorder.min.x; i <= tileBorder.max.x; i++) {
				// tiles above the visible area
				coords = new L.Point(i, tileBorder.min.y);
				queue.push(coords);
			}
			for (i = tileBorder.min.y; i <= tileBorder.max.y; i++) {
				// tiles to the right of the visible area
				coords = new L.Point(tileBorder.max.x, i);
				queue.push(coords);
			}
			for (i = tileBorder.min.y; i <= tileBorder.max.y; i++) {
				// tiles to the left of the visible area
				coords = new L.Point(tileBorder.min.x, i);
				queue.push(coords);
			}

			for (i = 0; i < queue.length && tilesToFetch > 0; i++) {
				coords = queue[i];
				coords.z = zoom;
				coords.part = this._preFetchPart;
				var key = this._tileCoordsToKey(coords);

				if (!this._isValidTile(coords) ||
						this._tiles[key] ||
						this._tileCache[key] ||
						visitedTiles[key]) {
					continue;
				}

				visitedTiles[key] = true;
				finalQueue.push(coords);
				tilesToFetch -= 1;
			}
			if (tilesToFetch === 0) {
				// don't update the border as there are still
				// some tiles to be fetched
				continue;
			}
			if (tileBorder.min.x >= 0) {
				tileBorder.min.x -= 1;
			}
			if (tileBorder.min.y >= 0) {
				tileBorder.min.y -= 1;
			}
			if (tileBorder.max.x * this._tileWidthTwips <= this._docWidthTwips) {
				tileBorder.max.x += 1;
			}
			if (tileBorder.max.y * this._tileHeightTwips <= this._docHeightTwips) {
				tileBorder.max.y += 1;
			}
			borderWidth += 1;
		}

		if (finalQueue.length > 0) {
			var fragment = document.createDocumentFragment();
			this._addTiles(finalQueue, fragment);
			this._level.el.appendChild(fragment);
		}
	},

	_resetPreFetching: function (resetBorder) {
		if (!this._map) {
			return;
		}
		clearInterval(this._tilesPreFetcher);
		clearTimeout(this._preFetchIdle);
		if (resetBorder) {
			this._preFetchBorder = null;
		}
		var interval = 750;
		var idleTime = 5000;
		this._preFetchPart = this._selectedPart;
		this._preFetchIdle = setTimeout(L.bind(function () {
			this._tilesPreFetcher = setInterval(L.bind(this._preFetchTiles, this), interval);
		}, this), idleTime);
	}
});

L.gridLayer = function (options) {
	return new L.GridLayer(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.TileLayer is used for standard xyz-numbered tile layers.
 */
/* global $ _ Uint8ClampedArray Uint8Array */
// Implement String::startsWith which is non-portable (Firefox only, it seems)
// See http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string#4579228

/*eslint no-extend-native:0*/
if (typeof String.prototype.startsWith !== 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) === str;
	};
}

function hex2string(inData)
{
	var hexified = [];
	var data = new Uint8Array(inData);
	for (var i = 0; i < data.length; i++) {
		var hex = data[i].toString(16);
		var paddedHex = ('00' + hex).slice(-2);
		hexified.push(paddedHex);
	}
	return hexified.join('');
}

L.Compatibility = {
	clipboardSet: function (event, text) {
		if (event.clipboardData) { // Standard
			event.clipboardData.setData('text/plain', text);
		}
		else if (window.clipboardData) { // IE 11
			window.clipboardData.setData('Text', text);
		}
	}
};

L.TileLayer = L.GridLayer.extend({

	options: {
		maxZoom: 18,

		subdomains: 'abc',
		errorTileUrl: '',
		zoomOffset: 0,

		maxNativeZoom: null, // Number
		tms: false,
		zoomReverse: false,
		detectRetina: true,
		crossOrigin: false,
		previewInvalidationTimeout: 1000,
		marginX: 10,
		marginY: 10
	},

	initialize: function (url, options) {

		this._url = url;

		options = L.setOptions(this, options);

		this._tileWidthPx = options.tileSize;
		this._tileHeightPx = options.tileSize;

		// detecting retina displays, adjusting tileWidthPx, tileHeightPx and zoom levels
		if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {
			this._tileWidthPx *= 2;
			this._tileHeightPx *= 2;
			options.zoomOffset++;

			options.minZoom = Math.max(0, options.minZoom);
			options.maxZoom--;
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!L.Browser.android) {
			this.on('tileunload', this._onTileRemove);
		}
		// text, presentation, spreadsheet, etc
		this._docType = options.docType;
		this._documentInfo = '';
		// Position and size of the visible cursor.
		this._visibleCursor = new L.LatLngBounds(new L.LatLng(0, 0), new L.LatLng(0, 0));
		// Do we have focus - ie. should we render a cursor
		this._isFocused = true;
		// Last cursor position for invalidation
		this.lastCursorPos = this._visibleCursor.getNorthWest();
		// Are we zooming currently ? - if so, no cursor.
		this._isZooming = false;
		// Cursor is visible or hidden (e.g. for graphic selection).
		this._isCursorVisible = true;
		// Original rectangle graphic selection in twips
		this._graphicSelectionTwips = new L.Bounds(new L.Point(0, 0), new L.Point(0, 0));
		// Rectangle graphic selection
		this._graphicSelection = new L.LatLngBounds(new L.LatLng(0, 0), new L.LatLng(0, 0));
		// Rotation angle of selected graphic object
		this._graphicSelectionAngle = 0;
		// Original rectangle of cell cursor in twips
		this._cellCursorTwips = new L.Bounds(new L.Point(0, 0), new L.Point(0, 0));
		// Rectangle for cell cursor
		this._cellCursor =  L.LatLngBounds.createDefault();
		this._prevCellCursor = L.LatLngBounds.createDefault();
		this._cellCursorOnPgUp = null;
		this._cellCursorOnPgDn = null;

		// Position and size of the selection start (as if there would be a cursor caret there).

		// View cursors with viewId to 'cursor info' mapping
		// Eg: 1: {rectangle: 'x, y, w, h', visible: false}
		this._viewCursors = {};

		// View cell cursors with viewId to 'cursor info' mapping.
		this._cellViewCursors = {};

		// View selection of other views
		this._viewSelections = {};

		// Graphic view selection rectangles
		this._graphicViewMarkers = {};

		this._lastValidPart = -1;
		// Cursor marker
		this._cursorMarker = null;
		// Graphic marker
		this._graphicMarker = null;
		// Selection handle marker
		this._selectionHandles = {};
		['start', 'end'].forEach(L.bind(function (handle) {
			this._selectionHandles[handle] = L.marker(new L.LatLng(0, 0), {
				icon: L.divIcon({
					className: 'leaflet-selection-marker-' + handle,
					iconSize: null
				}),
				draggable: true
			});
		}, this));

		this._dropDownButton = L.marker(new L.LatLng(0, 0), {
			icon: L.divIcon({
				className: 'spreadsheet-drop-down-marker',
				iconSize: null
			}),
			interactive: false
		});

		this._emptyTilesCount = 0;
		this._msgQueue = [];
		this._toolbarCommandValues = {};
		this._previewInvalidations = [];

		this._followThis = -1;
		this._editorId = -1;
		this._followUser = false;
		this._followEditor = false;
	},

	onAdd: function (map) {
		this._initContainer();
		this._getToolbarCommandsValues();
		this._selections = new L.LayerGroup();
		if (this.options.permission !== 'readonly') {
			map.addLayer(this._selections);
		}

		// This layergroup contains all the layers corresponding to other's view
		this._viewLayerGroup = new L.LayerGroup();
		if (this.options.permission !== 'readonly') {
			map.addLayer(this._viewLayerGroup);
		}

		this._debug = map.options.debug;
		if (this._debug) {
			this._debugInit();
		}

		this._searchResultsLayer = new L.LayerGroup();
		map.addLayer(this._searchResultsLayer);

		this._levels = {};
		this._tiles = {};
		this._tileCache = {};
		this._map._socket.sendMessage('commandvalues command=.uno:LanguageStatus');
		this._map._socket.sendMessage('commandvalues command=.uno:ViewAnnotations');
		var that = this;
		$.contextMenu({
			selector: '.loleaflet-annotation-menu',
			trigger: 'none',
			className: 'loleaflet-font',
			items: {
				modify: {
					name: _('Modify'),
					callback: function (key, options) {
						that.onAnnotationModify.call(that, options.$trigger.get(0).annotation);
					}
				},
				reply: (this._docType !== 'text' && this._docType !== 'presentation') ? undefined : {
					name: _('Reply'),
					callback: function (key, options) {
						that.onAnnotationReply.call(that, options.$trigger.get(0).annotation);
					}
				},
				remove: {
					name: _('Remove'),
					callback: function (key, options) {
						that.onAnnotationRemove.call(that, options.$trigger.get(0).annotation._data.id);
					}
				}
			},
			events: {
				show: function (options) {
					options.$trigger.get(0).annotation._contextMenu = true;
				},
				hide: function (options) {
					options.$trigger.get(0).annotation._contextMenu = false;
				}
			}
		});
		$.contextMenu({
			selector: '.loleaflet-annotation-menu-redline',
			trigger: 'none',
			className: 'loleaflet-font',
			items: {
				modify: {
					name: _('Comment'),
					callback: function (key, options) {
						that.onAnnotationModify.call(that, options.$trigger.get(0).annotation);
					}
				}
			},
			events: {
				show: function (options) {
					options.$trigger.get(0).annotation._contextMenu = true;
				},
				hide: function (options) {
					options.$trigger.get(0).annotation._contextMenu = false;
				}
			}
		});
		this._map._socket.sendMessage('commandvalues command=.uno:AcceptTrackedChanges');

		map._fadeAnimated = false;
		this._viewReset();
		map.on('drag resize zoomend', this._updateScrollOffset, this);

		map.on('copy', this._onCopy, this);
		map.on('cut', this._onCut, this);
		map.on('paste', this._onPaste, this);
		map.on('dragover', this._onDragOver, this);
		map.on('drop', this._onDrop, this);

		map.on('zoomstart', this._onZoomStart, this);
		map.on('zoomend', this._onZoomEnd, this);
		if (this._docType === 'spreadsheet') {
			map.on('zoomend', this._onCellCursorShift, this);
		}
		map.on('zoomend', L.bind(this.eachView, this, this._viewCursors, this._onUpdateViewCursor, this, false));
		map.on('dragstart', this._onDragStart, this);
		map.on('requestloksession', this._onRequestLOKSession, this);
		map.on('error', this._mapOnError, this);
		if (map.options.autoFitWidth !== false) {
			map.on('resize', this._fitWidthZoom, this);
		}
		// Retrieve the initial cell cursor position (as LOK only sends us an
		// updated cell cursor when the selected cell is changed and not the initial
		// cell).
		map.on('statusindicator',
			function (e) {
				if (e.statusType === 'alltilesloaded' && this._docType === 'spreadsheet') {
					this._onCellCursorShift(true);
				}
			},
		this);

		map.on('updatepermission', function(e) {
			if (e.perm !== 'edit') {
				this._clearSelections();
			}
		}, this);

		for (var key in this._selectionHandles) {
			this._selectionHandles[key].on('drag dragend', this._onSelectionHandleDrag, this);
		}

		map.setPermission(this.options.permission);

		map.fire('statusindicator', {statusType: 'loleafletloaded'});
	},

	clearAnnotations: function() {
		console.debug('Implemented in child  classes');
	},

	getEvents: function () {
		var events = {
			viewreset: this._viewReset,
			movestart: this._moveStart,
			moveend: this._move
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			events.move = L.Util.throttle(this._move, this.options.updateInterval, this);
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	registerExportFormat: function(label, format) {
		if (!this._exportFormats) {
			this._exportFormats = [];
		}

		this._exportFormats.push({label: label, format: format});
	},

	setUrl: function (url, noRedraw) {
		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	createTile: function (coords, done) {
		var tile = document.createElement('img');

		tile.onload = L.bind(this._tileOnLoad, this, done, tile);
		tile.onerror = L.bind(this._tileOnError, this, done, tile);

		if (this.options.crossOrigin) {
			tile.crossOrigin = '';
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';
		this._emptyTilesCount += 1;
		return tile;
	},

	_getToolbarCommandsValues: function() {
		for (var i = 0; i < this._map.unoToolbarCommands.length; i++) {
			var command = this._map.unoToolbarCommands[i];
			this._map._socket.sendMessage('commandvalues command=' + command);
		}
	},

	_onMessage: function (textMsg, img) {
		// 'tile:' is the most common message type; keep this the first.
		if (textMsg.startsWith('tile:')) {
			this._onTileMsg(textMsg, img);
		}
		else if (textMsg.startsWith('commandvalues:')) {
			this._onCommandValuesMsg(textMsg);
		}
		else if (textMsg.startsWith('cursorvisible:')) {
			this._onCursorVisibleMsg(textMsg);
		}
		else if (textMsg.startsWith('downloadas:')) {
			this._onDownloadAsMsg(textMsg);
		}
		else if (textMsg.startsWith('error:')) {
			this._onErrorMsg(textMsg);
		}
		else if (textMsg.startsWith('getchildid:')) {
			this._onGetChildIdMsg(textMsg);
		}
		else if (textMsg.startsWith('shapeselectioncontent:')) {
			this._onShapeSelectionContent(textMsg);
		}
		else if (textMsg.startsWith('graphicselection:')) {
			this._onGraphicSelectionMsg(textMsg);
		}
		else if (textMsg.startsWith('cellcursor:')) {
			this._onCellCursorMsg(textMsg);
		}
		else if (textMsg.startsWith('celladdress:')) {
			this._onCellAddressMsg(textMsg);
		}
		else if (textMsg.startsWith('cellformula:')) {
			this._onCellFormulaMsg(textMsg);
		}
		else if (textMsg.startsWith('hyperlinkclicked:')) {
			this._onHyperlinkClickedMsg(textMsg);
		}
		else if (textMsg.startsWith('invalidatecursor:')) {
			this._onInvalidateCursorMsg(textMsg);
		}
		else if (textMsg.startsWith('invalidatetiles:')) {
			var payload = textMsg.substring('invalidatetiles:'.length + 1);
			if (!payload.startsWith('EMPTY')) {
				this._onInvalidateTilesMsg(textMsg);
			}
			else {
				var msg = 'invalidatetiles: ';
				if (this._docType === 'text') {
					msg += 'part=0 ';
				} else {
					var partNumber = parseInt(payload.substring('EMPTY'.length + 1));
					msg += 'part=' + (isNaN(partNumber) ? this._selectedPart : partNumber) + ' ';
				}
				msg += 'x=0 y=0 ';
				msg += 'width=' + this._docWidthTwips + ' ';
				msg += 'height=' + this._docHeightTwips;
				this._onInvalidateTilesMsg(msg);
			}
		}
		else if (textMsg.startsWith('mousepointer:')) {
			this._onMousePointerMsg(textMsg);
		}
		else if (textMsg.startsWith('renderfont:')) {
			this._onRenderFontMsg(textMsg, img);
		}
		else if (textMsg.startsWith('searchnotfound:')) {
			this._onSearchNotFoundMsg(textMsg);
		}
		else if (textMsg.startsWith('searchresultselection:')) {
			this._onSearchResultSelection(textMsg);
		}
		else if (textMsg.startsWith('setpart:')) {
			this._onSetPartMsg(textMsg);
		}
		else if (textMsg.startsWith('statechanged:')) {
			this._onStateChangedMsg(textMsg);
		}
		else if (textMsg.startsWith('status:')) {
			this._onStatusMsg(textMsg);
		}
		else if (textMsg.startsWith('textselection:')) {
			this._onTextSelectionMsg(textMsg);
		}
		else if (textMsg.startsWith('textselectioncontent:')) {
			this._onTextSelectionContentMsg(textMsg);
		}
		else if (textMsg.startsWith('textselectionend:')) {
			this._onTextSelectionEndMsg(textMsg);
		}
		else if (textMsg.startsWith('textselectionstart:')) {
			this._onTextSelectionStartMsg(textMsg);
		}
		else if (textMsg.startsWith('windowpaint:')) {
			this._onDialogPaintMsg(textMsg, img);
		}
		else if (textMsg.startsWith('window:')) {
			this._onDialogMsg(textMsg);
		}
		else if (textMsg.startsWith('unocommandresult:')) {
			this._onUnoCommandResultMsg(textMsg);
		}
		else if (textMsg.startsWith('rulerupdate:')) {
			this._onRulerUpdate(textMsg);
		}
		else if (textMsg.startsWith('contextmenu:')) {
			this._onContextMenuMsg(textMsg);
		}
		else if (textMsg.startsWith('invalidateviewcursor:')) {
			this._onInvalidateViewCursorMsg(textMsg);
		}
		else if (textMsg.startsWith('viewcursorvisible:')) {
			this._onViewCursorVisibleMsg(textMsg);
		}
		else if (textMsg.startsWith('cellviewcursor:')) {
			this._onCellViewCursorMsg(textMsg);
		}
		else if (textMsg.startsWith('viewinfo:')) {
			this._onViewInfoMsg(textMsg);
		}
		else if (textMsg.startsWith('textviewselection:')) {
			this._onTextViewSelectionMsg(textMsg);
		}
		else if (textMsg.startsWith('graphicviewselection:')) {
			this._onGraphicViewSelectionMsg(textMsg);
		}
		else if (textMsg.startsWith('editor:')) {
			this._updateEditor(textMsg);
		}
		else if (textMsg.startsWith('validitylistbutton:')) {
			this._onValidityListButtonMsg(textMsg);
		}
		else if (textMsg.startsWith('signaturestatus:')) {
			var signstatus = textMsg.substring('signaturestatus:'.length + 1);
			this._map.onChangeSignStatus(signstatus);
		}
		else if (textMsg.startsWith('signeddocumentuploadstatus:')) {
			var status = textMsg.substring('signeddocumentuploadstatus:'.length + 1);
			this._map.onVereignUploadStatus(status);
		}
		else if (textMsg.startsWith('removesession')) {
			var viewId = parseInt(textMsg.substring('removesession'.length + 1));
			if (this._map._docLayer._viewId === viewId) {
				this._map.fire('postMessage', {msgId: 'close', args: {EverModified: this._map._everModified, Deprecated: true}});
				this._map.fire('postMessage', {msgId: 'UI_Close', args: {EverModified: this._map._everModified}});
				this._map.remove();
			}
		}
	},

	toggleTileDebugModeImpl: function() {
		this._debug = !this._debug;
		if (!this._debug) {
			this._map.removeLayer(this._debugInfo);
			this._map.removeLayer(this._debugInfo2);
			$('.leaflet-control-layers-expanded').css('display', 'none');
		} else {
			if (this._debugInfo) {
				this._map.addLayer(this._debugInfo);
				this._map.addLayer(this._debugInfo2);
				$('.leaflet-control-layers-expanded').css('display', 'block');
			}
			this._debugInit();
		}
	},

	_onCommandValuesMsg: function (textMsg) {
		var jsonIdx = textMsg.indexOf('{');
		if (jsonIdx === -1) {
			return;
		}
		var obj = JSON.parse(textMsg.substring(jsonIdx));
		if (obj.commandName === '.uno:DocumentRepair') {
			this._onDocumentRepair(obj);
		}
		else if (obj.commandName === '.uno:CellCursor') {
			this._onCellCursorMsg(obj.commandValues);
		}
		else if (this._map.unoToolbarCommands.indexOf(obj.commandName) !== -1) {
			this._toolbarCommandValues[obj.commandName] = obj.commandValues;
			this._map.fire('updatetoolbarcommandvalues', {
				commandName: obj.commandName,
				commandValues: obj.commandValues
			});
		}
		else {
			this._map.fire('commandvalues', {
				commandName: obj.commandName,
				commandValues: obj.commandValues
			});
		}
	},

	_onCellAddressMsg: function (textMsg) {
		var address = textMsg.substring(13);
		this._map.fire('celladdress', {address: address});
	},

	_onCellFormulaMsg: function (textMsg) {
		var formula = textMsg.substring(13);
		if (!this._map['wopi'].DisableCopy) {
			this._selectionTextContent = formula;
		}
		this._map.fire('cellformula', {formula: formula});
	},

	_onCursorVisibleMsg: function(textMsg) {
		var command = textMsg.match('cursorvisible: true');
		this._isCursorVisible = command ? true : false;
		this._onUpdateCursor();
	},

	_onDownloadAsMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		var parser = document.createElement('a');
		parser.href = this._map.options.server;

		var wopiSrc = '';
		if (this._map.options.wopiSrc != '') {
			wopiSrc = '?WOPISrc=' + this._map.options.wopiSrc;
		}
		var url = this._map.options.webserver + this._map.options.serviceRoot + '/' + this._map.options.urlPrefix + '/' +
		    encodeURIComponent(this._map.options.doc) + '/' + command.jail + '/' + command.dir + '/' + command.name + wopiSrc;

		this._map.hideBusy();
		if (command.id === 'print') {
			if (L.Browser.gecko || L.Browser.edge || this._map.options.print === false) {
				// the print dialog doesn't work well on firefox
				// due to a pdf.js issue - https://github.com/mozilla/pdf.js/issues/5397
				// open the pdf file in a new tab so that that user can print it directly in the browser's
				// pdf viewer
				var param = wopiSrc !== '' ? '&' : '?';
				param += 'attachment=0';
				window.open(url + param, '_blank');
			}
			else {
				this._map.fire('filedownloadready', {url: url});
			}
		}
		else if (command.id === 'slideshow') {
			this._map.fire('slidedownloadready', {url: url});
		}
		else if (command.id === 'export') {
			this._map._fileDownloader.src = url;
		}
	},

	_onErrorMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);

		// let's provide some convenience error codes for the UI
		var errorId = 1; // internal error
		if (command.errorCmd === 'load') {
			errorId = 2; // document cannot be loaded
		}
		else if (command.errorCmd === 'save' || command.errorCmd === 'saveas') {
			errorId = 5; // document cannot be saved
		}

		var errorCode = -1;
		if (command.errorCode !== undefined) {
			errorCode = command.errorCode;
		}

		this._map.fire('error', {cmd: command.errorCmd, kind: command.errorKind, id: errorId, code: errorCode});
	},

	_onGetChildIdMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		this._map.fire('childid', {id: command.id});
	},

	_isGraphicAngleDivisibleBy90: function() {
		return (this._graphicSelectionAngle % 9000 === 0);
	},

	_onShapeSelectionContent: function (textMsg) {
		textMsg = textMsg.substring('shapeselectioncontent:'.length + 1);
		if (this._graphicMarker) {
			this._graphicMarker.removeEmbeddedSVG();
			this._graphicMarker.addEmbeddedSVG(textMsg);
		}
	},

	_onGraphicSelectionMsg: function (textMsg) {
		if (textMsg.match('EMPTY')) {
			this._graphicSelectionTwips = new L.Bounds(new L.Point(0, 0), new L.Point(0, 0));
			this._graphicSelection = new L.LatLngBounds(new L.LatLng(0, 0), new L.LatLng(0, 0));
		}
		else {
			textMsg = '[' + textMsg.substr('graphicselection:'.length) + ']';
			var msgData = JSON.parse(textMsg);
			var topLeftTwips = new L.Point(msgData[0], msgData[1]);
			var offset = new L.Point(msgData[2], msgData[3]);
			var bottomRightTwips = topLeftTwips.add(offset);
			this._graphicSelectionTwips = new L.Bounds(topLeftTwips, bottomRightTwips);
			this._graphicSelection = new L.LatLngBounds(
				this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
				this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));

			this._graphicSelectionAngle = (msgData.length > 4) ? msgData[4] : 0;

			this._graphicSelection.extraInfo = {};
			if (msgData.length > 5) {
				this._graphicSelection.extraInfo = msgData[5];
				var dragInfo = this._graphicSelection.extraInfo.dragInfo;
				if (dragInfo && dragInfo.dragMethod === 'PieSegmentDragging') {
					dragInfo.initialOffset /= 100.0;
					var dragDir = dragInfo.dragDirection;
					dragInfo.dragDirection = this._twipsToPixels(new L.Point(dragDir[0], dragDir[1]));
					dragDir = dragInfo.dragDirection;
					dragInfo.range2 = dragDir.x * dragDir.x + dragDir.y * dragDir.y;
				}
			}
			
			// defaults
			var extraInfo = this._graphicSelection.extraInfo;
			if (extraInfo.isDraggable === undefined)
				extraInfo.isDraggable = true;
			if (extraInfo.isResizable === undefined)
				extraInfo.isResizable = true;
			if (extraInfo.isRotatable === undefined)
				extraInfo.isRotatable = true;

			// Workaround for tdf#123874. For some reason the handling of the
			// shapeselectioncontent messages that we get back causes the WebKit process
			// to crash on iOS.
			if (!window.ThisIsTheiOSApp && this._graphicSelection.extraInfo.isDraggable && !this._graphicSelection.extraInfo.svg) {
				this._map._socket.sendMessage('rendershapeselection mimetype=image/svg+xml');
			}
		}

		this._onUpdateGraphicSelection();
	},

	_onGraphicViewSelectionMsg: function (textMsg) {
		textMsg = textMsg.substring('graphicviewselection:'.length + 1);
		var obj = JSON.parse(textMsg);
		var viewId = parseInt(obj.viewId);

		// Ignore if viewid is ours or not in our db
		if (viewId === this._viewId || !this._map._viewInfo[viewId]) {
			return;
		}

		var strTwips = obj.selection.match(/\d+/g);
		this._graphicViewMarkers[viewId] = this._graphicViewMarkers[viewId] || {};
		this._graphicViewMarkers[viewId].part = parseInt(obj.part);
		if (strTwips != null) {
			var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
			var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
			var bottomRightTwips = topLeftTwips.add(offset);
			this._graphicViewMarkers[viewId].bounds = new L.LatLngBounds(
				this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
				this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));
		}
		else {
			this._graphicViewMarkers[viewId].bounds = L.LatLngBounds.createDefault();
		}

		this._onUpdateGraphicViewSelection(viewId);
	},

	_onCellCursorMsg: function (textMsg) {
		if (!this._cellCursor) {
			this._cellCursor = L.LatLngBounds.createDefault();
		}
		if (!this._prevCellCursor) {
			this._prevCellCursor = L.LatLngBounds.createDefault();
		}
		if (!this._cellCursorXY) {
			this._cellCursorXY = new L.Point(-1, -1);
		}
		if (!this._prevCellCursorXY) {
			this._prevCellCursorXY = new L.Point(-1, -1);
		}

		if (textMsg.match('EMPTY')) {
			this._cellCursorTwips = new L.Bounds(new L.Point(0, 0), new L.Point(0, 0));
			this._cellCursor = L.LatLngBounds.createDefault();
			this._cellCursorXY = new L.Point(-1, -1);
		}
		else {
			var strTwips = textMsg.match(/\d+/g);
			var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
			var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
			var bottomRightTwips = topLeftTwips.add(offset);
			this._cellCursorTwips = new L.Bounds(topLeftTwips, bottomRightTwips);
			this._cellCursor = new L.LatLngBounds(
							this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
							this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));
			this._cellCursorXY = new L.Point(parseInt(strTwips[4]), parseInt(strTwips[5]));
		}

		var horizontalDirection = 0;
		var verticalDirection = 0;
		var sign = function(x) {
			return x > 0 ? 1 : x < 0 ? -1 : x;
		};
		if (!this._isEmptyRectangle(this._prevCellCursor) && !this._isEmptyRectangle(this._cellCursor)) {
			horizontalDirection = sign(this._cellCursor.getWest() - this._prevCellCursor.getWest());
			verticalDirection = sign(this._cellCursor.getNorth() - this._prevCellCursor.getNorth());
		}

		var onPgUpDn = false;
		if (!this._isEmptyRectangle(this._cellCursor) && !this._prevCellCursor.equals(this._cellCursor)) {
			if ((this._cellCursorOnPgUp && this._cellCursorOnPgUp.equals(this._prevCellCursor)) ||
				(this._cellCursorOnPgDn && this._cellCursorOnPgDn.equals(this._prevCellCursor))) {
				onPgUpDn = true;
			}
			this._prevCellCursor = new L.LatLngBounds(this._cellCursor.getSouthWest(), this._cellCursor.getNorthEast());
		}

		this._onUpdateCellCursor(horizontalDirection, verticalDirection, onPgUpDn);
	},

	_onDocumentRepair: function (textMsg) {
		if (!this._docRepair) {
			this._docRepair = L.control.documentRepair();
		}

		if (!this._docRepair.isVisible()) {
			this._docRepair.addTo(this._map);
			this._docRepair.fillActions(textMsg);
			this._map.enable(false);
			this._docRepair.show();
		}
	},

	_onSpecialChar: function(fontList, selectedIndex) {
		if (!this._specialChar) {
			this._specialChar = L.control.characterMap();
		}
		if (!this._specialChar.isVisible()) {
			this._specialChar.addTo(this._map);
			this._specialChar.fillFontNames(fontList, selectedIndex);
			this._map.enable(false);
			this._specialChar.show();
		}
	},

	_onMousePointerMsg: function (textMsg) {
		textMsg = textMsg.substring(14); // "mousepointer: "
		textMsg = L.Cursor.getCustomCursor(textMsg) || textMsg;
		if (this._map._container.style.cursor !== textMsg) {
			this._map._container.style.cursor = textMsg;
		}
	},

	_onHyperlinkClickedMsg: function (textMsg) {
		var link = textMsg.substring(18);
		this._map.fire('hyperlinkclicked', {url: link});
	},

	_onInvalidateCursorMsg: function (textMsg) {
		var docLayer = this._map._docLayer;
		textMsg = textMsg.substring('invalidatecursor:'.length + 1);
		var obj = JSON.parse(textMsg);
		var modifierViewId = parseInt(obj.viewId);
		var strTwips = obj.rectangle.match(/\d+/g);
		var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
		var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
		var bottomRightTwips = topLeftTwips.add(offset);
		this._visibleCursor = new L.LatLngBounds(
						this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
						this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));
		var cursorPos = this._visibleCursor.getNorthWest();
		if ((docLayer._followEditor || docLayer._followUser) && this._map.lastActionByUser) {
			this._map._setFollowing(false, null);
		}
		this._map.lastActionByUser = false;
		if (!this._map._isFocused && this._map._permission === 'edit') {
			// Regain cursor if we had been out of focus and now have input.
			this._map.fire('editorgotfocus');
		}

		//first time document open, set last cursor position
		if (this.lastCursorPos.lat === 0 && this.lastCursorPos.lng === 0)
			this.lastCursorPos = cursorPos;

		var updateCursor = false;
		if ((this.lastCursorPos.lat !== cursorPos.lat) || (this.lastCursorPos.lng !== cursorPos.lng)) {
			updateCursor = true;
			this.lastCursorPos = cursorPos;
		}

		this._onUpdateCursor(updateCursor && (modifierViewId === this._viewId));
	},

	_updateEditor: function(textMsg) {
		textMsg = textMsg.substring('editor:'.length + 1);
		var editorId = parseInt(textMsg);
		var docLayer = this._map._docLayer;

		docLayer._editorId = editorId;

		if (docLayer._followEditor) {
			docLayer._followThis = editorId;
		}

		if (this._map._viewInfo[editorId])
			this._map.fire('updateEditorName', {username: this._map._viewInfo[editorId].username})
	},

	_onInvalidateViewCursorMsg: function (textMsg) {
		textMsg = textMsg.substring('invalidateviewcursor:'.length + 1);
		var obj = JSON.parse(textMsg);
		var viewId = parseInt(obj.viewId);
		var docLayer = this._map._docLayer;

		// Ignore if viewid is same as ours or not in our db
		if (viewId === this._viewId || !this._map._viewInfo[viewId]) {
			return;
		}

		var strTwips = obj.rectangle.match(/\d+/g);
		var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
		var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
		var bottomRightTwips = topLeftTwips.add(offset);

		this._viewCursors[viewId] = this._viewCursors[viewId] || {};
		this._viewCursors[viewId].bounds = new L.LatLngBounds(
			this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
			this._twipsToLatLng(bottomRightTwips, this._map.getZoom())),
		this._viewCursors[viewId].part = parseInt(obj.part);

		// FIXME. Server not sending view visible cursor
		if (typeof this._viewCursors[viewId].visible === 'undefined') {
			this._viewCursors[viewId].visible = true;
		}

		this._onUpdateViewCursor(viewId);

		if (docLayer._followThis === viewId && (docLayer._followEditor || docLayer._followUser)) {
			if (this._map.getDocType() === 'text' || this._map.getDocType() === 'presentation') {
				this.goToViewCursor(viewId);
			}
			else if (this._map.getDocType() === 'spreadsheet') {
				this.goToCellViewCursor(viewId);
			}
		}
	},

	_onCellViewCursorMsg: function (textMsg) {
		textMsg = textMsg.substring('cellviewcursor:'.length + 1);
		var obj = JSON.parse(textMsg);
		var viewId = parseInt(obj.viewId);

		// Ignore if viewid is same as ours
		if (viewId === this._viewId) {
			return;
		}

		this._cellViewCursors[viewId] = this._cellViewCursors[viewId] || {};
		if (!this._cellViewCursors[viewId].bounds) {
			this._cellViewCursors[viewId].bounds = L.LatLngBounds.createDefault();
		}
		if (obj.rectangle.match('EMPTY')) {
			this._cellViewCursors[viewId].bounds = L.LatLngBounds.createDefault();
		}
		else {
			var strTwips = obj.rectangle.match(/\d+/g);
			var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
			var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
			var bottomRightTwips = topLeftTwips.add(offset);
			this._cellViewCursors[viewId].bounds = new L.LatLngBounds(
				this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
				this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));
		}

		this._cellViewCursors[viewId].part = parseInt(obj.part);
		this._onUpdateCellViewCursor(viewId);
	},

	_onUpdateCellViewCursor: function (viewId) {
		if (!this._cellViewCursors[viewId] || !this._cellViewCursors[viewId].bounds)
			return;

		var cellViewCursorMarker = this._cellViewCursors[viewId].marker;
		var viewPart = this._cellViewCursors[viewId].part;

		if (!this._isEmptyRectangle(this._cellViewCursors[viewId].bounds) && this._selectedPart === viewPart) {
			if (!cellViewCursorMarker) {
				var backgroundColor = L.LOUtil.rgbToHex(this._map.getViewColor(viewId));
				cellViewCursorMarker = L.rectangle(this._cellViewCursors[viewId].bounds, {fill: false, color: backgroundColor, weight: 2});
				this._cellViewCursors[viewId].marker = cellViewCursorMarker;
				cellViewCursorMarker.bindPopup(this._map.getViewName(viewId), {autoClose: false, autoPan: false, backgroundColor: backgroundColor, color: 'white', closeButton: false});
			}
			else {
				cellViewCursorMarker.setBounds(this._cellViewCursors[viewId].bounds);
			}
			this._viewLayerGroup.addLayer(cellViewCursorMarker);
		}
		else if (cellViewCursorMarker) {
			this._viewLayerGroup.removeLayer(cellViewCursorMarker);
		}
	},

	goToCellViewCursor: function(viewId) {
		if (this._cellViewCursors[viewId] && !this._isEmptyRectangle(this._cellViewCursors[viewId].bounds)) {
			if (!this._map.getBounds().contains(this._cellViewCursors[viewId].bounds)) {
				var mapBounds = this._map.getBounds();
				var scrollX = 0;
				var scrollY = 0;
				var spacingX = Math.abs(this._cellViewCursors[viewId].bounds.getEast() - this._cellViewCursors[viewId].bounds.getWest()) / 4.0;
				var spacingY = Math.abs(this._cellViewCursors[viewId].bounds.getSouth() - this._cellViewCursors[viewId].bounds.getNorth()) / 4.0;
				if (this._cellViewCursors[viewId].bounds.getWest() < mapBounds.getWest()) {
					scrollX = this._cellViewCursors[viewId].bounds.getWest() - mapBounds.getWest() - spacingX;
				} else if (this._cellViewCursors[viewId].bounds.getEast() > mapBounds.getEast()) {
					scrollX = this._cellViewCursors[viewId].bounds.getEast() - mapBounds.getEast() + spacingX;
				}

				if (this._cellViewCursors[viewId].bounds.getNorth() > mapBounds.getNorth()) {
					scrollY = this._cellViewCursors[viewId].bounds.getNorth() - mapBounds.getNorth() + spacingY;
				} else if (this._cellViewCursors[viewId].bounds.getSouth() < mapBounds.getSouth()) {
					scrollY = this._cellViewCursors[viewId].bounds.getSouth() - mapBounds.getSouth() - spacingY;
				}

				if (scrollX !== 0 || scrollY !== 0) {
					var newCenter = mapBounds.getCenter();
					newCenter.lat += scrollX;
					newCenter.lat += scrollY;
					var center = this._map.project(newCenter);
					center = center.subtract(this._map.getSize().divideBy(2));
					center.x = Math.round(center.x < 0 ? 0 : center.x);
					center.y = Math.round(center.y < 0 ? 0 : center.y);
					this._map.fire('scrollto', {x: center.x, y: center.y});
				}
			}

			var backgroundColor = L.LOUtil.rgbToHex(this._map.getViewColor(viewId));
			this._cellViewCursors[viewId].marker.bindPopup(this._map.getViewName(viewId), {autoClose: false, autoPan: false, backgroundColor: backgroundColor, color: 'white', closeButton: false});
		}
	},

	_onViewCursorVisibleMsg: function(textMsg) {
		textMsg = textMsg.substring('viewcursorvisible:'.length + 1);
		var obj = JSON.parse(textMsg);
		var viewId = parseInt(obj.viewId);

		// Ignore if viewid is same as ours or not in our db
		if (viewId === this._viewId || !this._map._viewInfo[viewId]) {
			return;
		}

		if (typeof this._viewCursors[viewId] !== 'undefined') {
			this._viewCursors[viewId].visible = (obj.visible === 'true');
		}

		this._onUpdateViewCursor(viewId);
	},

	_addView: function(viewInfo) {
		if (viewInfo.color === 0 && this._map.getDocType() !== 'text') {
			viewInfo.color = L.LOUtil.getViewIdColor(viewInfo.id);
		}

		this._map.addView(viewInfo);

		//TODO: We can initialize color and other properties here.
		if (typeof this._viewCursors[viewInfo.id] !== 'undefined') {
			this._viewCursors[viewInfo.id] = {};
		}

		this._onUpdateViewCursor(viewInfo.id);
	},

	_removeView: function(viewId) {
		// Remove selection, if any.
		if (this._viewSelections[viewId] && this._viewSelections[viewId].selection) {
			this._viewLayerGroup.removeLayer(this._viewSelections[viewId].selection);
		}

		// Remove the view and update (to refresh as needed).
		if (typeof this._viewCursors[viewId] !== 'undefined') {
			this._viewCursors[viewId].visible = false;
			this._onUpdateViewCursor(viewId);
			delete this._viewCursors[viewId];
		}

		this._map.removeView(viewId);
	},

	removeAllViews: function() {
		for (var viewInfoIdx in this._map._viewInfo) {
			this._removeView(parseInt(viewInfoIdx));
		}
	},

	_onViewInfoMsg: function(textMsg) {
		textMsg = textMsg.substring('viewinfo: '.length);
		var viewInfo = JSON.parse(textMsg);
		this._map.fire('viewinfo', viewInfo);

		// A new view
		var viewIds = [];
		for (var viewInfoIdx in viewInfo) {
			if (!(parseInt(viewInfo[viewInfoIdx].id) in this._map._viewInfo)) {
				this._addView(viewInfo[viewInfoIdx]);
			}
			viewIds.push(viewInfo[viewInfoIdx].id);
		}

		// Check if any view is deleted
		for (viewInfoIdx in this._map._viewInfo) {
			if (viewIds.indexOf(parseInt(viewInfoIdx)) === -1) {
				this._removeView(parseInt(viewInfoIdx));
			}
		}

		// Sending postMessage about View_Added / View_Removed is
		// deprecated, going forward we prefer sending the entire information.
		this._map.fire('updateviewslist');
	},

	_onRenderFontMsg: function (textMsg, img) {
		var command = this._map._socket.parseServerCmd(textMsg);
		this._map.fire('renderfont', {
			font: command.font,
			char: command.char,
			img: img
		});
	},

	_onSearchNotFoundMsg: function (textMsg) {
		this._clearSearchResults();
		this._searchRequested = false;
		var originalPhrase = textMsg.substring(16);
		this._map.fire('search', {originalPhrase: originalPhrase, count: 0});
	},

	_onSearchResultSelection: function (textMsg) {
		this._searchRequested = false;
		textMsg = textMsg.substring(23);
		var obj = JSON.parse(textMsg);
		var originalPhrase = obj.searchString;
		var count = obj.searchResultSelection.length;
		var highlightAll = obj.highlightAll;
		var results = [];
		for (var i = 0; i < obj.searchResultSelection.length; i++) {
			results.push({
				part: parseInt(obj.searchResultSelection[i].part),
				rectangles: this._twipsRectanglesToPixelBounds(obj.searchResultSelection[i].rectangles),
				twipsRectangles: obj.searchResultSelection[i].rectangles
			});
		}
		// do not cache search results if there is only one result.
		// this way regular searches works fine
		if (count > 1)
		{
			this._clearSearchResults();
			this._searchResults = results;
			this._map.setPart(results[0].part); // go to first result.
		} else if (count === 1) {
			this._lastSearchResult = results[0];
		}
		this._searchTerm = originalPhrase;
		this._map.fire('search', {originalPhrase: originalPhrase, count: count, highlightAll: highlightAll, results: results});
	},

	_clearSearchResults: function() {
		this._lastSearchResult = null;
		this._searchResults = null;
		this._searchTerm = null;
		this._searchResultsLayer.clearLayers();
	},

	_drawSearchResults: function() {
		if (!this._searchResults) {
			return;
		}
		this._searchResultsLayer.clearLayers();
		for (var k = 0; k < this._searchResults.length; k++)
		{
			var result = this._searchResults[k];
			if (result.part === this._selectedPart)
			{
				var _fillColor = '#CCCCCC';
				var strTwips = result.twipsRectangles.match(/\d+/g);
				var rectangles = [];
				for (var i = 0; i < strTwips.length; i += 4) {
					var topLeftTwips = new L.Point(parseInt(strTwips[i]), parseInt(strTwips[i + 1]));
					var offset = new L.Point(parseInt(strTwips[i + 2]), parseInt(strTwips[i + 3]));
					var topRightTwips = topLeftTwips.add(new L.Point(offset.x, 0));
					var bottomLeftTwips = topLeftTwips.add(new L.Point(0, offset.y));
					var bottomRightTwips = topLeftTwips.add(offset);
					rectangles.push([bottomLeftTwips, bottomRightTwips, topLeftTwips, topRightTwips]);
				}
				var polygons = L.PolyUtil.rectanglesToPolygons(rectangles, this);
				var selection = new L.Polygon(polygons, {
					pointerEvents: 'none',
					fillColor: _fillColor,
					fillOpacity: 0.25,
					weight: 2,
					opacity: 0.25});
				this._searchResultsLayer.addLayer(selection);
			}
		}
	},

	_onStateChangedMsg: function (textMsg) {
		textMsg = textMsg.substr(14);
		var index = textMsg.indexOf('=');
		var commandName = index !== -1 ? textMsg.substr(0, index) : '';
		var state = index !== -1 ? textMsg.substr(index + 1) : '';
		this._map.fire('commandstatechanged', {commandName : commandName, state : state});
	},

	_onUnoCommandResultMsg: function (textMsg) {
		// console.log('_onUnoCommandResultMsg: "' + textMsg + '"');
		textMsg = textMsg.substring(18);
		var obj = JSON.parse(textMsg);
		var commandName = obj.commandName;
		if (obj.success === 'true') {
			var success = true;
		}
		else if (obj.success === 'false') {
			success = false;
		}

		this._map.hideBusy();
		this._map.fire('commandresult', {commandName: commandName, success: success, result: obj.result});

		if (this._map.CallPythonScriptSource != null) {
			this._map.CallPythonScriptSource.postMessage(JSON.stringify({'MessageId': 'CallPythonScript-Result',
										     'SendTime': Date.now(),
										     'Values': obj
										    }),
								     '*');
			this._map.CallPythonScriptSource = null;
		}
	},

	_onRulerUpdate: function (textMsg) {
		textMsg = textMsg.substring(13);
		var obj = JSON.parse(textMsg);

		this._map.fire('rulerupdate', obj);
	},

	_onContextMenuMsg: function (textMsg) {
		textMsg = textMsg.substring(13);
		var obj = JSON.parse(textMsg);

		this._map.fire('locontextmenu', obj);
	},

	_onTextSelectionMsg: function (textMsg) {
		var strTwips = textMsg.match(/\d+/g);
		this._selections.clearLayers();
		if (strTwips != null) {
			var rectangles = [];
			for (var i = 0; i < strTwips.length; i += 4) {
				var topLeftTwips = new L.Point(parseInt(strTwips[i]), parseInt(strTwips[i + 1]));
				var offset = new L.Point(parseInt(strTwips[i + 2]), parseInt(strTwips[i + 3]));
				var topRightTwips = topLeftTwips.add(new L.Point(offset.x, 0));
				var bottomLeftTwips = topLeftTwips.add(new L.Point(0, offset.y));
				var bottomRightTwips = topLeftTwips.add(offset);
				rectangles.push([bottomLeftTwips, bottomRightTwips, topLeftTwips, topRightTwips]);
			}

			var polygons = L.PolyUtil.rectanglesToPolygons(rectangles, this);
			var selection = new L.Polygon(polygons, {
				pointerEvents: 'none',
				fillColor: '#43ACE8',
				fillOpacity: 0.25,
				weight: 2,
				opacity: 0.25});
			this._selections.addLayer(selection);
			if (this._selectionContentRequest) {
				clearTimeout(this._selectionContentRequest);
			}
			this._selectionContentRequest = setTimeout(L.bind(function () {
				this._map._socket.sendMessage('gettextselection mimetype=text/plain;charset=utf-8');}, this), 100);
		}
		this._onUpdateTextSelection();
	},

	_onTextViewSelectionMsg: function (textMsg) {
		textMsg = textMsg.substring('textviewselection:'.length + 1);
		var obj = JSON.parse(textMsg);
		var viewId = parseInt(obj.viewId);
		var viewPart = parseInt(obj.part);

		// Ignore if viewid is same as ours or not in our db
		if (viewId === this._viewId || !this._map._viewInfo[viewId]) {
			return;
		}

		var strTwips = obj.selection.match(/\d+/g);
		this._viewSelections[viewId] = this._viewSelections[viewId] || {};
		if (strTwips != null) {
			var rectangles = [];
			for (var i = 0; i < strTwips.length; i += 4) {
				var topLeftTwips = new L.Point(parseInt(strTwips[i]), parseInt(strTwips[i + 1]));
				var offset = new L.Point(parseInt(strTwips[i + 2]), parseInt(strTwips[i + 3]));
				var topRightTwips = topLeftTwips.add(new L.Point(offset.x, 0));
				var bottomLeftTwips = topLeftTwips.add(new L.Point(0, offset.y));
				var bottomRightTwips = topLeftTwips.add(offset);
				rectangles.push([bottomLeftTwips, bottomRightTwips, topLeftTwips, topRightTwips]);
			}

			this._viewSelections[viewId].part = viewPart;
			this._viewSelections[viewId].polygons = L.PolyUtil.rectanglesToPolygons(rectangles, this);
		} else {
			this._viewSelections[viewId].polygons = null;
		}

		this._onUpdateTextViewSelection(viewId);
	},

	_onTextSelectionContentMsg: function (textMsg) {
		this._selectionTextContent = textMsg.substr(22);
	},

	_updateScrollOnCellSelection: function (oldSelection, newSelection) {
		if (this._map._docLayer._docType === 'spreadsheet' && oldSelection) {
			var mapBounds = this._map.getBounds();
			if (!mapBounds.contains(newSelection) && !newSelection.equals(oldSelection)) {
				var spacingX = Math.abs(this._cellCursor.getEast() - this._cellCursor.getWest()) / 4.0;
				var spacingY = Math.abs((this._cellCursor.getSouth() - this._cellCursor.getNorth())) / 2.0;

				var scrollX = 0, scrollY = 0;
				if (newSelection.getEast() > mapBounds.getEast() && newSelection.getEast() > oldSelection.getEast())
					scrollX = newSelection.getEast() - mapBounds.getEast() + spacingX;
				else if (newSelection.getWest() < mapBounds.getWest() && newSelection.getWest() < oldSelection.getWest())
					scrollX = newSelection.getWest() - mapBounds.getWest() - spacingX;
				if (newSelection.getNorth() > mapBounds.getNorth() && newSelection.getNorth() > oldSelection.getNorth())
					scrollY = newSelection.getNorth() - mapBounds.getNorth() + spacingY;
				else if (newSelection.getSouth() < mapBounds.getSouth() && newSelection.getSouth() < oldSelection.getSouth())
					scrollY = newSelection.getSouth() - mapBounds.getSouth() - spacingY;
				if (scrollX !== 0 || scrollY !== 0) {
					var newCenter = mapBounds.getCenter();
					newCenter.lng += scrollX;
					newCenter.lat += scrollY;
					var center = this._map.project(newCenter);
					center = center.subtract(this._map.getSize().divideBy(2));
					center.x = Math.round(center.x < 0 ? 0 : center.x);
					center.y = Math.round(center.y < 0 ? 0 : center.y);
					this._map.fire('scrollto', {x: center.x, y: center.y});
				}
			}
		}
	},

	_onTextSelectionEndMsg: function (textMsg) {
		var strTwips = textMsg.match(/\d+/g);
		if (strTwips != null && this._map._permission === 'edit') {
			var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
			var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
			var bottomRightTwips = topLeftTwips.add(offset);

			var oldSelection = this._textSelectionEnd;
			this._textSelectionEnd = new L.LatLngBounds(
						this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
						this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));

			this._updateScrollOnCellSelection(oldSelection, this._textSelectionEnd);
		}
		else {
			this._textSelectionEnd = null;
		}
	},

	_onTextSelectionStartMsg: function (textMsg) {
		var strTwips = textMsg.match(/\d+/g);
		if (strTwips != null && this._map._permission === 'edit') {
			var topLeftTwips = new L.Point(parseInt(strTwips[0]), parseInt(strTwips[1]));
			var offset = new L.Point(parseInt(strTwips[2]), parseInt(strTwips[3]));
			var bottomRightTwips = topLeftTwips.add(offset);
			var oldSelection = this._textSelectionStart;
			this._textSelectionStart = new L.LatLngBounds(
						this._twipsToLatLng(topLeftTwips, this._map.getZoom()),
						this._twipsToLatLng(bottomRightTwips, this._map.getZoom()));

			this._updateScrollOnCellSelection(oldSelection, this._textSelectionStart);
		}
		else {
			this._textSelectionStart = null;
		}
	},

	_onDialogPaintMsg: function(textMsg, img) {
		var command = this._map._socket.parseServerCmd(textMsg);

		this._map.fire('windowpaint', {
			id: command.id,
			img: img,
			width: command.width,
			height: command.height,
			rectangle: command.rectangle
		});
	},

	_onDialogMsg: function(textMsg) {
		textMsg = textMsg.substring('window: '.length);
		var dialogMsg = JSON.parse(textMsg);
		// e.type refers to signal type
		dialogMsg.winType = dialogMsg.type;
		this._map.fire('window', dialogMsg);
	},

	_onTileMsg: function (textMsg, img) {
		var command = this._map._socket.parseServerCmd(textMsg);
		var coords = this._twipsToCoords(command);
		coords.z = command.zoom;
		coords.part = command.part;
		var key = this._tileCoordsToKey(coords);
		var tile = this._tiles[key];
		if (this._debug && tile) {
			if (tile._debugLoadCount) {
				tile._debugLoadCount++;
				this._debugLoadCount++;
			} else {
				tile._debugLoadCount = 1;
				tile._debugInvalidateCount = 1;
			}
			if (!tile._debugPopup) {
				var tileBound = this._keyToBounds(key);
				tile._debugPopup = L.popup({className: 'debug', offset: new L.Point(0, 0), autoPan: false, closeButton: false, closeOnClick: false})
						.setLatLng(new L.LatLng(tileBound.getSouth(), tileBound.getWest() + (tileBound.getEast() - tileBound.getWest())/5));
				this._debugInfo.addLayer(tile._debugPopup);
				if (this._debugTiles[key]) {
					this._debugInfo.removeLayer(this._debugTiles[key]);
				}
				tile._debugTile = L.rectangle(tileBound, {color: 'blue', weight: 1, fillOpacity: 0, pointerEvents: 'none'});
				this._debugTiles[key] = tile._debugTile;
				tile._debugTime = this._debugGetTimeArray();
				this._debugInfo.addLayer(tile._debugTile);
			}
			if (tile._debugTime.date === 0)  {
				tile._debugPopup.setContent('requested: ' + this._tiles[key]._debugInvalidateCount + '<br>received: ' + this._tiles[key]._debugLoadCount);
			} else {
				tile._debugPopup.setContent('requested: ' + this._tiles[key]._debugInvalidateCount + '<br>received: ' + this._tiles[key]._debugLoadCount +
						'<br>' + this._debugSetTimes(tile._debugTime, +new Date() - tile._debugTime.date).replace(/, /g, '<br>'));
			}
			if (tile._debugTile) {
				tile._debugTile.setStyle({fillOpacity: (command.renderid === 'cached') ? 0.1 : 0, fillColor: 'yellow' });
			}
			this._debugShowTileData();
		}
		if (command.id !== undefined) {
			this._map.fire('tilepreview', {
				tile: img,
				id: command.id,
				width: command.width,
				height: command.height,
				part: command.part,
				docType: this._docType
			});
		}
		else if (tile && typeof(img) == 'object') {
			// 'Uint8Array' delta
			var canvas = document.createElement('canvas');
			canvas.width = window.tileSize;
			canvas.height = window.tileSize;
			var ctx = canvas.getContext('2d');

			var oldImg = new Image();
			oldImg.src = tile.el.src;
			ctx.drawImage(oldImg, 0, 0);

			// FIXME; can we operate directly on the image ?
			var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			var oldData = new Uint8ClampedArray(imgData.data);

			var delta = img;
			var pixSize = canvas.width * canvas.height * 4;
			var offset = 0;

			console.log('Applying a delta of length ' + delta.length + ' pix size: ' + pixSize + '\nhex: ' + hex2string(delta));

			// Green-tinge the old-Data ...
//			for (var i = 0; i < pixSize; ++i)
//			{
//				oldData[i*4 + 1] = 128;
//			}

			// wipe to grey.
//			for (var i = 0; i < pixSize * 4; ++i)
//			{
//				imgData.data[i] = 128;
//			}

			// Apply delta.
			for (var i = 1; i < delta.length;)
			{
				switch (delta[i])
				{
				case 99: // 'c': // copy row
					var count = delta[i+1];
					var srcRow = delta[i+2];
					var destRow = delta[i+3];
					i+= 4;
					console.log('copy ' + count + ' row(s) ' + srcRow + ' to ' + destRow);
					for (var cnt = 0; cnt < count; ++cnt)
					{
						var src = (srcRow + cnt) * canvas.width * 4;
						var dest = (destRow + cnt) * canvas.width * 4;
						for (var j = 0; j < canvas.width * 4; ++j)
						{
							imgData.data[dest + j] = oldData[src + j];
						}
					}
					break;
				case 100: // 'd': // new run
					destRow = delta[i+1];
					var destCol = delta[i+2];
					var span = delta[i+3];
					offset = destRow * canvas.width * 4 + destCol * 4;
					i += 4;
					console.log('apply new span of size ' + span + ' at pos ' + destCol + ', ' + destRow + ' into delta at byte: ' + offset);
					span *= 4;
					imgData.data[offset + 1] = 256; // debug - greener start
					while (span-- > 0) {
						imgData.data[offset++] = delta[i++];
					}
					imgData.data[offset - 2] = 256; // debug - blue terminator
					break;
				default:
					console.log('ERROR: Unknown code ' + delta[i] +
						    ' at offset ' + i);
					i = delta.length;
					break;
				}
			}

			ctx.putImageData(imgData, 0, 0);
			tile.el.src = canvas.toDataURL('image/png');

			console.log('set new image');
		}
		else if (tile) {
			if (this._tiles[key]._invalidCount > 0) {
				this._tiles[key]._invalidCount -= 1;
			}
			if (!tile.loaded) {
				this._emptyTilesCount -= 1;
				if (this._emptyTilesCount === 0) {
					this._map.fire('statusindicator', {statusType: 'alltilesloaded'});
				}
			}
			tile.el.src = img;
		}
		L.Log.log(textMsg, L.INCOMING, key);

		// Send acknowledgment, that the tile message arrived
		var tileID = command.part + ':' + command.x + ':' + command.y + ':' + command.tileWidth + ':' + command.tileHeight;
		this._map._socket.sendMessage('tileprocessed tile=' + tileID);
	},

	_tileOnLoad: function (done, tile) {
		done(null, tile);
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_mapOnError: function (e) {
		if (e.msg && this._map._permission === 'edit') {
			this._map.setPermission('view');
		}
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_clearSelections: function (calledFromSetPartHandler) {
		// hide the cursor if not editable
		this._onUpdateCursor(calledFromSetPartHandler);
		// hide the text selection
		this._selections.clearLayers();
		// hide the selection handles
		this._onUpdateTextSelection();
		// hide the graphic selection
		this._graphicSelection = null;
		this._onUpdateGraphicSelection();
		this._cellCursor = null;
		this._onUpdateCellCursor();
	},

	containsSelection: function (latlng) {
		var ret = false;
		var selections = this._selections.getLayers();
		for (var sel in selections) {
			if (selections[sel].getBounds().contains(latlng)) {
				ret = true;
				break;
			}
		}
		return ret;
	},

	_postMouseEvent: function(type, x, y, count, buttons, modifier) {

		this._sendClientZoom();

		this._sendClientVisibleArea();

		this._map._socket.sendMessage('mouse type=' + type +
				' x=' + x + ' y=' + y + ' count=' + count +
				' buttons=' + buttons + ' modifier=' + modifier);


		if (type === 'buttondown') {
			this._clearSearchResults();
		}
	},

	_postKeyboardEvent: function(type, charcode, keycode) {
		// console.log('==> _postKeyboardEvent type=' + type + ' charcode=' + charcode + ' keycode=' + keycode);
		if (this._docType === 'spreadsheet' && this._prevCellCursor && type === 'input') {
			if (keycode === 1030) { // PgUp
				if (this._cellCursorOnPgUp) {
					return;
				}
				this._cellCursorOnPgUp = new L.LatLngBounds(this._prevCellCursor.getSouthWest(), this._prevCellCursor.getNorthEast());
			}
			else if (keycode === 1031) { // PgDn
				if (this._cellCursorOnPgDn) {
					return;
				}
				this._cellCursorOnPgDn = new L.LatLngBounds(this._prevCellCursor.getSouthWest(), this._prevCellCursor.getNorthEast());
			}
		}

		this._sendClientZoom();

		this._sendClientVisibleArea();

		this._map._socket.sendMessage('key type=' + type +
				' char=' + charcode + ' key=' + keycode);
	},

	// if winId=0, then event is posted on the document
	_postCompositionEvent: function(winId, type, text) {
		// console.log('==> _postCompositionEvent type=' + type + ' text="' + text + '"');
		this._map._socket.sendMessage('textinput id=' + winId + ' type=' + type + ' text=' + encodeURIComponent(text));
	},

	_postSelectGraphicEvent: function(type, x, y) {
		this._map._socket.sendMessage('selectgraphic type=' + type +
				' x=' + x + ' y=' + y);
	},

	_postSelectTextEvent: function(type, x, y) {
		this._map._socket.sendMessage('selecttext type=' + type +
				' x=' + x + ' y=' + y);
	},

	// Is rRectangle empty?
	_isEmptyRectangle: function (bounds) {
		if (!bounds) {
			return true;
		}
		return bounds.getSouthWest().equals(new L.LatLng(0, 0)) && bounds.getNorthEast().equals(new L.LatLng(0, 0));
	},

	_onZoomStart: function () {
		this._isZooming = true;
	},


	_onZoomEnd: function () {
		this._isZooming = false;
		this._onUpdateCursor(null, true);
		this.updateAllViewCursors();
	},

	_updateCursorPos: function () {
		var pixBounds = L.bounds(this._map.latLngToLayerPoint(this._visibleCursor.getSouthWest()),
			this._map.latLngToLayerPoint(this._visibleCursor.getNorthEast()));
		var cursorPos = this._visibleCursor.getNorthWest();

		if (!this._cursorMarker) {
			this._cursorMarker = L.cursor(cursorPos, pixBounds.getSize().multiplyBy(this._map.getZoomScale(this._map.getZoom())), {blink: true});
		}
		else {
			this._cursorMarker.setLatLng(cursorPos, pixBounds.getSize().multiplyBy(this._map.getZoomScale(this._map.getZoom())));
		}

		this._map._clipboardContainer.showCursor();
		if (this._map._isFocused && !L.Browser.mobile) {
			// On mobile, this is causing some key input to get lost.
			this._map.focus();
		}
	},

	// Update cursor layer (blinking cursor).
	_onUpdateCursor: function (scroll, zoom) {
		var cursorPos = this._visibleCursor.getNorthWest();
		var docLayer = this._map._docLayer;

		if ((!zoom && scroll !== false) && !this._map.getBounds().contains(this._visibleCursor) && this._isCursorVisible) {
			var center = this._map.project(cursorPos);
			center = center.subtract(this._map.getSize().divideBy(2));
			center.x = Math.round(center.x < 0 ? 0 : center.x);
			center.y = Math.round(center.y < 0 ? 0 : center.y);
			if (!zoom && !(this._selectionHandles.start && this._selectionHandles.start.isDragged) &&
			    !(this._selectionHandles.end && this._selectionHandles.end.isDragged) &&
			    !(docLayer._followEditor || docLayer._followUser)) {
				this._map.fire('scrollto', {x: center.x, y: center.y, calledFromInvalidateCursorMsg: scroll !== undefined});
			}
		}

		this._updateCursorAndOverlay();

		this.eachView(this._viewCursors, function (item) {
			var viewCursorMarker = item.marker;
			if (viewCursorMarker) {
				viewCursorMarker.setOpacity(this.isCursorVisible() && this._cursorMarker.getLatLng().equals(viewCursorMarker.getLatLng()) ? 0 : 1);
			}
		}, this, true);
	},

	// enable or disable blinking cursor and  the cursor overlay depending on
	// the state of the document (if the falgs are set)
	_updateCursorAndOverlay: function (/*update*/) {
		if (this._map._permission === 'edit'
		&& this._isCursorVisible        // only when LOK has told us it is ok
		&& this._isFocused              // not when document is not focused
		&& !this._isZooming             // not when zooming
//		&& !this.isGraphicVisible()     // not when sizing / positioning graphics
		&& !this._isEmptyRectangle(this._visibleCursor)) {
			this._updateCursorPos();
		}
		else {
			this._map._clipboardContainer.hideCursor();
		}
	},

	// Update colored non-blinking view cursor
	_onUpdateViewCursor: function (viewId) {
		if (typeof this._viewCursors[viewId] !== 'object' ||
		    typeof this._viewCursors[viewId].bounds !== 'object') {
			return;
		}

		var pixBounds = L.bounds(this._map.latLngToLayerPoint(this._viewCursors[viewId].bounds.getSouthWest()),
		                         this._map.latLngToLayerPoint(this._viewCursors[viewId].bounds.getNorthEast()));
		var viewCursorPos = this._viewCursors[viewId].bounds.getNorthWest();
		var viewCursorMarker = this._viewCursors[viewId].marker;
		var viewCursorVisible = this._viewCursors[viewId].visible;
		var viewPart = this._viewCursors[viewId].part;

		if (!this._map.isViewReadOnly(viewId) &&
		    viewCursorVisible &&
		    !this._isZooming &&
		    !this._isEmptyRectangle(this._viewCursors[viewId].bounds) &&
		    (this._docType === 'text' || this._selectedPart === viewPart)) {
			if (!viewCursorMarker) {
				var viewCursorOptions = {
					color: L.LOUtil.rgbToHex(this._map.getViewColor(viewId)),
					blink: false,
					header: true, // we want a 'hat' to our view cursors (which will contain view user names)
					headerTimeout: 3000, // hide after some interval
					zIndex: viewId,
					headerName: this._map.getViewName(viewId)
				};
				viewCursorMarker = L.cursor(viewCursorPos, pixBounds.getSize().multiplyBy(this._map.getZoomScale(this._map.getZoom())), viewCursorOptions);
				this._viewCursors[viewId].marker = viewCursorMarker;
			}
			else {
				viewCursorMarker.setLatLng(viewCursorPos, pixBounds.getSize().multiplyBy(this._map.getZoomScale(this._map.getZoom())));
			}
			viewCursorMarker.setOpacity(this.isCursorVisible() && this._cursorMarker.getLatLng().equals(viewCursorMarker.getLatLng()) ? 0 : 1);
			this._viewLayerGroup.addLayer(viewCursorMarker);
		}
		else if (viewCursorMarker) {
			this._viewLayerGroup.removeLayer(viewCursorMarker);
		}

		this._viewCursors[viewId].marker.showCursorHeader();
	},

	updateAllViewCursors : function() {
		for (var key in this._viewCursors) {
			this._onUpdateViewCursor(key);
		}
	},

	isCursorVisible: function() {
		return this._map.hasLayer(this._cursorMarker);
	},

	isGraphicVisible: function() {
		return this._graphicMarker && this._map.hasLayer(this._graphicMarker);
	},

	goToViewCursor: function(viewId) {
		if (viewId === this._viewId) {
			this._onUpdateCursor();
			return;
		}

		if (this._viewCursors[viewId] && this._viewCursors[viewId].visible && !this._isEmptyRectangle(this._viewCursors[viewId].bounds)) {
			if (!this._map.getBounds().contains(this._viewCursors[viewId].bounds)) {
				var viewCursorPos = this._viewCursors[viewId].bounds.getNorthWest();
				var center = this._map.project(viewCursorPos);
				center = center.subtract(this._map.getSize().divideBy(2));
				center.x = Math.round(center.x < 0 ? 0 : center.x);
				center.y = Math.round(center.y < 0 ? 0 : center.y);

				this._map.fire('scrollto', {x: center.x, y: center.y, calledFromInvalidateCursorMsg: true});
			}

			this._viewCursors[viewId].marker.showCursorHeader();
		}
	},

	_onUpdateTextViewSelection: function (viewId) {
		viewId = parseInt(viewId);
		var viewPolygons = this._viewSelections[viewId].polygons;
		var viewSelection = this._viewSelections[viewId].selection;
		var viewPart = this._viewSelections[viewId].part;

		if (viewPolygons &&
		    (this._docType === 'text' || this._selectedPart === viewPart)) {

			// Reset previous selections
			if (viewSelection) {
				this._viewLayerGroup.removeLayer(viewSelection);
			}

			viewSelection = new L.Polygon(viewPolygons, {
				pointerEvents: 'none',
				fillColor: L.LOUtil.rgbToHex(this._map.getViewColor(viewId)),
				fillOpacity: 0.25,
				weight: 2,
				opacity: 0.25
			});
			this._viewSelections[viewId].selection = viewSelection;
			this._viewLayerGroup.addLayer(viewSelection);
		}
		else if (viewSelection) {
			this._viewLayerGroup.removeLayer(viewSelection);
		}
	},

	_onUpdateGraphicViewSelection: function (viewId) {
		var viewBounds = this._graphicViewMarkers[viewId].bounds;
		var viewMarker = this._graphicViewMarkers[viewId].marker;
		var viewPart = this._graphicViewMarkers[viewId].part;

		if (!this._isEmptyRectangle(viewBounds) &&
		   (this._docType === 'text' || this._selectedPart === viewPart)) {
			if (!viewMarker) {
				var color = L.LOUtil.rgbToHex(this._map.getViewColor(viewId));
				viewMarker = L.rectangle(viewBounds, {
					pointerEvents: 'auto',
					fill: false,
					color: color
				});
				// Disable autoPan, so the graphic view selection doesn't make the view jump to the popup.
				viewMarker.bindPopup(this._map.getViewName(viewId), {autoClose: false, autoPan: false, backgroundColor: color, color: 'white', closeButton: false});
				this._graphicViewMarkers[viewId].marker = viewMarker;
			}
			else {
				viewMarker.setBounds(viewBounds);
			}
			this._viewLayerGroup.addLayer(viewMarker);
		}
		else if (viewMarker) {
			this._viewLayerGroup.removeLayer(viewMarker);
		}
	},

	eachView: function (views, method, context, item) {
		for (var key in views) {
			method.call(context, item ? views[key] : key);
		}
	},

	// Update dragged graphics selection
	_onGraphicMove: function (e) {
		if (!e.pos) { return; }
		var aPos = this._latLngToTwips(e.pos);
		if (e.type === 'graphicmovestart') {
			this._graphicMarker.isDragged = true;
			this._graphicMarker._startPos = aPos;
		}
		else if (e.type === 'graphicmoveend') {
			var deltaPos = aPos.subtract(this._graphicMarker._startPos);
			if (deltaPos.x === 0 && deltaPos.y === 0) {
				this._graphicMarker.isDragged = false;
				return;
			}

			var param;
			var dragConstraint = this._graphicSelection.extraInfo.dragInfo;
			if (dragConstraint) {
				if (dragConstraint.dragMethod === 'PieSegmentDragging') {

					deltaPos = this._twipsToPixels(deltaPos);
					var dx = deltaPos.x;
					var dy = deltaPos.y;

					var initialOffset = dragConstraint.initialOffset;
					var dragDirection = dragConstraint.dragDirection;
					var additionalOffset = (dx * dragDirection.x + dy * dragDirection.y) / dragConstraint.range2;
					if (additionalOffset < -initialOffset)
						additionalOffset = -initialOffset;
					else if (additionalOffset > (1.0 - initialOffset))
						additionalOffset = 1.0 - initialOffset;

					var offset = Math.round((initialOffset + additionalOffset) * 100);

					// hijacking the uno:TransformDialog msg for sending the new offset value
					// for the pie segment dragging method;
					// indeed there isn't any uno msg dispatching on the core side, but a chart controller dispatching
					param = {
						Action: {
							type: 'string',
							value: 'PieSegmentDragging'
						},
						Offset: {
							type: 'long',
							value: offset
						}
					};
				}
			}
			else {
				var newPos = this._graphicSelectionTwips.min.add(deltaPos);
				var size = this._graphicSelectionTwips.getSize();

				// try to keep shape inside document
				if (newPos.x + size.x > this._docWidthTwips)
					newPos.x = this._docWidthTwips - size.x;
				if (newPos.x < 0)
					newPos.x = 0;

				if (newPos.y + size.y > this._docHeightTwips)
					newPos.y = this._docHeightTwips - size.y;
				if (newPos.y < 0)
					newPos.y = 0;

				param = {
					TransformPosX: {
						type: 'long',
						value: newPos.x
					},
					TransformPosY: {
						type: 'long',
						value: newPos.y
					}
				};
			}
			this._map.sendUnoCommand('.uno:TransformDialog ', param);
			this._graphicMarker.isDragged = false;
		}
	},

	// Update dragged graphics selection resize.
	_onGraphicEdit: function (e) {
		if (!e.pos) { return; }

		var aPos = this._latLngToTwips(e.pos);
		var selMin = this._graphicSelectionTwips.min;
		var selMax = this._graphicSelectionTwips.max;

		if (e.type === 'scalestart') {
			this._graphicMarker.isDragged = true;
			if (selMax.x - selMin.x < 2)
				this._graphicMarker.dragHorizDir = 0; // overlapping handles
			else if (Math.abs(selMin.x - aPos.x) < 2)
				this._graphicMarker.dragHorizDir = -1; // left handle
			else if (Math.abs(selMax.x - aPos.x) < 2)
				this._graphicMarker.dragHorizDir = 1; // right handle
			if (selMax.y - selMin.y < 2)
				this._graphicMarker.dragVertDir = 0; // overlapping handles
			else if (Math.abs(selMin.y - aPos.y) < 2)
				this._graphicMarker.dragVertDir = -1; // up handle
			else if (Math.abs(selMax.y - aPos.y) < 2)
				this._graphicMarker.dragVertDir = 1; // down handle
		}
		else if (e.type === 'scaleend') {
			var oldSize = selMax.subtract(selMin);
			var newSize = oldSize.clone();
			var newPos = selMin.clone();
			var center = this._graphicSelectionTwips.getCenter();
			var horizDir = this._graphicMarker.dragHorizDir;
			var vertDir = this._graphicMarker.dragVertDir;

			var computePosAndSize = function (coord) {
				var direction = (coord === 'x') ? horizDir : vertDir;
				var delta;
				if (direction === 0) {
					newSize[coord] = Math.abs(aPos[coord] - center[coord]);
					newPos[coord] = (aPos[coord] > center[coord]) ? center[coord] : center[coord] - newSize[coord];
				}
				else if (direction === -1) { // left/up handle
					delta = selMin[coord] - aPos[coord];
					newSize[coord] = oldSize[coord] + delta;
					newPos[coord] = aPos[coord];
				}
				else if (direction === 1) {  // right/down handle
					delta = aPos[coord] - selMax[coord];
					newSize[coord] = oldSize[coord] + delta;
					newPos[coord] = selMin[coord];
				}
			};

			computePosAndSize('x');
			computePosAndSize('y');

			// do we need to perform uniform scaling ?
			if (!this._isGraphicAngleDivisibleBy90()) {
				var delta = 0;
				if (horizDir !== undefined && vertDir === undefined) {
					newSize.y = Math.round(oldSize.y * (newSize.x / oldSize.x));
					delta = newSize.y - oldSize.y;
					newPos.y = Math.round(selMin.y - delta / 2);
				}
				else if (horizDir === undefined && vertDir !== undefined) {
					newSize.x = Math.round(oldSize.x * (newSize.y / oldSize.y));
					delta = newSize.x - oldSize.x;
					newPos.x = Math.round(selMin.x - delta / 2);
				}
			}

			// try to keep shape inside document
			if (newPos.x + newSize.x > this._docWidthTwips)
				newPos.x = this._docWidthTwips - newSize.x;
			if (newPos.x < 0)
				newPos.x = 0;

			if (newPos.y + newSize.y > this._docHeightTwips)
				newPos.y = this._docHeightTwips - newSize.y;
			if (newPos.y < 0)
				newPos.y = 0;

			// For an image in Writer we need to send the size of the image not of the selection box.
			// So if the image has been rotated we need to compute its size starting from the size of the selection
			// rectangle and the rotation angle.
			var isSelectionWriterGraphic =
				this._graphicSelection.extraInfo ? this._graphicSelection.extraInfo.isWriterGraphic : false;
			if (isSelectionWriterGraphic) {
				if (this._isGraphicAngleDivisibleBy90()) {
					var k = this._graphicSelectionAngle / 9000;
					// if k is even we have nothing to do since the rotation is 0 or 180.
					// when k is odd we need to swap width and height.
					if (k % 2 !== 0) {
						var temp = newSize.x;
						newSize.x = newSize.y;
						newSize.y = temp;
					}
				}
				else {
					// let's say that the selection rectangle width is subdivided by a corner of the rotated image
					// in 2 segments of length s and t and the selection rectangle height is subdivided by a corner
					// of the rotated image in 2 segments of length u and v, so we get the following system of equations:
					// s + t = w, u + v = h,
					// l = u/t, l = s/v, where l = tan(rotation angle)
					var w = newSize.x;
					var h = newSize.y;
					var angle = Math.PI * this._graphicSelectionAngle / 18000;
					var c = Math.abs(Math.cos(angle));
					var s = Math.abs(Math.sin(angle));
					var l = s / c;
					var u = (l * w - l * l * h) / (1 - l * l);
					var v = h - u;
					newSize.x = Math.round(u / s);
					newSize.y = Math.round(v / c);
				}
			}

			// fill params for uno command
			var param = {
				TransformPosX: {
					type: 'long',
					value: newPos.x
				},
				TransformPosY: {
					type: 'long',
					value: newPos.y
				},
				TransformWidth: {
					type: 'long',
					value: newSize.x
				},
				TransformHeight: {
					type: 'long',
					value: newSize.y
				}
			};

			this._map.sendUnoCommand('.uno:TransformDialog ', param);

			if (isSelectionWriterGraphic) {
				param = {
					TransformPosX: {
						type: 'long',
						value: newPos.x
					},
					TransformPosY: {
						type: 'long',
						value: newPos.y
					}
				};
				this._map.sendUnoCommand('.uno:TransformDialog ', param);
			}

			this._graphicMarker.isDragged = false;
			this._graphicMarker.dragHorizDir = undefined;
			this._graphicMarker.dragVertDir = undefined;
		}
	},

	_onGraphicRotate: function (e) {
		if (e.type === 'rotatestart') {
			this._graphicMarker.isDragged = true;
		}
		else if (e.type === 'rotateend') {
			var center = this._graphicSelectionTwips.getCenter();
			var param = {
				TransformRotationDeltaAngle: {
					type: 'long',
					value: (((e.rotation * 18000) / Math.PI))
				},
				TransformRotationX: {
					type: 'long',
					value: center.x
				},
				TransformRotationY: {
					type: 'long',
					value: center.y
				}
			};
			this._map.sendUnoCommand('.uno:TransformDialog ', param);
			this._graphicMarker.isDragged = false;
		}
	},

	// Update dragged text selection.
	_onSelectionHandleDrag: function (e) {
		if (e.type === 'drag') {
			e.target.isDragged = true;

			// This is rather hacky, but it seems to be the only way to make the
			// marker follow the mouse cursor if the document is autoscrolled under
			// us. (This can happen when we're changing the selection if the cursor
			// moves somewhere that is considered off screen.)

			// Onscreen position of the cursor, i.e. relative to the browser window
			var boundingrect = e.target._icon.getBoundingClientRect();
			var cursorPos = L.point(boundingrect.left, boundingrect.top);

			var expectedPos = L.point(e.originalEvent.pageX, e.originalEvent.pageY).subtract(e.target.dragging._draggable.startOffset);

			// Dragging the selection handles vertically more than one line on a touch
			// device is more or less impossible without this hack.
			if (!(typeof e.originalEvent.type === 'string' && e.originalEvent.type === 'touchmove')) {
				// If the map has been scrolled, but the cursor hasn't been updated yet, then
				// the current mouse position differs.
				if (!expectedPos.equals(cursorPos)) {
					var correction = expectedPos.subtract(cursorPos);

					e.target.dragging._draggable._startPoint = e.target.dragging._draggable._startPoint.add(correction);
					e.target.dragging._draggable._startPos = e.target.dragging._draggable._startPos.add(correction);
					e.target.dragging._draggable._newPos = e.target.dragging._draggable._newPos.add(correction);

					e.target.dragging._draggable._updatePosition();
				}
			}
			var containerPos = new L.Point(expectedPos.x - this._map._container.getBoundingClientRect().left,
				expectedPos.y - this._map._container.getBoundingClientRect().top);

			containerPos = containerPos.add(e.target.dragging._draggable.startOffset);
			this._map.fire('handleautoscroll', {pos: containerPos, map: this._map});
		}
		if (e.type === 'dragend') {
			e.target.isDragged = false;
			this._map.focus();
			this._map.fire('scrollvelocity', {vx: 0, vy: 0});
		}

		var aPos = this._latLngToTwips(e.target.getLatLng());

		if (this._selectionHandles.start === e.target) {
			this._postSelectTextEvent('start', aPos.x, aPos.y);
		}
		else if (this._selectionHandles.end === e.target) {
			this._postSelectTextEvent('end', aPos.x, aPos.y);
		}
	},

	// Update group layer selection handler.
	_onUpdateGraphicSelection: function () {
		if (this._graphicSelection && !this._isEmptyRectangle(this._graphicSelection)) {
			if (this._graphicMarker) {
				this._graphicMarker.removeEventParent(this._map);
				this._graphicMarker.off('scalestart scaleend', this._onGraphicEdit, this);
				this._graphicMarker.off('rotatestart rotateend', this._onGraphicRotate, this);
				if (this._graphicMarker.dragging)
					this._graphicMarker.dragging.disable();
				this._graphicMarker.transform.disable();
				this._map.removeLayer(this._graphicMarker);
			}

			if (this._map._permission !== 'edit') {
				return;
			}

			var extraInfo = this._graphicSelection.extraInfo;
			this._graphicMarker = L.svgGroup(this._graphicSelection, {
				draggable: extraInfo.isDraggable,
				dragConstraint: extraInfo.dragInfo,
				transform: true,
				stroke: false,
				fillOpacity: 0,
				fill: true
			});

			if (!this._graphicMarker) {
				this._map.fire('error', {msg: 'Graphic marker initialization', cmd: 'marker', kind: 'failed', id: 1});
				return;
			}

			this._graphicMarker.on('graphicmovestart graphicmoveend', this._onGraphicMove, this);
			this._graphicMarker.on('scalestart scaleend', this._onGraphicEdit, this);
			this._graphicMarker.on('rotatestart rotateend', this._onGraphicRotate, this);
			this._map.addLayer(this._graphicMarker);
			if (extraInfo.isDraggable)
				this._graphicMarker.dragging.enable();
			this._graphicMarker.transform.enable({
				scaling: extraInfo.isResizable,
				rotation: extraInfo.isRotatable,
				uniformScaling: !this._isGraphicAngleDivisibleBy90()});
			if (extraInfo.dragInfo && extraInfo.dragInfo.svg) {
				this._graphicMarker.removeEmbeddedSVG();
				this._graphicMarker.addEmbeddedSVG(extraInfo.dragInfo.svg);
			}
		}
		else if (this._graphicMarker) {
			this._graphicMarker.off('graphicmovestart graphicmoveend', this._onGraphicMove, this);
			this._graphicMarker.off('scalestart scaleend', this._onGraphicEdit, this);
			this._graphicMarker.off('rotatestart rotateend', this._onGraphicRotate, this);
			if (this._graphicMarker.dragging)
				this._graphicMarker.dragging.disable();
			this._graphicMarker.transform.disable();
			this._map.removeLayer(this._graphicMarker);
			this._graphicMarker.isDragged = false;
		}
		this._updateCursorAndOverlay();
	},

	_onUpdateCellCursor: function (horizontalDirection, verticalDirection, onPgUpDn) {
		if (this._cellCursor && !this._isEmptyRectangle(this._cellCursor)) {
			var mapBounds = this._map.getBounds();
			if (!mapBounds.contains(this._cellCursor) && !this._cellCursorXY.equals(this._prevCellCursorXY)) {
				var scrollX = 0, scrollY = 0;
				if (onPgUpDn) {
					var mapHalfHeight = (mapBounds.getNorth() - mapBounds.getSouth()) / 2;
					var cellCursorOnPgUpDn = (this._cellCursorOnPgUp) ? this._cellCursorOnPgUp : this._cellCursorOnPgDn;

					scrollY = this._cellCursor.getNorth() - cellCursorOnPgUpDn.getNorth();
					if (this._cellCursor.getNorth() > mapBounds.getNorth() + scrollY) {
						scrollY = (this._cellCursor.getNorth() - mapBounds.getNorth()) + mapHalfHeight;
					} else if (this._cellCursor.getSouth() < mapBounds.getSouth() + scrollY) {
						scrollY = (this._cellCursor.getNorth() - mapBounds.getNorth()) + mapHalfHeight;
					}
				}
				else if (horizontalDirection !== 0 || verticalDirection != 0) {
					var spacingX = Math.abs(this._cellCursor.getEast() - this._cellCursor.getWest()) / 4.0;
					var spacingY = Math.abs((this._cellCursor.getSouth() - this._cellCursor.getNorth())) / 4.0;

					if (this._cellCursor.getWest() < mapBounds.getWest()) {
						scrollX = this._cellCursor.getWest() - mapBounds.getWest() - spacingX;
					} else if (this._cellCursor.getEast() > mapBounds.getEast()) {
						scrollX = this._cellCursor.getEast() - mapBounds.getEast() + spacingX;
					}
					if (this._cellCursor.getNorth() > mapBounds.getNorth()) {
						scrollY = this._cellCursor.getNorth() - mapBounds.getNorth() + spacingY;
					} else if (this._cellCursor.getSouth() < mapBounds.getSouth()) {
						scrollY = this._cellCursor.getSouth() - mapBounds.getSouth() - spacingY;
					}
				}
				if (scrollX !== 0 || scrollY !== 0) {
					var newCenter = mapBounds.getCenter();
					newCenter.lng += scrollX;
					newCenter.lat += scrollY;
					var center = this._map.project(newCenter);
					center = center.subtract(this._map.getSize().divideBy(2));
					center.x = Math.round(center.x < 0 ? 0 : center.x);
					center.y = Math.round(center.y < 0 ? 0 : center.y);
					this._map.fire('scrollto', {x: center.x, y: center.y, calledFromInvalidateCursorMsg: true});
				}
				this._prevCellCursorXY = this._cellCursorXY;
			}

			if (onPgUpDn) {
				this._cellCursorOnPgUp = null;
				this._cellCursorOnPgDn = null;
			}

			if (this._cellCursorMarker) {
				this._map.removeLayer(this._cellCursorMarker);
				this._map.removeLayer(this._dropDownButton);
			}
			this._cellCursorMarker = L.rectangle(this._cellCursor, {
				pointerEvents: 'none',
				fill: false,
				color: '#000000',
				weight: 2});
			if (!this._cellCursorMarker) {
				this._map.fire('error', {msg: 'Cell Cursor marker initialization', cmd: 'cellCursor', kind: 'failed', id: 1});
				return;
			}
			this._map.addLayer(this._cellCursorMarker);

			this._addDropDownMarker();
		}
		else if (this._cellCursorMarker) {
			this._map.removeLayer(this._cellCursorMarker);
		}
		this._removeDropDownMarker();
	},

	_onValidityListButtonMsg: function(textMsg) {
		var strXY = textMsg.match(/\d+/g);
		var validatedCell = new L.Point(parseInt(strXY[0]), parseInt(strXY[1]));
		var show = parseInt(strXY[2]) === 1;
		if (show) {
			if (this._validatedCellXY && !this._validatedCellXY.equals(validatedCell)) {
				this._validatedCellXY = null;
				this._removeDropDownMarker();
			}
			this._validatedCellXY = validatedCell;
			this._addDropDownMarker();
		}
		else if (this._validatedCellXY && this._validatedCellXY.equals(validatedCell)) {
			this._validatedCellXY = null;
			this._removeDropDownMarker();
		}
	},

	_addDropDownMarker: function () {
		if (this._validatedCellXY && this._cellCursorXY && this._validatedCellXY.equals(this._cellCursorXY)) {
			var pos = this._cellCursor.getNorthEast();
			var cellCursorHeightPx = this._twipsToPixels(this._cellCursorTwips.getSize()).y;
			var dropDownMarker = this._getDropDownMarker(cellCursorHeightPx);
			dropDownMarker.setLatLng(pos);
			this._map.addLayer(dropDownMarker);
		}
	},

	_removeDropDownMarker: function () {
		if (!this._validatedCellXY && this._dropDownButton)
			this._map.removeLayer(this._dropDownButton);
	},

	_getDropDownMarker: function (height) {
		if (height) {
			var maxHeight = 27; // it matches the max height of the same control in core
			var topMargin = 0;
			if (height > maxHeight) {
				topMargin = height - maxHeight;
				height = maxHeight;
			}
			var icon =  L.divIcon({
				className: 'spreadsheet-drop-down-marker',
				iconSize: [undefined, height],
				iconAnchor: [0, -topMargin]
			});
			this._dropDownButton.setIcon(icon);
		}
		return this._dropDownButton;
	},

	// Update text selection handlers.
	_onUpdateTextSelection: function () {
		var startMarker, endMarker;
		for (var key in this._selectionHandles) {
			if (key === 'start') {
				startMarker = this._selectionHandles[key];
			}
			else if (key === 'end') {
				endMarker = this._selectionHandles[key];
			}
		}

		if (this._selections.getLayers().length !== 0 || startMarker.isDragged || endMarker.isDragged) {
			if (!startMarker || !endMarker ||
					this._isEmptyRectangle(this._textSelectionStart) ||
					this._isEmptyRectangle(this._textSelectionEnd)) {
				return;
			}

			var startPos = this._map.project(this._textSelectionStart.getSouthWest());
			var endPos = this._map.project(this._textSelectionEnd.getSouthWest());
			var startMarkerPos = this._map.project(startMarker.getLatLng());
			if (startMarkerPos.distanceTo(endPos) < startMarkerPos.distanceTo(startPos) && startMarker._icon && endMarker._icon) {
				// if the start marker is actually closer to the end of the selection
				// reverse icons and markers
				L.DomUtil.removeClass(startMarker._icon, 'leaflet-selection-marker-start');
				L.DomUtil.removeClass(endMarker._icon, 'leaflet-selection-marker-end');
				L.DomUtil.addClass(startMarker._icon, 'leaflet-selection-marker-end');
				L.DomUtil.addClass(endMarker._icon, 'leaflet-selection-marker-start');
				var tmp = startMarker;
				startMarker = endMarker;
				endMarker = tmp;
			}
			else if (startMarker._icon && endMarker._icon) {
				// normal markers and normal icons
				L.DomUtil.removeClass(startMarker._icon, 'leaflet-selection-marker-end');
				L.DomUtil.removeClass(endMarker._icon, 'leaflet-selection-marker-start');
				L.DomUtil.addClass(startMarker._icon, 'leaflet-selection-marker-start');
				L.DomUtil.addClass(endMarker._icon, 'leaflet-selection-marker-end');
			}

			if (!startMarker.isDragged) {
				var pos = this._map.project(this._textSelectionStart.getSouthWest());
				pos = pos.subtract(new L.Point(0, 2));
				pos = this._map.unproject(pos);
				startMarker.setLatLng(pos);
				this._map.addLayer(startMarker);
			}

			if (!endMarker.isDragged) {
				pos = this._map.project(this._textSelectionEnd.getSouthEast());
				pos = pos.subtract(new L.Point(0, 2));
				pos = this._map.unproject(pos);
				endMarker.setLatLng(pos);
				this._map.addLayer(endMarker);
			}
		}
		else {
			this._textSelectionStart = null;
			this._textSelectionEnd = null;
			for (key in this._selectionHandles) {
				this._map.removeLayer(this._selectionHandles[key]);
				this._selectionHandles[key].isDragged = false;
			}
		}
	},

	_onCopy: function (e) {
		e = e.originalEvent;
		e.preventDefault();
		if (this._map._clipboardContainer.getValue() !== '') {
			L.Compatibility.clipboardSet(e, this._map._clipboardContainer.getValue());
			this._map._clipboardContainer.setValue('');
		} else if (this._selectionTextContent) {
			L.Compatibility.clipboardSet(e, this._selectionTextContent);

			// remember the copied text, for rich copy/paste inside a document
			this._selectionTextHash = this._selectionTextContent;
		}

		this._map._socket.sendMessage('uno .uno:Copy');
	},

	_onCut: function (e) {
		e = e.originalEvent;
		e.preventDefault();
		if (this._map._clipboardContainer.getValue() !== '') {
			L.Compatibility.clipboardSet(e, this._map._clipboardContainer.getValue());
			this._map._clipboardContainer.setValue('');
		} else if (this._selectionTextContent) {
			L.Compatibility.clipboardSet(e, this._selectionTextContent);

			// remember the copied text, for rich copy/paste inside a document
			this._selectionTextHash = this._selectionTextContent;
		}

		this._map._socket.sendMessage('uno .uno:Cut');
	},

	_onPaste: function (e) {
		e = e.originalEvent;
		e.preventDefault();

		if (e.clipboardData) { // Standard
			this._dataTransferToDocument(e.clipboardData, /* preferInternal = */ true);
		}
		else if (window.clipboardData) { // IE 11
			this._dataTransferToDocument(window.clipboardData, /* preferInternal = */ true);
		}
	},

	_onDragOver: function (e) {
		e = e.originalEvent;
		e.preventDefault();
	},

	_onDrop: function (e) {
		// Move the cursor, so that the insert position is as close to the drop coordinates as possible.
		var latlng = e.latlng;
		var docLayer = this._map._docLayer;
		var mousePos = docLayer._latLngToTwips(latlng);
		var count = 1;
		var buttons = 1;
		var modifier = this._map.keyboard.modifier;
		this._postMouseEvent('buttondown', mousePos.x, mousePos.y, count, buttons, modifier);
		this._postMouseEvent('buttonup', mousePos.x, mousePos.y, count, buttons, modifier);

		e = e.originalEvent;
		e.preventDefault();

		this._dataTransferToDocument(e.dataTransfer, /* preferInternal = */ false);
	},

	_dataTransferToDocument: function (dataTransfer, preferInternal) {
		// for the paste, we might prefer the internal LOK's copy/paste
		if (preferInternal === true) {
			var pasteString = dataTransfer.getData('text/plain');
			if (!pasteString) {
				pasteString = dataTransfer.getData('Text'); // IE 11
			}

			if (pasteString && pasteString === this._selectionTextHash) {
				this._map._socket.sendMessage('uno .uno:Paste');
				return;
			}
		}

		var types = dataTransfer.types;

		// first try to transfer images
		// TODO if we have both Files and a normal mimetype, should we handle
		// both, or prefer one or the other?
		for (var t = 0; t < types.length; ++t) {
			if (types[t] === 'Files') {
				var files = dataTransfer.files;
				for (var f = 0; f < files.length; ++f) {
					var file = files[f];
					if (file.type.match(/image.*/)) {
						var reader = new FileReader();
						reader.onload = this._onFileLoadFunc(file);
						reader.readAsArrayBuffer(file);
					}
				}
			}
		}

		// now try various mime types
		var mimeTypes;
		if (this._docType === 'spreadsheet') {
			// FIXME apparently we cannot paste the text/html or text/rtf as
			// produced by LibreOffice in Calc from some reason
			mimeTypes = [
				['text/plain', 'text/plain;charset=utf-8'],
				['Text', 'text/plain;charset=utf-8']
			];
		} else if (navigator.platform.startsWith('Mac')) {
			// Safari provides RTF clipboard content which doesn't contain the
			// images.  We do not know where the content comes from, so let's
			// always prefer HTML over RTF on Mac.
			mimeTypes = [
				['text/html', 'text/html'],
				['text/rtf', 'text/rtf'],
				['text/plain', 'text/plain;charset=utf-8'],
				['Text', 'text/plain;charset=utf-8']
			];
		} else {
			mimeTypes = [
				['text/rtf', 'text/rtf'],
				['text/html', 'text/html'],
				['text/plain', 'text/plain;charset=utf-8'],
				['Text', 'text/plain;charset=utf-8']
			];
		}

		for (var i = 0; i < mimeTypes.length; ++i) {
			for (t = 0; t < types.length; ++t) {
				if (mimeTypes[i][0] === types[t]) {
					var blob = new Blob(['paste mimetype=' + mimeTypes[i][1] + '\n', dataTransfer.getData(types[t])]);
					this._map._socket.sendMessage(blob);
					return;
				}
			}
		}
	},

	_onFileLoadFunc: function(file) {
		var socket = this._map._socket;
		return function(e) {
			var blob = new Blob(['paste mimetype=' + file.type + '\n', e.target.result]);
			socket.sendMessage(blob);
		};
	},

	_onDragStart: function () {
		this._map.on('moveend', this._updateScrollOffset, this);
	},

	_onRequestLOKSession: function () {
		this._map._socket.sendMessage('requestloksession');
	},

	_fitWidthZoom: function (e, maxZoom) {
		if (isNaN(this._docWidthTwips)) { return; }
		var oldSize = e ? e.oldSize : this._map.getSize();
		var newSize = e ? e.newSize : this._map.getSize();
		if (newSize.x - oldSize.x === 0) { return; }

		var widthTwips = newSize.x * this._map.options.tileWidthTwips / this._tileSize;
		var ratio = widthTwips / this._docWidthTwips;

		maxZoom = maxZoom ? maxZoom : this._map.options.zoom;
		// 'fit width zoom' has no use in spreadsheets, ignore it there
		if (this._docType !== 'spreadsheet') {
			var crsScale = this._map.options.crs.scale(1);
			var zoom = 10 + Math.floor(Math.log(ratio) / Math.log(crsScale));

			zoom = Math.min(maxZoom, Math.max(1, zoom));
			if (this._docWidthTwips * this._map.getZoomScale(zoom, 10) < widthTwips) {
				this._map.setZoom(zoom, {animate: false});
			}
		}
	},

	_onCurrentPageUpdate: function () {
		var mapCenter = this._map.project(this._map.getCenter());
		if (!this._partPageRectanglesPixels || !(this._currentPage >= 0) || this._currentPage >= this._partPageRectanglesPixels.length ||
				this._partPageRectanglesPixels[this._currentPage].contains(mapCenter)) {
			// page number has not changed
			return;
		}
		for (var i = 0; i < this._partPageRectanglesPixels.length; i++) {
			if (this._partPageRectanglesPixels[i].contains(mapCenter)) {
				this._currentPage = i;
				this._map.fire('pagenumberchanged', {
					currentPage: this._currentPage,
					pages: this._pages,
					docType: this._docType
				});
				return;
			}
		}
	},

	// Cells can change position during changes of zoom level in calc
	// hence we need to request an updated cell cursor position for this level.
	_onCellCursorShift: function (force) {
		if (this._cellCursorMarker || force) {
			this._map._socket.sendMessage('commandvalues command=.uno:CellCursor'
			                     + '?outputHeight=' + this._tileWidthPx
			                     + '&outputWidth=' + this._tileHeightPx
			                     + '&tileHeight=' + this._tileWidthTwips
			                     + '&tileWidth=' + this._tileHeightTwips);
		}
	},

	_invalidatePreviews: function () {
		if (this._map._docPreviews && this._previewInvalidations.length > 0) {
			var toInvalidate = {};
			for (var i = 0; i < this._previewInvalidations.length; i++) {
				var invalidBounds = this._previewInvalidations[i];
				for (var key in this._map._docPreviews) {
					// find preview tiles that need to be updated and add them in a set
					var preview = this._map._docPreviews[key];
					if (preview.index >= 0 && this._docType === 'text') {
						// we have a preview for a page
						if (preview.invalid || (this._partPageRectanglesTwips.length > preview.index &&
								invalidBounds.intersects(this._partPageRectanglesTwips[preview.index]))) {
							toInvalidate[key] = true;
						}
					}
					else if (preview.index >= 0) {
						// we have a preview for a part
						if (preview.invalid || preview.index === this._selectedPart ||
								(preview.index === this._prevSelectedPart && this._prevSelectedPartNeedsUpdate)) {
							// if the current part needs its preview updated OR
							// the part has been changed and we need to update the previous part preview
							if (preview.index === this._prevSelectedPart) {
								this._prevSelectedPartNeedsUpdate = false;
							}
							toInvalidate[key] = true;
						}
					}
					else {
						// we have a custom preview
						var bounds = new L.Bounds(
								new L.Point(preview.tilePosX, preview.tilePosY),
								new L.Point(preview.tilePosX + preview.tileWidth, preview.tilePosY + preview.tileHeight));
						if (preview.invalid || (preview.part === this._selectedPart ||
								(preview.part === this._prevSelectedPart && this._prevSelectedPartNeedsUpdate)) &&
								invalidBounds.intersects(bounds)) {
							// if the current part needs its preview updated OR
							// the part has been changed and we need to update the previous part preview
							if (preview.index === this._prevSelectedPart) {
								this._prevSelectedPartNeedsUpdate = false;
							}
							toInvalidate[key] = true;
						}

					}
				}

			}

			for (key in toInvalidate) {
				// update invalid preview tiles
				preview = this._map._docPreviews[key];
				if (preview.autoUpdate) {
					if (preview.index >= 0) {
						this._map.getPreview(preview.id, preview.index, preview.maxWidth, preview.maxHeight, {autoUpdate: true, broadcast: true});
					}
					else {
						this._map.getCustomPreview(preview.id, preview.part, preview.width, preview.height, preview.tilePosX,
								preview.tilePosY, preview.tileWidth, preview.tileHeight, {autoUpdate: true});
					}
				}
			}
		}
		this._previewInvalidations = [];
	},

	_debugGetTimeArray: function() {
		return {count: 0, ms: 0, best: Number.MAX_SAFE_INTEGER, worst: 0, date: 0};
	},

	_debugShowTileData: function() {
		this._debugData['loadCount'].setPrefix('Total of requested tiles: ' +
				this._debugInvalidateCount + ', received: ' + this._debugLoadCount +
				', cancelled: ' + this._debugCancelledTiles);
	},

	_debugInit: function() {
		this._debugTiles = {};
		this._debugInvalidBounds = {};
		this._debugInvalidBoundsMessage = {};
		this._debugTimeout();
		this._debugId = 0;
		this._debugCancelledTiles = 0;
		this._debugLoadCount = 0;
		this._debugInvalidateCount = 0;
		this._debugRenderCount = 0;
		if (!this._debugData) {
			this._debugData = {};
			this._debugDataNames = ['tileCombine', 'fromKeyInputToInvalidate', 'ping', 'loadCount'];
			for (var i = 0; i < this._debugDataNames.length; i++) {
				this._debugData[this._debugDataNames[i]] = L.control.attribution({prefix: '', position: 'bottomleft'}).addTo(this._map);
			}
			this._debugInfo = new L.LayerGroup();
			this._debugInfo2 = new L.LayerGroup();
			this._debugAlwaysActive = new L.LayerGroup();
			this._debugTyper = new L.LayerGroup();
			this._map.addLayer(this._debugInfo);
			this._map.addLayer(this._debugInfo2);
			var overlayMaps = {
				'Tile overlays': this._debugInfo,
				'Screen overlays': this._debugInfo2,
				'Always active': this._debugAlwaysActive,
				'Typing': this._debugTyper
			};
			L.control.layers({}, overlayMaps, {collapsed: false}).addTo(this._map);

			this._map.on('layeradd', function(e) {
				if (e.layer === this._debugAlwaysActive) {
					this._map._debugAlwaysActive = true;
				} else if (e.layer === this._debugTyper) {
					this._debugTypeTimeout();
				} else if (e.layer === this._debugInfo2) {
					for (var i = 0; i < this._debugDataNames.length; i++) {
						this._debugData[this._debugDataNames[i]].addTo(this._map);
					}
				}
			}, this);
			this._map.on('layerremove', function(e) {
				if (e.layer === this._debugAlwaysActive) {
					this._map._debugAlwaysActive = false;
				} else if (e.layer === this._debugTyper) {
					clearTimeout(this._debugTypeTimeoutId);
				} else if (e.layer === this._debugInfo2) {
					for (var i in this._debugData) {
						this._debugData[i].remove();
					}
				}
			}, this);
		}
		this._debugTimePING = this._debugGetTimeArray();
		this._debugPINGQueue = [];
		this._debugTimeKeypress = this._debugGetTimeArray();
		this._debugKeypressQueue = [];
		this._debugLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
		this._debugLorem += ' ' + this._debugLorem + '\n';
		this._debugLoremPos = 0;
	},

	_debugSetTimes: function(times, value) {
		if (value < times.best) {
			times.best = value;
		}
		if (value > times.worst) {
			times.worst = value;
		}
		times.ms += value;
		times.count++;
		return 'best: ' + times.best + ' ms, avg: ' + Math.round(times.ms/times.count) + ' ms, worst: ' + times.worst + ' ms, last: ' + value + ' ms';
	},

	_debugAddInvalidationRectangle: function(topLeftTwips, bottomRightTwips, command) {
		var now = +new Date();

		var invalidBoundCoords = new L.LatLngBounds(this._twipsToLatLng(topLeftTwips, this._tileZoom),
				this._twipsToLatLng(bottomRightTwips, this._tileZoom));
		var rect = L.rectangle(invalidBoundCoords, {color: 'red', weight: 1, opacity: 1, fillOpacity: 0.4, pointerEvents: 'none'});
		this._debugInvalidBounds[this._debugId] = rect;
		this._debugInvalidBoundsMessage[this._debugId] = command;
		this._debugId++;
		this._debugInfo.addLayer(rect);

		var oldestKeypress = this._debugKeypressQueue.shift();
		if (oldestKeypress) {
			var timeText = this._debugSetTimes(this._debugTimeKeypress, now - oldestKeypress);
			this._debugData['fromKeyInputToInvalidate'].setPrefix('Elapsed time between key input and next invalidate: ' + timeText);
		}

		// query server ping time after invalidation messages
		// pings will be paired with the pong messages
		this._debugPINGQueue.push(+new Date());
		this._map._socket.sendMessage('ping');
	},

	_debugAddInvalidationData: function(tile) {
		if (tile._debugTile) {
			tile._debugTile.setStyle({fillOpacity: 0.5, fillColor: 'blue'});
			tile._debugTime.date = +new Date();
			tile._debugTile.date = +new Date();
			tile._debugInvalidateCount++;
			this._debugInvalidateCount++;
		}
	},

	_debugAddInvalidationMessage: function(message) {
		this._debugInvalidBoundsMessage[this._debugId - 1] = message;
		var messages = '';
		for (var i = this._debugId - 1; i > this._debugId - 6; i--) {
			if (i >= 0 && this._debugInvalidBoundsMessage[i]) {
				messages += '' + i + ': ' + this._debugInvalidBoundsMessage[i] + ' <br>';
			}
		}
		this._debugData['tileCombine'].setPrefix(messages);
		this._debugShowTileData();
	},

	_debugTimeout: function() {
		if (this._debug) {
			for (var key in this._debugInvalidBounds) {
				var rect = this._debugInvalidBounds[key];
				var opac = rect.options.fillOpacity;
				if (opac <= 0.04) {
					if (key < this._debugId - 5) {
						this._debugInfo.removeLayer(rect);
						delete this._debugInvalidBounds[key];
						delete this._debugInvalidBoundsMessage[key];
					} else {
						rect.setStyle({fillOpacity: 0, opacity: 1 - (this._debugId - key) / 7});
					}
				} else {
					rect.setStyle({fillOpacity: opac - 0.04});
				}
			}
			for (key in this._debugTiles) {
				rect = this._debugTiles[key];
				var col = rect.options.fillColor;
				opac = rect.options.fillOpacity;
				if (col === 'blue' && opac >= 0.04 && rect.date + 1000 < +new Date()) {
					rect.setStyle({fillOpacity: opac - 0.04});
				}
			}
			this._debugTimeoutId = setTimeout(L.bind(this._debugTimeout, this), 50);
		}
	},

	_debugTypeTimeout: function() {
		var letter = this._debugLorem.charCodeAt(this._debugLoremPos % this._debugLorem.length);
		this._debugKeypressQueue.push(+new Date());
		if (letter === '\n'.charCodeAt(0)) {
			this._postKeyboardEvent('input', 0, 1280);
		} else {
			this._postKeyboardEvent('input', this._debugLorem.charCodeAt(this._debugLoremPos % this._debugLorem.length), 0);
		}
		this._debugLoremPos++;
		this._debugTypeTimeoutId = setTimeout(L.bind(this._debugTypeTimeout, this), 50);
	}

});

L.tileLayer = function (url, options) {
	return new L.TileLayer(url, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.TileLayer.WMS is used for WMS tile layers.
 */

L.TileLayer.WMS = L.TileLayer.extend({

	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',
		version: '1.1.1',
		layers: '',
		styles: '',
		format: 'image/jpeg',
		transparent: false
	},

	options: {
		crs: null,
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = L.extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = L.setOptions(this, options);

		wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && L.Browser.retina ? 2 : 1);

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		L.TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToBounds(coords),
		    nw = this._crs.project(tileBounds.getNorthWest()),
		    se = this._crs.project(tileBounds.getSouthEast()),

		    bbox = (this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
			    [se.y, nw.x, nw.y, se.x] :
			    [nw.x, se.y, se.x, nw.y]).join(','),

		    url = L.TileLayer.prototype.getTileUrl.call(this, coords);

		return url +
			L.Util.getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	setParams: function (params, noRedraw) {

		L.extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});

L.tileLayer.wms = function (url, options) {
	return new L.TileLayer.WMS(url, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * Writer tile layer is used to display a text document
 */

/* global $ _ w2ui _UNO */
L.WriterTileLayer = L.TileLayer.extend({

	newAnnotation: function (comment) {
		if (!comment.anchorPos && this._isCursorVisible) {
			comment.anchorPos = L.bounds(this._latLngToTwips(this._visibleCursor.getSouthWest()),
				this._latLngToTwips(this._visibleCursor.getNorthEast()));
			comment.anchorPix = this._twipsToPixels(comment.anchorPos.min);
		}
		if (comment.anchorPos) {
			this._annotations.modify(this._annotations.add(comment));
		}
	},

	clearAnnotations: function() {
		if (this._annotations) {
			this._annotations.clear();
			this._annotations.clearChanges();
		}
	},

	onRemove: function (map) {
		map.off('updatemaxbounds', this._onUpdateMaxBounds, this);
	},

	beforeAdd: function (map) {
		if (L.Browser.mobile) {
			map.on('doclayerinit', this.onMobileInit, this);
		}
	},

	onAdd: function (map) {
		L.TileLayer.prototype.onAdd.call(this, map);
		this._annotations = L.annotationManager(map);
		map.on('updatemaxbounds', this._onUpdateMaxBounds, this);
	},

	onMobileInit: function () {
		var map = this._map;
		var toolItems = [
			{type: 'button',  id: 'bold',  img: 'bold', hint: _UNO('.uno:Bold'), uno: 'Bold'},
			{type: 'button',  id: 'italic', img: 'italic', hint: _UNO('.uno:Italic'), uno: 'Italic'},
			{type: 'button',  id: 'underline',  img: 'underline', hint: _UNO('.uno:Underline'), uno: 'Underline'},
			{type: 'button',  id: 'strikeout', img: 'strikeout', hint: _UNO('.uno:Strikeout'), uno: 'Strikeout'},
			{type: 'break'},
			{type: 'text-color',  id: 'fontcolor', img: 'textcolor', hint: _UNO('.uno:FontColor')},
			{type: 'color',  id: 'backcolor', img: 'backcolor', hint: _UNO('.uno:BackgroundColor')},
			{type: 'button',  id: 'leftpara',  img: 'alignleft', hint: _UNO('.uno:LeftPara', '', true), uno: 'LeftPara', unosheet: 'AlignLeft', disabled: true},
			{type: 'button',  id: 'centerpara',  img: 'alignhorizontal', hint: _UNO('.uno:CenterPara', '', true), uno: 'CenterPara', unosheet: 'AlignHorizontalCenter', disabled: true},
			{type: 'button',  id: 'rightpara',  img: 'alignright', hint: _UNO('.uno:RightPara', '', true), uno: 'RightPara', unosheet: 'AlignRight', disabled: true},
			{type: 'button',  id: 'justifypara',  img: 'alignblock', hint: _UNO('.uno:JustifyPara', '', true), uno: 'JustifyPara', unosheet: '', disabled: true},
			{type: 'break', id: 'breakpara'},
			{type: 'menu',  id: 'linespacing',  img: 'linespacing', hint: _UNO('.uno:FormatSpacingMenu'),
				items: [
					{id: 'spacepara1', text: _UNO('.uno:SpacePara1'), uno: 'SpacePara1'},
					{id: 'spacepara15', text: _UNO('.uno:SpacePara15'), uno: 'SpacePara15'},
					{id: 'spacepara2', text: _UNO('.uno:SpacePara2'), uno: 'SpacePara2'},
					{type: 'break'},
					{id: 'paraspaceincrease', text: _UNO('.uno:ParaspaceIncrease'), uno: 'ParaspaceIncrease'},
					{id: 'paraspacedecrease', text: _UNO('.uno:ParaspaceDecrease'), uno: 'ParaspaceDecrease'}
				]},
			{type: 'break', id: 'breakspacing'},
			{type: 'button',  id: 'defaultnumbering',  img: 'numbering', hint: _UNO('.uno:DefaultNumbering', '', true),uno: 'DefaultNumbering', disabled: true},
			{type: 'button',  id: 'defaultbullet',  img: 'bullet', hint: _UNO('.uno:DefaultBullet', '', true), uno: 'DefaultBullet', disabled: true},
			{type: 'break', id: 'breakbullet', hidden: true},
			{type: 'button',  id: 'incrementindent',  img: 'incrementindent', hint: _UNO('.uno:IncrementIndent', '', true), uno: 'IncrementIndent', disabled: true},
			{type: 'button',  id: 'decrementindent',  img: 'decrementindent', hint: _UNO('.uno:DecrementIndent', '', true), uno: 'DecrementIndent', disabled: true},
			{type: 'break', id: 'breakindent'},
			{type: 'button',  id: 'insertannotation', img: 'annotation', hint: _UNO('.uno:InsertAnnotation', '', true)},
			{type: 'drop',  id: 'inserttable',  img: 'inserttable', hint: _('Insert table'), hidden: true, overlay: {onShow: window.insertTable},
			 html: '<div id="inserttable-wrapper"><div id="inserttable-popup" class="inserttable-pop ui-widget ui-corner-all"><div class="inserttable-grid"></div><div id="inserttable-status" class="loleaflet-font" style="padding: 5px;"><br/></div></div></div>'},
			{type: 'button',  id: 'insertgraphic',  img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true)},
			{type: 'button',  id: 'insertobjectchart',  img: 'insertobjectchart', hint: _UNO('.uno:InsertObjectChart', '', true), uno: 'InsertObjectChart'},
			{type: 'drop',  id: 'insertshapes',  img: 'basicshapes_ellipse', hint: _('Insert shapes'), overlay: {onShow: window.insertShapes},
				html: '<div id="insertshape-wrapper"><div id="insertshape-popup" class="insertshape-pop ui-widget ui-corner-all"><div class="insertshape-grid"></div></div></div>'},

			{type: 'button',  id: 'link',  img: 'link', hint: _UNO('.uno:HyperlinkDialog'), uno: 'HyperlinkDialog', disabled: true},
			{type: 'button',  id: 'insertsymbol', img: 'insertsymbol', hint: _UNO('.uno:InsertSymbol', '', true), uno: 'InsertSymbol'},
			{type: 'spacer'}
		];

		var toolbar = $('#toolbar-up');
		toolbar.w2toolbar({
			name: 'actionbar',
			tooltip: 'bottom',
			items: [
				{type: 'button',  id: 'closemobile',  img: 'closemobile'},
				{type: 'spacer'},
				{type: 'button',  id: 'prev', img: 'prev', hint: _UNO('.uno:PageUp', 'text')},
				{type: 'button',  id: 'next', img: 'next', hint: _UNO('.uno:PageDown', 'text')},
				{type: 'button',  id: 'undo',  img: 'undo', hint: _UNO('.uno:Undo'), uno: 'Undo', disabled: true},
				{type: 'button',  id: 'redo',  img: 'redo', hint: _UNO('.uno:Redo'), uno: 'Redo', disabled: true},
				{type: 'button',  id: 'fullscreen', img: 'fullscreen', hint: _UNO('.uno:FullScreen', 'text')},
				{type: 'drop', id: 'userlist', img: 'users', html: '<div id="userlist_container"><table id="userlist_table"><tbody></tbody></table>' +
					'<hr><table class="loleaflet-font" id="editor-btn">' +
					'<tr>' +
					'<td><input type="checkbox" name="alwaysFollow" id="follow-checkbox" onclick="editorUpdate(event)"></td>' +
					'<td>' + _('Always follow the editor') + '</td>' +
					'</tr>' +
					'</table>' +
					'<p id="currently-msg">' + _('Current') + ' - <b><span id="current-editor"></span></b></p>' +
					'</div>'
				},
			],
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function() {
				var showUserList = map['wopi'].HideUserList !== null &&
									map['wopi'].HideUserList !== undefined &&
									$.inArray('true', map['wopi'].HideUserList) < 0 &&
									((window.mode.isMobile() && $.inArray('mobile', map['wopi'].HideUserList) < 0) ||
									(window.mode.isTablet() && $.inArray('tablet', map['wopi'].HideUserList) < 0));
				if (this.get('userlist').hidden == true && showUserList) {
					this.show('userlist');
					this.show('userlistbreak');
					map.on('deselectuser', window.deselectUser);
					map.on('addview', window.onAddView);
					map.on('removeview', window.onRemoveView);
				}
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['actionbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		toolbar = $('#toolbar-down');
		toolbar.w2toolbar({
			name: 'editbar',
			tooltip: 'top',
			items: toolItems,
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function(edata) {
				if (edata.target === 'inserttable')
					window.insertTable();

				if (edata.target === 'insertshapes')
					window.insertShapes();
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['editbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

	},

	onAnnotationModify: function (annotation) {
		this._annotations.modify(annotation);
	},

	onAnnotationRemove: function (id) {
		this._annotations.remove(id);
	},

	onAnnotationReply: function (annotation) {
		this._annotations.reply(annotation);
	},

	onChangeAccept: function(id) {
		this._annotations.acceptChange(id);
	},

	onChangeReject: function(id) {
		this._annotations.rejectChange(id);
	},

	_onCommandValuesMsg: function (textMsg) {
		var braceIndex = textMsg.indexOf('{');
		if (braceIndex < 0) {
			return;
		}

		var values = JSON.parse(textMsg.substring(braceIndex));
		if (!values) {
			return;
		}

		if (values.comments) {
			this._annotations.fill(values.comments);
		}
		else if (values.redlines) {
			this._annotations.fillChanges(values.redlines);
		}
		else {
			L.TileLayer.prototype._onCommandValuesMsg.call(this, textMsg);
		}
	},

	_onMessage: function (textMsg, img) {
		if (textMsg.startsWith('comment:')) {
			var obj = JSON.parse(textMsg.substring('comment:'.length + 1));
			this._annotations.onACKComment(obj);
		}
		else if (textMsg.startsWith('redlinetablemodified:')) {
			obj = JSON.parse(textMsg.substring('redlinetablemodified:'.length + 1));
			this._annotations.onACKComment(obj);
		}
		else if (textMsg.startsWith('redlinetablechanged:')) {
			obj = JSON.parse(textMsg.substring('redlinetablechanged:'.length + 1));
			this._annotations.onACKComment(obj);
		}
		else {
			L.TileLayer.prototype._onMessage.call(this, textMsg, img);
		}
	},

	_onInvalidateTilesMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		if (command.x === undefined || command.y === undefined || command.part === undefined) {
			var strTwips = textMsg.match(/\d+/g);
			command.x = parseInt(strTwips[0]);
			command.y = parseInt(strTwips[1]);
			command.width = parseInt(strTwips[2]);
			command.height = parseInt(strTwips[3]);
			command.part = this._selectedPart;
		}
		command.part = 0;
		var topLeftTwips = new L.Point(command.x, command.y);
		var offset = new L.Point(command.width, command.height);
		var bottomRightTwips = topLeftTwips.add(offset);
		if (this._debug) {
			this._debugAddInvalidationRectangle(topLeftTwips, bottomRightTwips, textMsg);
		}
		var invalidBounds = new L.Bounds(topLeftTwips, bottomRightTwips);
		var visibleTopLeft = this._latLngToTwips(this._map.getBounds().getNorthWest());
		var visibleBottomRight = this._latLngToTwips(this._map.getBounds().getSouthEast());
		var visibleArea = new L.Bounds(visibleTopLeft, visibleBottomRight);
		var needsNewTiles = false;
		for (var key in this._tiles) {
			var coords = this._tiles[key].coords;
			var tileTopLeft = this._coordsToTwips(coords);
			var tileBottomRight = new L.Point(this._tileWidthTwips, this._tileHeightTwips);
			var bounds = new L.Bounds(tileTopLeft, tileTopLeft.add(tileBottomRight));
			if (coords.part === command.part && invalidBounds.intersects(bounds)) {
				if (this._tiles[key]._invalidCount) {
					this._tiles[key]._invalidCount += 1;
				}
				else {
					this._tiles[key]._invalidCount = 1;
				}
				if (visibleArea.intersects(bounds)) {
					needsNewTiles = true;
					if (this._debug) {
						this._debugAddInvalidationData(this._tiles[key]);
					}
				}
				else {
					// tile outside of the visible area, just remove it
					this._preFetchBorder = null;
					this._removeTile(key);
				}
			}
		}

		if (needsNewTiles && this._debug)
		{
			this._debugAddInvalidationMessage(textMsg);
		}

		for (key in this._tileCache) {
			// compute the rectangle that each tile covers in the document based
			// on the zoom level
			coords = this._keyToTileCoords(key);
			var scale = this._map.getZoomScale(coords.z);
			topLeftTwips = new L.Point(
					this.options.tileWidthTwips / scale * coords.x,
					this.options.tileHeightTwips / scale * coords.y);
			bottomRightTwips = topLeftTwips.add(new L.Point(
					this.options.tileWidthTwips / scale,
					this.options.tileHeightTwips / scale));
			bounds = new L.Bounds(topLeftTwips, bottomRightTwips);
			if (invalidBounds.intersects(bounds)) {
				delete this._tileCache[key];
			}
		}

		this._previewInvalidations.push(invalidBounds);
		// 1s after the last invalidation, update the preview
		clearTimeout(this._previewInvalidator);
		this._previewInvalidator = setTimeout(L.bind(this._invalidatePreviews, this), this.options.previewInvalidationTimeout);
	},

	_onSetPartMsg: function (textMsg) {
		var part = parseInt(textMsg.match(/\d+/g)[0]);
		if (part !== this._selectedPart) {
			this._currentPage = part;
			this._map.fire('pagenumberchanged', {
				currentPage: part,
				pages: this._pages,
				docType: this._docType
			});
		}
	},

	_onStatusMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		if (!command.width || !command.height || this._documentInfo === textMsg)
			return;

		var sizeChanged = command.width !== this._docWidthTwips || command.height !== this._docHeightTwips;
		if (sizeChanged) {
			this._docWidthTwips = command.width;
			this._docHeightTwips = command.height;
			this._docType = command.type;
			this._viewId = parseInt(command.viewid);
			this._updateMaxBounds(true);
		}

		this._documentInfo = textMsg;
		this._selectedPart = 0;
		this._parts = 1;
		this._currentPage = command.selectedPart;
		this._pages = command.parts;
		this._map.fire('pagenumberchanged', {
			currentPage: this._currentPage,
			pages: this._pages,
			docType: this._docType
		});
		this._resetPreFetching(true);
		this._update();
	},

	_onUpdateMaxBounds: function (e) {
		this._updateMaxBounds(e.sizeChanged, e.extraSize);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Impress tile layer is used to display a presentation document
 */

/* global $ _ w2ui w2utils _UNO */
L.ImpressTileLayer = L.TileLayer.extend({
	extraSize: L.point(290, 0),

	newAnnotation: function (comment) {
		if (this._draft) {
			return;
		}
		this.onAnnotationCancel();
		this._draft = L.annotation(L.latLng(0, 0), comment, {noMenu: true}).addTo(this._map);
		this._draft.edit();
		var mapCenter = this._map.latLngToLayerPoint(this._map.getCenter());
		var bounds = this._draft.getBounds();
		var topLeft = mapCenter.subtract(L.point(bounds.max.x - bounds.min.x, (bounds.max.y - bounds.min.y)/2));
		this._draft.setLatLng(this._map.layerPointToLatLng(topLeft));
		this.layoutAnnotations();
		this._draft.focus();
	},

	beforeAdd: function (map) {
		map.on('zoomend', this._onAnnotationZoom, this);
		map.on('updateparts', this.onUpdateParts, this);
		map.on('AnnotationCancel', this.onAnnotationCancel, this);
		map.on('AnnotationReply', this.onReplyClick, this);
		map.on('AnnotationSave', this.onAnnotationSave, this);
		map.on('AnnotationScrollUp', this.onAnnotationScrollUp, this);
		map.on('AnnotationScrollDown', this.onAnnotationScrollDown, this);
		map.on('resize', this.onResize, this);
		if (L.Browser.mobile) {
			map.on('doclayerinit', this.onMobileInit, this);
		}
	},

	getAnnotation: function (id) {
		var annotations = this._annotations[this._partHashes[this._selectedPart]];
		for (var index in annotations) {
			if (annotations[index]._data.id === id) {
				return annotations[index];
			}
		}
		return null;
	},

	hideAnnotations: function (part) {
		this._selectedAnnotation = undefined;
		var annotations = this._annotations[this._partHashes[part]];
		for (var index in annotations) {
			annotations[index].hide();
		}
	},

	hasAnnotations: function (part) {
		var annotations = this._annotations[this._partHashes[part]];
		return annotations && annotations.length > 0;
	},

	updateDocBounds: function (count, extraSize) {
		var annotations = this._annotations[this._partHashes[this._selectedPart]];
		if (annotations && annotations.length === count) {
			this._map._docLayer._updateMaxBounds(true, extraSize);
		}
	},

	onResize: function () {
		if (!L.Browser.mobile) {
			this._map.setView(this._map.getCenter(), this._map.getZoom(), {reset: true});
		}

		var presentationControlWrapperElem = L.DomUtil.get('presentation-controls-wrapper');
		var visible = L.DomUtil.getStyle(presentationControlWrapperElem, 'display');

		if (!this._isSlidePaneVisible && visible !== 'none') {
			this._map.fire('updateparts', {
				selectedPart: this._selectedPart,
				selectedParts: this._selectedParts,
				parts: this._parts,
				docType: this._docType,
				partNames: this._partHashes
			});
		}
		this._isSlidePaneVisible = !(visible === 'none');
	},

	onMobileInit: function () {
		var map = this._map;
		var toolItems = [
			{type: 'button',  id: 'bold',  img: 'bold', hint: _UNO('.uno:Bold'), uno: 'Bold'},
			{type: 'button',  id: 'italic', img: 'italic', hint: _UNO('.uno:Italic'), uno: 'Italic'},
			{type: 'button',  id: 'underline',  img: 'underline', hint: _UNO('.uno:Underline'), uno: 'Underline'},
			{type: 'button',  id: 'strikeout', img: 'strikeout', hint: _UNO('.uno:Strikeout'), uno: 'Strikeout'},
			{type: 'break'},
			{type: 'text-color',  id: 'fontcolor', img: 'textcolor', hint: _UNO('.uno:FontColor')},
			{type: 'color',  id: 'backcolor', img: 'backcolor', hint: _UNO('.uno:BackgroundColor')},
			{type: 'break' , mobile:false},
			{type: 'button',  id: 'leftpara',  img: 'alignleft', hint: _UNO('.uno:LeftPara', '', true), uno: 'LeftPara', unosheet: 'AlignLeft', disabled: true},
			{type: 'button',  id: 'centerpara',  img: 'alignhorizontal', hint: _UNO('.uno:CenterPara', '', true), uno: 'CenterPara', unosheet: 'AlignHorizontalCenter', disabled: true},
			{type: 'button',  id: 'rightpara',  img: 'alignright', hint: _UNO('.uno:RightPara', '', true), uno: 'RightPara', unosheet: 'AlignRight', disabled: true},
			{type: 'button',  id: 'justifypara',  img: 'alignblock', hint: _UNO('.uno:JustifyPara', '', true), uno: 'JustifyPara', unosheet: '', disabled: true},
			{type: 'break', id: 'breakpara'},
			{type: 'menu',  id: 'linespacing',  img: 'linespacing', hint: _UNO('.uno:FormatSpacingMenu'),
				items: [
					{id: 'spacepara1', text: _UNO('.uno:SpacePara1'), uno: 'SpacePara1'},
					{id: 'spacepara15', text: _UNO('.uno:SpacePara15'), uno: 'SpacePara15'},
					{id: 'spacepara2', text: _UNO('.uno:SpacePara2'), uno: 'SpacePara2'},
					{type: 'break'},
					{id: 'paraspaceincrease', text: _UNO('.uno:ParaspaceIncrease'), uno: 'ParaspaceIncrease'},
					{id: 'paraspacedecrease', text: _UNO('.uno:ParaspaceDecrease'), uno: 'ParaspaceDecrease'}
				]},
			{type: 'break', id: 'breakspacing'},
			{type: 'button',  id: 'defaultbullet',  img: 'bullet', hint: _UNO('.uno:DefaultBullet', '', true), uno: 'DefaultBullet', disabled: true},
			{type: 'break', id: 'breakbullet'},
			{type: 'button',  id: 'insertannotation', img: 'annotation', hint: _UNO('.uno:InsertAnnotation', '', true), hidden: true},
			{type: 'drop',  id: 'inserttable',  img: 'inserttable', hint: _('Insert table'), hidden: true, overlay: {onShow: window.insertTable},
			 html: '<div id="inserttable-wrapper"><div id="inserttable-popup" class="inserttable-pop ui-widget ui-corner-all"><div class="inserttable-grid"></div><div id="inserttable-status" class="loleaflet-font" style="padding: 5px;"><br/></div></div></div>'},
			{type: 'button',  id: 'insertgraphic',  img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true)},
			{type: 'menu', id: 'menugraphic', img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true),
				items: [
					{id: 'localgraphic', text: _('Insert Local Image')},
					{id: 'remotegraphic', text: _UNO('.uno:InsertGraphic', '', true)},
				]},
			{type: 'button',  id: 'insertobjectchart',  img: 'insertobjectchart', hint: _UNO('.uno:InsertObjectChart', '', true), uno: 'InsertObjectChart'},
			{type: 'drop',  id: 'insertshapes',  img: 'basicshapes_ellipse', hint: _('Insert shapes'), overlay: {onShow: window.insertShapes},
				html: '<div id="insertshape-wrapper"><div id="insertshape-popup" class="insertshape-pop ui-widget ui-corner-all"><div class="insertshape-grid"></div></div></div>'},

			{type: 'button',  id: 'link',  img: 'link', hint: _UNO('.uno:HyperlinkDialog'), uno: 'HyperlinkDialog', disabled: true},
			{type: 'button',  id: 'insertsymbol', img: 'insertsymbol', hint: _UNO('.uno:InsertSymbol', '', true), uno: 'InsertSymbol'},
			{type: 'spacer'},
			{type: 'button',  id: 'modifypage', img: 'sidebar_modify_page', hint: _UNO('.uno:ModifyPage', 'presentation', true), uno: '.uno:ModifyPage'},
			{type: 'button',  id: 'slidechangewindow', img: 'sidebar_slide_change', hint: _UNO('.uno:SlideChangeWindow', 'presentation', true), uno: '.uno:SlideChangeWindow'},
			{type: 'button',  id: 'customanimation', img: 'sidebar_custom_animation', hint: _UNO('.uno:CustomAnimation', 'presentation', true), uno: '.uno:CustomAnimation'},
			{type: 'button',  id: 'masterslidespanel', img: 'sidebar_master_slides', hint: _('Master Slides'), uno: '.uno:MasterSlidesPanel'},
			{type: 'break', id: 'breaksidebar'}
		];

		var toolbar = $('#toolbar-up');
		toolbar.w2toolbar({
			name: 'actionbar',
			tooltip: 'bottom',
			items: [
				{type: 'button',  id: 'closemobile',  img: 'closemobile'},
				{type: 'spacer'},
				{type: 'button',  id: 'prev', img: 'prev', hint: _UNO('.uno:PageUp', 'text')},
				{type: 'button',  id: 'next', img: 'next', hint: _UNO('.uno:PageDown', 'text')},
				{type: 'button',  id: 'undo',  img: 'undo', hint: _UNO('.uno:Undo'), uno: 'Undo', disabled: true},
				{type: 'button',  id: 'redo',  img: 'redo', hint: _UNO('.uno:Redo'), uno: 'Redo', disabled: true},
				{type: 'button',  id: 'fullscreen', img: 'fullscreen', hint: _UNO('.uno:FullScreen', 'text')},
				{type: 'drop', id: 'userlist', img: 'users', hidden: true, html: '<div id="userlist_container"><table id="userlist_table"><tbody></tbody></table>' +
					'<hr><table class="loleaflet-font" id="editor-btn">' +
					'<tr>' +
					'<td><input type="checkbox" name="alwaysFollow" id="follow-checkbox" onclick="editorUpdate(event)"></td>' +
					'<td>' + _('Always follow the editor') + '</td>' +
					'</tr>' +
					'</table>' +
					'<p id="currently-msg">' + _('Current') + ' - <b><span id="current-editor"></span></b></p>' +
					'</div>'
				},
			],
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function() {
				var showUserList = map['wopi'].HideUserList !== null &&
									map['wopi'].HideUserList !== undefined &&
									$.inArray('true', map['wopi'].HideUserList) < 0 &&
									((window.mode.isMobile() && $.inArray('mobile', map['wopi'].HideUserList) < 0) ||
									(window.mode.isTablet() && $.inArray('tablet', map['wopi'].HideUserList) < 0));
				if (this.get('userlist').hidden == true && showUserList) {
					this.show('userlist');
					this.show('userlistbreak');
					map.on('deselectuser', window.deselectUser);
					map.on('addview', window.onAddView);
					map.on('removeview', window.onRemoveView);
				}
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['actionbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		toolbar = $('#presentation-toolbar');
		toolbar.w2toolbar({
			name: 'presentation-toolbar',
			tooltip: 'bottom',
			hidden: true,
			items: []
		});

		toolbar = $('#toolbar-down');
		toolbar.w2toolbar({
			name: 'editbar',
			tooltip: 'top',
			items: toolItems,
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function(edata) {
				if (edata.target === 'inserttable')
					window.insertTable();

				if (edata.target === 'insertshapes')
					window.insertShapes();
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['editbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		map.on('updatetoolbarcommandvalues', function() {
			w2ui['editbar'].refresh();
		});

		map.on('showbusy', function(e) {
			w2utils.lock(w2ui['actionbar'].box, e.label, true);
		});

		map.on('hidebusy', function() {
			// If locked, unlock
			if (w2ui['actionbar'].box.firstChild.className === 'w2ui-lock') {
				w2utils.unlock(w2ui['actionbar'].box);
			}
		});

		this._map.on('updatepermission', window.onUpdatePermission);
	},

	onAdd: function (map) {
		map.addControl(L.control.partsPreview());
		L.TileLayer.prototype.onAdd.call(this, map);
		this._annotations = {};
		this._topAnnotation = [];
		this._topAnnotation[this._selectedPart] = 0;
		this._selectedAnnotation = undefined;
		this._draft = null;
	},

	onAnnotationCancel: function () {
		if (this._draft) {
			this._map.removeLayer(this._draft);
			this._draft = null;
		}
		this._map.focus();
		this._selectedAnnotation = undefined;
		this.layoutAnnotations();
	},

	onAnnotationModify: function (annotation) {
		this.onAnnotationCancel();
		this._selectedAnnotation = annotation._data.id;
		annotation.edit();
		this.scrollUntilAnnotationIsVisible(annotation);
		annotation.focus();
	},

	onAnnotationReply: function (annotation) {
		this.onAnnotationCancel();
		this._selectedAnnotation = annotation._data.id;
		annotation.reply();
		this.scrollUntilAnnotationIsVisible(annotation);
		annotation.focus();
	},

	onAnnotationRemove: function (id) {
		this.onAnnotationCancel();
		var comment = {
			Id: {
				type: 'string',
				value: id
			}
		};
		this._map.sendUnoCommand('.uno:DeleteAnnotation', comment);
		this._map.focus();
	},

	onAnnotationSave: function (e) {
		var comment;
		if (this._draft) {
			comment = {
				Text: {
					type: 'string',
					value: this._draft._data.text
				}
			};
			this._map.sendUnoCommand('.uno:InsertAnnotation', comment);
			this._map.removeLayer(this._draft);
			this._draft = null;
		} else {
			comment = {
				Id: {
					type: 'string',
					value: e.annotation._data.id
				},
				Text: {
					type: 'string',
					value: e.annotation._data.text
				}
			};
			this._map.sendUnoCommand('.uno:EditAnnotation', comment);
			this._selectedAnnotation = undefined;
		}
		this._map.focus();
	},

	_onAnnotationZoom: function () {
		this.onAnnotationCancel();
	},

	onReplyClick: function (e) {
		var comment = {
			Id: {
				type: 'string',
				value: e.annotation._data.id
			},
			Text: {
				type: 'string',
				value: e.annotation._data.reply
			}
		};
		this._map.sendUnoCommand('.uno:ReplyToAnnotation', comment);
		this._selectedAnnotation = undefined;
		this._map.focus();
	},

	onAnnotationScrollDown: function () {
		this._topAnnotation[this._selectedPart] = Math.min(++this._topAnnotation[this._selectedPart], this._annotations[this._partHashes[this._selectedPart]].length - 1);
		this.onAnnotationCancel();
	},

	onAnnotationScrollUp: function () {
		if (this._topAnnotation[this._selectedPart] === 0) {
			this._map.fire('scrollby', {x: 0, y: -100});
		}
		this._topAnnotation[this._selectedPart] = Math.max(--this._topAnnotation[this._selectedPart], 0);
		this.onAnnotationCancel();
	},

	onUpdateParts: function () {
		if (typeof this._prevSelectedPart === 'number') {
			this.hideAnnotations(this._prevSelectedPart);
			if (this.hasAnnotations(this._selectedPart)) {
				this._map._docLayer._updateMaxBounds(true);
				if (this._topAnnotation[this._selectedPart] === undefined) {
					this._topAnnotation[this._selectedPart] = 0;
				}
				this.onAnnotationCancel();
			}
		}
	},

	clearAnnotations: function () {
		var annotation;
		var annotations;
		for (var key in this._annotations) {
			annotations = this._annotations[key];
			while (annotations.length > 0) {
				annotation = annotations.pop();
				if (annotation) {
					this._map.removeLayer(annotation);
				}
			}
		}
		this._annotations = {};
	},

	removeAnnotation: function (id) {
		var annotations = this._annotations[this._partHashes[this._selectedPart]];
		for (var index in annotations) {
			if (annotations[index]._data.id == id) {
				this._map.removeLayer(annotations[index]);
				annotations.splice(index, 1);
				break;
			}
		}
	},

	scrollUntilAnnotationIsVisible: function(annotation) {
		var bounds = annotation.getBounds();
		var mapBounds = this._map.getBounds();
		if (this._map.layerPointToLatLng(bounds.getTopRight()).lat > mapBounds.getNorth()) {
			this._topAnnotation[this._selectedPart] = Math.max(this._topAnnotation[this._selectedPart] - 2, 0);
		}
		else if (this._map.layerPointToLatLng(bounds.getBottomLeft()).lat < mapBounds.getSouth()) {
			this._topAnnotation[this._selectedPart] = Math.min(this._topAnnotation[this._selectedPart] + 2, this._annotations[this._partHashes[this._selectedPart]].length - 1);
		}
		this.layoutAnnotations();
	},

	layoutAnnotations: function () {
		var topAnnotation;
		var annotations = this._annotations[this._partHashes[this._selectedPart]];
		var topRight = this._map.latLngToLayerPoint(this._map.options.docBounds.getNorthEast())
			.add(L.point((this._selectedAnnotation ? 3 : 2) * this.options.marginX, this.options.marginY));
		var bounds, annotation;
		for (var index in annotations) {
			annotation = annotations[index];
			if (!this._topAnnotation[this._selectedPart]) {
				this._topAnnotation[this._selectedPart] = 0;
			}
			topAnnotation = this._topAnnotation[this._selectedPart];
			if (topAnnotation > 0 && parseInt(index) === topAnnotation - 1) {
				// if the top annotation is not the first one, show a bit of the bottom of the previous annotation
				// so that the user gets aware that there are more annotations above.

				// get annotation bounds
				annotation.setLatLng(this._map.layerPointToLatLng(L.point(0, -100000))); // placed where it's not visible
				annotation.show(); // if it's hidden the bounds are wrong
				bounds = annotation.getBounds();
				annotation.hide();
				var topLeft = topRight.subtract(L.point(0, bounds.max.y-bounds.min.y));
				annotation.setLatLng(this._map.layerPointToLatLng(topLeft));
				annotation.show();
				bounds = annotation.getBounds();
				bounds.extend(L.point(bounds.max.x, bounds.max.y + this.options.marginY));

			} else if (index >= topAnnotation) { // visible annotations
				if (annotation._data.id === this._selectedAnnotation) {
					if (bounds) {
						bounds.extend(L.point(bounds.max.x, bounds.max.y + 2 * this.options.marginY));
					}
					var offsetX = L.point(2 * this.options.marginX, 0);
					topLeft = (bounds ? bounds.getBottomLeft() : topRight).subtract(offsetX);
					annotation.setLatLng(this._map.layerPointToLatLng(topLeft));
					bounds = annotation.getBounds();
					bounds = L.bounds(bounds.getBottomLeft().add(offsetX), bounds.getTopRight().add(offsetX));
					bounds.extend(L.point(bounds.max.x, bounds.max.y + 3 * this.options.marginY));
				} else {
					topLeft = bounds ? bounds.getBottomLeft() : topRight;
					annotation.setLatLng(this._map.layerPointToLatLng(topLeft));
					annotation.show();
					bounds = annotation.getBounds();
					bounds.extend(L.point(bounds.max.x, bounds.max.y + this.options.marginY));
				}
			} else {
				annotation.hide();
			}
		}
		if (bounds) {
			if (!this._scrollAnnotation) {
				this._scrollAnnotation = L.control.scroll.annotation();
				this._scrollAnnotation.addTo(this._map);
			}
		} else if (this._scrollAnnotation) {
			this._map.removeControl(this._scrollAnnotation);
			this._scrollAnnotation = null;
		}
	},

	_onCommandValuesMsg: function (textMsg) {
		try {
			var values = JSON.parse(textMsg.substring(textMsg.indexOf('{')));
		} catch (e) {
			// One such case is 'commandvalues: ' for draw documents in response to .uno:AcceptTrackedChanges
			values = null;
		}

		if (!values) {
			return;
		}

		if (values.comments) {
			this.clearAnnotations();
			for (var index in values.comments) {
				var comment = values.comments[index];
				if (!this._annotations[comment.parthash]) {
					this._annotations[comment.parthash] = [];
				}
				this._annotations[comment.parthash].push(L.annotation(this._map.options.maxBounds.getSouthEast(), comment).addTo(this._map));
			}
			if (!this._topAnnotation) {
				this._topAnnotation = [];
			}
			this._topAnnotation[this._selectedPart] = 0;
			if (this.hasAnnotations(this._selectedPart)) {
				this._map._docLayer._updateMaxBounds(true);
			}
			this.layoutAnnotations();
		} else {
			L.TileLayer.prototype._onCommandValuesMsg.call(this, textMsg);
		}
	},

	_onMessage: function (textMsg, img) {
		if (textMsg.startsWith('comment:')) {
			var obj = JSON.parse(textMsg.substring('comment:'.length + 1));
			if (obj.comment.action === 'Add') {
				if (!this._annotations[obj.comment.parthash]) {
					this._annotations[obj.comment.parthash] = [];
				}
				this._annotations[obj.comment.parthash].push(L.annotation(this._map.options.maxBounds.getSouthEast(), obj.comment).addTo(this._map));
				this._topAnnotation[this._selectedPart] = Math.min(this._topAnnotation[this._selectedPart], this._annotations[this._partHashes[this._selectedPart]].length - 1);
				this.updateDocBounds(1, this.extraSize);
				this.layoutAnnotations();
			} else if (obj.comment.action === 'Remove') {
				this.removeAnnotation(obj.comment.id);
				this._topAnnotation[this._selectedPart] = Math.min(this._topAnnotation[this._selectedPart], this._annotations[this._partHashes[this._selectedPart]].length - 1);
				this.updateDocBounds(0);
				this.layoutAnnotations();
			} else if (obj.comment.action === 'Modify') {
				var modified = this.getAnnotation(obj.comment.id);
				if (modified) {
					modified._data = obj.comment;
					modified.update();
					this._selectedAnnotation = undefined;
					this.layoutAnnotations();
				}
			}
		} else {
			L.TileLayer.prototype._onMessage.call(this, textMsg, img);
		}
	},

	_onInvalidateTilesMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		if (command.x === undefined || command.y === undefined || command.part === undefined) {
			var strTwips = textMsg.match(/\d+/g);
			command.x = parseInt(strTwips[0]);
			command.y = parseInt(strTwips[1]);
			command.width = parseInt(strTwips[2]);
			command.height = parseInt(strTwips[3]);
			command.part = this._selectedPart;
		}
		var topLeftTwips = new L.Point(command.x, command.y);
		var offset = new L.Point(command.width, command.height);
		var bottomRightTwips = topLeftTwips.add(offset);
		if (this._debug) {
			this._debugAddInvalidationRectangle(topLeftTwips, bottomRightTwips, textMsg);
		}
		var invalidBounds = new L.Bounds(topLeftTwips, bottomRightTwips);
		var visibleTopLeft = this._latLngToTwips(this._map.getBounds().getNorthWest());
		var visibleBottomRight = this._latLngToTwips(this._map.getBounds().getSouthEast());
		var visibleArea = new L.Bounds(visibleTopLeft, visibleBottomRight);
		var needsNewTiles = false;
		for (var key in this._tiles) {
			var coords = this._tiles[key].coords;
			var tileTopLeft = this._coordsToTwips(coords);
			var tileBottomRight = new L.Point(this._tileWidthTwips, this._tileHeightTwips);
			var bounds = new L.Bounds(tileTopLeft, tileTopLeft.add(tileBottomRight));
			if (coords.part === command.part && invalidBounds.intersects(bounds)) {
				if (this._tiles[key]._invalidCount) {
					this._tiles[key]._invalidCount += 1;
				}
				else {
					this._tiles[key]._invalidCount = 1;
				}
				if (visibleArea.intersects(bounds)) {
					needsNewTiles = true;
					if (this._debug) {
						this._debugAddInvalidationData(this._tiles[key]);
					}
				}
				else {
					// tile outside of the visible area, just remove it
					this._preFetchBorder = null;
					this._removeTile(key);
				}
			}
		}

		if (needsNewTiles && command.part === this._selectedPart && this._debug)
		{
			this._debugAddInvalidationMessage(textMsg);
		}

		for (key in this._tileCache) {
			// compute the rectangle that each tile covers in the document based
			// on the zoom level
			coords = this._keyToTileCoords(key);
			if (coords.part !== command.part) {
				continue;
			}
			var scale = this._map.getZoomScale(coords.z);
			topLeftTwips = new L.Point(
					this.options.tileWidthTwips / scale * coords.x,
					this.options.tileHeightTwips / scale * coords.y);
			bottomRightTwips = topLeftTwips.add(new L.Point(
					this.options.tileWidthTwips / scale,
					this.options.tileHeightTwips / scale));
			bounds = new L.Bounds(topLeftTwips, bottomRightTwips);
			if (invalidBounds.intersects(bounds)) {
				delete this._tileCache[key];
			}
		}
		if (command.part === this._selectedPart &&
			command.part !== this._lastValidPart) {
			this._map.fire('updatepart', {part: this._lastValidPart, docType: this._docType});
			this._lastValidPart = command.part;
			this._map.fire('updatepart', {part: command.part, docType: this._docType});
		}

		this._map._docPreviews[command.part].invalid = true;
		this._previewInvalidations.push(invalidBounds);
		// 1s after the last invalidation, update the preview
		clearTimeout(this._previewInvalidator);
		this._previewInvalidator = setTimeout(L.bind(this._invalidatePreviews, this), this.options.previewInvalidationTimeout);
	},

	_onSetPartMsg: function (textMsg) {
		var part = parseInt(textMsg.match(/\d+/g)[0]);
		if (part !== this._selectedPart) {
			this._map.setPart(part, true);
			this._map.fire('setpart', {selectedPart: this._selectedPart});
		}
	},

	_onStatusMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		// Since we have two status commands, remove them so we store and compare payloads only.
		textMsg = textMsg.replace('status: ', '');
		textMsg = textMsg.replace('statusupdate: ', '');
		if (command.width && command.height && this._documentInfo !== textMsg) {
			this._docWidthTwips = command.width;
			this._docHeightTwips = command.height;
			this._docType = command.type;
			if (this._docType === 'drawing') {
				L.DomUtil.addClass(L.DomUtil.get('presentation-controls-wrapper'), 'drawing');
			}
			this._updateMaxBounds(true);
			this._documentInfo = textMsg;
			this._parts = command.parts;
			this._viewId = parseInt(command.viewid);
			this._selectedPart = command.selectedPart;
			this._resetPreFetching(true);
			this._update();
			if (this._preFetchPart !== this._selectedPart) {
				this._preFetchPart = this._selectedPart;
				this._preFetchBorder = null;
			}
			var partMatch = textMsg.match(/[^\r\n]+/g);
			// only get the last matches
			this._partHashes = partMatch.slice(partMatch.length - this._parts);
			this._map.fire('updateparts', {
				selectedPart: this._selectedPart,
				parts: this._parts,
				docType: this._docType,
				partNames: this._partHashes
			});
		}
	},

	_updateMaxBounds: function (sizeChanged, extraSize) {
		if (!extraSize) {
			var annotations = this._annotations && this._partHashes && this._selectedPart !== undefined ?
				this._annotations[this._partHashes[this._selectedPart]] : [];
			extraSize = annotations && annotations.length > 0 ? this.extraSize : null;
		}
		L.GridLayer.prototype._updateMaxBounds.call(this, sizeChanged, extraSize, {panInside: false});
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Calc tile layer is used to display a spreadsheet document
 */

/* global $ _ w2ui w2utils _UNO */
L.CalcTileLayer = L.TileLayer.extend({
	STD_EXTRA_WIDTH: 113, /* 2mm extra for optimal width,
							  * 0.1986cm with TeX points,
							  * 0.1993cm with PS points. */

	twipsToHMM: function (twips) {
		return (twips * 127 + 36) / 72;
	},

	newAnnotation: function (comment) {
		var annotations = this._annotations[this._selectedPart];
		var annotation;
		for (var key in annotations) {
			if (this._cellCursor.contains(annotations[key]._annotation._data.cellPos)) {
				annotation = annotations[key];
				break;
			}
		}

		if (!annotation) {
			comment.cellPos = this._cellCursor;
			annotation = this.createAnnotation(comment);
			annotation._annotation._tag = annotation;
			this.showAnnotation(annotation);
		}
		annotation.editAnnotation();
	},

	createAnnotation: function (comment) {
		var annotation = L.divOverlay(comment.cellPos).bindAnnotation(L.annotation(L.latLng(0, 0),
			comment, comment.id === 'new' ? {noMenu: true} : {}));
		return annotation;
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
		map.on('zoomend', this._onZoomRowColumns, this);
		map.on('updateparts', this._onUpdateParts, this);
		map.on('AnnotationCancel', this._onAnnotationCancel, this);
		map.on('AnnotationReply', this._onAnnotationReply, this);
		map.on('AnnotationSave', this._onAnnotationSave, this);
		if (L.Browser.mobile) {
			map.on('doclayerinit', this.onMobileInit, this);
		}
	},

	clearAnnotations: function () {
		for (var tab in this._annotations) {
			this.hideAnnotations(tab);
		}
		this._annotations = {};
	},

	onAdd: function (map) {
		map.addControl(L.control.tabs());
		map.addControl(L.control.columnHeader());
		map.addControl(L.control.rowHeader());
		L.TileLayer.prototype.onAdd.call(this, map);
		this._annotations = {};
	},

	onMobileInit: function () {
		var map = this._map;
		var toolItems = [
			{type: 'button',  id: 'bold',  img: 'bold', hint: _UNO('.uno:Bold'), uno: 'Bold'},
			{type: 'button',  id: 'italic', img: 'italic', hint: _UNO('.uno:Italic'), uno: 'Italic'},
			{type: 'button',  id: 'underline',  img: 'underline', hint: _UNO('.uno:Underline'), uno: 'Underline'},
			{type: 'button',  id: 'strikeout', img: 'strikeout', hint: _UNO('.uno:Strikeout'), uno: 'Strikeout'},
			{type: 'break'},
			{type: 'text-color',  id: 'fontcolor', img: 'textcolor', hint: _UNO('.uno:FontColor')},
			{type: 'color',  id: 'backcolor', img: 'backcolor', hint: _UNO('.uno:BackgroundColor')},
			{type: 'button',  id: 'togglemergecells',  img: 'togglemergecells', hint: _UNO('.uno:ToggleMergeCells', 'spreadsheet', true), uno: 'ToggleMergeCells', disabled: true},
			{type: 'break', id: 'breakmergecells'},
			{type: 'menu', id: 'textalign', img: 'alignblock', hint: _UNO('.uno:TextAlign'),
				items: [
					{id: 'alignleft', text: _UNO('.uno:AlignLeft', 'spreadsheet', true), icon: 'alignleft', uno: 'AlignLeft'},
					{id: 'alignhorizontalcenter', text: _UNO('.uno:AlignHorizontalCenter', 'spreadsheet', true), icon: 'alignhorizontal', uno: 'AlignHorizontalCenter'},
					{id: 'alignright', text: _UNO('.uno:AlignRight', 'spreadsheet', true), icon: 'alignright', uno: 'AlignRight'},
					{id: 'alignblock', text: _UNO('.uno:AlignBlock', 'spreadsheet', true), icon: 'alignblock', uno: 'AlignBlock'},
				]},
			{type: 'button',  id: 'wraptext',  img: 'wraptext', hint: _UNO('.uno:WrapText', 'spreadsheet', true), uno: 'WrapText', disabled: true},
			{type: 'button',  id: 'numberformatcurrency',  img: 'numberformatcurrency', hint: _UNO('.uno:NumberFormatCurrency', 'spreadsheet', true), uno: 'NumberFormatCurrency', disabled: true},
			{type: 'button',  id: 'numberformatpercent',  img: 'numberformatpercent', hint: _UNO('.uno:NumberFormatPercent', 'spreadsheet', true), uno: 'NumberFormatPercent', disabled: true},
			{type: 'button',  id: 'numberformatdecdecimals',  img: 'numberformatdecdecimals', hint: _UNO('.uno:NumberFormatDecDecimals', 'spreadsheet', true), hidden: true, uno: 'NumberFormatDecDecimals', disabled: true},
			{type: 'button',  id: 'numberformatincdecimals',  img: 'numberformatincdecimals', hint: _UNO('.uno:NumberFormatIncDecimals', 'spreadsheet', true), hidden: true, uno: 'NumberFormatIncDecimals', disabled: true},
			{type: 'button',  id: 'sum',  img: 'autosum', hint: _('Sum')},
			{type: 'break',   id: 'break-number'},
			{type: 'button',  id: 'insertannotation', img: 'annotation', hint: _UNO('.uno:InsertAnnotation', '', true)},
			{type: 'button',  id: 'insertgraphic',  img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true)},
			{type: 'button',  id: 'insertobjectchart',  img: 'insertobjectchart', hint: _UNO('.uno:InsertObjectChart', '', true), uno: 'InsertObjectChart'},
			{type: 'drop',  id: 'insertshapes',  img: 'basicshapes_ellipse', hint: _('Insert shapes'), overlay: {onShow: window.insertShapes},
				html: '<div id="insertshape-wrapper"><div id="insertshape-popup" class="insertshape-pop ui-widget ui-corner-all"><div class="insertshape-grid"></div></div></div>'},

			{type: 'button',  id: 'link',  img: 'link', hint: _UNO('.uno:HyperlinkDialog'), uno: 'HyperlinkDialog', disabled: true},
			{type: 'button',  id: 'insertsymbol', img: 'insertsymbol', hint: _UNO('.uno:InsertSymbol', '', true), uno: 'InsertSymbol'}
		];

		var toolbar = $('#toolbar-up');
		toolbar.w2toolbar({
			name: 'actionbar',
			tooltip: 'bottom',
			items: [
				{type: 'button',  id: 'closemobile',  img: 'closemobile'},
				{type: 'spacer'},
				{type: 'button',  id: 'undo',  img: 'undo', hint: _UNO('.uno:Undo'), uno: 'Undo', disabled: true},
				{type: 'button',  id: 'redo',  img: 'redo', hint: _UNO('.uno:Redo'), uno: 'Redo', disabled: true},
				{type: 'button',  id: 'fullscreen', img: 'fullscreen', hint: _UNO('.uno:FullScreen', 'text')},
				{type: 'drop', id: 'userlist', img: 'users', html: '<div id="userlist_container"><table id="userlist_table"><tbody></tbody></table>' +
					'<hr><table class="loleaflet-font" id="editor-btn">' +
					'<tr>' +
					'<td><input type="checkbox" name="alwaysFollow" id="follow-checkbox" onclick="editorUpdate(event)"></td>' +
					'<td>' + _('Always follow the editor') + '</td>' +
					'</tr>' +
					'</table>' +
					'<p id="currently-msg">' + _('Current') + ' - <b><span id="current-editor"></span></b></p>' +
					'</div>'
				},
			],
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function() {
				var showUserList = map['wopi'].HideUserList !== null &&
									map['wopi'].HideUserList !== undefined &&
									$.inArray('true', map['wopi'].HideUserList) < 0 &&
									((window.mode.isMobile() && $.inArray('mobile', map['wopi'].HideUserList) < 0) ||
									(window.mode.isTablet() && $.inArray('tablet', map['wopi'].HideUserList) < 0));
				if (this.get('userlist').hidden == true && showUserList) {
					this.show('userlist');
					this.show('userlistbreak');
					map.on('deselectuser', window.deselectUser);
					map.on('addview', window.onAddView);
					map.on('removeview', window.onRemoveView);
				}
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['actionbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		toolbar = $('#formulabar');
		toolbar.w2toolbar({
			name: 'formulabar',
			tooltip: 'bottom',
			hidden: true,
			items: [
				{type: 'html',  id: 'left'},
				{type: 'html', id: 'address', html: '<input id="addressInput" type="text">'},
				{type: 'break'},
				{type: 'button',  id: 'sum',  img: 'autosum', hint: _('Sum')},
				{type: 'button',  id: 'function',  img: 'equal', hint: _('Function')},
				{type: 'button', hidden: true, id: 'cancelformula',  img: 'cancel', hint: _('Cancel')},
				{type: 'button', hidden: true, id: 'acceptformula',  img: 'accepttrackedchanges', hint: _('Accept')},
				{type: 'html', id: 'formula', html: '<input id="formulaInput" type="text">'}
			],
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function() {
				$('#addressInput').off('keyup', window.onAddressInput).on('keyup', window.onAddressInput);
				$('#formulaInput').off('keyup', window.onFormulaInput).on('keyup', window.onFormulaInput);
				$('#formulaInput').off('blur', window.onFormulaBarBlur).on('blur', window.onFormulaBarBlur);
				$('#formulaInput').off('focus', window.onFormulaBarFocus).on('focus', window.onFormulaBarFocus);
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['formulabar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		$(w2ui.formulabar.box).find('.w2ui-scroll-left, .w2ui-scroll-right').hide();
		w2ui.formulabar.on('resize', function(target, e) {
			e.isCancelled = true;
		});

		toolbar = $('#spreadsheet-toolbar');
		toolbar.w2toolbar({
			name: 'spreadsheet-toolbar',
			tooltip: 'bottom',
			hidden: true,
			items: [
				{type: 'button',  id: 'firstrecord',  img: 'firstrecord', hint: _('First sheet')},
				{type: 'button',  id: 'prevrecord',  img: 'prevrecord', hint: _('Previous sheet')},
				{type: 'button',  id: 'nextrecord',  img: 'nextrecord', hint: _('Next sheet')},
				{type: 'button',  id: 'lastrecord',  img: 'lastrecord', hint: _('Last sheet')},
				{type: 'button',  id: 'insertsheet', img: 'insertsheet', hint: _('Insert sheet')}
			],
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['spreadsheet-toolbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		toolbar = $('#toolbar-down');
		toolbar.w2toolbar({
			name: 'editbar',
			tooltip: 'top',
			items: toolItems,
			onClick: function (e) {
				window.onClick(e, e.target);
				window.hideTooltip(this, e.target);
			},
			onRefresh: function(edata) {
				if (edata.target === 'insertshapes')
					window.insertShapes();
			}
		});
		toolbar.bind('touchstart', function(e) {
			w2ui['editbar'].touchStarted = true;
			var touchEvent = e.originalEvent;
			if (touchEvent && touchEvent.touches.length > 1) {
				L.DomEvent.preventDefault(e);
			}
		});

		map.on('updatetoolbarcommandvalues', function() {
			w2ui['editbar'].refresh();
		});

		map.on('showbusy', function(e) {
			w2utils.lock(w2ui['actionbar'].box, e.label, true);
		});

		map.on('hidebusy', function() {
			// If locked, unlock
			if (w2ui['actionbar'].box.firstChild.className === 'w2ui-lock') {
				w2utils.unlock(w2ui['actionbar'].box);
			}
		});

		map.on('updatepermission', window.onUpdatePermission);
	},

	onAnnotationModify: function (annotation) {
		annotation.edit();
		annotation.focus();
	},

	onAnnotationRemove: function (id) {
		var comment = {
			Id: {
				type: 'string',
				value: id
			}
		};
		var tab = this._selectedPart;
		this._map.sendUnoCommand('.uno:DeleteNote', comment);
		this._annotations[tab][id].closePopup();
		this._map.focus();
	},

	onAnnotationReply: function (annotation) {
		annotation.reply();
		annotation.focus();
	},

	showAnnotation: function (annotation) {
		this._map.addLayer(annotation);
	},

	hideAnnotation: function (annotation) {
		this._map.removeLayer(annotation);
	},

	showAnnotations: function () {
		var annotations = this._annotations[this._selectedPart];
		for (var key in annotations) {
			this.showAnnotation(annotations[key]);
		}
	},

	hideAnnotations: function (part) {
		var annotations = this._annotations[part];
		for (var key in annotations) {
			this.hideAnnotation(annotations[key]);
		}
	},

	isHiddenPart: function (part) {
		if (!this._hiddenParts)
			return false;
		return this._hiddenParts.indexOf(part) !== -1;
	},

	hiddenParts: function () {
		if (!this._hiddenParts)
			return 0;
		return this._hiddenParts.length;
	},

	hasAnyHiddenPart: function () {
		if (!this._hiddenParts)
			return false;
		return this.hiddenParts() !== 0;
	},
	_onAnnotationCancel: function (e) {
		if (e.annotation._data.id === 'new') {
			this.hideAnnotation(e.annotation._tag);
		} else {
			this._annotations[e.annotation._data.tab][e.annotation._data.id].closePopup();
		}
		this._map.focus();
	},

	_onAnnotationReply: function (e) {
		var comment = {
			Id: {
				type: 'string',
				value: e.annotation._data.id
			},
			Text: {
				type: 'string',
				value: e.annotation._data.reply
			}
		};
		this._map.sendUnoCommand('.uno:ReplyComment', comment);
		this._map.focus();
	},

	_onAnnotationSave: function (e) {
		var comment;
		if (e.annotation._data.id === 'new') {
			comment = {
				Text: {
					type: 'string',
					value: e.annotation._data.text
				},
				Author: {
					type: 'string',
					value: e.annotation._data.author
				}
			};
			this._map.sendUnoCommand('.uno:InsertAnnotation', comment);
			this.hideAnnotation(e.annotation._tag);
		} else {
			comment = {
				Id: {
					type: 'string',
					value: e.annotation._data.id
				},
				Text: {
					type: 'string',
					value: e.annotation._data.text
				},
				Author: {
					type: 'string',
					value: this._map.getViewName(this._viewId)
				}
			};
			this._map.sendUnoCommand('.uno:EditAnnotation', comment);
			this._annotations[e.annotation._data.tab][e.annotation._data.id].closePopup();
		}
		this._map.focus();
	},

	_onUpdateParts: function (e) {
		if (typeof this._prevSelectedPart === 'number' && !e.source) {
			this.hideAnnotations(this._prevSelectedPart);
			this.showAnnotations();
		}
	},

	_onMessage: function (textMsg, img) {
		if (textMsg.startsWith('comment:')) {
			var obj = JSON.parse(textMsg.substring('comment:'.length + 1));
			obj.comment.tab = parseInt(obj.comment.tab);
			if (obj.comment.action === 'Add') {
				obj.comment.cellPos = L.LOUtil.stringToBounds(obj.comment.cellPos);
				obj.comment.cellPos = L.latLngBounds(this._twipsToLatLng(obj.comment.cellPos.getBottomLeft()),
					this._twipsToLatLng(obj.comment.cellPos.getTopRight()));
				if (!this._annotations[obj.comment.tab]) {
					this._annotations[obj.comment.tab] = {};
				}
				this._annotations[obj.comment.tab][obj.comment.id] = this.createAnnotation(obj.comment);
				if (obj.comment.tab === this._selectedPart) {
					this.showAnnotation(this._annotations[obj.comment.tab][obj.comment.id]);
				}
			} else if (obj.comment.action === 'Remove') {
				var removed = this._annotations[obj.comment.tab][obj.comment.id];
				if (removed) {
					this.hideAnnotation(removed);
					delete this._annotations[obj.comment.tab][obj.comment.id];
				}
			} else if (obj.comment.action === 'Modify') {
				var modified = this._annotations[obj.comment.tab][obj.comment.id];
				obj.comment.cellPos = L.LOUtil.stringToBounds(obj.comment.cellPos);
				obj.comment.cellPos = L.latLngBounds(this._twipsToLatLng(obj.comment.cellPos.getBottomLeft()),
					this._twipsToLatLng(obj.comment.cellPos.getTopRight()));
				if (modified) {
					modified._annotation._data = obj.comment;
					modified.setLatLngBounds(obj.comment.cellPos);
				}
			}
		} else if (textMsg.startsWith('invalidateheader: column')) {
			this._map.fire('updaterowcolumnheaders', {x: this._map._getTopLeftPoint().x, y: 0, offset: {x: undefined, y: 0}});
			this._map._socket.sendMessage('commandvalues command=.uno:ViewAnnotationsPosition');
		} else if (textMsg.startsWith('invalidateheader: row')) {
			this._map.fire('updaterowcolumnheaders', {x: 0, y: this._map._getTopLeftPoint().y, offset: {x: 0, y: undefined}});
			this._map._socket.sendMessage('commandvalues command=.uno:ViewAnnotationsPosition');
		} else if (textMsg.startsWith('invalidateheader: all')) {
			this._map.fire('updaterowcolumnheaders', {x: this._map._getTopLeftPoint().x, y: this._map._getTopLeftPoint().y, offset: {x: undefined, y: undefined}});
			this._map._socket.sendMessage('commandvalues command=.uno:ViewAnnotationsPosition');
		} else {
			L.TileLayer.prototype._onMessage.call(this, textMsg, img);
		}
	},

	_onInvalidateTilesMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		if (command.x === undefined || command.y === undefined || command.part === undefined) {
			var strTwips = textMsg.match(/\d+/g);
			command.x = parseInt(strTwips[0]);
			command.y = parseInt(strTwips[1]);
			command.width = parseInt(strTwips[2]);
			command.height = parseInt(strTwips[3]);
			command.part = this._selectedPart;
		}
		var topLeftTwips = new L.Point(command.x, command.y);
		var offset = new L.Point(command.width, command.height);
		var bottomRightTwips = topLeftTwips.add(offset);
		if (this._debug) {
			this._debugAddInvalidationRectangle(topLeftTwips, bottomRightTwips, textMsg);
		}
		var invalidBounds = new L.Bounds(topLeftTwips, bottomRightTwips);
		var visibleTopLeft = this._latLngToTwips(this._map.getBounds().getNorthWest());
		var visibleBottomRight = this._latLngToTwips(this._map.getBounds().getSouthEast());
		var visibleArea = new L.Bounds(visibleTopLeft, visibleBottomRight);

		var needsNewTiles = false;
		for (var key in this._tiles) {
			var coords = this._tiles[key].coords;
			var tileTopLeft = this._coordsToTwips(coords);
			var tileBottomRight = new L.Point(this._tileWidthTwips, this._tileHeightTwips);
			var bounds = new L.Bounds(tileTopLeft, tileTopLeft.add(tileBottomRight));
			if (coords.part === command.part && invalidBounds.intersects(bounds)) {
				if (this._tiles[key]._invalidCount) {
					this._tiles[key]._invalidCount += 1;
				}
				else {
					this._tiles[key]._invalidCount = 1;
				}
				if (visibleArea.intersects(bounds)) {
					needsNewTiles = true;
					if (this._debug) {
						this._debugAddInvalidationData(this._tiles[key]);
					}
				}
				else {
					// tile outside of the visible area, just remove it
					this._preFetchBorder = null;
					this._removeTile(key);
				}
			}
		}

		if (needsNewTiles && command.part === this._selectedPart && this._debug)
		{
			this._debugAddInvalidationMessage(textMsg);
		}

		for (key in this._tileCache) {
			// compute the rectangle that each tile covers in the document based
			// on the zoom level
			coords = this._keyToTileCoords(key);
			if (coords.part !== command.part) {
				continue;
			}
			var scale = this._map.getZoomScale(coords.z);
			topLeftTwips = new L.Point(
					this.options.tileWidthTwips / scale * coords.x,
					this.options.tileHeightTwips / scale * coords.y);
			bottomRightTwips = topLeftTwips.add(new L.Point(
					this.options.tileWidthTwips / scale,
					this.options.tileHeightTwips / scale));
			bounds = new L.Bounds(topLeftTwips, bottomRightTwips);
			if (invalidBounds.intersects(bounds)) {
				delete this._tileCache[key];
			}
		}

		this._previewInvalidations.push(invalidBounds);
		// 1s after the last invalidation, update the preview
		clearTimeout(this._previewInvalidator);
		this._previewInvalidator = setTimeout(L.bind(this._invalidatePreviews, this), this.options.previewInvalidationTimeout);
	},

	_onSetPartMsg: function (textMsg) {
		var part = parseInt(textMsg.match(/\d+/g)[0]);
		if (part !== this._selectedPart && !this.isHiddenPart(part)) {
			this._map.setPart(part, true);
			this._map.fire('setpart', {selectedPart: this._selectedPart});
			// TODO: test it!
			this._map.fire('updaterowcolumnheaders');
		}
	},

	_onZoomRowColumns: function () {
		this._sendClientZoom();
		// TODO: test it!
		this._map.fire('updaterowcolumnheaders');
	},

	_onUpdateCurrentHeader: function() {
		var x = -1, y = -1;
		if (this._cellCursorXY) {
			x = this._cellCursorXY.x + 1;
			y = this._cellCursorXY.y + 1;
		}
		var size = new L.Point(0, 0);
		if (this._cellCursor && !this._isEmptyRectangle(this._cellCursor)) {
			size = this._cellCursorTwips.getSize();
		}
		this._map.fire('updatecurrentheader', {curX: x, curY: y, width: size.x, height: size.y});
	},

	_onUpdateSelectionHeader: function () {
		var layers = this._selections.getLayers();
		var layer = layers.pop();
		if (layers.length === 0 && layer && layer.getLatLngs().length === 1) {
			var start = this._latLngToTwips(layer.getBounds().getNorthWest()).add([1, 1]);
			var end = this._latLngToTwips(layer.getBounds().getSouthEast()).subtract([1, 1]);
			this._map.fire('updateselectionheader', {start: start, end: end});
		}
		else {
			this._map.fire('clearselectionheader');
		}
	},

	_onStatusMsg: function (textMsg) {
		var command = this._map._socket.parseServerCmd(textMsg);
		if (command.width && command.height && this._documentInfo !== textMsg) {
			this._docWidthTwips = command.width;
			this._docHeightTwips = command.height;
			this._docType = command.type;
			this._parts = command.parts;
			this._selectedPart = command.selectedPart;
			this._viewId = parseInt(command.viewid);
			var mapSize = this._map.getSize();
			var width = this._docWidthTwips / this._tileWidthTwips * this._tileSize;
			var height = this._docHeightTwips / this._tileHeightTwips * this._tileSize;
			if (width < mapSize.x || height < mapSize.y) {
				width = Math.max(width, mapSize.x);
				height = Math.max(height, mapSize.y);
				var topLeft = this._map.unproject(new L.Point(0, 0));
				var bottomRight = this._map.unproject(new L.Point(width, height));
				this._map.setMaxBounds(new L.LatLngBounds(topLeft, bottomRight));
				this._docPixelSize = {x: width, y: height};
				this._map.fire('docsize', {x: width, y: height});
			}
			else {
				this._updateMaxBounds(true);
			}
			this._hiddenParts = command.hiddenparts || [];
			this._documentInfo = textMsg;
			var partNames = textMsg.match(/[^\r\n]+/g);
			// only get the last matches
			this._partNames = partNames.slice(partNames.length - this._parts);
			this._map.fire('updateparts', {
				selectedPart: this._selectedPart,
				parts: this._parts,
				docType: this._docType,
				partNames: this._partNames,
				hiddenParts: this._hiddenParts,
				source: 'status'
			});
			this._resetPreFetching(true);
			this._update();
			if (this._preFetchPart !== this._selectedPart) {
				this._preFetchPart = this._selectedPart;
				this._preFetchBorder = null;
			}
		}
	},

	_onCommandValuesMsg: function (textMsg) {
		var jsonIdx = textMsg.indexOf('{');
		if (jsonIdx === -1)
			return;

		var values = JSON.parse(textMsg.substring(jsonIdx));
		if (!values) {
			return;
		}

		var comment;
		if (values.commandName === '.uno:ViewRowColumnHeaders') {
			this._map.fire('viewrowcolumnheaders', {
				data: values,
				converter: this._twipsToPixels,
				context: this
			});
			this._onUpdateCurrentHeader();
			this._onUpdateSelectionHeader();
		} else if (values.comments) {
			this.clearAnnotations();
			for (var index in values.comments) {
				comment = values.comments[index];
				comment.tab = parseInt(comment.tab);
				comment.cellPos = L.LOUtil.stringToBounds(comment.cellPos);
				comment.cellPos = L.latLngBounds(this._twipsToLatLng(comment.cellPos.getBottomLeft()),
					this._twipsToLatLng(comment.cellPos.getTopRight()));
				if (!this._annotations[comment.tab]) {
					this._annotations[comment.tab] = {};
				}
				this._annotations[comment.tab][comment.id] = this.createAnnotation(comment);
			}
			this.showAnnotations();
		} else if (values.commentsPos) {
			this.hideAnnotations();
			for (index in values.commentsPos) {
				comment = values.commentsPos[index];
				comment.tab = parseInt(comment.tab);
				comment.cellPos = L.LOUtil.stringToBounds(comment.cellPos);
				comment.cellPos = L.latLngBounds(this._twipsToLatLng(comment.cellPos.getBottomLeft()),
					this._twipsToLatLng(comment.cellPos.getTopRight()));
				var annotation = this._annotations[comment.tab][comment.id];
				if (annotation) {
					annotation.setLatLngBounds(comment.cellPos);
					if (annotation.mark) {
						annotation.mark.setLatLng(comment.cellPos.getNorthEast());
					}
				}
			}
			this.showAnnotations();
		} else {
			L.TileLayer.prototype._onCommandValuesMsg.call(this, textMsg);
		}
	},

	_onTextSelectionMsg: function (textMsg) {
		L.TileLayer.prototype._onTextSelectionMsg.call(this, textMsg);
		this._onUpdateSelectionHeader();
	},

	_onCellCursorMsg: function (textMsg) {
		L.TileLayer.prototype._onCellCursorMsg.call(this, textMsg);
		this._onUpdateCurrentHeader();
	}
});

/*
 * A Leaflet layer that just sets the background colour of the map.
 *
 * This just changes the map container's style, and does not
 * implement pane positioning - adding two instances of this
 * layer to a map at a time will conflict.
 */

L.BackgroundColor = L.Layer.extend({
	options: {
		/*
		 * The background color that the map shall take when this layer is
		 * added to it. Must be a string containing a CSS color value, as per
		 * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
		 *
		 * The default is Leaflet's default grey.
		 */
		color: '#dfdfdf'
	},

	onAdd: function() {
		return this.setColor(this.options.color);
	},

	remove: function() {
		delete this._map.style.background;
	},

	/*
	 * Expects a CSS color value. Sets the map background to that color, and
	 * resets the 'color' option of this layer.
	 */
	setColor: function(cssColor) {
		this.options.color = cssColor;
		if (this._map) {
			this._map.getContainer().style.background = cssColor;
		}
		return this;
	}
});

// Libreoffice-specific functionality follows.

/*
 * A L.BackgroundColor that automatically resets its color
 * based on 'statechange' messages from lowsd.
 */
L.CalcBackground = L.BackgroundColor.extend({
	onAdd: function(map) {
		map.on('commandstatechanged', this._onStateChanged, this);
		return this.setColor(this.options.color);
	},

	remove: function() {
		delete this._map.style.background;
		this._map.off('commandstatechanged', this._onStateChanged, this);
	},

	// State flag for the heuristic algorithm used in _onStateChanged
	_bgCanBeSet: true,

	_onStateChanged: function(ev) {
		// There are lots of statechange events - but there is no indication of what the
		// background color of a Calc sheet is. In order to discern the background color
		// there is a heuristic method which uses three statechange events: BackgroundColor,
		// RowColSelCount and StatusPosDoc.
		// A BackgroundColor statechange will be regarded as a change of background
		// color only if:
		// - There has been no previous RowColSelCount statechange (first load),
		// - There has been a StatusPosDoc (sheet change) before the last RowColSelCount,
		// - The last RowColSelCount affected all the sheet (re-applying color).

		if (ev.commandName === '.uno:StatusDocPos') {
			this._bgCanBeSet = true;
			return;
		}
		if (ev.commandName === '.uno:RowColSelCount') {
			this._bgCanBeSet = ev.state === '1048576 rows, 1024 columns selected';
			return;
		}
		if (ev.commandName !== '.uno:BackgroundColor') {
			return;
		}

		// Given an integer coming from a websocket message from UNO,
		// calculate a '#RRGGBB' string for the corresponding CSS color
		// Special value: -1 means 'no fill' which translates to white background in Calc
		var color;
		if (ev.state === '-1') {
			color = 'white';
		} else {
			color =
				'#' +
				parseInt(ev.state)
					.toString(16)
					.padStart(6, '0');
		}

		this.setColor(color);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
 */

L.ImageOverlay = L.Layer.extend({

	options: {
		opacity: 1,
		alt: '',
		interactive: false
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = L.latLngBounds(bounds);

		L.setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			L.DomUtil.addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		L.DomUtil.remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	bringToFront: function () {
		if (this._map) {
			L.DomUtil.toFront(this._image);
		}
		return this;
	},

	bringToBack: function () {
		if (this._map) {
			L.DomUtil.toBack(this._image);
		}
		return this;
	},

	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	getAttribution: function () {
		return this.options.attribution;
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	getBounds: function () {
		return this._bounds;
	},

	_initImage: function () {
		var img = this._image = L.DomUtil.create('img',
				'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : ''));

		img.onselectstart = L.Util.falseFn;
		img.onmousemove = L.Util.falseFn;

		img.onload = L.bind(this.fire, this, 'load');
		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var bounds = new L.Bounds(
			this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), e.zoom, e.center),
		    this._map._latLngToNewLayerPoint(this._bounds.getSouthEast(), e.zoom, e.center));

		var offset = bounds.min.add(bounds.getSize()._multiplyBy((1 - 1 / e.scale) / 2));

		L.DomUtil.setTransform(this._image, offset, e.scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new L.Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		L.DomUtil.setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		L.DomUtil.setOpacity(this._image, this.options.opacity);
	}
});

L.imageOverlay = function (url, bounds, options) {
	return new L.ImageOverlay(url, bounds, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.ProgressOverlay is used to overlay progress images over the map.
 */

L.ProgressOverlay = L.Layer.extend({

	options: {
		spinnerSpeed: 15
	},

	initialize: function (latlng, size) {
		this._latlng = L.latLng(latlng);
		this._size = size;
		this._initLayout();
	},

	onAdd: function () {
		if (this._container) {
			this.getPane().appendChild(this._container);
			this.update();
		}

		this._spinnerInterval = L.LOUtil.startSpinner(this._spinnerCanvas, this.options.spinnerSpeed);
		this._map.on('moveend', this.update, this);
	},

	onRemove: function () {
		if (this._container) {
			this.getPane().removeChild(this._container);
		}

		if (this._spinnerInterval) {
			clearInterval(this._spinnerInterval);
		}
	},

	update: function () {
		if (this._container && this._map) {
			var origin = new L.Point(0, 0);
			var paneOffset = this._map.layerPointToContainerPoint(origin);
			var sizeOffset = this._size.divideBy(2, true);
			var position = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(position.subtract(paneOffset).subtract(sizeOffset));
		}
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'leaflet-progress-layer');
		this._spinner = L.DomUtil.create('div', 'leaflet-progress-spinner', this._container);
		this._spinnerCanvas = L.DomUtil.create('canvas', 'leaflet-progress-spinner-canvas', this._spinner);
		this._label = L.DomUtil.create('div', 'leaflet-progress-label', this._container);
		this._progress = L.DomUtil.create('div', 'leaflet-progress', this._container);
		this._bar = L.DomUtil.create('span', '', this._progress);
		this._value = L.DomUtil.create('span', '', this._bar);

		L.DomUtil.setStyle(this._value, 'line-height', this._size.y + 'px');

		this._container.style.width  = this._size.x + 'px';

		L.DomEvent
			.disableClickPropagation(this._progress)
			.disableScrollPropagation(this._container);
	},

	_setPos: function (pos) {
		L.DomUtil.setPosition(this._container, pos);
	},

	setLabel: function (label) {
		if (this._label.innerHTML !== label) {
			this._label.innerHTML = label;
		}
	},

	setBar: function (bar) {
		if (bar) {
			this._progress.style.visibility = '';
		}
		else {
			this._progress.style.visibility = 'hidden';
		}
	},

	setValue: function (value) {
		this._bar.style.width = value + '%';
		this._value.innerHTML = value + '%';
	}
});

L.progressOverlay = function (latlng, size) {
	return new L.ProgressOverlay(latlng, size);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.ClipboardContainer is used to overlay the hidden clipbaord container on the map
 */

L.ClipboardContainer = L.Layer.extend({

	initialize: function () {
		this._initLayout();
	},

	onAdd: function () {
		if (this._container) {
			this.getPane().appendChild(this._container);
			this.update();
		}

		L.DomEvent.on(this._textArea, 'copy cut paste ' +
		              'keydown keypress keyup ' +
		              'compositionstart compositionupdate compositionend textInput',
		              this._map._handleDOMEvent, this._map);
	},

	onRemove: function () {
		if (this._container) {
			this.getPane().removeChild(this._container);
		}

		L.DomEvent.off(this._textArea, 'copy cut paste ' +
		               'keydown keypress keyup ' +
		               'compositionstart compositionupdate compositionend textInput',
		               this._map._handleDOMEvent, this._map);
	},

	focus: function(focus) {
		if (focus === false) {
			this._textArea.blur();
		} else {
			this._textArea.focus();
		}
	},

	select: function() {
		this._textArea.select();
	},

	getValue: function() {
		return this._textArea.value;
	},

	setValue: function(val) {
		this._textArea.value = val;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		this.update();
	},

	update: function () {
		if (this._container && this._map && this._latlng) {
			var position = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(position);
		}
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'clipboard-container');
		this._container.id = 'doc-clipboard-container';
		this._textArea = L.DomUtil.create('input', 'clipboard', this._container);
		this._textArea.setAttribute('type', 'text');
		this._textArea.setAttribute('autocorrect', 'off');
		this._textArea.setAttribute('autocapitalize', 'off');
		this._textArea.setAttribute('autocomplete', 'off');
		this._textArea.setAttribute('spellcheck', 'false');
	},

	activeElement: function () {
		return this._textArea;
	},

	showCursor: function () {
		if (!this._map._docLayer._cursorMarker) {
			return;
		}

		this._map.addLayer(this._map._docLayer._cursorMarker);

		// move the hidden input field with the cursor
		var cursorPos = this._map._docLayer._visibleCursor.getNorthWest();
		L.DomUtil.setPosition(this._container, this._map.latLngToLayerPoint(L.latLng(cursorPos)).round());
	},

	hideCursor: function () {
		if (!this._map._docLayer._cursorMarker) {
			return;
		}

		this._map.removeLayer(this._map._docLayer._cursorMarker);
	},

	_setPos: function (pos) {
		L.DomUtil.setPosition(this._container, pos);
	}
});

L.clipboardContainer = function () {
	return new L.ClipboardContainer();
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
 */

L.Icon = L.Class.extend({
	/*
	options: {
		iconUrl: (String) (required)
		iconRetinaUrl: (String) (optional, used for retina devices if detected)
		iconSize: (Point) (can be set through CSS)
		iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
		popupAnchor: (Point) (if not specified, popup opens in the anchor point)
		shadowUrl: (String) (no shadow by default)
		shadowRetinaUrl: (String) (optional, used for retina devices if detected)
		shadowSize: (Point)
		shadowAnchor: (Point)
		className: (String)
	},
	*/

	initialize: function (options) {
		L.setOptions(this, options);
	},

	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var size = L.point(options[name + 'Size']);
		var anchor = L.point(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.x !== undefined && size.y !== undefined && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			if (size.x !== undefined)
				img.style.width  = size.x + 'px';
			if (size.y !== undefined)
				img.style.height = size.y + 'px';
		}

	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return L.Browser.retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});

L.icon = function (options) {
	return new L.Icon(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Icon.Default is the blue marker icon used by default in Leaflet.
 */

L.Icon.Default = L.Icon.extend({

	options: {
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		var key = name + 'Url';

		if (this.options[key]) {
			return this.options[key];
		}

		var path = L.Icon.Default.imagePath;

		if (!path) {
			throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
		}

		return path + '/marker-' + name + (L.Browser.retina && name === 'icon' ? '-2x' : '') + '.png';
	}
});

L.Icon.Default.imagePath = (function () {
	var scripts = document.getElementsByTagName('script'),
	    leafletRe = /[\/^]loleaflet/;

	var i, len, src, path;
	for (i = 0, len = scripts.length; i < len; i++) {
		src = scripts[i].src;
		if (src.match(leafletRe)) {
			path = src.substring(0, src.lastIndexOf('/'));
			return (path ? path + '/' : '') + 'images';
		}
	}
}());

/* -*- js-indent-level: 8 -*- */
/*
 * L.Marker is used to display clickable/draggable icons on the map.
 */

L.Marker = L.Layer.extend({

	options: {
		pane: 'markerPane',

		icon: new L.Icon.Default(),
		// title: '',
		// alt: '',
		interactive: true,
		draggable: false,
		keyboard: true,
		zIndexOffset: 0,
		opacity: 1,
		// riseOnHover: false,
		riseOffset: 250
	},

	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
	},

	setDraggable: function(val) {
		if (!this.dragging) {
			this.options.draggable = val;
			return;
		}

		if (val) {
			this.dragging.enable();
		} else {
			this.dragging.disable();
		}
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		this._initIcon();
		this.update();
	},

	onRemove: function () {
		if (this.dragging && this.dragging.enabled()) {
			this.dragging.removeHooks();
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		var events = {viewreset: this.update};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	getLatLng: function () {
		return this._latlng;
	},

	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = L.latLng(latlng);
		this.update();
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	update: function () {

		if (this._icon) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}
			if (options.alt) {
				icon.alt = options.alt;
			}
		}

		L.DomUtil.addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;
		this._initInteraction();

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			L.DomUtil.addClass(newShadow, classToAdd);
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		if (newShadow && addShadow) {
			this.getPane('shadowPane').appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		L.DomUtil.remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			L.DomUtil.remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {
		L.DomUtil.setPosition(this._icon, pos);

		if (this._shadow) {
			L.DomUtil.setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		this._icon.style.zIndex = this._zIndex + offset;
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		L.DomUtil.addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (L.Handler.MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new L.Handler.MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		L.DomUtil.setOpacity(this._icon, opacity);

		if (this._shadow) {
			L.DomUtil.setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	}
});

L.marker = function (latlng, options) {
	return new L.Marker(latlng, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Cursor blinking cursor.
 */

L.Cursor = L.Layer.extend({

	options: {
		opacity: 1,
		zIndex: 1000
	},

	initialize: function (latlng, size, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
		this._size = L.point(size);
		this._initLayout();
	},

	onAdd: function () {
		if (!this._container) {
			this._initLayout();
		}

		this.update();
		this.getPane().appendChild(this._container);
	},

	onRemove: function () {
		if (this._container) {
			this.getPane().removeChild(this._container);
		}
	},

	getEvents: function () {
		var events = {viewreset: this.update};

		return events;
	},

	getLatLng: function () {
		return this._latlng;
	},

	setLatLng: function (latlng, size) {
		var oldLatLng = this._latlng;
		this._latlng = L.latLng(latlng);
		this._size = L.point(size);
		this.update();
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	update: function () {
		if (this._container && this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setSize();
			this._setPos(pos);
		}
		return this;
	},

	setOpacity: function (opacity) {
		if (this._container) {
			L.DomUtil.setOpacity(this._cursor, opacity);
		}
	},

	showCursorHeader: function() {
		if (this._cursorHeader) {
			L.DomUtil.setStyle(this._cursorHeader, 'visibility', 'visible');

			clearTimeout(this._blinkTimeout);
			this._blinkTimeout = setTimeout(L.bind(function() {
				L.DomUtil.setStyle(this._cursorHeader, 'visibility', 'hidden');
			}, this), this.options.headerTimeout);
		}
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'leaflet-cursor-container');
		if (this.options.header) {
			this._cursorHeader = L.DomUtil.create('div', 'leaflet-cursor-header', this._container);

			this._cursorHeader.innerHTML = this.options.headerName;

			clearTimeout(this._blinkTimeout);
			this._blinkTimeout = setTimeout(L.bind(function() {
				L.DomUtil.setStyle(this._cursorHeader, 'visibility', 'hidden');
			}, this), this.options.headerTimeout);
		}
		this._cursor = L.DomUtil.create('div', 'leaflet-cursor', this._container);
		if (this.options.blink) {
			L.DomUtil.addClass(this._cursor, 'blinking-cursor');
		}

		if (this.options.color) {
			L.DomUtil.setStyle(this._cursorHeader, 'background', this.options.color);
			L.DomUtil.setStyle(this._cursor, 'background', this.options.color);
		}

		L.DomEvent
			.disableClickPropagation(this._cursor)
			.disableScrollPropagation(this._container);
	},

	_setPos: function (pos) {
		L.DomUtil.setPosition(this._container, pos);
		this._container.style.zIndex = this.options.zIndex;
		// Restart blinking animation
		if (this.options.blink) {
			L.DomUtil.removeClass(this._cursor, 'blinking-cursor');
			void this._cursor.offsetWidth;
			L.DomUtil.addClass(this._cursor, 'blinking-cursor');
		}
	},

	_setSize: function () {
		this._cursor.style.height = this._size.y + 'px';
		this._container.style.top = '-' + (this._container.clientHeight - this._size.y - 2) / 2 + 'px';
	}
});

L.cursor = function (latlng, size, options) {
	return new L.Cursor(latlng, size, options);
};

L.Cursor.hotSpot = {
	fill: {x: 7, y: 16}
};

L.Cursor.customCursors = [
	'fill'
];

L.Cursor.isCustomCursor = function (cursorName) {
	return (L.Cursor.customCursors.indexOf(cursorName) !== -1);
};

L.Cursor.getCustomCursor = function (cursorName) {
	var customCursor;

	if (L.Cursor.isCustomCursor(cursorName)) {
		var cursorHotSpot = L.Cursor.hotSpot[cursorName] || {x: 0, y: 0};
		customCursor = L.Browser.ie ? // IE10 does not like item with left/top position in the url list
			'url(' + L.Cursor.imagePath + '/' + cursorName + '.cur), default' :
			'url(' + L.Cursor.imagePath + '/' + cursorName + '.png) ' + cursorHotSpot.x + ' ' + cursorHotSpot.y + ', default';
	}
	return customCursor;
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
 * to use with L.Marker.
 */

L.DivIcon = L.Icon.extend({
	options: {
		iconSize: [12, 12], // also can be set through CSS
		/*
		iconAnchor: (Point)
		popupAnchor: (Point)
		html: (String)
		bgPos: (Point)
		*/
		className: 'leaflet-div-icon',
		html: false
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		L.DomEvent.on(div, 'contextmenu', L.DomEvent.preventDefault);
		div.innerHTML = options.html !== false ? options.html : '';

		if (options.bgPos) {
			div.style.backgroundPosition = (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

L.divIcon = function (options) {
	return new L.DivIcon(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Popup is used for displaying popups on the map.
 */

L.Map.mergeOptions({
	closePopupOnClick: true
});

L.Popup = L.Layer.extend({

	options: {
		pane: 'popupPane',

		minWidth: 50,
		maxWidth: 300,
		// maxHeight: <Number>,
		offset: [0, 7],

		autoPan: true,
		autoPanPadding: [5, 5],
		// autoPanPaddingTopLeft: <Point>,
		// autoPanPaddingBottomRight: <Point>,

		closeButton: true,
		autoClose: true,
		// keepInView: false,
		// className: '',
		zoomAnimation: true
	},

	initialize: function (options, source) {
		L.setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && this.options.zoomAnimation;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			L.DomUtil.setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			L.DomUtil.setOpacity(this._container, 1);
		}

		map.fire('popupopen', {popup: this});

		if (this._source) {
			this._source.fire('popupopen', {popup: this}, true);
		}
	},

	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			L.DomUtil.setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(L.bind(L.DomUtil.remove, L.DomUtil, this._container), 200);
		} else {
			L.DomUtil.remove(this._container);
		}

		map.fire('popupclose', {popup: this});

		if (this._source) {
			this._source.fire('popupclose', {popup: this}, true);
		}
	},

	getLatLng: function () {
		return this._latlng;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	getContent: function () {
		return this._content;
	},

	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {viewreset: this._updatePosition},
		    options = this.options;

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		if ('closeOnClick' in options ? options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}
		if (options.keepInView) {
			events.moveend = this._adjustPan;
		}
		return events;
	},

	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = L.DomUtil.create('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'));

		if (this.options.closeButton) {
			var closeButton = this._closeButton = L.DomUtil.create('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
		}

		var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
		this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

		L.DomEvent
			.disableClickPropagation(wrapper)
			.disableScrollPropagation(this._contentNode)
			.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

		this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
		this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);

		if (this.options.backgroundColor) {
			this._tip.style['background-color'] = this._wrapper.style['background-color'] = this.options.backgroundColor;
		}

		if (this.options.color) {
			this._wrapper.style['color'] = this.options.color;
		}

	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;

		if (typeof this._content === 'string') {
			node.innerHTML = this._content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(this._content);
		}
		this.fire('contentupdate');
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			L.DomUtil.addClass(container, scrolledClass);
		} else {
			L.DomUtil.removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = L.point(this.options.offset);

		if (this._zoomAnimated) {
			L.DomUtil.setPosition(this._container, pos);
		} else {
			offset = offset.add(pos);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		L.DomUtil.setPosition(this._container, pos);
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }

		var map = this._map,
		    containerHeight = this._container.offsetHeight,
		    containerWidth = this._containerWidth,
		    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

		if (this._zoomAnimated) {
			layerPos._add(L.DomUtil.getPosition(this._container));
		}

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = L.point(this.options.autoPanPadding),
		    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		L.DomEvent.stop(e);
	}
});

L.popup = function (options, source) {
	return new L.Popup(options, source);
};


L.Map.include({
	openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
		if (!(popup instanceof L.Popup)) {
			var content = popup;

			popup = new L.Popup(options).setContent(content);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Adds popup-related methods to all layers.
 */

L.Layer.include({

	bindPopup: function (content, options) {

		if (content instanceof L.Popup) {
			L.setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new L.Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	openPopup: function (latlng) {
		if (this._popup && this._map) {
			this._map.openPopup(this._popup, latlng || this._latlng || this.getCenter());
		}
		return this;
	},

	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	togglePopup: function () {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup();
			}
		}
		return this;
	},

	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		this._map.openPopup(this._popup, e.latlng);
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Popup extension to L.Marker, adding popup-related methods.
 */

L.Marker.include({
	bindPopup: function (content, options) {
		var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0])
			.add(L.Popup.prototype.options.offset);

		options = L.extend({offset: anchor}, options);

		return L.Layer.prototype.bindPopup.call(this, content, options);
	},

	_openPopup: L.Layer.prototype.togglePopup
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.LayerGroup is a class to combine several layers into one so that
 * you can manipulate the group (e.g. add/remove it) as one layer.
 */

L.LayerGroup = L.Layer.extend({

	initialize: function (layers) {
		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	clearLayers: function () {
		for (var i in this._layers) {
			this.removeLayer(this._layers[i]);
		}
		return this;
	},

	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		for (var i in this._layers) {
			map.addLayer(this._layers[i]);
		}
	},

	onRemove: function (map) {
		for (var i in this._layers) {
			map.removeLayer(this._layers[i]);
		}
	},

	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	getLayer: function (id) {
		return this._layers[id];
	},

	getLayers: function () {
		var layers = [];

		for (var i in this._layers) {
			layers.push(this._layers[i]);
		}
		return layers;
	},

	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	getLayerId: function (layer) {
		return L.stamp(layer);
	}
});

L.layerGroup = function (layers) {
	return new L.LayerGroup(layers);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
 * shared between a group of interactive layers (like vectors or markers).
 */

L.FeatureGroup = L.LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		L.LayerGroup.prototype.addLayer.call(this, layer);

		if (this._popupContent && layer.bindPopup) {
			layer.bindPopup(this._popupContent, this._popupOptions);
		}

		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		L.LayerGroup.prototype.removeLayer.call(this, layer);

		if (this._popupContent) {
			this.invoke('unbindPopup');
		}

		return this.fire('layerremove', {layer: layer});
	},

	bindPopup: function (content, options) {
		this._popupContent = content;
		this._popupOptions = options;
		return this.invoke('bindPopup', content, options);
	},

	openPopup: function (latlng) {
		// open popup on the first layer
		for (var id in this._layers) {
			this._layers[id].openPopup(latlng);
			break;
		}
		return this;
	},

	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	getBounds: function () {
		var bounds = new L.LatLngBounds();

		this.eachLayer(function (layer) {
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		});

		return bounds;
	}
});

L.featureGroup = function (layers) {
	return new L.FeatureGroup(layers);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Renderer is a base class for renderer implementations (SVG, Canvas);
 * handles renderer container, bounds and zoom animation.
 */

L.Renderer = L.Layer.extend({

	options: {
		// how much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction; defaults to clip with the map view
		padding: 0
	},

	initialize: function (options) {
		L.setOptions(this, options);
		L.stamp(this);
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				L.DomUtil.addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
	},

	onRemove: function () {
		L.DomUtil.remove(this._container);
	},

	getEvents: function () {
		var events = {
			moveend: this._update
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	_animateZoom: function (e) {
		var origin = e.origin.subtract(this._map._getCenterLayerPoint()),
		    offset = this._bounds.min.add(origin.multiplyBy(1 - e.scale)).add(e.offset).round();

		L.DomUtil.setTransform(this._container, offset, e.scale);
	},

	_update: function () {
		// update pixel bounds of renderer container (for positioning/sizing/clipping later)
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new L.Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
	}
});


L.Map.include({
	// used by each vector layer to decide which renderer to use
	getRenderer: function (layer) {
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			renderer = this._renderer = (L.SVG && L.svg()) || (L.Canvas && L.canvas());
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = (L.SVG && L.svg({pane: name})) || (L.Canvas && L.canvas({pane: name}));
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Path is the base class for all Leaflet vector layers like polygons and circles.
 */

L.Path = L.Layer.extend({

	options: {
		stroke: true,
		color: '#3388ff',
		weight: 3,
		opacity: 1,
		lineCap: 'round',
		lineJoin: 'round',
		// dashArray: null
		// dashOffset: null

		// fill: false
		// fillColor: same as color by default
		fillOpacity: 0.2,
		fillRule: 'evenodd',

		// className: ''
		interactive: true
	},

	onAdd: function () {
		this._renderer = this._map.getRenderer(this);
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	getEvents: function () {
		return {
			viewreset: this._project,
			moveend: this._update
		};
	},

	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	setStyle: function (style) {
		L.setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
		}
		return this;
	},

	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
 */

L.Path.include({

	bindPopup: function (content, options) {

		if (content instanceof L.Popup) {
			this._popup = content;
		} else {
			if (!this._popup || options) {
				this._popup = new L.Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				mouseover: this._openPopup,
				mouseout: this._delayClose,
				remove: this.closePopup,
				add: this.firstPopup
			});

			this._popupHandlersAdded = true;
		}

		return this;
	},

	unbindPopup: function () {
		if (this._popup) {
			this._popup = null;
			this.off({
				mouseover: this._openPopup,
				mouseout: this._delayClose,
				remove: this.closePopup,
				add: this.firstPopup
			});

			this._popupHandlersAdded = false;
		}
		return this;
	},

	firstPopup: function () {
		if (this._popup) {
			this._openPopup({latlng: this._bounds.getCenter()});
		}
	},

	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	_delayClose: function () {
		clearTimeout(this._timer);
		this._timer = setTimeout(L.bind(this.closePopup, this), 3000);
	},

	_openPopup: function (e) {
		if (!this._map.hasLayer(this._popup)) {
			this._popup.setLatLng(e.latlng);
			this._map.openPopup(this._popup);
			this._delayClose();
		}
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.LineUtil contains different utility functions for line segments
 * and polylines (clipping, simplification, distances, etc.)
 */
/* global Uint8Array */
L.LineUtil = {

	// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
	// Improves rendering performance dramatically by lessening the number of points to draw.

	simplify: function (points, tolerance) {
		if (!tolerance || !points.length) {
			return points.slice();
		}

		var sqTolerance = tolerance * tolerance;

		// stage 1: vertex reduction
		points = this._reducePoints(points, sqTolerance);

		// stage 2: Douglas-Peucker simplification
		points = this._simplifyDP(points, sqTolerance);

		return points;
	},

	// distance from a point to a segment between two points
	pointToSegmentDistance:  function (p, p1, p2) {
		return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
	},

	closestPointOnSegment: function (p, p1, p2) {
		return this._sqClosestPointOnSegment(p, p1, p2);
	},

	// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
	_simplifyDP: function (points, sqTolerance) {

		var len = points.length,
		    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
		    markers = new ArrayConstructor(len);

		markers[0] = markers[len - 1] = 1;

		this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

		var i,
		    newPoints = [];

		for (i = 0; i < len; i++) {
			if (markers[i]) {
				newPoints.push(points[i]);
			}
		}

		return newPoints;
	},

	_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

		var maxSqDist = 0,
		    index, i, sqDist;

		for (i = first + 1; i <= last - 1; i++) {
			sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

			if (sqDist > maxSqDist) {
				index = i;
				maxSqDist = sqDist;
			}
		}

		if (maxSqDist > sqTolerance) {
			markers[index] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, first, index);
			this._simplifyDPStep(points, markers, sqTolerance, index, last);
		}
	},

	// reduce points that are too close to each other to a single point
	_reducePoints: function (points, sqTolerance) {
		var reducedPoints = [points[0]];

		for (var i = 1, prev = 0, len = points.length; i < len; i++) {
			if (this._sqDist(points[i], points[prev]) > sqTolerance) {
				reducedPoints.push(points[i]);
				prev = i;
			}
		}
		if (prev < len - 1) {
			reducedPoints.push(points[len - 1]);
		}
		return reducedPoints;
	},

	// Cohen-Sutherland line clipping algorithm.
	// Used to avoid rendering parts of a polyline that are not currently visible.

	clipSegment: function (a, b, bounds, useLastCode, round) {
		var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
		    codeB = this._getBitCode(b, bounds),

		    codeOut, p, newCode;

		// save 2nd code to avoid calculating it on the next segment
		this._lastCode = codeB;

		while (true) {
			// if a,b is inside the clip window (trivial accept)
			if (!(codeA | codeB)) {
				return [a, b];
			// if a,b is outside the clip window (trivial reject)
			} else if (codeA & codeB) {
				return false;
			// other cases
			} else {
				codeOut = codeA || codeB;
				p = this._getEdgeIntersection(a, b, codeOut, bounds, round);
				newCode = this._getBitCode(p, bounds);

				if (codeOut === codeA) {
					a = p;
					codeA = newCode;
				} else {
					b = p;
					codeB = newCode;
				}
			}
		}
	},

	_getEdgeIntersection: function (a, b, code, bounds, round) {
		var dx = b.x - a.x,
		    dy = b.y - a.y,
		    min = bounds.min,
		    max = bounds.max,
		    x, y;

		if (code & 8) { // top
			x = a.x + dx * (max.y - a.y) / dy;
			y = max.y;

		} else if (code & 4) { // bottom
			x = a.x + dx * (min.y - a.y) / dy;
			y = min.y;

		} else if (code & 2) { // right
			x = max.x;
			y = a.y + dy * (max.x - a.x) / dx;

		} else if (code & 1) { // left
			x = min.x;
			y = a.y + dy * (min.x - a.x) / dx;
		}

		return new L.Point(x, y, round);
	},

	_getBitCode: function (/*Point*/ p, bounds) {
		var code = 0;

		if (p.x < bounds.min.x) { // left
			code |= 1;
		} else if (p.x > bounds.max.x) { // right
			code |= 2;
		}

		if (p.y < bounds.min.y) { // bottom
			code |= 4;
		} else if (p.y > bounds.max.y) { // top
			code |= 8;
		}

		return code;
	},

	// square distance (to avoid unnecessary Math.sqrt calls)
	_sqDist: function (p1, p2) {
		var dx = p2.x - p1.x,
		    dy = p2.y - p1.y;
		return dx * dx + dy * dy;
	},

	// return closest point on segment or distance to that point
	_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
		var x = p1.x,
		    y = p1.y,
		    dx = p2.x - x,
		    dy = p2.y - y,
		    dot = dx * dx + dy * dy,
		    t;

		if (dot > 0) {
			t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

			if (t > 1) {
				x = p2.x;
				y = p2.y;
			} else if (t > 0) {
				x += dx * t;
				y += dy * t;
			}
		}

		dx = p.x - x;
		dy = p.y - y;

		return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
	}
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Polyline implements polyline vector layer (a set of points connected with lines)
 */

L.Polyline = L.Path.extend({

	options: {
		// how much to simplify the polyline on each zoom level
		// more = better performance and smoother look, less = more accurate
		smoothFactor: 1.0
		// noClip: false
	},

	initialize: function (latlngs, options) {
		L.setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	getLatLngs: function () {
		// TODO rings
		return this._latlngs;
	},

	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	addLatLng: function (latlng) {
		// TODO rings
		latlng = L.latLng(latlng);
		this._latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	spliceLatLngs: function () {
		// TODO rings
		var removed = [].splice.apply(this._latlngs, arguments);
		this._setLatLngs(this._latlngs);
		this.redraw();
		return removed;
	},

	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = L.LineUtil._sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	getCenter: function () {
		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	getBounds: function () {
		return this._bounds;
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new L.LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = this._flat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = L.latLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_flat: function (latlngs) {
		// true if it's a flat array of latlngs; false if nested
		return !L.Util.isArray(latlngs[0]) || typeof latlngs[0][0] !== 'object';
	},

	_project: function () {
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings);

		// project bounds as well to use later for Canvas hit detection/etc.
		var w = this._clickTolerance(),
		    p = new L.Point(w, -w);

		if (this._latlngs.length) {
			this._pxBounds = new L.Bounds(
				this._map.latLngToLayerPoint(this._bounds.getSouthWest())._subtract(p),
				this._map.latLngToLayerPoint(this._bounds.getNorthEast())._add(p));
		}
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result) {

		var flat = latlngs[0] instanceof L.LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		this._parts = [];

		var parts = this._parts,
		    bounds = this._renderer._bounds,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = L.LineUtil.clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = L.LineUtil.simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	}
});

L.polyline = function (latlngs, options) {
	return new L.Polyline(latlngs, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.PolyUtil contains utility functions for polygons (clipping, etc.).
 */

L.PolyUtil = {};

/*
 * Sutherland-Hodgeman polygon clipping algorithm.
 * Used to avoid rendering parts of a polygon that are not currently visible.
 */
L.PolyUtil.clipPolygon = function (points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p,
	    lu = L.LineUtil;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = lu._getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = lu._getEdgeIntersection(b, a, edge, bounds, round);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = lu._getEdgeIntersection(b, a, edge, bounds, round);
				p._code = lu._getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
};

L.PolyUtil.rectanglesToPolygons = function (rectangles, docLayer) {
	// algorithm found here http://stackoverflow.com/questions/13746284/merging-multiple-adjacent-rectangles-into-one-polygon
	var eps = 20;
	// Glue rectangles if the space between them is less then eps
	for (var i = 0; i < rectangles.length - 1; i++) {
		for (var j = i + 1; j < rectangles.length; j++) {
			for (var k = 0; k < rectangles[i].length; k++) {
				for (var l = 0; l < rectangles[j].length; l++) {
					if (Math.abs(rectangles[i][k].x - rectangles[j][l].x) < eps) {
						rectangles[j][l].x = rectangles[i][k].x;
					}
					if (Math.abs(rectangles[i][k].y - rectangles[j][l].y) < eps) {
						rectangles[j][l].y = rectangles[i][k].y;
					}
				}
			}
		}
	}

	var points = {};
	for (i = 0; i < rectangles.length; i++) {
		for (j = 0; j < rectangles[i].length; j++) {
			if (points[rectangles[i][j]]) {
				delete points[rectangles[i][j]];
			}
			else {
				points[rectangles[i][j]] = rectangles[i][j];
			}
		}
	}

	function getKeys(points) {
		var keys = [];
		for (var key in points) {
			if (points.hasOwnProperty(key)) {
				keys.push(key);
			}
		}
		return keys;
	}

	function xThenY(aStr, bStr) {
		var a = aStr.match(/\d+/g);
		a[0] = parseInt(a[0]);
		a[1] = parseInt(a[1]);
		var b = bStr.match(/\d+/g);
		b[0] = parseInt(b[0]);
		b[1] = parseInt(b[1]);

		if (a[0] < b[0] || (a[0] === b[0] && a[1] < b[1])) {
			return -1;
		}
		else if (a[0] === b[0] && a[1] === b[1]) {
			return 0;
		}
		else {
			return 1;
		}
	}

	function yThenX(aStr, bStr) {
		var a = aStr.match(/\d+/g);
		a[0] = parseInt(a[0]);
		a[1] = parseInt(a[1]);
		var b = bStr.match(/\d+/g);
		b[0] = parseInt(b[0]);
		b[1] = parseInt(b[1]);

		if (a[1] < b[1] || (a[1] === b[1] && a[0] < b[0])) {
			return -1;
		}
		else if (a[0] === b[0] && a[1] === b[1]) {
			return 0;
		}
		else {
			return 1;
		}
	}

	var sortX = getKeys(points).sort(xThenY);
	var sortY = getKeys(points).sort(yThenX);

	var edgesH = {};
	var edgesV = {};

	var len = getKeys(points).length;
	i = 0;
	while (i < len) {
		var currY = points[sortY[i]].y;
		while (i < len && points[sortY[i]].y === currY) {
			edgesH[sortY[i]] = sortY[i + 1];
			edgesH[sortY[i + 1]] = sortY[i];
			i += 2;
		}
	}

	i = 0;
	while (i < len) {
		var currX = points[sortX[i]].x;
		while (i < len && points[sortX[i]].x === currX) {
			edgesV[sortX[i]] = sortX[i + 1];
			edgesV[sortX[i + 1]] = sortX[i];
			i += 2;
		}
	}

	var polygons = [];
	var edgesHKeys = getKeys(edgesH);
	while (edgesHKeys.length > 0) {
		var p = [[edgesHKeys[0], 0]];
		while (true) {
			var curr = p[p.length - 1][0];
			var e = p[p.length - 1][1];
			if (e === 0) {
				var nextVertex = edgesV[curr];
				delete edgesV[curr];
				p.push([nextVertex, 1]);
			}
			else {
				nextVertex = edgesH[curr];
				delete edgesH[curr];
				p.push([nextVertex, 0]);
			}
			if (p[p.length - 1][0] === p[0][0] && p[p.length - 1][1] === p[0][1]) {
				p.pop();
				break;
			}
		}
		var polygon = [];
		for (i = 0; i < p.length; i++) {
			polygon.push(docLayer._twipsToLatLng(points[p[i][0]]));
			delete edgesH[p[i][0]];
			delete edgesV[p[i][0]];
		}
		polygon.push(docLayer._twipsToLatLng(points[p[0][0]]));
		edgesHKeys = getKeys(edgesH);
		polygons.push(polygon);
	}
	return polygons;
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Polygon implements polygon vector layer (closed polyline with a fill inside).
 */

L.Polygon = L.Polyline.extend({

	options: {
		fill: true
	},

	getCenter: function () {
		var i, j, len, p1, p2, f, area, x, y,
		    points = this._rings[0];

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		return this._map.layerPointToLatLng([x / area, y / area]);
	},

	_convertLatLngs: function (latlngs) {
		var result = L.Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof L.LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_clipPoints: function () {
		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new L.Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new L.Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = L.PolyUtil.clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	}
});

L.polygon = function (latlngs, options) {
	return new L.Polygon(latlngs, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

L.Rectangle = L.Polygon.extend({
	initialize: function (latLngBounds, options) {
		L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	setBounds: function (latLngBounds) {
		this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = L.latLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});

L.rectangle = function (latLngBounds, options) {
	return new L.Rectangle(latLngBounds, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.CircleMarker is a circle overlay with a permanent pixel radius.
 */

L.CircleMarker = L.Path.extend({

	options: {
		fill: true,
		radius: 10
	},

	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
		this._radius = this.options.radius;
		if (window.ThisIsAMobileApp)
			this._radius *= 3;
	},

	setLatLng: function (latlng) {
		this._latlng = L.latLng(latlng);
		this.redraw();
		return this.fire('move', {latlng: this._latlng});
	},

	getLatLng: function () {
		return this._latlng;
	},

	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		if (window.ThisIsAMobileApp)
			this._radius *= 3;
		return this.redraw();
	},

	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		L.Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	}
});

L.circleMarker = function (latlng, options) {
	return new L.CircleMarker(latlng, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Circle is a circle overlay (with a certain radius in meters).
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion)
 */

L.Circle = L.CircleMarker.extend({

	initialize: function (latlng, radius, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
		this._mRadius = radius;
	},

	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	getRadius: function () {
		return this._mRadius;
	},

	getBounds: function () {
		var half = [this._radius, this._radiusY];

		return new L.LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: L.Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === L.CRS.Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / L.CRS.Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
			this._radiusY = Math.max(Math.round(p.y - top.y), 1);

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

L.circle = function (latlng, radius, options) {
	return new L.Circle(latlng, radius, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.SVG renders vector layers with SVG. All SVG-specific code goes here.
 */

L.SVG = L.Renderer.extend({

	_initContainer: function () {
		this._container = L.SVG.create('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		L.Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		L.DomUtil.setPosition(container, b.min);

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		L.DomUtil.setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = L.SVG.create('path');

		if (layer.options.className) {
			L.DomUtil.addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			L.DomUtil.addClass(path, 'leaflet-interactive');

			var events = ['mouseenter', 'mouseout'];
			for (var i = 0; i < events.length; i++) {
				L.DomEvent.on(path, events[i], this._fireMouseEvent, this);
			}
		}

		this._updateStyle(layer);
	},

	_initGroup: function (layer) {
		layer._path = L.SVG.create('g');
	},

	_fireMouseEvent: function (e) {
		if (!this._map || !this.hasEventListeners(e.type)) { return; }

		var map = this._map,
		    containerPoint = map.mouseEventToContainerPoint(e),
		    layerPoint = map.containerPointToLayerPoint(containerPoint),
		    latlng = map.layerPointToLatLng(layerPoint);

		this.fire(e.type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});
	},

	_addGroup: function (layer) {
		this._container.appendChild(layer._path);
	},

	_addPath: function (layer) {
		this._container.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removeGroup: function (layer) {
		L.DomUtil.remove(layer._path);
	},

	_removePath: function (layer) {
		L.DomUtil.remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}

		path.setAttribute('pointer-events', options.pointerEvents || (options.interactive ? 'visiblePainted' : 'none'));
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, L.SVG.pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = layer._radius,
		    r2 = layer._radiusY || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
				'M' + (p.x - r) + ',' + p.y +
				arc + (r * 2) + ',0 ' +
				arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		L.DomUtil.toFront(layer._path);
	},

	_bringToBack: function (layer) {
		L.DomUtil.toBack(layer._path);
	}
});


L.extend(L.SVG, {
	create: function (name) {
		return document.createElementNS('http://www.w3.org/2000/svg', name);
	},

	// generates SVG path string for multiple rings, with each ring turning into "M..L..L.." instructions
	pointsToPath: function (rings, closed) {
		var str = '',
		    i, j, len, len2, points, p;

		for (i = 0, len = rings.length; i < len; i++) {
			points = rings[i];

			for (j = 0, len2 = points.length; j < len2; j++) {
				p = points[j];
				str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
			}

			// closes the ring for polygons; "x" is VML syntax
			str += closed ? (L.Browser.svg ? 'z' : 'x') : '';
		}

		// SVG complains about empty path strings
		return str || 'M0 0';
	}
});

L.Browser.svg = !!(document.createElementNS && L.SVG.create('svg').createSVGRect);

L.svg = function (options) {
	return L.Browser.svg || L.Browser.vml ? new L.SVG(options) : null;
};

L.SVG.include({

	/**
	 * Reset transform matrix
	 */
	_resetTransformPath: function(layer) {
		layer._path.setAttributeNS(null, 'transform', '');
	},

	/**
	 * Applies matrix transformation to SVG
	 * @param {L.Path}         layer
	 * @param {Array.<Number>} matrix
	 */
	transformPath: function(layer, matrix) {
		layer._path.setAttributeNS(null, 'transform',
			'matrix(' + matrix.join(' ') + ')');
	}

});

/* -*- js-indent-level: 8 -*- */
/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

L.Handler = L.Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	enable: function () {
		if (this._enabled) { return; }

		this._enabled = true;
		this.addHooks();
	},

	disable: function () {
		if (!this._enabled) { return; }

		this._enabled = false;
		this.removeHooks();
	},

	enabled: function () {
		return !!this._enabled;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.SVGGroup
 */

L.SVGGroup = L.Layer.extend({

	options: {
		noClip: true
	},

	lastTouchEvent: {
		clientX: 0,
		clientY: 0
	},

	initialize: function (bounds, options) {
		L.setOptions(this, options);
		this._bounds = bounds;
		this._rect = L.rectangle(bounds, this.options);

		this.on('dragstart scalestart rotatestart', this._showEmbeddedSVG, this);
		this.on('dragend scaleend rotateend', this._hideEmbeddedSVG, this);
	},

	addEmbeddedSVG: function (svgString) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(svgString, 'image/svg+xml');
		var size = L.bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			this._map.latLngToLayerPoint(this._bounds.getSouthEast())).getSize();

		if (doc.lastChild.localName !== 'svg')
			return;

		if (svgString.indexOf('XTEXT_PAINTSHAPE_BEGIN') !== -1) {
			this._svg = this._path.insertBefore(doc.lastChild, this._rect._path);
			this._rect._path.setAttribute('pointer-events', 'visibleStroke');
			this._svg.setAttribute('pointer-events', 'none');
		} else {
			L.DomUtil.remove(this._rect._path);
			this._svg = this._path.appendChild(doc.lastChild);
			this._svg.setAttribute('pointer-events', 'visiblePainted');
			L.DomEvent.on(this._svg, 'mousedown', this._onDragStart, this);
			this._dragShape = this._svg;
		}

		this._svg.setAttribute('opacity', 0);
		this._svg.setAttribute('width', size.x);
		this._svg.setAttribute('height', size.y);

		this._update();
	},

	_onDragStart: function(evt) {
		if (evt.type === 'touchstart') {
			this.lastTouchEvent.clientX = evt.touches[0].clientX;
			this.lastTouchEvent.clientY = evt.touches[0].clientY;
		}

		if (!this._dragShape || !this.dragging)
			return;
		this._moved = false;

		L.DomEvent.on(this._dragShape, 'mousemove', this._onDrag, this);
		L.DomEvent.on(this._dragShape, 'mouseup', this._onDragEnd, this);
		L.DomEvent.on(this._dragShape, 'mouseout', this._onDragEnd, this);

		L.DomEvent.on(this._dragShape, 'touchmove', this._onDrag, this);
		L.DomEvent.on(this._dragShape, 'touchend', this._onDragEnd, this);

		var data = {
			originalEvent: evt,
			containerPoint: this._map.mouseEventToContainerPoint(evt)
		};
		this.dragging._onDragStart(data);

		var pos = this._map.mouseEventToLatLng(evt);
		this.fire('graphicmovestart', {pos: pos});
	},

	_onDrag: function(evt) {
		if (evt.type === 'touchmove') {
			this.lastTouchEvent.clientX = evt.touches[0].clientX;
			this.lastTouchEvent.clientY = evt.touches[0].clientY;
		}

		if (!this._dragShape || !this.dragging)
			return;

		if (!this._moved) {
			this._moved = true;
			this._showEmbeddedSVG();
		}

		var data = {
			originalEvent: evt,
			containerPoint: this._map.mouseEventToContainerPoint(evt)
		};
		this.dragging._onDrag(data);
	},

	_onDragEnd: function(evt) {
		if (evt.type === 'touchend' && evt.touches.length == 0)
			evt.touches[0] = {clientX: this.lastTouchEvent.clientX, clientY: this.lastTouchEvent.clientY};

		if (!this._dragShape || !this.dragging)
			return;
		L.DomEvent.off(this._dragShape, 'mousemove', this._onDrag, this);
		L.DomEvent.off(this._dragShape, 'mouseup', this._onDragEnd, this);
		L.DomEvent.off(this._dragShape, 'mouseout', this._onDragEnd, this);

		L.DomEvent.off(this._dragShape, 'touchmove', this._onDrag, this);
		L.DomEvent.off(this._dragShape, 'touchend', this._onDragEnd, this);

		this._moved = false;
		this._hideEmbeddedSVG();
		var pos = this._map.mouseEventToLatLng(evt);
		this.fire('graphicmoveend', {pos: pos});

		if (evt.type === 'mouseup')
			this.dragging._onDragEnd(evt);
	},

	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getBounds: function () {
		return this._bounds;
	},

	getEvents: function () {
		return {};
	},

	onAdd: function () {
		this._renderer = this._map.getRenderer(this);
		this._renderer._initGroup(this);
		this._renderer._initPath(this._rect);
		this._renderer._addGroup(this);
		if (this._path && this._rect._path) {
			this._rect._map = this._map;
			this._rect._renderer = this._renderer;
			L.DomUtil.addClass(this._path, 'leaflet-control-buttons-disabled');
			this._path.appendChild(this._rect._path);
			this._dragShape = this._rect._path;
			L.DomEvent.on(this._rect._path, 'mousedown', this._onDragStart, this);
			L.DomEvent.on(this._rect._path, 'touchstart', this._onDragStart, this);
		}
		this._update();
	},

	onRemove: function () {
		this._rect._map = this._rect._renderer = null;
		this.removeInteractiveTarget(this._rect._path);
		L.DomUtil.remove(this._rect._path);
		this._renderer._removeGroup(this);
	},

	removeEmbeddedSVG: function () {
		if (this._svg) {
			this._dragShape = null;
			L.DomUtil.remove(this._svg);
			delete this._svg;
			this._update();
		}
	},

	_hideEmbeddedSVG: function () {
		if (this._svg) {
			this._svg.setAttribute('opacity', 0);
		}
	},

	_transform: function(matrix) {
		if (this._renderer) {
			if (matrix) {
				this._renderer.transformPath(this, matrix);
			} else {
				this._renderer._resetTransformPath(this);
				this._update();
			}
		}
		return this;
	},

	_project: function () {
		// console.log()
	},

	_reset: function () {
		this._update();
	},

	_showEmbeddedSVG: function () {
		if (this._svg) {
			this._svg.setAttribute('opacity', 1);
		}
	},

	_update: function () {
		this._rect.setBounds(this._bounds);
		if (this._svg) {
			var point = this._map.latLngToLayerPoint(this._bounds.getNorthWest());
			this._svg.setAttribute('x', point.x);
			this._svg.setAttribute('y', point.y);
		}
	},

	_updatePath: function () {
		this._update();
	}

});

L.svgGroup = function (bounds, options) {
	return new L.SVGGroup(bounds, options);
};

/**
 * Leaflet vector features drag functionality
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */

/**
 * Matrix transform path for SVG/VML
 * Renderer-independent
 */
L.Path.include({

	/**
	 * Applies matrix transformation to SVG
	 * @param {Array.<Number>?} matrix
	 */
	_transform: function(matrix) {
		if (this._renderer) {
			if (matrix) {
				this._renderer.transformPath(this, matrix);
			} else {
				// reset transform matrix
				this._renderer._resetTransformPath(this);
				this._update();
			}
		}
		return this;
	},

	/**
	 * Check if the feature was dragged, that'll supress the click event
	 * on mouseup. That fixes popups for example
	 *
	 * @param  {MouseEvent} e
	 */
	_onMouseClick: function(e) {
		if ((this.dragging && this.dragging.moved()) ||
			(this._map.dragging && this._map.dragging.moved())) {
			return;
		}

		this._fireMouseEvent(e);
	}

});

var END = {
	mousedown:     'mouseup',
	touchstart:    'touchend',
	pointerdown:   'touchend',
	MSPointerDown: 'touchend'
};

var MOVE = {
	mousedown:     'mousemove',
	touchstart:    'touchmove',
	pointerdown:   'touchmove',
	MSPointerDown: 'touchmove'
};

function distance(a, b) {
	var dx = a.x - b.x, dy = a.y - b.y;
	return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Drag handler
 * @class L.Path.Drag
 * @extends {L.Handler}
 */
L.Handler.PathDrag = L.Handler.extend(/** @lends  L.Path.Drag.prototype */ {

	statics: {
		DRAGGING_CLS: 'leaflet-path-draggable',
	},


	/**
	* @param  {L.Path} path
	* @constructor
	*/
	initialize: function(path) {

		/**
		* @type {L.Path}
		*/
		this._path = path;

		/**
		* @type {Array.<Number>}
		*/
		this._matrix = null;

		/**
		* @type {L.Point}
		*/
		this._startPoint = null;

		/**
		* @type {L.Point}
		*/
		this._dragStartPoint = null;

		/**
		* @type {Boolean}
		*/
		this._mapDraggingWasEnabled = false;

	},

	/**
	* Enable dragging
	*/
	addHooks: function() {
		this._path.on('mousedown', this._onDragStart, this);

		this._path.options.className = this._path.options.className ?
			(this._path.options.className + ' ' + L.Handler.PathDrag.DRAGGING_CLS) :
			 L.Handler.PathDrag.DRAGGING_CLS;

		if (this._path._path) {
			L.DomUtil.addClass(this._path._path, L.Handler.PathDrag.DRAGGING_CLS);
		}
	},

	/**
	* Disable dragging
	*/
	removeHooks: function() {
		this._path.off('mousedown', this._onDragStart, this);

		this._path.options.className = this._path.options.className
			.replace(new RegExp('\\s+' + L.Handler.PathDrag.DRAGGING_CLS), '');
		if (this._path._path) {
			L.DomUtil.removeClass(this._path._path, L.Handler.PathDrag.DRAGGING_CLS);
		}

		L.DomEvent.off(document, 'mousemove touchmove', this._onDrag,    this);
		L.DomEvent.off(document, 'mouseup touchend',    this._onDragEnd, this);
	},

	/**
	* @return {Boolean}
	*/
	moved: function() {
		return this._path._dragMoved;
	},

	/**
	* Start drag
	* @param  {L.MouseEvent} evt
	*/
	_onDragStart: function(evt) {
		var eventType = evt.originalEvent._simulated ? 'touchstart' : evt.originalEvent.type;

		this._mouseDown = evt.originalEvent;
		this._mapDraggingWasEnabled = false;
		this._startPoint = evt.containerPoint.clone();
		this._dragStartPoint = evt.containerPoint.clone();
		this._matrix = [1, 0, 0, 1, 0, 0];
		L.DomEvent.stop(evt.originalEvent);

		L.DomUtil.addClass(this._path._renderer._container, 'leaflet-interactive');
		L.DomEvent
			.on(document, MOVE[eventType], this._onDrag,    this)
			.on(document, END[eventType],  this._onDragEnd, this);

		if (this._path._map.dragging.enabled()) {
			// I guess it's required because mousdown gets simulated with a delay
			//this._path._map.dragging._draggable._onUp(evt);

			this._path._map.dragging.disable();
			this._mapDraggingWasEnabled = true;
		}
		this._path._dragMoved = false;

		if (this._path._popup) { // that might be a case on touch devices as well
			this._path._popup._close();
		}

		this._replaceCoordGetters(evt);
	},

	/**
	* Dragging
	* @param  {L.MouseEvent} evt
	*/
	_onDrag: function(evt) {
		L.DomEvent.stop(evt);

		var first = (evt.touches && evt.touches.length >= 1 ? evt.touches[0] : evt);
		var containerPoint = this._path._map.mouseEventToContainerPoint(first);

		// skip taps
		if (evt.type === 'touchmove' && !this._path._dragMoved) {
			var totalMouseDragDistance = this._dragStartPoint.distanceTo(containerPoint);
			if (totalMouseDragDistance <= this._path._map.options.tapTolerance) {
				return;
			}
		}

		var x = containerPoint.x;
		var y = containerPoint.y;

		var dx = x - this._startPoint.x;
		var dy = y - this._startPoint.y;

		if (isNaN(dx) || isNaN(dy))
			return;

		if (this.constraint) {
			if (this.constraint.dragMethod === 'PieSegmentDragging') {
				var initialOffset = this.constraint.initialOffset;
				var dragDirection = this.constraint.dragDirection;

				var dsx = x - this._dragStartPoint.x;
				var dsy = y - this._dragStartPoint.y;
				var additionalOffset = (dsx * dragDirection.x + dsy * dragDirection.y) / this.constraint.range2;
				var currentOffset = (dx * dragDirection.x + dy * dragDirection.y) / this.constraint.range2;

				if (additionalOffset < -initialOffset && currentOffset < 0)
					currentOffset = 0;
				else if (additionalOffset > (1.0 - initialOffset) && currentOffset > 0)
					currentOffset = 0;

				dx = currentOffset * dragDirection.x;
				dy = currentOffset * dragDirection.y;

				x = this._startPoint.x + dx;
				y = this._startPoint.y + dy;
			}
		}

		// Send events only if point was moved
		if (dx || dy) {
			if (!this._path._dragMoved) {
				this._path._dragMoved = true;
				this._path.fire('dragstart', evt);
				// we don't want that to happen on click
				this._path.bringToFront();
			}

			this._matrix[4] += dx;
			this._matrix[5] += dy;

			this._startPoint.x = x;
			this._startPoint.y = y;

			this._path.fire('predrag', evt);
			this._path._transform(this._matrix);
			this._path.fire('drag', evt);
		}
	},

	/**
	* Dragging stopped, apply
	* @param  {L.MouseEvent} evt
	*/
	_onDragEnd: function(evt) {
		L.DomEvent.stop(evt);
		var containerPoint = this._path._map.mouseEventToContainerPoint(evt);
		var moved = this.moved();

		// apply matrix
		if (moved) {
			this._transformPoints(this._matrix);
			this._path._updatePath();
			this._path._project();
			this._path._transform(null);
		}

		L.DomEvent.off(document, 'mousemove touchmove', this._onDrag,    this);
		L.DomEvent.off(document, 'mouseup touchend',    this._onDragEnd, this);

		this._restoreCoordGetters();

		// consistency
		if (moved) {
			this._path.fire('dragend', {
				distance: distance(this._dragStartPoint, containerPoint)
			});

			// hack for skipping the click in canvas-rendered layers
			var contains = this._path._containsPoint;
			this._path._containsPoint = L.Util.falseFn;
			L.Util.requestAnimFrame(function() {
				L.DomEvent._skipped({ type: 'click' });
				this._path._containsPoint = contains;
			}, this);
		}

		this._matrix          = null;
		this._startPoint      = null;
		this._dragStartPoint  = null;
		this._path._dragMoved = false;

		if (this._mapDraggingWasEnabled) {
			if (moved) L.DomEvent._fakeStop({ type: 'click' });
			this._path._map.dragging.enable();
		}

		if (!moved) {
			this._path._map._handleDOMEvent(this._mouseDown);
			this._path._map._handleDOMEvent(evt)
		}
	},


	/**
	* Applies transformation, does it in one sweep for performance,
	* so don't be surprised about the code repetition.
	*
	* [ x ]   [ a  b  tx ] [ x ]   [ a * x + b * y + tx ]
	* [ y ] = [ c  d  ty ] [ y ] = [ c * x + d * y + ty ]
	*
	* @param {Array.<Number>} matrix
	*/
	_transformPoints: function(matrix, dest) {
		var path = this._path;
		var i, len, latlng;

		var px = L.point(matrix[4], matrix[5]);

		var crs = path._map.options.crs;
		var transformation = crs.transformation;
		var scale = crs.scale(path._map.getZoom());
		var projection = crs.projection;

		var diff = transformation.untransform(px, scale)
		.subtract(transformation.untransform(L.point(0, 0), scale));
		var applyTransform = !dest;
		var bounds = path._bounds;

		path._bounds = new L.LatLngBounds();

		// console.time('transform');
		// all shifts are in-place
		if (path._point) { // L.Circle
			dest = projection.unproject(
			projection.project(path._latlng)._add(diff));
			if (applyTransform) {
				path._latlng = dest;
				path._point._add(px);
			}
		} else if (path._rings || path._parts) { // everything else
			var rings   = path._rings || path._parts;
			var latlngs = path._latlngs;
			dest = dest || latlngs;
			if (!L.Util.isArray(latlngs[0])) { // polyline
				latlngs = [latlngs];
				dest    = [dest];
			}
			for (i = 0, len = rings.length; i < len; i++) {
				dest[i] = dest[i] || [];
				for (var j = 0, jj = rings[i].length; j < jj; j++) {
					latlng     = latlngs[i][j];
					dest[i][j] = projection
						.unproject(projection.project(latlng)._add(diff));
					if (applyTransform) {
						path._bounds.extend(latlngs[i][j]);
						rings[i][j]._add(px);
					}
				}
			}
		} else if (path instanceof L.SVGGroup) {
			if (applyTransform) {
				bounds._southWest = projection.unproject(projection.project(bounds._southWest)._add(diff));
				bounds._northEast = projection.unproject(projection.project(bounds._northEast)._add(diff));
				path._bounds = bounds;
			}
		}

		return dest;
		// console.timeEnd('transform');
	},


	/**
	* If you want to read the latlngs during the drag - your right,
	* but they have to be transformed
	*/
	_replaceCoordGetters: function() {
		if (this._path.getLatLng) { // Circle, CircleMarker
			this._path.getLatLng_ = this._path.getLatLng;
			this._path.getLatLng = L.Util.bind(function() {
				return this.dragging._transformPoints(this.dragging._matrix, {});
			}, this._path);
		} else if (this._path.getLatLngs) {
			this._path.getLatLngs_ = this._path.getLatLngs;
			this._path.getLatLngs = L.Util.bind(function() {
				return this.dragging._transformPoints(this.dragging._matrix, []);
			}, this._path);
		}
	},


	/**
	* Put back the getters
	*/
	_restoreCoordGetters: function() {
		if (this._path.getLatLng_) {
			this._path.getLatLng = this._path.getLatLng_;
			delete this._path.getLatLng_;
		} else if (this._path.getLatLngs_) {
			this._path.getLatLngs = this._path.getLatLngs_;
			delete this._path.getLatLngs_;
		}
	}

});


/**
 * @param  {L.Path} layer
 * @return {L.Path}
 */
L.Handler.PathDrag.makeDraggable = function(layer) {
	layer.dragging = new L.Handler.PathDrag(layer);
	return layer;
};


/**
 * Also expose as a method
 * @return {L.Path}
 */
L.Path.prototype.makeDraggable = function() {
	return L.Handler.PathDrag.makeDraggable(this);
};

var fnInitHook = function() {
	if (this.options.draggable) {
		// ensure interactive
		this.options.interactive = true;

		if (this.dragging) {
			this.dragging.enable();
		} else {
			L.Handler.PathDrag.makeDraggable(this);
			this.dragging.enable();
		}
		this.dragging.constraint = this.options.dragConstraint;
	} else if (this.dragging) {
		this.dragging.disable();
		this.dragging.constraint = null;
	}
};

L.Path.addInitHook(fnInitHook);
L.SVGGroup.addInitHook(fnInitHook);

/**
 * @namespace
 * @type {Object}
 */
L.PathTransform = {};

/**
 * Point on the line segment or its extention
 *
 * @param  {L.Point} start
 * @param  {L.Point} final
 * @param  {Number}  distPx
 * @return {L.Point}
 */
L.PathTransform.pointOnLine = function(start, final, distPx) {
	var ratio = 1 + distPx / start.distanceTo(final);
	return new L.Point(
		start.x + (final.x - start.x) * ratio,
		start.y + (final.y - start.y) * ratio
	);
};


/**
 * Deep merge objects.
 */
L.PathTransform.merge = function() {
	var i = 1;
	var key, val;
	var obj = arguments[i];

	function isObject(object) {
		return Object.prototype.toString.call(object) === '[object Object]';
	}

	// make sure we don't modify source element and it's properties
	// objects are passed by reference
	var target = arguments[0];

	while (obj) {
		obj = arguments[i++];
		for (key in obj) {
			if (!obj.hasOwnProperty(key)) {
				continue;
			}

			val = obj[key];

			if (isObject(val) && isObject(target[key])) {
				target[key] = L.Util.merge(target[key], val);
			} else {
				target[key] = val;
			}
		}
	}
	return target;
};

/* -*- js-indent-level: 8 -*- */


/**
 * Marker handler
 * @extends {L.CircleMarker}
 */
L.PathTransform.Handle = L.CircleMarker.extend({
	options: {
		className: 'leaflet-path-transform-handler'
	},

	onAdd: function (map) {
		L.CircleMarker.prototype.onAdd.call(this, map);
		if (this._path && this.options.setCursor) { // SVG/VML
			this._path.style.cursor = L.PathTransform.Handle.CursorsByType[
				this.options.index
			];
		}
	}
});


/**
 * @const
 * @type {Array}
 */
L.PathTransform.Handle.CursorsByType = [
	'nesw-resize', 'ew-resize', 'nwse-resize', 'ns-resize','nesw-resize', 'ew-resize', 'nwse-resize', 'ns-resize'
];


/**
 * @extends {L.Handler.PathTransform.Handle}
 */
L.PathTransform.RotateHandle = L.PathTransform.Handle.extend({
	options: {
		className: 'leaflet-path-transform-handler transform-handler--rotate'
	},

	onAdd: function (map) {
		L.CircleMarker.prototype.onAdd.call(this, map);
		if (this._path && this.options.setCursor) { // SVG/VML
			this._path.style.cursor = 'all-scroll';
		}
	}
});

L.Handler.PathTransform = L.Handler.extend({

	options: {
		rotation: true,
		scaling:  true,
		uniformScaling: true,
		maxZoom:  22,

		// edge handlers
		handlerOptions: {
			radius:      5,
			fillColor:   '#ffffff',
			color:       '#202020',
			fillOpacity: 1,
			weight:      2,
			opacity:     0.7,
			setCursor:   true
		},

		// rectangle
		boundsOptions: {
			weight:    1,
			opacity:   1,
			interactive: false,
			dashArray: [3, 3],
			fill:      false
		},

		// rotation handler
		rotateHandleOptions: {
			weight:    1,
			opacity:   1,
			setCursor: true
		},
		// rotation handle length
		handleLength: 20,

		// maybe I'll add skewing in the future
		edgesCount:   4,

		handleClass:       L.PathTransform.Handle,
		rotateHandleClass: L.PathTransform.RotateHandle
	},


	/**
	* @class L.Handler.PathTransform
	* @constructor
	* @param  {L.Path} path
	*/
	initialize: function(path) {
		// references
		this._path = path;
		this._map  = null;

		// handlers
		this._activeMarker   = null;
		this._originMarker   = null;
		this._rotationMarker = null;

		// origins & temporary state
		this._rotationOrigin   = null;
		this._scaleOrigin      = null;
		this._angle            = 0;
		this._scale            = L.point(1, 1);
		this._initialDist      = 0;
		this._initialDistX     = 0;
		this._initialDistY     = 0;
		this._rotationStart    = null;
		this._rotationOriginPt = null;

		// preview and transform matrix
		this._matrix          = new L.Matrix(1, 0, 0, 1, 0, 0);
		this._projectedMatrix = new L.Matrix(1, 0, 0, 1, 0, 0);

		// ui elements
		this._handlersGroup  = null;
		this._rect           = null;
		this._handlers       = [];
		this._handleLine     = null;
	},


	/**
	* If the polygon is not rendered, you can transform it yourself
	* in the coordinates, and do it properly.
	* @param {Object=} options
	*/
	enable: function(options) {
		if (this._path._map) {
			this._map = this._path._map;
			if (options) {
				this.setOptions(options);
			}
			L.Handler.prototype.enable.call(this);
		}
	},


	/**
	* Init interactions and handlers
	*/
	addHooks: function() {
		this._createHandlers();
		this._path
			.on('dragstart', this._onDragStart, this)
			.on('drag',      this._onDrag, this)
			.on('dragend',   this._onDragEnd,   this);
	},


	/**
	* Remove handlers
	*/
	removeHooks: function() {
		this._hideHandlers();
		this._path
			.off('dragstart', this._onDragStart, this)
			.off('drag',      this._onDrag, this)
			.off('dragend',   this._onDragEnd,   this);

		if (this._map.hasLayer(this._rect)) {
			this._map.removeLayer(this._rect);
		}

		this._handlersGroup = null;
		this._rect = null;
		this._handlers = [];
	},


	/**
	* Change editing options
	* @param {Object} options
	*/
	setOptions: function(options) {
		var enabled = this._enabled;
		if (enabled) {
			this.disable();
		}

		this.options = L.PathTransform.merge({},
			L.Handler.PathTransform.prototype.options,
			options);

		if (enabled) {
			this.enable();
		}

		return this;
	},


	/**
	* @param  {Number}   angle
	* @param  {L.LatLng} origin
	* @return {L.Handler.PathTransform}
	*/
	rotate: function(angle, origin) {
		return this.transform(angle, null, origin);
	},


	/**
	* @param  {L.Point|Number} scale
	* @param  {L.LatLng}       origin
	* @return {L.Handler.PathTransform}
	*/
	scale: function(scale, origin) {
		if (typeof scale === 'number') {
			scale = L.point(scale, scale);
		}
		return this.transform(0, scale, null, origin);
	},


	/**
	* @param  {Number}    angle
	* @param  {L.Point}   scale
	* @param  {L.LatLng=} rotationOrigin
	* @param  {L.LatLng=} scaleOrigin
	* @return {L.Handler.PathTransform}
	*/
	transform: function(angle, scale, rotationOrigin, scaleOrigin) {
		var center     = this._path.getCenter();
		rotationOrigin = rotationOrigin || center;
		scaleOrigin    = scaleOrigin    || center;
		this._map = this._path._map;
		this._transformPoints(this._path, angle, scale, rotationOrigin, scaleOrigin);
		return this;
	},


	/**
	* Update the polygon and handlers preview, no reprojection
	*/
	_update: function() {
		var matrix = this._matrix;

		// update handlers
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			var handler = this._handlers[i];
			if (handler !== this._originMarker) {
				handler._point = matrix.transform(handler._initialPoint);
				handler._updatePath();
			}
		}

		matrix = matrix.clone().flip();

		this._applyTransform(matrix);
		this._path.fire('transform', { layer: this._path });
	},


	/**
	* @param  {L.Matrix} matrix
	*/
	_applyTransform: function(matrix) {
		this._path._transform(matrix._matrix);
		this._rect._transform(matrix._matrix);

		if (this.options.rotation) {
			this._handleLine._transform(matrix._matrix);
		}
	},


	/**
	* Apply final transformation
	*/
	_apply: function() {
		//console.group('apply transform');
		var map = this._map;
		var matrix = this._matrix.clone();
		var angle = this._angle;
		var scale = this._scale.clone();
		var moved = this._handleDragged;

		this._transformGeometries();

		// update handlers
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			var handler = this._handlers[i];
			handler._latlng = map.layerPointToLatLng(handler._point);
			delete handler._initialPoint;
			handler.redraw();
		}

		this._matrix = L.matrix(1, 0, 0, 1, 0, 0);
		this._scale  = L.point(1, 1);
		this._angle  = 0;

		this._updateHandlers();

		if (this._mapDraggingWasEnabled) {
			if (moved) L.DomEvent._fakeStop({ type: 'click' });
			map.dragging.enable();
		}

		this._path.fire('transformed', {
			matrix: matrix,
			scale: scale,
			rotation: angle,
			// angle: angle * (180 / Math.PI),
			layer: this._path
		});
		// console.groupEnd('apply transform');
	},


	/**
	* Use this method to completely reset handlers, if you have changed the
	* geometry of transformed layer
	*/
	reset: function() {
		if (this._enabled) {
			if (this._rect) {
				this._handlersGroup.removeLayer(this._rect);
				this._rect = this._getBoundingPolygon().addTo(this._handlersGroup);
			}
			this._updateHandlers();
		}
	},


	/**
	* Recalculate rotation handlers position
	*/
	_updateHandlers: function() {
		var handlersGroup = this._handlersGroup;

		if (this._handleLine) {
			this._handlersGroup.removeLayer(this._handleLine);
		}

		if (this._rotationMarker) {
			this._handlersGroup.removeLayer(this._rotationMarker);
		}

		this._handleLine = this._rotationMarker = null;

		for (var i = this._handlers.length - 1; i >= 0; i--) {
			handlersGroup.removeLayer(this._handlers[i]);
		}

		this._createHandlers();
	},


	/**
	* Transform geometries separately
	*/
	_transformGeometries: function() {
		this._path._transform(null);
		this._rect._transform(null);

		this._transformPoints(this._path);
		this._transformPoints(this._rect);

		if (this.options.rotation) {
			this._handleLine._transform(null);
			this._transformPoints(this._handleLine, this._angle, null, this._origin);
		}
	},


	/**
	* @param {Number} angle
	* @param {Number} scale
	* @param {L.LatLng=} rotationOrigin
	* @param {L.LatLng=} scaleOrigin
	*/
	_getProjectedMatrix: function(angle, scale, rotationOrigin, scaleOrigin) {
		var map    = this._map;
		var zoom   = map.getMaxZoom() || this.options.maxZoom;
		var matrix = L.matrix(1, 0, 0, 1, 0, 0);
		var origin;

		angle = angle || this._angle || 0;
		scale = scale || this._scale || L.point(1, 1);

		if (!(scale.x === 1 && scale.y === 1)) {
			scaleOrigin = scaleOrigin || this._scaleOrigin;
			origin = map.project(scaleOrigin, zoom);
			matrix = matrix
				._add(L.matrix(1, 0, 0, 1, origin.x, origin.y))
				._add(L.matrix(scale.x, 0, 0, scale.y, 0, 0))
				._add(L.matrix(1, 0, 0, 1, -origin.x, -origin.y));
		}

		if (angle) {
			rotationOrigin = rotationOrigin || this._rotationOrigin;
			origin = map.project(rotationOrigin, zoom);
			matrix = matrix.rotate(angle, origin).flip();
		}

		return matrix;
	},


	/**
	* @param  {L.LatLng} latlng
	* @param  {L.Matrix} matrix
	* @param  {L.Map}    map
	* @param  {Number}   zoom
	* @return {L.LatLng}
	*/
	_transformPoint: function(latlng, matrix, map, zoom) {
		return map.unproject(matrix.transform(
			map.project(latlng, zoom)), zoom);
	},


	/**
	* Applies transformation, does it in one sweep for performance,
	* so don't be surprised about the code repetition.
	*
	* @param {L.Path}    path
	* @param {Number=}   angle
	* @param {L.Point=}  scale
	* @param {L.LatLng=} rotationOrigin
	* @param {L.LatLng=} scaleOrigin
	*/
	_transformPoints: function(path, angle, scale, rotationOrigin, scaleOrigin) {
		var map = path._map;
		var zoom = map.getMaxZoom() || this.options.maxZoom;
		var i, len;

		var projectedMatrix = this._projectedMatrix =
			this._getProjectedMatrix(angle, scale, rotationOrigin, scaleOrigin);
		// console.time('transform');

		// all shifts are in-place
		if (path._point) { // L.Circle
			path._latlng = this._transformPoint(
			path._latlng, projectedMatrix, map, zoom);
		} else if (path._rings || path._parts) { // everything else
			var rings = path._rings;
			var latlngs = path._latlngs;
			path._bounds = new L.LatLngBounds();

			if (!L.Util.isArray(latlngs[0])) { // polyline
				latlngs = [latlngs];
			}
			for (i = 0, len = rings.length; i < len; i++) {
				for (var j = 0, jj = rings[i].length; j < jj; j++) {
					latlngs[i][j] = this._transformPoint(
						latlngs[i][j], projectedMatrix, map, zoom);
					path._bounds.extend(latlngs[i][j]);
				}
			}
		} else if (path instanceof L.SVGGroup) {
			path._bounds._southWest = this._transformPoint(path._bounds._southWest, projectedMatrix, map, zoom);
			path._bounds._northEast = this._transformPoint(path._bounds._northEast, projectedMatrix, map, zoom);
		}

		path._reset();
	},

	_getPoints: function () {
		var bounds = this._rect.getBounds(),
		sw = bounds.getSouthWest(),
		nw = bounds.getNorthWest(),
		ne = bounds.getNorthEast(),
		se = bounds.getSouthEast(),
		center = bounds.getCenter(),
		west   = L.latLng(center.lat, nw.lng),
		north  = L.latLng(nw.lat, center.lng),
		east   = L.latLng(center.lat, ne.lng),
		south  = L.latLng(sw.lat, center.lng);

		return [sw, west, nw, north, ne, east, se, south];
	},

	_getMirroredIndex: function(type, index) {
		var sw = 0, w = 1, nw = 2, n = 3, ne = 4, e = 5, se = 6, s = 7;
		if (type === 'h')
			return [nw, w, sw, s, se, e, ne, n][index];
		else if (type === 'v')
			return [se, e, ne, n, nw, w, sw, s][index];
		else if (type === 'c')
			return [ne, e, se, s, sw, w, nw, n][index];
	},

	/**
	* Creates markers and handles
	*/
	_createHandlers: function() {
		var map = this._map;
		this._handlersGroup = this._handlersGroup ||
			new L.LayerGroup().addTo(map);
		this._rect = this._rect ||
			this._getBoundingPolygon().addTo(this._handlersGroup);

		if (this.options.scaling) {
			this._handlers = [];
			var points = this._getPoints();
			for (var i = 0; i < points.length; i++) {
				this._handlers.push(
					this._createHandler(points[i], i * 2, i)
						.addTo(this._handlersGroup));
			}
		}

		// add bounds
		if (this.options.rotation) {
			//add rotation handler
			this._createRotationHandlers();
		}
	},


	/**
	* Rotation marker and small connectin handle
	*/
	_createRotationHandlers: function() {
		var map     = this._map;
		var latlngs = this._rect._latlngs;

		var bottom   = new L.LatLng(
			(latlngs[0].lat + latlngs[3].lat) / 2,
			(latlngs[0].lng + latlngs[3].lng) / 2);
		// hehe, top is a reserved word
		var topPoint = new L.LatLng(
			(latlngs[1].lat + latlngs[2].lat) / 2,
			(latlngs[1].lng + latlngs[2].lng) / 2);

		var handlerPosition = map.layerPointToLatLng(
		L.PathTransform.pointOnLine(
			map.latLngToLayerPoint(bottom),
			map.latLngToLayerPoint(topPoint),
		        (window.ThisIsAMobileApp ? this.options.handleLength * 3 : this.options.handleLength))
		);

		this._handleLine = new L.Polyline([topPoint, handlerPosition],
		this.options.rotateHandleOptions).addTo(this._handlersGroup);
		var RotateHandleClass = this.options.rotateHandleClass;
		this._rotationMarker = new RotateHandleClass(handlerPosition,
			this.options.handlerOptions)
			.addTo(this._handlersGroup)
			.on('mousedown', this._onRotateStart, this);

		this._rotationOrigin = new L.LatLng(
			(topPoint.lat + bottom.lat) / 2,
			(topPoint.lng + bottom.lng) / 2
		);

		this._handlers.push(this._rotationMarker);
	},


	/**
	* @return {L.LatLng}
	*/
	_getRotationOrigin: function() {
		var latlngs = this._rect._latlngs;
		var lb = latlngs[0];
		var rt = latlngs[2];

		return new L.LatLng(
			(lb.lat + rt.lat) / 2,
			(lb.lng + rt.lng) / 2
		);
	},


	/**
	* Secure the rotation origin
	* @param  {Event} evt
	*/
	_onRotateStart: function(evt) {
		var map = this._map;

		this._handleDragged = false;
		this._mapDraggingWasEnabled = false;
		if (map.dragging.enabled()) {
			map.dragging.disable();
			this._mapDraggingWasEnabled = true;
		}

		this._originMarker     = null;
		this._rotationOriginPt = map.latLngToLayerPoint(this._getRotationOrigin());
		this._rotationStart    = evt.layerPoint;
		this._initialMatrix    = this._matrix.clone();

		this._angle = 0;
		this._rotationMarker.addEventParent(this._map);
		this._path._map
			.on('mousemove', this._onRotate,     this)
			.on('mouseup',   this._onRotateEnd, this);

		this._cachePoints();
		this._path
			.fire('transformstart',   { layer: this._path })
			.fire('rotatestart', { layer: this._path, rotation: 0 });
	},


	/**
	* @param  {Event} evt
	*/
	_onRotate: function(evt) {
		var pos = evt.layerPoint;
		var previous = this._rotationStart;
		var origin   = this._rotationOriginPt;

		this._handleDragged = true;

		// rotation step angle
		this._angle = Math.atan2(pos.y - origin.y, pos.x - origin.x) -
			Math.atan2(previous.y - origin.y, previous.x - origin.x);

		this._matrix = this._initialMatrix
			.clone()
			.rotate(this._angle, origin)
			.flip();

		this._update();
		this._path.fire('rotate', { layer: this._path, rotation: this._angle });
	},


	/**
	* @param  {Event} evt
	*/
	_onRotateEnd: function(evt) {
		var pos = evt.layerPoint;
		var previous = this._rotationStart;
		var origin = this._rotationOriginPt;
		var angle = Math.atan2(-(pos.y - origin.y), pos.x - origin.x) -
			Math.atan2(-(previous.y - origin.y), previous.x - origin.x);

		if (angle < 0) {
			angle += (2 * Math.PI);
		}

		this._rotationMarker.removeEventParent(this._map);
		this._path._map
			.off('mousemove', this._onRotate, this)
			.off('mouseup',   this._onRotateEnd, this);

		this._apply();
		this._path.fire('rotateend', { layer: this._path, rotation: angle });
	},


	/**
	* @param  {Event} evt
	*/
	_onScaleStart: function(evt) {
		var marker = evt.target;
		var map = this._map;

		this._handleDragged = false;
		this._mapDraggingWasEnabled = false;
		if (map.dragging.enabled()) {
			map.dragging.disable();
			this._mapDraggingWasEnabled = true;
		}

		this._activeMarker = marker;

		this._originMarker = this._handlers[(marker.options.index + 4) % 8];
		this._scaleOrigin  = this._originMarker.getLatLng();

		this._initialMatrix = this._matrix.clone();
		this._cachePoints();

		this._activeMarker.addEventParent(this._map);
		this._map
			.on('mousemove', this._onScale,    this)
			.on('mouseup',   this._onScaleEnd, this);
		this._initialDist  = this._originMarker._point.distanceTo(this._activeMarker._point);
		this._initialDistX = this._originMarker._point.x - this._activeMarker._point.x;
		this._initialDistY = this._originMarker._point.y - this._activeMarker._point.y;

		this._path
			.fire('transformstart', { layer: this._path })
			.fire('scalestart', {
				layer: this._path,
				scale: L.point(1, 1),
				pos: this._getPoints()[this._activeMarker.options.index]
			});

		if (this.options.rotation) {
			this._map.removeLayer(this._handleLine);
			this._map.removeLayer(this._rotationMarker);
		}

		//this._handleLine = this._rotationMarker = null;
	},


	/**
	* @param  {Event} evt
	*/
	_onScale: function(evt) {
		var originPoint = this._originMarker._point;
		var ratioX, ratioY;

		this._handleDragged = true;

		if ((window.ThisIsAMobileApp && (this._activeMarker.options.index % 2) == 0) ||
		    this.options.uniformScaling) {
			ratioX = originPoint.distanceTo(evt.layerPoint) / this._initialDist;
			ratioY = ratioX;
		} else {
			ratioX = this._initialDistX !== 0 ?
				(originPoint.x - evt.layerPoint.x) / this._initialDistX : 1;
			ratioY = this._initialDistY !== 0 ?
				(originPoint.y - evt.layerPoint.y) / this._initialDistY : 1;
		}

		this._scale = new L.Point(ratioX, ratioY);

		// update matrix
		this._matrix = this._initialMatrix
			.clone()
			.scale(this._scale, originPoint);

		this._update();
		this._path.fire('scale', {
			layer: this._path, scale: this._scale.clone() });
	},


	/**
	* Scaling complete
	* @param  {Event} evt
	*/
	_onScaleEnd: function(/*evt*/) {
		this._activeMarker.removeEventParent(this._map);
		this._map
			.off('mousemove', this._onScale,    this)
			.off('mouseup',   this._onScaleEnd, this);

		if (this.options.rotation) {
			this._map.addLayer(this._handleLine);
			this._map.addLayer(this._rotationMarker);
		}

		var type;
		var index = this._activeMarker.options.index;
		if (this._scale.x < 0 && this._scale.y < 0)
			type = 'c';
		else if (this._scale.x < 0)
			type = 'v';
		else if (this._scale.y < 0)
			type = 'h';

		if (type)
			index = this._getMirroredIndex(type, index);

		this._apply();
		this._path.fire('scaleend', {
			layer: this._path,
			scale: this._scale.clone(),
			pos: this._getPoints()[index]
		});
	},


	/**
	* Cache current handlers positions
	*/
	_cachePoints: function() {
		this._handlersGroup.eachLayer(function(layer) {
			layer.bringToFront();
		});
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			var handler = this._handlers[i];
			handler._initialPoint = handler._point.clone();
		}
	},


	/**
	* Bounding polygon
	* @return {L.Polygon}
	*/
	_getBoundingPolygon: function() {
		return new L.Rectangle(
			this._path.getBounds(), this.options.boundsOptions);
	},


	/**
	* Create corner marker
	* @param  {L.LatLng} latlng
	* @param  {Number}   type one of L.Handler.PathTransform.HandlerTypes
	* @param  {Number}   index
	* @return {L.Handler.PathTransform.Handle}
	*/
	_createHandler: function(latlng, type, index) {
		var HandleClass = this.options.handleClass;
		var marker = new HandleClass(latlng,
			L.Util.extend({}, this.options.handlerOptions, {
				className: 'leaflet-drag-transform-marker drag-marker--' +
				index + ' drag-marker--' + type,
				index:     index,
				type:      type
			})
		);

		marker.on('mousedown', this._onScaleStart, this);
		return marker;
	},


	/**
	* Hide(not remove) the handlers layer
	*/
	_hideHandlers: function() {
		this._map.removeLayer(this._handlersGroup);
	},


	/**
	* Hide handlers and rectangle
	*/
	_onDragStart: function() {
		this._hideHandlers();
		this._map.addLayer(this._rect);
	},

	_onDrag: function(evt) {
		var rect = this._rect;
		var matrix = (evt.layer ? evt.layer : this._path).dragging._matrix.slice();

		this._rect._transform(matrix);
		rect._updatePath();
		rect._project();
	},


	/**
	* Drag rectangle, re-create handlers
	*/
	_onDragEnd: function(evt) {
		var rect = this._rect;
		var matrix = (evt.layer ? evt.layer : this._path).dragging._matrix.slice();

		if (!rect.dragging) {
			rect.dragging = new L.Handler.PathDrag(rect);
		}
		rect.dragging.enable();
		this._map.addLayer(rect);
		rect.dragging._transformPoints(matrix);
		rect._updatePath();
		rect._project();
		rect.dragging.disable();

		this._map.addLayer(this._handlersGroup);
		this._updateHandlers();

		this._path.fire('transformed', {
			scale: L.point(1, 1),
			rotation: 0,
			matrix: L.matrix.apply(undefined, matrix),
			translate: L.point(matrix[4], matrix[5]),
			layer: this._path
		});
	}
});


L.Path.addInitHook(function() {
	if (this.options.transform) {
		this.transform = new L.Handler.PathTransform(this, this.options.transform);
	}
});

L.SVGGroup.addInitHook(function() {
	if (this.options.transform) {
		this.transform = new L.Handler.PathTransform(this, this.options.transform);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Vector rendering for IE7-8 through VML.
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */

L.Browser.vml = !L.Browser.svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());

// redefine some SVG methods to handle VML syntax which is similar but with some differences
L.SVG.include(!L.Browser.vml ? {} : {

	_initContainer: function () {
		this._container = L.DomUtil.create('div', 'leaflet-vml-container');

		this._paths = {};
		this._initEvents();
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		L.Renderer.prototype._update.call(this);
	},

	_initPath: function (layer) {
		var container = layer._container = L.SVG.create('shape');

		L.DomUtil.addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = L.SVG.create('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);
		this._paths[L.stamp(container)] = layer;
	},

	_removePath: function (layer) {
		var container = layer._container;
		L.DomUtil.remove(container);
		delete this._paths[L.stamp(container)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = L.SVG.create('stroke');
				container.appendChild(stroke);
			}
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = L.Util.isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = L.SVG.create('fill');
				container.appendChild(fill);
			}
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
				'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		L.DomUtil.toFront(layer._container);
	},

	_bringToBack: function (layer) {
		L.DomUtil.toBack(layer._container);
	}
});

if (L.Browser.vml) {
	L.SVG.create = (function () {
		try {
			document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
			return function (name) {
				return document.createElement('<lvml:' + name + ' class="lvml">');
			};
		} catch (e) {
			return function (name) {
				return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
			};
		}
	})();
}

L.SVG.include(!L.Browser.vml ? {} : {

	/**
	 * Reset transform matrix
	 */
	_resetTransformPath: function(layer) {
		if (layer._skew) {
			// super important! workaround for a 'jumping' glitch:
			// disable transform before removing it
			layer._skew.on = false;
			layer._path.removeChild(layer._skew);
			layer._skew = null;
		}
	},

	/**
	 * Applies matrix transformation to VML
	 * @param {L.Path}         layer
	 * @param {Array.<Number>} matrix
	 */
	transformPath: function(layer, matrix) {
		var skew = layer._skew;

		if (!skew) {
			skew = L.SVG.create('skew');
			layer._path.appendChild(skew);
			skew.style.behavior = 'url(#default#VML)';
			layer._skew = skew;
		}

		// handle skew/translate separately, cause it's broken
		var mt = matrix[0].toFixed(8) + ' ' + matrix[1].toFixed(8) + ' ' +
			matrix[2].toFixed(8) + ' ' + matrix[3].toFixed(8) + ' 0 0';
		var offset = Math.floor(matrix[4]).toFixed() + ', ' +
			Math.floor(matrix[5]).toFixed() + '';

		var s = this._path.style;
		var l = parseFloat(s.left);
		var t = parseFloat(s.top);
		var w = parseFloat(s.width);
		var h = parseFloat(s.height);

		if (isNaN(l))       l = 0;
		if (isNaN(t))       t = 0;
		if (isNaN(w) || !w) w = 1;
		if (isNaN(h) || !h) h = 1;

		var origin = (-l / w - 0.5).toFixed(8) + ' ' + (-t / h - 0.5).toFixed(8);

		skew.on = 'f';
		skew.matrix = mt;
		skew.origin = origin;
		skew.offset = offset;
		skew.on = true;
	}

});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Canvas handles Canvas vector layers rendering and mouse events handling. All Canvas-specific code goes here.
 */

L.Canvas = L.Renderer.extend({

	onAdd: function () {
		L.Renderer.prototype.onAdd.call(this);

		this._layers = this._layers || {};

		// redraw vectors since canvas is cleared upon removal
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		L.DomEvent
			.on(container, 'mousemove', this._onMouseMove, this)
			.on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);

		this._ctx = container.getContext('2d');
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		L.Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = L.Browser.retina ? 2 : 1;

		L.DomUtil.setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (L.Browser.retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);
	},

	_initPath: function (layer) {
		this._layers[L.stamp(layer)] = layer;
	},

	_addPath: L.Util.falseFn,

	_removePath: function (layer) {
		layer._removed = true;
		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		this._redrawBounds = layer._pxBounds;
		this._draw(true);
		layer._project();
		layer._update();
		this._draw();
		this._redrawBounds = null;
	},

	_updateStyle: function (layer) {
		this._requestRedraw(layer);
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._redrawBounds = this._redrawBounds || new L.Bounds();
		this._redrawBounds.extend(layer._pxBounds.min).extend(layer._pxBounds.max);

		this._redrawRequest = this._redrawRequest || L.Util.requestAnimFrame(this._redraw, this);
	},

	_redraw: function () {
		this._redrawRequest = null;

		this._draw(true); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_draw: function (clear) {
		this._clear = clear;
		var layer;

		for (var id in this._layers) {
			layer = this._layers[id];
			if (!this._redrawBounds || layer._pxBounds.intersects(this._redrawBounds)) {
				layer._updatePath();
			}
			if (clear && layer._removed) {
				delete layer._removed;
				delete this._layers[id];
			}
		}
	},

	_updatePoly: function (layer, closed) {

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = layer._radius,
		    s = (layer._radiusY || r) / r;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var clear = this._clear,
		    options = layer.options;

		ctx.globalCompositeOperation = clear ? 'destination-out' : 'source-over';

		if (options.fill) {
			ctx.globalAlpha = clear ? 1 : options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			ctx.globalAlpha = clear ? 1 : options.opacity;

			// if clearing shape, do it with the previously drawn line width
			layer._prevWeight = ctx.lineWidth = clear ? layer._prevWeight + 1 : options.weight;

			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e);

		for (var id in this._layers) {
			if (this._layers[id]._containsPoint(point)) {
				L.DomEvent._fakeStop(e);
				this._fireEvent(this._layers[id], e);
			}
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);

		// TODO don't do on each move event, throttle since it's expensive
		for (var id in this._layers) {
			this._handleHover(this._layers[id], e, point);
		}
	},

	_handleHover: function (layer, e, point) {
		if (!layer.options.interactive) { return; }

		if (layer._containsPoint(point)) {
			// if we just got inside the layer, fire mouseover
			if (!layer._mouseInside) {
				L.DomUtil.addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent(layer, e, 'mouseover');
				layer._mouseInside = true;
			}
			// fire mousemove
			this._fireEvent(layer, e);

		} else if (layer._mouseInside) {
			// if we're leaving the layer, fire mouseout
			L.DomUtil.removeClass(this._container, 'leaflet-interactive');
			this._fireEvent(layer, e, 'mouseout');
			layer._mouseInside = false;
		}
	},

	_fireEvent: function (layer, e, type) {
		this._map._fireDOMEvent(layer, e, type || e.type);
	},

	// TODO _bringToFront & _bringToBack, pretty tricky

	_bringToFront: L.Util.falseFn,
	_bringToBack: L.Util.falseFn
});

L.Browser.canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

L.canvas = function (options) {
	return L.Browser.canvas ? new L.Canvas(options) : null;
};

L.Polyline.prototype._containsPoint = function (p, closed) {
	var i, j, k, len, len2, part,
	    w = this._clickTolerance();

	if (!this._pxBounds.contains(p)) { return false; }

	// hit detection for polylines
	for (i = 0, len = this._parts.length; i < len; i++) {
		part = this._parts[i];

		for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
			if (!closed && (j === 0)) { continue; }

			if (L.LineUtil.pointToSegmentDistance(p, part[k], part[j]) <= w) {
				return true;
			}
		}
	}
	return false;
};

L.Polygon.prototype._containsPoint = function (p) {
	var inside = false,
	    part, p1, p2, i, j, k, len, len2;

	if (!this._pxBounds.contains(p)) { return false; }

	// ray casting algorithm for detecting if point is in polygon
	for (i = 0, len = this._parts.length; i < len; i++) {
		part = this._parts[i];

		for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
			p1 = part[j];
			p2 = part[k];

			if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
				inside = !inside;
			}
		}
	}

	// also check if it's on polygon stroke
	return inside || L.Polyline.prototype._containsPoint.call(this, p, true);
};

L.CircleMarker.prototype._containsPoint = function (p) {
	return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
};

function TRUE_FN () { return true; }

L.Canvas.include({

	/**
	* Do nothing
	* @param  {L.Path} layer
	*/
	_resetTransformPath: function(layer) {
		if (!this._containerCopy) return;

		delete this._containerCopy;

		if (layer._containsPoint_) {
			layer._containsPoint = layer._containsPoint_;
			delete layer._containsPoint_;

			this._requestRedraw(layer);
		}
	},


	/**
	* Algorithm outline:
	*
	* 1. pre-transform - clear the path out of the canvas, copy canvas state
	* 2. at every frame:
	*    2.1. save
	*    2.2. redraw the canvas from saved one
	*    2.3. transform
	*    2.4. draw path
	*    2.5. restore
	* 3. Repeat
	*
	* @param  {L.Path}         layer
	* @param  {Array.<Number>} matrix
	*/
	transformPath: function(layer, matrix) {
		var copy   = this._containerCopy;
		var ctx    = this._ctx, copyCtx;
		var m      = L.Browser.retina ? 2 : 1;
		var bounds = this._bounds;
		var size   = bounds.getSize();
		var pos    = bounds.min;

		if (!copy) { // get copy of all rendered layers
			copy = this._containerCopy = document.createElement('canvas');
			copyCtx = copy.getContext('2d');
			// document.body.appendChild(copy);

			copy.width  = m * size.x;
			copy.height = m * size.y;

			this._removePath(layer);
			this._redraw();

			copyCtx.translate(m * bounds.min.x, m * bounds.min.y);
			copyCtx.drawImage(this._container, 0, 0);
			this._initPath(layer);

			// avoid flickering because of the 'mouseover's
			layer._containsPoint_ = layer._containsPoint;
			layer._containsPoint  = TRUE_FN;
		}

		ctx.save();
		ctx.clearRect(pos.x, pos.y, size.x * m, size.y * m);
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.restore();
		ctx.save();

		ctx.drawImage(this._containerCopy, 0, 0, size.x, size.y);
		ctx.transform.apply(ctx, matrix);

		// now draw one layer only
		this._drawing = true;
		layer._updatePath();
		this._drawing = false;

		ctx.restore();
	}

});

/* -*- js-indent-level: 8 -*- */
/*
 * L.DomEvent contains functions for working with DOM events.
 * Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
 */

var eventsKey = '_leaflet_events';

L.DomEvent = {

	on: function (obj, types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this._on(obj, type, types[type], fn);
			}
		} else {
			types = L.Util.splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(obj, types[i], fn, context);
			}
		}

		return this;
	},

	off: function (obj, types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this._off(obj, type, types[type], fn);
			}
		} else {
			types = L.Util.splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(obj, types[i], fn, context);
			}
		}

		return this;
	},

	_on: function (obj, type, fn, context) {
		var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : '');

		if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

		var handler = function (e) {
			return fn.call(context || obj, e || window.event);
		};

		var originalHandler = handler;

		if (L.Browser.pointer && type.indexOf('touch') === 0) {
			this.addPointerListener(obj, type, handler, id);

		} else if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
			this.addDoubleTapListener(obj, handler, id);

		} else if (type === 'trplclick' || type === 'qdrplclick') {
			this.addMultiClickListener(obj, handler, id, type);

		} else if ('addEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.addEventListener('DOMMouseScroll', handler, false);
				obj.addEventListener(type, handler, false);

			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
				handler = function (e) {
					e = e || window.event;
					if (L.DomEvent._checkMouse(obj, e)) {
						originalHandler(e);
					}
				};
				obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

			} else {
				if (type === 'click' && L.Browser.android) {
					handler = function (e) {
						return L.DomEvent._filterClick(e, originalHandler);
					};
				}
				obj.addEventListener(type, handler, false);
			}

		} else if ('attachEvent' in obj) {
			obj.attachEvent('on' + type, handler);
		}

		obj[eventsKey] = obj[eventsKey] || {};
		obj[eventsKey][id] = handler;

		return this;
	},

	_off: function (obj, type, fn, context) {

		var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : ''),
		    handler = obj[eventsKey] && obj[eventsKey][id];

		if (!handler) { return this; }

		if (L.Browser.pointer && type.indexOf('touch') === 0) {
			this.removePointerListener(obj, type, id);

		} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
			this.removeDoubleTapListener(obj, id);

		} else if (type === 'trplclick' || type === 'qdrplclick') {
			this.removeMultiClickListener(obj, id, type);

		} else if ('removeEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.removeEventListener('DOMMouseScroll', handler, false);
				obj.removeEventListener(type, handler, false);

			} else {
				obj.removeEventListener(
					type === 'mouseenter' ? 'mouseover' :
					type === 'mouseleave' ? 'mouseout' : type, handler, false);
			}

		} else if ('detachEvent' in obj) {
			obj.detachEvent('on' + type, handler);
		}

		obj[eventsKey][id] = null;

		return this;
	},

	stopPropagation: function (e) {

		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		L.DomEvent._skipped(e);

		return this;
	},

	disableScrollPropagation: function (el) {
		return L.DomEvent.on(el, 'mousewheel MozMousePixelScroll', L.DomEvent.stopPropagation);
	},

	disableClickPropagation: function (el) {
		var stop = L.DomEvent.stopPropagation;

		L.DomEvent.on(el, L.Draggable.START.join(' '), stop);

		return L.DomEvent.on(el, {
			click: L.DomEvent._fakeStop,
			dblclick: stop
		});
	},

	preventDefault: function (e) {

		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return this;
	},

	stop: function (e) {
		return L.DomEvent
			.preventDefault(e)
			.stopPropagation(e);
	},

	getMousePosition: function (e, container) {
		if (!container) {
			if (e.clientX === undefined && e.touches !== undefined)
				return new L.Point(e.touches[0].clientX, e.touches[0].clientY);

			return new L.Point(e.clientX, e.clientY);
		}

		var rect = container.getBoundingClientRect(), // constant object
		    left = rect.left,
		    top = rect.top;

		// iframe mouse coordinates are relative to the frame area
		// `target`: body element of the iframe; `currentTarget`: content window of the iframe
		if (e.currentTarget && e.currentTarget.frameElement
			&& L.DomUtil.hasClass(e.currentTarget.frameElement, 'resize-detector')) {
			left = top = 0;
		}

		// When called for a touchend event, at least in WebKit on iOS and Safari, the
		// touches array will be of zero length. Probably it is a programming logic error to
		// even call this function for a touchend event, as by definition no finger is
		// touching the screen any longer then and thus there is no "mouse position". But
		// let's just least guard against an unhandled exception for now.
		if (e.clientX === undefined && e.touches !== undefined && e.touches.length > 0)
			return new L.Point(
				e.touches[0].clientX - left - container.clientLeft,
				e.touches[0].clientY - top - container.clientTop);
		else if (e.clientX === undefined && e.changedTouches !== undefined && e.changedTouches.length > 0)
			return new L.Point(
				e.changedTouches[0].clientX - left - container.clientLeft,
				e.changedTouches[0].clientY - top - container.clientTop);

		return new L.Point(
			e.clientX - left - container.clientLeft,
			e.clientY - top - container.clientTop);
	},

	getWheelDelta: function (e) {

		var delta = 0;

		if (e.wheelDelta) {
			delta = e.wheelDelta / 120;
		}
		if (e.detail) {
			delta = -e.detail / 3;
		}
		return delta;
	},

	_skipEvents: {},

	_fakeStop: function (e) {
		// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
		L.DomEvent._skipEvents[e.type] = true;
	},

	_skipped: function (e) {
		var skipped = this._skipEvents[e.type];
		// reset when checking, as it's only used in map container and propagates outside of the map
		this._skipEvents[e.type] = false;
		return skipped;
	},

	// check if element really left/entered the event target (for mouseenter/mouseleave)
	_checkMouse: function (el, e) {

		var related = e.relatedTarget;

		if (!related) { return true; }

		try {
			while (related && (related !== el)) {
				related = related.parentNode;
			}
		} catch (err) {
			return false;
		}
		return (related !== el);
	},

	// this is a horrible workaround for a bug in Android where a single touch triggers two click events
	_filterClick: function (e, handler) {
		var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
		    elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

		// are they closer together than 500ms yet more than 100ms?
		// Android typically triggers them ~300ms apart while multiple listeners
		// on the same event should be triggered far faster;
		// or check if click is simulated on the element, and if it is, reject any non-simulated events

		if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
			L.DomEvent.stop(e);
			return;
		}
		L.DomEvent._lastClick = timeStamp;

		handler(e);
	}
};

L.DomEvent.addListener = L.DomEvent.on;
L.DomEvent.removeListener = L.DomEvent.off;

/* -*- js-indent-level: 8 -*- */
/*
 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
 */

L.Draggable = L.Evented.extend({

	statics: {
		START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
		END: {
			mousedown: 'mouseup',
			touchstart: 'touchend',
			pointerdown: 'touchend',
			MSPointerDown: 'touchend'
		},
		MOVE: {
			mousedown: 'mousemove',
			touchstart: 'touchmove',
			pointerdown: 'touchmove',
			MSPointerDown: 'touchmove'
		}
	},

	initialize: function (element, dragStartTarget, preventOutline) {
		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline;
	},

	enable: function () {
		if (this._enabled) { return; }

		L.DomEvent.on(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);

		this._enabled = true;
	},

	disable: function () {
		if (!this._enabled) { return; }

		L.DomEvent.off(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		this._moved = false;

		if (e.shiftKey || ((e.which !== 1) && (e.button !== 0) && !e.touches)) { return; }

		// enable propagation of the mousedown event from map pane to parent elements in view mode
		// see bug bccu1446
		if (!L.DomUtil.hasClass(this._element, 'leaflet-map-pane')) {
			L.DomEvent.stopPropagation(e);
		}

		if (this._preventOutline) {
			L.DomUtil.preventOutline(this._element);
		}

		if (L.DomUtil.hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		L.DomUtil.disableImageDrag();
		L.DomUtil.disableTextSelection();

		if (this._moving) { return; }

		this.fire('down');

		var first = e.touches ? e.touches[0] : e;

		this._startPoint = new L.Point(first.clientX, first.clientY);
		this._startPos = this._newPos = L.DomUtil.getPosition(this._element);
		var startBoundingRect = this._element.getBoundingClientRect();
		// Store offset between mouse selection position, and top left
		// We don't use this internally, but it is needed for external
		// manipulation of the cursor position, e.g. when adjusting
		// for scrolling during cursor dragging.
		this.startOffset = this._startPoint.subtract(new L.Point(startBoundingRect.left, startBoundingRect.top));

		L.DomEvent
		    .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
		    .on(document, L.Draggable.END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    newPoint = new L.Point(first.clientX, first.clientY),
		    offset = newPoint.subtract(this._startPoint);

		if (this._map) {
			// needed in order to avoid a jump when the document is dragged and the mouse pointer move
			// from over the map into the html document element area which is not covered by tiles
			// (resize-detector iframe)
			if (e.currentTarget && e.currentTarget.frameElement
				&& L.DomUtil.hasClass(e.currentTarget.frameElement, 'resize-detector')) {
				var rect = this._map._container.getBoundingClientRect(),
				    correction = new L.Point(rect.left, rect.top);
				offset = offset.add(correction);
			}
			if (this._map.getDocSize().x < this._map.getSize().x) {
				// don't pan horizontally when the document fits in the viewing
				// area horizontally (docWidth < viewAreaWidth)
				offset.x = 0;
			}
			if (this._map.getDocSize().y < this._map.getSize().y) {
				// don't pan vertically when the document fits in the viewing
				// area horizontally (docHeight < viewAreaHeight)
				offset.y = 0;
			}
		}
		if (!offset.x && !offset.y) { return; }
		if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) { return; }

		L.DomEvent.preventDefault(e);

		if (!this._moved) {
			this.fire('dragstart');

			this._moved = true;
			this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

			L.DomUtil.addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		L.Util.cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};
		this.fire('predrag', e);
		L.DomUtil.setPosition(this._element, this._newPos);
		this.fire('drag', e);
	},

	_onUp: function (e) {
		L.DomUtil.removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in L.Draggable.MOVE) {
			L.DomEvent
			    .off(document, L.Draggable.MOVE[i], this._onMove, this)
			    .off(document, L.Draggable.END[i], this._onUp, this);
		}

		L.DomUtil.enableImageDrag();
		L.DomUtil.enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			L.Util.cancelAnimFrame(this._animRequest);

			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		} else {
			this.fire('up', {originalEvent: e});
		}

		this._moving = false;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

L.Map.mergeOptions({
	dragging: true,

	inertia: !L.Browser.android23,
	inertiaDeceleration: 3400, // px/s^2
	inertiaMaxSpeed: Infinity, // px/s
	easeLinearity: 0.2,
});

L.Map.Drag = L.Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new L.Draggable(map._mapPane, map._container);
			this._draggable._map = map;

			this._draggable.on({
				down: this._onDown,
				dragstart: this._onDragStart,
				predrag: this._onPreDrag,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);
		}
		this._draggable.enable();
	},

	removeHooks: function () {
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_onDown: function () {
		this._map.stop();
	},

	_onDragStart: function () {
		var map = this._map;

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			if (time - this._times[0] > 50) {
				this._positions.shift();
				this._times.shift();
			}
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onViewReset: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_onPreDrag: function () {
		var org = this._map.getPixelOrigin();
		var pos = this._map._getMapPanePos();
		var size = this._map.getLayerMaxBounds().getSize().subtract(this._map.getSize());
		if (this._draggable._newPos.x !== pos.x) {
			this._draggable._newPos.x = Math.max(Math.min(org.x, this._draggable._newPos.x), org.x - Math.max(size.x, 0));
		}

		if (this._draggable._newPos.y !== pos.y) {
			this._draggable._newPos.y = Math.max(Math.min(org.y, this._draggable._newPos.y), org.y - Math.max(size.y, 0));
		}
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');
		} else {
			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x || !offset.y) {
				map.fire('moveend');
			}
		}
	}
});

L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.Scroll is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

L.Map.mergeOptions({
	scrollHandler: true,
	wheelDebounceTime: 40
});

L.Map.Scroll = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, {
			mousewheel: this._onWheelScroll,
			MozMousePixelScroll: L.DomEvent.preventDefault
		}, this);

		this._delta = 0;
		this._vertical = 1;
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, {
			mousewheel: this._onWheelScroll,
			MozMousePixelScroll: L.DomEvent.preventDefault
		}, this);
	},

	_onWheelScroll: function (e) {
		var delta = L.DomEvent.getWheelDelta(e);
		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		if (e.ctrlKey) {
			this._timer = setTimeout(L.bind(this._performZoom, this), left);
		}
		else if (e.shiftKey) {
			this._vertical = 0;
			this._timer = setTimeout(L.bind(this._performScroll, this), left);
		}
		else {
			this._vertical = 1;
			this._timer = setTimeout(L.bind(this._performScroll, this), left);
		}

		L.DomEvent.stop(e);
	},

	_performScroll: function () {
		var map = this._map,
		    delta = -this._delta,
		    scrollAmount = Math.round(map.getSize().y / 20);

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }
		map.fire('scrollby', {x: (1 - this._vertical) * delta * scrollAmount, y: this._vertical * delta * scrollAmount});
	},

	_performZoom: function () {
		var map = this._map,
		    delta = this._delta,
		    zoom = map.getZoom();

		map.stop(); // stop panning and fly animations if any

		delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
		delta = Math.max(Math.min(delta, 4), -4);
		delta = map._limitZoom(zoom + delta) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			if (map.getDocType() === 'spreadsheet') {
				if (delta > 0) {
					map.setZoom(14); // 200%
				} else {
					map.setZoom(10); // 100%
				}
			} else {
				map.setZoom(zoom + delta);
			}
		} else { // eslint-disable-next-line no-lonely-if
			if (map.getDocType() === 'spreadsheet') {
				if (delta > 0) {
					map.setZoomAround(this._lastMousePos, 14); // 200%
				} else {
					map.setZoomAround(this._lastMousePos, 10); // 100%
				}
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	}
});

L.Map.addInitHook('addHandler', 'scrollHandler', L.Map.Scroll);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

L.Map.mergeOptions({
	doubleClickZoom: false
});

L.Map.DoubleClickZoom = L.Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    zoom = e.originalEvent.shiftKey ? Math.ceil(oldZoom) - 1 : Math.floor(oldZoom) + 1;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);

/* -*- js-indent-level: 8 -*- */
/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

L.extend(L.DomEvent, {

	_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
	_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

	// inspired by Zepto touch code by Thomas Fuchs
	addDoubleTapListener: function (obj, handler, id) {
		var last, touch,
		    doubleTap = false,
		    delay = 250;

		function onTouchStart(e) {
			var count;

			if (L.Browser.pointer) {
				count = L.DomEvent._pointersCount;
			} else {
				count = e.touches.length;
			}

			if (count > 1) { return; }

			var now = Date.now(),
			    delta = now - (last || now);

			touch = e.touches ? e.touches[0] : e;
			doubleTap = (delta > 0 && delta <= delay);
			last = now;
		}

		function onTouchEnd() {
			if (doubleTap) {
				if (L.Browser.pointer) {
					// work around .type being readonly with MSPointer* events
					var newTouch = {},
					    prop, i;

					for (i in touch) {
						prop = touch[i];
						newTouch[i] = prop && prop.bind ? prop.bind(touch) : prop;
					}
					touch = newTouch;
				}
				touch.type = 'dblclick';
				touch.button = 0;
				handler(touch);
				last = null;
			}
		}

		var pre = '_leaflet_',
		    touchstart = this._touchstart,
		    touchend = this._touchend;

		obj[pre + touchstart + id] = onTouchStart;
		obj[pre + touchend + id] = onTouchEnd;

		obj.addEventListener(touchstart, onTouchStart, false);
		obj.addEventListener(touchend, onTouchEnd, false);
		return this;
	},

	removeDoubleTapListener: function (obj, id) {
		var pre = '_leaflet_',
		    touchend = obj[pre + this._touchend + id];

		obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
		obj.removeEventListener(this._touchend, touchend, false);

		return this;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */

L.extend(L.DomEvent, {

	POINTER_DOWN:   L.Browser.msPointer ? 'MSPointerDown'   : 'pointerdown',
	POINTER_MOVE:   L.Browser.msPointer ? 'MSPointerMove'   : 'pointermove',
	POINTER_UP:     L.Browser.msPointer ? 'MSPointerUp'     : 'pointerup',
	POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

	_pointers: {},
	_pointersCount: 0,

	// Provides a touch events wrapper for (ms)pointer events.
	// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

	addPointerListener: function (obj, type, handler, id) {

		if (type === 'touchstart') {
			this._addPointerStart(obj, handler, id);

		} else if (type === 'touchmove') {
			this._addPointerMove(obj, handler, id);

		} else if (type === 'touchend') {
			this._addPointerEnd(obj, handler, id);
		}

		return this;
	},

	removePointerListener: function (obj, type, id) {
		var handler = obj['_leaflet_' + type + id];

		if (type === 'touchstart') {
			obj.removeEventListener(this.POINTER_DOWN, handler, false);

		} else if (type === 'touchmove') {
			obj.removeEventListener(this.POINTER_MOVE, handler, false);

		} else if (type === 'touchend') {
			obj.removeEventListener(this.POINTER_UP, handler, false);
			obj.removeEventListener(this.POINTER_CANCEL, handler, false);
		}

		return this;
	},

	_addPointerStart: function (obj, handler, id) {
		var onDown = L.bind(function (e) {
			L.DomEvent.preventDefault(e);

			this._handlePointer(e, handler);
		}, this);

		obj['_leaflet_touchstart' + id] = onDown;
		obj.addEventListener(this.POINTER_DOWN, onDown, false);

		// need to keep track of what pointers and how many are active to provide e.touches emulation
		if (!this._pointerDocListener) {
			var pointerUp = L.bind(this._globalPointerUp, this);

			// we listen documentElement as any drags that end by moving the touch off the screen get fired there
			document.documentElement.addEventListener(this.POINTER_DOWN, L.bind(this._globalPointerDown, this), true);
			document.documentElement.addEventListener(this.POINTER_MOVE, L.bind(this._globalPointerMove, this), true);
			document.documentElement.addEventListener(this.POINTER_UP, pointerUp, true);
			document.documentElement.addEventListener(this.POINTER_CANCEL, pointerUp, true);

			this._pointerDocListener = true;
		}
	},

	_globalPointerDown: function (e) {
		this._pointers[e.pointerId] = e;
		this._pointersCount++;
	},

	_globalPointerMove: function (e) {
		if (this._pointers[e.pointerId]) {
			this._pointers[e.pointerId] = e;
		}
	},

	_globalPointerUp: function (e) {
		delete this._pointers[e.pointerId];
		this._pointersCount--;
	},

	_handlePointer: function (e, handler) {
		e.touches = [];
		for (var i in this._pointers) {
			e.touches.push(this._pointers[i]);
		}
		e.changedTouches = [e];

		handler(e);
	},

	_addPointerMove: function (obj, handler, id) {
		var onMove = L.bind(function (e) {
			// don't fire touch moves when mouse isn't down
			if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

			this._handlePointer(e, handler);
		}, this);

		obj['_leaflet_touchmove' + id] = onMove;
		obj.addEventListener(this.POINTER_MOVE, onMove, false);
	},

	_addPointerEnd: function (obj, handler, id) {
		var onUp = L.bind(function (e) {
			this._handlePointer(e, handler);
		}, this);

		obj['_leaflet_touchend' + id] = onUp;
		obj.addEventListener(this.POINTER_UP, onUp, false);
		obj.addEventListener(this.POINTER_CANCEL, onUp, false);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

L.Map.mergeOptions({
	touchZoom: L.Browser.touch && !L.Browser.android23,
	bounceAtZoomLimits: true
});

L.Map.TouchZoom = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;

		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToLayerPoint(e.touches[0]),
		    p2 = map.mouseEventToLayerPoint(e.touches[1]),
		    viewCenter = map._getCenterLayerPoint();

		this._startCenter = p1.add(p2)._divideBy(2);
		this._startDist = p1.distanceTo(p2);

		this._moved = false;
		if (map.getDocType() === 'spreadsheet') {
			this._zooming = false;
		}
		else {
			this._zooming = true;
		}

		this._centerOffset = viewCenter.subtract(this._startCenter);

		map.stop();

		L.DomEvent
		    .on(document, 'touchmove', this._onTouchMove, this)
		    .on(document, 'touchend', this._onTouchEnd, this);

		L.DomEvent.preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToLayerPoint(e.touches[0]),
		    p2 = map.mouseEventToLayerPoint(e.touches[1]);

		this._scale = p1.distanceTo(p2) / this._startDist;
		this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

		if (!map.options.bounceAtZoomLimits) {
			var currentZoom = map.getScaleZoom(this._scale);
			if ((currentZoom <= map.getMinZoom() && this._scale < 1) ||
		     (currentZoom >= map.getMaxZoom() && this._scale > 1)) { return; }
		}

		if (!this._moved) {
			map
			    .fire('movestart')
			    .fire('zoomstart');

			this._moved = true;
		}

		L.Util.cancelAnimFrame(this._animRequest);
		this._animRequest = L.Util.requestAnimFrame(this._updateOnMove, this, true, this._map._container);

		L.DomEvent.preventDefault(e);
	},

	_updateOnMove: function () {
		var map = this._map;

		if (map.options.touchZoom === 'center') {
			this._center = map.getCenter();
		} else {
			this._center = map.layerPointToLatLng(this._getTargetCenter());
		}

		this._zoom = map.getScaleZoom(this._scale);

		if (this._scale !== 1 || this._delta.x !== 0 || this._delta.y !== 0) {
			map._animateZoom(this._center, this._zoom, false, true);
		}
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		L.Util.cancelAnimFrame(this._animRequest);

		L.DomEvent
		    .off(document, 'touchmove', this._onTouchMove)
		    .off(document, 'touchend', this._onTouchEnd);

		var map = this._map,
		    oldZoom = map.getZoom(),
		    zoomDelta = this._zoom - oldZoom,
		    finalZoom = map._limitZoom(zoomDelta > 0 ? Math.ceil(this._zoom) : Math.floor(this._zoom));

		map._animateZoom(this._center, finalZoom, true, true);
	},

	_getTargetCenter: function () {
		var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
		return this._startCenter.add(centerOffset);
	}
});

L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);

/* -*- js-indent-level: 8; fill-column: 100 -*- */
/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

L.Map.mergeOptions({
	tap: true,
	tapTolerance: 15
});

L.Map.Tap = L.Handler.extend({
	addHooks: function () {
		if (!this._toolbar) {
			this._toolbar = L.control.contextToolbar();
		}
		L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onCursorClick: function (e) {
		L.DomEvent.preventDefault(e.originalEvent);

		var state = this._map['stateChangeHandler'].getItemValue('.uno:Paste');
		if (state !== 'disabled') {
			L.setOptions(this._toolbar, {item: 'paste'});
			this._toolbar._pos = this._map.latLngToContainerPoint(this._map._docLayer._visibleCursor.getNorthWest());
			this._toolbar.addTo(this._map);
		}
	},

	_onDown: function (e) {
		if (!e.touches || !this._map._docLayer) { return; }

		// console.log('=========> _onDown, e.touches.length=' + e.touches.length);

		// The start of a two-finger gesture comes in as first _onDown with e.touches.length
		// == 1, then _onDown with e.touches.length == 2.

		// The _wasSingleTap flag is supposed to mean "we got a single-finger quick tap with
		// no movement".

		// FIXME: Is there some saner place to store this _wasSingleTap flag than in
		// this._map._container? It needs to be readily available over in _handleDOMEvent in
		// Map.js.
		this._map._container._wasSingleTap = (e.touches.length === 1);

		L.DomEvent.preventDefault(e);

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    containerPoint = this._map.mouseEventToContainerPoint(first),
		    layerPoint = this._map.containerPointToLayerPoint(containerPoint),
		    latlng = this._map.layerPointToLatLng(layerPoint);
		this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

		if (!this._toolbar._map && this._map._docLayer.containsSelection(latlng)) {
			this._toolbar._pos = containerPoint;
			this._toolbar.addTo(this._map);
			return;
		}

		this._toolbar.remove();
		// simulate long hold but setting a timeout
		this._fireClick = true;
		this._holdTimeout = setTimeout(L.bind(function () {
			this._fireClick = false;
			if (this._isTapValid()) {
				this._fireDblClick = true;
				this._onUp(e);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		L.DomEvent.on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		// console.log('=========> _onUp, e.touches.length=' + e.touches.length + ', e.changedTouches.length=' + e.changedTouches.length);
		clearTimeout(this._holdTimeout);

		L.DomEvent.off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		var first = e.changedTouches[0];
		this._simulateEvent('mouseup', first);

		if (this._fireClick) {
			this._fireClick = false;
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
		if (this._fireDblClick) {
			this._simulateEvent('dblclick', first);
			this._fireDblClick = false;
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		var newPos = new L.Point(first.clientX, first.clientY);
		if (newPos.distanceTo(this._startPos) > this._map.options.tapTolerance) {
			this._newPos = newPos;
			this._map._container._wasSingleTap = false;
			this._simulateEvent('mousemove', first);
		}
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = {
			type: type,
			canBubble: false,
			cancelable: true,
			screenX: e.screenX,
			screenY: e.screenY,
			clientX: e.clientX,
			clientY: e.clientY,
			ctrlKey: false,
			altKey: false,
			shiftKey: false,
			metaKey: false,
			button: 0,
			target: e.target,
			preventDefault: function () {}
		};
		this._map._handleDOMEvent(simulatedEvent);
	}
});

if (L.Browser.touch && !L.Browser.pointer) {
	L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
}

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
  * (zoom to a selected bounding box), enabled by default.
 */

L.Map.mergeOptions({
	boxZoom: true
});

L.Map.BoxZoom = L.Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
	},

	addHooks: function () {
		L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		L.DomEvent.off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 0))) { return false; }

		this._moved = false;

		L.DomUtil.disableTextSelection();
		L.DomUtil.disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		L.DomEvent.on(document, {
			contextmenu: L.DomEvent.stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._container);
			L.DomUtil.addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new L.Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		L.DomUtil.setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			L.DomUtil.remove(this._box);
			L.DomUtil.removeClass(this._container, 'leaflet-crosshair');
		}

		L.DomUtil.enableTextSelection();
		L.DomUtil.enableImageDrag();

		L.DomEvent.off(document, {
			contextmenu: L.DomEvent.stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 0)) { return; }

		this._finish();

		if (!this._moved) { return; }
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

L.Map.mergeOptions({
	keyboard: true,
	keyboardPanOffset: 20,
	keyboardZoomOffset: 1
});

L.Map.Keyboard = L.Handler.extend({

	keyModifier: {
		shift: 4096,
		ctrl: 8192,
		alt: 16384,
		ctrlMac: 32768
	},

	keymap: {
		8   : 1283, // backspace	: BACKSPACE
		9   : 1282, // tab 		: TAB
		13  : 1280, // enter 		: RETURN
		16  : null, // shift		: UNKOWN
		17  : null, // ctrl		: UNKOWN
		18  : null, // alt		: UNKOWN
		19  : null, // pause/break	: UNKOWN
		20  : null, // caps lock	: UNKOWN
		27  : 1281, // escape		: ESCAPE
		32  : 1284, // space		: SPACE
		33  : 1030, // page up		: PAGEUP
		34  : 1031, // page down	: PAGEDOWN
		35  : 1029, // end		: END
		36  : 1028, // home		: HOME
		37  : 1026, // left arrow	: LEFT
		38  : 1025, // up arrow		: UP
		39  : 1027, // right arrow	: RIGHT
		40  : 1024, // down arrow	: DOWN
		45  : 1285, // insert		: INSERT
		46  : 1286, // delete		: DELETE
		48  : 256,  // 0		: NUM0
		49  : 257,  // 1		: NUM1
		50  : 258,  // 2		: NUM2
		51  : 259,  // 3		: NUM3
		52  : 260,  // 4		: NUM4
		53  : 261,  // 5		: NUM5
		54  : 262,  // 6		: NUM6
		55  : 263,  // 7		: NUM7
		56  : 264,  // 8		: NUM8
		57  : 265,  // 9		: NUM9
		65  : 512,  // A		: A
		66  : 513,  // B		: B
		67  : 514,  // C		: C
		68  : 515,  // D		: D
		69  : 516,  // E		: E
		70  : 517,  // F		: F
		71  : 518,  // G		: G
		72  : 519,  // H		: H
		73  : 520,  // I		: I
		74  : 521,  // J		: J
		75  : 522,  // K		: K
		76  : 523,  // L		: L
		77  : 524,  // M		: M
		78  : 525,  // N		: N
		79  : 526,  // O		: O
		80  : 527,  // P		: P
		81  : 528,  // Q		: Q
		82  : 529,  // R		: R
		83  : 530,  // S		: S
		84  : 531,  // T		: T
		85  : 532,  // U		: U
		86  : 533,  // V		: V
		87  : 534,  // W		: W
		88  : 535,  // X		: X
		89  : 536,  // Y		: Y
		90  : 537,  // Z		: Z
		91  : null, // left window key	: UNKOWN
		92  : null, // right window key	: UNKOWN
		93  : null, // select key	: UNKOWN
		96  : 256,  // numpad 0		: NUM0
		97  : 257,  // numpad 1		: NUM1
		98  : 258,  // numpad 2		: NUM2
		99  : 259,  // numpad 3		: NUM3
		100 : 260,  // numpad 4		: NUM4
		101 : 261,  // numpad 5		: NUM5
		102 : 262,  // numpad 6		: NUM6
		103 : 263,  // numpad 7		: NUM7
		104 : 264,  // numpad 8		: NUM8
		105 : 265,  // numpad 9		: NUM9
		106 : 1289, // multiply		: MULTIPLY
		107 : 1287, // add		: ADD
		109 : 1288, // subtract		: SUBTRACT
		110 : 1309, // decimal point	: DECIMAL
		111 : 1290, // divide		: DIVIDE
		112 : 768,  // f1		: F1
		113 : 769,  // f2		: F2
		114 : 770,  // f3		: F3
		115 : 771,  // f4		: F4
		116 : 772,  // f5		: F5
		117 : 773,  // f6		: F6
		118 : 774,  // f7		: F7
		119 : 775,  // f8		: F8
		120 : 776,  // f9		: F9
		121 : 777,  // f10		: F10
		122 : 778,  // f11		: F11
		144 : 1313, // num lock		: NUMLOCK
		145 : 1314, // scroll lock	: SCROLLLOCK
		173 : 1288, // dash		: DASH (on Firefox)
		186 : 1317, // semi-colon	: SEMICOLON
		187 : 1295, // equal sign	: EQUAL
		188 : 1292, // comma		: COMMA
		189 : 1288, // dash		: DASH
		190 : null, // period		: UNKOWN
		191 : null, // forward slash	: UNKOWN
		192 : null, // grave accent	: UNKOWN
		219 : null, // open bracket	: UNKOWN
		220 : null, // back slash	: UNKOWN
		221 : null, // close bracket	: UNKOWN
		222 : null  // single quote	: UNKOWN
	},

	handleOnKeyDownKeys: {
		// these keys need to be handled on keydown in order for them
		// to work on chrome
		8   : true, // backspace
		9   : true, // tab
		19  : true, // pause/break
		20  : true, // caps lock
		27  : true, // escape
		33  : true, // page up
		34  : true, // page down
		35  : true, // end
		36  : true, // home
		37  : true, // left arrow
		38  : true, // up arrow
		39  : true, // right arrow
		40  : true, // down arrow
		45  : true, // insert
		46  : true, // delete
		113 : true  // f2
	},

	keyCodes: {
		pageUp:   33,
		pageDown: 34,
		enter:    13
	},

	navigationKeyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 173]
	},

	initialize: function (map) {
		this._map = map;
		this._setPanOffset(map.options.keyboardPanOffset);
		this._setZoomOffset(map.options.keyboardZoomOffset);
		this.modifier = 0;
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex === -1) {
			container.tabIndex = '0';
		}

		this._map.on('mousedown', this._onMouseDown, this);
		this._map.on('keydown keyup keypress', this._onKeyDown, this);
		this._map.on('compositionstart compositionupdate compositionend textInput', this._onIME, this);
	},

	removeHooks: function () {
		this._map.off('mousedown', this._onMouseDown, this);
		this._map.off('keydown keyup keypress', this._onKeyDown, this);
		this._map.off('compositionstart compositionupdate compositionend textInput', this._onIME, this);
	},

	/*
	 * Returns true whenever the key event shall be ignored.
	 * This means shift+insert and shift+delete (or "insert or delete when holding
	 * shift down"). Those events are handled elsewhere to trigger "cut" and 
	 * "paste" events, and need to be ignored in order to avoid double-handling them.
	 */
	_ignoreKeyEvent: function(e) {
		var shift = e.originalEvent.shiftKey;
		if ('key' in e.originalEvent) {
			var key = e.originalEvent.key;
			return (shift && (key === 'Delete' || key === 'Insert'));
		} else {
			// keyCode is not reliable in AZERTY/DVORAK keyboard layouts, is used
			// only as a fallback for MSIE8.
			var keyCode = e.originalEvent.keyCode;
			return (shift && (keyCode === 45 || keyCode === 46));
		}
	},

	_setPanOffset: function (pan) {
		var keys = this._panKeys = {},
		    codes = this.navigationKeyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * pan, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [pan, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, pan];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * pan];
		}
	},

	_setZoomOffset: function (zoom) {
		var keys = this._zoomKeys = {},
		    codes = this.navigationKeyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoom;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoom;
		}
	},

	_onMouseDown: function () {
		this._map.notifyActive();
		if (this._map._permission === 'edit') {
			return;
		}
		this._map.focus();
	},

	// Convert javascript key codes to UNO key codes.
	_toUNOKeyCode: function (keyCode) {
		return this.keymap[keyCode] || keyCode;
	},

	_onKeyDown: function (e, keyEventFn, compEventFn, inputEle) {
		this._map.notifyActive();
		if (this._map.slideShow && this._map.slideShow.fullscreen) {
			return;
		}
		var docLayer = this._map._docLayer;
		if (!keyEventFn) {
			// default is to post keyboard events on the document
			keyEventFn = L.bind(docLayer._postKeyboardEvent, docLayer);
		}
		if (!compEventFn) {
			// document has winid=0
			compEventFn = L.bind(docLayer._postCompositionEvent, docLayer, 0 /* winid */);
		}
		if (!inputEle) {
			inputEle = this._map._clipboardContainer.activeElement();
		}
		this.modifier = 0;
		var shift = e.originalEvent.shiftKey ? this.keyModifier.shift : 0;
		var ctrl = e.originalEvent.ctrlKey ? this.keyModifier.ctrl : 0;
		var alt = e.originalEvent.altKey ? this.keyModifier.alt : 0;
		var cmd = e.originalEvent.metaKey ? this.keyModifier.ctrl : 0;
		var location = e.originalEvent.location;
		this._keyHandled = this._keyHandled || false;
		this.modifier = shift | ctrl | alt | cmd;

		// On Windows, pressing AltGr = Alt + Ctrl
		// Presence of AltGr is detected if previous Ctrl + Alt 'location' === 2 (i.e right)
		// because Ctrl + Alt + <some char> won't give any 'location' information.
		if (ctrl && alt) {
			if (e.type === 'keydown' && location === 2) {
				this._prevCtrlAltLocation = location;
				return;
			}
			else if (location === 1) {
				this._prevCtrlAltLocation = undefined;
			}

			if (this._prevCtrlAltLocation === 2 && location === 0) {
				// and we got the final character
				if (e.type === 'keypress') {
					ctrl = alt = this.modifier = 0;
				}
				else {
					// Don't handle remnant 'keyup'
					return;
				}
			}
		}

		if (ctrl || cmd) {
			if (this._handleCtrlCommand(e)) {
				return;
			}
		}

		var charCode = e.originalEvent.charCode;
		var keyCode = e.originalEvent.keyCode;

		if (!this._isComposing && e.type === 'keyup') {
			// not compositing and keyup, clear the input so it is ready
			// for next word (or char only)
			inputEle.value = '';
		}

		if ((this.modifier == this.keyModifier.alt || this.modifier == this.keyModifier.shift + this.keyModifier.alt) &&
		    keyCode >= 48) {
			// Presumably a Mac or iOS client accessing a "special character". Just ignore the alt modifier.
			// But don't ignore it for Alt + non-printing keys.
			this.modifier -= alt;
			alt = 0;
		}

		// handle help - F1
		if (e.type === 'keydown' && !shift && !ctrl && !alt && !cmd && keyCode === 112) {
			this._map.showHelp();
			e.originalEvent.preventDefault();
			return;
		}

		var unoKeyCode = this._toUNOKeyCode(keyCode);

		if (this.modifier) {
			unoKeyCode |= this.modifier;
			if (e.type !== 'keyup' && (this.modifier !== shift || (keyCode === 32 && !docLayer._isCursorVisible))) {
				keyEventFn('input', charCode, unoKeyCode);
				e.originalEvent.preventDefault();
				return;
			}
		}

		if (this._map._permission === 'edit') {
			docLayer._resetPreFetching();

			if (this._ignoreKeyEvent(e)) {
				// key ignored
			}
			else if (e.type === 'keydown') {
				this._keyHandled = false;

				if (this.handleOnKeyDownKeys[keyCode] && charCode === 0) {
					keyEventFn('input', charCode, unoKeyCode);
				}
			}
			else if ((e.type === 'keypress') && (!this.handleOnKeyDownKeys[keyCode] || charCode !== 0)) {
				if (charCode === keyCode && charCode !== 13) {
					// Chrome sets keyCode = charCode for printable keys
					// while LO requires it to be 0
					keyCode = 0;
					unoKeyCode = this._toUNOKeyCode(keyCode);
				}
				if (docLayer._debug) {
					// key press times will be paired with the invalidation messages
					docLayer._debugKeypressQueue.push(+new Date());
				}

				keyEventFn('input', charCode, unoKeyCode);
				this._keyHandled = true;
			}
			else if (e.type === 'keyup') {
				keyEventFn('up', charCode, unoKeyCode);
				this._keyHandled = true;
			}
			if (keyCode === 9) {
				// tab would change focus to other DOM elements
				e.originalEvent.preventDefault();
			}
		}
		else if (!this.modifier && (e.originalEvent.keyCode === 33 || e.originalEvent.keyCode === 34)) {
			// let the scrollbar handle page up / page down when viewing
			return;
		}
		else if (e.type === 'keydown') {
			var key = e.originalEvent.keyCode;
			var map = this._map;
			if (key in this._panKeys && !e.originalEvent.shiftKey) {
				if (map._panAnim && map._panAnim._inProgress) {
					return;
				}
				map.fire('scrollby', {x: this._panKeys[key][0], y: this._panKeys[key][1]});
			}
			else if (key in this._panKeys && e.originalEvent.shiftKey &&
					docLayer._selections.getLayers().length !== 0) {
				// if there is a selection and the user wants to modify it
				keyEventFn('input', charCode, unoKeyCode);
			}
			else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
			}
		}

		L.DomEvent.stopPropagation(e.originalEvent);
	},

	_onIME: function (e) {
		this._map.notifyActive();
		if (e.type === 'compositionstart') {
			this._isComposing = true; // we are starting composing with IME
		} else if (e.type === 'compositionupdate') {
			this._map._docLayer._postCompositionEvent(0, 'input', e.originalEvent.data);
		} else if (e.type === 'compositionend') {
			this._isComposing = false; // stop of composing with IME
			// get the composited char codes
			// clear the input now - best to do this ASAP so the input
			// is clear for the next word
			this._map._clipboardContainer.setValue('');
			// Set all keycodes to zero
			this._map._docLayer._postCompositionEvent(0, 'end', e.originalEvent.data);
		}

		if (e.type === 'textInput' && !this._keyHandled && !this._isComposing) {
			// Hack for making space and spell-check text insert work
			// in Chrome (on Andorid) or Chrome with IME.
			//
			// Chrome (Android) IME triggers keyup/keydown input with
			// code 229 when hitting space (as with all composiiton events)
			// with addition to 'textinput' event, in which we only see that
			// space was entered. Similar situation is also when inserting
			// a soft-keyboard spell-check item - it is visible only with
			// 'textinput' event (no composition event is fired).
			// To make this work we need to insert textinput.data here..
			//
			// TODO: Maybe make sure this is only triggered when keydown has
			// 229 code. Also we need to detect that composition was overriden
			// (part or whole word deleted) with the spell-checked word. (for
			// example: enter 'tar' and with spell-check correct that to 'rat')
			var data = e.originalEvent.data;
			for (var idx = 0; idx < data.length; idx++) {
				this._map._docLayer._postKeyboardEvent('input', data[idx].charCodeAt(), 0);
			}
		}
	},

	_handleCtrlCommand: function (e) {
		// Control
		if (e.originalEvent.keyCode == 17)
			return true;

		if (e.type !== 'keydown' && e.originalEvent.key !== 'c' && e.originalEvent.key !== 'v' && e.originalEvent.key !== 'x' &&
			/* Safari */ e.originalEvent.keyCode !== 99 && e.originalEvent.keyCode !== 118 && e.originalEvent.keyCode !== 120) {
			e.originalEvent.preventDefault();
			return true;
		}

		if (e.originalEvent.keyCode !== 67 && e.originalEvent.keyCode !== 86 && e.originalEvent.keyCode !== 88 &&
			/* Safari */ e.originalEvent.keyCode !== 99 && e.originalEvent.keyCode !== 118 && e.originalEvent.keyCode !== 120 &&
			e.originalEvent.key !== 'c' && e.originalEvent.key !== 'v' && e.originalEvent.key !== 'x') {
			// not copy or paste
			e.originalEvent.preventDefault();
		}

		if (e.originalEvent.ctrlKey && e.originalEvent.shiftKey && e.originalEvent.key === '?') {
			this._map.showLOKeyboardHelp();
			e.originalEvent.preventDefault();
			return true;
		}

		if (e.originalEvent.ctrlKey && (e.originalEvent.key === 'z' || e.originalEvent.key === 'Z')) {
			this._map._socket.sendMessage('uno .uno:Undo');
			e.originalEvent.preventDefault();
			return true;
		}

		if (e.originalEvent.ctrlKey && (e.originalEvent.key === 'y' || e.originalEvent.key === 'Y')) {
			this._map._socket.sendMessage('uno .uno:Redo');
			e.originalEvent.preventDefault();
			return true;
		}

		if (e.originalEvent.altKey || e.originalEvent.shiftKey) {

			// need to handle Ctrl + Alt + C separately for Firefox
			if (e.originalEvent.key === 'c' && e.originalEvent.altKey) {
				this._map.insertComment();
				return true;
			}

			// Ctrl + Alt
			if (!e.originalEvent.shiftKey) {
				switch (e.originalEvent.keyCode) {
				case 53: // 5
					this._map._socket.sendMessage('uno .uno:Strikeout');
					return true;
				case 70: // f
					this._map._socket.sendMessage('uno .uno:InsertFootnote');
					return true;
				case 67: // c
				case 77: // m
					this._map._socket.sendMessage('uno .uno:InsertAnnotation');
					return true;
				case 68: // d
					this._map._socket.sendMessage('uno .uno:InsertEndnote');
					return true;
				}
			} else if (e.originalEvent.altKey) {
				switch (e.originalEvent.keyCode) {
				case 68: // Ctrl + Shift + Alt + d for tile debugging mode
					this._map._docLayer.toggleTileDebugMode();
				}
			}

			return false;
		}

		switch (e.originalEvent.keyCode) {
		case 51: // 3
			if (this._map.getDocType() === 'spreadsheet') {
				this._map._socket.sendMessage('uno .uno:SetOptimalColumnWidthDirect');
				this._map._socket.sendMessage('commandvalues command=.uno:ViewRowColumnHeaders');
				return true;
			}
			return false;
		case 53: // 5
			if (this._map.getDocType() === 'spreadsheet') {
				this._map._socket.sendMessage('uno .uno:Strikeout');
				return true;
			}
			return false;
		case 67: // c
		case 88: // x
		case 99: // c (Safari)
		case 120: // x (Safari)
		case 91: // Left Cmd (Safari)
		case 93: // Right Cmd (Safari)
			// we prepare for a copy or cut event
			this._map._clipboardContainer.setValue(window.getSelection().toString());
			this._map.focus();
			this._map._clipboardContainer.select();
			return true;
		case 80: // p
			this._map.print();
			return true;
		case 83: // s
			this._map.save(false /* An explicit save should terminate cell edit */,
			               false /* An explicit save should save it again */);
			return true;
		case 86: // v
		case 118: // v (Safari)
			return true;
		case 112: // f1
			this._map._socket.sendMessage('uno .uno:NoteVisible');
			return true;
		case 188: // ,
			this._map._socket.sendMessage('uno .uno:SubScript');
			return true;
		case 190: // .
			this._map._socket.sendMessage('uno .uno:SuperScript');
			return true;
		}
		if (e.type === 'keypress' && (e.originalEvent.ctrlKey || e.originalEvent.metaKey) &&
			(e.originalEvent.key === 'c' || e.originalEvent.key === 'v' || e.originalEvent.key === 'x')) {
			// need to handle this separately for Firefox
			return true;
		}
		return false;
	}
});

L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);

/* -*- js-indent-level: 8 -*- */
/*
 * Extends the event handling code with triple and quadruple click support
 * This is vaguely based on the DomEvent.DoubleTap implementation.
 */

L.extend(L.DomEvent, {

	addMultiClickListener: function (obj, handler, id) {
		var last = [],
		    delay = 250;

		function onClick(e) {
			var now = Date.now();
			var delta = 0;
			if (last) {
				delta = now - (last[last.length - 1] || now);
			}

			var doubleTap = (delta > 0 && delta <= delay);

			var tripleTap = false;
			if (last.length > 1 && doubleTap) {
				var delta2 = last[last.length - 1] - last[last.length - 2];
				tripleTap = (delta2 > 0 && delta2 <= delay);
			}

			if (tripleTap) {

				var quadTap = false;
				if (last.length > 2 && tripleTap) {
					var delta3 = last[last.length - 2] - last[last.length - 3];
					quadTap = (delta3 > 0 && delta3 <= delay);
				}

				// We can't modify e as it's a native DOM object, hence we copy
				// what we need instead. (I am however unable to actually find any
				// documentation regarding this anywhere.)
				var eOut = {
					type: quadTap ? 'qdrplclick' : 'trplclick',
					clientX: e.clientX,
					clientY: e.clientY,
					button: e.button,
					target: e.target
				};

				handler(eOut);
			}

			last.push(now);
			while (last.length > 3) {
				last.shift();
			}
		}

		obj['_leaflet_click' + id] = onClick;

		obj.addEventListener('click', onClick, false);
		return this;
	},

	removeMultiClickListener: function (obj, id) {
		obj.removeEventListener('click', obj['_leaflet_click' + id], false);

		return this;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.Mouse is handling mouse interaction with the document
 */

L.Map.mergeOptions({
	mouse: true
});

L.Map.Mouse = L.Handler.extend({

	initialize: function (map) {
		this._map = map;
		this._mouseEventsQueue = [];
		this._prevMousePos = null;
	},

	addHooks: function () {
		this._map.on('mousedown mouseup mouseover mouseout mousemove dblclick trplclick qdrplclick',
			this._onMouseEvent, this);
	},

	removeHooks: function () {
		this._map.off('mousedown mouseup mouseover mouseout mousemove dblclick trplclick qdrplclick',
			this._onMouseEvent, this);
	},

	LOButtons: {
		left: 1,
		middle: 2,
		right: 4
	},

	JSButtons: {
		left: 0,
		middle: 1,
		right: 2
	},

	_onMouseEvent: function (e) {
		this._map.notifyActive();
		var docLayer = this._map._docLayer;
		if (!docLayer || (this._map.slideShow && this._map.slideShow.fullscreen) || this._map.rulerActive) {
			return;
		}
		if (docLayer._graphicMarker) {
			if (docLayer._graphicMarker.isDragged) {
				return;
			}
			if (!docLayer._isEmptyRectangle(docLayer._graphicSelection)) {
				// if we have a graphic selection and the user clicks inside the rectangle
				var isInside = docLayer._graphicMarker.getBounds().contains(e.latlng);
				if (e.type === 'mousedown' && isInside) {
					this._prevMousePos = e.latlng;
				}
				else if (e.type === 'mousemove' && this._mouseDown) {
					if (!this._prevMousePos && isInside) {
						// if the user started to drag the shape before the selection
						// has been drawn
						this._prevMousePos = e.latlng;
					}
					else {
						this._prevMousePos = e.latlng;
					}
				}
				else if (e.type === 'mouseup') {
					this._prevMousePos = null;
				}
			}
		}

		for (var key in docLayer._selectionHandles) {
			if (docLayer._selectionHandles[key].isDragged) {
				return;
			}
		}

		var modifier = 0;
		var shift = e.originalEvent.shiftKey ? this._map.keyboard.keyModifier.shift : 0;
		var ctrl = e.originalEvent.ctrlKey ? this._map.keyboard.keyModifier.ctrl : 0;
		var alt = e.originalEvent.altKey ? this._map.keyboard.keyModifier.alt : 0;
		var cmd = e.originalEvent.metaKey ? this._map.keyboard.keyModifier.ctrlMac : 0;
		modifier = shift | ctrl | alt | cmd;

		var buttons = 0;
		buttons |= e.originalEvent.button === this.JSButtons.left ? this.LOButtons.left : 0;
		buttons |= e.originalEvent.button === this.JSButtons.middle ? this.LOButtons.middle : 0;
		buttons |= e.originalEvent.button === this.JSButtons.right ? this.LOButtons.right : 0;

		var mouseEnteringLeavingMap = this._map._mouseEnteringLeaving;

		if (mouseEnteringLeavingMap && e.type === 'mouseover' && this._mouseDown) {
			L.DomEvent.off(document, 'mousemove', this._onMouseMoveOutside, this);
			L.DomEvent.off(document, 'mouseup', this._onMouseUpOutside, this);
			L.DomEvent.off(this._map._resizeDetector.contentWindow, 'mousemove', this._onMouseMoveOutside, this);
			L.DomEvent.off(this._map._resizeDetector.contentWindow, 'mouseup', this._onMouseUpOutside, this);
		}
		else if (e.type === 'mousedown') {
			docLayer._resetPreFetching();
			this._mouseDown = true;
			if (this._holdMouseEvent) {
				clearTimeout(this._holdMouseEvent);
			}
			var mousePos = docLayer._latLngToTwips(e.latlng);
			this._mouseEventsQueue.push(L.bind(function() {
				this._postMouseEvent('buttondown', mousePos.x, mousePos.y, 1, buttons, modifier);
			}, docLayer));
			this._holdMouseEvent = setTimeout(L.bind(this._executeMouseEvents, this), 500);
		}
		else if (e.type === 'mouseup') {
			this._mouseDown = false;
			if (this._map.dragging.enabled()) {
				if (this._mouseEventsQueue.length === 0) {
					// mouse up after panning
					return;
				}
			}
			clearTimeout(this._holdMouseEvent);
			this._holdMouseEvent = null;
			if (this._clickTime && Date.now() - this._clickTime <= 250) {
				// double click, a click was sent already
				this._mouseEventsQueue = [];
				this._clickCount++;
				if (this._clickCount < 4) {
					// Reset the timer in order to keep resetting until
					// we could have sent through a quadruple click. After this revert
					// to normal behaviour so that a following single-click is treated
					// as a separate click, in order to match LO desktop behaviour.
					// (Clicking five times results in paragraph selection after 4 clicks,
					// followed by resetting to a single cursor and no selection on the
					// fifth click.)
					this._clickTime = Date.now();
				}
				return;
			}
			else {
				this._clickTime = Date.now();
				this._clickCount = 1;
				mousePos = docLayer._latLngToTwips(e.latlng);
				var timeOut = 250;
				if (this._map._permission === 'edit') {
					timeOut = 0;
				}
				this._mouseEventsQueue.push(L.bind(function() {
					var docLayer = this._map._docLayer;
					this._mouseEventsQueue = [];
					docLayer._postMouseEvent('buttonup', mousePos.x, mousePos.y, 1, buttons, modifier);
					this._map.focus();
				}, this));
				this._holdMouseEvent = setTimeout(L.bind(this._executeMouseEvents, this), timeOut);

				for (key in docLayer._selectionHandles) {
					var handle = docLayer._selectionHandles[key];
					if (handle._icon) {
						L.DomUtil.removeClass(handle._icon, 'leaflet-not-clickable');
					}
				}
			}

			this._map.fire('scrollvelocity', {vx: 0, vy: 0});
		}
		else if (e.type === 'mousemove' && this._mouseDown) {
			if (this._holdMouseEvent) {
				clearTimeout(this._holdMouseEvent);
				this._holdMouseEvent = null;
				if (this._map.dragging.enabled()) {
					// The user just panned the document
					this._mouseEventsQueue = [];
					return;
				}
				for (var i = 0; i < this._mouseEventsQueue.length; i++) {
					// synchronously execute old mouse events so we know that
					// they arrive to the server before the move command
					this._mouseEventsQueue[i]();
				}
				this._mouseEventsQueue = [];
			}
			if (!this._map.dragging.enabled()) {
				mousePos = docLayer._latLngToTwips(e.latlng);
				docLayer._postMouseEvent('move', mousePos.x, mousePos.y, 1, buttons, modifier);

				for (key in docLayer._selectionHandles) {
					handle = docLayer._selectionHandles[key];
					if (handle._icon) {
						L.DomUtil.addClass(handle._icon, 'leaflet-not-clickable');
					}
				}

				this._map.fire('handleautoscroll', {pos: e.containerPoint, map: this._map});
			}
		}
		else if (e.type === 'mousemove' && !this._mouseDown) {
			clearTimeout(this._mouseOverTimeout);
			mousePos = docLayer._latLngToTwips(e.latlng);
			this._mouseOverTimeout = setTimeout(L.bind(function() {
				docLayer._postMouseEvent('move', mousePos.x, mousePos.y, 1, 0, modifier);
			  }, this),
			  100);
		}
		else if (e.type === 'dblclick' || e.type === 'trplclick' || e.type === 'qdrplclick') {
			mousePos = docLayer._latLngToTwips(e.latlng);
			var clicks = {
				dblclick: 2,
				trplclick: 3,
				qdrplclick: 4
			};
			var count = clicks[e.type];

			docLayer._postMouseEvent('buttondown', mousePos.x, mousePos.y, count, buttons, modifier);
			docLayer._postMouseEvent('buttonup', mousePos.x, mousePos.y, count, buttons, modifier);
		}
		else if (mouseEnteringLeavingMap && e.type === 'mouseout' && this._mouseDown) {
			L.DomEvent.on(this._map._resizeDetector.contentWindow, 'mousemove', this._onMouseMoveOutside, this);
			L.DomEvent.on(this._map._resizeDetector.contentWindow, 'mouseup', this._onMouseUpOutside, this);
			L.DomEvent.on(document, 'mousemove', this._onMouseMoveOutside, this);
			L.DomEvent.on(document, 'mouseup', this._onMouseUpOutside, this);
		}
	},

	_executeMouseEvents: function () {
		this._holdMouseEvent = null;
		for (var i = 0; i < this._mouseEventsQueue.length; i++) {
			this._mouseEventsQueue[i]();
		}
		this._mouseEventsQueue = [];
	},

	_onMouseMoveOutside: function (e) {
		this._map._handleDOMEvent(e);
		if (this._map.dragging.enabled()) {
			this._map.dragging._draggable._onMove(e);
		}
	},

	_onMouseUpOutside: function (e) {
		this._mouseDown = false;
		L.DomEvent.off(document, 'mousemove', this._onMouseMoveOutside, this);
		L.DomEvent.off(document, 'mouseup', this._onMouseUpOutside, this);
		L.DomEvent.off(this._map._resizeDetector.contentWindow, 'mousemove', this._onMouseMoveOutside, this);
		L.DomEvent.off(this._map._resizeDetector.contentWindow, 'mouseup', this._onMouseUpOutside, this);

		this._map._handleDOMEvent(e);
		if (this._map.dragging.enabled()) {
			this._map.dragging._draggable._onUp(e);
		}
	}
});

L.Map.addInitHook('addHandler', 'mouse', L.Map.Mouse);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.Print is handling the print action
 */

L.Map.mergeOptions({
	printHandler: true
});

L.Map.Print = L.Handler.extend({

	initialize: function (map) {
		this._map = map;
	},

	addHooks: function () {
		this._map.on('filedownloadready', this._onFileReady, this);
	},

	removeHooks: function () {
		this._map.off('filedownloadready', this._onFileReady, this);
	},

	_onFileReady: function (e) {
		// we need to load the pdf document and pass it to the iframe as an
		// object URL, because else we might have cross origin security problems
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = L.bind(function () {
			if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
				this._onInitPrint(xmlHttp);
			}
		}, this);
		xmlHttp.open('GET', e.url, true);
		xmlHttp.responseType = 'blob';
		xmlHttp.send();
	},

	_onInitPrint: function (e) {
		var blob = new Blob([e.response], {type: 'application/pdf'});
		var url = URL.createObjectURL(blob);
		this._printIframe = L.DomUtil.create('iframe', '', document.body);
		this._printIframe.onload = L.bind(this._onIframeLoaded, this);
		L.DomUtil.setStyle(this._printIframe, 'visibility', 'hidden');
		L.DomUtil.setStyle(this._printIframe, 'position', 'fixed');
		L.DomUtil.setStyle(this._printIframe, 'right', '0');
		L.DomUtil.setStyle(this._printIframe, 'bottom', '0');
		this._printIframe.src = url;
	},

	_onIframeLoaded: function () {
		this._printIframe.contentWindow.focus(); // Required for IE
		this._printIframe.contentWindow.print();
		// couldn't find another way to remove it
		setTimeout(L.bind(this._closePrintIframe, this, this._printIframe), 300 * 1000);
	},

	_closePrintIframe: function (printIframe) {
		L.DomUtil.remove(printIframe);
		this._map.focus();
	}
});

L.Map.addInitHook('addHandler', 'printHandler', L.Map.Print);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.SlideShow is handling the slideShow action
 */

L.Map.mergeOptions({
	slideShow: true
});

L.Map.SlideShow = L.Handler.extend({

	initialize: function (map) {
		this._map = map;
	},

	addHooks: function () {
		this._map.on('fullscreen', this._onFullScreen, this);
		this._map.on('slidedownloadready', this._onSlideDownloadReady, this);
	},

	removeHooks: function () {
		this._map.off('fullscreen', this._onFullScreen, this);
		this._map.off('slidedownloadready', this._onSlideDownloadReady, this);
	},

	_onFullScreen: function () {
		if (window.ThisIsTheiOSApp) {
			window.postMobileMessage('SLIDESHOW');
			return;
		}
		this._slideShow = L.DomUtil.create('iframe', 'leaflet-slideshow', this._map._container);
		if (this._slideShow.requestFullscreen) {
			this._slideShow.requestFullscreen();
		}
		else if (this._slideShow.msRequestFullscreen) {
			this._slideShow.msRequestFullscreen();
		}
		else if (this._slideShow.mozRequestFullScreen) {
			this._slideShow.mozRequestFullScreen();
		}
		else if (this._slideShow.webkitRequestFullscreen) {
			this._slideShow.webkitRequestFullscreen();
		}

		L.DomEvent.on(document, 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange',
				this._onFullScreenChange, this);

		this.fullscreen = true;
		this._map.downloadAs('slideshow.svg', 'svg', null, 'slideshow');
	},

	_onFullScreenChange: function () {

		this.fullscreen = document.fullscreen ||
			document.webkitIsFullScreen ||
			document.mozFullScreen ||
			document.msFullscreenElement;
		if (!this.fullscreen) {
			L.DomUtil.remove(this._slideShow);
		}
	},

	_onSlideDownloadReady: function (e) {
		this._slideShow.src = e.url;
		this._slideShow.contentWindow.focus();
	}
});

L.Map.addInitHook('addHandler', 'slideShow', L.Map.SlideShow);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.FileInserter is handling the fileInserter action
 */

/* global _ Uint8Array */

L.Map.mergeOptions({
	fileInserter: true
});

L.Map.FileInserter = L.Handler.extend({

	initialize: function (map) {
		this._map = map;
		this._childId = null;
		this._toInsert = {};
		this._toInsertURL = {};
		var parser = document.createElement('a');
		parser.href = map.options.server;
	},

	getWopiUrl: function (map) {
		var wopiSrc = '';
		if (map.options.wopiSrc != '') {
			wopiSrc = '?WOPISrc=' + map.options.wopiSrc;
		}
		return map.options.webserver + map.options.serviceRoot + '/' + map.options.urlPrefix +
			'/' + encodeURIComponent(map.options.doc) + '/insertfile' + wopiSrc;
	},

	addHooks: function () {
		this._map.on('insertfile', this._onInsertFile, this);
		this._map.on('inserturl', this._onInsertURL, this);
		this._map.on('childid', this._onChildIdMsg, this);
	},

	removeHooks: function () {
		this._map.off('insertfile', this._onInsertFile, this);
		this._map.off('inserturl', this._onInsertURL, this);
		this._map.off('childid', this._onChildIdMsg, this);
	},

	_onInsertFile: function (e) {
		if (!this._childId) {
			this._map._socket.sendMessage('getchildid');
			this._toInsert[Date.now()] = e.file;
		}
		else {
			this._sendFile(Date.now(), e.file);
		}
	},

	_onInsertURL: function (e) {
		if (!this._childId) {
			this._map._socket.sendMessage('getchildid');
			this._toInsertURL[Date.now()] = e.url;
		}
		else {
			this._sendURL(Date.now(), e.url);
		}
	},

	_onChildIdMsg: function (e) {
		this._childId = e.id;
		for (var name in this._toInsert) {
			this._sendFile(name, this._toInsert[name]);
		}
		this._toInsert = {};

		for (name in this._toInsertURL) {
			this._sendURL(name, this._toInsertURL[name]);
		}
		this._toInsertURL = {};
	},

	_sendFile: function (name, file) {
		var socket = this._map._socket;
		var map = this._map;
		var url = this.getWopiUrl(map);

		if (window.ThisIsAMobileApp) {
			// Pass the file contents as a base64-encoded parameter in an insertfile message
			var reader = new FileReader();
			reader.onload = (function(aFile) {
				return function(e) {
					var byteBuffer = new Uint8Array(e.target.result);
					var strBytes = '';
					for (var i = 0; i < byteBuffer.length; i++) {
						strBytes += String.fromCharCode(byteBuffer[i]);
					}
					window.postMobileMessage('insertfile name=' + aFile.name + ' type=graphic' +
										       ' data=' + window.btoa(strBytes));
				};
			})(file);
			reader.onerror = function(e) {
				window.postMobileError('Error when reading file: ' + e);
			};
			reader.onprogress = function(e) {
				window.postMobileDebug('FileReader progress: ' + Math.round(e.loaded*100 / e.total) + '%');
			};
			reader.readAsArrayBuffer(file);
		} else {
			var xmlHttp = new XMLHttpRequest();
			this._map.showBusy(_('Uploading...'), false);
			xmlHttp.onreadystatechange = function () {
				if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
					map.hideBusy();
					socket.sendMessage('insertfile name=' + name + ' type=graphic');
				}
			};
			xmlHttp.open('POST', url, true);
			var formData = new FormData();
			formData.append('name', name);
			formData.append('childid', this._childId);
			if (file.filename && file.url) {
				formData.append('url', file.url);
				formData.append('filename', file.filename);
			} else {
				formData.append('file', file);
			}
			xmlHttp.send(formData);
		}
	},

	_sendURL: function (name, url) {
		this._map._socket.sendMessage('insertfile name=' + encodeURIComponent(url) + ' type=graphicurl');
	}
});

L.Map.addInitHook('addHandler', 'fileInserter', L.Map.FileInserter);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Map.StateChanges stores the state changes commands coming from core
 * LOK_CALLBACK_STATE_CHANGED callback
 */

L.Map.mergeOptions({
	stateChangeHandler: true
});

L.Map.StateChangeHandler = L.Handler.extend({

	initialize: function (map) {
		this._map = map;
		// Contains the items for which state will be tracked
		// Stores the last received value from core ('true', 'false', 'enabled', 'disabled')
		this._items = {};
	},

	addHooks: function () {
		this._map.on('commandstatechanged', this._onStateChanged, this);
	},

	removeHooks: function () {
		this._map.off('commandstatechanged', this._onStateChanged, this);
	},

	_onStateChanged: function(e) {
		var index = e.state.indexOf('{');
		var state = index !== -1 ? JSON.parse(e.state.substring(index)) : e.state;
		this._items[e.commandName] = state;
	},

	getItems: function() {
		return this._items;
	},

	getItemValue: function(unoCmd) {
		if (unoCmd && unoCmd.substring(0, 5) !== '.uno:') {
			unoCmd = '.uno:' + unoCmd;
		}

		return this._items[unoCmd];
	}
});

L.Map.addInitHook('addHandler', 'stateChangeHandler', L.Map.StateChangeHandler);

/* -*- js-indent-level: 8 -*- */
/*
 * L.WOPI contains WOPI related logic
 */

/* global $ w2ui toolbarUpMobileItems _ */
L.Map.WOPI = L.Handler.extend({
	// If the CheckFileInfo call fails on server side, we won't have any PostMessageOrigin.
	// So use '*' because we still needs to send 'close' message to the parent frame which
	// wouldn't be possible otherwise.
	PostMessageOrigin: '*',
	BaseFileName: '',
	DocumentLoadedTime: false,
	HidePrintOption: false,
	HideSaveOption: false,
	HideExportOption: false,
	HideChangeTrackingControls: false,
	DisablePrint: false,
	DisableExport: false,
	DisableCopy: false,
	DisableInactiveMessages: false,
	UserCanNotWriteRelative: true,
	EnableInsertRemoteImage: false,
	EnableShare: false,
	HideUserList: null,
	CallPythonScriptSource: null,
	SupportsRename: false,
	UserCanRename: false,

	_appLoadedConditions: {
		docloaded: false,
		updatepermission: false,
		viewinfo: false /* Whether view information has already arrived */
	},

	_appLoaded: false,

	initialize: function(map) {
		this._map = map;
	},

	addHooks: function() {
		this._map.on('postMessage', this._postMessage, this);

		// init messages
		this._map.on('docloaded', this._postLoaded, this);
		this._map.on('updatepermission', this._postLoaded, this);
		// This indicates that 'viewinfo' message has already arrived
		this._map.on('viewinfo', this._postLoaded, this);

		this._map.on('wopiprops', this._setWopiProps, this);
		L.DomEvent.on(window, 'message', this._postMessageListener, this);

		this._map.on('updateviewslist', function() { this._postViewsMessage('Views_List'); }, this);
	},

	removeHooks: function() {
		this._map.off('postMessage', this._postMessage, this);

		// init messages
		this._map.off('docloaded', this._postLoaded, this);
		this._map.off('updatepermission', this._postLoaded, this);
		this._map.off('viewinfo', this._postLoaded, this);

		this._map.off('wopiprops', this._setWopiProps, this);
		L.DomEvent.off(window, 'message', this._postMessageListener, this);

		this._map.off('updateviewslist');
	},

	_setWopiProps: function(wopiInfo) {
		// Store postmessageorigin property, if it exists
		if (wopiInfo['PostMessageOrigin']) {
			this.PostMessageOrigin = wopiInfo['PostMessageOrigin'];
		}

		this.BaseFileName = wopiInfo['BaseFileName'];
		this.HidePrintOption = !!wopiInfo['HidePrintOption'];
		this.HideSaveOption = !!wopiInfo['HideSaveOption'];
		this.HideExportOption = !!wopiInfo['HideExportOption'];
		this.HideChangeTrackingControls = !!wopiInfo['HideChangeTrackingControls'];
		this.DisablePrint = !!wopiInfo['DisablePrint'];
		this.DisableExport = !!wopiInfo['DisableExport'];
		this.DisableCopy = !!wopiInfo['DisableCopy'];
		this.DisableInactiveMessages = !!wopiInfo['DisableInactiveMessages'];
		this.UserCanNotWriteRelative = !!wopiInfo['UserCanNotWriteRelative'];
		this.EnableInsertRemoteImage = !!wopiInfo['EnableInsertRemoteImage'];
		this.SupportsRename = !!wopiInfo['SupportsRename'];
		this.UserCanRename = !!wopiInfo['UserCanRename'];
		this.EnableShare = !!wopiInfo['EnableShare'];
		if (wopiInfo['HideUserList'])
			this.HideUserList = wopiInfo['HideUserList'].split(',');

		this._map.fire('postMessage', {
			msgId: 'App_LoadingStatus',
			args: {
				Status: 'Frame_Ready',
				Features: {
					VersionStates: true
				}
			}
		});

		if ('TemplateSaveAs' in wopiInfo) {
			this._map.showBusy(_('Creating new file from template...'), false);
			this._map.saveAs(wopiInfo['TemplateSaveAs']);
		}
	},

	resetAppLoaded: function() {
		this._appLoaded = false;
		for (var key in this._appLoadedConditions) {
			this._appLoadedConditions[key] = false;
		}
	},

	_postLoaded: function(e) {
		if (this._appLoaded) {
			return;
		}

		if (e.type === 'docloaded') {
			// doc unloaded
			if (!e.status)
			{
				this._appLoadedConditions[e.type] = false;
				return;
			}

			this.DocumentLoadedTime = Date.now();
		}
		this._appLoadedConditions[e.type] = true;
		for (var key in this._appLoadedConditions) {
			if (!this._appLoadedConditions[key])
				return;
		}

		this._appLoaded = true;
		this._map.fire('postMessage', {msgId: 'App_LoadingStatus', args: {Status: 'Document_Loaded', DocumentLoadedTime: this.DocumentLoadedTime}});
	},

	_postMessageListener: function(e) {
		if (!window.WOPIPostmessageReady || (e.origin !== window.parent.origin)) {
			return;
		}

		var msg;
		try {
			msg = JSON.parse(e.data);
		} catch (e) {
			console.error(e);
			return;
		}

		if (msg.MessageId === 'Host_PostmessageReady') {
			// We already have a listener for this in loleaflet.html, so ignore it here
			return;
		}

		if (msg.MessageId === 'Grab_Focus') {
			this._map.makeActive();
			return;
		}

		// allow closing documents before they are completely loaded
		if (msg.MessageId === 'Close_Session') {
			this._map._socket.sendMessage('closedocument');
			return;
		}

		// For all other messages, warn if trying to interact before we are completely loaded
		if (!this._appLoaded) {
			console.error('LibreOffice Online not loaded yet. Listen for App_LoadingStatus (Document_Loaded) event before using PostMessage API. Ignoring post message \'' + msg.MessageId + '\'.');
			return;
		}

		if (msg.MessageId === 'Insert_Button') {
			if (msg.Values) {
				if (msg.Values.id && !w2ui['editbar'].get(msg.Values.id)
				    && msg.Values.imgurl) {
					if (this._map._permission === 'edit') {
						// add the css rule for the image
						var style = $('html > head > style');
						if (style.length == 0)
							$('html > head').append('<style/>');
						$('html > head > style').append('.w2ui-icon.' + msg.Values.id + '{background: url(' + msg.Values.imgurl + ') no-repeat center !important; }');

						// Position: Either specified by the caller, or defaulting to first position (before save)
						var insertBefore = msg.Values.insertBefore || 'save';
						// add the item to the toolbar
						w2ui['editbar'].insert(insertBefore, [
							{
								type: 'button',
								uno: msg.Values.unoCommand,
								id: msg.Values.id,
								img: msg.Values.id,
								hint: _(msg.Values.hint), /* "Try" to localize ! */
								/* Notify the host back when button is clicked (only when unoCommand is not set) */
								postmessage: !msg.Values.hasOwnProperty('unoCommand')
							}
						]);
						if (msg.Values.mobile)
						{
							// Add to our list of items to preserve when in mobile mode
							// FIXME: Wrap the toolbar in a class so that we don't make use
							// global variables and functions like this
							var idx = toolbarUpMobileItems.indexOf(insertBefore);
							toolbarUpMobileItems.splice(idx, 0, msg.Values.id);
						}
					}
					else if (this._map._permission === 'readonly') {
						// Just add a menu entry for it
						this._map.fire('addmenu', {id: msg.Values.id, label: msg.Values.hint});
					}
				}
			}
		}
		if (msg.MessageId === 'Show_Button' || msg.MessageId === 'Hide_Button' || msg.MessageId === 'Remove_Button') {
			if (!msg.Values) {
				console.error('Property "Values" not set');
				return;
			}
			if (!msg.Values.id) {
				console.error('Property "Values.id" not set');
				return;
			}
			if (this._map._permission !== 'edit') {
				console.log('No toolbar in readonly mode - ignoring request.');
				return;
			}
			if (!w2ui['editbar'].get(msg.Values.id)) {
				console.error('Toolbar button with id "' + msg.Values.id + '" not found.');
				return;
			}
			if (msg.MessageId === 'Show_Button') {
				w2ui['editbar'].show(msg.Values.id);
			} else if (msg.MessageId === 'Hide_Button') {
				w2ui['editbar'].hide(msg.Values.id);
			} else {
				w2ui['editbar'].remove(msg.Values.id);
			}
		}
		else if (msg.MessageId === 'Show_Menubar') {
			this._map.showMenubar();
		}
		else if (msg.MessageId === 'Hide_Menubar') {
			this._map.hideMenubar();
		}
		else if (msg.MessageId === 'Set_Settings') {
			if (msg.Values) {
				var alwaysActive = msg.Values.AlwaysActive;
				this._map.options.alwaysActive = !!alwaysActive;
			}
		}
		else if (msg.MessageId === 'Get_Views') {
			this._postViewsMessage('Get_Views_Resp');
		}
		else if (msg.MessageId === 'Action_Save') {
			var dontTerminateEdit = msg.Values && msg.Values['DontTerminateEdit'];
			var dontSaveIfUnmodified = msg.Values && msg.Values['DontSaveIfUnmodified'];
			this._notifySave = msg.Values && msg.Values['Notify'];

			this._map.save(dontTerminateEdit, dontSaveIfUnmodified);
		}
		else if (msg.MessageId === 'Action_Print') {
			this._map.print();
		}
		else if (msg.MessageId === 'Action_Export') {
			if (msg.Values) {
				var format = msg.Values.Format;
				var fileName = this._map['wopi'].BaseFileName;
				fileName = fileName.substr(0, fileName.lastIndexOf('.'));
				fileName = fileName === '' ? 'document' : fileName;
				this._map.downloadAs(fileName + '.' + format, format);
			}
		}
		else if (msg.MessageId == 'Action_InsertGraphic') {
			if (msg.Values) {
				this._map.insertURL(msg.Values.url);
			}
		}
		else if (msg.MessageId === 'Action_ShowBusy') {
			if (msg.Values && msg.Values.Label) {
				this._map.fire('showbusy', {label: msg.Values.Label});
			}
		}
		else if (msg.MessageId === 'Action_HideBusy') {
			this._map.fire('hidebusy');
		}
		else if (msg.MessageId === 'Get_Export_Formats') {
			var exportFormatsResp = [];
			for (var index in this._map._docLayer._exportFormats) {
				exportFormatsResp.push({
					Label: this._map._docLayer._exportFormats[index].label,
					Format: this._map._docLayer._exportFormats[index].format
				});
			}

			this._postMessage({msgId: 'Get_Export_Formats_Resp', args: exportFormatsResp});
		}
		else if (msg.MessageId === 'Action_SaveAs') {
			if (msg.Values) {
				if (msg.Values.Filename !== null && msg.Values.Filename !== undefined) {
					this._map.showBusy(_('Creating copy...'), false);
					this._map.saveAs(msg.Values.Filename);
				}
			}
		}
		else if (msg.MessageId === 'Action_FollowUser') {
			if (msg.Values) {
				this._map._setFollowing(msg.Values.Follow, msg.Values.ViewId);
			}
			else {
				this._map._setFollowing(true, null);
			}
		}
		else if (msg.MessageId === 'Host_VersionRestore') {
			if (msg.Values.Status === 'Pre_Restore') {
				this._map._socket.sendMessage('versionrestore prerestore');
			}
		}
		else if (msg.MessageId === 'CallPythonScript' &&
			 msg.hasOwnProperty('ScriptFile') &&
			 msg.hasOwnProperty('Function')) {
			this._map.CallPythonScriptSource = e.source;
			this._map.sendUnoCommand('vnd.sun.star.script:' + msg.ScriptFile + '$' + msg.Function + '?language=Python&location=share', msg.Values);
		}
		else if (msg.MessageId === 'Action_RemoveView') {
			if (msg.Values && msg.Values.ViewId !== null && msg.Values.ViewId !== undefined) {
				this._map._socket.sendMessage('removesession ' + msg.Values.ViewId);
			}
		}
	},

	_postMessage: function(e) {
		if (!this.enabled) { return; }
		var msgId = e.msgId;
		var values = e.args || {};
		if (!!this.PostMessageOrigin && window.parent !== window.self) {
			// Filter out unwanted save request response
			if (msgId === 'Action_Save_Resp') {
				if (!this._notifySave)
					return;

				this._notifySave = false;
			}

			var msg = {
				'MessageId': msgId,
				'SendTime': Date.now(),
				'Values': values
			};
			window.parent.postMessage(JSON.stringify(msg), this.PostMessageOrigin);
		}
	},

	_postViewsMessage: function(messageId) {
		var getMembersRespVal = [];
		for (var viewInfoIdx in this._map._viewInfo) {
			getMembersRespVal.push({
				ViewId: viewInfoIdx,
				UserName: this._map._viewInfo[viewInfoIdx].username,
				UserId: this._map._viewInfo[viewInfoIdx].userid,
				UserExtraInfo: this._map._viewInfo[viewInfoIdx].userextrainfo,
				Color: this._map._viewInfo[viewInfoIdx].color,
				ReadOnly: this._map._viewInfo[viewInfoIdx].readonly,
				IsCurrentView: this._map._docLayer._viewId === parseInt(viewInfoIdx, 10)
			});
		}

		this._postMessage({msgId: messageId, args: getMembersRespVal});
	}
});

// This handler would only get 'enabled' by map if map.options.wopi = true
L.Map.addInitHook('addHandler', 'wopi', L.Map.WOPI);

/* -*- js-indent-level: 8 -*- */
/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */

L.Handler.MarkerDrag = L.Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new L.Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			drag: this._onDrag,
			dragend: this._onDragEnd,
			up: this._onUp
		}, this).enable();

		L.DomUtil.addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			drag: this._onDrag,
			dragend: this._onDragEnd,
			up: this._onUp
		}, this).disable();

		if (this._marker._icon) {
			L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_onDragStart: function () {
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = L.DomUtil.getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			L.DomUtil.setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;

		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	},

	_onUp: function (e) {
		this._marker.fire('up', e);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * LibreOffice Online toolbar
 */

/* global $ closebutton w2ui w2utils vex _ _UNO */
/*eslint indent: [error, "tab", { "outerIIFEBody": 0 }]*/
(function(global) {

var map;

// has to match small screen size requirement
function _inMobileMode() {
	return L.Browser.mobile && $('#main-menu').css('display') === 'none';
}

// mobile device with big screen size
function _inTabletMode() {
	return L.Browser.mobile && !_inMobileMode();
}

function _inDesktopMode() {
	return !L.Browser.mobile;
}

function onDelete(e) {
	if (e !== false) {
		map.deletePage();
	}
}

// make functions visible outside: window.mode.isMobile()
global.mode = {
	isMobile: _inMobileMode,
	isTablet: _inTabletMode,
	isDesktop: _inDesktopMode
};

var nUsers, oneUser, noUser;

function _updateVisibilityForToolbar(toolbar) {
	var isDesktop = _inDesktopMode();
	var isMobile = _inMobileMode();
	var isTablet = _inTabletMode();

	var toShow = [];
	var toHide = [];

	toolbar.items.forEach(function(item) {
		if (((isMobile && item.mobile === false) || (isTablet && item.tablet === false) || (isDesktop && item.desktop === false) || (!window.ThisIsAMobileApp && item.mobilebrowser === false)) && !item.hidden) {
			toHide.push(item.id);
		}
		else if (((isMobile && item.mobile === true) || (isTablet && item.tablet === true) || (isDesktop && item.desktop === true) || (window.ThisIsAMobileApp && item.mobilebrowser === true)) && item.hidden) {
			toShow.push(item.id);
		}
	});

	console.log('explicitly hiding: ' + toHide);
	console.log('explicitly showing: ' + toShow);

	toHide.forEach(function(item) { toolbar.hide(item); });
	toShow.forEach(function(item) { toolbar.show(item); });
}

function _updateToolbarsVisibility() {
	_updateVisibilityForToolbar(w2ui['editbar']);
	_updateVisibilityForToolbar(w2ui['actionbar']);
}

function resizeToolbar() {
	if ($(window).width() !== map.getSize().x) {
		var toolbarUp = w2ui['editbar'];
		var statusbar = w2ui['actionbar'];
		toolbarUp.resize();
		statusbar.resize();
	}
}

function _cancelSearch() {
	var toolbar = w2ui['actionbar'];
	map.resetSelection();
	toolbar.hide('cancelsearch');
	toolbar.disable('searchprev');
	toolbar.disable('searchnext');
	L.DomUtil.get('search-input').value = '';
	map.focus();
}

function onClick(e, id, item, subItem) {
	if (w2ui['editbar'].get(id) !== null) {
		var toolbar = w2ui['editbar'];
		item = toolbar.get(id);
	}
	else if ('formulabar' in w2ui && w2ui['formulabar'].get(id) !== null) {
		toolbar = w2ui['formulabar'];
		item = toolbar.get(id);
	}
	else if ('document-signing-bar' in w2ui && w2ui['document-signing-bar'].get(id) !== null) {
		toolbar = w2ui['document-signing-bar'];
		item = toolbar.get(id);
	}
	else if ('actionbar' in w2ui && w2ui['actionbar'].get(id) !== null) {
		toolbar = w2ui['actionbar'];
		item = toolbar.get(id);
	}
	else if ('spreadsheet-toolbar' in w2ui && w2ui['spreadsheet-toolbar'].get(id) !== null) {
		toolbar = w2ui['spreadsheet-toolbar'];
		item = toolbar.get(id);
	}
	else if ('presentation-toolbar' in w2ui && w2ui['presentation-toolbar'].get(id) !== null) {
		toolbar = w2ui['presentation-toolbar'];
		item = toolbar.get(id);
	}
	else {
		throw new Error('unknown id: ' + id);
	}
	var docLayer = map._docLayer;
	// In the iOS app we don't want clicking on the toolbar to pop up the keyboard.
	if (!window.ThisIsTheiOSApp && id !== 'zoomin' && id !== 'zoomout') {
		map.focus();
	}
	if (item.disabled) {
		return;
	}

	if (item.postmessage && item.type === 'button') {
		map.fire('postMessage', {msgId: 'Clicked_Button', args: {Id: item.id} });
	}
	else if (item.uno) {
		if (item.unosheet && map.getDocType() === 'spreadsheet') {
			map.toggleCommandState(item.unosheet);
		}
		else {
			map.toggleCommandState(item.uno);
		}
	}
	else if (id === 'print') {
		map.print();
	}
	else if (id === 'save') {
		map.save(false /* An explicit save should terminate cell edit */, false /* An explicit save should save it again */);
	}
	else if (id === 'repair') {
		map._socket.sendMessage('commandvalues command=.uno:DocumentRepair');
	}
	else if (id === 'zoomin' && map.getZoom() < map.getMaxZoom()) {
		if (map.getDocType() === 'spreadsheet') {
			map.setZoom(14); // 200%
		}
		else {
			map.zoomIn(1);
		}
	}
	else if (id === 'zoomout' && map.getZoom() > map.getMinZoom()) {
		if (map.getDocType() === 'spreadsheet') {
			map.setZoom(10); // 100%
		}
		else {
			map.zoomOut(1);
		}
	}
	else if (item.scale) {
		map.setZoom(item.scale);
	}
	else if (id === 'zoomreset') {
		map.setZoom(map.options.zoom);
	}
	else if (id === 'prev' || id === 'next') {
		if (docLayer._docType === 'text') {
			map.goToPage(id);
		}
		else {
			map.setPart(id);
		}
	}
	else if (id === 'searchprev') {
		map.search(L.DomUtil.get('search-input').value, true);
	}
	else if (id === 'searchnext') {
		map.search(L.DomUtil.get('search-input').value);
	}
	else if (id === 'cancelsearch') {
		_cancelSearch();
	}
	else if (id === 'presentation' && map.getDocType() === 'presentation') {
		map.fire('fullscreen');
	}
	else if (id === 'insertannotation') {
		map.insertComment();
	}
	else if (id === 'insertpage') {
		map.insertPage();
	}
	else if (id === 'duplicatepage') {
		map.duplicatePage();
	}
	else if (id === 'deletepage') {
		vex.dialog.confirm({
			message: _('Are you sure you want to delete this page?'),
			callback: onDelete
		});
	}
	else if (id === 'insertsheet') {
		var nPos = $('#spreadsheet-tab-scroll')[0].childElementCount;
		map.insertPage(nPos + 1);
		$('#spreadsheet-tab-scroll').scrollLeft($('#spreadsheet-tab-scroll').prop('scrollWidth'));
	}
	else if (id === 'firstrecord') {
		$('#spreadsheet-tab-scroll').scrollLeft(0);
	}
	// TODO: We should get visible tab's width instead of 60px
	else if (id === 'nextrecord') {
		$('#spreadsheet-tab-scroll').scrollLeft($('#spreadsheet-tab-scroll').scrollLeft() + 60);
	}
	else if (id === 'prevrecord') {
		$('#spreadsheet-tab-scroll').scrollLeft($('#spreadsheet-tab-scroll').scrollLeft() - 30);
	}
	else if (id === 'lastrecord') {
		$('#spreadsheet-tab-scroll').scrollLeft($('#spreadsheet-tab-scroll').scrollLeft() + 120);
	}
	else if (id === 'insertgraphic' || item.id === 'localgraphic') {
		L.DomUtil.get('insertgraphic').click();
	}
	else if (item.id === 'remotegraphic') {
		map.fire('postMessage', {msgId: 'UI_InsertGraphic'});
	}
	else if (id === 'fontcolor' && typeof e.color !== 'undefined') {
		onColorPick(id, e.color);
	}
	else if (id === 'backcolor' && typeof e.color !== 'undefined') {
		onColorPick(id, e.color)
	}
	else if (id === 'backgroundcolor' && typeof e.color !== 'undefined') {
		onColorPick(id, e.color)
	}
	else if (id === 'sum') {
		map.sendUnoCommand('.uno:AutoSum');
	}
	else if (id === 'function') {
		L.DomUtil.get('formulaInput').value = '=';
		L.DomUtil.get('formulaInput').focus();
		map.cellEnterString(L.DomUtil.get('formulaInput').value);
	}
	else if (id === 'cancelformula') {
		map.sendUnoCommand('.uno:Cancel');
		w2ui['formulabar'].hide('acceptformula', 'cancelformula');
		w2ui['formulabar'].show('sum', 'function');
	}
	else if (id === 'acceptformula') {
		// focus on map, and press enter
		map.focus();
		map._docLayer._postKeyboardEvent('input',
						 map.keyboard.keyCodes.enter,
						 map.keyboard._toUNOKeyCode(map.keyboard.keyCodes.enter));

		w2ui['formulabar'].hide('acceptformula', 'cancelformula');
		w2ui['formulabar'].show('sum', 'function');
	}
	else if (id.startsWith('StateTableCellMenu') && subItem) {
		e.done(function () {
			var menu = w2ui['actionbar'].get('StateTableCellMenu');
			if (subItem.id === '1') { // 'None' was clicked, remove all other options
				menu.selected = ['1'];
			}
			else { // Something else was clicked, remove the 'None' option from the array
				var index = menu.selected.indexOf('1');
				if (index > -1) {
					menu.selected.splice(index, 1);
				}
			}
			var value = 0;
			for (var it = 0; it < menu.selected.length; it++) {
				value = +value + parseInt(menu.selected[it]);
			}
			var command = {
				'StatusBarFunc': {
					type: 'unsigned short',
					value: value
				}
			};
			map.sendUnoCommand('.uno:StatusBarFunc', command);
		});
	}
	else if (id === 'fold' || id === 'hamburger-tablet') {
		map.toggleMenubar();
	}
	else if (id === 'fullscreen') {
		if (item.checked) {
			toolbar.uncheck(id);
		}
		else {
			toolbar.check(id);
		}
		L.toggleFullScreen();
	}
	else if (id === 'close' || id === 'closemobile') {
		if (window.ThisIsAMobileApp) {
			window.postMobileMessage('BYE');
		} else {
			map.fire('postMessage', {msgId: 'close', args: {EverModified: map._everModified, Deprecated: true}});
			map.fire('postMessage', {msgId: 'UI_Close', args: {EverModified: map._everModified}});
		}
		map.remove();
	}
	else {
		map.handleSigningClickEvent(id, item); // this handles a bunch of signing bar click events
	}
}

function setBorders(left, right, bottom, top, horiz, vert) {
	var params = {
		OuterBorder: {
			type : '[]any',
			value : [
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : left }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : right }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : bottom }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : top }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'long', value : 0 },
				{ type : 'long', value : 0 },
				{ type : 'long', value : 0 },
				{ type : 'long', value : 0 },
				{ type : 'long', value : 0 }
			]
		},
		InnerBorder: {
			type : '[]any',
			value : [
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : horiz }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'com.sun.star.table.BorderLine2', value : { Color : { type : 'com.sun.star.util.Color', value : 0 }, InnerLineWidth : { type : 'short', value : 0 }, OuterLineWidth : { type : 'short', value : vert }, LineDistance : { type : 'short', value : 0 },  LineStyle : { type : 'short', value : 0 }, LineWidth : { type : 'unsigned long', value : 0 } } },
				{ type : 'short', value : 0 },
				{ type : 'short', value : 127 },
				{ type : 'long', value : 0 }
			]
		}};
	map.sendUnoCommand('.uno:SetBorderStyle', params);
}

// close the popup
function closePopup() {
	if ($('#w2ui-overlay-editbar').length > 0) {
		$('#w2ui-overlay-editbar').removeData('keepOpen')[0].hide();
	}
	map.focus();
}

function setBorderStyle(num) {
	switch (num) {
	case 0: map.sendUnoCommand('.uno:FormatCellBorders'); break;

	case 1: setBorders(0, 0, 0, 0, 0, 0); break;
	case 2: setBorders(1, 0, 0, 0, 0, 0); break;
	case 3: setBorders(0, 1, 0, 0, 0, 0); break;
	case 4: setBorders(1, 1, 0, 0, 0, 0); break;

	case 5: setBorders(0, 0, 0, 1, 0, 0); break;
	case 6: setBorders(0, 0, 1, 0, 0, 0); break;
	case 7: setBorders(0, 0, 1, 1, 0, 0); break;
	case 8: setBorders(1, 1, 1, 1, 0, 0); break;

	case 9: setBorders(0, 0, 1, 1, 1, 0); break;
	case 10: setBorders(1, 1, 1, 1, 1, 0); break;
	case 11: setBorders(1, 1, 1, 1, 0, 1); break;
	case 12: setBorders(1, 1, 1, 1, 1, 1); break;

	default: console.log('ignored border: ' + num);
	}

	// TODO we may consider keeping it open in the future if we add border color
	// and style to this popup too
	closePopup();
}

global.setBorderStyle = setBorderStyle;

function setConditionalFormatIconSet(num) {
	var params = {
		IconSet: {
			type : 'short',
			value : num
		}};
	map.sendUnoCommand('.uno:IconSetFormatDialog', params);

	closePopup();
}

global.setConditionalFormatIconSet = setConditionalFormatIconSet;

function insertTable() {
	var rows = 10;
	var cols = 10;
	var $grid = $('.inserttable-grid');
	var $status = $('#inserttable-status');

	// init
	for (var r = 0; r < rows; r++) {
		var $row = $('<div/>').addClass('row');
		$grid.append($row);
		for (var c = 0; c < cols; c++) {
			var $col = $('<div/>').addClass('col');
			$row.append($col);
		}
	}

	// events
	$grid.on({
		mouseover: function () {
			var col = $(this).index() + 1;
			var row = $(this).parent().index() + 1;
			$('.col').removeClass('bright');
			$('.row:nth-child(-n+' + row + ') .col:nth-child(-n+' + col + ')')
			.addClass('bright');
			$status.html(col + 'x' + row);

		},
		click: function() {
			var col = $(this).index() + 1;
			var row = $(this).parent().index() + 1;
			$('.col').removeClass('bright');
			$status.html('<br/>');
			var msg = 'uno .uno:InsertTable {' +
				' "Columns": { "type": "long","value": '
				+ col +
				' }, "Rows": { "type": "long","value": '
				+ row + ' }}';

			map._socket.sendMessage(msg);

			closePopup()
		}
	}, '.col');
}

var shapes = {
	'Basic Shapes': [
		{img: 'basicshapes_rectangle', uno: 'BasicShapes.rectangle'},
		{img: 'basicshapes_round-rectangle', uno: 'BasicShapes.round-rectangle'},
		{img: 'basicshapes_quadrat', uno: 'BasicShapes.quadrat'},
		{img: 'basicshapes_round-quadrat', uno: 'BasicShapes.round-quadrat'},
		{img: 'basicshapes_circle', uno: 'BasicShapes.circle'},
		{img: 'basicshapes_ellipse', uno: 'BasicShapes.ellipse'},

		{img: 'basicshapes_circle-pie', uno: 'BasicShapes.circle-pie'},
		{img: 'basicshapes_isosceles-triangle', uno: 'BasicShapes.isosceles-triangle'},
		{img: 'basicshapes_right-triangle', uno: 'BasicShapes.right-triangle'},
		{img: 'basicshapes_trapezoid', uno: 'BasicShapes.trapezoid'},
		{img: 'basicshapes_diamond', uno: 'BasicShapes.diamond'},
		{img: 'basicshapes_parallelogram', uno: 'BasicShapes.parallelogram'},

		{img: 'basicshapes_pentagon', uno: 'BasicShapes.pentagon'},
		{img: 'basicshapes_hexagon', uno: 'BasicShapes.hexagon'},
		{img: 'basicshapes_octagon', uno: 'BasicShapes.octagon'},
		{img: 'basicshapes_cross', uno: 'BasicShapes.cross'},
		{img: 'basicshapes_ring', uno: 'BasicShapes.ring'},
		{img: 'basicshapes_block-arc', uno: 'BasicShapes.block-arc'},

		{img: 'basicshapes_can', uno: 'BasicShapes.can'},
		{img: 'basicshapes_cube', uno: 'BasicShapes.cube'},
		{img: 'basicshapes_paper', uno: 'BasicShapes.paper'},
		{img: 'basicshapes_frame', uno: 'BasicShapes.frame'}
	],

	'Symbols':  [
		{img: 'symbolshapes', uno: 'SymbolShapes.smiley'},
		{img: 'symbolshapes_sun', uno: 'SymbolShapes.sun'},
		{img: 'symbolshapes_moon', uno: 'SymbolShapes.moon'},
		{img: 'symbolshapes_lightning', uno: 'SymbolShapes.lightning'},
		{img: 'symbolshapes_heart', uno: 'SymbolShapes.heart'},
		{img: 'symbolshapes_flower', uno: 'SymbolShapes.flower'},

		{img: 'symbolshapes_cloud', uno: 'SymbolShapes.cloud'},
		{img: 'symbolshapes_forbidden', uno: 'SymbolShapes.forbidden'},
		{img: 'symbolshapes_puzzle', uno: 'SymbolShapes.puzzle'},
		{img: 'symbolshapes_bracket-pair', uno: 'SymbolShapes.bracket-pair'},
		{img: 'symbolshapes_left-bracket', uno: 'SymbolShapes.left-bracket'},
		{img: 'symbolshapes_right-bracket', uno: 'SymbolShapes.right-bracket'},

		{img: 'symbolshapes_brace-pair', uno: 'SymbolShapes.brace-pair'},
		{img: 'symbolshapes_left-brace', uno: 'SymbolShapes.left-brace'},
		{img: 'symbolshapes_right-brace', uno: 'SymbolShapes.right-brace'},
		{img: 'symbolshapes_quad-bevel', uno: 'SymbolShapes.quad-bevel'},
		{img: 'symbolshapes_octagon-bevel', uno: 'SymbolShapes.octagon-bevel'},
		{img: 'symbolshapes_diamond-bevel', uno: 'SymbolShapes.diamond-bevel'}
	],

	'Block Arrows': [
		{img: 'arrowshapes_left-arrow', uno: 'ArrowShapes.left-arrow'},
		{img: 'arrowshapes_right-arrow', uno: 'ArrowShapes.right-arrow'},
		{img: 'arrowshapes_up-arrow', uno: 'ArrowShapes.up-arrow'},
		{img: 'arrowshapes_down-arrow', uno: 'ArrowShapes.down-arrow'},
		{img: 'arrowshapes_left-right-arrow', uno: 'ArrowShapes.left-right-arrow'},
		{img: 'arrowshapes_up-down-arrow', uno: 'ArrowShapes.up-down-arrow'},

		{img: 'arrowshapes_up-right-arrow', uno: 'ArrowShapes.up-right-arrow'},
		{img: 'arrowshapes_up-right-down-arrow', uno: 'ArrowShapes.up-right-down-arrow'},
		{img: 'arrowshapes_quad-arrow', uno: 'ArrowShapes.quad-arrow'},
		{img: 'arrowshapes_corner-right-arrow', uno: 'ArrowShapes.corner-right-arrow'},
		{img: 'arrowshapes_split-arrow', uno: 'ArrowShapes.split-arrow'},
		{img: 'arrowshapes_striped-right-arrow', uno: 'ArrowShapes.striped-right-arrow'},

		{img: 'arrowshapes_notched-right-arrow', uno: 'ArrowShapes.notched-right-arrow'},
		{img: 'arrowshapes_pentagon-right', uno: 'ArrowShapes.pentagon-right'},
		{img: 'arrowshapes_chevron', uno: 'ArrowShapes.chevron'},
		{img: 'arrowshapes_right-arrow-callout', uno: 'ArrowShapes.right-arrow-callout'},
		{img: 'arrowshapes_left-arrow-callout', uno: 'ArrowShapes.left-arrow-callout'},
		{img: 'arrowshapes_up-arrow-callout', uno: 'ArrowShapes.up-arrow-callout'},

		{img: 'arrowshapes_down-arrow-callout', uno: 'ArrowShapes.down-arrow-callout'},
		{img: 'arrowshapes_left-right-arrow-callout', uno: 'ArrowShapes.left-right-arrow-callout'},
		{img: 'arrowshapes_up-down-arrow-callout', uno: 'ArrowShapes.up-down-arrow-callout'},
		{img: 'arrowshapes_up-right-arrow-callout', uno: 'ArrowShapes.up-right-arrow-callout'},
		{img: 'arrowshapes_quad-arrow-callout', uno: 'ArrowShapes.quad-arrow-callout'},
		{img: 'arrowshapes_circular-arrow', uno: 'ArrowShapes.circular-arrow'},

		{img: 'arrowshapes_split-round-arrow', uno: 'ArrowShapes.split-round-arrow'},
		{img: 'arrowshapes_s-sharped-arrow', uno: 'ArrowShapes.s-sharped-arrow'}
	],

	'Stars': [
		{img: 'starshapes_bang', uno: 'StarShapes.bang'},
		{img: 'starshapes_star4', uno: 'StarShapes.star4'},
		{img: 'starshapes_star5', uno: 'StarShapes.star5'},
		{img: 'starshapes_star6', uno: 'StarShapes.star6'},
		{img: 'starshapes_star8', uno: 'StarShapes.star8'},
		{img: 'starshapes_star12', uno: 'StarShapes.star12'},

		{img: 'starshapes_star24', uno: 'StarShapes.star24'},
		{img: 'starshapes_concave-star6', uno: 'StarShapes.concave-star6'},
		{img: 'starshapes_vertical-scroll', uno: 'StarShapes.vertical-scroll'},
		{img: 'starshapes_horizontal-scroll', uno: 'StarShapes.horizontal-scroll'},
		{img: 'starshapes_signet', uno: 'StarShapes.signet'},
		{img: 'starshapes_doorplate', uno: 'StarShapes.doorplate'}
	],

	'Callouts': [
		{img: 'calloutshapes_rectangular-callout', uno: 'CalloutShapes.rectangular-callout'},
		{img: 'calloutshapes_round-rectangular-callout', uno: 'CalloutShapes.round-rectangular-callout'},
		{img: 'calloutshapes_round-callout', uno: 'CalloutShapes.round-callout'},
		{img: 'calloutshapes_cloud-callout', uno: 'CalloutShapes.cloud-callout'},
		{img: 'calloutshapes_line-callout-1', uno: 'CalloutShapes.line-callout-1'},
		{img: 'calloutshapes_line-callout-2', uno: 'CalloutShapes.line-callout-2'},
		{img: 'calloutshapes_line-callout-3', uno: 'CalloutShapes.line-callout-3'}
	],

	'Flowchart': [
		{img: 'flowchartshapes_flowchart-process', uno: 'FlowchartShapes.flowchart-process'},
		{img: 'flowchartshapes_flowchart-alternate-process', uno: 'FlowchartShapes.flowchart-alternate-process'},
		{img: 'flowchartshapes_flowchart-decision', uno: 'FlowchartShapes.flowchart-decision'},
		{img: 'flowchartshapes_flowchart-data', uno: 'FlowchartShapes.flowchart-data'},
		{img: 'flowchartshapes_flowchart-predefined-process', uno: 'FlowchartShapes.flowchart-predefined-process'},
		{img: 'flowchartshapes_flowchart-internal-storage', uno: 'FlowchartShapes.flowchart-internal-storage'},

		{img: 'flowchartshapes_flowchart-document', uno: 'FlowchartShapes.flowchart-document'},
		{img: 'flowchartshapes_flowchart-multidocument', uno: 'FlowchartShapes.flowchart-multidocument'},
		{img: 'flowchartshapes_flowchart-terminator', uno: 'FlowchartShapes.flowchart-terminator'},
		{img: 'flowchartshapes_flowchart-preparation', uno: 'FlowchartShapes.flowchart-preparation'},
		{img: 'flowchartshapes_flowchart-manual-input', uno: 'FlowchartShapes.flowchart-manual-input'},
		{img: 'flowchartshapes_flowchart-manual-operation', uno: 'FlowchartShapes.flowchart-manual-operation'},

		{img: 'flowchartshapes_flowchart-connector', uno: 'FlowchartShapes.flowchart-connector'},
		{img: 'flowchartshapes_flowchart-off-page-connector', uno: 'FlowchartShapes.flowchart-off-page-connector'},
		{img: 'flowchartshapes_flowchart-card', uno: 'FlowchartShapes.flowchart-card'},
		{img: 'flowchartshapes_flowchart-punched-tape', uno: 'FlowchartShapes.flowchart-punched-tape'},
		{img: 'flowchartshapes_flowchart-summing-junction', uno: 'FlowchartShapes.flowchart-summing-junction'},
		{img: 'flowchartshapes_flowchart-or', uno: 'FlowchartShapes.flowchart-or'},

		{img: 'flowchartshapes_flowchart-collate', uno: 'FlowchartShapes.flowchart-collate'},
		{img: 'flowchartshapes_flowchart-sort', uno: 'FlowchartShapes.flowchart-sort'},
		{img: 'flowchartshapes_flowchart-extract', uno: 'FlowchartShapes.flowchart-extract'},
		{img: 'flowchartshapes_flowchart-merge', uno: 'FlowchartShapes.flowchart-merge'},
		{img: 'flowchartshapes_flowchart-stored-data', uno: 'FlowchartShapes.flowchart-stored-data'},
		{img: 'flowchartshapes_flowchart-delay', uno: 'FlowchartShapes.flowchart-delay'},

		{img: 'flowchartshapes_flowchart-sequential-access', uno: 'FlowchartShapes.flowchart-sequential-access'},
		{img: 'flowchartshapes_flowchart-magnetic-disk', uno: 'FlowchartShapes.flowchart-magnetic-disk'},
		{img: 'flowchartshapes_flowchart-direct-access-storage', uno: 'FlowchartShapes.flowchart-direct-access-storage'},
		{img: 'flowchartshapes_flowchart-display', uno: 'FlowchartShapes.flowchart-display'}
	]
};

function insertShapes() {
	var width = 10;
	var $grid = $('.insertshape-grid');

	if ($grid.children().size() > 0)
		return;

	for (var s in shapes) {
		var $rowHeader = $('<div/>').addClass('row-header loleaflet-font').append(_(s));
		$grid.append($rowHeader);

		var rows = Math.ceil(shapes[s].length / width);
		var idx = 0;
		for (var r = 0; r < rows; r++) {
			var $row = $('<div/>').addClass('row');
			$grid.append($row);
			for (var c = 0; c < width; c++) {
				if (idx >= shapes[s].length) {
					break;
				}
				var shape = shapes[s][idx++];
				var $col = $('<div/>').addClass('col w2ui-icon').addClass(shape.img);
				$col.data('uno', shape.uno);
				$row.append($col);
			}

			if (idx >= shapes[s].length)
				break;
		}
	}

	$grid.on({
		click: function(e) {
			map.sendUnoCommand('.uno:' + $(e.target).data().uno);
			closePopup();
		}
	});
}

function onColorPick(id, color) {
	if (map.getPermission() !== 'edit') {
		return;
	}
    // no fill or automatic color is -1
	if (color === '') {
		color = -1;
	}
	// transform from #FFFFFF to an Int
	else {
		color = parseInt(color.replace('#', ''), 16);
	}
	var command = {};
	var fontcolor, backcolor;
	if (id === 'fontcolor') {
		fontcolor = {'text': 'FontColor',
					 'spreadsheet': 'Color',
					 'presentation': 'Color'}[map.getDocType()];
		command[fontcolor] = {};
		command[fontcolor].type = 'long';
		command[fontcolor].value = color;
		var uno = '.uno:' + fontcolor;
	}
	// "backcolor" can be used in Writer and Impress and translates to "Highlighting" while
	// "backgroundcolor" can be used in Writer and Calc and translates to "Background color".
	else if (id === 'backcolor') {
		backcolor = {'text': 'BackColor',
					 'presentation': 'CharBackColor'}[map.getDocType()];
		command[backcolor] = {};
		command[backcolor].type = 'long';
		command[backcolor].value = color;
		uno = '.uno:' + backcolor;
	}
	else if (id === 'backgroundcolor') {
		backcolor = {'text': 'BackgroundColor',
					 'spreadsheet': 'BackgroundColor'}[map.getDocType()];
		command[backcolor] = {};
		command[backcolor].type = 'long';
		command[backcolor].value = color;
		uno = '.uno:' + backcolor;
	}
	map.sendUnoCommand(uno, command);
	map.focus();
}

function hideTooltip(toolbar, id) {
	if (toolbar.touchStarted) {
		setTimeout(function() {
			toolbar.tooltipHide(id, {});
		}, 5000);
		toolbar.touchStarted = false;
	}
}

var stylesSelectValue;
var fontsSelectValue;
var fontsizesSelectValue;

// mobile:false means hide it both for normal Online used from a mobile browser, and in a mobile app
// mobilebrowser:false means hide it for normal Online used from a mobile browser, but don't hide it in a mobile app

function createToolbar() {

	if (_inMobileMode()) {
		$('#mobile-edit-button').show();
	} else {
		$('#toolbar-down').show();
		initNormalToolbar();
	}
}

function initNormalToolbar() {
	var toolItems = [
		{type: 'button',  id: 'closemobile',  img: 'closemobile', desktop: false, mobile: false, tablet: true, hidden: true},
		{type: 'button',  id: 'save', img: 'save', hint: _UNO('.uno:Save')},
		{type: 'button',  id: 'print', img: 'print', hint: _UNO('.uno:Print', 'text'), mobile: false, tablet: false},
		{type: 'break', id: 'savebreak', mobile: false},
		{type: 'button',  id: 'undo',  img: 'undo', hint: _UNO('.uno:Undo'), uno: 'Undo', disabled: true, mobile: false},
		{type: 'button',  id: 'redo',  img: 'redo', hint: _UNO('.uno:Redo'), uno: 'Redo', disabled: true, mobile: false},
		{type: 'button',  id: 'formatpaintbrush',  img: 'copyformat', hint: _UNO('.uno:FormatPaintbrush'), uno: 'FormatPaintbrush', mobile: false},
		{type: 'button',  id: 'reset',  img: 'deleteformat', hint: _UNO('.uno:ResetAttributes', 'text'), uno: 'ResetAttributes', mobile: false},
		{type: 'break', mobile: false, tablet: false,},
		{type: 'html', id: 'styles',
			html: '<select class="styles-select"><option>Default Style</option></select>',
			onRefresh: function (edata) {
				if (!edata.item.html) {
					edata.isCancelled = true;
				} else {
					$.extend(edata, { onComplete: function (e) {
						$('.styles-select').select2();
						e.item.html = undefined;
					}});
				}
			}, hidden: true, desktop: true, mobile: false, tablet: false},
		{type: 'html', id: 'fonts',
			html: '<select class="fonts-select"><option>Liberation Sans</option></select>',
			onRefresh: function (edata) {
				if (!edata.item.html) {
					edata.isCancelled = true;
				} else {
					$.extend(edata, { onComplete: function (e) {
						$('.fonts-select').select2();
						e.item.html = undefined;
					}});
				}
			}, mobile: false},
		{type: 'html',   id: 'fontsizes',
			html: '<select class="fontsizes-select"><option>14</option></select>',
			onRefresh: function (edata) {
				if (!edata.item.html) {
					edata.isCancelled = true;
				} else {
					$.extend(edata, { onComplete: function (e) {
						$('.fontsizes-select').select2({ dropdownAutoWidth: true, width: 'auto'});
						e.item.html = undefined;
					}});
				}
			}, mobile: false},
		{type: 'break', id: 'breakstyles', mobile: false, tablet: false },
		{type: 'button',  id: 'bold',  img: 'bold', hint: _UNO('.uno:Bold'), uno: 'Bold'},
		{type: 'button',  id: 'italic', img: 'italic', hint: _UNO('.uno:Italic'), uno: 'Italic'},
		{type: 'button',  id: 'underline',  img: 'underline', hint: _UNO('.uno:Underline'), uno: 'Underline'},
		{type: 'button',  id: 'strikeout', img: 'strikeout', hint: _UNO('.uno:Strikeout'), uno: 'Strikeout'},
		{type: 'break', id: 'breakformatting'},
		{type: 'text-color',  id: 'fontcolor', img: 'textcolor', hint: _UNO('.uno:FontColor')},
		{type: 'color',  id: 'backcolor', img: 'backcolor', hint: _UNO('.uno:BackColor'), hidden: true},
		{type: 'color',  id: 'backgroundcolor', img: 'backgroundcolor', hint: _UNO('.uno:BackgroundColor'), hidden: true},
		{type: 'break' , id: 'breakcolor', mobile:false},
		{type: 'button',  id: 'leftpara',  img: 'alignleft', hint: _UNO('.uno:LeftPara', '', true), uno: 'LeftPara', hidden: true, unosheet: 'AlignLeft', disabled: true},
		{type: 'button',  id: 'centerpara',  img: 'alignhorizontal', hint: _UNO('.uno:CenterPara', '', true), uno: 'CenterPara', hidden: true, unosheet: 'AlignHorizontalCenter', disabled: true},
		{type: 'button',  id: 'rightpara',  img: 'alignright', hint: _UNO('.uno:RightPara', '', true), uno: 'RightPara', hidden: true, unosheet: 'AlignRight', disabled: true},
		{type: 'button',  id: 'justifypara',  img: 'alignblock', hint: _UNO('.uno:JustifyPara', '', true), uno: 'JustifyPara', hidden: true, unosheet: '', disabled: true},
		{type: 'break', id: 'breakpara', hidden: true},
		{type: 'drop',  id: 'setborderstyle',  img: 'setborderstyle', hint: _('Borders'), hidden: true,
			html: '<table id="setborderstyle-grid"><tr><td class="w2ui-tb-image w2ui-icon frame01" onclick="setBorderStyle(1)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame02" onclick="setBorderStyle(2)"></td><td class="w2ui-tb-image w2ui-icon frame03" onclick="setBorderStyle(3)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame04" onclick="setBorderStyle(4)"></td></tr><tr><td class="w2ui-tb-image w2ui-icon frame05" onclick="setBorderStyle(5)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame06" onclick="setBorderStyle(6)"></td><td class="w2ui-tb-image w2ui-icon frame07" onclick="setBorderStyle(7)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame08" onclick="setBorderStyle(8)"></td></tr><tr><td class="w2ui-tb-image w2ui-icon frame09" onclick="setBorderStyle(9)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame10" onclick="setBorderStyle(10)"></td><td class="w2ui-tb-image w2ui-icon frame11" onclick="setBorderStyle(11)"></td>' +
			      '<td class="w2ui-tb-image w2ui-icon frame12" onclick="setBorderStyle(12)"></td></tr><tr>' +
			      '<td colspan="4" class="w2ui-tb-image w2ui-icon frame13" onclick="setBorderStyle(0)"><div id="div-frame13">' + _('More...') + '</div></td></tr></table>'
		},
		{type: 'button',  id: 'togglemergecells',  img: 'togglemergecells', hint: _UNO('.uno:ToggleMergeCells', 'spreadsheet', true), hidden: true, uno: 'ToggleMergeCells', disabled: true},
		{type: 'break', id: 'breakmergecells', hidden: true},
		{type: 'menu', id: 'textalign', img: 'alignblock', hint: _UNO('.uno:TextAlign'), hidden: true,
			items: [
				{id: 'alignleft', text: _UNO('.uno:AlignLeft', 'spreadsheet', true), icon: 'alignleft', uno: 'AlignLeft'},
				{id: 'alignhorizontalcenter', text: _UNO('.uno:AlignHorizontalCenter', 'spreadsheet', true), icon: 'alignhorizontal', uno: 'AlignHorizontalCenter'},
				{id: 'alignright', text: _UNO('.uno:AlignRight', 'spreadsheet', true), icon: 'alignright', uno: 'AlignRight'},
				{id: 'alignblock', text: _UNO('.uno:AlignBlock', 'spreadsheet', true), icon: 'alignblock', uno: 'AlignBlock'},
			]},
		{type: 'menu',  id: 'linespacing',  img: 'linespacing', hint: _UNO('.uno:FormatSpacingMenu'), hidden: true,
			items: [
				{id: 'spacepara1', text: _UNO('.uno:SpacePara1'), uno: 'SpacePara1'},
				{id: 'spacepara15', text: _UNO('.uno:SpacePara15'), uno: 'SpacePara15'},
				{id: 'spacepara2', text: _UNO('.uno:SpacePara2'), uno: 'SpacePara2'},
				{type: 'break'},
				{id: 'paraspaceincrease', text: _UNO('.uno:ParaspaceIncrease'), uno: 'ParaspaceIncrease'},
				{id: 'paraspacedecrease', text: _UNO('.uno:ParaspaceDecrease'), uno: 'ParaspaceDecrease'}
			]},
		{type: 'button',  id: 'wraptext',  img: 'wraptext', hint: _UNO('.uno:WrapText', 'spreadsheet', true), hidden: true, uno: 'WrapText', disabled: true},
		{type: 'break', id: 'breakspacing', hidden: true},
		{type: 'button',  id: 'defaultnumbering',  img: 'numbering', hint: _UNO('.uno:DefaultNumbering', '', true), hidden: true, uno: 'DefaultNumbering', disabled: true},
		{type: 'button',  id: 'defaultbullet',  img: 'bullet', hint: _UNO('.uno:DefaultBullet', '', true), hidden: true, uno: 'DefaultBullet', disabled: true},
		{type: 'break', id: 'breakbullet', hidden: true},
		{type: 'button',  id: 'incrementindent',  img: 'incrementindent', hint: _UNO('.uno:IncrementIndent', '', true), uno: 'IncrementIndent', hidden: true, disabled: true},
		{type: 'button',  id: 'decrementindent',  img: 'decrementindent', hint: _UNO('.uno:DecrementIndent', '', true), uno: 'DecrementIndent', hidden: true, disabled: true},
		{type: 'break', id: 'breakindent', hidden: true},
		{type: 'button',  id: 'sortascending',  img: 'sortascending', hint: _UNO('.uno:SortAscending', 'spreadsheet', true), uno: 'SortAscending', disabled: true, hidden: true},
		{type: 'button',  id: 'sortdescending',  img: 'sortdescending', hint: _UNO('.uno:SortDescending', 'spreadsheet', true), uno: 'SortDescending', disabled: true, hidden: true},
		{type: 'break', id: 'breaksorting', hidden: true},
		{type: 'drop', id: 'conditionalformaticonset',  img: 'conditionalformatdialog', hint: _UNO('.uno:ConditionalFormatMenu', 'spreadsheet', true), hidden: true,
			html: '<table id="conditionalformatmenu-grid"><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset00" onclick="setConditionalFormatIconSet(0)"/><td class="w2ui-tb-image w2ui-icon iconset01" onclick="setConditionalFormatIconSet(1)"/><td class="w2ui-tb-image w2ui-icon iconset02" onclick="setConditionalFormatIconSet(2)"/></tr><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset03" onclick="setConditionalFormatIconSet(3)"/><td class="w2ui-tb-image w2ui-icon iconset04" onclick="setConditionalFormatIconSet(4)"/><td class="w2ui-tb-image w2ui-icon iconset05" onclick="setConditionalFormatIconSet(5)"/></tr><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset06" onclick="setConditionalFormatIconSet(6)"/><td class="w2ui-tb-image w2ui-icon iconset08" onclick="setConditionalFormatIconSet(8)"/><td class="w2ui-tb-image w2ui-icon iconset09" onclick="setConditionalFormatIconSet(9)"/></tr><tr>' + // iconset07 deliberately left out, see the .css for the reason
				  '<td class="w2ui-tb-image w2ui-icon iconset10" onclick="setConditionalFormatIconSet(10)"/><td class="w2ui-tb-image w2ui-icon iconset11" onclick="setConditionalFormatIconSet(11)"/><td class="w2ui-tb-image w2ui-icon iconset12" onclick="setConditionalFormatIconSet(12)"/></tr><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset13" onclick="setConditionalFormatIconSet(13)"/><td class="w2ui-tb-image w2ui-icon iconset14" onclick="setConditionalFormatIconSet(14)"/><td class="w2ui-tb-image w2ui-icon iconset15" onclick="setConditionalFormatIconSet(15)"/></tr><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset16" onclick="setConditionalFormatIconSet(16)"/><td class="w2ui-tb-image w2ui-icon iconset17" onclick="setConditionalFormatIconSet(17)"/><td class="w2ui-tb-image w2ui-icon iconset18" onclick="setConditionalFormatIconSet(18)"/></tr><tr>' +
				  '<td class="w2ui-tb-image w2ui-icon iconset19" onclick="setConditionalFormatIconSet(19)"/><td class="w2ui-tb-image w2ui-icon iconset20" onclick="setConditionalFormatIconSet(20)"/><td class="w2ui-tb-image w2ui-icon iconset21" onclick="setConditionalFormatIconSet(21)"/></tr></table>'
		},
		{type: 'button',  id: 'numberformatcurrency',  img: 'numberformatcurrency', hint: _UNO('.uno:NumberFormatCurrency', 'spreadsheet', true), hidden: true, uno: 'NumberFormatCurrency', disabled: true},
		{type: 'button',  id: 'numberformatpercent',  img: 'numberformatpercent', hint: _UNO('.uno:NumberFormatPercent', 'spreadsheet', true), hidden: true, uno: 'NumberFormatPercent', disabled: true},
		{type: 'button',  id: 'numberformatdecdecimals',  img: 'numberformatdecdecimals', hint: _UNO('.uno:NumberFormatDecDecimals', 'spreadsheet', true), hidden: true, uno: 'NumberFormatDecDecimals', disabled: true},
		{type: 'button',  id: 'numberformatincdecimals',  img: 'numberformatincdecimals', hint: _UNO('.uno:NumberFormatIncDecimals', 'spreadsheet', true), hidden: true, uno: 'NumberFormatIncDecimals', disabled: true},
		{type: 'break',   id: 'break-number', hidden: true},
		{type: 'button',  id: 'inserttextbox', img: 'text', hint: _UNO('.uno:Text', '', true), uno: 'Text?CreateDirectly:bool=true', hidden: true},
		{type: 'button',  id: 'insertannotation', img: 'annotation', hint: _UNO('.uno:InsertAnnotation', '', true), hidden: true},
		{type: 'drop',  id: 'inserttable',  img: 'inserttable', hint: _('Insert table'), hidden: true, overlay: {onShow: insertTable},
		 html: '<div id="inserttable-wrapper"><div id="inserttable-popup" class="inserttable-pop ui-widget ui-corner-all"><div class="inserttable-grid"></div><div id="inserttable-status" class="loleaflet-font" style="padding: 5px;"><br/></div></div></div>'},
		{type: 'button',  id: 'insertgraphic',  img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true)},
		{type: 'menu', id: 'menugraphic', img: 'insertgraphic', hint: _UNO('.uno:InsertGraphic', '', true), hidden: true,
			items: [
				{id: 'localgraphic', text: _('Insert Local Image')},
				{id: 'remotegraphic', text: _UNO('.uno:InsertGraphic', '', true)},
			]},
		{type: 'button',  id: 'insertobjectchart',  img: 'insertobjectchart', hint: _UNO('.uno:InsertObjectChart', '', true), uno: 'InsertObjectChart'},
		{type: 'drop',  id: 'insertshapes',  img: 'basicshapes_ellipse', hint: _('Insert shapes'), overlay: {onShow: insertShapes},
			html: '<div id="insertshape-wrapper"><div id="insertshape-popup" class="insertshape-pop ui-widget ui-corner-all"><div class="insertshape-grid"></div></div></div>'},

		{type: 'button',  id: 'link',  img: 'link', hint: _UNO('.uno:HyperlinkDialog'), uno: 'HyperlinkDialog', disabled: true},
		{type: 'button',  id: 'insertsymbol', img: 'insertsymbol', hint: _UNO('.uno:InsertSymbol', '', true), uno: 'InsertSymbol'},
		{type: 'spacer'},
		{type: 'button',  id: 'edit',  img: 'edit'},
		{type: 'button',  id: 'fold',  img: 'fold', desktop: true, mobile: false, hidden: true},
		{type: 'button',  id: 'hamburger-tablet',  img: 'hamburger', desktop: false, mobile: false, tablet: true, hidden: true}
	];

	var toolbar = $('#toolbar-up');
	toolbar.w2toolbar({
		name: 'editbar',
		tooltip: 'bottom',
		items: toolItems,
		onClick: function (e) {
			onClick(e, e.target);
			hideTooltip(this, e.target);
		},
		onRefresh: function(event) {
			if (event.target === 'editbar' && map.getDocType() === 'presentation') {
				// Fill the style select box if not yet filled
				if ($('.styles-select')[0] && $('.styles-select')[0].length === 1) {
					var data = [''];
					// Inserts a separator element
					data = data.concat({text: '\u2500\u2500\u2500\u2500\u2500\u2500', disabled: true});

					L.Styles.impressLayout.forEach(function(layout) {
						data = data.concat({id: layout.id, text: _(layout.text)});
					}, this);

					$('.styles-select').select2({
						data: data,
						placeholder: _UNO('.uno:LayoutStatus', 'presentation')
					});
					$('.styles-select').on('select2:select', onStyleSelect);
				}
			}

			if ((event.target === 'styles' || event.target === 'fonts' || event.target === 'fontsizes') && event.item) {
				var toolItem = $(this.box).find('#tb_'+ this.name +'_item_'+ w2utils.escapeId(event.item.id));
				if ((_inDesktopMode() && event.item.desktop == false)
					|| (_inTabletMode() && event.item.tablet == false)) {
					toolItem.css('display', 'none');
				} else {
					toolItem.css('display', '');
				}

				updateCommandValues(event.target);
			}

			if (event.target === 'inserttable')
				insertTable();

			if (event.target === 'insertshapes')
				insertShapes();
		}
	});

	toolbar.bind('touchstart', function() {
		w2ui['editbar'].touchStarted = true;
	});

	toolbar = $('#formulabar');
	toolbar.w2toolbar({
		name: 'formulabar',
		tooltip: 'bottom',
		hidden: true,
		items: [
			{type: 'html',  id: 'left'},
			{type: 'html', id: 'address', html: '<input id="addressInput" type="text">'},
			{type: 'break'},
			{type: 'button',  id: 'sum',  img: 'autosum', hint: _('Sum')},
			{type: 'button',  id: 'function',  img: 'equal', hint: _('Function')},
			{type: 'button', hidden: true, id: 'cancelformula',  img: 'cancel', hint: _('Cancel')},
			{type: 'button', hidden: true, id: 'acceptformula',  img: 'accepttrackedchanges', hint: _('Accept')},
			{type: 'html', id: 'formula', html: '<input id="formulaInput" type="text">'}
		],
		onClick: function (e) {
			onClick(e, e.target);
			hideTooltip(this, e.target);
		},
		onRefresh: function() {
			$('#addressInput').off('keyup', onAddressInput).on('keyup', onAddressInput);
			$('#formulaInput').off('keyup', onFormulaInput).on('keyup', onFormulaInput);
			$('#formulaInput').off('blur', onFormulaBarBlur).on('blur', onFormulaBarBlur);
			$('#formulaInput').off('focus', onFormulaBarFocus).on('focus', onFormulaBarFocus);
		}
	});
	toolbar.bind('touchstart', function() {
		w2ui['formulabar'].touchStarted = true;
	});

	$(w2ui.formulabar.box).find('.w2ui-scroll-left, .w2ui-scroll-right').hide();
	w2ui.formulabar.on('resize', function(target, e) {
		e.isCancelled = true;
	});

	if (L.DomUtil.get('document-signing-bar') !== null) {
		toolbar = $('#document-signing-bar');
		toolbar.w2toolbar({
			name: 'document-signing-bar',
			tooltip: 'bottom',
			items: map.setupSigningToolbarItems(),
			onClick: function (e) {
				onClick(e, e.target);
				hideTooltip(this, e.target);
			},
			onRefresh: function() {
			}
		});
		toolbar.bind('touchstart', function() {
			w2ui['document-signing-bar'].touchStarted = true;
		});
	}

	toolbar = $('#spreadsheet-toolbar')
	toolbar.w2toolbar({
		name: 'spreadsheet-toolbar',
		tooltip: 'bottom',
		hidden: true,
		items: [
			{type: 'button',  id: 'firstrecord',  img: 'firstrecord', hint: _('First sheet')},
			{type: 'button',  id: 'prevrecord',  img: 'prevrecord', hint: _('Previous sheet')},
			{type: 'button',  id: 'nextrecord',  img: 'nextrecord', hint: _('Next sheet')},
			{type: 'button',  id: 'lastrecord',  img: 'lastrecord', hint: _('Last sheet')},
			{type: 'button',  id: 'insertsheet', img: 'insertsheet', hint: _('Insert sheet')}
		],
		onClick: function (e) {
			onClick(e, e.target);
			hideTooltip(this, e.target);
		}
	});
	toolbar.bind('touchstart', function() {
		w2ui['spreadsheet-toolbar'].touchStarted = true;
	});

	toolbar = $('#presentation-toolbar');
	toolbar.w2toolbar({
		name: 'presentation-toolbar',
		tooltip: 'bottom',
		hidden: true,
		items: [
			{type: 'html',  id: 'left'},
			{type: 'button',  id: 'presentation', img: 'presentation', hidden:true, hint: _('Fullscreen presentation')},
			{type: 'break', id: 'presentationbreak', hidden:true},
			{type: 'button',  id: 'insertpage', img: 'insertpage', hint: _UNO('.uno:TaskPaneInsertPage', 'presentation')},
			{type: 'button',  id: 'duplicatepage', img: 'duplicatepage', hint: _UNO('.uno:DuplicateSlide', 'presentation')},
			{type: 'button',  id: 'deletepage', img: 'deletepage', hint: _UNO('.uno:DeleteSlide', 'presentation')},
			{type: 'html',  id: 'right'}
		],
		onClick: function (e) {
			onClick(e, e.target);
			hideTooltip(this, e.target);
		}
	});
	toolbar.bind('touchstart', function() {
		w2ui['presentation-toolbar'].touchStarted = true;
	});

	toolbar = $('#toolbar-down');
	if (!window.mode.isMobile()) {
		toolbar.w2toolbar({
			name: 'actionbar',
			tooltip: 'top',
			items: [
				{type: 'html',  id: 'search',
				 html: '<div style="padding: 3px 5px 3px 10px;" class="loleaflet-font">' +
				 '<input size="15" id="search-input" placeholder="' + _('Search') + '"' +
				 'style="padding: 3px; border-radius: 2px; border: 1px solid silver"/>' +
				 '</div>'
				},
				{type: 'button',  id: 'searchprev', img: 'prev', hint: _UNO('.uno:UpSearch'), disabled: true},
				{type: 'button',  id: 'searchnext', img: 'next', hint: _UNO('.uno:DownSearch'), disabled: true},
				{type: 'button',  id: 'cancelsearch', img: 'cancel', hint: _('Cancel the search'), hidden: true},
				{type: 'html',  id: 'left'},
				{type: 'html',  id: 'right'},
				{type: 'drop', id: 'userlist', img: 'users', hidden: true, html: '<div id="userlist_container"><table id="userlist_table"><tbody></tbody></table>' +
					'<hr><table class="loleaflet-font" id="editor-btn">' +
					'<tr>' +
					'<td><input type="checkbox" name="alwaysFollow" id="follow-checkbox" onclick="editorUpdate(event)"></td>' +
					'<td>' + _('Always follow the editor') + '</td>' +
					'</tr>' +
					'</table>' +
					'<p id="currently-msg">' + _('Current') + ' - <b><span id="current-editor"></span></b></p>' +
					'</div>'
				},
				{type: 'break', id: 'userlistbreak', hidden: true, mobile: false },
				{type: 'button',  id: 'prev', img: 'prev', hint: _UNO('.uno:PageUp', 'text')},
				{type: 'button',  id: 'next', img: 'next', hint: _UNO('.uno:PageDown', 'text')},
				{type: 'break', id: 'prevnextbreak'},
				{type: 'button',  id: 'zoomreset', img: 'zoomreset', hint: _('Reset zoom')},
				{type: 'button',  id: 'zoomout', img: 'zoomout', hint: _UNO('.uno:ZoomMinus')},
				{type: 'menu-radio', id: 'zoom', text: '100%',
					selected: 'zoom100',
					mobile: false,
					items: [
						{ id: 'zoom50', text: '50%', scale: 6},
						{ id: 'zoom60', text: '60%', scale: 7},
						{ id: 'zoom70', text: '70%', scale: 8},
						{ id: 'zoom85', text: '85%', scale: 9},
						{ id: 'zoom100', text: '100%', scale: 10},
						{ id: 'zoom120', text: '120%', scale: 11},
						{ id: 'zoom150', text: '150%', scale: 12},
						{ id: 'zoom175', text: '175%', scale: 13},
						{ id: 'zoom200', text: '200%', scale: 14}
					]
				},
				{type: 'button',  id: 'zoomin', img: 'zoomin', hint: _UNO('.uno:ZoomPlus')}
			],
			onClick: function (e) {
				hideTooltip(this, e.target);
				if (e.item.id === 'userlist') {
					setTimeout(function() {
						var cBox = $('#follow-checkbox')[0];
						var docLayer = map._docLayer;
						var editorId = docLayer._editorId;

						if (cBox)
							cBox.checked = docLayer._followEditor;

						if (docLayer.editorId !== -1 && map._viewInfo[editorId])
							$('#current-editor').text(map._viewInfo[editorId].username);
						else
							$('#currently-msg').hide();
					}, 100);
					return;
				}
				onClick(e, e.target, e.item, e.subItem);
			},
			onRefresh: function() {
				$('#tb_actionbar_item_userlist .w2ui-tb-caption').addClass('loleaflet-font');
				$('#search-input').off('input', onSearch).on('input', onSearch);
				$('#search-input').off('keydown', onSearchKeyDown).on('keydown', onSearchKeyDown);

				var showInDesktop = map['wopi'].HideUserList !== null &&
									map['wopi'].HideUserList !== undefined &&
									$.inArray('true', map['wopi'].HideUserList) < 0 &&
									$.inArray('desktop', map['wopi'].HideUserList) < 0;
				if (this.get('userlist').hidden == true && showInDesktop) {
					this.show('userlist');
					this.show('userlistbreak');
					map.on('deselectuser', deselectUser);
					map.on('addview', onAddView);
					map.on('removeview', onRemoveView);
				}
			}
		});
	}
	else {
		toolbar.w2toolbar({
			name: 'actionbar',
			tooltip: 'top',
			items: []
		});
	}
	toolbar.bind('touchstart', function() {
		w2ui['actionbar'].touchStarted = true;
	});
}

var userJoinedPopupMessage = '<div>' + _('%user has joined') + '</div>';
var userLeftPopupMessage = '<div>' + _('%user has left') + '</div>';
var userPopupTimeout = null;

function localizeStateTableCell (text) {
	var stateArray = text.split(';');
	var stateArrayLength = stateArray.length;
	var localizedText = '';
	for (var i = 0; i < stateArrayLength; i++) {
		var labelValuePair = stateArray[i].split(':');
		localizedText += _(labelValuePair[0].trim()) + ':' + labelValuePair[1];
		if (stateArrayLength > 1 && i < stateArrayLength - 1) {
			localizedText += '; ';
		}
	}
	return localizedText;
}

function toLocalePattern (pattern, regex, text, sub1, sub2) {
	var matches = new RegExp(regex, 'g').exec(text);
	if (matches) {
		text = pattern.toLocaleString().replace(sub1, parseInt(matches[1].replace(',','')).toLocaleString(String.locale)).replace(sub2, parseInt(matches[2].replace(',','')).toLocaleString(String.locale));
	}
	return text;
}

function updateToolbarItem(toolbar, id, html) {
	var item = toolbar.get(id);
	if (item) {
		item.html = html;
	}
}

function unoCmdToToolbarId(commandname)
{
	var id = commandname.toLowerCase().substr(5);
	if (map.getDocType() === 'spreadsheet') {
		switch (id) {
		case 'alignleft':
			id = 'leftpara';
			break;
		case 'alignhorizontalcenter':
			id = 'centerpara';
			break;
		case 'alignright':
			id = 'rightpara';
			break;
		}
	}
	return id;
}

function onSearch() {
	var toolbar = w2ui['actionbar'];
	// conditionally disabling until, we find a solution for tdf#108577
	if (L.DomUtil.get('search-input').value === '') {
		toolbar.disable('searchprev');
		toolbar.disable('searchnext');
		toolbar.hide('cancelsearch');
	}
	else {
		if (map.getDocType() === 'text')
			map.search(L.DomUtil.get('search-input').value, false, '', 0, true /* expand search */);
		toolbar.enable('searchprev');
		toolbar.enable('searchnext');
		toolbar.show('cancelsearch');
	}
}

function onSearchKeyDown(e) {
	if ((e.keyCode === 71 && e.ctrlKey) || e.keyCode === 114 || e.keyCode === 13) {
		if (e.shiftKey) {
			map.search(L.DomUtil.get('search-input').value, true);
		} else {
			map.search(L.DomUtil.get('search-input').value);
		}
		e.preventDefault();
	} else if (e.keyCode === 27) {
		_cancelSearch();
	}
}

function documentNameConfirm() {
	var value = $('#document-name-input').val();
	if (value !== null && value != '' && value != map['wopi'].BaseFileName) {
		if (map['wopi'].UserCanRename && map['wopi'].SupportsRename) {
			// file name must be without the extension
			if (value.lastIndexOf('.') > 0)
				value = value.substr(0, value.lastIndexOf('.'));
			map.renameFile(value);
		} else {
			// saveAs for rename
			map.saveAs(value);
		}
	}
	map._onGotFocus();
}

function documentNameCancel() {
	$('#document-name-input').val(map['wopi'].BaseFileName);
	map._onGotFocus();
}

function onDocumentNameKeyPress(e) {
	if (e.keyCode === 13) { // Enter key
		documentNameConfirm();
	} else if (e.keyCode === 27) { // Escape key
		documentNameCancel();
	}
}

function onDocumentNameFocus() {
	// hide the caret in the main document
	map._onLostFocus();
}

function sortFontSizes() {
	var oldVal = $('.fontsizes-select').val();
	var selectList = $('.fontsizes-select option');
	selectList.sort(function (a, b) {
		a = parseFloat($(a).text() * 1);
		b = parseFloat($(b).text() * 1);
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		}
		return 0;
	});
	$('.fontsizes-select').html(selectList);
	$('.fontsizes-select').val(oldVal).trigger('change');
}

function onStyleSelect(e) {
	var style = e.target.value;
	if (style.startsWith('.uno:')) {
		map.sendUnoCommand(style);
	}
	else if (map.getDocType() === 'text') {
		map.applyStyle(style, 'ParagraphStyles');
	}
	else if (map.getDocType() === 'spreadsheet') {
		map.applyStyle(style, 'CellStyles');
	}
	else if (map.getDocType() === 'presentation' || map.getDocType() === 'drawing') {
		map.applyLayout(style);
	}
	map.focus();
}

function updateFontSizeList(font) {
	var oldSize = $('.fontsizes-select').val();
	var found = false;
	$('.fontsizes-select').find('option').remove();
	var data = [''];
	data = data.concat(map.getToolbarCommandValues('.uno:CharFontName')[font]);
	$('.fontsizes-select').select2({
		data: data,
		placeholder: ' ',
		//Allow manually entered font size.
		createTag: function(query) {
			return {
				id: query.term,
				text: query.term,
				tag: true
			};
		},
		tags: true
	});
	$('.fontsizes-select option').each(function (i, e) {
		if ($(e).text() === oldSize) {
			$('.fontsizes-select').val(oldSize).trigger('change');
			found = true;
			return;
		}
	});
	if (!found) {
		// we need to add the size
		$('.fontsizes-select')
			.append($('<option></option>')
			.text(oldSize));
	}
	$('.fontsizes-select').val(oldSize).trigger('change');
	sortFontSizes();
}

function onFontSelect(e) {
	var font = e.target.value;
	updateFontSizeList(font);
	map.applyFont(font);
	map.focus();
}

function onFontSizeSelect(e) {
	var size = e.target.value;
	var command = {};
	$(e.target).find('option[data-select2-tag]').removeAttr('data-select2-tag');
	map.applyFontSize(size);
	var fontcolor = map.getDocType() === 'text' ? 'FontColor' : 'Color';
	command[fontcolor] = {};
	map.focus();
}

function onInsertFile() {
	var insertGraphic = L.DomUtil.get('insertgraphic');
	if ('files' in insertGraphic) {
		for (var i = 0; i < insertGraphic.files.length; i++) {
			var file = insertGraphic.files[i];
			map.insertFile(file);
		}
	}

	// Set the value to null everytime so that onchange event is triggered,
	// even if the same file is selected
	insertGraphic.value = null;
	return false;
}

function onAddressInput(e) {
	if (e.keyCode === 13) {
		// address control should not have focus anymore
		map.focus();
		var value = L.DomUtil.get('addressInput').value;
		var command = {
			ToPoint : {
				type: 'string',
				value: value
			}

		};
		map.sendUnoCommand('.uno:GoToCell', command);
	} else if (e.keyCode === 27) { // 27 = esc key
		map.sendUnoCommand('.uno:Cancel');
		map.focus();
	}
}

function onFormulaInput(e) {
	// keycode = 13 is 'enter'
	if (e.keyCode === 13) {
		// formula bar should not have focus anymore
		map.focus();

		// forward the 'enter' keystroke to map to deal with the formula entered
		var data = {
			originalEvent: e
		};
		map.fire('keypress', data);
	} else if (e.keyCode === 27) { // 27 = esc key
		map.sendUnoCommand('.uno:Cancel');
		map.focus();
	} else {
		map.cellEnterString(L.DomUtil.get('formulaInput').value);
	}
}

function onFormulaBarFocus() {
	var formulabar = w2ui.formulabar;
	formulabar.hide('sum');
	formulabar.hide('function');
	formulabar.show('cancelformula');
	formulabar.show('acceptformula');
}

function onFormulaBarBlur() {
	// The timeout is needed because we want 'click' event on 'cancel',
	// 'accept' button to act before we hide these buttons because
	// once hidden, click event won't be processed.
	// TODO: Some better way to do it ?
	setTimeout(function() {
		var formulabar = w2ui.formulabar;
		formulabar.show('sum');
		formulabar.show('function');
		formulabar.hide('cancelformula');
		formulabar.hide('acceptformula');
	}, 250);
}



function onWopiProps(e) {
	if (e.HideSaveOption) {
		w2ui['editbar'].hide('save');
	}
	if (e.HideExportOption) {
		w2ui['presentation-toolbar'].hide('presentation', 'presentationbreak');
	}
	if (e.HidePrintOption) {
		w2ui['editbar'].hide('print');
	}
	if (e.DisableCopy) {
		$('input#formulaInput').bind('copy', function(evt) {
			evt.preventDefault();
		});
		$('input#addressInput').bind('copy', function(evt) {
			evt.preventDefault();
		});
	}
	if (e.BaseFileName !== null) {
		// set the document name into the name field
		$('#document-name-input').val(e.BaseFileName);
	}
	if (e.UserCanNotWriteRelative === false) {
		// Save As allowed
		$('#document-name-input').prop('disabled', false);
		$('#document-name-input').addClass('editable');
		$('#document-name-input').off('keypress', onDocumentNameKeyPress).on('keypress', onDocumentNameKeyPress);
		$('#document-name-input').off('focus', onDocumentNameFocus).on('focus', onDocumentNameFocus);
		$('#document-name-input').off('blur', documentNameCancel).on('blur', documentNameCancel);
	} else {
		$('#document-name-input').prop('disabled', true);
		$('#document-name-input').removeClass('editable');
		$('#document-name-input').off('keypress', onDocumentNameKeyPress);
	}
	if (e.EnableInsertRemoteImage === true && w2ui['editbar']) {
		w2ui['editbar'].hide('insertgraphic');
		w2ui['editbar'].show('menugraphic');
	}
}

function onDocLayerInit() {
	var toolbarUp = w2ui['editbar'];
	var statusbar = w2ui['actionbar'];
	var docType = map.getDocType();

	switch (docType) {
	case 'spreadsheet':
		toolbarUp.show('textalign', 'wraptext', 'breakspacing', 'insertannotation', 'conditionalformaticonset',
			'numberformatcurrency', 'numberformatpercent',
			'numberformatincdecimals', 'numberformatdecdecimals', 'break-number', 'togglemergecells', 'breakmergecells',
			'setborderstyle', 'sortascending', 'sortdescending', 'breaksorting', 'backgroundcolor');
		toolbarUp.remove('styles');

		statusbar.remove('prev', 'next', 'prevnextbreak');

		statusbar.set('zoom', {
			items: [
				{ id: 'zoom100', text: '100%', scale: 10},
				{ id: 'zoom200', text: '200%', scale: 14}
			]
		});

		if (!_inMobileMode()) {
			statusbar.insert('left', [
				{type: 'break', id: 'break1'},
				{
					type: 'html', id: 'StatusDocPos',
					html: '<div id="StatusDocPos" class="loleaflet-font" title="' + _('Number of Sheets') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break2'},
				{
					type: 'html', id: 'RowColSelCount',
					html: '<div id="RowColSelCount" class="loleaflet-font" title="' + _('Selected range of cells') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break3', tablet: false},
				{
					type: 'html', id: 'InsertMode', mobile: false, tablet: false,
					html: '<div id="InsertMode" class="loleaflet-font" title="' + _('Entering text mode') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break4', tablet: false},
				{
					type: 'html', id: 'LanguageStatus', mobile: false, tablet: false,
					html: '<div id="LanguageStatus" class="loleaflet-font" title="' + _('Text Language') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break5', tablet: false},
				{
					type: 'html', id: 'StatusSelectionMode', mobile: false, tablet: false,
					html: '<div id="StatusSelectionMode" class="loleaflet-font" title="' + _('Selection Mode') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break8', mobile: false, tablet: false},
				{
					type: 'html', id: 'StateTableCell', mobile: false, tablet: false,
					html: '<div id="StateTableCell" class="loleaflet-font" title="' + _('Choice of functions') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{
					type: 'menu-check', id: 'StateTableCellMenu', caption: '', selected: ['2', '512'], items: [
						{id: '2', text: _('Average')},
						{id: '8', text: _('CountA')},
						{id: '4', text: _('Count')},
						{id: '16', text: _('Maximum')},
						{id: '32', text: _('Minimum')},
						{id: '512', text: _('Sum')},
						{id: '8192', text: _('Selection count')},
						{id: '1', text: _('None')}
					], tablet: false
				},
				{type: 'break', id: 'break9', mobile: false}
			]);

			$('#spreadsheet-toolbar').show();
		}
		$('#formulabar').show();

		break;
	case 'text':
		toolbarUp.show('leftpara', 'centerpara', 'rightpara', 'justifypara', 'breakpara', 'linespacing',
			'breakspacing', 'defaultbullet', 'defaultnumbering', 'breakbullet', 'incrementindent', 'decrementindent',
			'breakindent', 'inserttable', 'insertannotation', 'backcolor');

		if (!_inMobileMode()) {
			statusbar.insert('left', [
				{type: 'break', id: 'break1'},
				{
					type: 'html', id: 'StatePageNumber',
					html: '<div id="StatePageNumber" class="loleaflet-font" title="' + _('Number of Pages') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break2'},
				{
					type: 'html', id: 'StateWordCount', mobile: false, tablet: false,
					html: '<div id="StateWordCount" class="loleaflet-font" title="' + _('Word Counter') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break5', mobile: false, tablet: false},
				{
					type: 'html', id: 'InsertMode', mobile: false, tablet: false,
					html: '<div id="InsertMode" class="loleaflet-font" title="' + _('Entering text mode') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break6', mobile: false, tablet: false},
				{
					type: 'html', id: 'StatusSelectionMode', mobile: false, tablet: false,
					html: '<div id="StatusSelectionMode" class="loleaflet-font" title="' + _('Selection Mode') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break7', mobile: false, tablet: false},
				{
					type: 'html', id: 'LanguageStatus', mobile: false, tablet: false,
					html: '<div id="LanguageStatus" class="loleaflet-font" title="' + _('Text Language') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break8', mobile: false}
			]);
		}

		break;
	case 'presentation':
		var presentationToolbar = w2ui['presentation-toolbar'];
		if (!map['wopi'].HideExportOption) {
			presentationToolbar.show('presentation', 'presentationbreak');
		}
		if (!_inMobileMode()) {
			statusbar.insert('left', [
				{type: 'break', id: 'break1'},
				{
					type: 'html', id: 'PageStatus',
					html: '<div id="PageStatus" class="loleaflet-font" title="' + _('Number of Slides') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break2', mobile: false, tablet: false},
				{
					type: 'html', id: 'LanguageStatus', mobile: false, tablet: false,
					html: '<div id="LanguageStatus" class="loleaflet-font" title="' + _('Text Language') + '" style="padding: 5px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</div>'
				},
				{type: 'break', id: 'break8', mobile: false}
			]);
		}

		// FALLTHROUGH intended
	case 'drawing':
		toolbarUp.show('leftpara', 'centerpara', 'rightpara', 'justifypara', 'breakpara', 'linespacing',
			'breakspacing', 'defaultbullet', 'defaultnumbering', 'breakbullet', 'inserttextbox', 'inserttable', 'backcolor');
		statusbar.show('prev', 'next');

		$('#presentation-toolbar').show();
		break;
	}

	if (L.DomUtil.get('document-signing-bar') !== null) {
		map.signingInitializeBar();
	}

	_updateToolbarsVisibility();

	if (L.Browser.mobile) {
		nUsers = '%n';
		oneUser = '1';
		noUser = '0';
		$('#document-name-input').hide();
	} else {
		nUsers = _('%n users');
		oneUser = _('1 user');
		noUser = _('0 users');
		$('#document-name-input').show();
	}

	updateUserListCount();
	toolbarUp.refresh();
	statusbar.refresh();

	if (window.mode.isTablet()) {
		map.hideMenubar();

		$('#document-container').addClass('tablet');
		$('#spreadsheet-row-column-frame').addClass('tablet');

		$('#tb_editbar_item_fonts').css({'display': 'none'});
		$('#tb_editbar_item_fontsizes').css({'display': 'none'});
	}

	if (docType == 'spreadsheet') {
		var el = w2ui['spreadsheet-toolbar'];
		if (el)
			el.resize();
	}
}

function onCommandStateChanged(e) {
	var toolbar = w2ui['editbar'];
	var statusbar = w2ui['actionbar'];
	var commandName = e.commandName;
	var state = e.state;
	var found = false;
	var value, color, div;

	if (commandName === '.uno:AssignLayout') {
		$('.styles-select').val(state).trigger('change');
	} else if (commandName === '.uno:StyleApply') {
		if (!state) {
			return;
		}

		// For impress documents, no styles is supported.
		if (map.getDocType() === 'presentation') {
			return;
		}

		$('.styles-select option').each(function () {
			var value = this.value;
			// For writer we get UI names; ideally we should be getting only programmatic ones
			// For eg: 'Text body' vs 'Text Body'
			// (likely to be fixed in core to make the pattern consistent)
			if (state && value.toLowerCase() === state.toLowerCase()) {
				state = value;
				found = true;
				return;
			}
		});
		if (!found) {
			// we need to add the size
			$('.styles-select')
				.append($('<option></option>')
				.text(state));
		}

		stylesSelectValue = state;
		$('.styles-select').val(state).trigger('change');
	}
	else if (commandName === '.uno:CharFontName') {
		$('.fonts-select option').each(function () {
			value = this.value;
			if (value.toLowerCase() === state.toLowerCase()) {
				found = true;
				updateFontSizeList(value);
				return;
			}
		});
		if (!found) {
			// we need to add the size
			$('.fonts-select')
				.append($('<option></option>')
				.text(state));
		}
		fontsSelectValue = state;
		$('.fonts-select').val(state).trigger('change');
	}
	else if (commandName === '.uno:FontHeight') {
		if (state === '0') {
			state = '';
		}
		$('.fontsizes-select option').each(function (i, e) {
			if ($(e).text() === state) {
				found = true;
				return;
			}
		});
		if (!found) {
			// we need to add the size
			$('.fontsizes-select')
				.append($('<option></option>')
				.text(state).val(state));
		}
		fontsizesSelectValue = state;
		$('.fontsizes-select').val(state).trigger('change');
		sortFontSizes();
	}
	else if (commandName === '.uno:FontColor' || commandName === '.uno:Color') {
		// confusingly, the .uno: command is named differently in Writer, Calc and Impress
		color = parseInt(e.state);
		if (color === -1) {
			color = 'transparent';
		}
		else {

			color = color.toString(16);
			color = '#' + Array(7 - color.length).join('0') + color;
		}
		div = L.DomUtil.get('fontcolorindicator');
		if (div) {
			L.DomUtil.setStyle(div, 'background', color);
		}
	}
	else if (commandName === '.uno:BackColor' || commandName === '.uno:BackgroundColor' || commandName === '.uno:CharBackColor') {
		// confusingly, the .uno: command is named differently in Writer, Calc and Impress
		color = parseInt(e.state);
		if (color === -1) {
			color = 'transparent';
		}
		else {
			color = color.toString(16);
			color = '#' + Array(7 - color.length).join('0') + color;
		}
		div = L.DomUtil.get('backcolorindicator');
		if (div) {
			L.DomUtil.setStyle(div, 'background', color);
		}
	}
	else if (commandName === '.uno:LanguageStatus') {
		updateToolbarItem(statusbar, 'LanguageStatus', $('#LanguageStatus').html(_(state)).parent().html());
	}
	else if (commandName === '.uno:ModifiedStatus') {
		if (e.state === 'true') {
			w2ui['editbar'].set('save', {img:'savemodified'});
		}
		else {
			w2ui['editbar'].set('save', {img:'save'});
		}
	}
	else if (commandName === '.uno:StatusDocPos') {
		state = toLocalePattern('Sheet %1 of %2', 'Sheet (\\d+) of (\\d+)', state, '%1', '%2');
		updateToolbarItem(statusbar, 'StatusDocPos', $('#StatusDocPos').html(state ? state : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:RowColSelCount') {
		state = toLocalePattern('$1 rows, $2 columns selected', '(\\d+) rows, (\\d+) columns selected', state, '$1', '$2');
		state = toLocalePattern('$1 of $2 records found', '(\\d+) of (\\d+) records found', state, '$1', '$2');
		updateToolbarItem(statusbar, 'RowColSelCount', $('#RowColSelCount').html(state ? state : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:InsertMode') {
		updateToolbarItem(statusbar, 'InsertMode', $('#InsertMode').html(state ? L.Styles.insertMode[state].toLocaleString() : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:StatusSelectionMode' ||
		 commandName === '.uno:SelectionMode') {
		updateToolbarItem(statusbar, 'StatusSelectionMode', $('#StatusSelectionMode').html(state ? L.Styles.selectionMode[state].toLocaleString() : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName == '.uno:StateTableCell') {
		updateToolbarItem(statusbar, 'StateTableCell', $('#StateTableCell').html(state ? localizeStateTableCell(state) : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:StatusBarFunc') {
		var item = statusbar.get('StateTableCellMenu');
		if (item) {
			item.selected = [];
			// Check 'None' even when state is 0
			if (state === '0') {
				state = 1;
			}
			for (var it = 0; it < item.items.length; it++) {
				if (item.items[it].id & state) {
					item.selected.push(item.items[it].id);
				}
			}
		}
	}
	else if (commandName === '.uno:StatePageNumber') {
		state = toLocalePattern('Page %1 of %2', 'Page (\\d+) of (\\d+)', state, '%1', '%2');
		updateToolbarItem(statusbar, 'StatePageNumber', $('#StatePageNumber').html(state ? state : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:StateWordCount') {
		state = toLocalePattern('%1 words, %2 characters', '([\\d,]+) words, ([\\d,]+) characters', state, '%1', '%2');
		updateToolbarItem(statusbar, 'StateWordCount', $('#StateWordCount').html(state ? state : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:PageStatus') {
		state = toLocalePattern('Slide %1 of %2', 'Slide (\\d+) of (\\d+)', state, '%1', '%2');
		updateToolbarItem(statusbar, 'PageStatus', $('#PageStatus').html(state ? state : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp').parent().html());
	}
	else if (commandName === '.uno:DocumentRepair') {
		if (state === 'true') {
			toolbar.enable('repair');
		} else {
			toolbar.disable('repair');
		}
	}

	var id = unoCmdToToolbarId(commandName);
	if (state === 'true') {
		if (map._permission === 'edit') {
			toolbar.enable(id);
		}
		toolbar.check(id);
	}
	else if (state === 'false') {
		if (map._permission === 'edit') {
			toolbar.enable(id);
		}
		toolbar.uncheck(id);
	}
	// Change the toolbar button states if we are in editmode
	// If in non-edit mode, will be taken care of when permission is changed to 'edit'
	else if (map._permission === 'edit' && (state === 'enabled' || state === 'disabled')) {
		var toolbarUp = toolbar;
		if (_inMobileMode()) {
			toolbarUp = statusbar;
		}
		if (state === 'enabled') {
			toolbarUp.enable(id);
		} else {
			toolbarUp.uncheck(id);
			toolbarUp.disable(id);
		}
	}
}

function updateCommandValues(targetName) {
	var data = [];
	// 1) For .uno:StyleApply
	// we need an empty option for the place holder to work
	if (targetName === 'styles' && $('.styles-select option').length === 1) {
		var styles = [];
		var topStyles = [];
		var commandValues = map.getToolbarCommandValues('.uno:StyleApply');
		if (typeof commandValues === 'undefined')
			return;
		var commands = commandValues.Commands;
		if (commands && commands.length > 0) {
			// Inserts a separator element
			data = data.concat({text: '\u2500\u2500\u2500\u2500\u2500\u2500', disabled: true});

			commands.forEach(function (command) {
				var translated = command.text;
				if (L.Styles.styleMappings[command.text]) {
					// if it's in English, translate it
					translated = L.Styles.styleMappings[command.text].toLocaleString();
				}
				data = data.concat({id: command.id, text: translated });
			}, this);
		}

		if (map.getDocType() === 'text') {
			styles = commandValues.ParagraphStyles.slice(7, 19);
			topStyles = commandValues.ParagraphStyles.slice(0, 7);
		}
		else if (map.getDocType() === 'spreadsheet') {
			styles = commandValues.CellStyles;
		}
		else if (map.getDocType() === 'presentation') {
			// styles are not applied for presentation
			return;
		}

		if (topStyles.length > 0) {
			// Inserts a separator element
			data = data.concat({text: '\u2500\u2500\u2500\u2500\u2500\u2500', disabled: true});

			topStyles.forEach(function (style) {
				data = data.concat({id: style, text: L.Styles.styleMappings[style].toLocaleString()});
			}, this);
		}

		if (styles !== undefined && styles.length > 0) {
			// Inserts a separator element
			data = data.concat({text: '\u2500\u2500\u2500\u2500\u2500\u2500', disabled: true});

			styles.forEach(function (style) {
				var localeStyle;
				if (style.startsWith('outline')) {
					var outlineLevel = style.split('outline')[1];
					localeStyle = 'Outline'.toLocaleString() + ' ' + outlineLevel;
				} else {
					localeStyle = L.Styles.styleMappings[style];
					localeStyle = localeStyle === undefined ? style : localeStyle.toLocaleString();
				}

				data = data.concat({id: style, text: localeStyle});
			}, this);
		}

		$('.styles-select').select2({
			data: data,
			placeholder: _('Style')
		});
		$('.styles-select').val(stylesSelectValue).trigger('change');
		$('.styles-select').on('select2:select', onStyleSelect);
		w2ui['editbar'].resize();
	}

	if (targetName === 'fonts' && $('.fonts-select option').length === 1) {
		// 2) For .uno:CharFontName
		commandValues = map.getToolbarCommandValues('.uno:CharFontName');
		if (typeof commandValues === 'undefined') {
			return;
		}
		data = []; // reset data in order to avoid that the font select box is populated with styles, too.
		// Old browsers like IE11 et al don't like Object.keys with
		// empty arguments
		if (typeof commandValues === 'object') {
			data = data.concat(Object.keys(commandValues));
		}
		$('.fonts-select').select2({
			data: data.sort(function (a, b) {  // also sort(localely)
				return a.localeCompare(b);
			}),
			placeholder: _('Font')
		});
		$('.fonts-select').on('select2:select', onFontSelect);
		$('.fonts-select').val(fontsSelectValue).trigger('change');
		w2ui['editbar'].resize();
	}

	if (targetName === 'fontsizes' && $('.fontsizes-select option').length === 1) {
		$('.fontsizes-select').select2({
			placeholder: ' ',
			data: []
		});

		$('.fontsizes-select').on('select2:select', onFontSizeSelect);
		if (fontsSelectValue) {
			updateFontSizeList(fontsSelectValue);
		}
		$('.fontsizes-select').val(fontsizesSelectValue).trigger('change');
		w2ui['editbar'].resize();
	}
}


function onUpdateParts(e) {
	if (e.docType === 'text') {
		var current = e.currentPage;
		var count = e.pages;
	}
	else {
		current = e.selectedPart;
		count = e.parts;
	}

	var toolbar = w2ui['actionbar'];
	if (!toolbar) {
		return;
	}

	if (e.docType === 'presentation') {
		toolbar.set('prev', {hint: _('Previous slide')});
		toolbar.set('next', {hint: _('Next slide')});
	}
	else {
		toolbar.hide('presentation');
		toolbar.hide('insertpage');
		toolbar.hide('duplicatepage');
		toolbar.hide('deletepage');
	}

	if (e.docType !== 'spreadsheet') {
		if (current === 0) {
			toolbar.disable('prev');
		}
		else {
			toolbar.enable('prev');
		}

		if (current === count - 1) {
			toolbar.disable('next');
		}
		else {
			toolbar.enable('next');
		}
	}
}

function onCommandResult(e) {
	var commandName = e.commandName;

	if (commandName === '.uno:Save') {
		if (e.success) {
			// Saved a new version; the document is modified.
			map._everModified = true;
		}
		var postMessageObj = {
			success: e.success
		};
		if (!e.success) {
			// add the result reason string if failed
			postMessageObj['result'] = e.result && e.result.value;
		}
		map.fire('postMessage', {msgId: 'Action_Save_Resp', args: postMessageObj});
	}
	else if ((commandName === '.uno:Undo' || commandName === '.uno:Redo') &&
		e.success === true && e.result.value && !isNaN(e.result.value)) { /*UNDO_CONFLICT*/
		$('#tb_editbar_item_repair').w2overlay({ html: '<div style="padding: 10px; line-height: 150%">' +
			_('Conflict Undo/Redo with multiple users. Please use document repair to resolve') + '</div>'});
	}
}

function onUpdatePermission(e) {
	var toolbar = w2ui['editbar'];
	if (toolbar) {
		// always enabled items
		var enabledButtons = ['closemobile', 'undo', 'redo'];

		// copy the first array
		var items = toolbar.items.slice();
		for (var idx in items) {
			var found = enabledButtons.filter(function(id) { return id === items[idx].id });
			var alwaysEnable = found.length !== 0;

			if (e.perm === 'edit') {
				var unoCmd = map.getDocType() === 'spreadsheet' ? items[idx].unosheet : items[idx].uno;
				var keepDisabled = map['stateChangeHandler'].getItemValue(unoCmd) === 'disabled';
				if (!keepDisabled || alwaysEnable) {
					toolbar.enable(items[idx].id);
				}
			} else if (!alwaysEnable) {
				toolbar.disable(items[idx].id);
			}
		}
	}

	var spreadsheetButtons = ['insertsheet'];
	var formulaBarButtons = ['sum', 'function'];
	var presentationButtons = ['insertpage', 'duplicatepage', 'deletepage'];
	var toolbarDownButtons = ['next', 'prev'];
	if (e.perm === 'edit') {
		// Enable list boxes
		$('.styles-select').prop('disabled', false);
		$('.fonts-select').prop('disabled', false);
		$('.fontsizes-select').prop('disabled', false);

		// Enable formula bar
		$('#addressInput').prop('disabled', false);
		$('#formulaInput').prop('disabled', false);
		toolbar = w2ui.formulabar;
		if (toolbar) {
			formulaBarButtons.forEach(function(id) {
				toolbar.enable(id);
			});
		}

		toolbar = w2ui['spreadsheet-toolbar'];
		if (toolbar) {
			spreadsheetButtons.forEach(function(id) {
				toolbar.enable(id);
			});
		}

		toolbar = w2ui['presentation-toolbar'];
		if (toolbar) {
			presentationButtons.forEach(function(id) {
				toolbar.enable(id);
			});
		}

		toolbar = w2ui['actionbar'];
		if (toolbar) {
			toolbarDownButtons.forEach(function(id) {
				toolbar.enable(id);
			});
		}
		$('#search-input').prop('disabled', false);

		// FIXME avoid hardcoding this stuff if possible
		if (_inMobileMode()) {
			$('#toolbar-down').show();
			switch (map._docLayer._docType) {
			case 'text':
				$('#document-container').css('bottom', '33px');
				break;
			case 'spreadsheet':
				$('#document-container').css('bottom', '68px'); // FIXME this and spreadsheet-row-column-frame are supposed to be the same, but are not
				$('#spreadsheet-row-column-frame').css('bottom', '65px');
				$('#spreadsheet-toolbar').show();
				break;
			case 'presentation':
				$('#document-container').css('bottom', '33px');
				break;
			}
		}
	}
	else {
		// Disable list boxes
		$('.styles-select').prop('disabled', true);
		$('.fonts-select').prop('disabled', true);
		$('.fontsizes-select').prop('disabled', true);

		// Disable formula bar
		$('#addressInput').prop('disabled', true);
		$('#formulaInput').prop('disabled', true);

		toolbar = w2ui.formulabar;
		if (toolbar) {
			formulaBarButtons.forEach(function(id) {
				toolbar.disable(id);
			});
		}

		toolbar = w2ui['spreadsheet-toolbar'];
		if (toolbar) {
			spreadsheetButtons.forEach(function(id) {
				toolbar.disable(id);
			});
		}

		toolbar = w2ui['presentation-toolbar'];
		if (toolbar) {
			presentationButtons.forEach(function(id) {
				toolbar.disable(id);
			});
		}

		toolbar = w2ui['actionbar'];
		if (toolbar) {
			toolbarDownButtons.forEach(function(id) {
				toolbar.disable(id);
			});
		}
		$('#search-input').prop('disabled', true);

		// FIXME avoid hardcoding this stuff if possible
		if (_inMobileMode()) {
			$('#toolbar-down').hide();
			switch (map._docLayer._docType) {
			case 'text':
				$('#document-container').css('bottom', '0');
				break;
			case 'spreadsheet':
				$('#document-container').css('bottom', '35px');
				$('#spreadsheet-row-column-frame').css('bottom', '0');
				$('#spreadsheet-toolbar').show();
				break;
			case 'presentation':
				$('#document-container').css('bottom', '0');
				break;
			}
		}
	}
}

function onUseritemClicked(e) { // eslint-disable-line no-unused-vars
	var docLayer = map._docLayer;
	var viewId = parseInt(e.currentTarget.id.replace('user-', ''));

	map._goToViewId(viewId);

	if (viewId === map._docLayer._viewId) {
		$('#tb_actionbar_item_userlist').w2overlay('');
		return;
	} else if (docLayer._followThis !== -1) {
		map._setFollowing(false, null);
	}

	docLayer._followThis = viewId;
	docLayer._followUser = true;
	docLayer._followEditor = false;

	selectUser(viewId);
}

global.onUseritemClicked = onUseritemClicked;

function editorUpdate(e) { // eslint-disable-line no-unused-vars
	var docLayer = map._docLayer;

	if (e.target.checked) {
		var editorId = docLayer._editorId;

		docLayer._followUser = false;
		docLayer._followEditor = true;
		if (editorId !== -1 && editorId !== docLayer.viewId) {
			map._goToViewId(editorId);
			docLayer._followThis = editorId;
		}

		var userlistItem = w2ui['actionbar'].get('userlist');
		if (userlistItem !== null) {
			$('.selected-user').removeClass('selected-user');
			if ($(userlistItem.html).find('.selected-user').length !== 0)
				userlistItem.html = $(userlistItem.html).find('.selected-user').removeClass('selected-user').parent().parent().parent()[0].outerHTML;
		}
	}
	else {
		docLayer._followEditor = false;
		docLayer._followThis = -1;
	}
	$('#tb_actionbar_item_userlist').w2overlay('');
}

global.editorUpdate = editorUpdate;

function selectUser(viewId) {
	var userlistItem = w2ui['actionbar'].get('userlist');
	if (userlistItem === null) {
		return;
	}

	userlistItem.html = $(userlistItem.html).find('#user-' + viewId).addClass('selected-user').parent().parent().parent()[0].outerHTML;
	$('#tb_actionbar_item_userlist').w2overlay('');
}

function deselectUser(e) {
	var userlistItem = w2ui['actionbar'].get('userlist');
	if (userlistItem === null) {
		return;
	}

	userlistItem.html = $(userlistItem.html).find('#user-' + e.viewId).removeClass('selected-user').parent().parent().parent()[0].outerHTML;
}

function getUserItem(viewId, userName, extraInfo, color) {
	var html = '<tr class="useritem" id="user-' + viewId + '" onclick="onUseritemClicked(event)">' +
		     '<td class=usercolor>';
	if (extraInfo !== undefined && extraInfo.avatar !== undefined) {
		html += '<img class="avatar-img" src="' + extraInfo.avatar + '" style="border-color: ' + color  + ';" />';
	} else {
		html += '<div class="user-info" style="background-color: ' + color  + ';" />';
	}

	// TODO: Add mail and other links as sub-menu.
	html += '</td>' +
		     '<td class="username loleaflet-font" >' + userName + '</td>' +
	    '</tr>';

	return html;
}

function updateUserListCount() {
	var userlistItem = w2ui['actionbar'].get('userlist');
	if (userlistItem === null) {
		return;
	}

	var count = $(userlistItem.html).find('#userlist_table tbody tr').length;
	if (count > 1) {
		userlistItem.text = nUsers.replace('%n', count);
	} else if (count === 1) {
		userlistItem.text = oneUser;
	} else {
		userlistItem.text = noUser;
	}

	w2ui['actionbar'].refresh();

	if (count > 1) {
		$('#tb_actionbar_item_userlist').show();
		$('#tb_actionbar_item_userlistbreak').show();
	} else {
		$('#tb_actionbar_item_userlist').hide();
		$('#tb_actionbar_item_userlistbreak').hide();
	}
}

function escapeHtml(input) {
	return $('<div>').text(input).html();
}

function onAddView(e) {
	var username = escapeHtml(e.username);
	$('#tb_actionbar_item_userlist')
		.w2overlay({
			class: 'loleaflet-font',
			html: userJoinedPopupMessage.replace('%user', username),
			style: 'padding: 5px'
		});
	clearTimeout(userPopupTimeout);
	userPopupTimeout = setTimeout(function() {
		$('#tb_actionbar_item_userlist').w2overlay('');
		clearTimeout(userPopupTimeout);
		userPopupTimeout = null;
	}, 3000);

	var color = L.LOUtil.rgbToHex(map.getViewColor(e.viewId));
	if (e.viewId === map._docLayer._viewId) {
		username = _('You');
		color = '#000';
	}

	// Mention readonly sessions in userlist
	if (e.readonly) {
		username += ' (' +  _('Readonly') + ')';
	}

	var userlistItem = w2ui['actionbar'].get('userlist');
	if (userlistItem !== null) {
		var newhtml = $(userlistItem.html).find('#userlist_table tbody').append(getUserItem(e.viewId, username, e.extraInfo, color)).parent().parent()[0].outerHTML;
		userlistItem.html = newhtml;
		updateUserListCount();
	}
}

function onRemoveView(e) {
	$('#tb_actionbar_item_userlist')
		.w2overlay({
			class: 'loleaflet-font',
			html: userLeftPopupMessage.replace('%user', e.username),
			style: 'padding: 5px'
		});
	clearTimeout(userPopupTimeout);
	userPopupTimeout = setTimeout(function() {
		$('#tb_actionbar_item_userlist').w2overlay('');
		clearTimeout(userPopupTimeout);
		userPopupTimeout = null;
	}, 3000);

	if (e.viewId === map._docLayer._followThis) {
		map._docLayer._followThis = -1;
		map._docLayer._followUser = false;
	}

	var userlistItem = w2ui['actionbar'].get('userlist');
	if (userlistItem !== null) {
		userlistItem.html = $(userlistItem.html).find('#user-' + e.viewId).remove().end()[0].outerHTML;
		updateUserListCount();
	}
}

$(window).resize(function() {
	resizeToolbar();
});

$(document).ready(function() {
	if (!closebutton) {
		$('#closebuttonwrapper').hide();
	} else if (closebutton && !L.Browser.mobile) {
		$('.closebuttonimage').show();
	}

	$('#closebutton').click(function() {
		map.fire('postMessage', {msgId: 'close', args: {EverModified: map._everModified, Deprecated: true}});
		map.fire('postMessage', {msgId: 'UI_Close', args: {EverModified: map._everModified}});
		map.remove();
	});

	// Attach insert file action
	$('#insertgraphic').on('change', onInsertFile);
});

function setupToolbar(e) {
	map = e;

	createToolbar();

	map.on('updateEditorName', function(e) {
		$('#currently-msg').show();
		$('#current-editor').text(e.username);
	});

	map.on('keydown', function (e) {
		if (e.originalEvent.ctrlKey && !e.originalEvent.altKey &&
		   (e.originalEvent.key === 'f' || e.originalEvent.key === 'F')) {
			var entry = L.DomUtil.get('search-input');
			entry.focus();
			entry.select();
			e.originalEvent.preventDefault();
		}
	});

	map.on('hyperlinkclicked', function (e) {
		map.fire('warn', {url: e.url, map: map, cmd: 'openlink'});
	});

	map.on('cellformula', function (e) {
		if (document.activeElement !== L.DomUtil.get('formulaInput')) {
			// if the user is not editing the formula bar
			L.DomUtil.get('formulaInput').value = e.formula;
		}
	});

	map.on('zoomend', function () {
		var zoomPercent = 100;
		var zoomSelected = null;
		switch (map.getZoom()) {
		case 6:  zoomPercent =  50; zoomSelected = 'zoom50'; break;
		case 7:  zoomPercent =  60; zoomSelected = 'zoom60'; break;
		case 8:  zoomPercent =  70; zoomSelected = 'zoom70'; break;
		case 9:  zoomPercent =  85; zoomSelected = 'zoom85'; break;
		case 10: zoomPercent = 100; zoomSelected = 'zoom100'; break;
		case 11: zoomPercent = 120; zoomSelected = 'zoom120'; break;
		case 12: zoomPercent = 150; zoomSelected = 'zoom150'; break;
		case 13: zoomPercent = 175; zoomSelected = 'zoom175'; break;
		case 14: zoomPercent = 200; zoomSelected = 'zoom200'; break;
		default:
			var zoomRatio = map.getZoomScale(map.getZoom(), map.options.zoom);
			zoomPercent = Math.round(zoomRatio * 100) + '%';
			break;
		}
		w2ui['actionbar'].set('zoom', {text: zoomPercent, selected: zoomSelected});
	});

	map.on('celladdress', function (e) {
		if (document.activeElement !== L.DomUtil.get('addressInput')) {
			// if the user is not editing the address field
			L.DomUtil.get('addressInput').value = e.address;
		}
	});

	map.on('search', function (e) {
		var searchInput = L.DomUtil.get('search-input');
		var toolbar = w2ui['actionbar'];
		if (e.count === 0) {
			toolbar.disable('searchprev');
			toolbar.disable('searchnext');
			toolbar.hide('cancelsearch');
			L.DomUtil.addClass(searchInput, 'search-not-found');
			$('#findthis').addClass('search-not-found');
			map.resetSelection();
			setTimeout(function () {
				$('#findthis').removeClass('search-not-found');
				L.DomUtil.removeClass(searchInput, 'search-not-found');
			}, 500);
		}
	});


	if (!window.mode.isMobile()) {
		map.on('updatetoolbarcommandvalues', function() {
			w2ui['editbar'].refresh();
		});

		map.on('showbusy', function(e) {
			w2utils.lock(w2ui['actionbar'].box, e.label, true);
		});

		map.on('hidebusy', function() {
			// If locked, unlock
			if (w2ui['actionbar'].box.firstChild.className === 'w2ui-lock') {
				w2utils.unlock(w2ui['actionbar'].box);
			}
		});

		map.on('doclayerinit', onDocLayerInit);
		map.on('updatepermission', onUpdatePermission);
	}
	map.on('wopiprops', onWopiProps);
	map.on('commandresult', onCommandResult);
	map.on('updateparts pagenumberchanged', onUpdateParts);
	map.on('commandstatechanged', onCommandStateChanged);
}

global.setupToolbar = setupToolbar;
global.onClick = onClick;
global.hideTooltip = hideTooltip;
global.deselectUser = deselectUser;
global.onAddView = onAddView;
global.onRemoveView = onRemoveView;
global.onAddressInput = onAddressInput;
global.onFormulaInput = onFormulaInput;
global.onFormulaBarBlur = onFormulaBarBlur;
global.onFormulaBarFocus = onFormulaBarFocus;
global.updateCommandValues = updateCommandValues;
global.onStyleSelect = onStyleSelect;
global.insertTable = insertTable;
global.insertShapes = insertShapes;
global.onUpdatePermission = onUpdatePermission;

}(window));

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

L.Control = L.Class.extend({
	options: {
		position: 'topright'
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	getPosition: function () {
		return this.options.position;
	},

	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	getContainer: function () {
		return this._container;
	},

	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		L.DomUtil.addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		if (this.onAdded) {
			this.onAdded(this._map);
		}

		return this;
	},

	remove: function () {
		if (!this._map) {
			return this;
		}

		L.DomUtil.remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map = null;

		return this;
	},

	isVisible: function () {
		if (!this._map) {
			return false;
		}
		var corner = this._map._controlCorners[this.options.position];
		return corner.hasChildNodes();
	}
});

L.control = function (options) {
	return new L.Control(options);
};


// adds control-related methods to L.Map

L.Map.include({
	addControl: function (control) {
		control._map = this;
		var controlDiv = control.onAdd(this);
		var controlContainer = L.DomUtil.get(this.options.toolbarContainer);
		if (!this._controls) {
			this._controls = [];
		}

		if (controlContainer && controlDiv) {
			controlContainer.appendChild(controlDiv);
			this._controls.push({div: controlDiv});
		}
		return this;
	},

	removeControl: function (control) {
		control.remove();
		return this;
	},

	removeControls: function () {
		if (this._controls) {
			this._controls.forEach(function (control) {
				L.DomUtil.remove(control.div);
			});
		}
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            L.DomUtil.create('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = L.DomUtil.create('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		L.DomUtil.remove(this._controlContainer);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.PartsPreview
 */

/* global $ */
L.Control.PartsPreview = L.Control.extend({
	options: {
		autoUpdate: true
	},

	onAdd: function (map) {
		this._previewInitialized = false;
		this._previewTiles = [];
		this._partsPreviewCont = L.DomUtil.get('slide-sorter');
		this._scrollY = 0;

		map.on('updateparts', this._updateDisabled, this);
		map.on('updatepart', this._updatePart, this);
		map.on('tilepreview', this._updatePreview, this);
		map.on('insertpage', this._insertPreview, this);
		map.on('deletepage', this._deletePreview, this);
	},

	_updateDisabled: function (e) {
		var parts = e.parts;
		var selectedPart = e.selectedPart;
		var docType = e.docType;
		if (docType === 'text') {
			return;
		}

		if (docType === 'presentation' || docType === 'drawing') {
			var presentationControlWrapperElem = L.DomUtil.get('presentation-controls-wrapper');
			var visible = L.DomUtil.getStyle(presentationControlWrapperElem, 'display');
			if (visible === 'none')
				return;
			if (!this._previewInitialized)
			{
				// make room for the preview
				var control = this;
				var docContainer = this._map.options.documentContainer;
				L.DomUtil.addClass(docContainer, 'parts-preview-document');
				setTimeout(L.bind(function () {
					this._map.invalidateSize();
					$('.scroll-container').mCustomScrollbar('update');
				}, this), 500);
				var previewContBB = this._partsPreviewCont.getBoundingClientRect();
				this._previewContTop = previewContBB.top;
				var bottomBound = previewContBB.bottom + previewContBB.height / 2;

				$('#slide-sorter').mCustomScrollbar({
					axis: 'y',
					theme: 'dark-thick',
					scrollInertia: 0,
					alwaysShowScrollbar: 1,
					callbacks:{
						whileScrolling: function() {
							control._onScroll(this);
						}
					}
				});
				this._scrollContainer = $('#slide-sorter .mCSB_container').get(0);

				for (var i = 0; i < parts; i++) {
					this._previewTiles.push(this._createPreview(i, e.partNames[i], bottomBound));
				}
				L.DomUtil.addClass(this._previewTiles[selectedPart], 'preview-img-selected');
				this._previewInitialized = true;
			}
			else
			{
				if (e.partNames !== undefined) {
					this._syncPreviews(e);
				}

				// change the border style of the selected preview.
				for (var j = 0; j < parts; j++) {
					L.DomUtil.removeClass(this._previewTiles[j], 'preview-img-selected');
				}
				L.DomUtil.addClass(this._previewTiles[selectedPart], 'preview-img-selected');
			}
		}
	},

	_createPreview: function (i, hashCode, bottomBound) {
		var frame = L.DomUtil.create('div', 'preview-frame', this._scrollContainer);
		L.DomUtil.create('span', 'preview-helper', frame);

		var imgClassName = 'preview-img';
		var img = L.DomUtil.create('img', imgClassName, frame);
		img.hash = hashCode;
		img.src = L.Icon.Default.imagePath + '/preview_placeholder.png';
		img.fetched = false;
		L.DomEvent
			.on(img, 'click', L.DomEvent.stopPropagation)
			.on(img, 'click', L.DomEvent.stop)
			.on(img, 'click', this._setPart, this)
			.on(img, 'click', this._map.focus, this._map);

		var topBound = this._previewContTop;
		var previewFrameTop = 0;
		var previewFrameBottom = 0;
		if (i > 0) {
			if (!bottomBound) {
				var previewContBB = this._partsPreviewCont.getBoundingClientRect();
				bottomBound = this._previewContTop + previewContBB.height + previewContBB.height / 2;
			}
			previewFrameTop = this._previewContTop + this._previewFrameMargin + i * (this._previewFrameHeight + this._previewFrameMargin);
			previewFrameTop -= this._scrollY;
			previewFrameBottom = previewFrameTop + this._previewFrameHeight;
			L.DomUtil.setStyle(img, 'height', this._previewImgHeight + 'px');
		}

		var imgSize;
		if (i === 0 || (previewFrameTop >= topBound && previewFrameTop <= bottomBound)
			|| (previewFrameBottom >= topBound && previewFrameBottom <= bottomBound)) {
			imgSize = this._map.getPreview(i, i, 180, 180, {autoUpdate: this.options.autoUpdate});
			img.fetched = true;
			L.DomUtil.setStyle(img, 'height', '');
		}

		if (i === 0) {
			var previewImgBorder = Math.round(parseFloat(L.DomUtil.getStyle(img, 'border-top-width')));
			var previewImgMinWidth = Math.round(parseFloat(L.DomUtil.getStyle(img, 'min-width')));
			var imgHeight = imgSize.height;
			if (imgSize.width < previewImgMinWidth)
				imgHeight = Math.round(imgHeight * previewImgMinWidth / imgSize.width);
			var previewFrameBB = frame.getBoundingClientRect();
			this._previewFrameMargin = previewFrameBB.top - this._previewContTop;
			this._previewImgHeight = imgHeight;
			this._previewFrameHeight = imgHeight + 2 * previewImgBorder;
		}

		return img;
	},

	_setPart: function (e) {
		var part = $('#slide-sorter .mCSB_container .preview-frame').index(e.target.parentNode);
		if (part !== null) {
			this._map.setPart(parseInt(part));
		}
	},

	_updatePart: function (e) {
		if (e.docType === 'presentation' && e.part >= 0) {
			this._map.getPreview(e.part, e.part, 180, 180, {autoUpdate: this.options.autoUpdate});
		}
	},

	_syncPreviews: function (e) {
		var it = 0;
		var parts = e.parts;
		if (parts !== this._previewTiles.length) {
			if (Math.abs(parts - this._previewTiles.length) === 1) {
				if (parts > this._previewTiles.length) {
					for (it = 0; it < parts; it++) {
						if (it === this._previewTiles.length) {
							this._insertPreview({selectedPart: it - 1, hashCode: e.partNames[it]});
							break;
						}
						if (this._previewTiles[it].hash !== e.partNames[it]) {
							this._insertPreview({selectedPart: it, hashCode: e.partNames[it]});
							break;
						}
					}
				}
				else {
					for (it = 0; it < this._previewTiles.length; it++) {
						if (it === e.partNames.length ||
						    this._previewTiles[it].hash !== e.partNames[it]) {
							this._deletePreview({selectedPart: it});
							break;
						}
					}
				}
			}
			else {
				// sync all, should never happen
				while (this._previewTiles.length < e.partNames.length) {
					this._insertPreview({selectedPart: this._previewTiles.length - 1,
							     hashCode: e.partNames[this._previewTiles.length]});
				}

				while (this._previewTiles.length > e.partNames.length) {
					this._deletePreview({selectedPart: this._previewTiles.length - 1});
				}

				for (it = 0; it < e.partNames.length; it++) {
					this._previewTiles[it].hash = e.partNames[it];
					this._previewTiles[it].src = L.Icon.Default.imagePath + '/preview_placeholder.png';
					this._previewTiles[it].fetched = false;
				}
				this._onScrollEnd();
			}
		}
		else {
			// update hash code when user click insert slide.
			for (it = 0; it < parts; it++) {
				if (this._previewTiles[it].hash !== e.partNames[it]) {
					this._previewTiles[it].hash = e.partNames[it];
				}
			}
		}
	},

	_updatePreview: function (e) {
		if (this._map.getDocType() === 'presentation' || this._map.getDocType() === 'drawing') {
			if (!this._previewInitialized)
				return;
			this._previewTiles[e.id].src = e.tile;
		}
	},

	_updatePreviewIds: function () {
		$('#slide-sorter').mCustomScrollbar('update');
	},

	_insertPreview: function (e) {
		if (this._map.getDocType() === 'presentation') {
			var newIndex = e.selectedPart + 1;
			var newPreview = this._createPreview(newIndex, (e.hashCode === undefined ? null : e.hashCode));

			// insert newPreview to newIndex position
			this._previewTiles.splice(newIndex, 0, newPreview);

			var selectedFrame = this._previewTiles[e.selectedPart].parentNode;
			var newFrame = newPreview.parentNode;

			// insert after selectedFrame
			selectedFrame.parentNode.insertBefore(newFrame, selectedFrame.nextSibling);
			this._updatePreviewIds();
		}
	},

	_deletePreview: function (e) {
		if (this._map.getDocType() === 'presentation') {
			var selectedFrame = this._previewTiles[e.selectedPart].parentNode;
			L.DomUtil.remove(selectedFrame);

			this._previewTiles.splice(e.selectedPart, 1);
			this._updatePreviewIds();
		}
	},

	_onScroll: function (e) {
		var scrollOffset = 0;
		if (e) {
			var prevScrollY = this._scrollY;
			this._scrollY = -e.mcs.top;
			scrollOffset = this._scrollY - prevScrollY;
		}

		var previewContBB = this._partsPreviewCont.getBoundingClientRect();
		var extra =  previewContBB.height;
		var topBound = this._previewContTop - (scrollOffset < 0 ? extra : previewContBB.height / 2);
		var bottomBound = this._previewContTop + previewContBB.height + (scrollOffset > 0 ? extra : previewContBB.height / 2);
		for (var i = 0; i < this._previewTiles.length; ++i) {
			var img = this._previewTiles[i];
			if (img && img.parentNode && !img.fetched) {
				var previewFrameBB = img.parentNode.getBoundingClientRect();
				if ((previewFrameBB.top >= topBound && previewFrameBB.top <= bottomBound)
				|| (previewFrameBB.bottom >= topBound && previewFrameBB.bottom <= bottomBound)) {
					this._map.getPreview(i, i, 180, 180, {autoUpdate: this.options.autoUpdate});
					img.fetched = true;
				}
			}
		}
	}
});

L.control.partsPreview = function (options) {
	return new L.Control.PartsPreview(options);
};

/* -*- js-indent-level: 8 -*- */
/*
* Control.Header
*/

L.Control.Header = L.Control.extend({
	options: {
		cursor: 'col-resize'
	},

	initialize: function () {
		this._isColumn = undefined;

		this.converter = null;

		this._canvas = null;
		this._canvasWidth = 0;
		this._canvasHeight = 0;
		this._clicks = 0;
		this._current = -1;
		this._selection = {start: -1, end: -1};
		this._mouseOverEntry = null;
		this._lastMouseOverIndex = undefined;
		this._hitResizeArea = false;
		this._overHeaderArea = false;

		this._selectionBackgroundGradient = [ '#3465A4', '#729FCF', '#004586' ];

		this._groups = null;

		// group control styles
		this._groupHeadSize = 12;
		this._levelSpacing = 1;

		// set up corner header
		var cornerHeader = L.DomUtil.get('spreadsheet-header-corner-container');
		if (cornerHeader) {
			this._cornerHeaderContainer = cornerHeader;
			this._cornerCanvas = L.DomUtil.get('spreadsheet-header-corner');
			L.DomEvent.on(this._cornerHeaderContainer, 'touchstart',
				function (e) {
					if (e && e.touches.length > 1) {
						L.DomEvent.preventDefault(e);
					}
				},
				this);

		}
		else {
			var rowColumnFrame = L.DomUtil.get('spreadsheet-row-column-frame');
			this._cornerHeaderContainer = L.DomUtil.createWithId('div', 'spreadsheet-header-corner-container', rowColumnFrame);
			this._cornerCanvas = L.DomUtil.createWithId('canvas', 'spreadsheet-header-corner', this._cornerHeaderContainer);
			this._setCornerCanvasWidth();
			this._setCornerCanvasHeight();
		}
		this._cornerCanvasContext = this._cornerCanvas.getContext('2d');
		this._cornerCanvasContext.clearRect(0, 0, this._cornerCanvas.width, this._cornerCanvas.height);
	},

	_initHeaderEntryStyles: function (className) {
		var baseElem = document.getElementsByTagName('body')[0];
		var elem = L.DomUtil.create('div', className, baseElem);
		this._textColor = L.DomUtil.getStyle(elem, 'color');
		this._backgroundColor = L.DomUtil.getStyle(elem, 'background-color');
		var fontFamily = L.DomUtil.getStyle(elem, 'font-family');
		var fontSize = parseInt(L.DomUtil.getStyle(elem, 'font-size'));
		var fontHeight = parseInt(L.DomUtil.getStyle(elem, 'line-height'));
		var rate = fontHeight / fontSize;
		this._font = fontSize + 'px/' + rate + ' ' + fontFamily;
		this._borderColor = L.DomUtil.getStyle(elem, 'border-top-color');
		var borderWidth = L.DomUtil.getStyle(elem, 'border-top-width');
		this._borderWidth = Math.round(parseFloat(borderWidth));
		this._cursor = L.DomUtil.getStyle(elem, 'cursor');
		L.DomUtil.remove(elem);
	},

	_initHeaderEntryHoverStyles: function (className) {
		var baseElem = document.getElementsByTagName('body')[0];
		var elem = L.DomUtil.create('div', className, baseElem);
		this._hoverColor = L.DomUtil.getStyle(elem, 'background-color');
		L.DomUtil.remove(elem);
	},

	_initHeaderEntrySelectedStyles: function (className) {
		var baseElem = document.getElementsByTagName('body')[0];
		var elem = L.DomUtil.create('div', className, baseElem);
		this._selectionTextColor = L.DomUtil.getStyle(elem, 'color');

		var selectionBackgroundGradient = [];
		var gradientColors = L.DomUtil.getStyle(elem, 'background-image');
		gradientColors = gradientColors.slice('linear-gradient('.length, -1);
		while (gradientColors) {
			var color = gradientColors.split(',', 3);
			color = color.join(','); // color = 'rgb(r, g, b)'
			selectionBackgroundGradient.push(color);
			gradientColors = gradientColors.substr(color.length); // remove last parsed color
			gradientColors = gradientColors.substr(gradientColors.indexOf('r')); // remove ', ' stuff
		}

		if (selectionBackgroundGradient.length) {
			this._selectionBackgroundGradient = selectionBackgroundGradient;
		}
		L.DomUtil.remove(elem);
	},

	_initHeaderEntryResizeStyles: function (className) {
		if (this.options.cursor) {
			this._resizeCursor = this.options.cursor;
		}
		else {
			var baseElem = document.getElementsByTagName('body')[0];
			var elem = L.DomUtil.create('div', className, baseElem);
			this._resizeCursor = L.DomUtil.getStyle(elem, 'cursor');
			L.DomUtil.remove(elem);
		}
	},

	mouseInit: function (element) {
		L.DomEvent.on(element, 'mousedown', this._onMouseDown, this);
	},

	select: function (entry) {
		this.drawHeaderEntry(entry, /*isOver=*/false, /*isHighlighted=*/true);
	},

	unselect: function (entry) {
		this.drawHeaderEntry(entry, /*isOver=*/false, /*isHighlighted=*/false);
	},

	isHighlighted: function (index) {
		if (this._selection.start === -1 && this._selection.end === -1) {
			return index === this._current;
		}
		return (this._selection.start <= index && index <= this._selection.end);
	},

	clearSelection: function (data) {
		if (this._selection.start === -1 && this._selection.end === -1)
			return;
		var start = (this._selection.start < 1) ? 1 : this._selection.start;
		var end = this._selection.end + 1;

		var entry = data.getAt(start);

		while (entry && entry.index < end) {
			this.unselect(entry);
			entry = data.getNext(start);
		}

		this._selection.start = this._selection.end = -1;
		// after clearing selection, we need to select the header entry for the current cursor position,
		// since we can't be sure that the selection clearing is due to click on a cell
		// different from the one where the cursor is already placed
		this.select(data.get(this._current));
	},

	updateSelection: function(data, start, end) {
		if (!data || data.isEmpty())
			return;

		var x0 = 0, x1 = 0;
		var itStart = -1, itEnd = -1;
		var selected = false;

		// if the start selection position is above/on the left of the first header entry,
		// but the end selection position is below/on the right of it
		// then we set the start selected entry to the first header entry.
		var entry = data.getFirst();
		if (entry) {
			x0 = entry.pos - entry.size;
			if (start < x0 && end > x0) {
				selected = true;
				itStart = 1;
			}
		}

		while (entry) {
			x0 = entry.pos - entry.size;
			x1 = entry.pos;
			if (x0 <= start && start < x1) {
				selected = true;
				itStart = entry.index;
			}
			if (selected) {
				this.select(entry);
			}
			if (x0 <= end && end <= x1) {
				itEnd = entry.index;
				break;
			}
			entry = data.getNext();
		}

		// if end is greater than the last fetched header position set itEnd to the max possible value
		// without this hack selecting a whole row and then a whole column (or viceversa) leads to an incorrect selection
		if (itStart !== -1 && itEnd === -1) {
			itEnd = data.getLength() - 1;
		}

		// we need to unselect the row (column) header entry for the current cell cursor position
		// since the selection could be due to selecting a whole row (column), so the selection
		// does not start by clicking on a cell
		if (this._current !== -1 && itStart !== -1 && itEnd !== -1) {
			if (this._current < itStart || this._current > itEnd) {
				this.unselect(data.get(this._current));
			}
		}

		if (this._selection.start !== -1 && itStart !== -1 && itStart > this._selection.start) {
			entry = data.getAt(this._selection.start);
			while (entry && entry.index < itStart) {
				this.unselect(entry);
				entry = data.getNext();
			}
		}
		if (this._selection.end !== -1 && itEnd !== -1 && itEnd < this._selection.end) {
			entry = data.getAt(itEnd + 1);
			while (entry && entry.index <= this._selection.end) {
				this.unselect(entry);
				entry = data.getNext();
			}
		}
		this._selection.start = itStart;
		this._selection.end = itEnd;
	},

	updateCurrent: function (data, cursorPos, slim) {
		if (!data || data.isEmpty())
			return;

		if (cursorPos < 0) {
			this.unselect(data.get(this._current));
			this._current = -1;
			return;
		}

		var prevEntry = cursorPos > 0 ? data.get(cursorPos - 1) : null;
		var zeroSizeEntry = slim && prevEntry && prevEntry.size === 0;

		var entry = data.get(cursorPos);
		if (this._selection.start === -1 && this._selection.end === -1) {
			// when a whole row (column) is selected the cell cursor is moved to the first column (row)
			// but this action should not cause to select/unselect anything, on the contrary we end up
			// with all column (row) header entries selected but the one where the cell cursor was
			// previously placed
			this.unselect(data.get(this._current));
			// no selection when the cell cursor is slim
			if (entry && !zeroSizeEntry)
				this.select(entry);
		}
		this._current = entry && !zeroSizeEntry ? entry.index : -1;
	},

	_mouseEventToCanvasPos: function(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	},

	_onMouseOut: function (e) {
		if (this._hitOutline(e))
			return;

		this._onHeaderMouseOut(e);
	},

	_onHeaderMouseOut: function () {
		if (!this._overHeaderArea)
			return;
		this._overHeaderArea = false;

		if (this._mouseOverEntry) {
			this.drawHeaderEntry(this._mouseOverEntry, /*isOver: */ false);
			this._lastMouseOverIndex = this._mouseOverEntry.index + this._startHeaderIndex; // used by context menu
			this._mouseOverEntry = null;
		}
		this._hitResizeArea = false;
		L.DomEvent.on(this._canvas, 'click', this._onClick, this);
		L.DomUtil.setStyle(this._canvas, 'cursor', 'default');
	},

	_onMouseMove: function (e) {
		if (this._hitOutline(e)) {
			this._onHeaderMouseOut(e);
			return false;
		}
		if (!this._overHeaderArea) {
			L.DomUtil.setStyle(this._canvas, 'cursor', this._cursor);
			this._overHeaderArea = true;
		}

		var isMouseOverResizeArea = false;
		var pos = this._getParallelPos(this._mouseEventToCanvasPos(this._canvas, e));
		pos = pos - this._position;

		var mouseOverIndex = this._mouseOverEntry ? this._mouseOverEntry.index : undefined;
		var entry = this._data.getFirst();
		while (entry) {
			var start = entry.pos - entry.size;
			var end = entry.pos;
			if (pos > start && pos <= end) {
				mouseOverIndex = entry.index;
				var resizeAreaStart = Math.max(start, end - 3);
				isMouseOverResizeArea = (pos > resizeAreaStart);
				break;
			}
			entry = this._data.getNext();
		}

		if (mouseOverIndex && (!this._mouseOverEntry || mouseOverIndex !== this._mouseOverEntry.index)) {
			this.drawHeaderEntry(this._mouseOverEntry, false);
			this.drawHeaderEntry(entry, true);
			this._mouseOverEntry = entry;
		}

		if (isMouseOverResizeArea !== this._hitResizeArea) {
			if (isMouseOverResizeArea) {
				L.DomEvent.off(this._canvas, 'click', this._onClick, this);
			}
			else {
				L.DomEvent.on(this._canvas, 'click', this._onClick, this);
			}
			var cursor = isMouseOverResizeArea ? this._resizeCursor : this._cursor;
			L.DomUtil.setStyle(this._canvas, 'cursor', cursor);
			this._hitResizeArea = isMouseOverResizeArea;
		}
	},


	_onOutlineMouseEvent: function (e, eventHandler) {
		// check if the group controls area has been hit
		if (!this._hitOutline(e))
			return false;

		var pos = this._mouseEventToCanvasPos(this._canvas, e);
		var level = this._getGroupLevel(this._getOrthogonalPos(pos));
		if (level < 0 || level >= this._groups.length)
			return true;

		// when 2 collapsed group controls overlaps completely,
		// clicking on the control should expand the lower/rightmost group
		var groups = this._groups[level];
		var indexes = Object.keys(groups);
		var len = indexes.length;
		for (var i = len - 1; i >= 0; --i) {
			e.group = groups[indexes[i]];
			if (eventHandler.call(this, e))
				break;
		}

		return true;
	},

	_onGroupControlClick: function (e) {
		var group = e.group;
		if (!group)
			return false;

		var pos = this._getParallelPos(this._mouseEventToCanvasPos(this._canvas, e));
		pos = pos - this._position;
		if (group.startPos < pos && pos < group.startPos + this._groupHeadSize) {
			this._updateOutlineState(/*isColumnOutline: */ this._isColumn, group);
			return true;
		}
		return false;
	},

	_onDoubleClick: function (e) {
		this._onOutlineMouseEvent(e, this._onGroupControlDoubleClick);
	},

	_onGroupControlDoubleClick: function (e) {
		var group = e.group;
		if (!group && !group.hidden)
			return false;

		var pos = this._getParallelPos(this._mouseEventToCanvasPos(this._canvas, e));
		pos = pos - this._position;
		if (group.startPos + this._groupHeadSize < pos && pos < group.endPos) {
			this._updateOutlineState(/*isColumnOutline: */ this._isColumn, group);
			return true;
		}
		return false;
	},

	_updateOutlineState: function (column, group) {
		if (!group)
			return;

		var type = column ? 'column' : 'row';
		var state = group.hidden ? 'visible' : 'hidden'; // we have to send the new state
		var payload = 'outlinestate type='+ type + ' level=' + group.level + ' index=' + group.index + ' state=' + state;
		this._map._socket.sendMessage(payload);
	},

	_onMouseDown: function (e) {
		if (this._hitOutline(e))
			return;

		var target = e.target || e.srcElement;
		if (!target || this._dragging) {
			return false;
		}

		if (!this._hitResizeArea)
			return;

		var rect = this.getHeaderEntryBoundingClientRect();
		if (!rect)
			return;

		L.DomUtil.disableImageDrag();
		L.DomUtil.disableTextSelection();

		L.DomEvent.stopPropagation(e);

		// disable normal mouse events
		L.DomEvent.off(target, 'mousemove', this._onMouseMove, this);
		L.DomEvent.off(target, 'mouseout', this._onMouseOut, this);
		// enable mouse events used on dragging
		L.DomEvent.on(document, 'mousemove', this._onMouseMoveForDragging, this);
		L.DomEvent.on(document, 'mouseup', this._onMouseUp, this);


		this._start = new L.Point(rect.left, rect.top);
		this._offset = new L.Point(rect.right - e.clientX, rect.bottom - e.clientY);
		this._item = target;

		this.onDragStart(this.item, this._start, this._offset, e);
	},

	_onMouseMoveForDragging: function (e) {
		this._dragging = true;
		L.DomEvent.preventDefault(e);

		this.onDragMove(this._item, this._start, this._offset, e);
	},

	_resetClickCount: function () {
		this._clicks = 0;
	},

	_onMouseUp: function (e) {
		// disable mouse events used on dragging
		L.DomEvent.off(document, 'mousemove', this._onMouseMoveForDragging, this);
		L.DomEvent.off(document, 'mouseup', this._onMouseUp, this);

		L.DomUtil.enableImageDrag();
		L.DomUtil.enableTextSelection();
		// enable normal mouse events
		L.DomEvent.on(this._item, 'mousemove', this._onMouseMove, this);
		L.DomEvent.on(this._item, 'mouseout', this._onMouseOut, this);

		if (this._dragging) {
			this.onDragEnd(this._item, this._start, this._offset, e);
			this._clicks = 0;
		} else {
			this.onDragClick(this._item, ++this._clicks, e);
			setTimeout(L.bind(this._resetClickCount, this), 400);
		}

		this._item = this._start = this._offset = null;
		this._dragging = false;
	},

	_twipsToPixels: function (twips) {
		if (!this.converter)
			return 0;
		var point = new L.Point(twips, twips);
		return Math.round(this._getParallelPos(this.converter(point)));
	},

	_setCanvasSizeImpl: function (container, canvas, property, value, isCorner) {
		if (!value) {
			value = parseInt(L.DomUtil.getStyle(container, property));
		}
		else {
			L.DomUtil.setStyle(container, property, value + 'px');
		}

		var scale = L.getDpiScaleFactor();
		if (property === 'width') {
			canvas.width = value * scale;
			if (!isCorner)
				this._canvasWidth = value;
			console.log('Header._setCanvasSizeImpl: _canvasWidth' + this._canvasWidth);
		}
		else if (property === 'height') {
			canvas.height = value * scale;
			if (!isCorner)
				this._canvasHeight = value;
		}
	},

	_setCanvasWidth: function (width) {
		this._setCanvasSizeImpl(this._headerContainer, this._canvas, 'width', width, /*isCorner: */ false);
	},

	_setCanvasHeight: function (height) {
		this._setCanvasSizeImpl(this._headerContainer, this._canvas, 'height', height, /*isCorner: */ false);
	},

	_setCornerCanvasWidth: function (width) {
		this._setCanvasSizeImpl(this._cornerHeaderContainer, this._cornerCanvas, 'width', width, /*isCorner: */ true);
	},

	_setCornerCanvasHeight: function (height) {
		this._setCanvasSizeImpl(this._cornerHeaderContainer, this._cornerCanvas, 'height', height, /*isCorner: */ true);
	},

	_hitOutline: function (e) {
		var pos = this._mouseEventToCanvasPos(this._canvas, e);
		return this._getOrthogonalPos(pos) <= this.getOutlineWidth();
	},

	_getGroupLevel: function (pos) {
		var levels = this._groups.length;
		var size = this._levelSpacing + this._groupHeadSize;

		var level = (pos + 1) / size | 0;
		var relPos = pos % size;

		if (level <= levels && relPos > this._levelSpacing) {
			return level;
		}
		else {
			return -1;
		}
	},

	_computeOutlineWidth: function () {
		return this._levelSpacing + (this._groupHeadSize + this._levelSpacing) * (this._groups.length + 1);
	},

	getOutlineWidth: function () {
		if (this._isColumn)
			return this._canvasHeight - this._borderWidth - this._headerHeight;
		else
			return this._canvasWidth - this._borderWidth - this._headerWidth;
	},

	_collectGroupsData: function(groups) {
		var level, groupEntry;

		var lastGroupIndex = new Array(groups.length);
		var firstChildGroupIndex = new Array(groups.length);
		var lastLevel = -1;
		for (var i = 0; i < groups.length; ++i) {
			// a new group start
			var groupData = groups[i];
			level = parseInt(groupData.level) - 1;
			if (!this._groups[level]) {
				this._groups[level] = {};
			}
			var startPos = this._twipsToPixels(parseInt(groupData.startPos));
			var endPos = this._twipsToPixels(parseInt(groupData.endPos));
			var isHidden = !!parseInt(groupData.hidden);
			if (isHidden || startPos === endPos) {
				startPos -= this._groupHeadSize / 2;
				endPos = startPos + this._groupHeadSize;
			}
			else {
				var moved = false;
				// if the first child is collapsed the parent head has to be top-aligned with the child
				if (level < lastLevel && firstChildGroupIndex[lastLevel] !== undefined) {
					var childGroupEntry = this._groups[lastLevel][firstChildGroupIndex[lastLevel]];
					if (childGroupEntry.hidden) {
						if (startPos > childGroupEntry.startPos && startPos < childGroupEntry.endPos) {
							startPos = childGroupEntry.startPos;
							moved = true;
						}
					}
				}
				// if 2 groups belonging to the same level are contiguous and the first group is collapsed,
				// the second one has to be shifted as much as possible in order to avoiding overlapping.
				if (!moved && lastGroupIndex[level] !== undefined) {
					var prevGroupEntry = this._groups[level][lastGroupIndex[level]];
					if (prevGroupEntry.hidden) {
						if (startPos > prevGroupEntry.startPos && startPos < prevGroupEntry.endPos) {
							startPos = prevGroupEntry.endPos;
						}
					}
				}
			}
			groupEntry = {
				level: level,
				index: groupData.index,
				startPos: startPos,
				endPos: endPos,
				hidden: isHidden
			};
			this._groups[level][groupData.index] = groupEntry;
			lastGroupIndex[level] = groupData.index;
			if (level > lastLevel) {
				firstChildGroupIndex[level] = groupData.index;
				lastLevel = level;
			}
			else if (level === lastLevel) {
				firstChildGroupIndex[level + 1] = undefined;
			}
		}
	},

	drawCornerHeader: function() {
		var ctx = this._cornerCanvasContext;

		if (!this._groups)
			return;

		ctx.save();
		var scale = L.getDpiScaleFactor();
		ctx.scale(scale, scale);

		ctx.fillStyle = this._borderColor;
		if (this._isColumn) {
			var startY = this._cornerCanvas.height / scale - (L.Control.Header.colHeaderHeight + this._borderWidth);
			if (startY > 0)
				ctx.fillRect(0, startY, this._cornerCanvas.width, this._borderWidth);
		}
		else {
			var startX = this._cornerCanvas.width / scale - (L.Control.Header.rowHeaderWidth + this._borderWidth);
			if (startX > 0)
				ctx.fillRect(startX, 0, this._borderWidth, this._cornerCanvas.height);
		}
		ctx.restore();

		var levels = this._groups.length + 1;
		for (var i = 0; i < levels; ++i) {
			this.drawLevelHeader(i);
		}
	},

	drawOutline: function() {
		if (this._groups) {
			for (var itLevel = 0; itLevel < this._groups.length; ++itLevel) {
				for (var groupIndex in this._groups[itLevel]) {
					if (this._groups[itLevel].hasOwnProperty(groupIndex))
						this.drawGroupControl(this._groups[itLevel][groupIndex]);
				}
			}
		}
	},

	onDragStart: function () {},
	onDragMove: function () {},
	onDragEnd: function () {},
	onDragClick: function () {},
	getHeaderEntryBoundingClientRect: function () {},
	drawHeaderEntry: function () {},
	drawGroupControl: function () {},
	_getParallelPos: function () {},
	_getOrthogonalPos: function () {}

});

(function () {
	L.Control.Header.rowHeaderWidth = undefined;
	L.Control.Header.colHeaderHeight = undefined;

	L.Control.Header.DataImpl = L.Class.extend({
		initialize: function () {
			this.converter = null;

			this._currentIndex = undefined;
			this._currentRange = undefined;
			this._dataMap = {};
			this._indexes = [];
			this._endIndex = -1;
			this._skipZeroSize = true;
		},

		_get: function (index, setCurrentIndex) {
			if (index < 1 || index > this._endIndex)
				return null;

			var range = this._getFirstIndexLessOrEqual(index);
			if (range !== undefined) {
				if (setCurrentIndex) {
					this._currentRange = range;
					this._currentIndex = index;
				}
				return this._computeEntry(this._indexes[range], index);
			}
		},

		get: function (index) {
			return this._get(index, false);
		},

		getAt: function (index) {
			return this._get(index, true);
		},

		getFirst: function () {
			this._currentRange = 0;
			this._currentIndex = this._indexes[this._currentRange];
			return this.getNext();
		},

		getNext: function () {
			if (this._currentIndex === undefined || this._currentRange === undefined)
				return null; // you need to call getFirst on initial step

			this._currentIndex += 1;
			if (this._currentIndex > this._endIndex) {
				// we iterated over all entries, reset everything
				this._currentIndex = undefined;
				this._currentRange = undefined;
				this._skipZeroSize = false;
				return null;
			}

			if (this._indexes[this._currentRange+1] === this._currentIndex) {
				// new range
				this._currentRange += 1;

				if (this._skipZeroSize) {
					var index, i, len = this._indexes.length;
					for (i = this._currentRange; i < len; ++i) {
						index = this._indexes[i];
						if (this._dataMap[index].size > 0) {
							break;
						}
					}
					if (i < len) {
						this._currentRange = i;
						this._currentIndex = index;
					}
					else {
						// we iterated over all entries, reset everything
						this._currentIndex = undefined;
						this._currentRange = undefined;
						this._skipZeroSize = false;
						return null;
					}
				}
			}

			var startIndex = this._indexes[this._currentRange];
			return this._computeEntry(startIndex, this._currentIndex);
		},

		pushBack: function (index, value) {
			if (index <= this._endIndex)
				return;
			this._dataMap[index] = value;
			this._indexes.push(index);
			this._endIndex = index;
		},

		isZeroSize: function (index) {
			if (!(index > 0 && index < this._endIndex)) {
				return true;
			}

			var range = this._getFirstIndexLessOrEqual(index);
			return this._dataMap[this._indexes[range]].size === 0;
		},

		getLength: function () {
			return this._endIndex;
		},

		isEmpty: function () {
			return 	this._indexes.length === 0;
		},

		_binaryIndexOf: function (collection, searchElement) {
			var minIndex = 0;
			var maxIndex = collection.length - 1;
			var currentIndex;
			var currentElement;

			while (minIndex <= maxIndex) {
				currentIndex = (minIndex + maxIndex) / 2 | 0;
				currentElement = collection[currentIndex];

				if (currentElement < searchElement) {
					minIndex = currentIndex + 1;
				}
				else if (currentElement > searchElement) {
					maxIndex = currentIndex - 1;
				}
				else {
					return currentIndex;
				}
			}

			if (currentIndex > maxIndex)
				return currentIndex - 1;
			if (currentIndex < minIndex)
				return currentIndex;
		},

		_getFirstIndexLessOrEqual: function (index) {
			return this._binaryIndexOf(this._indexes, index);
		},

		_twipsToPixels: function (twips) {
			if (!this.converter)
				return 0;

			return this.converter(twips);
		},

		_computeEntry: function (startIndex, index) {
			var entry = this._dataMap[startIndex];
			var pos = entry.pos + (index - startIndex) * entry.size;
			pos = this._twipsToPixels(pos);
			var size = this._twipsToPixels(entry.size);
			return {index: index, pos: pos, size: size};
		}

	});

})();

/* -*- js-indent-level: 8 -*- */
/*
* Control.ColumnHeader
*/

/* global $ _UNO */
L.Control.ColumnHeader = L.Control.Header.extend({
	options: {
		cursor: 'col-resize'
	},

	onAdd: function (map) {
		map.on('updatepermission', this._onUpdatePermission, this);
		this._initialized = false;
	},

	_initialize: function () {
		this._initialized = true;
		this._isColumn = true;
		this._map.on('scrolloffset', this.offsetScrollPosition, this);
		this._map.on('updatescrolloffset', this.setScrollPosition, this);
		this._map.on('viewrowcolumnheaders', this.viewRowColumnHeaders, this);
		this._map.on('updateselectionheader', this._onUpdateSelection, this);
		this._map.on('clearselectionheader', this._onClearSelection, this);
		this._map.on('updatecurrentheader', this._onUpdateCurrentColumn, this);
		this._map.on('updatecornerheader', this.drawCornerHeader, this);
		var rowColumnFrame = L.DomUtil.get('spreadsheet-row-column-frame');
		this._headerContainer = L.DomUtil.createWithId('div', 'spreadsheet-header-columns-container', rowColumnFrame);

		this._initHeaderEntryStyles('spreadsheet-header-column');
		this._initHeaderEntryHoverStyles('spreadsheet-header-column-hover');
		this._initHeaderEntrySelectedStyles('spreadsheet-header-column-selected');
		this._initHeaderEntryResizeStyles('spreadsheet-header-column-resize');

		this._canvas = L.DomUtil.create('canvas', 'spreadsheet-header-columns', this._headerContainer);
		this._canvasContext = this._canvas.getContext('2d');
		this._setCanvasWidth();
		this._setCanvasHeight();

		var scale = L.getDpiScaleFactor();
		this._canvasContext.scale(scale, scale);

		this._headerHeight = this._canvasHeight;
		L.Control.Header.colHeaderHeight = this._canvasHeight;

		L.DomUtil.setStyle(this._canvas, 'cursor', this._cursor);

		L.DomEvent.on(this._canvas, 'mousemove', this._onMouseMove, this);
		L.DomEvent.on(this._canvas, 'mouseout', this._onMouseOut, this);
		L.DomEvent.on(this._canvas, 'click', this._onClick, this);
		L.DomEvent.on(this._canvas, 'dblclick', this._onDoubleClick, this);
		L.DomEvent.on(this._canvas, 'touchstart',
			function (e) {
				if (e && e.touches.length > 1) {
					L.DomEvent.preventDefault(e);
				}
			},
			this);

		this._startHeaderIndex = 0;
		this._startOffset = 0;
		this._position = 0;

		L.DomEvent.on(this._cornerCanvas, 'contextmenu', L.DomEvent.preventDefault);
		L.DomEvent.addListener(this._cornerCanvas, 'click', this._onCornerHeaderClick, this);

		var colHeaderObj = this;
		$.contextMenu({
			selector: '.spreadsheet-header-columns',
			className: 'loleaflet-font',
			items: {
				'insertcolbefore': {
					name: _UNO('.uno:InsertColumnsBefore', 'spreadsheet', true),
					callback: function() {
						var index = colHeaderObj._lastMouseOverIndex;
						if (index) {
							colHeaderObj.insertColumn.call(colHeaderObj, index);
						}
					}
				},
				'deleteselectedcol': {
					name: _UNO('.uno:DeleteColumns', 'spreadsheet', true),
					callback: function() {
						var index = colHeaderObj._lastMouseOverIndex;
						if (index) {
							colHeaderObj.deleteColumn.call(colHeaderObj, index);
						}
					}
				},
				'optimalwidth': {
					name: _UNO('.uno:SetOptimalColumnWidth', 'spreadsheet', true),
					callback: function() {
						var index = colHeaderObj._lastMouseOverIndex;
						if (index) {
							colHeaderObj.optimalWidth.call(colHeaderObj, index);
						}
					}
				},
				'hideColumn': {
					name: _UNO('.uno:HideColumn', 'spreadsheet', true),
					callback: function() {
						var index = colHeaderObj._lastMouseOverIndex;
						if (index) {
							colHeaderObj.hideColumn.call(colHeaderObj, index);
						}
					}
				},
				'showColumn': {
					name: _UNO('.uno:ShowColumn', 'spreadsheet', true),
					callback: function() {
						var index = colHeaderObj._lastMouseOverIndex;
						if (index) {
							colHeaderObj.showColumn.call(colHeaderObj, index);
						}
					}
				}
			},
			zIndex: 10
		});
	},

	optimalWidth: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectColumn(index, 0);
		}
		this._map.sendUnoCommand('.uno:SetOptimalColumnWidth');
	},

	insertColumn: function(index) {
		// First select the corresponding column because
		// .uno:InsertColumn doesn't accept any column number
		// as argument and just inserts before the selected column
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectColumn(index, 0);
		}
		this._map.sendUnoCommand('.uno:InsertColumns');
		this._updateColumnHeader();
	},

	deleteColumn: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectColumn(index, 0);
		}
		this._map.sendUnoCommand('.uno:DeleteColumns');
		this._updateColumnHeader();
	},

	hideColumn: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectColumn(index, 0);
		}
		this._map.sendUnoCommand('.uno:HideColumn');
		this._updateColumnHeader();
	},

	showColumn: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectColumn(index, 0);
		}
		this._map.sendUnoCommand('.uno:ShowColumn');
		this._updateColumnHeader();
	},

	setScrollPosition: function (e) {
		var position = -e.x;
		this._position = Math.min(0, position);
	},

	offsetScrollPosition: function (e) {
		var offset = e.x;
		this._position = Math.min(0, this._position- offset);
	},

	_onClearSelection: function () {
		this.clearSelection(this._data);
	},

	_onUpdateSelection: function (e) {
		var start = e.start.x;
		var end = e.end.x;
		if (start !== -1) {
			start = this._twipsToPixels(start);
		}
		if (end !== -1) {
			end = this._twipsToPixels(end);
		}
		this.updateSelection(this._data, start, end);
	},

	_onUpdateCurrentColumn: function (e) {
		var x = e.curX - this._startHeaderIndex;
		var w = this._twipsToPixels(e.width);
		var slim = w <= 1;
		this.updateCurrent(this._data, x, slim);
	},

	_updateColumnHeader: function () {
		this._map.fire('updaterowcolumnheaders', {x: this._map._getTopLeftPoint().x, y: 0, offset: {x: undefined, y: 0}});
	},

	drawHeaderEntry: function (entry, isOver, isHighlighted) {
		if (!entry)
			return;

		var ctx = this._canvasContext;
		var content = this._colIndexToAlpha(entry.index + this._startHeaderIndex);
		var startOrt = this._canvasHeight - this._headerHeight;
		var startPar = entry.pos - entry.size - this._startOffset;
		var endPar = entry.pos - this._startOffset;
		var width = endPar - startPar;
		var height = this._headerHeight;

		if (isHighlighted !== true && isHighlighted !== false) {
			isHighlighted = this.isHighlighted(entry.index);
		}

		if (width <= 0)
			return;

		ctx.save();
		var scale = L.getDpiScaleFactor();
		ctx.scale(scale, scale);
		ctx.translate(this._position + this._startOffset, 0);
		// background gradient
		var selectionBackgroundGradient = null;
		if (isHighlighted) {
			selectionBackgroundGradient = ctx.createLinearGradient(startPar, startOrt, startPar, startOrt + height);
			selectionBackgroundGradient.addColorStop(0, this._selectionBackgroundGradient[0]);
			selectionBackgroundGradient.addColorStop(0.5, this._selectionBackgroundGradient[1]);
			selectionBackgroundGradient.addColorStop(1, this._selectionBackgroundGradient[2]);
		}

		// draw header/outline border separator
		if (this._headerHeight !== this._canvasHeight) {
			ctx.fillStyle = this._borderColor;
			ctx.fillRect(startPar, startOrt - this._borderWidth, width, this._borderWidth);
		}

		// clip mask
		ctx.beginPath();
		ctx.rect(startPar, startOrt, width, height);
		ctx.clip();
		// draw background
		ctx.fillStyle = isHighlighted ? selectionBackgroundGradient : isOver ? this._hoverColor : this._backgroundColor;
		ctx.fillRect(startPar, startOrt, width, height);
		// draw text content
		ctx.fillStyle = isHighlighted ? this._selectionTextColor : this._textColor;
		ctx.font = this._font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		// The '+ 1' below is a hack - it's currently not possible to measure
		// the exact bounding box in html5's canvas, and the textBaseline
		// 'middle' measures everything including the descent etc.
		// '+ 1' looks visually fine, and seems safe enough
		ctx.fillText(content, endPar - (width / 2), startOrt + (height / 2) + 1);
		// draw row separator
		ctx.fillStyle = this._borderColor;
		ctx.fillRect(endPar -1, startOrt, this._borderWidth, height);
		ctx.restore();
	},

	drawGroupControl: function (group) {
		if (!group)
			return;

		var ctx = this._canvasContext;
		var headSize = this._groupHeadSize;
		var spacing = this._levelSpacing;
		var level = group.level;

		var startOrt = spacing + (headSize + spacing) * level;
		var startPar = group.startPos - this._startOffset;
		var height = group.endPos - group.startPos;

		ctx.save();
		var scale = L.getDpiScaleFactor();
		ctx.scale(scale, scale);

		ctx.translate(this._position + this._startOffset, 0);
		// clip mask
		ctx.beginPath();
		ctx.rect(startPar, startOrt, height, headSize);
		ctx.clip();
		if (!group.hidden) {
			//draw tail
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(startPar + headSize, startOrt + 2);
			ctx.lineTo(startPar + height - 1, startOrt + 2);
			ctx.lineTo(startPar + height - 1, startOrt + 2 + headSize / 2);
			ctx.stroke();
			// draw head
			ctx.fillStyle = this._hoverColor;
			ctx.fillRect(startPar, startOrt, headSize, headSize);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 0.5;
			ctx.strokeRect(startPar, startOrt, headSize, headSize);
			// draw '-'
			ctx.lineWidth = 1;
			ctx.strokeRect(startPar + headSize / 4, startOrt + headSize / 2, headSize / 2, 1);
		}
		else {
			// draw head
			ctx.fillStyle = this._hoverColor;
			ctx.fillRect(startPar, startOrt, headSize, headSize);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 0.5;
			ctx.strokeRect(startPar, startOrt, headSize, headSize);
			// draw '+'
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(startPar + headSize / 4, startOrt + headSize / 2);
			ctx.lineTo(startPar + 3 * headSize / 4, startOrt + headSize / 2);
			ctx.moveTo(startPar + headSize / 2, startOrt + headSize / 4);
			ctx.lineTo(startPar + headSize / 2, startOrt + 3 * headSize / 4);
			ctx.stroke();
		}
		ctx.restore();
	},

	drawLevelHeader: function(level) {
		var ctx = this._cornerCanvasContext;
		var ctrlHeadSize = this._groupHeadSize;
		var levelSpacing = this._levelSpacing;
		var scale = L.getDpiScaleFactor();

		var startOrt = levelSpacing + (ctrlHeadSize + levelSpacing) * level;
		var startPar = this._cornerCanvas.width / scale - (ctrlHeadSize + (L.Control.Header.rowHeaderWidth - ctrlHeadSize) / 2);

		ctx.save();
		ctx.scale(scale, scale);
		ctx.fillStyle = this._hoverColor;
		ctx.fillRect(startPar, startOrt, ctrlHeadSize, ctrlHeadSize);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 0.5;
		ctx.strokeRect(startPar, startOrt, ctrlHeadSize, ctrlHeadSize);
		// draw level number
		ctx.fillStyle = this._textColor;
		ctx.font = this._font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(level + 1, startPar + (ctrlHeadSize / 2), startOrt + (ctrlHeadSize / 2));
		ctx.restore();
	},

	getHeaderEntryBoundingClientRect: function (index) {
		var entry = this._mouseOverEntry;
		if (index)
			entry = this._data.get(index);

		if (!entry)
			return;

		var rect = this._canvas.getBoundingClientRect();

		var colStart = entry.pos - entry.size + this._position;
		var colEnd = entry.pos + this._position;

		var left = rect.left + colStart;
		var right = rect.left + colEnd;
		var top = rect.top;
		var bottom = rect.bottom;
		return {left: left, right: right, top: top, bottom: bottom};
	},

	viewRowColumnHeaders: function (e) {
		if (e.data.columns && e.data.columns.length > 0) {
			this.fillColumns(e.data.columns, e.data.columnGroups, e.converter, e.context);
		}
	},

	fillColumns: function (columns, colGroups, converter, context) {
		if (columns.length < 2)
			return;

		var headerEntry, index, iterator, width, pos;

		var canvas = this._canvas;
		this._setCanvasWidth();
		this._setCanvasHeight();
		this._canvasContext.clearRect(0, 0, canvas.width, canvas.height);

		// update first header index and reset no more valid variables
		this._startHeaderIndex = parseInt(columns[0].text);
		this._current = -1; // no more valid
		this._selection.start = this._selection.end = -1; // no more valid
		this._mouseOverEntry = null;
		this._lastMouseOverIndex = undefined;

		// create header data handler instance
		this._data = new L.Control.Header.DataImpl();

		// setup conversion routine
		this.converter = L.Util.bind(converter, context);
		this._data.converter = L.Util.bind(this._twipsToPixels, this);

		// create group array
		this._groupLevels = parseInt(columns[0].groupLevels);
		this._groups = this._groupLevels ? new Array(this._groupLevels) : null;

		var startOffsetTw = parseInt(columns[0].size);
		this._startOffset = this._twipsToPixels(startOffsetTw);

		this._data.pushBack(0, {pos: startOffsetTw, size: 0});
		var prevPos = startOffsetTw;
		var nextIndex = parseInt(columns[1].text);
		var last = columns.length - 1;

		for (iterator = 1; iterator < last; iterator++) {
			index = nextIndex;
			pos = parseInt(columns[iterator].size);
			nextIndex = parseInt(columns[iterator+1].text);
			width = pos - prevPos;
			prevPos = Math.round(pos + width * (nextIndex - index - 1));
			index = index - this._startHeaderIndex;
			headerEntry = {pos: pos, size: width};
			this._data.pushBack(index, headerEntry);
		}

		// setup last header entry
		index = nextIndex - this._startHeaderIndex;
		pos = parseInt(columns[last].size);
		width = pos - prevPos;
		this._data.pushBack(index, {pos: pos, size: width});

		// collect group controls data
		if (colGroups !== undefined && this._groups) {
			this._collectGroupsData(colGroups);
		}

		if (this._groups) {
			this.resize(this._computeOutlineWidth() + this._borderWidth + this._headerHeight);
		}
		else if (this._canvasHeight !== this._headerHeight) {
			this.resize(this._headerHeight);
		}

		// draw header
		headerEntry = this._data.getFirst();
		while (headerEntry) {
			this.drawHeaderEntry(headerEntry, false);
			headerEntry = this._data.getNext();
		}

		// draw group controls
		this.drawOutline();

		this.mouseInit(canvas);

		L.DomEvent.on(canvas, 'contextmenu', L.DomEvent.preventDefault);
		if ($('.spreadsheet-header-columns').length > 0) {
			$('.spreadsheet-header-columns').contextMenu(this._map._permission === 'edit');
		}
	},

	_colAlphaToNumber: function(alpha) {
		var res = 0;
		var offset = 'A'.charCodeAt();
		for (var i = 0; i < alpha.length; i++) {
			var chr = alpha[alpha.length - i - 1];
			res += (chr.charCodeAt() - offset + 1) * Math.pow(26, i);
		}

		return res;
	},

	_colIndexToAlpha: function(columnNumber) {
		var offset = 'A'.charCodeAt();
		var dividend = columnNumber;
		var columnName = '';
		var modulo;

		while (dividend > 0) {
			modulo = (dividend - 1) % 26;
			columnName = String.fromCharCode(offset + modulo) + columnName;
			dividend = Math.floor((dividend - modulo) / 26);
		}

		return columnName;
	},

	_selectColumn: function(colNumber, modifier) {
		var command = {
			Col: {
				type: 'unsigned short',
				value: colNumber - 1
			},
			Modifier: {
				type: 'unsigned short',
				value: modifier
			}
		};

		this._map.sendUnoCommand('.uno:SelectColumn ', command);
	},

	_onClick: function (e) {
		if (this._onOutlineMouseEvent(e, this._onGroupControlClick))
			return;

		if (!this._mouseOverEntry)
			return;

		var col = this._mouseOverEntry.index + this._startHeaderIndex;

		var modifier = 0;
		if (e.shiftKey) {
			modifier += this._map.keyboard.keyModifier.shift;
		}
		if (e.ctrlKey) {
			modifier += this._map.keyboard.keyModifier.ctrl;
		}

		this._selectColumn(col, modifier);
	},

	_onCornerHeaderClick: function(e) {
		var pos = this._mouseEventToCanvasPos(this._cornerCanvas, e);

		if (pos.y > this.getOutlineWidth()) {
			this._map.fire('cornerheaderclicked', e);
			return;
		}

		var scale = L.getDpiScaleFactor();
		var rowOutlineWidth = this._cornerCanvas.width / scale - L.Control.Header.rowHeaderWidth - this._borderWidth;
		if (pos.x <= rowOutlineWidth) {
			// empty rectangle on the left select all
			this._map.sendUnoCommand('.uno:SelectAll');
			return;
		}

		var level = this._getGroupLevel(pos.y);
		this._updateOutlineState(/*is column: */ true, {column: true, level: level, index: -1});
	},

	_onDialogResult: function (e) {
		if (e.type === 'submit' && !isNaN(e.value)) {
			var extra = {
				aExtraWidth: {
					type: 'unsigned short',
					value: e.value
				}
			};

			this._map.sendUnoCommand('.uno:SetOptimalColumnWidth', extra);
		}

		this._map.enable(true);
	},

	_getVertLatLng: function (start, offset, e) {
		var limit = this._map.mouseEventToContainerPoint({clientX: start.x, clientY: start.y});
		var drag = this._map.mouseEventToContainerPoint(e);
		return [
			this._map.containerPointToLatLng(new L.Point(Math.max(limit.x, drag.x + offset.x), 0)),
			this._map.containerPointToLatLng(new L.Point(Math.max(limit.x, drag.x + offset.x), this._map.getSize().y))
		];
	},

	onDragStart: function (item, start, offset, e) {
		if (!this._vertLine) {
			this._vertLine = L.polyline(this._getVertLatLng(start, offset, e), {color: 'darkblue', weight: 1});
		}
		else {
			this._vertLine.setLatLngs(this._getVertLatLng(start, offset, e));
		}

		this._map.addLayer(this._vertLine);
	},

	onDragMove: function (item, start, offset, e) {
		if (this._vertLine) {
			this._vertLine.setLatLngs(this._getVertLatLng(start, offset, e));
		}
	},

	onDragEnd: function (item, start, offset, e) {
		var end = new L.Point(e.clientX + offset.x, e.clientY);
		var distance = this._map._docLayer._pixelsToTwips(end.subtract(start));

		var clickedColumn = this._mouseOverEntry;
		if (clickedColumn) {
			var width = clickedColumn.size;
			var column = clickedColumn.index + this._startHeaderIndex;

			if (this._data.isZeroSize(clickedColumn.index + 1)) {
				column += 1;
				width = 0;
			}

			if (width !== distance.x) {
				var command = {
					ColumnWidth: {
						type: 'unsigned short',
						value: this._map._docLayer.twipsToHMM(Math.max(distance.x, 0))
					},
					Column: {
						type: 'unsigned short',
						value: column
					}
				};

				this._map.sendUnoCommand('.uno:ColumnWidth', command);
				this._updateColumnHeader();
			}
		}

		this._map.removeLayer(this._vertLine);
	},

	onDragClick: function (item, clicks/*, e*/) {
		this._map.removeLayer(this._vertLine);

		if (!this._mouseOverEntry)
			return;

		if (clicks === 2) {
			var column = this._mouseOverEntry.index + this._startHeaderIndex;
			var command = {
				Col: {
					type: 'unsigned short',
					value: column - 1
				},
				Modifier: {
					type: 'unsigned short',
					value: 0
				}
			};

			this._map.sendUnoCommand('.uno:SelectColumn ', command);
			this._map.sendUnoCommand('.uno:SetOptimalColumnWidthDirect');
		}
	},

	_onUpdatePermission: function (e) {
		if (this._map.getDocType() !== 'spreadsheet') {
			return;
		}

		if (!this._initialized) {
			this._initialize();
		}
		if ($('.spreadsheet-header-columns').length > 0) {
			$('.spreadsheet-header-columns').contextMenu(e.perm === 'edit');
		}
	},

	_getParallelPos: function (point) {
		return point.x;
	},

	_getOrthogonalPos: function (point) {
		return point.y;
	},

	resize: function (height) {
		if (height < this._headerHeight)
			return;

		var rowHeader = L.DomUtil.get('spreadsheet-header-rows-container');
		var document = L.DomUtil.get('document-container');

		this._setCornerCanvasHeight(height);
		var deltaTop = height - this._canvasHeight;
		var rowHdrTop = parseInt(L.DomUtil.getStyle(rowHeader, 'top')) + deltaTop;
		var docTop = parseInt(L.DomUtil.getStyle(document, 'top')) + deltaTop;
		L.DomUtil.setStyle(rowHeader, 'top', rowHdrTop + 'px');
		L.DomUtil.setStyle(document, 'top', docTop + 'px');

		this._setCanvasHeight(height);

		this._map.fire('updatecornerheader');
	}

});

L.control.columnHeader = function (options) {
	return new L.Control.ColumnHeader(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.MobileInput.
 */
L.Control.MobileInput = L.Control.extend({
	options: {
		position: 'topleft'
	},

	initialize: function (options) {
		L.setOptions(this, options);
		this._cursorHandler = L.marker(new L.LatLng(0, 0), {
			icon: L.divIcon({
				className: 'leaflet-cursor-handler',
				iconSize: null
			}),
			draggable: true
		});

		this._cursorHandler.on('dragend', this.onDragEnd, this);
		this._currentKeysDown = {};
		this._ignoreKeypress = false;
		this._isMobileSafariOriOSApp = window.ThisIsTheiOSApp || navigator.platform === 'iPad' || navigator.platform === 'iPhone';

		// The value of _keyHandled after a complete input sequence of a plain character,
		// before the next character input, is true, so surely it should then be true from
		// the start, before the first character input?
		this._keyHandled = true;
	},

	onAdd: function () {
		this._initLayout();
		return this._container;
	},

	onDragEnd: function () {
		var mousePos = this._map._docLayer._latLngToTwips(this._cursorHandler.getLatLng());
		this._map._docLayer._postMouseEvent('buttondown', mousePos.x, mousePos.y, 1, 1, 0);
		this._map._docLayer._postMouseEvent('buttonup', mousePos.x, mousePos.y, 1, 1, 0);
	},

	onGotFocus: function () {
		if (this._map._docLayer && this._map._docLayer._cursorMarker) {
			this._cursorHandler.setLatLng(this._map._docLayer._visibleCursor.getSouthWest());
			this._map.addLayer(this._map._docLayer._cursorMarker);
			if (this._map._docLayer._selections.getLayers().length === 0) {
				this._map.addLayer(this._cursorHandler);
			} else {
				this._map.removeLayer(this._cursorHandler);
			}
		}
	},

	onLostFocus: function () {
		if (this._map._docLayer && this._map._docLayer._cursorMarker) {
			this._textArea.value = '';
			this._map.removeLayer(this._map._docLayer._cursorMarker);
			this._map.removeLayer(this._cursorHandler);
		}
	},

	focus: function(focus) {
		if (this._map._permission !== 'edit') {
			return;
		}

		this._textArea.blur();
		if (focus !== false) {
			this._textArea.focus();
		}
	},

	select: function() {
		this._textArea.select();
	},

	getValue: function() {
		return this._textArea.value;
	},

	setValue: function(val) {
		this._textArea.value = val;
	},

	activeElement: function () {
		return this._textArea;
	},

	showCursor: function () {
		if (this._textArea === document.activeElement) {
			this.onGotFocus();
		}
	},

	hideCursor: function () {
		this.onLostFocus();
	},

	_initLayout: function () {
		var constOff = 'off',
		stopEvents = 'touchstart touchmove touchend mousedown mousemove mouseout mouseover mouseup mousewheel click scroll',
		container = this._container = L.DomUtil.create('div', 'loleaflet-mobile-container');

		this._textArea = L.DomUtil.create('input', 'loleaflet-mobile-input', container);
		this._textArea.setAttribute('type', 'text');
		this._textArea.setAttribute('autocorrect', constOff);
		this._textArea.setAttribute('autocapitalize', constOff);
		this._textArea.setAttribute('autocomplete', constOff);
		this._textArea.setAttribute('spellcheck', 'false');
		L.DomEvent.on(this._textArea, stopEvents, L.DomEvent.stopPropagation)
			.on(this._textArea, 'keydown keypress keyup', this.onKeyEvents, this)
			.on(this._textArea, 'textInput', this.onTextInput, this)
			.on(this._textArea, 'paste', this.onPaste, this)
			.on(this._textArea, 'focus', this.onGotFocus, this)
			.on(this._textArea, 'blur', this.onLostFocus, this);
		if (!this._isMobileSafariOriOSApp)
			L.DomEvent.on(this._textArea, 'compositionstart compositionupdate compositionend', this.onCompEvents, this)
				.on(this._textArea, 'input', this.onInput, this);
	},

	_getSurrogatePair: function(codePoint) {
		var highSurrogate = Math.floor((codePoint - 0x10000) / 0x400) + 0xD800;
		var lowSurrogate = (codePoint - 0x10000) % 0x400 + 0xDC00;
		return [highSurrogate, lowSurrogate];
	},

	onKeyEvents: function (e) {
		var keyCode = e.keyCode,
		    charCode = e.charCode,
		    handler = this._map.keyboard,
		    docLayer = this._map._docLayer,
		    unoKeyCode = handler._toUNOKeyCode(keyCode);

		this._keyHandled = this._keyHandled || false;
		// console.log('==> onKeyEvents: ' + e.type + ':' + e.key + ' keyCode=' + keyCode + ' charCode=' + charCode + ' unoKeyCode=' + unoKeyCode + ' _keyHandled=' + this._keyHandled + ' _isComposing=' + this._isComposing)
		if (this._isComposing) {
			if (keyCode === 229 && charCode === 0) {
				return;
			}
			// stop the composing - so that we handle eg. Enter even during
			// composition
			this._isComposing = false;
			this._lastInput = null;
			this._textArea.value = '';
		}

		docLayer._resetPreFetching();
		if (handler._ignoreKeyEvent({originalEvent: e})) {
			this._lastInput = null;
			// key ignored
		}
		else if (e.type === 'keydown') {
			if (this._isMobileSafariOriOSApp) {
				if (!this._currentKeysDown[e.key])
					this._currentKeysDown[e.key] = 1;
				else
					this._currentKeysDown[e.key]++;
				if (this._currentKeysDown[e.key] > 1)
					this._ignoreKeypress = true;
			}
			this._keyHandled = false;
			// console.log('    _keyHandled := false');
			if (handler.handleOnKeyDownKeys[keyCode] && charCode === 0) {
				docLayer._postKeyboardEvent('input', charCode, unoKeyCode);
				this._lastInput = unoKeyCode;
			}
		}
		else if (this._isMobileSafariOriOSApp &&
			 e.type === 'keypress') {
			if (!this._ignoreKeypress) {
				// e.key can be longer than one, for instance if you press a dead diacritic
				// key followed by a letter that it can't combine with, like ¨ t => '¨t'.
				// But e.key is longer than one also in the case of control keys where for
				// instance e.key == 'Enter'. Detect the latter by comparing e.key against
				// e.code.
				if (e.key !== e.code) {
					var i;
					for (i = 0; i < e.key.length; ++i) {
						docLayer._postKeyboardEvent('input', e.key[i].charCodeAt(), 0);
						docLayer._postKeyboardEvent('up', e.key[i].charCodeAt(), 0);
					}
				}
				else {
					docLayer._postKeyboardEvent('input', charCode, unoKeyCode);
					docLayer._postKeyboardEvent('up', charCode, unoKeyCode);
				}
			}
		}
		else if ((e.type === 'keypress') && (!handler.handleOnKeyDownKeys[keyCode] || charCode !== 0)) {
			if (charCode === keyCode && charCode !== 13) {
				// Chrome sets keyCode = charCode for printable keys
				// while LO requires it to be 0
				keyCode = 0;
				unoKeyCode = handler._toUNOKeyCode(keyCode);
			}

			if (charCode > 0xFFFF) {
				// We must handle non-BMP code points as two separate keys
				// because the sad VCL KeyEvent only takes a 16-bit "character".
				var surrogatePair = this._getSurrogatePair(charCode);
				docLayer._postKeyboardEvent('input', surrogatePair[0], unoKeyCode);
				docLayer._postKeyboardEvent('up', surrogatePair[0], unoKeyCode);
				docLayer._postKeyboardEvent('input', surrogatePair[1], unoKeyCode);
				docLayer._postKeyboardEvent('up', surrogatePair[1], unoKeyCode);
			}
			else {
				docLayer._postKeyboardEvent('input', charCode, unoKeyCode);
			}
			this._lastInput = unoKeyCode;
			this._keyHandled = true;
			// console.log('    _keyHandled := true');
		}
		else if (e.type === 'keyup') {
			if (this._isMobileSafariOriOSApp) {
				// Yes, forget all keys that are pressed at the same time as soon as one
				// of them goes up. This seems to match what events the system sends.
				this._currentKeysDown = {};
			}
			else if (!this._ignoreKeypress && charCode <= 0xFFFF) {
				// For non-BMP characters we generated both 'input' and 'up' events
				// above already.
				docLayer._postKeyboardEvent('up', charCode, unoKeyCode);
			}
			this._ignoreKeypress = false;
			this._lastInput = null;
			this._keyHandled = true;
			// console.log('    _keyHandled := true');
		}
		L.DomEvent.stopPropagation(e);
	},

	onCompEvents: function (e) {
		// console.log('==> onCompEvents: ' + e.type);
		var map = this._map;

		if (e.type === 'compositionstart' || e.type === 'compositionupdate') {
			this._isComposing = true; // we are starting composing with IME
			this._composingData = e.data; // cache what we have composed so far
		}

		if (e.type === 'compositionend') {
			this._isComposing = false; // stop of composing with IME
			map._docLayer._postCompositionEvent(0, 'end', '');
		}

		L.DomEvent.stopPropagation(e);
	},

	onTextInput: function (e) {
		// console.log('==> onTextInput: "' + e.data + '" _keyHandled=' + this._keyHandled);
		if (!this._keyHandled) {
			this._textData = e.data;
			this._textArea.value = '';
		}

		L.DomEvent.stopPropagation(e);
	},

	onPaste: function (e) {
		var i;
		for (i = 0; i < e.clipboardData.items.length; ++i) {
			if (e.clipboardData.items[i].kind === 'string' && e.clipboardData.items[i].type === 'text/plain') {
				var map = this._map;
				e.clipboardData.items[i].getAsString(function (s) {
					var k;
					for (k = 0; k < s.length; ++k) {
						map._docLayer._postKeyboardEvent('input', s[k].charCodeAt(), 0);
						map._docLayer._postKeyboardEvent('up', s[k].charCodeAt(), 0);
					}
				});
				break;
			}
		}
	},

	onInput: function (e) {
		// console.log('==> onInput: inputType=' + e.inputType);
		var backSpace = this._map.keyboard._toUNOKeyCode(8);
		var i;

		// deferred processing of composition text or normal text; we can get
		// both in some cases, and based on the input event we need to decide
		// which one we actually need to use
		if (e.inputType === 'insertText') {
			if (this._textData) {
				for (i = 0; i < this._textData.length; ++i) {
					this._map._docLayer._postKeyboardEvent('input', this._textData[i].charCodeAt(), 0);
				}
			}
		}
		else if (e.inputType === 'insertCompositionText') {
			if (this._composingData) {
				this._map._docLayer._postCompositionEvent(0, 'input', this._composingData);
			}
		}
		else if (e.inputType === 'deleteContentBackward' && this._lastInput !== backSpace) {
			// this means we need to delete the entire interim composition;
			// let's issue backspace that many times
			if (this._composingData) {
				for (i = 0; i < this._composingData.length; ++i) {
					this._map._docLayer._postKeyboardEvent('input', 0, backSpace);
				}
			}
		}

		L.DomEvent.stopPropagation(e);
	}
});

L.control.mobileInput = function (options) {
	return new L.Control.MobileInput(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.ContextToolbar.
 */
/* global _UNO */

L.Control.ContextToolbar = L.Control.extend({
	options: {
		position: 'topleft',
		item: ''
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	onAdd: function () {
		if (!this._container) {
			this._initLayout();
		}
		if (this.options.item === 'paste') {
			this._paste.style.display = '';
			this._cut.style.display = 'none';
			this._copy.style.display = 'none';
		}

		this._container.style.visibility = 'hidden';
		return this._container;
	},

	onRemove: function () {
		this._paste.style.display = '';
		this._cut.style.display = '';
		this._copy.style.display = '';
		this.options.item = '';
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'loleaflet-context-toolbar');

		var tagTd = 'td',
		    onUp = 'mouseup',
		    onDown = 'mousedown',
		    stopEvents = 'touchstart touchmove touchend mousedown mousemove mouseout mouseover mouseup mousewheel click scroll',
		    container;

		if (window.ThisIsTheiOSApp)
			container = L.DomUtil.create('table', 'loleaflet-ios-context-table', this._container);
		else
			container = L.DomUtil.create('table', 'loleaflet-context-table', this._container);

		var tbody = L.DomUtil.create('tbody', '', container),
		    tr = L.DomUtil.create('tr', '', tbody);

		if (window.ThisIsTheiOSApp) {
			this._leftroundedend = L.DomUtil.create(tagTd, 'loleaflet-ios-context-button loleaflet-ios-context-left', tr);
			this._cut = L.DomUtil.create(tagTd, 'loleaflet-ios-context-button loleaflet-ios-context-first-and-middle-entry loleaflet-ios-context-cut', tr);
			this._cut.innerHTML = _UNO('.uno:Cut');
			this._copy = L.DomUtil.create(tagTd, 'loleaflet-ios-context-button loleaflet-ios-context-first-and-middle-entry loleaflet-ios-context-copy', tr);
			this._copy.innerHTML = _UNO('.uno:Copy');
			this._paste = L.DomUtil.create(tagTd, 'loleaflet-ios-context-button loleaflet-ios-context-last-entry loleaflet-ios-context-paste', tr);
			this._paste.innerHTML = _UNO('.uno:Paste');
			this._rightroundedend = L.DomUtil.create(tagTd, 'loleaflet-ios-context-button loleaflet-ios-context-right', tr);
		}
		else {
			this._cut = L.DomUtil.create(tagTd, 'loleaflet-context-button loleaflet-context-cut', tr);
			this._copy = L.DomUtil.create(tagTd, 'loleaflet-context-button loleaflet-context-copy', tr);
			this._paste = L.DomUtil.create(tagTd, 'loleaflet-context-button loleaflet-context-paste', tr);
		}
		L.DomEvent.on(this._cut, stopEvents,  L.DomEvent.stopPropagation)
			.on(this._cut, onDown, this.onMouseDown, this)
			.on(this._cut, onUp, this.onMouseUp, this);
		L.DomEvent.on(this._copy, stopEvents,  L.DomEvent.stopPropagation)
			.on(this._copy, onDown, this.onMouseDown, this)
			.on(this._copy, onUp, this.onMouseUp, this);
		L.DomEvent.on(this._paste, stopEvents,  L.DomEvent.stopPropagation)
			.on(this._paste, onDown, this.onMouseDown, this)
			.on(this._paste, onUp, this.onMouseUp, this);
	},

	onAdded: function () {
		if (this._pos) {
			var maxBounds = this._map.getPixelBounds();
			var size = L.point(this._container.clientWidth,this._container.clientHeight);
			this._pos._add(L.point(-size.x / 2, -size.y));
			var bounds = new L.Bounds(this._pos, this._pos.add(size));
			if (!maxBounds.contains(bounds)) {
				var offset = L.point(0, 0);
				if (bounds.max.x > maxBounds.max.x) {
					offset.x = size.x;
				}

				if (bounds.max.y > maxBounds.max.y) {
					offset.y = size.y;
				}
				this._pos._subtract(offset);
			}
			L.DomUtil.setPosition(this._container, this._pos);
		}
		this._container.style.visibility = '';
	},

	onMouseDown: function (e) {
		L.DomUtil.addClass(e.target || e.srcElement, 'loleaflet-context-down');
		L.DomEvent.preventDefault(e);
		L.DomEvent.stopPropagation(e);
	},

	onMouseUp: function (e) {
		var target = e.target || e.srcElement;

		if (L.DomUtil.hasClass(target, 'loleaflet-context-cut') ||
		   L.DomUtil.hasClass(target, 'loleaflet-ios-context-cut')) {
			this._map._socket.sendMessage('uno .uno:Cut');
		}
		else if (L.DomUtil.hasClass(target, 'loleaflet-context-copy') ||
			L.DomUtil.hasClass(target, 'loleaflet-ios-context-copy')) {
			this._map._socket.sendMessage('uno .uno:Copy');
		}
		else if (L.DomUtil.hasClass(target, 'loleaflet-context-paste') ||
			L.DomUtil.hasClass(target, 'loleaflet-ios-context-paste')) {
			this._map._socket.sendMessage('uno .uno:Paste');
		}

		L.DomEvent.preventDefault(e);
		L.DomEvent.stopPropagation(e);
		setTimeout(L.bind(this.onClick, this, target), 0);
	},

	onClick: function (e) {
		L.DomUtil.removeClass(e, 'loleaflet-context-down');
		this.remove();
	}
});

L.control.contextToolbar = function (options) {
	return new L.Control.ContextToolbar(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.RowHeader
*/

/* global $ _UNO */
L.Control.RowHeader = L.Control.Header.extend({
	options: {
		cursor: 'row-resize'
	},

	onAdd: function (map) {
		map.on('updatepermission', this._onUpdatePermission, this);
		this._initialized = false;
	},

	_initialize: function () {
		this._initialized = true;
		this._isColumn = false;
		this._map.on('scrolloffset', this.offsetScrollPosition, this);
		this._map.on('updatescrolloffset', this.setScrollPosition, this);
		this._map.on('viewrowcolumnheaders', this.viewRowColumnHeaders, this);
		this._map.on('updateselectionheader', this._onUpdateSelection, this);
		this._map.on('clearselectionheader', this._onClearSelection, this);
		this._map.on('updatecurrentheader', this._onUpdateCurrentRow, this);
		this._map.on('updatecornerheader', this.drawCornerHeader, this);
		this._map.on('cornerheaderclicked', this._onCornerHeaderClick, this);
		var rowColumnFrame = L.DomUtil.get('spreadsheet-row-column-frame');
		this._headerContainer = L.DomUtil.createWithId('div', 'spreadsheet-header-rows-container', rowColumnFrame);

		this._initHeaderEntryStyles('spreadsheet-header-row');
		this._initHeaderEntryHoverStyles('spreadsheet-header-row-hover');
		this._initHeaderEntrySelectedStyles('spreadsheet-header-row-selected');
		this._initHeaderEntryResizeStyles('spreadsheet-header-row-resize');

		this._canvas = L.DomUtil.create('canvas', 'spreadsheet-header-rows', this._headerContainer);
		this._canvasContext = this._canvas.getContext('2d');
		this._setCanvasWidth();
		this._setCanvasHeight();

		var scale = L.getDpiScaleFactor();
		this._canvasContext.scale(scale, scale);
		this._headerWidth = this._canvasWidth;
		L.Control.Header.rowHeaderWidth = this._canvasWidth;

		L.DomUtil.setStyle(this._canvas, 'cursor', this._cursor);

		L.DomEvent.on(this._canvas, 'mousemove', this._onMouseMove, this);
		L.DomEvent.on(this._canvas, 'mouseout', this._onMouseOut, this);
		L.DomEvent.on(this._canvas, 'click', this._onClick, this);
		L.DomEvent.on(this._canvas, 'dblclick', this._onDoubleClick, this);
		L.DomEvent.on(this._canvas, 'touchstart',
			function (e) {
				if (e && e.touches.length > 1) {
					L.DomEvent.preventDefault(e);
				}
			},
			this);

		this._startHeaderIndex = 0;
		this._startOffset = 0;
		this._position = 0;

		var rowHeaderObj = this;
		$.contextMenu({
			selector: '.spreadsheet-header-rows',
			className: 'loleaflet-font',
			items: {
				'insertrowabove': {
					name: _UNO('.uno:InsertRowsBefore', 'spreadsheet', true),
					callback: function() {
						var index = rowHeaderObj._lastMouseOverIndex;
						if (index) {
							rowHeaderObj.insertRow.call(rowHeaderObj, index);
						}
					}
				},
				'deleteselectedrow': {
					name: _UNO('.uno:DeleteRows', 'spreadsheet', true),
					callback: function() {
						var index = rowHeaderObj._lastMouseOverIndex;
						if (index) {
							rowHeaderObj.deleteRow.call(rowHeaderObj, index);
						}
					}
				},
				'optimalheight': {
					name: _UNO('.uno:SetOptimalRowHeight', 'spreadsheet', true),
					callback: function() {
						var index = rowHeaderObj._lastMouseOverIndex;
						if (index) {
							rowHeaderObj.optimalHeight.call(rowHeaderObj, index);
						}
					}
				},
				'hideRow': {
					name: _UNO('.uno:HideRow', 'spreadsheet', true),
					callback: function() {
						var index = rowHeaderObj._lastMouseOverIndex;
						if (index) {
							rowHeaderObj.hideRow.call(rowHeaderObj, index);
						}
					}
				},
				'showRow': {
					name: _UNO('.uno:ShowRow', 'spreadsheet', true),
					callback: function() {
						var index = rowHeaderObj._lastMouseOverIndex;
						if (index) {
							rowHeaderObj.showRow.call(rowHeaderObj, index);
						}
					}
				}
			},
			zIndex: 10
		});
	},

	optimalHeight: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectRow(index, 0);
		}
		this._map.sendUnoCommand('.uno:SetOptimalRowHeight');
	},

	insertRow: function(index) {
		// First select the corresponding row because
		// .uno:InsertRows doesn't accept any row number
		// as argument and just inserts before the selected row
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectRow(index, 0);
		}
		this._map.sendUnoCommand('.uno:InsertRows');
	},

	deleteRow: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectRow(index, 0);
		}
		this._map.sendUnoCommand('.uno:DeleteRows');
	},

	hideRow: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectRow(index, 0);
		}
		this._map.sendUnoCommand('.uno:HideRow');
	},

	showRow: function(index) {
		if (this._map._docLayer._selections.getLayers().length === 0) {
			this._selectRow(index, 0);
		}
		this._map.sendUnoCommand('.uno:ShowRow');
	},

	setScrollPosition: function (e) {
		var position = -e.y;
		this._position = Math.min(0, position);
	},

	offsetScrollPosition: function (e) {
		var offset = e.y;
		this._position = Math.min(0, this._position - offset);
	},

	_onClearSelection: function () {
		this.clearSelection(this._data);
	},

	_onUpdateSelection: function (e) {
		var start = e.start.y;
		var end = e.end.y;
		if (start !== -1) {
			start = this._twipsToPixels(start);
		}
		if (end !== -1) {
			end = this._twipsToPixels(end);
		}
		this.updateSelection(this._data, start, end);
	},

	_onUpdateCurrentRow: function (e) {
		var y = e.curY - this._startHeaderIndex;
		var h = this._twipsToPixels(e.height);
		var slim = h <= 1;
		this.updateCurrent(this._data, y, slim);
	},

	_updateRowHeader: function () {
		this._map.fire('updaterowcolumnheaders', {x: 0, y: this._map._getTopLeftPoint().y, offset: {x: 0, y: undefined}});
	},

	drawHeaderEntry: function (entry, isOver, isHighlighted) {
		if (!entry)
			return;

		var ctx = this._canvasContext;
		var content = entry.index + this._startHeaderIndex;
		var startOrt = this._canvasWidth - this._headerWidth;
		var startPar = entry.pos - entry.size - this._startOffset;
		var endPar = entry.pos - this._startOffset;
		var height = endPar - startPar;
		var width = this._headerWidth;

		if (isHighlighted !== true && isHighlighted !== false) {
			isHighlighted = this.isHighlighted(entry.index);
		}

		if (height <= 0)
			return;

		ctx.save();
		var scale = L.getDpiScaleFactor();
		ctx.scale(scale, scale);
		ctx.translate(0, this._position + this._startOffset);
		// background gradient
		var selectionBackgroundGradient = null;
		if (isHighlighted) {
			selectionBackgroundGradient = ctx.createLinearGradient(0, startPar, 0, startPar + height);
			selectionBackgroundGradient.addColorStop(0, this._selectionBackgroundGradient[0]);
			selectionBackgroundGradient.addColorStop(0.5, this._selectionBackgroundGradient[1]);
			selectionBackgroundGradient.addColorStop(1, this._selectionBackgroundGradient[2]);
		}

		// draw header/outline border separator
		if (this._headerWidth !== this._canvasWidth) {
			ctx.fillStyle = this._borderColor;
			ctx.fillRect(startOrt - this._borderWidth, startPar, this._borderWidth, height);
		}

		// clip mask
		ctx.beginPath();
		ctx.rect(startOrt, startPar, width, height);
		ctx.clip();
		// draw background
		ctx.fillStyle = isHighlighted ? selectionBackgroundGradient : isOver ? this._hoverColor : this._backgroundColor;
		ctx.fillRect(startOrt, startPar, width, height);
		// draw text content
		ctx.fillStyle = isHighlighted ? this._selectionTextColor : this._textColor;
		ctx.font = this._font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(content, startOrt + (width / 2), endPar - (height / 2));
		// draw row separator
		ctx.fillStyle = this._borderColor;
		ctx.fillRect(startOrt, endPar - 1, width , this._borderWidth);
		ctx.restore();
	},

	drawGroupControl: function (group) {
		if (!group)
			return;

		var ctx = this._canvasContext;
		var headSize = this._groupHeadSize;
		var spacing = this._levelSpacing;
		var level = group.level;

		var startOrt = spacing + (headSize + spacing) * level;
		var startPar = group.startPos - this._startOffset;
		var height = group.endPos - group.startPos;

		ctx.save();
		var scale = L.getDpiScaleFactor();
		ctx.scale(scale, scale);

		ctx.translate(0, this._position + this._startOffset);
		// clip mask
		ctx.beginPath();
		ctx.rect(startOrt, startPar, headSize, height);
		ctx.clip();
		if (!group.hidden) {
			//draw tail
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(startOrt + 2, startPar + headSize);
			ctx.lineTo(startOrt + 2, startPar + height - 1);
			ctx.lineTo(startOrt + 2 + headSize / 2, startPar + height - 1);
			ctx.stroke();
			// draw head
			ctx.fillStyle = this._hoverColor;
			ctx.fillRect(startOrt, startPar, headSize, headSize);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 0.5;
			ctx.strokeRect(startOrt, startPar, headSize, headSize);
			// draw '-'
			ctx.lineWidth = 1;
			ctx.strokeRect(startOrt + headSize / 4, startPar + headSize / 2, headSize / 2, 1);
		}
		else {
			// draw head
			ctx.fillStyle = this._hoverColor;
			ctx.fillRect(startOrt, startPar, headSize, headSize);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 0.5;
			ctx.strokeRect(startOrt, startPar, headSize, headSize);
			// draw '+'
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(startOrt + headSize / 4, startPar + headSize / 2);
			ctx.lineTo(startOrt + 3 * headSize / 4, startPar + headSize / 2);
			ctx.moveTo(startOrt + headSize / 2, startPar + headSize / 4);
			ctx.lineTo(startOrt + headSize / 2, startPar + 3 * headSize / 4);
			ctx.stroke();
		}
		ctx.restore();
	},

	drawLevelHeader: function(level) {
		var ctx = this._cornerCanvasContext;
		var ctrlHeadSize = this._groupHeadSize;
		var levelSpacing = this._levelSpacing;
		var scale = L.getDpiScaleFactor();

		var startOrt = levelSpacing + (ctrlHeadSize + levelSpacing) * level;
		var startPar = this._cornerCanvas.height / scale - (ctrlHeadSize + (L.Control.Header.colHeaderHeight - ctrlHeadSize) / 2);

		ctx.save();
		ctx.scale(scale, scale);
		ctx.fillStyle = this._hoverColor;
		ctx.fillRect(startOrt, startPar, ctrlHeadSize, ctrlHeadSize);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 0.5;
		ctx.strokeRect(startOrt, startPar, ctrlHeadSize, ctrlHeadSize);
		// draw level number
		ctx.fillStyle = this._textColor;
		ctx.font = this._font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(level + 1, startOrt + (ctrlHeadSize / 2), startPar + (ctrlHeadSize / 2));
		ctx.restore();
	},

	getHeaderEntryBoundingClientRect: function (index) {
		var entry = this._mouseOverEntry;
		if (index)
			entry = this._data.get(index);

		if (!entry)
			return;

		var rect = this._canvas.getBoundingClientRect();

		var rowStart = entry.pos - entry.size + this._position;
		var rowEnd = entry.pos + this._position;

		var left = rect.left;
		var right = rect.right;
		var top = rect.top + rowStart;
		var bottom = rect.top + rowEnd;
		return {left: left, right: right, top: top, bottom: bottom};
	},

	viewRowColumnHeaders: function (e) {
		if (e.data.rows && e.data.rows.length) {
			this.fillRows(e.data.rows, e.data.rowGroups, e.converter, e.context);
		}
	},

	fillRows: function (rows, rowGroups, converter, context) {
		if (rows.length < 2)
			return;

		var headerEntry, index, iterator, height, pos;

		var canvas = this._canvas;
		this._setCanvasWidth();
		this._setCanvasHeight();
		this._canvasContext.clearRect(0, 0, canvas.width, canvas.height);

		// update first header index and reset no more valid variables
		this._startHeaderIndex = parseInt(rows[0].text);
		this._current = -1;
		this._selection.start = this._selection.end = -1;
		this._mouseOverEntry = null;
		this._lastMouseOverIndex = undefined;

		// create header data handler instance
		this._data = new L.Control.Header.DataImpl();

		// setup conversion routine
		this.converter = L.Util.bind(converter, context);
		this._data.converter = L.Util.bind(this._twipsToPixels, this);

		// create group array
		this._groupLevels = parseInt(rows[0].groupLevels);
		this._groups = this._groupLevels ? new Array(this._groupLevels) : null;

		var startOffsetTw = parseInt(rows[0].size);
		this._startOffset = this._twipsToPixels(startOffsetTw);

		this._data.pushBack(0, {pos: startOffsetTw, size: 0});
		var prevPos = startOffsetTw;
		var nextIndex = parseInt(rows[1].text);
		var last = rows.length - 1;

		for (iterator = 1; iterator < last; iterator++) {
			index = nextIndex;
			pos = parseInt(rows[iterator].size);
			nextIndex = parseInt(rows[iterator+1].text);
			height = pos - prevPos;
			prevPos = Math.round(pos + height * (nextIndex - index - 1));
			index = index - this._startHeaderIndex;
			headerEntry = {pos: pos, size: height};
			this._data.pushBack(index, headerEntry);
		}

		// setup last header entry
		index = nextIndex - this._startHeaderIndex;
		pos = parseInt(rows[last].size);
		height = pos - prevPos;
		this._data.pushBack(index, {pos: pos, size: height});

		// collect group controls data
		if (rowGroups !== undefined && this._groups) {
			this._collectGroupsData(rowGroups);
		}

		if (this._groups) {
			this.resize(this._computeOutlineWidth() + this._borderWidth + this._headerWidth);
		}
		else if (this._canvasWidth !== this._headerWidth) {
			this.resize(this._headerWidth);
		}

		// draw header
		headerEntry = this._data.getFirst();
		while (headerEntry) {
			this.drawHeaderEntry(headerEntry, false);
			headerEntry = this._data.getNext();
		}

		// draw group controls
		this.drawOutline();

		this.mouseInit(canvas);

		L.DomEvent.on(canvas, 'contextmenu', L.DomEvent.preventDefault);
		if ($('.spreadsheet-header-rows').length > 0) {
			$('.spreadsheet-header-rows').contextMenu(this._map._permission === 'edit');
		}
	},

	_selectRow: function(row, modifier) {
		var command = {
			Row: {
				type: 'long',
				value: row - 1
			},
			Modifier: {
				type: 'unsigned short',
				value: modifier
			}
		};

		this._map.sendUnoCommand('.uno:SelectRow ', command);
	},

	_onClick: function (e) {
		if (this._onOutlineMouseEvent(e, this._onGroupControlClick))
			return;

		if (!this._mouseOverEntry)
			return;

		var row = this._mouseOverEntry.index + this._startHeaderIndex;

		var modifier = 0;
		if (e.shiftKey) {
			modifier += this._map.keyboard.keyModifier.shift;
		}
		if (e.ctrlKey) {
			modifier += this._map.keyboard.keyModifier.ctrl;
		}

		this._selectRow(row, modifier);
	},

	_onCornerHeaderClick: function(e) {
		var pos = this._mouseEventToCanvasPos(this._cornerCanvas, e);

		if (pos.x > this.getOutlineWidth()) {
			// empty rectangle on the right select all
			this._map.sendUnoCommand('.uno:SelectAll');
			return;
		}

		var level = this._getGroupLevel(pos.x);
		this._updateOutlineState(/*is column: */ false, {column: false, level: level, index: -1});
	},

	_onDialogResult: function (e) {
		if (e.type === 'submit' && !isNaN(e.value)) {
			var extra = {
				aExtraHeight: {
					type: 'unsigned short',
					value: e.value
				}
			};

			this._map.sendUnoCommand('.uno:SetOptimalRowHeight', extra);
		}

		this._map.enable(true);
	},

	_getHorzLatLng: function (start, offset, e) {
		var limit = this._map.mouseEventToContainerPoint({clientX: start.x, clientY: start.y});
		var drag = this._map.mouseEventToContainerPoint(e);
		return [
			this._map.containerPointToLatLng(new L.Point(0, Math.max(limit.y, drag.y + offset.y))),
			this._map.containerPointToLatLng(new L.Point(this._map.getSize().x, Math.max(limit.y, drag.y + offset.y)))
		];
	},

	onDragStart: function (item, start, offset, e) {
		if (!this._horzLine) {
			this._horzLine = L.polyline(this._getHorzLatLng(start, offset, e), {color: 'darkblue', weight: 1});
		}
		else {
			this._horzLine.setLatLngs(this._getHorzLatLng(start, offset, e));
		}

		this._map.addLayer(this._horzLine);
	},

	onDragMove: function (item, start, offset, e) {
		if (this._horzLine) {
			this._horzLine.setLatLngs(this._getHorzLatLng(start, offset, e));
		}
	},

	onDragEnd: function (item, start, offset, e) {
		var end = new L.Point(e.clientX, e.clientY + offset.y);
		var distance = this._map._docLayer._pixelsToTwips(end.subtract(start));

		var clickedRow = this._mouseOverEntry;
		if (clickedRow) {
			var height = clickedRow.size;
			var row = clickedRow.index + this._startHeaderIndex;

			if (this._data.isZeroSize(clickedRow.index + 1)) {
				row += 1;
				height = 0;
			}

			if (height !== distance.y) {
				var command = {
					RowHeight: {
						type: 'unsigned short',
						value: this._map._docLayer.twipsToHMM(Math.max(distance.y, 0))
					},
					Row: {
						type: 'long',
						value: row
					}
				};

				this._map.sendUnoCommand('.uno:RowHeight', command);
			}
		}

		this._map.removeLayer(this._horzLine);
	},

	onDragClick: function (item, clicks/*, e*/) {
		this._map.removeLayer(this._horzLine);

		if (!this._mouseOverEntry)
			return;

		if (clicks === 2) {
			var row = this._mouseOverEntry.index + this._startHeaderIndex;
			var command = {
				Row: {
					type: 'long',
					value: row - 1
				},
				Modifier: {
					type: 'unsigned short',
					value: 0
				}
			};

			var extra = {
				aExtraHeight: {
					type: 'unsigned short',
					value: 0
				}
			};

			this._map.sendUnoCommand('.uno:SelectRow', command);
			this._map.sendUnoCommand('.uno:SetOptimalRowHeight', extra);
		}
	},

	_onUpdatePermission: function (e) {
		if (this._map.getDocType() !== 'spreadsheet') {
			return;
		}

		if (!this._initialized) {
			this._initialize();
		}
		// Enable context menu on row headers only if permission is 'edit'
		if ($('.spreadsheet-header-rows').length > 0) {
			$('.spreadsheet-header-rows').contextMenu(e.perm === 'edit');
		}
	},

	_getParallelPos: function (point) {
		return point.y;
	},

	_getOrthogonalPos: function (point) {
		return point.x;
	},

	resize: function (width) {
		if (width < this._headerWidth)
			return;

		var columnHeader = L.DomUtil.get('spreadsheet-header-columns-container');
		var document = L.DomUtil.get('document-container');

		this._setCornerCanvasWidth(width);

		var deltaLeft = width - this._canvasWidth;
		var colHdrLeft = parseInt(L.DomUtil.getStyle(columnHeader, 'left')) + deltaLeft;
		var docLeft = parseInt(L.DomUtil.getStyle(document, 'left')) + deltaLeft;
		L.DomUtil.setStyle(columnHeader, 'left', colHdrLeft + 'px');
		L.DomUtil.setStyle(document, 'left', docLeft + 'px');

		this._setCanvasWidth(width);

		this._map.fire('updatecornerheader');
	}
});

L.control.rowHeader = function (options) {
	return new L.Control.RowHeader(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.DocumentRepair.
 */
/* global _ _UNO */
L.Control.DocumentRepair = L.Control.extend({
	options: {
		position: 'topright'
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	onAdd: function () {
		this._initLayout();

		return this._container;
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'leaflet-control-layers');
		this._container.style.visibility = 'hidden';

		var closeButton = L.DomUtil.create('a', 'leaflet-popup-close-button', this._container);
		closeButton.href = '#close';
		closeButton.innerHTML = '&#215;';
		L.DomEvent.on(closeButton, 'click', this._onCloseClick, this);

		var wrapper = L.DomUtil.create('div', 'leaflet-popup-content-wrapper', this._container);
		var content = L.DomUtil.create('div', 'leaflet-popup-content', wrapper);
		var labelTitle = document.createElement('span');
		labelTitle.innerHTML = '<b>' + _('Repair Document') + '</b>';
		content.appendChild(labelTitle);
		content.appendChild(document.createElement('br'));
		content.appendChild(document.createElement('br'));
		var table = L.DomUtil.create('table', '', content);
		var tbody = this._tbody = L.DomUtil.create('tbody', '', table);
		var tr = L.DomUtil.create('tr', '', tbody);
		var th = L.DomUtil.create('th', '', tr);
		L.DomUtil.setStyle(th, 'display', 'none');
		th.appendChild(document.createTextNode(''));
		th = L.DomUtil.create('th', '', tr);
		th.appendChild(document.createTextNode(_('Type')));
		th = L.DomUtil.create('th', '', tr);
		th.appendChild(document.createTextNode(_('Index')));
		th = L.DomUtil.create('th', '', tr);
		th.appendChild(document.createTextNode(_('Comment')));
		th = L.DomUtil.create('th', '', tr);
		th.appendChild(document.createTextNode(_('User name')));
		th = L.DomUtil.create('th', '', tr);
		th.appendChild(document.createTextNode(_('Timestamp')));

		var inputButton = document.createElement('input');
		inputButton.type = 'button';
		inputButton.value = _('Jump to state');
		L.DomEvent.on(inputButton, 'click', this._onJumpClick, this);
		content.appendChild(document.createElement('br'));
		content.appendChild(document.createElement('br'));
		content.appendChild(inputButton);
	},

	createAction: function (type, index, comment, viewId, dateTime) {
		var row = L.DomUtil.create('tr', '', this._tbody);
		var td = L.DomUtil.create('td', '', row);
		L.DomUtil.setStyle(td, 'display', 'none');
		td.appendChild(document.createTextNode(type));
		td = L.DomUtil.create('td', '', row);
		td.appendChild(document.createTextNode(_UNO('.uno:'+type)));
		td = L.DomUtil.create('td', '', row);
		td.appendChild(document.createTextNode(index));
		td = L.DomUtil.create('td', '', row);
		td.appendChild(document.createTextNode(comment));
		td = L.DomUtil.create('td', '', row);
		td.appendChild(document.createTextNode(viewId));

		// Show relative date by default, absolute one as tooltip.
		td = L.DomUtil.create('td', '', row);
		var d = new Date(dateTime.replace(/,.*/, 'Z'));
		var dateOptions = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
		var span = document.createElement('span');
		span.title = dateTime;
		span.appendChild(document.createTextNode(d.toLocaleDateString(String.locale, dateOptions)));
		td.appendChild(span);

		L.DomEvent.on(row, 'click', this._onRowClick, this);
		L.DomEvent.on(row, 'dblclick', this._onJumpClick, this);
	},

	fillAction: function (actions, type) {
		for (var iterator = 0; iterator < actions.length; ++iterator) {
			// No user name if the user in question is already disconnected.
			var userName = actions[iterator].userName ? actions[iterator].userName : '';
			if (parseInt(actions[iterator].viewId) === this._map._docLayer._viewId) {
				userName = _('You');
			}
			this.createAction(type, actions[iterator].index, actions[iterator].comment, userName, actions[iterator].dateTime);
		}
	},

	fillActions: function (data) {
		this.fillAction(data.Redo.actions, 'Redo');
		this.fillAction(data.Undo.actions, 'Undo');
	},

	show: function () {
		this._tbody.setAttribute('style', 'max-height:' + this._map.getSize().y / 2 + 'px');
		this._container.style.visibility = '';
	},


	_selectRow: function (row) {
		if (this._selected) {
			L.DomUtil.removeClass(this._selected, 'leaflet-popup-selected');
		}

		this._selected = row;
		L.DomUtil.addClass(this._selected, 'leaflet-popup-selected');
	},

	_onCloseClick: function () {
		this._map.enable(true);
		this._map.focus();
		this.remove();
	},

	_onRowClick: function (e) {
		if (e.currentTarget && this._selected !== e.currentTarget) {
			this._selectRow(e.currentTarget);
		}
	},

	_onJumpClick: function () {
		if (this._selected) {
			var action = this._selected.childNodes[0].innerHTML;
			var index = parseInt(this._selected.childNodes[2].innerHTML);
			var command = {
				Repair: {
					type: 'boolean',
					value: true
				}
			};
			command[action] = {
				type: 'unsigned short',
				value: index + 1
			};
			this._map.sendUnoCommand('.uno:' + action, command);
			this._onCloseClick();
		}
	}
});

L.control.documentRepair = function (options) {
	return new L.Control.DocumentRepair(options);
};

/* -*- js-indent-level: 8 -*- */
/*
* Control.ContextMenu
*/

/* global $ _ _UNO */
L.Control.ContextMenu = L.Control.extend({
	options: {
		SEPARATOR: '---------',
		/*
		 * Enter UNO commands that should appear in the context menu.
		 * Entering a UNO command under `general' would enable it for all types
		 * of documents. If you do not want that, whitelist it in document specific filter.
		 *
		 * UNOCOMMANDS_EXTRACT_START <- don't remove this line, it's used by unocommands.py
		 */
		whitelist: {
			/*
			 * UNO commands for menus are not available sometimes. Presence of Menu commands
			 * in following list is just for reference and ease of locating uno command
			 * from context menu structure.
			 */
			general: ['NumberingStart', 'ContinueNumbering', 'IncrementLevel', 'DecrementLevel',
					  'OpenHyperlinkOnCursor', 'CopyHyperlinkLocation', 'RemoveHyperlink',
					  'AnchorMenu', 'SetAnchorToPage', 'SetAnchorToPara', 'SetAnchorAtChar',
					  'SetAnchorToChar', 'SetAnchorToFrame',
					  'WrapMenu', 'WrapOff', 'WrapOn', 'WrapIdeal', 'WrapLeft', 'WrapRight', 'WrapThrough',
					  'WrapThroughTransparent', 'WrapContour', 'WrapAnchorOnly',
					  'ArrangeFrameMenu', 'ArrangeMenu', 'BringToFront', 'ObjectForwardOne', 'ObjectBackOne', 'SendToBack',
					  'RotateMenu', 'RotateLeft', 'RotateRight'],

			text: ['TableInsertMenu',
				   'InsertRowsBefore', 'InsertRowsAfter', 'InsertColumnsBefore', 'InsertColumnsAfter',
				   'TableDeleteMenu',
				   'DeleteRows', 'DeleteColumns', 'DeleteTable',
				   'MergeCells', 'SetOptimalColumnWidth', 'SetOptimalRowHeight',
				   'UpdateCurIndex','RemoveTableOf',
				   'ReplyComment', 'DeleteComment', 'DeleteAuthor', 'DeleteAllNotes'],

			spreadsheet: ['MergeCells', 'SplitCell', 'RecalcPivotTable', 'FormatCellDialog'],

			presentation: ['TransformDialog', 'FormatLine', 'FormatArea'],
			drawing: []
		}
		// UNOCOMMANDS_EXTRACT_END <- don't remove this line, it's used by unocommands.py
	},



	onAdd: function (map) {
		this._prevMousePos = null;

		map.on('locontextmenu', this._onContextMenu, this);
		map.on('mousedown', this._onMouseDown, this);
		map.on('keydown', this._onKeyDown, this);
	},

	_onMouseDown: function(e) {
		this._prevMousePos = {x: e.originalEvent.pageX, y: e.originalEvent.pageY};

		$.contextMenu('destroy', '.leaflet-layer');
	},

	_onKeyDown: function(e) {
		if (e.originalEvent.keyCode === 27 /* ESC */) {
			$.contextMenu('destroy', '.leaflet-layer');
		}
	},

	_onContextMenu: function(obj) {
		var map = this._map;
		if (map._permission !== 'edit') {
			return;
		}

		var contextMenu = this._createContextMenuStructure(obj);
		$.contextMenu({
			selector: '.leaflet-layer',
			className: 'loleaflet-font',
			trigger: 'none',
			build: function() {
				return {
					callback: function(key) {
						map.sendUnoCommand(key);
						// Give the stolen focus back to map
						map.focus();
					},
					items: contextMenu
				};
			}
		});

		$('.leaflet-layer').contextMenu(this._prevMousePos);
	},

	_createContextMenuStructure: function(obj) {
		var docType = this._map.getDocType();
		var contextMenu = {};
		var sepIdx = 1, itemName;
		var isLastItemText = false;
		for (var idx in obj.menu) {
			var item = obj.menu[idx];
			if (item.enabled === 'false') {
				continue;
			}

			if (item.type === 'separator') {
				if (isLastItemText) {
					contextMenu['sep' + sepIdx++] = this.options.SEPARATOR;
				}
				isLastItemText = false;
			}
			else if (item.type === 'command') {
				// Only show whitelisted items
				// Command name (excluding '.uno:') starts from index = 5
				var commandName = item.command.substring(5);
				if (this.options.whitelist.general.indexOf(commandName) === -1 &&
					!(docType === 'text' && this.options.whitelist.text.indexOf(commandName) !== -1) &&
					!(docType === 'spreadsheet' && this.options.whitelist.spreadsheet.indexOf(commandName) !== -1) &&
					!(docType === 'presentation' && this.options.whitelist.presentation.indexOf(commandName) !== -1) &&
					!(docType === 'drawing' && this.options.whitelist.drawing.indexOf(commandName) !== -1)) {
					continue;
				}

				// Get the translated text associated with the command
				itemName = _UNO(item.command, docType, true);

				contextMenu[item.command] = {
					name: _(itemName)
				};

				if (item.checktype === 'checkmark') {
					if (item.checked === 'true') {
						contextMenu[item.command]['icon'] = 'lo-checkmark';
					}
				} else if (item.checktype === 'radio') {
					if (item.checked === 'true') {
						contextMenu[item.command]['icon'] = 'radio';
					}
				}

				isLastItemText = true;
			} else if (item.type === 'menu') {
				itemName = item.text;
				var submenu = this._createContextMenuStructure(item);
				// ignore submenus with all items disabled
				if (Object.keys(submenu).length === 0) {
					continue;
				}

				contextMenu[item.command] = {
					name: _(itemName).replace(/\(~[A-Za-z]\)/, '').replace('~', ''),
					items: submenu
				};
				isLastItemText = true;
			}
		}

		// Remove separator, if present, at the end
		var lastItem = Object.keys(contextMenu)[Object.keys(contextMenu).length - 1];
		if (lastItem !== undefined && lastItem.startsWith('sep')) {
			delete contextMenu[lastItem];
		}

		return contextMenu;
	}
});

L.control.contextMenu = function (options) {
	return new L.Control.ContextMenu(options);
};

/* -*- js-indent-level: 8 -*- */
/*
* Control.Menubar
*/

/* global $ _ _UNO vex revHistoryEnabled closebutton L */
L.Control.Menubar = L.Control.extend({
	// TODO: Some mechanism to stop the need to copy duplicate menus (eg. Help)
	options: {
		initial: [
			{name: _UNO('.uno:PickList')},
			{name: _UNO('.uno:EditMenu')},
			{name: _UNO('.uno:ViewMenu')},
			{name: _UNO('.uno:InsertMenu')},
			{name: _UNO('.uno:ToolsMenu')}
		],
		text:  [
			{name: _UNO('.uno:PickList', 'text'), id: 'file', type: 'menu', menu: [
				{name: _UNO('.uno:Save', 'text'), id: 'save', type: 'action'},
				{name: _UNO('.uno:SaveAs', 'text'), id: 'saveas', type: 'action'},
				{name: _('Share...'), id:'shareas', type: 'action'},
				{name: _UNO('.uno:Print', 'text'), id: 'print', type: 'action'},
				{name: _('See revision history'), id: 'rev-history', type: 'action'},
				{name: _('Download as'), id: 'downloadas', type: 'menu', mobileapp: false, menu: [
					{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
					{name: _('ODF text document (.odt)'), id: 'downloadas-odt', type: 'action'},
					{name: _('Word 2003 Document (.doc)'), id: 'downloadas-doc', type: 'action'},
					{name: _('Word Document (.docx)'), id: 'downloadas-docx', type: 'action'},
					{name: _('Rich Text (.rtf)'), id: 'downloadas-rtf', type: 'action'}]},
				{name: _('Sign document'), id: 'signdocument', type: 'action'},
				{type: 'separator'},
				{name: _('Close document'), id: 'closedocument', type: 'action'}
			]},
			{name: _UNO('.uno:EditMenu', 'text'), type: 'menu', menu: [
				{uno: '.uno:Undo'},
				{uno: '.uno:Redo'},
				{name: _('Repair'), id: 'repair',  type: 'action'},
				{type: 'separator'},
				{name: _UNO('.uno:Cut'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Cut'},
				{name: _UNO('.uno:Copy'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Copy'},
				{name: _UNO('.uno:Paste'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Paste'},
				{uno: '.uno:SelectAll'},
				{type: 'separator'},
				{uno: '.uno:SearchDialog'},
				{type: 'separator'},
				{name: _UNO('.uno:ChangesMenu', 'text'), id: 'changesmenu', type: 'menu', menu: [
					{uno: '.uno:TrackChanges'},
					{uno: '.uno:ShowTrackedChanges'},
					{type: 'separator'},
					{uno: '.uno:AcceptTrackedChanges'},
					{uno: '.uno:AcceptAllTrackedChanges'},
					{uno: '.uno:RejectAllTrackedChanges'},
					{uno: '.uno:PreviousTrackedChange'},
					{uno: '.uno:NextTrackedChange'}
				]},
				{uno: '.uno:EditStyle'}
			]},
			{name: _UNO('.uno:ViewMenu', 'text'), id: 'view', type: 'menu', menu: [
				{name: _UNO('.uno:FullScreen', 'text'), id: 'fullscreen', type: 'action', mobileapp: false},
				{type: 'separator', mobileapp: false},
				{name: _UNO('.uno:ZoomPlus', 'text'), id: 'zoomin', type: 'action'},
				{name: _UNO('.uno:ZoomMinus', 'text'), id: 'zoomout', type: 'action'},
				{name: _('Reset zoom'), id: 'zoomreset', type: 'action'},
				{type: 'separator'},
				{uno: '.uno:ControlCodes'}
			]
			},
			{name: _UNO('.uno:InsertMenu', 'text'), type: 'menu', menu: [
				{name: _('Local Image...'), id: 'insertgraphic', type: 'action'},
				{name: _UNO('.uno:InsertGraphic', 'text'), id: 'insertgraphicremote', type: 'action'},
				{name: _UNO('.uno:InsertAnnotation', 'text'), id: 'insertcomment', type: 'action'},
				{uno: '.uno:InsertObjectChart'},
				{type: 'separator'},
                               {uno: '.uno:InsertSection'},
				{name: _UNO('.uno:InsertField', 'text'), type: 'menu', menu: [
					{uno: '.uno:InsertPageNumberField'},
					{uno: '.uno:InsertPageCountField'},
					{uno: '.uno:InsertDateField'},
					{uno: '.uno:InsertTimeField'},
					{uno: '.uno:InsertTitleField'},
					{uno: '.uno:InsertAuthorField'},
					{uno: '.uno:InsertTopicField'}
				]},
				{name: _UNO('.uno:InsertHeaderFooterMenu', 'text'), type: 'menu', menu: [
					{name: _UNO('.uno:InsertPageHeader', 'text'), type: 'menu', menu: [
						{name: _('All'), disabled: true, id: 'insertheader', tag: '_ALL_', uno: '.uno:InsertPageHeader?'}]},
					{name: _UNO('.uno:InsertPageFooter', 'text'), type: 'menu', menu: [
						{name: _('All'), disabled: true, id: 'insertfooter', tag: '_ALL_', uno: '.uno:InsertPageFooter?'}]}
				]},
				{uno: '.uno:InsertFootnote'},
				{uno: '.uno:InsertEndnote'},
				{type: 'separator'},
				{uno: '.uno:InsertPagebreak'},
				{uno: '.uno:InsertColumnBreak'},
				{type: 'separator'},
				{uno: '.uno:HyperlinkDialog'},
				{uno: '.uno:InsertSymbol'},
				{name: _UNO('.uno:FormattingMarkMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:InsertNonBreakingSpace'},
					{uno: '.uno:InsertHardHyphen'},
					{uno: '.uno:InsertSoftHyphen'},
					{uno: '.uno:InsertZWSP'},
					{uno: '.uno:InsertZWNBSP'},
					{uno: '.uno:InsertLRM'},
					{uno: '.uno:InsertRLM'}]},
                                {name: _UNO('.uno:IndexesMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:InsertIndexesEntry'},
					{uno: '.uno:InsertAuthoritiesEntry'}]},
			]},
			{name: _UNO('.uno:FormatMenu', 'text'), type: 'menu', menu: [
				{name: _UNO('.uno:FormatTextMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:Bold'},
					{uno: '.uno:Italic'},
					{uno: '.uno:Underline'},
					{uno: '.uno:UnderlineDouble'},
					{uno: '.uno:Strikeout'},
					{uno: '.uno:Overline'},
					{type: 'separator'},
					{uno: '.uno:SuperScript'},
					{uno: '.uno:SubScript'},
					{uno: '.uno:SmallCaps'},
					{type: 'separator'},
					{uno: '.uno:Shadowed'},
					{uno: '.uno:OutlineFont'},
					{type: 'separator'},
					{uno: '.uno:Grow'},
					{uno: '.uno:Shrink'},
					{type: 'separator'},
					{uno: '.uno:ChangeCaseToUpper'},
					{uno: '.uno:ChangeCaseToLower'},
					{uno: '.uno:ChangeCaseRotateCase'},
					{type: 'separator'},
					{uno: '.uno:ChangeCaseToSentenceCase'},
					{uno: '.uno:ChangeCaseToTitleCase'},
					{uno: '.uno:ChangeCaseToToggleCase'}]},
				{name: _('Text orientation'), type: 'menu', menu: [
					{uno: '.uno:ParaLeftToRight'},
					{uno: '.uno:ParaRightToLeft'}]},
				{name: _UNO('.uno:FormatSpacingMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:SpacePara1'},
					{uno: '.uno:SpacePara15'},
					{uno: '.uno:SpacePara2'},
					{type: 'separator'},
					{uno: '.uno:ParaspaceIncrease'},
					{uno: '.uno:ParaspaceDecrease'},
					{type: 'separator'},
					{uno: '.uno:IncrementIndent'},
					{uno: '.uno:DecrementIndent'}]},
				{name: _UNO('.uno:TextAlign', 'text'), type: 'menu', menu: [
					{uno: '.uno:CommonAlignLeft'},
					{uno: '.uno:CommonAlignHorizontalCenter'},
					{uno: '.uno:CommonAlignRight'},
					{uno: '.uno:CommonAlignJustified'},
					{type: 'separator'},
					{uno: '.uno:CommonAlignTop'},
					{uno: '.uno:CommonAlignVerticalCenter'},
					{uno: '.uno:CommonAlignBottom'}]},
				{name: _UNO('.uno:FormatBulletsMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:DefaultBullet'},
					{uno: '.uno:DefaultNumbering'},
					{type: 'separator'},
					{uno: '.uno:DecrementLevel'},
					{uno: '.uno:IncrementLevel'},
					{uno: '.uno:DecrementSubLevels'},
					{uno: '.uno:IncrementSubLevels'},
					{type: 'separator'},
					{uno: '.uno:MoveDown'},
					{uno: '.uno:MoveUp'},
					{uno: '.uno:MoveDownSubItems'},
					{uno: '.uno:MoveUpSubItems'},
					{type: 'separator'},
					{uno: '.uno:InsertNeutralParagraph'},
					{uno: '.uno:NumberingStart'},
					{type: 'separator'},
					{uno: '.uno:JumpDownThisLevel'},
					{uno: '.uno:JumpUpThisLevel'},
					{uno: '.uno:ContinueNumbering'}]},
				{type: 'separator'},
				{uno: '.uno:FontDialog'},
				{uno: '.uno:ParagraphDialog'},
				{uno: '.uno:OutlineBullet'},
				{uno: '.uno:PageDialog'},
				{type: 'separator'},
				{uno: '.uno:Watermark'},
				{type: 'separator'},
				{uno: '.uno:FormatColumns'},
				{type: 'separator'},
				{uno: '.uno:ResetAttributes'}
			]},
			{name: _UNO('.uno:TableMenu', 'text'), type: 'menu', menu: [
				{name: _UNO('.uno:TableInsertMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:InsertRowsBefore'},
					{uno: '.uno:InsertRowsAfter'},
					{type: 'separator'},
					{uno: '.uno:InsertColumnsBefore'},
					{uno: '.uno:InsertColumnsAfter'}]},
				{name: _UNO('.uno:TableDeleteMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:DeleteRows'},
					{uno: '.uno:DeleteColumns'},
					{uno: '.uno:DeleteTable'}]},
				{name: _UNO('.uno:TableSelectMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:SelectTable'},
					{uno: '.uno:EntireRow'},
					{uno: '.uno:EntireColumn'},
					{uno: '.uno:EntireCell'}]},
				{uno: '.uno:MergeCells'},
				{type: 'separator'},
				{uno: '.uno:TableDialog'}
			]},
			{name: _UNO('.uno:ToolsMenu', 'text'), id: 'tools', type: 'menu', menu: [
				{uno: '.uno:SpellingAndGrammarDialog'},
				{uno: '.uno:SpellOnline'},
				{uno: '.uno:ThesaurusDialog'},
				{name: _UNO('.uno:LanguageMenu'), type: 'menu', menu: [
					{name: _UNO('.uno:SetLanguageSelectionMenu', 'text'), type: 'menu', menu: [
						{name: _('None (Do not check spelling)'), id: 'noneselection', uno: '.uno:LanguageStatus?Language:string=Current_LANGUAGE_NONE'}]},
					{name: _UNO('.uno:SetLanguageParagraphMenu', 'text'), type: 'menu', menu: [
						{name: _('None (Do not check spelling)'), id: 'noneparagraph', uno: '.uno:LanguageStatus?Language:string=Paragraph_LANGUAGE_NONE'}]},
					{name: _UNO('.uno:SetLanguageAllTextMenu', 'text'), type: 'menu', menu: [
						{name: _('None (Do not check spelling)'), id: 'nonelanguage', uno: '.uno:LanguageStatus?Language:string=Default_LANGUAGE_NONE'}]}
				]},
				{uno: '.uno:WordCountDialog'},
				{type: 'separator'},
				{name: _UNO('.uno:AutoFormatMenu', 'text'), type: 'menu', menu: [
					{uno: '.uno:OnlineAutoFormat'}]}
			]},
			{name: _UNO('.uno:HelpMenu', 'text'), id: 'help', type: 'menu', menu: [
				{name: _('Keyboard shortcuts'), id: 'keyboard-shortcuts', type: 'action', mobileapp: false},
				{name: _('About'), id: 'about', type: 'action'}]
			},
			{name: _('Last modification'), id: 'last-mod', type: 'action', mobile: false, tablet: false}
		],

		presentation: [
			{name: _UNO('.uno:PickList', 'presentation'), id: 'file', type: 'menu', menu: [
				{name: _UNO('.uno:Save', 'presentation'), id: 'save', type: 'action'},
				{name: _UNO('.uno:SaveAs', 'presentation'), id: 'saveas', type: 'action'},
				{name: _('Share...'), id:'shareas', type: 'action'},
				{name: _UNO('.uno:Print', 'presentation'), id: 'print', type: 'action'},
				{name: _('See revision history'), id: 'rev-history', type: 'action'},
				{name: _('Download as'), id: 'downloadas', type: 'menu', mobileapp: false, menu: [
					{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
					{name: _('ODF presentation (.odp)'), id: 'downloadas-odp', type: 'action'},
					{name: _('PowerPoint 2003 Presentation (.ppt)'), id: 'downloadas-ppt', type: 'action'},
					{name: _('PowerPoint Presentation (.pptx)'), id: 'downloadas-pptx', type: 'action'}]},
				{type: 'separator'},
				{name: _('Close document'), id: 'closedocument', type: 'action'}
			]},
			{name: _UNO('.uno:EditMenu', 'presentation'), type: 'menu', menu: [
				{uno: '.uno:Undo'},
				{uno: '.uno:Redo'},
				{name: _('Repair'), id: 'repair',  type: 'action'},
				{type: 'separator'},
				{name: _UNO('.uno:Cut'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Cut'},
				{name: _UNO('.uno:Copy'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Copy'},
				{name: _UNO('.uno:Paste'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Paste'},
				{uno: '.uno:SelectAll'},
				{type: 'separator'},
				{uno: '.uno:SearchDialog'}
			]},
			{name: _UNO('.uno:ViewMenu', 'presentation'), id: 'view', type: 'menu', menu: [
				{name: _UNO('.uno:FullScreen', 'presentation'), id: 'fullscreen', type: 'action', mobileapp: false},
				{type: 'separator', mobileapp: false},
				{name: _UNO('.uno:ZoomPlus', 'presentation'), id: 'zoomin', type: 'action'},
				{name: _UNO('.uno:ZoomMinus', 'presentation'), id: 'zoomout', type: 'action'},
				{name: _('Reset zoom'), id: 'zoomreset', type: 'action'}]
			},
			{name: _UNO('.uno:InsertMenu', 'presentation'), type: 'menu', menu: [
				{name: _('Local Image...'), id: 'insertgraphic', type: 'action'},
				{name: _UNO('.uno:InsertGraphic', 'presentation'), id: 'insertgraphicremote', type: 'action'},
				{name: _UNO('.uno:InsertAnnotation', 'presentation'), id: 'insertcomment', type: 'action'},
				{uno: '.uno:InsertObjectChart'},
				{type: 'separator'},
				{uno: '.uno:HyperlinkDialog'},
				{type: 'separator'},
				{uno: '.uno:InsertSymbol'},
                               {type: 'separator'},
                               {uno: '.uno:HeaderAndFooter'}]
			},
			{name: _UNO('.uno:FormatMenu', 'presentation'), type: 'menu', menu: [
				{uno: '.uno:FontDialog'},
				{uno: '.uno:ParagraphDialog'},
				{uno: '.uno:PageSetup'},
				{type: 'separator'},
				{uno: '.uno:TransformDialog'},
				{uno: '.uno:FormatLine'},
				{uno: '.uno:FormatArea'},
				{type: 'separator'},
				{uno: '.uno:OutlineBullet'}]
			},
			{name: _UNO('.uno:TableMenu', 'text'/*HACK should be 'presentation', but not in xcu*/), type: 'menu', menu: [
				{name: _UNO('.uno:TableInsertMenu', 'text'/*HACK should be 'presentation', but not in xcu*/), type: 'menu', menu: [
					{uno: '.uno:InsertRowsBefore'},
					{uno: '.uno:InsertRowsAfter'},
					{type: 'separator'},
					{uno: '.uno:InsertColumnsBefore'},
					{uno: '.uno:InsertColumnsAfter'}]},
				{name: _UNO('.uno:TableDeleteMenu', 'text'/*HACK should be 'presentation', but not in xcu*/), type: 'menu', menu: [
					{uno: '.uno:DeleteRows'},
					{uno: '.uno:DeleteColumns'}]},
				{uno: '.uno:MergeCells'}]
			},
			{name: _UNO('.uno:SlideMenu', 'presentation'), type: 'menu', menu: [
				{name: _UNO('.uno:InsertSlide', 'presentation'), id: 'insertpage', type: 'action'},
				{name: _UNO('.uno:DuplicateSlide', 'presentation'), id: 'duplicatepage', type: 'action'},
				{name: _UNO('.uno:DeleteSlide', 'presentation'), id: 'deletepage', type: 'action'},
				{type: 'separator', id: 'fullscreen-presentation-separator'},
				{name: _('Fullscreen presentation'), id: 'fullscreen-presentation', type: 'action'}]
			},
			{name: _UNO('.uno:ToolsMenu', 'presentation'), id: 'tools', type: 'menu', menu: [
				{uno: '.uno:SpellOnline'},
				{name: _UNO('.uno:LanguageMenu'), type: 'menu', menu: [
					{name: _('None (Do not check spelling)'), id: 'nonelanguage', uno: '.uno:LanguageStatus?Language:string=Default_LANGUAGE_NONE'}]}
			]},
			{name: _UNO('.uno:HelpMenu', 'presentation'), id: 'help', type: 'menu', menu: [
				{name: _('Keyboard shortcuts'), id: 'keyboard-shortcuts', type: 'action', mobileapp: false},
				{name: _('About'), id: 'about', type: 'action'}]
			},
			{name: _('Last modification'), id: 'last-mod', type: 'action', mobile: false, tablet: false}
		],

		spreadsheet: [
			{name: _UNO('.uno:PickList', 'spreadsheet'), id: 'file', type: 'menu', menu: [
				{name: _UNO('.uno:Save', 'spreadsheet'), id: 'save', type: 'action'},
				{name: _UNO('.uno:SaveAs', 'spreadsheet'), id: 'saveas', type: 'action'},
				{name: _('Share...'), id:'shareas', type: 'action'},
				{name: _UNO('.uno:Print', 'spreadsheet'), id: 'print', type: 'action'},
				{name: _('See revision history'), id: 'rev-history', type: 'action'},
				{name: _('Download as'), id:'downloadas', type: 'menu', mobileapp: false, menu: [
					{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
					{name: _('ODF spreadsheet (.ods)'), id: 'downloadas-ods', type: 'action'},
					{name: _('Excel 2003 Spreadsheet (.xls)'), id: 'downloadas-xls', type: 'action'},
					{name: _('Excel Spreadsheet (.xlsx)'), id: 'downloadas-xlsx', type: 'action'}]},
				{type: 'separator'},
				{name: _('Close document'), id: 'closedocument', type: 'action'}
			]},
			{name: _UNO('.uno:EditMenu', 'spreadsheet'), type: 'menu', menu: [
				{uno: '.uno:Undo'},
				{uno: '.uno:Redo'},
				{name: _('Repair'), id: 'repair',  type: 'action'},
				{type: 'separator'},
				{name: _UNO('.uno:Cut'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Cut'},
				{name: _UNO('.uno:Copy'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Copy'},
				{name: _UNO('.uno:Paste'), id: 'warn-copy-paste',  type: 'action', mobileappuno: '.uno:Paste'},
				{uno: '.uno:SelectAll'},
				{type: 'separator'},
				{uno: '.uno:SearchDialog'}
			]},
			{name: _UNO('.uno:ViewMenu', 'spreadsheet'), id: 'view', type: 'menu', mobileapp: false, menu: [
				{name: _UNO('.uno:FullScreen', 'spreadsheet'), id: 'fullscreen', type: 'action'}
			]},
			{name: _UNO('.uno:InsertMenu', 'spreadsheet'), type: 'menu', menu: [
				{name: _('Local Image...'), id: 'insertgraphic', type: 'action'},
				{name: _UNO('.uno:InsertGraphic', 'spreadsheet'), id: 'insertgraphicremote', type: 'action'},
				{uno: '.uno:InsertObjectChart'},
				{name: _UNO('.uno:InsertAnnotation', 'spreadsheet'), id: 'insertcomment', type: 'action'},
				{type: 'separator'},
				{uno: '.uno:HyperlinkDialog'},
				{uno: '.uno:InsertSymbol'},
				{uno: '.uno:EditHeaderAndFooter'}
			]},
			{name: _UNO('.uno:FormatMenu', 'spreadsheet'), type: 'menu', menu: [
				{uno: '.uno:ResetAttributes'},
				{uno: '.uno:FormatCellDialog'},
				{uno: '.uno:PageFormatDialog'},
				{name: _UNO('.uno:ConditionalFormatMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:ConditionalFormatDialog'},
					{uno: '.uno:ColorScaleFormatDialog'},
					{uno: '.uno:DataBarFormatDialog'},
					{uno: '.uno:IconSetFormatDialog'},
					{uno: '.uno:CondDateFormatDialog'},
					{type: 'separator'},
					{uno: '.uno:ConditionalFormatManagerDialog'}]},
			]},
			{name: _UNO('.uno:SheetMenu', 'spreadsheet'), type: 'menu', menu: [
				{name: _UNO('.uno:InsertRowsMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:InsertRowsBefore'},
					{uno: '.uno:InsertRowsAfter'}]},
				{name: _UNO('.uno:InsertColumnsMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:InsertColumnsBefore'},
					{uno: '.uno:InsertColumnsAfter'}]},
				{name: _UNO('.uno:InsertBreakMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:InsertRowBreak'},
					{uno: '.uno:InsertColumnBreak'}]},
				{type: 'separator'},
				{uno: '.uno:DeleteRows'},
				{uno: '.uno:DeleteColumns'},
				{name: _UNO('.uno:DelBreakMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:DeleteRowbreak'},
					{uno: '.uno:DeleteColumnbreak'}]}
			]},
			{name: _UNO('.uno:DataMenu', 'spreadsheet'), type: 'menu', menu: [
				{uno: '.uno:DataSort'},
				{uno: '.uno:SortAscending'},
				{uno: '.uno:SortDescending'},
				{uno: '.uno:Validation'},
				{type: 'separator'},
				{uno: '.uno:DataFilterAutoFilter'},
				{name: _UNO('.uno:FilterMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:DataFilterStandardFilter'},
					{uno: '.uno:DataFilterSpecialFilter'},
					{type: 'separator'},
					{uno: '.uno:DataFilterRemoveFilter'},
					{uno: '.uno:DataFilterHideAutoFilter'}]},
				{type: 'separator'},
				{name: _UNO('.uno:GroupOutlineMenu', 'spreadsheet'), type: 'menu', menu: [
					{uno: '.uno:Group'},
					{uno: '.uno:Ungroup'},
					{type: 'separator'},
					{uno: '.uno:ClearOutline'},
					{type: 'separator'},
					{uno: '.uno:HideDetail'},
					{uno: '.uno:ShowDetail'}]}
			]},
			{name: _UNO('.uno:ToolsMenu', 'spreadsheet'), id: 'tools', type: 'menu', menu: [
				{uno: '.uno:SpellOnline'},
				{name: _UNO('.uno:LanguageMenu'), type: 'menu', menu: [
					{name: _('None (Do not check spelling)'), id: 'nonelanguage', uno: '.uno:LanguageStatus?Language:string=Default_LANGUAGE_NONE'}]},
				{uno: '.uno:GoalSeekDialog'}
			]},
			{name: _UNO('.uno:HelpMenu', 'spreadsheet'), id: 'help', type: 'menu', menu: [
				{name: _('Keyboard shortcuts'), id: 'keyboard-shortcuts', type: 'action', mobileapp: false},
				{name: _('About'), id: 'about', type: 'action'}]
			},
			{name: _('Last modification'), id: 'last-mod', type: 'action', mobile: false, tablet: false}
		],

		commandStates: {},

		// Only these menu options will be visible in readonly mode
		allowedReadonlyMenus: ['file', 'downloadas', 'view', 'help'],

		allowedViewModeActions: [
			'shareas', 'print', // file menu
			'downloadas-pdf', 'downloadas-odt', 'downloadas-doc', 'downloadas-docx', 'downloadas-rtf', // file menu
			'downloadas-odp', 'downloadas-ppt', 'downloadas-pptx', 'print', // file menu
			'downloadas-ods', 'downloadas-xls', 'downloadas-xlsx', 'closedocument', // file menu
			'fullscreen', 'zoomin', 'zoomout', 'zoomreset', // view menu
			'about', 'keyboard-shortcuts' // help menu
		]
	},

	onAdd: function (map) {
		this._initialized = false;
		this._menubarCont = L.DomUtil.get('main-menu');
		this._initializeMenu(this.options.initial);

		map.on('doclayerinit', this._onDocLayerInit, this);
		map.on('updatepermission', this._onRefresh, this);
		map.on('addmenu', this._addMenu, this);
		map.on('commandvalues', this._onInitMenu, this);
		map.on('updatetoolbarcommandvalues', this._onStyleMenu, this);
	},

	_addMenu: function (e) {
		var alreadyExists = L.DomUtil.get('menu-' + e.id);
		if (alreadyExists)
			return;

		var liItem = L.DomUtil.create('li', '');
		liItem.id = 'menu-' + e.id;
		if (this._map._permission === 'readonly') {
			L.DomUtil.addClass(liItem, 'readonly');
		}
		var aItem = L.DomUtil.create('a', '', liItem);
		$(aItem).text(e.label);
		$(aItem).data('id', e.id);
		$(aItem).data('type', 'action');
		$(aItem).data('postmessage', 'true');
		this._menubarCont.insertBefore(liItem, this._menubarCont.firstChild);
	},

	_createUnoMenuItem: function (caption, command, tag) {
		var liItem, aItem;
		liItem = L.DomUtil.create('li', '');
		aItem = L.DomUtil.create('a', '', liItem);
		$(aItem).text(caption);
		$(aItem).data('type', 'unocommand');
		$(aItem).data('uno', command);
		$(aItem).data('tag', tag);
		return liItem;
	},


	_onInitMenu: function (e) {
		if (e.commandName === '.uno:LanguageStatus' && L.Util.isArray(e.commandValues)) {
			var translated, neutral;
			var constDefa = 'Default_RESET_LANGUAGES';
			var constCurr = 'Current_RESET_LANGUAGES';
			var constPara = 'Paragraph_RESET_LANGUAGES';
			var constLang = '.uno:LanguageStatus?Language:string=';
			var resetLang = _('Reset to Default Language');
			var languages  = [];

			e.commandValues.forEach(function(language) {
				languages.push({translated: _(language), neutral: language});
			});
			languages.sort(function(a, b) {
				return a.translated < b.translated ? -1 : a.translated > b.translated ? 1 : 0;
			});

			var $menuSelection = $('#menu-noneselection').parent();
			var $menuParagraph = $('#menu-noneparagraph').parent();
			var $menuDefault = $('#menu-nonelanguage').parent();
			for (var lang in languages) {
				translated = languages[lang].translated;
				neutral = languages[lang].neutral;
				$menuSelection.append(this._createUnoMenuItem(translated, constLang + encodeURIComponent('Current_' + neutral)));
				$menuParagraph.append(this._createUnoMenuItem(translated, constLang + encodeURIComponent('Paragraph_' + neutral)));
				$menuDefault.append(this._createUnoMenuItem(translated, constLang + encodeURIComponent('Default_' + neutral)));
			}
			$menuSelection.append(this._createMenu([{type: 'separator'}]));
			$menuParagraph.append(this._createMenu([{type: 'separator'}]));
			$menuDefault.append(this._createMenu([{type: 'separator'}]));
			$menuSelection.append(this._createUnoMenuItem(resetLang, constLang + constCurr));
			$menuParagraph.append(this._createUnoMenuItem(resetLang, constLang + constPara));
			$menuDefault.append(this._createUnoMenuItem(resetLang, constLang + constDefa));
		}
	},

	_onRefresh: function() {
		// clear initial menu
		while (this._menubarCont.hasChildNodes()) {
			this._menubarCont.removeChild(this._menubarCont.firstChild);
		}

		// Add document specific menu
		var docType = this._map.getDocType();
		if (docType === 'text') {
			this._initializeMenu(this.options.text);
		} else if (docType === 'spreadsheet') {
			this._initializeMenu(this.options.spreadsheet);
		} else if (docType === 'presentation' || docType === 'drawing') {
			this._initializeMenu(this.options.presentation);
		}

		// initialize menubar plugin
		$('#main-menu').smartmenus({
			hideOnClick: true,
			showOnClick: true,
			hideTimeout: 0,
			hideDuration: 0,
			showDuration: 0,
			showTimeout: 0,
			collapsibleHideDuration: 0,
			subIndicatorsPos: 'append',
			subIndicatorsText: '&#8250;'
		});
		$('#main-menu').attr('tabindex', 0);

		if (this._map._permission !== 'readonly') {
			this._createFileIcon();
		}
	},

	_onStyleMenu: function (e) {
		if (e.commandName === '.uno:StyleApply') {
			var style;
			var constArg = '&';
			var constHeader = '.uno:InsertPageHeader?PageStyle:string=';
			var constFooter = '.uno:InsertPageFooter?PageStyle:string=';
			var $menuHeader = $('#menu-insertheader').parent();
			var $menuFooter = $('#menu-insertfooter').parent();
			var pageStyles = e.commandValues['HeaderFooter'];
			for (var iterator in pageStyles) {
				style = pageStyles[iterator];
				$menuHeader.append(this._createUnoMenuItem(_(style), constHeader + encodeURIComponent(style) + constArg, style));
				$menuFooter.append(this._createUnoMenuItem(_(style), constFooter + encodeURIComponent(style) + constArg, style));
			}
		}
	},

	_createDocument: function(e) {
		var self = e.data.self;
		var docType = self._map.getDocType();
		self._map.fire('postMessage', {msgId: 'UI_CreateFile', args: {DocumentType: docType}});
	},

	_onDocLayerInit: function() {
		this._onRefresh();

		$('#main-menu').bind('select.smapi', {self: this}, this._onItemSelected);
		$('#main-menu').bind('mouseenter.smapi', {self: this}, this._onMouseEnter);
		$('#main-menu').bind('mouseleave.smapi', {self: this}, this._onMouseLeave);

		$('#main-menu').bind('beforeshow.smapi', {self: this}, this._beforeShow);
		$('#main-menu').bind('click.smapi', {self: this}, this._onClicked);

		$('#main-menu').bind('keydown', {self: this}, this._onKeyDown);

		// SmartMenus mobile menu toggle button
		$(function() {
			var $mainMenuState = $('#main-menu-state');
			if ($mainMenuState.length) {
				// animate mobile menu
				$mainMenuState.change(function() {
					var $menu = $('#main-menu');
					var $nav = $menu.parent();
					if (this.checked) {
						$nav.css({height: 'initial', bottom: '38px'});
						$menu.hide().slideDown(250, function() { $menu.css('display', ''); });
					} else {
						$menu.show().slideUp(250, function() { $menu.css('display', ''); });
						$nav.css({height:'', bottom: ''});
					}
				});
				// hide mobile menu beforeunload
				$(window).bind('beforeunload unload', function() {
					if ($mainMenuState[0].checked) {
						$mainMenuState[0].click();
					}
				});
			}
		});

		this._initialized = true;
	},

	_onClicked: function(e, menu) {
		if ($(menu).hasClass('highlighted')) {
			$('#main-menu').smartmenus('menuHideAll');
		}

		var $mainMenuState = $('#main-menu-state');
		if (!$(menu).hasClass('has-submenu') && $mainMenuState[0].checked) {
			$mainMenuState[0].click();
		}
	},

	_checkedMenu: function(uno, item) {
		var constChecked = 'lo-menu-item-checked';
		var state = this._map['stateChangeHandler'].getItemValue(uno);
		var data = $(item).data('tag');
		state = state[data] || false;
		if (state) {
			$(item).addClass(constChecked);
		} else {
			$(item).removeClass(constChecked);
		}
	},

	_beforeShow: function(e, menu) {
		var self = e.data.self;
		var items = $(menu).children().children('a').not('.has-submenu');
		$(items).each(function() {
			var aItem = this;
			var type = $(aItem).data('type');
			var id = $(aItem).data('id');
			if (self._map._permission === 'edit') {
				if (type === 'unocommand') { // enable all depending on stored commandStates
					var data, lang;
					var constUno = 'uno';
					var constState = 'stateChangeHandler';
					var constChecked = 'lo-menu-item-checked';
					var constLanguage = '.uno:LanguageStatus';
					var constPageHeader = '.uno:InsertPageHeader';
					var constPageFooter = '.uno:InsertPageFooter';
					var unoCommand = $(aItem).data(constUno);
					var itemState = self._map[constState].getItemValue(unoCommand);
					if (itemState === 'disabled') {
						$(aItem).addClass('disabled');
					} else {
						$(aItem).removeClass('disabled');
					}
					if (unoCommand.startsWith(constLanguage)) {
						unoCommand = constLanguage;
						lang = self._map[constState].getItemValue(unoCommand);
						data = decodeURIComponent($(aItem).data(constUno));
						if (data.indexOf(lang) !== -1) {
							$(aItem).addClass(constChecked);
						} else if (data.indexOf('LANGUAGE_NONE') !== -1 && lang === '[None]') {
							$(aItem).addClass(constChecked);
						} else {
							$(aItem).removeClass(constChecked);
						}
					}
					else if (unoCommand.startsWith(constPageHeader)) {
						unoCommand = constPageHeader;
						self._checkedMenu(unoCommand, this);
					}
					else if (unoCommand.startsWith(constPageFooter)) {
						unoCommand = constPageFooter;
						self._checkedMenu(unoCommand, this);
					}
					else if (itemState === 'true') {
						$(aItem).addClass(constChecked);
					} else {
						$(aItem).removeClass(constChecked);
					}
				} else if (type === 'action') { // enable all except fullscreen on windows
					if (id === 'fullscreen' && (L.Browser.ie || L.Browser.edge)) { // Full screen works weirdly on IE 11 and on Edge
						$(aItem).addClass('disabled');
						var index = self.options.allowedViewModeActions.indexOf('fullscreen');
						if (index > 0) {
							self.options.allowedViewModeActions.splice(index, 1);
						}
					} else {
						$(aItem).removeClass('disabled');
					}
				}
			} else { // eslint-disable-next-line no-lonely-if
				if (type === 'unocommand') { // disable all uno commands
					$(aItem).addClass('disabled');
				} else if (type === 'action') { // disable all except allowedViewModeActions
					var found = false;
					for (var i in self.options.allowedViewModeActions) {
						if (self.options.allowedViewModeActions[i] === id) {
							found = true;
							break;
						}
					}
					if (!found) {
						$(aItem).addClass('disabled');
					} else {
						$(aItem).removeClass('disabled');
					}
				}
			}
		});
	},

	_executeAction: function(item) {
		var id = $(item).data('id');
		if (id === 'save') {
			this._map.save(true, true);
		} else if (id === 'saveas') {
			this._map.fire('postMessage', {msgId: 'UI_SaveAs'});
		} else if (id === 'shareas') {
			this._map.fire('postMessage', {msgId: 'UI_Share'});
		} else if (id === 'print') {
			this._map.print();
		} else if (id.startsWith('downloadas-')) {
			var format = id.substring('downloadas-'.length);
			var fileName = this._map['wopi'].BaseFileName;
			fileName = fileName.substr(0, fileName.lastIndexOf('.'));
			fileName = fileName === '' ? 'document' : fileName;
			this._map.downloadAs(fileName + '.' + format, format);
		} else if (id === 'signdocument') {
			this._map.showSignDocument();
		} else if (id === 'insertcomment') {
			this._map.insertComment();
		} else if (id === 'insertgraphic') {
			L.DomUtil.get('insertgraphic').click();
		} else if (id === 'insertgraphicremote') {
			this._map.fire('postMessage', {msgId: 'UI_InsertGraphic'});
		} else if (id === 'zoomin' && this._map.getZoom() < this._map.getMaxZoom()) {
			this._map.zoomIn(1);
		} else if (id === 'zoomout' && this._map.getZoom() > this._map.getMinZoom()) {
			this._map.zoomOut(1);
		} else if (id === 'zoomreset') {
			this._map.setZoom(this._map.options.zoom);
		} else if (id === 'fullscreen') {
			L.toggleFullScreen();
		} else if (id === 'fullscreen-presentation' && this._map.getDocType() === 'presentation') {
			this._map.fire('fullscreen');
		} else if (id === 'insertpage') {
			this._map.insertPage();
		} else if (id === 'duplicatepage') {
			this._map.duplicatePage();
		} else if (id === 'deletepage') {
			var map = this._map;
			vex.dialog.confirm({
				message: _('Are you sure you want to delete this slide?'),
				callback: function(e) {
					if (e) {
						map.deletePage();
					}
				}
			});
		} else if (id === 'about') {
			this._map.showLOAboutDialog();
		} else if (id === 'keyboard-shortcuts') {
			this._map.showLOKeyboardHelp();
		} else if (revHistoryEnabled && (id === 'rev-history' || id === 'last-mod')) {
			// if we are being loaded inside an iframe, ask
			// our host to show revision history mode
			this._map.fire('postMessage', {msgId: 'rev-history', args: {Deprecated: true}});
			this._map.fire('postMessage', {msgId: 'UI_FileVersions'});
		} else if (id === 'closedocument') {
			if (window.ThisIsAMobileApp) {
				window.postMobileMessage('BYE');
			} else {
				this._map.fire('postMessage', {msgId: 'close', args: {EverModified: this._map._everModified, Deprecated: true}});
				this._map.fire('postMessage', {msgId: 'UI_Close', args: {EverModified: this._map._everModified}});
			}
			this._map.remove();
		} else if (id === 'repair') {
			this._map._socket.sendMessage('commandvalues command=.uno:DocumentRepair');
		} else if (!window.ThisIsAMobileApp && id === 'warn-copy-paste') {
			vex.dialog.alert({unsafeMessage: _('<p>Your browser has very limited access to the clipboard, so use these keyboard shortcuts:<ul><li><b>Ctrl+C</b>: For copying.</li><li><b>Ctrl+X</b>: For cutting.</li><li><b>Ctrl+V</b>: For pasting.</li></ul></p>')});
		} else if (window.ThisIsAMobileApp && $(item).data('mobileappuno')) {
			this._map.sendUnoCommand($(item).data('mobileappuno'));
		}
		// Inform the host if asked
		if ($(item).data('postmessage') === 'true') {
			this._map.fire('postMessage', {msgId: 'Clicked_Button', args: {Id: id} });
		}
	},

	_sendCommand: function (item) {
		var unoCommand = $(item).data('uno');
		if (unoCommand.startsWith('.uno:InsertPageHeader') || unoCommand.startsWith('.uno:InsertPageFooter')) {
			unoCommand = unoCommand + ($(item).hasClass('lo-menu-item-checked') ? 'On:bool=false' : 'On:bool=true');
		}
		this._map.sendUnoCommand(unoCommand);
	},

	_onItemSelected: function(e, item) {
		var self = e.data.self;
		var type = $(item).data('type');
		if (type === 'unocommand') {
			self._sendCommand(item);
		} else if (type === 'action') {
			self._executeAction(item);
		}

		if (!L.Browser.mobile && $(item).data('id') !== 'insertcomment')
			self._map.focus();
	},

	_onMouseEnter: function(e, item) {
		var self = e.data.self;
		var type = $(item).data('type');
		if (type === 'unocommand') {
			var unoCommand = $(item).data('uno');
			self._map.setHelpTarget(unoCommand);
		} else if (type === 'action') {
			var id = $(item).data('id');
			self._map.setHelpTarget('modules/online/menu/' + id);
		}
	},

	_onMouseLeave: function(e) {
		var self = e.data.self;
		self._map.setHelpTarget(null);
	},

	_onKeyDown: function(e) {
		var self = e.data.self;

		// handle help - F1
		if (e.type === 'keydown' && !e.shiftKey && !e.ctrlKey && !e.altKey && e.keyCode == 112) {
			self._map.showHelp();
		}
	},

	_createFileIcon: function() {
		var iconClass = 'document-logo';
		var docType = this._map.getDocType();
		if (docType === 'text') {
			iconClass += ' writer-icon-img';
		} else if (docType === 'spreadsheet') {
			iconClass += ' calc-icon-img';
		} else if (docType === 'presentation' || docType === 'drawing') {
			iconClass += ' impress-icon-img';
		}

		var liItem = L.DomUtil.create('li', '');
		liItem.id = 'document-header';
		var aItem = L.DomUtil.create('div', iconClass, liItem);
		$(aItem).data('id', 'document-logo');
		$(aItem).data('type', 'action');

		this._menubarCont.insertBefore(liItem, this._menubarCont.firstChild);

		var $docLogo = $(aItem);
		$docLogo.bind('click', {self: this}, this._createDocument);

	},

	_createMenu: function(menu) {
		var itemList = [];
		var docType = this._map.getDocType();
		for (var i in menu) {
			if (menu[i].id === 'about' && (L.DomUtil.get('about-dialog') === null)) {
				continue;
			}
			if (menu[i].id === 'signdocument' && (L.DomUtil.get('document-signing-bar') === null)) {
				continue;
			}

			if (this._map._permission === 'readonly' && menu[i].type === 'menu') {
				var found = false;
				for (var j in this.options.allowedReadonlyMenus) {
					if (this.options.allowedReadonlyMenus[j] === menu[i].id) {
						found = true;
						break;
					}
				}
				if (!found)
					continue;
			}

			if (this._map._permission === 'readonly' && menu[i].id === 'last-mod') {
				continue;
			}

			if (menu[i].type === 'action') {
				if ((menu[i].id === 'rev-history' && !revHistoryEnabled) ||
					(menu[i].id === 'closedocument' && !closebutton)) {
					continue;
				}
			}

			if (menu[i].id === 'print' && this._map['wopi'].HidePrintOption)
				continue;

			if (menu[i].id === 'save' && this._map['wopi'].HideSaveOption)
				continue;

			if (menu[i].id === 'saveas' && this._map['wopi'].UserCanNotWriteRelative)
				continue;

			if (menu[i].id === 'shareas' && !this._map['wopi'].EnableShare)
				continue;

			if (menu[i].id === 'insertgraphicremote' && !this._map['wopi'].EnableInsertRemoteImage)
				continue;

			if (menu[i].id && menu[i].id.startsWith('fullscreen-presentation') && this._map['wopi'].HideExportOption)
				continue;

			if (menu[i].id === 'changesmenu' && this._map['wopi'].HideChangeTrackingControls)
				continue;

			// Keep track of all 'downloadas-' options and register them as
			// export formats with docLayer which can then be publicly accessed unlike
			// this Menubar control for which there doesn't seem to be any easy way
			// to get access to.
			if (menu[i].id && menu[i].id.startsWith('downloadas-')) {
				var format = menu[i].id.substring('downloadas-'.length);
				this._map._docLayer.registerExportFormat(menu[i].name, format);

				if (this._map['wopi'].HideExportOption)
					continue;
			}

			var liItem = L.DomUtil.create('li', '');
			if (menu[i].id) {
				liItem.id = 'menu-' + menu[i].id;
				if (menu[i].id === 'closedocument' && this._map._permission === 'readonly') {
					// see corresponding css rule for readonly class usage
					L.DomUtil.addClass(liItem, 'readonly');
				}
			}
			var aItem = L.DomUtil.create('a', menu[i].disabled ? 'disabled' : '', liItem);
			if (menu[i].name !== undefined) {
				aItem.innerHTML = menu[i].name;
			} else if (menu[i].uno !== undefined) {
				aItem.innerHTML = _UNO(menu[i].uno, docType);
			} else {
				aItem.innerHTML = '';
			}

			if (menu[i].type === 'menu') {
				if (menu[i].mobileapp == false && window.ThisIsAMobileApp) {
					continue;
				}
				var ulItem = L.DomUtil.create('ul', '', liItem);
				var subitemList = this._createMenu(menu[i].menu);
				if (!subitemList.length) {
					continue;
				}
				for (var idx in subitemList) {
					ulItem.appendChild(subitemList[idx]);
				}
			} else if (menu[i].type === 'unocommand' || menu[i].uno !== undefined) {
				$(aItem).data('type', 'unocommand');
				$(aItem).data('uno', menu[i].uno);
				$(aItem).data('tag', menu[i].tag);
			} else if (menu[i].type === 'separator') {
				$(aItem).addClass('separator');
			} else if (menu[i].type === 'action') {
				$(aItem).data('type', 'action');
				$(aItem).data('id', menu[i].id);
				if (window.ThisIsAMobileApp && menu[i].mobileappuno) {
					$(aItem).data('mobileappuno', menu[i].mobileappuno);
				}
			}

			if (menu[i].tablet == false && window.mode.isTablet()) {
				$(aItem).css('display', 'none');
			}

			if (menu[i].mobile == false && window.mode.isMobile()) {
				$(aItem).css('display', 'none');
			}

			if (menu[i].mobileapp == false && window.ThisIsAMobileApp) {
				$(aItem).css('display', 'none');
			}

			itemList.push(liItem);
		}

		return itemList;
	},

	_initializeMenu: function(menu) {
		var menuHtml = this._createMenu(menu);
		for (var i in menuHtml) {
			this._menubarCont.appendChild(menuHtml[i]);
		}
	}
});

L.control.menubar = function (options) {
	return new L.Control.Menubar(options);
};

/*
 * Similar to DomEvent.DoubleTap.js (which implements the 'dblclick' event for
 * touchscreens), this implements the 'contextmenu' event on long touchscreen
 * press for combination of browsers/input devices that don't - namely,
 * Safari on iOS devices.
 *
 * This has been mostly copy-pasted from map/handler/Map.Tap.js and should be
 * refactored somehow.
 */
L.DomEvent.enableLongTap = function enableLongTap(el, tolerance, timeout) {
	// Skip non-touchscreens and browsers which implement PointerEvent
	if (!L.Browser.touch || L.Browser.pointer) {
		return;
	}

	// Prevent double handling
	if (el._hasLongTapContextMenus) {
		return;
	}
	el._hasLongTapContextMenus = true;

	// Default value for the 'tolerance' parameter: 15 pixels
	// This is the amount of pixels that the touch can move around during
	// a long tap, and still fire contextmenu events.
	if (!tolerance) {
		tolerance = 15;
	}

	// Default value for the 'timeout' parameter: 2000 milliseconds
	// This is how long a user has to hold down the touch to trigger the
	// contextmenu event
	if (!timeout) {
		timeout = 2000;
	}

	var holdTimeout;
	var fireClick = true; // Whether to fire a click event on touchup
	var startPos; // Position of the touch on touchstart
	var newPos; // Position of the touch on the last touchmove

	function onDown(ev) {
		if (!ev.touches) {
			return;
		}

		L.DomEvent.preventDefault(ev);
		fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (ev.touches.length > 1) {
			fireClick = false;
			clearTimeout(holdTimeout);
			return;
		}

		var first = ev.touches[0],
		    target = first.target;

		startPos = newPos = L.point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (target.tagName && target.tagName.toLowerCase() === 'a') {
			L.DomUtil.addClass(target, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		holdTimeout = setTimeout(function() {
			if (isTapValid()) {
				fireClick = false;
				onUp();
				simulateEvent('contextmenu', first);
			}
		}, timeout);

		simulateEvent('mousedown', first);

		L.DomEvent.on(el, {
			touchmove: onMove,
			touchend: onUp
		});
	}

	function isTapValid() {
		return newPos.distanceTo(startPos) <= tolerance;
	}

	function onUp(ev) {
		clearTimeout(holdTimeout);

		L.DomEvent.off(el, {
			touchmove: onMove,
			touchend: onUp
		});

		if (fireClick && ev && ev.changedTouches) {
			var first = ev.changedTouches[0],
			    target = first.target;

			if (target && target.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.removeClass(target, 'leaflet-active');
			}

			simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (isTapValid()) {
				simulateEvent('click', first);
			}
		}
	}

	function onMove(ev) {
		var first = ev.touches[0];
		newPos = new L.Point(first.clientX, first.clientY);
		simulateEvent('mousemove', first);
	}

	function simulateEvent(type, ev) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		ev.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
			type,
			true,
			true,
			window,
			1,
			ev.screenX,
			ev.screenY,
			ev.clientX,
			ev.clientY,
			false,
			false,
			false,
			false,
			0,
			null
		);

		console.log('dispatching simulated contextmenu event: ', simulatedEvent);

		ev.target.dispatchEvent(simulatedEvent);
	}

	L.DomEvent.on(el, 'touchstart', onDown, this);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Tabs is used to switch sheets in Calc
 */

/* global $ vex _ _UNO */
L.Control.Tabs = L.Control.extend({
	onAdd: function(map) {
		map.on('updatepermission', this._onUpdatePermission, this);
		this._initialized = false;
	},

	_onUpdatePermission: function(e) {
		if (this._map.getDocType() !== 'spreadsheet') {
			return;
		}

		if (!this._initialized) {
			this._initialize();
		}
		setTimeout(function() {
			$('.spreadsheet-tab').contextMenu(e.perm === 'edit');
		}, 100);

		if (window.mode.isMobile() == true) {
			if (e.perm === 'edit') {
				$('.spreadsheet-tabs-container').css('bottom', '33px');
				$('#spreadsheet-toolbar').css('bottom', '33px');
			}
			else {
				$('.spreadsheet-tabs-container').css('bottom', '0px');
				$('#spreadsheet-toolbar').css('bottom', '0px');
			}
		}
	},

	_initialize: function () {
		this._initialized = true;
		this._tabsInitialized = false;
		this._spreadsheetTabs = {};
		this._tabForContextMenu = 0;
		var map = this._map;
		var docContainer = map.options.documentContainer;
		this._tabsCont = L.DomUtil.create('div', 'spreadsheet-tabs-container', docContainer.parentElement);

		$.contextMenu({
			selector: '.spreadsheet-tab',
			className: 'loleaflet-font',
			callback: (function(key) {
				if (key === 'insertsheetbefore') {
					map.insertPage(this._tabForContextMenu);
				}
				if (key === 'insertsheetafter') {
					map.insertPage(this._tabForContextMenu + 1);
				}
			}).bind(this),
			items: {
				'insertsheetbefore': {name: _('Insert sheet before this')},
				'insertsheetafter': {name: _('Insert sheet after this')},
				'deletesheet': {name: _UNO('.uno:Remove', 'spreadsheet', true),
						callback: (function(key, options) {
							var nPos = this._tabForContextMenu;
							vex.dialog.confirm({
								message: _('Are you sure you want to delete sheet, %sheet% ?').replace('%sheet%', options.$trigger.text()),
								callback: function(data) {
									if (data) {
										map.deletePage(nPos);
									}
								}
							});
						}).bind(this)
				 },
				'renamesheet': {name: _UNO('.uno:RenameTable', 'spreadsheet', true),
							callback: (function(key, options) {
								var nPos = this._tabForContextMenu;
								vex.dialog.open({
									message: _('Enter new sheet name'),
									input: '<input name="sheetname" type="text" value="' + options.$trigger.text() + '" required />',
									callback: function(data) {
										map.renamePage(data.sheetname, nPos);
									}
								});
							}).bind(this)
				} ,
				'showsheets': {
					name: _UNO('.uno:Show', 'spreadsheet', true),
					callback: (function() {
						map.showPage();
					}).bind(this)
				},
				'hiddensheets': {
					name: _UNO('.uno:Hide', 'spreadsheet', true),
					callback: (function() {
						map.hidePage();
					}).bind(this)
				}
			},
			zIndex: 1000
		});

		map.on('updateparts', this._updateDisabled, this);
	},

	_updateDisabled: function (e) {
		var parts = e.parts;
		var selectedPart = e.selectedPart;
		var docType = e.docType;
		if (docType === 'text') {
			return;
		}
		if (docType === 'spreadsheet') {
			if (!this._tabsInitialized) {
				// make room for the preview
				var docContainer = this._map.options.documentContainer;
				L.DomUtil.addClass(docContainer, 'spreadsheet-document');
				setTimeout(L.bind(function () {
					this._map.invalidateSize();
					$('.scroll-container').mCustomScrollbar('update');
					$('.scroll-container').mCustomScrollbar('scrollTo', [0, 0]);
				}, this), 100);
				this._tabsInitialized = true;
			}
			if ('partNames' in e) {
				while (this._tabsCont.firstChild) {
					this._tabsCont.removeChild(this._tabsCont.firstChild);
				}
				var ssTabScroll = L.DomUtil.create('div', 'spreadsheet-tab-scroll', this._tabsCont);
				ssTabScroll.id = 'spreadsheet-tab-scroll';

				for (var i = 0; i < parts; i++) {
					if (e.hiddenParts.indexOf(i) !== -1)
						continue;
					var id = 'spreadsheet-tab' + i;
					var tab = L.DomUtil.create('button', 'spreadsheet-tab', ssTabScroll);
					L.DomEvent.enableLongTap(tab);
					
					L.DomEvent.on(tab, 'contextmenu', function(j) {
						return function() {
							this._tabForContextMenu = j;
							$('spreadsheet-tab' + j).contextMenu();
						}
					}(i).bind(this));
					
					tab.textContent = e.partNames[i];
					tab.id = id;

					L.DomEvent
						.on(tab, 'click', L.DomEvent.stopPropagation)
						.on(tab, 'click', L.DomEvent.stop)
						.on(tab, 'click', this._setPart, this)
						.on(tab, 'click', this._map.focus, this._map);
					this._spreadsheetTabs[id] = tab;
				}
			}
			for (var key in this._spreadsheetTabs) {
				var part =  parseInt(key.match(/\d+/g)[0]);
				L.DomUtil.removeClass(this._spreadsheetTabs[key], 'spreadsheet-tab-selected');
				if (part === selectedPart) {
					L.DomUtil.addClass(this._spreadsheetTabs[key], 'spreadsheet-tab-selected');
				}
			}
		}
	},

	_setPart: function (e) {
		var part =  e.target.id.match(/\d+/g)[0];
		if (part !== null) {
			this._map.setPart(parseInt(part), /*external:*/ false, /*calledFromSetPartHandler:*/ true);
		}
	}
});

L.control.tabs = function (options) {
	return new L.Control.Tabs(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.EditView is used for switching between viewing and editing mode
 */

L.Control.PermissionSwitch = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function (map) {
		var partName = 'leaflet-control-editviewswitch',
		    container = L.DomUtil.create('label', partName + ' leaflet-bar');

		this._checkBox = L.DomUtil.create('input', 'editview-cb', container);
		this._checkBox.type = 'checkbox';
		L.DomEvent.on(this._checkBox, 'change', this._onChange, this);
		map.on('updatepermission', this._onUpdatePermission, this);
		container.appendChild(document.createTextNode('Enable editing'));
		return container;
	},

	_onChange: function () {
		if (this._checkBox.checked) {
			this._map.setPermission('edit');
		}
		else {
			this._map.setPermission('view');
		}
		this._map.focus();
	},

	_onUpdatePermission: function (e) {
		if (e.perm === 'edit') {
			this._checkBox.checked = true;
			this._checkBox.disabled = false;
		}
		else if (e.perm === 'view') {
			this._checkBox.checked = false;
			this._checkBox.disabled = false;
		}
		else if (e.perm === 'readonly') {
			this._checkBox.checked = false;
			this._checkBox.disabled = true;
		}
	}
});

L.control.permissionSwitch = function (options) {
	return new L.Control.PermissionSwitch(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Selection enables by mouse drag selection in viewing mode
 */

L.Control.Selection = L.Control.extend({
	options: {
		position: 'topleft'
	},

	onAdd: function (map) {
		var partName = 'leaflet-control-editviewswitch',
		    container = L.DomUtil.create('label', partName + ' leaflet-bar');

		this._checkBox = L.DomUtil.create('input', 'editview-cb', container);
		this._checkBox.type = 'checkbox';
		L.DomEvent.on(this._checkBox, 'change', this._onChange, this);
		map.on('updatepermission', this._onUpdatePermission, this);
		container.appendChild(document.createTextNode('Enable Selection'));
		return container;
	},

	_onChange: function () {
		if (this._checkBox.checked) {
			this._map.enableSelection();
		}
		else {
			this._map.disableSelection();
		}
		this._map.focus();
	},

	_onUpdatePermission: function (e) {
		if (e.perm === 'edit') {
			this._checkBox.checked = false;
			this._checkBox.disabled = true;
		}
		else if (e.perm === 'view') {
			this._checkBox.checked = false;
			this._checkBox.disabled = false;
		}
		else if (e.perm === 'readonly') {
			this._checkBox.checked = false;
			this._checkBox.disabled = false;
		}
	}
});

L.control.selection = function (options) {
	return new L.Control.Selection(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Scroll handles scrollbars
 */

/* global $ clearTimeout setTimeout */
L.Control.Scroll = L.Control.extend({

	onAdd: function (map) {
		this._scrollContainer = L.DomUtil.create('div', 'scroll-container', map._container.parentElement);
		this._mockDoc = L.DomUtil.create('div', '', this._scrollContainer);
		this._mockDoc.id = 'mock-doc';

		this._prevScrollX = 0;
		this._prevScrollY = 0;

		this._prevDocWidth = 0;
		this._prevDocHeight = 0;

		map.on('scrollto', this._onScrollTo, this);
		map.on('scrollby', this._onScrollBy, this);
		map.on('scrollvelocity', this._onScrollVelocity, this);
		map.on('handleautoscroll', this._onHandleAutoScroll, this);
		map.on('docsize', this._onUpdateSize, this);
		map.on('updatescrolloffset', this._onUpdateScrollOffset, this);
		map.on('updaterowcolumnheaders', this._onUpdateRowColumnHeaders, this);

		var control = this;
		var autoHideTimeout = null;
		$('.scroll-container').mCustomScrollbar({
			axis: 'yx',
			theme: 'minimal-dark',
			scrollInertia: 0,
			advanced:{
				autoExpandHorizontalScroll: true, /* weird bug, it should be false */
				jumpOnContentResize: false /* prevent from jumping on a mobile devices */
			},
			callbacks:{
				onScrollStart: function() {
					control._map.fire('closepopup');
				},
				onScroll: function() {
					control._onScrollEnd(this);
					if (autoHideTimeout)
						clearTimeout(autoHideTimeout);
					autoHideTimeout = setTimeout(function() {
						//	$('.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools').css({opacity: 0, 'filter': 'alpha(opacity=0)', '-ms-filter': 'alpha(opacity=0)'});
						$('.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools').removeClass('loleaflet-scrollbar-show');
					}, 2000);
				},
				whileScrolling: function() {
					control._onScroll(this);

					// autoHide feature doesn't work because plugin relies on hovering on scroll container
					// and we have a mock scroll container whereas the actual user hovering happens only on
					// real document. Change the CSS rules manually to simulate autoHide feature.
					$('.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools').addClass('loleaflet-scrollbar-show');
				},
				onUpdate: function() {
					console.debug('mCustomScrollbar: onUpdate:');
				},
				alwaysTriggerOffsets: false
			}
		});
	},

	_onCalcScroll: function (e) {
		if (!this._map._enabled) {
			return;
		}

		var newLeft = -e.mcs.left;
		if (newLeft > this._prevScrollX) {
			var viewportWidth = this._map.getSize().x;
			var docWidth = this._map._docLayer._docPixelSize.x;
			newLeft = Math.min(newLeft, docWidth - viewportWidth);
		}
		else {
			newLeft = Math.max(newLeft, 0);
		}

		var newTop = -e.mcs.top;
		if (newTop > this._prevScrollY) {
			var viewportHeight = this._map.getSize().y;
			var docHeight = Math.round(this._map._docLayer._docPixelSize.y);
			newTop = Math.min(newTop, docHeight - viewportHeight);
		}
		else {
			newTop = Math.max(newTop, 0);
		}

		var offset = new L.Point(
				newLeft - this._prevScrollX,
				newTop - this._prevScrollY);

		if (offset.equals(new L.Point(0, 0))) {
			return;
		}

		this._onUpdateRowColumnHeaders({ x: newLeft, y: newTop, offset: offset});

		this._prevScrollY = newTop;
		this._prevScrollX = newLeft;
		this._map.fire('scrolloffset', offset);
		this._map.scroll(offset.x, offset.y);
	},

	_onScroll: function (e) {
		if (this._map._docLayer._docType === 'spreadsheet') {
			this._onCalcScroll(e);
			return;
		}

		console.debug('_onScroll: ');
		if (!this._map._enabled) {
			return;
		}

		if (this._ignoreScroll) {
			console.debug('_onScroll: ignoring scroll');
			return;
		}

		var offset = new L.Point(
			-e.mcs.left - this._prevScrollX,
			-e.mcs.top - this._prevScrollY);

		if (!offset.equals(new L.Point(0, 0))) {
			this._prevScrollY = -e.mcs.top;
			this._prevScrollX = -e.mcs.left;
			console.debug('_onScroll: scrolling: ' + offset);
			this._map.scroll(offset.x, offset.y);
			this._map.fire('scrolloffset', offset);
		}
	},

	_onScrollEnd: function (e) {
		// needed in order to keep the row/column header correctly aligned
		if (this._map._docLayer._docType === 'spreadsheet') {
			return;
		}

		console.debug('_onScrollEnd:');
		if (this._ignoreScroll) {
			this._ignoreScroll = null;
			console.debug('_onScrollEnd: scrollTop: ' + -e.mcs.top);
			this._map.scrollTop(-e.mcs.top);
		}
		this._prevScrollY = -e.mcs.top;
		this._prevScrollX = -e.mcs.left;
		// Scrolling quickly via mousewheel messes up the annotations for some reason
		// Triggering the layouting algorithm here, though unnecessary, fixes the problem.
		// This is just a workaround till we find the root cause of why it messes up the annotations
		if (this._map._docLayer._annotations.layout) {
			this._map._docLayer._annotations.layout();
		}
	},

	_onScrollTo: function (e) {
		// triggered by the document (e.g. search result out of the viewing area)
		$('.scroll-container').mCustomScrollbar('scrollTo', [e.y, e.x], {calledFromInvalidateCursorMsg: e.calledFromInvalidateCursorMsg});
	},

	_onScrollBy: function (e) {
		e.y *= (-1);
		var y = '+=' + e.y;
		if (e.y < 0) {
			y = '-=' + Math.abs(e.y);
		}
		e.x *= (-1);
		var x = '+=' + e.x;
		if (e.x < 0) {
			x = '-=' + Math.abs(e.x);
		}
		// Note: timeout===1 is checked in my extremely ugly hack in jquery.mCustomScrollbar.js.
		$('.scroll-container').mCustomScrollbar('scrollTo', [y, x], { timeout: 1 });
	},

	_onScrollVelocity: function (e) {
		if (e.vx === 0 && e.vy === 0) {
			clearInterval(this._autoScrollTimer);
			this._autoScrollTimer = null;
			this._map.isAutoScrolling = false;
		} else {
			clearInterval(this._autoScrollTimer);
			this._map.isAutoScrolling = true;
			this._autoScrollTimer = setInterval(L.bind(function() {
				this._onScrollBy({x: e.vx, y: e.vy});
			}, this), 100);
		}
	},

	_onHandleAutoScroll: function (e) {
		var vx = 0;
		var vy = 0;

		if (e.pos.y > e.map._size.y - 50) {
			vy = 50;
		} else if (e.pos.y < 50) {
			vy = -50;
		}
		if (e.pos.x > e.map._size.x - 50) {
			vx = 50;
		} else if (e.pos.x < 50) {
			vx = -50;
		}

		this._onScrollVelocity({vx: vx, vy: vy});
	},

	_onUpdateSize: function (e) {
		if (!this._mockDoc) {
			return;
		}

		// we need to avoid precision issues in comparison (in the end values are pixels)
		var newDocWidth = Math.ceil(e.x);
		var newDocHeight = Math.ceil(e.y);

		// for writer documents, ignore scroll while document size is being reduced
		if (this._map.getDocType() === 'text' && newDocHeight < this._prevDocHeight) {
			console.debug('_onUpdateSize: Ignore the scroll !');
			this._ignoreScroll = true;
		}
		L.DomUtil.setStyle(this._mockDoc, 'width', e.x + 'px');
		L.DomUtil.setStyle(this._mockDoc, 'height', e.y + 'px');

		// custom scrollbar plugin checks automatically for content height changes but not for content width changes
		// so we need to update scrollbars explicitly; moreover we want to avoid to have 'update' invoked twice
		// in case prevDocHeight !== newDocHeight
		if (this._prevDocWidth !== newDocWidth && this._prevDocHeight === newDocHeight) {
			$('.scroll-container').mCustomScrollbar('update');
		}

		// Don't get them through L.DomUtil.getStyle because precision is no more than 6 digits
		this._prevDocWidth = newDocWidth;
		this._prevDocHeight = newDocHeight;
	},

	_onUpdateScrollOffset: function (e) {
		// used on window resize
		if (this._map._docLayer._docType === 'spreadsheet') {
			var offset = new L.Point(e.x - this._prevScrollX, e.y - this._prevScrollY);
			if (offset.x === 0) {
				offset.x = 1;
			}
			if (offset.y === 0) {
				offset.y = 1;
			}
			this._onUpdateRowColumnHeaders({x: e.x, y: e.y, offset: offset});
		}
		this._ignoreScroll = null;
		$('.scroll-container').mCustomScrollbar('stop');
		this._prevScrollY = e.y;
		this._prevScrollX = e.x;
		$('.scroll-container').mCustomScrollbar('scrollTo', [e.y, e.x], {callbacks: false, timeout:0});
	},

	_onUpdateRowColumnHeaders: function(e) {
		var offset = e.offset || {};

		var topLeftPoint = new L.Point(e.x, e.y);
		var sizePx = this._map.getSize();

		if (topLeftPoint.x === undefined) {
			topLeftPoint.x = this._map._getTopLeftPoint().x;
		}
		if (topLeftPoint.y === undefined) {
			topLeftPoint.y = this._map._getTopLeftPoint().y;
		}

		if (offset.x === 0) {
			topLeftPoint.x = -1;
			sizePx.x = 0;
		}
		if (offset.y === 0) {
			topLeftPoint.y = -1;
			sizePx.y = 0;
		}

		var pos = this._map._docLayer._pixelsToTwips(topLeftPoint);
		var size = this._map._docLayer._pixelsToTwips(sizePx);
		var payload = 'commandvalues command=.uno:ViewRowColumnHeaders?x=' + Math.round(pos.x) + '&y=' + Math.round(pos.y) +
			'&width=' + Math.round(size.x) + '&height=' + Math.round(size.y);

		if (e.outline) {
			payload += '&columnOutline=' + e.outline.column + '&groupLevel=' + e.outline.level
				+ '&groupIndex=' + e.outline.index + '&groupHidden=' + e.outline.hidden;
		}

		this._map._socket.sendMessage(payload);
	}
});

L.control.scroll = function (options) {
	return new L.Control.Scroll(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.LokDialog used for displaying LOK dialogs
 */

/* global $ L Hammer w2ui */
L.WinUtil = {

};

var firstTouchPositionX = null;
var firstTouchPositionY = null;
var previousTouchType = null;

function updateTransformation(target) {
	if (target !== null && target !== undefined) {
		var value = [
			'translate3d(' + target.transformation.translate.x + 'px, ' + target.transformation.translate.y + 'px, 0)',
			'scale(' + target.transformation.scale + ', ' + target.transformation.scale + ')'
		];

		value = value.join(' ');
		target.value.style.webkitTransform = value;
		target.value.style.mozTransform = value;
		target.value.style.transform = value;
	}
}

var zoomTargets = [];

function findZoomTarget(id) {
	for (var item in zoomTargets) {
		if (zoomTargets[item].key === id) {
			return zoomTargets[item];
		}
	}
	return null;
}

function removeZoomTarget(id) {
	for (var item in zoomTargets) {
		if (zoomTargets[item].key === id) {
			delete zoomTargets[item];
		}
	}
}

function toZoomTargetId(id) {
	return id.replace('-canvas', '');
}

L.Control.LokDialog = L.Control.extend({

	dialogIdPrefix: 'lokdialog-',

	onPan: function (ev) {
		var id = toZoomTargetId(ev.target.id);
		var target = findZoomTarget(id);

		if (target) {
			var newX = target.initialState.startX + ev.deltaX;
			var newY = target.initialState.startY + ev.deltaY;

			// Don't allow to put dialog outside the view
			if (window.mode.isDesktop() &&
				(newX < -target.width/2 || newY < -target.height/2
				|| newX > window.innerWidth - target.width/2
				|| newY > window.innerHeight - target.height/2))
				return;

			target.transformation.translate = {
				x: newX,
				y: newY
			};

			updateTransformation(target);
		}
	},

	onPinch: function (ev) {
		var id = toZoomTargetId(ev.target.id);
		var target = findZoomTarget(id);

		if (target) {
			if (ev.type == 'pinchstart') {
				target.initialState.initScale = target.transformation.scale || 1;
			}

			if (target.initialState.initScale * ev.scale > 0.4) {
				target.transformation.scale = target.initialState.initScale * ev.scale;
			}

			updateTransformation(target);
		}
	},

	onAdd: function (map) {
		map.on('window', this._onDialogMsg, this);
		map.on('windowpaint', this._onDialogPaint, this);
		map.on('opendialog', this._openDialog, this);
		map.on('docloaded', this._docLoaded, this);
		map.on('closepopup', this.onCloseCurrentPopUp, this);
		map.on('editorgotfocus', this._onEditorGotFocus, this);
		L.DomEvent.on(document, 'mouseup', this.onCloseCurrentPopUp, this);
	},

	_dialogs: {},

	_docLoaded: function(e) {
		if (!e.status) {
			$('.lokdialog_container').remove();
			$('.lokdialogchild-canvas').remove();
		}
	},

	_getParentId: function(id) {
		id = parseInt(id);
		for (var winId in this._dialogs) {
			if (this._dialogs[winId].childid && this._dialogs[winId].childid === id) {
				return winId;
			}
		}
		return null;
	},

	_isOpen: function(id) {
		return this._dialogs[id] &&
			$('#' + this._toStrId(id)).length > 0;
	},

	// Given a prefixed dialog id like 'lokdialog-323', gives a raw id, 323.
	_toIntId: function(id) {
		if (typeof(id) === 'string')
			return parseInt(id.replace(this.dialogIdPrefix, ''));
		return id;
	},

	// Converts a raw dialog id like 432, to 'lokdialog-432'.
	_toStrId: function(id) {
		return this.dialogIdPrefix + id;
	},

	// Create a rectangle string of form "x,y,width,height"
	// if params are missing, assumes 0,0,dialog width, dialog height
	_createRectStr: function(id, x, y, width, height) {
		if (!width)
			width = this._dialogs[parseInt(id)].width;
		if (width <= 0)
			return null;
		if (!height)
			height = this._dialogs[parseInt(id)].height;
		if (height <= 0)
			return null;
		if (!x)
			x = 0;
		if (!y)
			y = 0;

		// pre-multiplied by the scale factor
		var dpiscale = L.getDpiScaleFactor();
		return [x * dpiscale, y * dpiscale, width * dpiscale, height * dpiscale].join(',');
	},

	_sendPaintWindow: function(id, rectangle) {
		if (!rectangle)
			return; // Don't request rendering an empty area.

		rectangle = rectangle.replace(/ /g, '');
		if (!rectangle)
			return; // Don't request rendering an empty area.

		var dpiscale = L.getDpiScaleFactor();
		//console.log('_sendPaintWindow: rectangle: ' + rectangle + ', dpiscale: ' + dpiscale);
		this._map._socket.sendMessage('paintwindow ' + id + ' rectangle=' + rectangle + ' dpiscale=' + dpiscale);
	},

	_sendCloseWindow: function(id) {
		this._map._socket.sendMessage('windowcommand ' + id + ' close');
	},

	_isRectangleValid: function(rect) {
		rect = rect.split(',');
		return (!isNaN(parseInt(rect[0])) && !isNaN(parseInt(rect[1])) &&
				parseInt(rect[2]) >= 0 && parseInt(rect[3]) >= 0);
	},

	_onDialogMsg: function(e) {
		e.id = parseInt(e.id);
		var strId = this._toStrId(e.id);

		var width = 0;
		var height = 0;
		if (e.size) {
			width = parseInt(e.size.split(',')[0]);
			height = parseInt(e.size.split(',')[1]);
		}

		var left = 0;
		var top = 0;
		if (e.position) {
			left = parseInt(e.position.split(',')[0]);
			top = parseInt(e.position.split(',')[1]);
		}

		if (e.action === 'created') {
			if (e.winType === 'dialog') {
				this._launchDialog(e.id, left, top, width, height, e.title);
			} else if (e.winType === 'child') {
				var parentId = parseInt(e.parentId);
				if (!this._isOpen(parentId))
					return;

				this._removeDialogChild(parentId);
				this._dialogs[parentId].childid = e.id;
				this._dialogs[parentId].childwidth = width;
				this._dialogs[parentId].childheight = height;
				this._dialogs[parentId].childx = left;
				this._dialogs[parentId].childy = top;
				this._createDialogChild(e.id, parentId, top, left);
				this._sendPaintWindow(e.id, this._createRectStr(null, 0, 0, width, height));
			}
		}

		// all other callbacks doens't make sense without an active dialog
		if (!(this._isOpen(e.id) || this._getParentId(e.id)))
			return;

		if (e.action === 'invalidate') {
			var parent = this._getParentId(e.id);
			var rectangle = e.rectangle;
			if (parent) { // this is a floating window
				rectangle = this._createRectStr(null, 0, 0, this._dialogs[parent].childwidth, this._dialogs[parent].childheight);
			} else if (rectangle) { // this is the actual dialog
				if (this._isRectangleValid(rectangle)) {
					rectangle = e.rectangle.split(',');
					x = parseInt(rectangle[0]);
					y = parseInt(rectangle[1]);
					width = parseInt(rectangle[2]);
					height = parseInt(rectangle[3]);

					rectangle = this._createRectStr(null, x, y, width, height);
				} else {
					return;
				}
			} else {
				rectangle = this._createRectStr(e.id);
			}
			this._sendPaintWindow(e.id, rectangle);
		} else if (e.action === 'size_changed') {
			// FIXME: we don't really have to destroy and launch the dialog again but do it for
			// now because the size sent to us previously in 'created' cb is not correct
			$('#' + strId).remove();
			this._launchDialog(e.id, null, null, width, height, this._dialogs[parseInt(e.id)].title);
		} else if (e.action === 'cursor_invalidate') {
			if (this._isOpen(e.id) && !!e.rectangle) {
				rectangle = e.rectangle.split(',');
				var x = parseInt(rectangle[0]);
				var y = parseInt(rectangle[1]);
				height = parseInt(rectangle[3]);

				this._updateDialogCursor(e.id, x, y, height);
			}
		} else if (e.action === 'title_changed') {
			if (e.title && this._dialogs[parseInt(e.id)]) {
				this._dialogs[parseInt(e.id)].title = e.title;
				$('#' + strId).dialog('option', 'title', e.title);
			}
		} else if (e.action === 'cursor_visible') {
			this._dialogs[e.id].cursorVisible = e.visible === 'true';
			if (this._dialogs[e.id].cursorVisible) {
				$('#' + strId + '-cursor').css({display: 'block'});
				this._map._onLostFocus();
			}
			else {
				$('#' + strId + '-cursor').css({display: 'none'});
			}
		} else if (e.action === 'close') {
			parent = this._getParentId(e.id);
			if (parent)
				this._onDialogChildClose(parent);
			else
				this._onDialogClose(e.id, false);
		} else if (e.action === 'hide') {
			$('#' + strId).parent().css({display: 'none'});
		} else if (e.action === 'show') {
			$('#' + strId).parent().css({display: 'block'});
		}
	},

	_openDialog: function(e) {
		this._map.sendUnoCommand(e.uno);
	},

	_updateDialogCursor: function(dlgId, x, y, height) {
		var strId = this._toStrId(dlgId);
		var dialogCursor = L.DomUtil.get(strId + '-cursor');
		L.DomUtil.setStyle(dialogCursor, 'height', height + 'px');
		L.DomUtil.setStyle(dialogCursor, 'display', this._dialogs[dlgId].cursorVisible ? 'block' : 'none');
		// set the position of the cursor container element
		L.DomUtil.setStyle(this._dialogs[dlgId].cursor, 'left', x + 'px');
		L.DomUtil.setStyle(this._dialogs[dlgId].cursor, 'top', y + 'px');

		// update the input as well
		this._updateDialogInput(dlgId);
	},

	_createDialogCursor: function(dialogId) {
		var id = this._toIntId(dialogId);
		this._dialogs[id].cursor = L.DomUtil.create('div', 'leaflet-cursor-container', L.DomUtil.get(dialogId));
		var cursor = L.DomUtil.create('div', 'leaflet-cursor lokdialog-cursor', this._dialogs[id].cursor);
		cursor.id = dialogId + '-cursor';
		L.DomUtil.addClass(cursor, 'blinking-cursor');
	},

	_createDialogInput: function(dialogId) {
		var id = this._toIntId(dialogId);
		var clipDlgContainer = L.DomUtil.create('div', 'clipboard-container', L.DomUtil.get(dialogId));
		clipDlgContainer.id = dialogId + '-clipboard-container';
		var dlgTextArea = L.DomUtil.create('input', 'clipboard', clipDlgContainer);
		dlgTextArea.setAttribute('type', 'text');
		dlgTextArea.setAttribute('autocorrect', 'off');
		dlgTextArea.setAttribute('autocapitalize', 'off');
		dlgTextArea.setAttribute('autocomplete', 'off');
		dlgTextArea.setAttribute('spellcheck', 'false');
		this._dialogs[id].input = dlgTextArea;

		return dlgTextArea;
	},

	_updateDialogInput: function(dlgId) {
		if (!this._dialogs[dlgId].input)
			return;

		var strId = this._toStrId(dlgId);
		var left = parseInt(L.DomUtil.getStyle(this._dialogs[dlgId].cursor, 'left'));
		var top = parseInt(L.DomUtil.getStyle(this._dialogs[dlgId].cursor, 'top'));
		var dlgContainer = L.DomUtil.get(strId + '-clipboard-container');
		L.DomUtil.setPosition(dlgContainer, new L.Point(left, top));
	},

	focus: function(dlgId) {
		if (!this._isOpen(dlgId) || !this._dialogs[dlgId].input)
			return;

		this._dialogs[dlgId].input.focus();
	},

	_setCanvasWidthHeight: function(canvas, width, height) {
		var scale = L.getDpiScaleFactor();
		var newWidth = width * scale;
		if (canvas.width != newWidth) {
			L.DomUtil.setStyle(canvas, 'width', width + 'px');
			canvas.width = newWidth;
		}

		var newHeight = height * scale;
		if (canvas.height != newHeight) {
			L.DomUtil.setStyle(canvas, 'height', height + 'px');
			canvas.height = newHeight;
		}
	},

	_launchDialog: function(id, leftTwips, topTwips, width, height, title) {
		if (window.ThisIsTheiOSApp)
			w2ui['editbar'].disable('closemobile');
		this.onCloseCurrentPopUp();
		var dialogContainer = L.DomUtil.create('div', 'lokdialog', document.body);
		L.DomUtil.setStyle(dialogContainer, 'padding', '0px');
		L.DomUtil.setStyle(dialogContainer, 'margin', '0px');
		L.DomUtil.setStyle(dialogContainer, 'touch-action', 'manipulate');

		var strId = this._toStrId(id);
		dialogContainer.id = strId;

		var dialogCanvas = L.DomUtil.create('canvas', 'lokdialog_canvas', dialogContainer);
		this._setCanvasWidthHeight(dialogCanvas, width, height);
		dialogCanvas.id = strId + '-canvas';

		var dialogClass = 'lokdialog_container';
		if (!title)
			dialogClass += ' lokdialog_notitle';

		var that = this;
		var size = $(window).width();
		$(dialogContainer).dialog({
			minWidth: Math.min(width, size.x),
			width: Math.min(width, size.x),
			maxHeight: $(window).height(),
			height: 'auto',
			title: title ? title : '',
			modal: false,
			closeOnEscape: true,
			resizable: false,
			dialogClass: dialogClass,
			close: function() {
				that._onDialogClose(id, true);
			}
		});

		if (leftTwips != null && topTwips != null) {
			// magic to re-calculate the position in twips to absolute pixel
			// position inside the #document-container
			var pixels = this._map._docLayer._twipsToPixels(new L.Point(leftTwips, topTwips));
			var origin = this._map.getPixelOrigin();
			var panePos = this._map._getMapPanePos();

			var left = pixels.x + panePos.x - origin.x;
			var top = pixels.y + panePos.y - origin.y;

			if (left >= 0 && top >= 0) {
				$(dialogContainer).dialog('option', 'position', { my: 'left top', at: 'left+' + left + ' top+' + top, of: '#document-container' });
			}
		}

		// don't show the dialog surround until we have the dialog content
		$(dialogContainer).parent().hide();

		// Override default minHeight, which can be too large for thin dialogs.
		L.DomUtil.setStyle(dialogContainer, 'minHeight', height + 'px');

		this._dialogs[id] = {
			width: width,
			height: height,
			title: title
		};

		// don't make 'TAB' focus on this button; we want to cycle focus in the lok dialog with each TAB
		$('.lokdialog_container button.ui-dialog-titlebar-close').attr('tabindex', '-1').blur();

		this._createDialogCursor(strId);
		var dlgInput = this._createDialogInput(strId);
		this._setupWindowEvents(id, dialogCanvas, dlgInput);
		this._setupGestures(id, dialogCanvas);

		this._currentId = id;
		this._sendPaintWindow(id, this._createRectStr(id));
	},

	_setupWindowEvents: function(id, canvas, dlgInput) {
		L.DomEvent.on(canvas, 'contextmenu', L.DomEvent.preventDefault);
		L.DomEvent.on(canvas, 'mousemove', function(e) {
			this._map.lastActiveTime = Date.now();
			this._postWindowMouseEvent('move', id, e.offsetX, e.offsetY, 1, 0, 0);
		}, this);
		L.DomEvent.on(canvas, 'mousedown mouseup', function(e) {
			L.DomEvent.stopPropagation(e);
			var buttons = 0;
			buttons |= e.button === this._map['mouse'].JSButtons.left ? this._map['mouse'].LOButtons.left : 0;
			buttons |= e.button === this._map['mouse'].JSButtons.middle ? this._map['mouse'].LOButtons.middle : 0;
			buttons |= e.button === this._map['mouse'].JSButtons.right ? this._map['mouse'].LOButtons.right : 0;
			// 'mousedown' -> 'buttondown'
			var lokEventType = e.type.replace('mouse', 'button');
			this._postWindowMouseEvent(lokEventType, id, e.offsetX, e.offsetY, 1, buttons, 0);
			dlgInput.focus();
		}, this);
		L.DomEvent.on(dlgInput,
		              'keyup keypress keydown compositionstart compositionupdate compositionend textInput',
		              function(e) {
			              e.originalEvent = e; // _onKeyDown fn below requires real event in e.originalEvent
			              this._map['keyboard']._onKeyDown(e,
			                                         L.bind(this._postWindowKeyboardEvent,
			                                                this,
			                                                id),
			                                         L.bind(this._postWindowCompositionEvent,
			                                                this,
			                                                id),
			                                         dlgInput);

			              // Keep map active while user is playing with window.
			              this._map.lastActiveTime = Date.now();
		              }, this);
		L.DomEvent.on(dlgInput, 'paste', function(e) {
			var clipboardData = e.clipboardData || window.clipboardData;
			var data, blob;

			L.DomEvent.preventDefault(e);
			if (clipboardData) {
				data = clipboardData.getData('text/plain') || clipboardData.getData('Text');
				if (data) {
					var cmd = {
						MimeType: {
							type: 'string',
							value: 'mimetype=text/plain;charset=utf-8'
						},
						Data: {
							type: '[]byte',
							value: data
						}
					};

					blob = new Blob(['windowcommand ' + id + ' paste ', unescape(encodeURIComponent(JSON.stringify(cmd)))]);
					this._map._socket.sendMessage(blob);
				}
			}
		}, this);
		L.DomEvent.on(dlgInput, 'contextmenu', function() {
			return false;
		});
	},

	_setupGestures: function(id, canvas) {
		var targetId = toZoomTargetId(canvas.id);
		var zoomTarget = $('#' + targetId).parent().get(0);

		var ratio = 1.0;
		var width = this._dialogs[id].width;
		var height = this._dialogs[id].height;
		var offsetX = 0;
		var offsetY = 0;

		if ((window.mode.isMobile() || window.mode.isTablet()) && width > window.screen.width) {
			ratio = window.screen.width / (width + 40);
			offsetX = -(width - window.screen.width) / 2;
			offsetY = -(height - window.screen.height) / 2;
		}

		var state = {
			startX: offsetX,
			startY: offsetY,
			initScale: ratio
		}
		var transformation = {
			translate: { x: offsetX, y: offsetY },
			scale: ratio,
			angle: 0,
			rx: 0,
			ry: 0,
			rz: 0
		};

		if (findZoomTarget(targetId) != null) {
			removeZoomTarget(targetId);
		}

		zoomTargets.push({key: targetId, value: zoomTarget, transformation: transformation, initialState: state, width:width, height: height});

		var hammerAll = new Hammer(canvas);
		hammerAll.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
		hammerAll.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([hammerAll.get('pan')]);

		hammerAll.on('panstart panmove', this.onPan);
		hammerAll.on('pinchstart pinchmove', this.onPinch);
		hammerAll.on('hammer.input', function(ev) {
			if (ev.isFinal) {
				var id = toZoomTargetId(ev.target.id);
				var target = findZoomTarget(id);
				if (target) {
					target.initialState.startX = target.transformation.translate.x;
					target.initialState.startY = target.transformation.translate.y;
				}
			}
		});

		updateTransformation(findZoomTarget(targetId));
	},

	_postWindowCompositionEvent: function(winid, type, text) {
		this._map._docLayer._postCompositionEvent(winid, type, text);
	},

	_postWindowMouseEvent: function(type, winid, x, y, count, buttons, modifier) {
		this._map._socket.sendMessage('windowmouse id=' + winid +  ' type=' + type +
		                              ' x=' + x + ' y=' + y + ' count=' + count +
		                              ' buttons=' + buttons + ' modifier=' + modifier);
	},

	_postWindowGestureEvent: function(winid, type, x, y, offset) {
		console.log('x ' + x + ' y ' + y + ' o ' + offset);
		this._map._socket.sendMessage('windowgesture id=' + winid +  ' type=' + type +
		                              ' x=' + x + ' y=' + y + ' offset=' + offset);
	},

	_postWindowKeyboardEvent: function(winid, type, charcode, keycode) {
		this._map._socket.sendMessage('windowkey id=' + winid + ' type=' + type +
		                              ' char=' + charcode + ' key=' + keycode);
	},

	_onDialogClose: function(dialogId, notifyBackend) {
		if (window.ThisIsTheiOSApp)
			w2ui['editbar'].enable('closemobile');
		if (notifyBackend)
			this._sendCloseWindow(dialogId);
		$('#' + this._toStrId(dialogId)).remove();
		this._map.focus();
		delete this._dialogs[dialogId];
		this._currentId = null;

		removeZoomTarget(this._toStrId(dialogId));
	},

	onCloseCurrentPopUp: function() {
		// for title-less dialog only (context menu, pop-up)
		if (!this._currentId || !this._isOpen(this._currentId) || this._dialogs[this._currentId].title)
			return;
		this._onDialogClose(this._currentId, true);
	},

	_onEditorGotFocus: function() {
		// We need to lose focus on any dialogs/sidebars currently with focus.
		for (var winId in this._dialogs) {
			$('#' + this._dialogs[winId].strId + '-cursor').css({display: 'none'});
		}
	},

	_paintDialog: function(parentId, rectangle, imgData) {

		var strId = this._toStrId(parentId);
		var canvas = document.getElementById(strId + '-canvas');
		if (!canvas)
			return; // no window to paint to

		var ctx = canvas.getContext('2d');

		var that = this;
		var img = new Image();
		img.onload = function() {
			var x = 0;
			var y = 0;
			if (rectangle) {
				rectangle = rectangle.split(',');
				x = parseInt(rectangle[0]);
				y = parseInt(rectangle[1]);
			}

			ctx.drawImage(img, x, y);

			// if dialog is hidden, show it
			var container = L.DomUtil.get(strId);
			if (container)
				$(container).parent().show();
			that.focus(parentId);
		};
		img.src = imgData;
	},

	// Binary dialog msg recvd from core
	_onDialogPaint: function (e) {
		var parentId = this._getParentId(e.id);
		if (parentId) {
			this._paintDialogChild(parentId, e.img);
		} else {
			this._paintDialog(e.id, e.rectangle, e.img);
		}
	},

	// Dialog Child Methods

	_paintDialogChild: function(parentId, imgData) {
		var strId = this._toStrId(parentId);
		var canvas = L.DomUtil.get(strId + '-floating');
		if (!canvas)
			return; // no floating window to paint to

		// The image is rendered per the HiDPI scale we used
		// while requesting rendering the image. Here we
		// set the canvas to have the actual size, while
		// the image is rendred with the HiDPI scale.
		this._setCanvasWidthHeight(canvas, this._dialogs[parentId].childwidth,
										   this._dialogs[parentId].childheight);

		var ctx = canvas.getContext('2d');
		var img = new Image();
		img.onload = function() {
			ctx.drawImage(img, 0, 0);
			$(canvas).show();
		};
		img.src = imgData;
	},

	_onDialogChildClose: function(dialogId) {
		$('#' + this._toStrId(dialogId) + '-floating').remove();
		// remove any extra height allocated for the parent container
		var canvas = document.getElementById(dialogId + '-canvas');
		if (!canvas)
			return;
		var canvasHeight = canvas.height;
		$('#' + dialogId).height(canvasHeight + 'px');
	},

	_removeDialogChild: function(id) {
		$('#' + this._toStrId(id) + '-floating').remove();
	},

	_createDialogChild: function(childId, parentId, top, left) {
		var strId = this._toStrId(parentId);
		var dialogContainer = L.DomUtil.get(strId).parentNode;
		var floatingCanvas = L.DomUtil.create('canvas', 'lokdialogchild-canvas', dialogContainer);
		$(floatingCanvas).hide(); // Hide to avoid flickering while we set the dimensions.

		// Since child windows are now top-level, their 'top' offset
		// needs adjusting. If we are in a dialog, our top is from the
		// dialog body, not the title bar, which is a separate div.
		// This doesn't apply for context menus, which don't have titles.
		var dialogTitle = $('.lokdialog_notitle');
		if (dialogTitle != null && dialogTitle.length == 0) {
			var dialogTitleBar = $('.ui-dialog-titlebar');
			top += dialogTitleBar.outerHeight();
		}

		floatingCanvas.id = strId + '-floating';
		L.DomUtil.setStyle(floatingCanvas, 'position', 'absolute');
		L.DomUtil.setStyle(floatingCanvas, 'left', (left - 1) + 'px'); // Align drop-down list with parent.
		L.DomUtil.setStyle(floatingCanvas, 'top', top + 'px');

		// attach events
		this._setupChildEvents(childId, floatingCanvas);
	},

	_setupChildEvents: function(childId, canvas) {
		L.DomEvent.on(canvas, 'contextmenu', L.DomEvent.preventDefault);

		L.DomEvent.on(canvas, 'touchstart touchmove touchend', function(e) {
			L.DomEvent.preventDefault(e);
			var rect = canvas.getBoundingClientRect();
			var touchX = (e.type === 'touchend') ? e.changedTouches[0].clientX : e.targetTouches[0].clientX;
			var touchY = (e.type === 'touchend') ? e.changedTouches[0].clientY : e.targetTouches[0].clientY;
			touchX = touchX - rect.x;
			touchY = touchY - rect.y;
			if (e.type === 'touchstart')
			{
				firstTouchPositionX = touchX;
				firstTouchPositionY = touchY;
				this._postWindowGestureEvent(childId, 'panBegin', firstTouchPositionX, firstTouchPositionY, 0);
			}
			else if (e.type === 'touchend')
			{
				this._postWindowGestureEvent(childId, 'panEnd', firstTouchPositionX, firstTouchPositionY, firstTouchPositionY - touchY);
				if (previousTouchType === 'touchstart') {
					// Simulate mouse click
					this._postWindowMouseEvent('buttondown', childId, firstTouchPositionX, firstTouchPositionY, 1, this._map['mouse'].LOButtons.left, 0);
					this._postWindowMouseEvent('buttonup', childId, firstTouchPositionX, firstTouchPositionY, 1, this._map['mouse'].LOButtons.left, 0);
				}
				firstTouchPositionX = null;
				firstTouchPositionY = null;

			}
			else if (e.type === 'touchmove')
			{
				this._postWindowGestureEvent(childId, 'panUpdate', firstTouchPositionX, firstTouchPositionY, firstTouchPositionY - touchY);
			}
			previousTouchType = e.type;
		}, this);

		L.DomEvent.on(canvas, 'mousedown mouseup', function(e) {
			var buttons = 0;
			buttons |= e.button === this._map['mouse'].JSButtons.left ? this._map['mouse'].LOButtons.left : 0;
			buttons |= e.button === this._map['mouse'].JSButtons.middle ? this._map['mouse'].LOButtons.middle : 0;
			buttons |= e.button === this._map['mouse'].JSButtons.right ? this._map['mouse'].LOButtons.right : 0;
			var lokEventType = e.type.replace('mouse', 'button');
			this._postWindowMouseEvent(lokEventType, childId, e.offsetX, e.offsetY, 1, buttons, 0);
		}, this);
		L.DomEvent.on(canvas, 'mousemove', function(e) {
			this._postWindowMouseEvent('move', childId, e.offsetX, e.offsetY, 1, 0, 0);
		}, this);
		L.DomEvent.on(canvas, 'contextmenu', function() {
			return false;
		});
	}

});

L.control.lokDialog = function (options) {
	return new L.Control.LokDialog(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Dialog used for displaying alerts
 */

/* global _ vex sanitizeUrl */
L.Control.AlertDialog = L.Control.extend({
	onAdd: function (map) {
		// TODO: Better distinction between warnings and errors
		map.on('error', this._onError, this);
		map.on('warn', this._onError, this);
	},

	_onError: function(e) {
		if (!this._map._fatal) {
			// TODO. queue message errors and pop-up dialogs
			// Close other dialogs before presenting a new one.
			vex.closeAll();
		}

		if (e.msg) {
			vex.dialog.alert(e.msg);
		}
		else if (e.cmd == 'load' && e.kind == 'docunloading') {
			// Handled by transparently retrying.
			return;
		} else if (e.cmd == 'openlink') {
			var url = e.url;
			var messageText = window.errorMessages.leaving;

			var isLinkValid = sanitizeUrl.sanitizeUrl(url) !== 'about:blank';

			if (!isLinkValid) {
				messageText = window.errorMessages.invalidLink;
			}

			messageText = messageText.replace('%url', url);
			var buttonsList = [];

			if (isLinkValid) {
				buttonsList.push({
					text: _('Open link'),
					type: 'button',
					className: 'vex-dialog-button-primary',
					click: function openClick () {
						window.open(url, '_blank');
						vex.closeAll();
					}
				});
			}

			buttonsList.push({
				text: _('Edit'),
				type: 'button',
				className: 'vex-dialog-button-secondary',
				click: function editClick () {
					e.map.toggleCommandState('HyperlinkDialog');
					vex.closeAll();
				}
			});

			vex.dialog.open({
				message: messageText,
				showCloseButton: true,
				buttons: buttonsList,
				callback: function() {},
				afterClose: function () {
					e.map.focus();
					e.map.enable(true);
				}
			});
		} else if (e.cmd && e.kind) {
			var msg = _('The server encountered a %0 error while parsing the %1 command.');
			msg = msg.replace('%0', e.kind);
			msg = msg.replace('%1', e.cmd);
			vex.dialog.alert(msg);
		}
	}
});

L.control.alertDialog = function (options) {
	return new L.Control.AlertDialog(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Infobar used for displaying non-annoying info messages
 */

/* global vex $ */
L.Control.Infobar = L.Control.extend({
	onAdd: function (map) {
		map.on('infobar', this._onInfobar, this);
	},

	_onInfobar: function(e) {
		if (!e.msg)
			return;

		var buttons = [];
		var callback = function() {};
		if (e.actionLabel && e.action) {
			buttons.push($.extend({}, vex.dialog.buttons.YES, { text: e.actionLabel }));
			callback = function (value) {
				if (value === false) // close btn clicked
					return;

				if (e.action.startsWith('http')) { // We have a link
					var win = window.open(e.action, '_blank');
					win.focus();
				}
			}
		}

		vex.dialog.open({
			message: e.msg,
			className: 'vex-theme-bottom-right-corner',
			showCloseButton: true,
			buttons: buttons,
			callback: callback
		});
	}
});

L.control.infobar = function (options) {
	return new L.Control.Infobar(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Attribution is used for displaying attribution on the map (added by default).
 */

L.Control.Attribution = L.Control.extend({
	options: {
		position: 'bottomright',
		prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		L.setOptions(this, options);
	},

	onAdd: function () {
		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
			L.DomEvent.disableClickPropagation(this._container);
		}

		this._update();

		return this._container;
	},

	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		this._container.innerHTML = this.options.prefix;
	}
});

L.control.attribution = function (options) {
	return new L.Control.Attribution(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Scale is used for displaying metric/imperial scale on the map.
 */

L.Control.Scale = L.Control.extend({
	options: {
		position: 'bottomleft',
		maxWidth: 100,
		metric: true,
		imperial: true
		// updateWhenIdle: false
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = L.DomUtil.create('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = L.DomUtil.create('div', className, container);
		}
		if (options.imperial) {
			this._iScale = L.DomUtil.create('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = L.CRS.Earth.distance(
				map.containerPointToLatLng([0, y]),
				map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});

L.control.scale = function (options) {
	return new L.Control.Scale(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Layers is a control to allow users to switch between different layers on the map.
 */

L.Control.Layers = L.Control.extend({
	options: {
		collapsed: true,
		position: 'topright',
		autoZIndex: true,
		hideSingleBase: false
	},

	initialize: function (baseLayers, overlays, options) {
		L.setOptions(this, options);

		this._layers = {};
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function () {
		this._initLayout();
		this._update();

		return this._container;
	},

	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return this._update();
	},

	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return this._update();
	},

	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		delete this._layers[L.stamp(layer)];
		return this._update();
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = L.DomUtil.create('div', className);

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		if (!L.Browser.touch) {
			L.DomEvent
				.disableClickPropagation(container)
				.disableScrollPropagation(container);
		} else {
			L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
		}

		var form = this._form = L.DomUtil.create('form', className + '-list');

		if (this.options.collapsed) {
			if (!L.Browser.android) {
				L.DomEvent.on(container, {
					mouseenter: this._expand,
					mouseleave: this._collapse
				}, this);
			}

			var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
			link.href = '#';
			link.title = 'Layers';

			if (L.Browser.touch) {
				L.DomEvent
				    .on(link, 'click', L.DomEvent.stop)
				    .on(link, 'click', this._expand, this);
			} else {
				L.DomEvent.on(link, 'focus', this._expand, this);
			}

			// work around for Firefox Android issue https://github.com/Leaflet/Leaflet/issues/2033
			L.DomEvent.on(form, 'click', function () {
				setTimeout(L.bind(this._onInputClick, this), 0);
			}, this);

			this._map.on('click', this._collapse, this);
			// TODO keyboard accessibility
		} else {
			this._expand();
		}

		this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
		this._separator = L.DomUtil.create('div', className + '-separator', form);
		this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

		container.appendChild(form);
	},

	_addLayer: function (layer, name, overlay) {
		layer.on('add remove', this._onLayerChange, this);

		var id = L.stamp(layer);

		this._layers[id] = {
			layer: layer,
			name: name,
			overlay: overlay
		};

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}
	},

	_update: function () {
		if (!this._container) { return this; }

		L.DomUtil.empty(this._baseLayersList);
		L.DomUtil.empty(this._overlaysList);

		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i in this._layers) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var overlay = this._layers[L.stamp(e.target)].overlay;

		var type = overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, e.target);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}

		input.layerId = L.stamp(obj.layer);

		L.DomEvent.on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		label.appendChild(input);
		label.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		return label;
	},

	_onInputClick: function () {
		var inputs = this._form.getElementsByTagName('input'),
		    input, layer, hasLayer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = 0, len = inputs.length; i < len; i++) {
			input = inputs[i];
			layer = this._layers[input.layerId].layer;
			hasLayer = this._map.hasLayer(layer);

			if (input.checked && !hasLayer) {
				addedLayers.push(layer);

			} else if (!input.checked && hasLayer) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			this._map.removeLayer(removedLayers[i]);
		}
		for (i = 0; i < addedLayers.length; i++) {
			this._map.addLayer(addedLayers[i]);
		}

		this._handlingClick = false;

		this._map.focus();
	},

	_expand: function () {
		L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
	},

	_collapse: function () {
		L.DomUtil.removeClass(this._container, 'leaflet-control-layers-expanded');
	}
});

L.control.layers = function (baseLayers, overlays, options) {
	return new L.Control.Layers(baseLayers, overlays, options);
};

/* -*- js-indent-level: 8 -*- */
L.Map.include({
	search: function (text, backward, replaceString,  command, expand) {
		if (backward === undefined) {
			backward = false;
		}
		if (command === undefined) {
			command = 0;
		}
		if (replaceString === undefined) {
			replaceString = '';
		}
		if (this._docLayer._searchResults && text !== this._docLayer._searchTerm)
		{
			this._docLayer._clearSearchResults();
		}

		var searchCmd = {
			'SearchItem.SearchString': {
				'type': 'string'
			},
			'SearchItem.ReplaceString': {
				'type': 'string'
			},
			'SearchItem.Backward': {
				'type': 'boolean'
			},
			'SearchItem.SearchStartPointX': {
				'type': 'long'
			},
			'SearchItem.SearchStartPointY': {
				'type': 'long'
			},
			'SearchItem.Command': {
				'type': 'long'
			}
		};

		this.fire('clearselection');
		var viewTopLeftpx = this.project(this.getBounds().getNorthWest());
		var docBoundsTopLeft = this.project(this.options.maxBounds.getNorthWest());
		var topLeft = this.unproject(new L.Point(
				Math.max(viewTopLeftpx.x, docBoundsTopLeft.x),
				Math.max(viewTopLeftpx.y, docBoundsTopLeft.y)));
		var topLeftTwips = this._docLayer._latLngToTwips(topLeft);

		var searchStartPointX = topLeftTwips.x;
		var searchStartPointY = topLeftTwips.y;
		if (this._docLayer && this._docLayer._lastSearchResult && expand) {
			var strTwips = this._docLayer._lastSearchResult.twipsRectangles.match(/\d+/g);
			if (strTwips != null) {
				searchStartPointX = strTwips[0];
				searchStartPointY = strTwips[1];
			}
			this.resetSelection();
		}

		searchCmd['SearchItem.SearchString'].value = text;
		searchCmd['SearchItem.Backward'].value = backward;
		searchCmd['SearchItem.ReplaceString'].value = replaceString;
		searchCmd['SearchItem.SearchStartPointX'].value = searchStartPointX;
		searchCmd['SearchItem.SearchStartPointY'].value = searchStartPointY;
		searchCmd['SearchItem.Command'].value = command;
		this._searchRequested = true;
		this._socket.sendMessage('uno .uno:ExecuteSearch ' + JSON.stringify(searchCmd));
	},

	highlightAll: function (text) {
		if (this._docLayer._searchResults && text === this._docLayer._searchTerm) {
			return;
		}
		this.search(text, false, 1);
	},

	resetSelection: function () {
		this._docLayer._clearSearchResults();
		this._socket.sendMessage('resetselection');
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Document permission handler
 */
/* global $ */
L.Map.include({
	setPermission: function (perm) {
		if (perm === 'edit') {
			if (L.Browser.mobile) {
				var button = $('#mobile-edit-button');
				button.show();
				button.off('click');

				var that = this;
				button.on('click', function () {
					button.hide();
					that._enterEditMode('edit');
					that.fire('editorgotfocus');
					// In the iOS app, just clicking the mobile-edit-button is
					// not reason enough to pop up the on-screen keyboard.
					if (!window.ThisIsTheiOSApp)
						that.focus();
				});

				// temporarily, before the user touches the floating action button
				this._enterReadOnlyMode('readonly');
			}
			else {
				this._enterEditMode(perm);
			}
		}
		else if (perm === 'view' || perm === 'readonly') {
			if (L.Browser.mobile) {
				$('#mobile-edit-button').hide();
			}

			this._enterReadOnlyMode(perm);
		}
	},

	_enterEditMode: function (perm) {
		if (this._permission == 'readonly' && L.Browser.mobile) {
			this.sendInitUNOCommands();
		}
		this._permission = perm;

		this._socket.sendMessage('requestloksession');
		if (!L.Browser.touch) {
			this.dragging.disable();
		}

		this.fire('updatepermission', {perm : perm});
	},

	_enterReadOnlyMode: function (perm) {
		this._permission = perm;

		this.dragging.enable();
		// disable all user interaction, will need to add keyboard too
		this._docLayer._onUpdateCursor();
		this._docLayer._clearSelections();
		this._docLayer._onUpdateTextSelection();

		this.fire('updatepermission', {perm : perm});
	},

	enableSelection: function () {
		if (this._permission === 'edit') {
			return;
		}
		this._socket.sendMessage('requestloksession');
		this.dragging.disable();
	},

	disableSelection: function () {
		if (this._permission === 'edit') {
			return;
		}
		this.dragging.enable();
	},

	isSelectionEnabled: function () {
		return !this.dragging.enabled();
	},

	getPermission: function () {
		return this._permission;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Toolbar handler
 */

/* global $ window vex sanitizeUrl brandProductName brandProductURL _ */
L.Map.include({

	// a mapping of uno commands to more readable toolbar items
	unoToolbarCommands: [
		'.uno:StyleApply',
		'.uno:CharFontName'
	],

	_modalDialogOptions: {
		overlayClose:true,
		opacity: 80,
		overlayCss: {
			backgroundColor : '#000'
		},
		containerCss: {
			overflow : 'hidden',
			backgroundColor : '#fff',
			padding : '20px',
			border : '2px solid #000'
		}
	},

	applyFont: function (fontName) {
		if (this.getPermission() === 'edit') {
			var msg = 'uno .uno:CharFontName {' +
				'"CharFontName.FamilyName": ' +
					'{"type": "string", "value": "' + fontName + '"}}';
			this._socket.sendMessage(msg);
		}
	},

	applyFontSize: function (fontSize) {
		if (this.getPermission() === 'edit') {
			var msg = 'uno .uno:FontHeight {' +
				'"FontHeight.Height": ' +
				'{"type": "float", "value": "' + fontSize + '"}}';
			this._socket.sendMessage(msg);
		}
	},

	getToolbarCommandValues: function (command) {
		if (this._docLayer) {
			return this._docLayer._toolbarCommandValues[command];
		}

		return undefined;
	},

	downloadAs: function (name, format, options, id) {
		if (this._fatal) {
			return;
		}

		id = id || 'export'; // not any special download, simple export

		if ((id === 'print' && this['wopi'].DisablePrint) ||
		    (id === 'export' && this['wopi'].DisableExport)) {
			this.hideBusy();
			return;
		}

		if (format === undefined || format === null) {
			format = '';
		}
		if (options === undefined || options === null) {
			options = '';
		}

		this.showBusy(_('Downloading...'), false);
		this._socket.sendMessage('downloadas ' +
			'name=' + encodeURIComponent(name) + ' ' +
			'id=' + id + ' ' +
			'format=' + format + ' ' +
			'options=' + options);
	},

	print: function () {
		if (window.ThisIsTheiOSApp) {
			window.postMobileMessage('PRINT');
		} else {
			this.showBusy(_('Downloading...'), false);
			this.downloadAs('print.pdf', 'pdf', null, 'print');
		}
	},

	saveAs: function (url, format, options) {
		if (url === undefined || url == null) {
			return;
		}
		if (format === undefined || format === null) {
			format = '';
		}
		if (options === undefined || options === null) {
			options = '';
		}

		this.showBusy(_('Saving...'), false);
		this._socket.sendMessage('saveas ' +
			'url=wopi:' + encodeURIComponent(url) + ' ' +
			'format=' + format + ' ' +
			'options=' + options);
	},

	renameFile: function (filename) {
		if (!filename) {
			return;
		}
		this.showBusy(_('Renaming...'), false);
		this._socket.sendMessage('renamefile filename=' + encodeURIComponent(filename));
	},

	applyStyle: function (style, familyName) {
		if (!style || !familyName) {
			this.fire('error', {cmd: 'setStyle', kind: 'incorrectparam'});
			return;
		}
		if (this._permission === 'edit') {
			var msg = 'uno .uno:StyleApply {' +
					'"Style":{"type":"string", "value": "' + style + '"},' +
					'"FamilyName":{"type":"string", "value":"' + familyName + '"}' +
					'}';
			this._socket.sendMessage(msg);
		}
	},

	applyLayout: function (layout) {
		if (!layout) {
			this.fire('error', {cmd: 'setLayout', kind: 'incorrectparam'});
			return;
		}
		if (this._permission === 'edit') {
			var msg = 'uno .uno:AssignLayout {' +
					'"WhatPage":{"type":"unsigned short", "value": "' + this.getCurrentPartNumber() + '"},' +
					'"WhatLayout":{"type":"unsigned short", "value": "' + layout + '"}' +
					'}';
			this._socket.sendMessage(msg);
		}
	},

	save: function(dontTerminateEdit, dontSaveIfUnmodified) {
		this._socket.sendMessage('save' +
		                         ' dontTerminateEdit=' + (dontTerminateEdit ? 1 : 0) +
		                         ' dontSaveIfUnmodified=' + (dontSaveIfUnmodified ? 1 : 0));
	},

	sendUnoCommand: function (command, json) {
		if (this._permission === 'edit') {
			this._socket.sendMessage('uno ' + command + (json ? ' ' + JSON.stringify(json) : ''));
		}
	},

	toggleCommandState: function (unoState) {
		if (this._permission === 'edit') {
			if (!unoState.startsWith('.uno:')) {
				unoState = '.uno:' + unoState;
			}
			this.sendUnoCommand(unoState);
		}
	},

	insertFile: function (file) {
		this.fire('insertfile', {file: file});
	},

	insertURL: function (url) {
		this.fire('inserturl', {url: url});
	},

	cellEnterString: function (string) {
		var command = {
			'StringName': {
				type: 'string',
				value: string
			},
			'DontCommit': {
				type: 'boolean',
				value: true
			}
		};

		this.sendUnoCommand('.uno:EnterString ', command);
	},

	renderFont: function (fontName) {
		this._socket.sendMessage('renderfont font=' + window.encodeURIComponent(fontName));
	},

	showLOKeyboardHelp: function() {
		var w;
		var iw = window.innerWidth;
		if (iw < 768) {
			w = iw - 30;
		}
		else if (iw > 1920) {
			w = 960;
		}
		else {
			w = iw / 5 + 590;
		}
		var map = this;
		$.get('loleaflet-help.html', function(data) {
			vex.open({
				unsafeContent: data,
				showCloseButton: true,
				escapeButtonCloses: true,
				overlayClosesOnClick: true,
				buttons: {},
				afterOpen: function() {
					var that = this;
					var $vexContent = $(this.contentEl);
					this.contentEl.style.width = w + 'px'
					map.enable(false);
					// Display help according to document opened
					if (map.getDocType() === 'text') {
						document.getElementById('text-shortcuts').style.display='block';
					}
					else if (map.getDocType() === 'spreadsheet') {
						document.getElementById('spreadsheet-shortcuts').style.display='block';
					}
					else if (map.getDocType() === 'presentation' || map.getDocType() === 'drawing') {
						document.getElementById('presentation-shortcuts').style.display='block';
					}

					// Lets translate
					var i, max;
					var translatableContent = $vexContent.find('h1');
					for (i = 0, max = translatableContent.length; i < max; i++) {
						translatableContent[i].firstChild.nodeValue = translatableContent[i].firstChild.nodeValue.toLocaleString();
					}
					translatableContent = $vexContent.find('h2');
					for (i = 0, max = translatableContent.length; i < max; i++) {
						translatableContent[i].firstChild.nodeValue = translatableContent[i].firstChild.nodeValue.toLocaleString();
					}
					translatableContent = $vexContent.find('td');
					for (i = 0, max = translatableContent.length; i < max; i++) {
						translatableContent[i].firstChild.nodeValue = translatableContent[i].firstChild.nodeValue.toLocaleString();
					}
					translatableContent = $vexContent.find('p');
					for (i = 0, max = translatableContent.length; i < max; i++) {
						translatableContent[i].firstChild.nodeValue = translatableContent[i].firstChild.nodeValue.toLocaleString();
					}

					$vexContent.attr('tabindex', -1);
					$vexContent.focus();
					// workaround for https://github.com/HubSpot/vex/issues/43
					$('.vex-overlay').css({ 'pointer-events': 'none'});
					$vexContent.one('click', function(e) {
						that.close();
						e.stopPropagation();
					});
				},
				beforeClose: function () {
					map.focus();
					map.enable(true);
				}
			});
		});
	},

	showLOAboutDialog: function() {
		// Move the div sitting in 'body' as vex-content and make it visible
		var content = $('#about-dialog').clone().css({display: 'block'});
		// fill product-name and product-string
		var productName;
		if (window.ThisIsAMobileApp) {
			productName = window.MobileAppName;
		} else {
			productName = (typeof brandProductName !== 'undefined') ? brandProductName : 'LibreOffice Online';
		}
		var productURL = (typeof brandProductURL !== 'undefined') ? brandProductURL : 'https://libreoffice.org';
		content.find('#product-name').text(productName);
		var productString = _('This version of %productName is powered by');
		var productNameWithURL = '<a href="' + sanitizeUrl.sanitizeUrl(productURL) +
								 '" target="_blank">' + productName + '</a>';
		content.find('#product-string').html(productString.replace('%productName', productNameWithURL));

		var w;
		var iw = window.innerWidth;
		if (iw < 768) {
			w = iw - 30;
		}
		else if (iw > 1920) {
			w = 960;
		}
		else {
			w = iw / 5 + 590;
		}
		var map = this;
		var handler = function(event) {
			if (event.keyCode === 68) {
				map._docLayer.toggleTileDebugMode();
			}
		};
		vex.open({
			unsafeContent: content[0].outerHTML,
			showCloseButton: true,
			escapeButtonCloses: true,
			overlayClosesOnClick: true,
			buttons: {},
			afterOpen: function() {
				var that = this;
				this.contentEl.style.width = w + 'px';
				var $vexContent = $(this.contentEl);
				map.enable(false);
				$(window).bind('keyup.vex', handler);
				// workaround for https://github.com/HubSpot/vex/issues/43
				$('.vex-overlay').css({ 'pointer-events': 'none'});
				$vexContent.one('click', function(e) {
					that.close();
					e.stopPropagation();
				});
			},
			beforeClose: function () {
				$(window).unbind('keyup.vex', handler)
				map.enable(true);
				map.focus();
			}
		});
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Document Signing
 */

/* global window setupViamAPI w2ui vex Promise $ _ */

var library = null;
var identity = null;
var currentPassport = null;
var passportCertificates = [];

var oldtoolbarSize = null;
var _map = null;
var currentDocumentSigningStatus = 'N/A'

var awaitForDocumentStatusToUpload = false;
var currentDocumentType = null;

function isSuccess(result) {
	return result.code == '200';
}

function haveIdentity() {
	return identity != null;
}

function getVereignWopiURL() {
	var vereignURL = window.documentSigningURL == null ? '' : window.documentSigningURL;
	return vereignURL + '/wopi/';
}

function getVereignApiURL() {
	var vereignURL = window.documentSigningURL == null ? '' : window.documentSigningURL;
	return vereignURL + '/api/';
}

function getVereignIFrameURL() {
	var vereignURL = window.documentSigningURL == null ? '' : window.documentSigningURL;
	return vereignURL + '/vcl/js/iframe';
}

function randomName() {
	return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

function getCurrentDocumentFilename(documentType) {
	var filename = _map['wopi'].BaseFileName;
	if (!filename)
		filename = randomName() + '.' + documentType;
	return filename;
}

function updateIndentity() {
	if (library && identity) {
		library.getIdentityProfile(identity.authentication.publicKey).then(function(result) {
			var initials = result.data.initials;
			var color = result.data.identityColor;
			w2ui['document-signing-bar'].get('identity').html = '<p style="background-color: ' + color + '; border: none; color: white; padding: 8px; text-align: center; text-decoration: none; display: inline-block; font-size: 12px; margin: 4px 2px; border-radius: 50%;">' + initials + '</p>';
			w2ui['document-signing-bar'].refresh();
		});
	}
	else {
		w2ui['document-signing-bar'].get('identity').html = '';
		w2ui['document-signing-bar'].refresh();
	}
}

function addPassportToToolbar(passport, i) {
	var name = null;
	try {
		name = passport['claims']['passportName']['tags']['notag']['value']['value'];
	}
	catch (exception) {
		console.log(exception);
		name = 'Unknown ' + (i+1);
	}

	w2ui['document-signing-bar'].get('passport').items.push(
		{ text: name, id: 'item ' + (i+1), value: passport.uuid }
	);

	var promise = library.getCertificateByPassport(passport.uuid);
	promise = promise.then(function(result) {
		if (isSuccess(result)) {
			var chain = result.data.chain;
			for (var i = 0; i < chain.length; i++) {
				if (passportCertificates.indexOf(chain[i]) == -1) {
					passportCertificates.push(chain[i]);
				}
			}
			passportCertificates.push(result.data.x509Certificate);
		}
	});
	return promise;
}

function checkCurrentDocument() {
	var certificates = {
		certificates: passportCertificates
	};
	var blob = new Blob(['asksignaturestatus\n', JSON.stringify(certificates)]);
	if (_map) {
		_map._socket.sendMessage(blob);
	}
}

function updatePassportList() {
	if (library) {
		library.passportListPassports().then(function(result) {
			if (isSuccess(result))
			{
				passportCertificates = [];
				w2ui['document-signing-bar'].get('passport').items = [];
				var passports = result.data;
				var promises = [];
				for (var i = 0; i < passports.length; i++) {
					promises.push(addPassportToToolbar(passports[i], i));
				}
				// wait for all promises to complete
				Promise.all(promises).then(function() {
					updateCurrentPassport();
					checkCurrentDocument();
					adjustUIState();
				});
			}
		});
	}
}

function updateCurrentPassport() {
	if (!haveIdentity())
		return;
	if (currentPassport) {
		w2ui['document-signing-bar'].get('current-passport').html = '<p>' + currentPassport.text + '</p>';
	}
	adjustUIState();
}

function adjustUIState() {
	if (w2ui['document-signing-bar'] === undefined)
		return;

	if (library && identity) {
		w2ui['document-signing-bar'].show('passport');
		w2ui['document-signing-bar'].show('passport-break');

		if (currentPassport) {
			w2ui['document-signing-bar'].show('current-passport');
			w2ui['document-signing-bar'].show('sign-upload');
			w2ui['document-signing-bar'].show('sign-upload-break');
		}
		else {
			w2ui['document-signing-bar'].hide('current-passport');
			w2ui['document-signing-bar'].hide('sign-upload');
			w2ui['document-signing-bar'].hide('sign-upload-break');
		}

		w2ui['document-signing-bar'].show('identity');
		w2ui['document-signing-bar'].hide('login');
	}
	else {
		w2ui['document-signing-bar'].hide('passport');
		w2ui['document-signing-bar'].hide('current-passport');
		w2ui['document-signing-bar'].hide('passport-break');
		w2ui['document-signing-bar'].hide('sign-upload-break');
		w2ui['document-signing-bar'].hide('sign-upload');

		w2ui['document-signing-bar'].hide('identity');
		if (library)
			w2ui['document-signing-bar'].show('login');
		else
			w2ui['document-signing-bar'].hide('login');
	}

	w2ui['document-signing-bar'].get('current-document-status').html = '<p>' + currentDocumentSigningStatus + '</p>';
	w2ui['document-signing-bar'].refresh();
}

function vereignLoadIdentity(selectedIdentityKey, pincode) {
	library.loadIdentity(selectedIdentityKey, pincode).then(function(result) {
		if (isSuccess(result)) {
			identity = result.data;
			vereignLogin();
		}
		else {
			identity = null;
			vereignPinCodeDialog(selectedIdentityKey);
		}
	});
}

function vereignPinCodeDialog(selectedIdentityKey) {
	vex.dialog.open({
		message: _('Please enter the PIN Code'),
		input: '<input name="pincode" type="password" value="" required />',
		callback: function(data) {
			if (library && data.pincode != null && data.pincode != '') {
				vereignLoadIdentity(selectedIdentityKey, data.pincode);
			}
		}
	});
}

function vereignLogin() {
	if (library && identity) {
		library.login(identity, 'previousaddeddevice').then(function(result) {
			if (isSuccess(result)) {
				updatePassportList();
				updateIndentity();
				adjustUIState();
			}
			else {
				vex.dialog.alert(_('Error at login.'));
				console.log('Error at login of previousa added device');
				console.log(result);
				identity = null;
			}
		});
	}
}

function verignNewIdentity(newIdentity) {
	library.login(newIdentity, 'newdevice', '', '').then(function(result) {
		if (isSuccess(result)) {
			vex.open({
				content: '<p>' + _('Please scan the code') + '</p><p><div id="image-container"></div></p>',
				showCloseButton: true,
				escapeButtonCloses: true,
				overlayClosesOnClick: true,
				buttons: {},
				afterOpen: function() {
					var $vexContent = $(this.contentEl);
					var container = $vexContent.find('#image-container');
					var image = $('<img style="display: block; margin-left: auto; margin-right: auto"/>');
					image.attr('src', result.data.image);
					container.append(image);
				}
			});
		}
		else {
			vex.dialog.alert(_('Couldn\'t get the QR code image.'));
			console.log('Error getting the QR code');
			console.log(result);
			library.clearIdentities();
		}
	});
}

function verignQrDialog() {
	if (library == null) {
		return;
	}
	library.createIdentity('00000000').then(function(result) {
		if (isSuccess(result)) {
			verignNewIdentity(result.data);
		}
	});
}

function vereignRecoverFromEmail(emailOrSMS) {
	library.createIdentity('00000000').then(function(result) {
		if (!isSuccess(result)) {
			return;
		}
		var createdIdentity = result.data;
		library.identityRestoreAccess(result.data, emailOrSMS).then(function(result) {
			if (!isSuccess(result)) {
				vex.dialog.alert(_('Error when trying to restore access to identity.'));
				console.log('Error at IdentityRestoreAccess');
				console.log(result);
				return;
			}
			vex.dialog.open({
				message: _('PIN Code'),
				input: '<p>' + _('Please enter the PIN code from the EMail or SMS') + '</p><input name="pincode" type="password" value="" required />',
				callback: function(data) {
					if (data.pincode) {
						library.login(createdIdentity, 'sms', data.pincode, '').then(function(result) {
							if (isSuccess(result)) {
								vereignRestoreIdentity();
							}
						});
					}
				}
			});
		});
	});
}

function vereignRecoverFromEmailDialog() {
	if (library == null) {
		return;
	}
	vex.dialog.open({
		message: _('Login from email or mobile number'),
		input: '<input name="emailOrMobileNumber" type="text" value="" required />',
		callback: function(data) {
			if (data.emailOrMobileNumber) {
				vereignRecoverFromEmail(data.emailOrMobileNumber);
			}
		}
	});
}

function vereignRestoreIdentity() {
	if (library == null) {
		return;
	}
	library.getCurrentlyAuthenticatedIdentity().then(function(result) {
		if (isSuccess(result)) {
			identity = result.data;
			vex.closeAll();
			updateIndentity();
			updatePassportList();
			adjustUIState();
		}
	});
}

function vereignSignAndUploadDocument() {
	if (library == null) {
		return;
	}
	if (currentPassport == null) {
		return;
	}
	vex.dialog.open({
		message: _('Select document type to upload'),
		input: _('Type:') + '<select name="selection"><option value="ODT">ODT</option><option value="DOCX">DOCX</option><option value="PDF">PDF</option></select>',
		callback: function(data) {
			vereignSignAndUploadForType(data.selection);
		}
	});
}

function vereignUpload(documentType) {
	if (library == null || documentType == null) {
		return;
	}

	var filename = getCurrentDocumentFilename(documentType);

	library.getPassports(filename).then(function(result) {
		if (!isSuccess(result)) {
			return;
		}
		var resultArray = result.data;
		for (var i = 0; i < resultArray.length; i++) {
			if (currentPassport.uuid == resultArray[i].PassportUUID) {
				var jsonRequest = {
					filename: filename,
					wopiUrl: getVereignWopiURL() + 'files',
					token: resultArray[i].AccessToken,
					type: documentType
				};
				var blob = new Blob(['uploadsigneddocument\n', JSON.stringify(jsonRequest)]);
				_map._socket.sendMessage(blob);
				// Let the user know that we're done.
				_map.fire('infobar', {
					msg: _('Document uploaded.') + '\n\n' + filename,
					action: null,
					actionLabel: null
				});
			}
		}
	});
}

function vereignExportSignAndUploadToVereign(documentType) {
	library.getOneTimeCertificateByPassport(currentPassport.uuid).then(function(result) {
		if (!isSuccess(result)) {
			return;
		}
		var otp = result.data;
		var filename = getCurrentDocumentFilename(documentType);
		library.getPassports(filename).then(function(result) {
			if (!isSuccess(result)) {
				return;
			}
			var resultArray = result.data;
			for (var i = 0; i < resultArray.length; i++) {
				if (currentPassport.uuid == resultArray[i].PassportUUID) {
					var parameters = {
						x509Certificate: otp.x509Certificate,
						privateKey: otp.privateKey,
						chain: otp.chain,
						filename: filename,
						wopiUrl: getVereignWopiURL() + 'files',
						token: resultArray[i].AccessToken,
						type: documentType
					}
					var blob = new Blob(['exportsignanduploaddocument\n', JSON.stringify(parameters)]);
					_map._socket.sendMessage(blob);
				}
			}
		});
	});
}

function vereignSignAndUploadForType(uploadDocType) {
	var documentType = null;

	switch (uploadDocType) {
	case 'ODT':
		documentType = 'odt';
		break;
	case 'DOCX':
		documentType = 'docx';
		break;
	case 'PDF':
		documentType = 'pdf';
		break;
	}

	if (documentType == null)
		return;

	if (uploadDocType == 'PDF' || uploadDocType == 'DOCX' || uploadDocType == 'ODT') {
		vereignExportSignAndUploadToVereign(documentType);
	}
	else {
		library.getOneTimeCertificateByPassport(currentPassport.uuid).then(function(result) {
			if (isSuccess(result)) {
				var otp = result.data;
				var blob = new Blob(['signdocument\n', JSON.stringify(otp)]);
				_map._socket.sendMessage(blob);
				awaitForDocumentStatusToUpload = true;
				currentDocumentType = documentType;
				checkCurrentDocument();
			}
		});
	}
}

L.Map.include({
	showSignDocument: function() {
		$('#document-signing-bar').show();
		this.initializeLibrary();
		oldtoolbarSize = $('#document-container').css('top');

		$('#document-container').css('top', '116px');

		// Avoid scroll button ">>"
		var el = w2ui['document-signing-bar'];
		if (el)
			el.resize();
	},
	hideSignToolbar: function() {
		$('#document-signing-bar').hide();
		library = null;
		identity = null;
		currentPassport = null;
		$('#document-container').css('top', oldtoolbarSize);
	},
	signingInitializeBar: function() {
		$('#document-signing-bar').hide();
		adjustUIState();
	},
	signingLogout: function() {
		if (library) {
			library.logout().then(function() {
				identity = null;
				currentPassport = null;
				updateIndentity();
				adjustUIState();
			});
		}
	},
	signingLogin: function() {
		var w = window.innerWidth / 2;

		var loginWithQR = false;
		var recoverFromEmail = false;
		var selectedIdentityKey = null;

		$.get('signing-identities.html', function(data) {
			vex.open({
				content: data,
				showCloseButton: true,
				escapeButtonCloses: true,
				overlayClosesOnClick: true,
				buttons: {},
				afterOpen: function() {
					var that = this;
					this.contentEl.style.width = w + 'px';
					var $vexContent = $(this.contentEl);
					$('#select-identity').text(_('Select identity:'));
					$('#login-qr').text(_('Login from mobile'));
					$('#recover-from-email').text(_('Recover from email'));
					library.listIdentities().then(function(response) {
						var identities = response.data;
						var identitiesDiv = $vexContent.find('#identites');
						for (var key in identities) {
							var button = $('<input class="identity-button" type="button"/>');
							button.attr('value', identities[key].initials);
							button.css('background-color', identities[key].identityColor);
							button.click({ key: key }, function(current) {
								selectedIdentityKey = current.data.key;
								that.close();
							});
							identitiesDiv.append(button);
						}
					});
					$('#login-qr').click(function() {
						loginWithQR = true;
						that.close();
					});
					$('#recover-from-email').click(function() {
						recoverFromEmail = true;
						that.close();
					});
				},
				afterClose: function () {
					if (loginWithQR) {
						verignQrDialog();
					}
					else if (recoverFromEmail) {
						vereignRecoverFromEmailDialog();
					}
					else if (selectedIdentityKey) {
						vereignLoadIdentity(selectedIdentityKey, '00000000');
					}
				}
			});
		});
	},
	initializeLibrary: function() {
		var vereignURL = window.documentSigningURL == null ? '' : window.documentSigningURL;
		if (vereignURL.length == 0)
			return;
		_map = this;
		setupViamAPI(
			'signdocument-iframe-content',
			{
				onEvent: function(event) {
					switch (event.type) {
					case 'ActionConfirmedAndExecuted':
						console.log('event ActionConfirmedAndExecuted');
						break;
					case 'IdentityNotLoaded':
						vereignLoadIdentity(event.payloads[0], '00000000');
						break;
					case 'Authenticated':
						console.log('event Authenticated');
						vereignRestoreIdentity();
						break;
					case 'Logout':
						console.log('event Logout');
						_map.signingLogout();
						break;
					case 'QRCodeUpdated':
						console.log('event QRCodeUpdated');
						break;
					default:
						console.log('UNKNOWN EVENT: ' + event.type);
						break;
					}
				}
			},
			getVereignIFrameURL(),
			getVereignApiURL(),
			getVereignWopiURL()
		).then(function(lib) {
			library = lib;
			adjustUIState();
		});
	},
	setCurrentPassport: function(uuid, text) {
		if (library && identity && uuid) {
			currentPassport = { uuid: uuid, text: text };
			updateCurrentPassport();
			library.passportGetAvatarByPassport(uuid).then(function(result) {
				console.log(result); // TODO
			});
			adjustUIState();
		}
	},
	handleSigningClickEvent: function(id, item) {
		if (id === 'close-document-signing-bar') {
			this.signingLogout();
			this.hideSignToolbar();
		}
		else if (id === 'login' || id === 'identity') {
			this.signingLogin();
		}
		else if (id === 'sign-upload') {
			vereignSignAndUploadDocument();
		}
		else if (id.startsWith('passport:')) {
			this.setCurrentPassport(item.value, item.text);
		}
		return false;
	},
	setupSigningToolbarItems: function() {
		return [
				{type: 'html',  id: 'logo', html: '<a href="http://www.vereign.com" target="_blank"><img src="images/vereign.png" style="padding-right: 16px; padding-left: 6px; height: 32px"/></a>' },
				{type: 'menu', id: 'passport', caption: _('Select passport'), items: []},
				{type: 'html', id: 'current-passport', html: _('Passport: N/A')},
				{type: 'break', id: 'passport-break' },
				{type: 'button',  id: 'sign-upload',  caption: _('Sign'), img: '', hint: _('Sign document')},
				{type: 'break', id: 'sign-upload-break' },
				{type: 'html', id: 'current-document-status-label', html: '<p><b>' + _('Status:') + '&nbsp;</b></p>'},
				{type: 'html', id: 'current-document-status', html: _('N/A')},
				{type: 'spacer'},
				{type: 'html', id: 'identity', html: ''},
				{type: 'button',  id: 'login',  caption: _('Login'), img: '', hint: _('Login')},
				{type: 'button',  id: 'close-document-signing-bar', img: 'closetoolbar', hint: _('Close')}];
	},
	onChangeSignStatus: function(signstatus) {
		var statusText = '';
		// This is meant to be in sync with core.git
		// include/sfx2/signaturestate.hxx, SignatureState.
		switch (signstatus) {
		case '0':
			currentDocumentSigningStatus = _('Not Signed');
			break;
		case '1':
			statusText = _('This document is digitally signed and the signature is valid.');
			currentDocumentSigningStatus = _('Signed and validated');
			break;
		case '2':
			statusText = _('This document has an invalid signature.');
			currentDocumentSigningStatus = _('Signature broken');
			break;
		case '3':
			statusText = _('The signature was valid, but the document has been modified');
			currentDocumentSigningStatus = _('Signed but document modified');
			break;
		case '4':
			statusText = _('The signature is OK, but the certificate could not be validated.');
			currentDocumentSigningStatus = _('Signed but not validated');
			break;
		case '5':
			statusText = _('The signature is OK, but the document is only partially signed');
			currentDocumentSigningStatus = _('Signed but not all files are signed');
			break;
		}

		if (statusText) {
			this.fire('infobar', {
				msg: statusText,
				action: null,
				actionLabel: null
			});
		}

		adjustUIState();

		if (awaitForDocumentStatusToUpload) {
			awaitForDocumentStatusToUpload = false;
			vereignUpload(currentDocumentType);
		}
		awaitForDocumentStatusToUpload = false;
		currentDocumentType = null;
	},
	onVereignUploadStatus: function(uploadStatus) {
		if (uploadStatus == 'OK') {
			_map.fire('infobar', {
				msg: _('Document uploaded.'),
				action: null,
				actionLabel: null
			});
		}
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Document parts switching handler
 */
L.Map.include({
	setPart: function (part, external, calledFromSetPartHandler) {
		var docLayer = this._docLayer;
		docLayer._prevSelectedPart = docLayer._selectedPart;
		if (part === 'prev') {
			if (docLayer._selectedPart > 0) {
				docLayer._selectedPart -= 1;
			}
		}
		else if (part === 'next') {
			if (docLayer._selectedPart < docLayer._parts - 1) {
				docLayer._selectedPart += 1;
			}
		}
		else if (typeof (part) === 'number' && part >= 0 && part < docLayer._parts) {
			docLayer._selectedPart = part;
		}
		else {
			return;
		}
		if (docLayer.isCursorVisible()) {
			// a click outside the slide to clear any selection
			this._socket.sendMessage('resetselection');
		}
		this.fire('updateparts', {
			selectedPart: docLayer._selectedPart,
			parts: docLayer._parts,
			docType: docLayer._docType
		});

		// If this wasn't triggered from the server,
		// then notify the server of the change.
		if (!external) {
			this._socket.sendMessage('setclientpart part=' + docLayer._selectedPart);
		}
		docLayer.eachView(docLayer._viewCursors, docLayer._onUpdateViewCursor, docLayer);
		docLayer.eachView(docLayer._cellViewCursors, docLayer._onUpdateCellViewCursor, docLayer);
		docLayer.eachView(docLayer._graphicViewMarkers, docLayer._onUpdateGraphicViewSelection, docLayer);
		docLayer.eachView(docLayer._viewSelections, docLayer._onUpdateTextViewSelection, docLayer);
		docLayer._clearSelections(calledFromSetPartHandler);
		docLayer._updateOnChangePart();
		docLayer._pruneTiles();
		docLayer._prevSelectedPartNeedsUpdate = true;
		if (docLayer._invalidatePreview) {
			docLayer._invalidatePreview();
		}
		docLayer._drawSearchResults();
		if (!this._searchRequested) {
			this.focus();
		}
	},

	getPreview: function (id, index, maxWidth, maxHeight, options) {
		if (!this._docPreviews) {
			this._docPreviews = {};
		}
		var autoUpdate = options ? !!options.autoUpdate : false;
		var forAllClients = options ? !!options.broadcast : false;
		this._docPreviews[id] = {id: id, index: index, maxWidth: maxWidth, maxHeight: maxHeight, autoUpdate: autoUpdate, invalid: false};

		var docLayer = this._docLayer;
		if (docLayer._docType === 'text') {
			return;
		}
		else {
			var part = index;
			var tilePosX = 0;
			var tilePosY = 0;
			var tileWidth = docLayer._docWidthTwips;
			var tileHeight = docLayer._docHeightTwips;
		}
		var docRatio = tileWidth / tileHeight;
		var imgRatio = maxWidth / maxHeight;
		// fit into the given rectangle while maintaining the ratio
		if (imgRatio > docRatio) {
			maxWidth = Math.round(tileWidth * maxHeight / tileHeight);
		}
		else {
			maxHeight = Math.round(tileHeight * maxWidth / tileWidth);
		}

		var dpiscale = L.getDpiScaleFactor();
		if (forAllClients) {
			dpiscale = 2; // some may be hidpi, and it is fine to send the hi-dpi slide preview to non-hpi clients
		}

		this._socket.sendMessage('tile ' +
							'part=' + part + ' ' +
							'width=' + maxWidth * dpiscale + ' ' +
							'height=' + maxHeight * dpiscale + ' ' +
							'tileposx=' + tilePosX + ' ' +
							'tileposy=' + tilePosY + ' ' +
							'tilewidth=' + tileWidth + ' ' +
							'tileheight=' + tileHeight + ' ' +
							'id=' + id + ' ' +
							'broadcast=' + (forAllClients ? 'yes' : 'no'));

		return {width: maxWidth, height: maxHeight};
	},

	getCustomPreview: function (id, part, width, height, tilePosX, tilePosY, tileWidth, tileHeight, options) {
		if (!this._docPreviews) {
			this._docPreviews = {};
		}
		var autoUpdate = options ? options.autoUpdate : false;
		this._docPreviews[id] = {id: id, part: part, width: width, height: height, tilePosX: tilePosX,
			tilePosY: tilePosY, tileWidth: tileWidth, tileHeight: tileHeight, autoUpdate: autoUpdate, invalid: false};

		var dpiscale = L.getDpiScaleFactor();

		this._socket.sendMessage('tile ' +
							'part=' + part + ' ' +
							'width=' + width * dpiscale + ' ' +
							'height=' + height * dpiscale + ' ' +
							'tileposx=' + tilePosX + ' ' +
							'tileposy=' + tilePosY + ' ' +
							'tilewidth=' + tileWidth + ' ' +
							'tileheight=' + tileHeight + ' ' +
							'id=' + id + ' ' +
							'broadcast=no');
	},

	removePreviewUpdate: function (id) {
		if (this._docPreviews && this._docPreviews[id]) {
			this._docPreviews[id].autoUpdate = false;
		}
	},

	goToPage: function (page) {
		var docLayer = this._docLayer;
		if (page === 'prev') {
			if (docLayer._currentPage > 0) {
				docLayer._currentPage -= 1;
			}
		}
		else if (page === 'next') {
			if (docLayer._currentPage < docLayer._pages - 1) {
				docLayer._currentPage += 1;
			}
		}
		else if (typeof (page) === 'number' && page >= 0 && page < docLayer._pages) {
			docLayer._currentPage = page;
		}
		if (this._permission !== 'edit' && docLayer._partPageRectanglesPixels.length > docLayer._currentPage) {
			// we can scroll to the desired page without having a LOK instance
			var pageBounds = docLayer._partPageRectanglesPixels[docLayer._currentPage];
			var pos = new L.Point(
					pageBounds.min.x + (pageBounds.max.x - pageBounds.min.x) / 2,
					pageBounds.min.y);
			pos.y -= this.getSize().y / 4; // offset by a quater of the viewing area so that the previous page is visible
			this.scrollTop(pos.y, {update: true});
			this.scrollLeft(pos.x, {update: true});
		}
		else {
			this._socket.sendMessage('setpage page=' + docLayer._currentPage);
		}
		this.fire('pagenumberchanged', {
			currentPage: docLayer._currentPage,
			pages: docLayer._pages,
			docType: docLayer._docType
		});
	},

	insertPage: function(nPos) {
		if (this.getDocType() === 'presentation') {
			this._socket.sendMessage('uno .uno:InsertPage');
		}
		else if (this.getDocType() === 'spreadsheet') {
			var command = {
				'Name': {
					'type': 'string',
					'value': ''
				},
				'Index': {
					'type': 'long',
					'value': nPos + 1
				}
			};

			this._socket.sendMessage('uno .uno:Insert ' + JSON.stringify(command));
		}
		else {
			return;
		}

		var docLayer = this._docLayer;

		this.fire('insertpage', {
			selectedPart: docLayer._selectedPart,
			parts:        docLayer._parts
		});

		docLayer._parts++;

		// Since we know which part we want to set, use the index (instead of 'next', 'prev')
		if (typeof nPos === 'number') {
			this.setPart(nPos);
		}
		else {
			this.setPart('next');
		}
	},

	duplicatePage: function() {
		if (this.getDocType() !== 'presentation') {
			return;
		}
		this._socket.sendMessage('uno .uno:DuplicatePage');
		var docLayer = this._docLayer;

		this.fire('insertpage', {
			selectedPart: docLayer._selectedPart,
			parts:        docLayer._parts
		});

		docLayer._parts++;
		this.setPart('next');
	},

	deletePage: function (nPos) {
		if (this.getDocType() === 'presentation') {
			this._socket.sendMessage('uno .uno:DeletePage');
		}
		else if (this.getDocType() === 'spreadsheet') {
			var command = {
				'Index': {
					'type': 'long',
					'value': nPos + 1
				}
			};

			this._socket.sendMessage('uno .uno:Remove ' + JSON.stringify(command));
		}
		else {
			return;
		}

		var docLayer = this._docLayer;
		// TO DO: Deleting all the pages causes problem.
		if (docLayer._parts === 1) {
			return;
		}

		if (this.getDocType() === 'spreadsheet' && docLayer._parts <= docLayer.hiddenParts() + 1) {
			return;
		}

		this.fire('deletepage', {
			selectedPart: docLayer._selectedPart,
			parts:        docLayer._parts
		});

		docLayer._parts--;
		if (docLayer._selectedPart >= docLayer._parts) {
			docLayer._selectedPart--;
		}

		if (typeof nPos === 'number') {
			this.setPart(nPos);
		}
		else {
			this.setPart(docLayer._selectedPart);
		}
	},

	renamePage: function (name, nPos) {
		if (this.getDocType() === 'spreadsheet') {
			var command = {
				'Name': {
					'type': 'string',
					'value': name
				},
				'Index': {
					'type': 'long',
					'value': nPos + 1
				}
			};

			this._socket.sendMessage('uno .uno:Name ' + JSON.stringify(command));
			this.setPart(this._docLayer);
		}
	},

	showPage: function () {
		if (this.getDocType() === 'spreadsheet' && this.hasAnyHiddenPart()) {
			this._socket.sendMessage('uno .uno:Show');
		}
	},

	hidePage: function () {
		if (this.getDocType() === 'spreadsheet' && this.getNumberOfVisibleParts() > 1) {
			this._socket.sendMessage('uno .uno:Hide');
		}
	},

	isHiddenPart: function (part) {
		if (this.getDocType() !== 'spreadsheet')
			return false;
		return this._docLayer.isHiddenPart(part);
	},

	hasAnyHiddenPart: function () {
		if (this.getDocType() !== 'spreadsheet')
			return false;
		return this._docLayer.hasAnyHiddenPart();
	},

	getNumberOfPages: function () {
		return this._docLayer._pages;
	},

	getNumberOfParts: function () {
		return this._docLayer._parts;
	},

	getNumberOfVisibleParts: function () {
		return this.getNumberOfParts() - this._docLayer.hiddenParts();
	},

	getHiddenPartNames: function () {
		var partNames = this._docLayer._partNames;
		var names = [];
		for (var i = 0; i < partNames.length; ++i) {
			if (this.isHiddenPart(i))
				names.push(partNames[i]);
		}
		return names.join(',');
	},

	getCurrentPageNumber: function () {
		return this._docLayer._currentPage;
	},

	getCurrentPartNumber: function () {
		return this._docLayer._selectedPart;
	},

	getDocSize: function () {
		return this._docLayer._docPixelSize;
	},

	getDocType: function () {
		if (!this._docLayer)
			return null;

		return this._docLayer._docType;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Scroll methods
 */
L.Map.include({
	scroll: function (x, y, options) {
		if (typeof (x) !== 'number' || typeof (y) !== 'number') {
			return;
		}
		this._setUpdateOffsetEvt(options);
		this.panBy(new L.Point(x, y), {animate: false});
	},

	scrollDown: function (y, options) {
		this.scroll(0, y, options);
	},

	scrollRight: function (x, options) {
		this.scroll(x, 0, options);
	},

	scrollOffset: function () {
		var center = this.project(this.getCenter());
		var centerOffset = center.subtract(this.getSize().divideBy(2));
		var offset = {};
		offset.x = centerOffset.x < 0 ? 0 : Math.round(centerOffset.x);
		offset.y = centerOffset.y < 0 ? 0 : Math.round(centerOffset.y);
		return offset;
	},

	scrollTop: function (y, options) {
		this._setUpdateOffsetEvt(options);
		var offset = this.scrollOffset();
		console.debug('scrollTop: ' + y + ' ' + offset.y + ' ' + (y - offset.y));
		this.panBy(new L.Point(0, y - offset.y), {animate: false});
	},

	scrollLeft: function (x, options) {
		this._setUpdateOffsetEvt(options);
		var offset = this.scrollOffset();
		this.panBy(new L.Point(x - offset.x, 0), {animate: false});
	},

	_setUpdateOffsetEvt: function (e) {
		if (e && e.update === true) {
			this.on('moveend', this._docLayer._updateScrollOffset, this._docLayer);
		}
		else {
			this.off('moveend', this._docLayer._updateScrollOffset, this._docLayer);
		}
	},

	fitWidthZoom: function (maxZoom) {
		if (this._docLayer) {
			this._docLayer._fitWidthZoom(null, maxZoom);
		}
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Objects containing LO style mappings
 */

L.Styles = {
	/* eslint no-dupe-keys:0 */
	// Programming names -> UI names mapping
	styleMappings: {
		'Default':'Default',
		'Result':'Result',
		'Result2':'Result2',
		'Heading':'Heading',
		'Heading1':'Heading1',
		'Default':'Default',
		'Report':'Report',
		'standard':'Default',
		'objectwitharrow':'Object with arrow',
		'objectwithshadow':'Object with shadow',
		'objectwithoutfill':'Object without fill',
		'Object with no fill and no line':'Object with no fill and no line',
		'text':'Text',
		'textbody':'Text body',
		'textbodyjustfied':'Text body justified',
		'textbodyindent':'First line indent',
		'title':'Title',
		'title1':'Title1',
		'title2':'Title2',
		'headline':'Heading',
		'headline1':'Heading1',
		'headline2':'Heading2',
		'measure':'Dimension Line',
		'Normal':'Normal',
		'Heading 1':'Heading 1',
		'Heading 2':'Heading 2',
		'Heading 3':'Heading 3',
		'Numbering Symbols':'Numbering Symbols',
		'Bullets':'Bullets',
		'Table Contents':'Table Contents',
		'Quotations':'Quotations',
		'Index':'Index',
		'Caption':'Caption',
		'List':'List',
		'Text Body':'Text Body',
		'default':'default',
		'gray1':'gray1',
		'gray2':'gray2',
		'gray3':'gray3',
		'bw1':'bw1',
		'bw2':'bw2',
		'bw3':'bw3',
		'orange1':'orange1',
		'orange2':'orange2',
		'orange3':'orange3',
		'turquoise1':'turquoise1',
		'turquoise2':'turquoise2',
		'turquoise3':'turquoise3',
		'blue1':'blue1',
		'blue2':'blue2',
		'blue3':'blue3',
		'sun1':'sun1',
		'sun2':'sun2',
		'sun3':'sun3',
		'earth1':'earth1',
		'earth2':'earth2',
		'earth3':'earth3',
		'green1':'green1',
		'green2':'green2',
		'green3':'green3',
		'seetang1':'seetang1',
		'seetang2':'seetang2',
		'seetang3':'seetang3',
		'lightblue1':'lightblue1',
		'lightblue2':'lightblue2',
		'lightblue3':'lightblue3',
		'yellow1':'yellow1',
		'yellow2':'yellow2',
		'yellow3':'yellow3',
		'default':'default',
		'bw':'bw',
		'orange':'orange',
		'turquoise':'turquoise',
		'blue':'blue',
		'sun':'sun',
		'earth':'earth',
		'green':'green',
		'seetang':'seetang',
		'lightblue':'lightblue',
		'yellow':'yellow',
		'background':'Background',
		'backgroundobjects':'Background objects',
		'notes':'Notes',
		'outline1':'Outline 1',
		'outline2':'Outline 2',
		'outline3':'Outline 3',
		'outline4':'Outline 4',
		'outline5':'Outline 5',
		'outline6':'Outline 6',
		'outline7':'Outline 7',
		'outline8':'Outline 8',
		'outline9':'Outline 9',
		'subtitle':'Subtitle',
		'title':'Title',
		'Clear formatting':'Clear formatting',
		'Default Style':'Default Style',
		'Bullet Symbols':'Bullets',
		'Numbering Symbols':'Numbering Symbols',
		'Footnote Symbol':'Footnote Characters',
		'Page Number':'Page Number',
		'Caption characters':'Caption Characters',
		'Drop Caps':'Drop Caps',
		'Internet link':'Internet Link',
		'Visited Internet Link':'Visited Internet Link',
		'Placeholder':'Placeholder',
		'Index Link':'Index Link',
		'Endnote Symbol':'Endnote Characters',
		'Line numbering':'Line Numbering',
		'Main index entry':'Main Index Entry',
		'Footnote anchor':'Footnote Anchor',
		'Endnote anchor':'Endnote Anchor',
		'Rubies':'Rubies',
		'Vertical Numbering Symbols':'Vertical Numbering Symbols',
		'Emphasis':'Emphasis',
		'Citation':'Quotation',
		'Strong Emphasis':'Strong Emphasis',
		'Source Text':'Source Text',
		'Example':'Example',
		'User Entry':'User Entry',
		'Variable':'Variable',
		'Definition':'Definition',
		'Teletype':'Teletype',
		'Text body':'Text Body',
		'Quotations':'Quotations',
		'Title':'Title',
		'Subtitle':'Subtitle',
		'Heading 1':'Heading 1',
		'Heading 2':'Heading 2',
		'Heading 3':'Heading 3',
		'Standard':'Default Style',
		'Heading':'Heading',
		'List':'List',
		'Caption':'Caption',
		'Index':'Index',
		'Table Contents':'Table Contents',
		'First line indent':'First Line Indent',
		'Hanging indent':'Hanging Indent',
		'Text body indent':'Text Body Indent',
		'Salutation':'Complimentary Close',
		'Signature':'Signature',
		'List Indent':'List Indent',
		'Marginalia':'Marginalia',
		'Heading 4':'Heading 4',
		'Heading 5':'Heading 5',
		'Heading 6':'Heading 6',
		'Heading 7':'Heading 7',
		'Heading 8':'Heading 8',
		'Heading 9':'Heading 9',
		'Heading 10':'Heading 10',
		'Numbering 1 Start':'Numbering 1 Start',
		'Numbering 1':'Numbering 1',
		'Numbering 1 End':'Numbering 1 End',
		'Numbering 1 Cont.':'Numbering 1 Cont.',
		'Numbering 2 Start':'Numbering 2 Start',
		'Numbering 2':'Numbering 2',
		'Numbering 2 End':'Numbering 2 End',
		'Numbering 2 Cont.':'Numbering 2 Cont.',
		'Numbering 3 Start':'Numbering 3 Start',
		'Numbering 3':'Numbering 3',
		'Numbering 3 End':'Numbering 3 End',
		'Numbering 3 Cont.':'Numbering 3 Cont.',
		'Numbering 4 Start':'Numbering 4 Start',
		'Numbering 4':'Numbering 4',
		'Numbering 4 End':'Numbering 4 End',
		'Numbering 4 Cont.':'Numbering 4 Cont.',
		'Numbering 5 Start':'Numbering 5 Start',
		'Numbering 5':'Numbering 5',
		'Numbering 5 End':'Numbering 5 End',
		'Numbering 5 Cont.':'Numbering 5 Cont.',
		'List 1 Start':'List 1 Start',
		'List 1':'List 1',
		'List 1 End':'List 1 End',
		'List 1 Cont.':'List 1 Cont.',
		'List 2 Start':'List 2 Start',
		'List 2':'List 2',
		'List 2 End':'List 2 End',
		'List 2 Cont.':'List 2 Cont.',
		'List 3 Start':'List 3 Start',
		'List 3':'List 3',
		'List 3 End':'List 3 End',
		'List 3 Cont.':'List 3 Cont.',
		'List 4 Start':'List 4 Start',
		'List 4':'List 4',
		'List 4 End':'List 4 End',
		'List 4 Cont.':'List 4 Cont.',
		'List 5 Start':'List 5 Start',
		'List 5':'List 5',
		'List 5 End':'List 5 End',
		'List 5 Cont.':'List 5 Cont.',
		'Index Heading':'Index Heading',
		'Index 1':'Index 1',
		'Index 2':'Index 2',
		'Index 3':'Index 3',
		'Index Separator':'Index Separator',
		'Contents Heading':'Contents Heading',
		'Contents 1':'Contents 1',
		'Contents 2':'Contents 2',
		'Contents 3':'Contents 3',
		'Contents 4':'Contents 4',
		'Contents 5':'Contents 5',
		'User Index Heading':'User Index Heading',
		'User Index 1':'User Index 1',
		'User Index 2':'User Index 2',
		'User Index 3':'User Index 3',
		'User Index 4':'User Index 4',
		'User Index 5':'User Index 5',
		'Contents 6':'Contents 6',
		'Contents 7':'Contents 7',
		'Contents 8':'Contents 8',
		'Contents 9':'Contents 9',
		'Contents 10':'Contents 10',
		'Illustration Index Heading':'Illustration Index Heading',
		'Illustration Index 1':'Illustration Index 1',
		'Object index heading':'Object Index Heading',
		'Object index 1':'Object Index 1',
		'Table index heading':'Table Index Heading',
		'Table index 1':'Table Index 1',
		'Bibliography Heading':'Bibliography Heading',
		'Bibliography 1':'Bibliography 1',
		'User Index 6':'User Index 6',
		'User Index 7':'User Index 7',
		'User Index 8':'User Index 8',
		'User Index 9':'User Index 9',
		'User Index 10':'User Index 10',
		'Header':'Header',
		'Header left':'Header Left',
		'Header right':'Header Right',
		'Footer':'Footer',
		'Footer left':'Footer Left',
		'Footer right':'Footer Right',
		'Table Heading':'Table Heading',
		'Illustration':'Illustration',
		'Table':'Table',
		'Text':'Text',
		'Frame contents':'Frame Contents',
		'Footnote':'Footnote',
		'Addressee':'Addressee',
		'Sender':'Sender',
		'Endnote':'Endnote',
		'Drawing':'Drawing',
		'Preformatted Text':'Preformatted Text',
		'Horizontal Line':'Horizontal Line',
		'List Contents':'List Contents',
		'List Heading':'List Heading',
		'Standard':'Default Style',
		'First Page':'First Page',
		'Left Page':'Left Page',
		'Right Page':'Right Page',
		'Envelope':'Envelope',
		'Index':'Index',
		'HTML':'HTML',
		'Footnote':'Footnote',
		'Endnote':'Endnote',
		'Landscape':'Landscape',
		'Graphics':'Graphics',
		'Frame':'Frame',
		'OLE':'OLE',
		'Formula':'Formula',
		'Marginalia':'Marginalia',
		'Watermark':'Watermark',
		'Labels':'Labels',
		'Numbering 1':'Numbering 1',
		'Numbering 2':'Numbering 2',
		'Numbering 3':'Numbering 3',
		'Numbering 4':'Numbering 4',
		'Numbering 5':'Numbering 5',
		'List 1':'List 1',
		'List 2':'List 2',
		'List 3':'List 3',
		'List 4':'List 4',
		'List 5':'List 5'
	},

	impressLayout : [
		{id: 0, text: 'Title Slide'},
		{id: 1, text: 'Title, Content'},
		{id: 3, text: 'Title and 2 Content'},
		{id: 19, text: 'Title Only'},
		{id: 20, text: 'Blank Slide'},
		{id: 32, text: 'Centered Text'},
		{id: 12, text: 'Title, Content and 2 Content'},
		{id: 15, text: 'Title, 2 Content and Content'},
		{id: 16, text: 'Title, 2 Content over Content'},
		{id: 14, text: 'Title, Content over Content'},
		{id: 18, text: 'Title, 4 Content'},
		{id: 34, text: 'Title, 6 Content'},
		{id: 27, text: 'Vertical Title, Text, Chart'},
		{id: 28, text: 'Vertical Title, Vertical Text'},
		{id: 29, text: 'Title, Vertical Text'},
		{id: 30, text: 'Title, Vertical Text, Clipart'}
	],

	insertMode : {
		'true'  : 'Insert',
		'false' : 'Overwrite'
	},

	selectionMode : [
		'Standard selection',
		'Extending selection',
		'Adding selection',
		'Block selection'
	]
};

/* -*- js-indent-level: 8 -*- */
/*
 * Ruler Handler
 */

/* global $ L _ */
L.Control.Ruler = L.Control.extend({
	options: {
		interactive: true,
		marginSet: false,
		displayNumber: true,
		tileMargin: 18,
		extraSize: 0,
		margin1: null,
		margin2: null,
		nullOffset: null,
		pageOffset: null,
		pageWidth: null,
		unit: null,
		DraggableConvertRatio: null,
		timer: null
	},

	onAdd: function(map) {
		map.on('rulerupdate', this._updateOptions, this);
		map.on('docsize', this._updatePaintTimer, this);
		map.on('scrolloffset resize', this._fixOffset, this);
		map.on('updatepermission', this._changeInteractions, this);
		this._map = map;

		return this._initLayout();
	},

	_updatePaintTimer: function(e) {
		if (e.extraSize)
			this.options.extraSize = e.extraSize.x;
		clearTimeout(this.options.timer);
		this.options.timer = setTimeout(L.bind(this._updateBreakPoints, this), 300);
	},

	_changeInteractions: function(e) {
		if (this._lMarginDrag) {
			if (e.perm === 'edit') {
				this._lMarginDrag.style.cursor = 'e-resize';
				this._rMarginDrag.style.cursor = 'w-resize';

				L.DomEvent.on(this._rMarginDrag, 'mousedown', this._initiateDrag, this);
				L.DomEvent.on(this._lMarginDrag, 'mousedown', this._initiateDrag, this);
			}
			else {
				this._lMarginDrag.style.cursor = 'default';
				this._rMarginDrag.style.cursor = 'default';

				L.DomEvent.off(this._rMarginDrag, 'mousedown', this._initiateDrag, this);
				L.DomEvent.off(this._lMarginDrag, 'mousedown', this._initiateDrag, this);
			}
		}
	},

	_initLayout: function() {
		this._rWrapper = L.DomUtil.create('div', 'loleaflet-ruler leaflet-bar leaflet-control leaflet-control-custom');
		this._rFace = L.DomUtil.create('div', 'loleaflet-ruler-face', this._rWrapper);
		this._rMarginWrapper = L.DomUtil.create('div', 'loleaflet-ruler-marginwrapper', this._rFace);
		// BP => Break Points
		this._rBPWrapper = L.DomUtil.create('div', 'loleaflet-ruler-breakwrapper', this._rFace);
		this._rBPContainer = L.DomUtil.create('div', 'loleaflet-ruler-breakcontainer', this._rBPWrapper);

		return this._rWrapper;
	},

	_updateOptions: function(obj) {
		this.options.margin1 = parseInt(obj['margin1']);
		this.options.margin2 = parseInt(obj['margin2']);
		this.options.nullOffset = parseInt(obj['leftOffset']);
		this.options.pageWidth = parseInt(obj['pageWidth']);
		// to be enabled only after adding support for other length units as well
		// this.options.unit = obj['unit'].trim();

		this._updateBreakPoints();
	},

	_updateBreakPoints: function() {

		if (this.options.margin1 == null || this.options.margin2 == null)
			return;

		if (this._map._docLayer._annotations._items.length === 0 || !this.options.marginSet)
			this.options.extraSize = 0;

		var classMajorSep = 'loleaflet-ruler-maj',
		classMargin = 'loleaflet-ruler-margin',
		classDraggable = 'loleaflet-ruler-drag',
		rightComp = 'loleaflet-ruler-right',
		leftComp = 'loleaflet-ruler-left',
		lToolTip = 'loleaflet-ruler-ltooltip',
		rToolTip = 'loleaflet-ruler-rtooltip',
		leftMarginStr = _('Left Margin'),
		rightMarginStr = _('Right Margin'),
		DraggableConvertRatio, lMargin, rMargin, wPixel, scale;

		lMargin = this.options.nullOffset;
		rMargin = this.options.pageWidth - (this.options.nullOffset + this.options.margin2);
		scale = this._map.getZoomScale(this._map.getZoom(), 10);
		wPixel = this._map._docLayer._docPixelSize.x - (this.options.extraSize + this.options.tileMargin * 2) * scale;

		this._fixOffset();

		DraggableConvertRatio = this.options.DraggableConvertRatio = wPixel / this.options.pageWidth;
		this._rFace.style.width = wPixel + 'px';
		this._rBPContainer.style.marginLeft = (-1 * (DraggableConvertRatio * (500 - (lMargin % 1000))) + 1) + 'px';

		var numCounter = -1 * parseInt(lMargin / 1000);

		$('.' + classMajorSep).remove();
		for (var num = 0; num <= (this.options.pageWidth / 1000) + 1; num++) {

			var marker = L.DomUtil.create('div', classMajorSep, this._rBPContainer);
			marker.style.width = DraggableConvertRatio*1000 - 2 + 'px';
			if (this.options.displayNumber) {
				if (numCounter !== 0)
					marker.innerText = Math.abs(numCounter++);
				else
					numCounter++;
			}
		}

		if (!this.options.marginSet) {

			this.options.marginSet = true;

			this._lMarginMarker = L.DomUtil.create('div', classMargin + ' ' + leftComp, this._rFace);
			this._rMarginMarker =  L.DomUtil.create('div', classMargin + ' ' + rightComp, this._rFace);

			this._lMarginDrag = L.DomUtil.create('div', classDraggable + ' ' + leftComp, this._rMarginWrapper);
			this._lToolTip = L.DomUtil.create('div', lToolTip, this._lMarginDrag);
			this._rMarginDrag = L.DomUtil.create('div', classDraggable + ' ' + rightComp, this._rMarginWrapper);
			this._rToolTip = L.DomUtil.create('div', rToolTip, this._rMarginDrag);
			this._lMarginDrag.title = leftMarginStr;
			this._rMarginDrag.title = rightMarginStr;
		}

		this._lMarginMarker.style.width = (DraggableConvertRatio*lMargin) + 'px';
		this._rMarginMarker.style.width = (DraggableConvertRatio*rMargin) + 'px';
		this._lMarginDrag.style.width = (DraggableConvertRatio*lMargin) + 'px';
		this._rMarginDrag.style.width = (DraggableConvertRatio*rMargin) + 'px';

		if (this.options.interactive) {
			this._changeInteractions({perm:'edit'});
		}
		else {
			this._changeInteractions({perm:'readonly'});
		}
	},

	_fixOffset: function() {
		var scale = this._map.getZoomScale(this._map.getZoom(), 10);
		var mapPane = this._map._mapPane;

		/// The rulerOffset depends on the leftmost tile's position
		/// sometimes the leftmost tile is not available and we need to calculate
		/// from the tiles that we have already.
		var tiles = this._map._docLayer._tiles;
		var firstTileKey = Object.keys(tiles)[0];
		var columnNumber = parseInt(firstTileKey.match(/(\d*):/)[1]);
		var firstTile = tiles[firstTileKey].el;
		var firstTileXTranslate = parseInt(firstTile.style.left) - this._map._docLayer._tileWidthPx * columnNumber;

		var tileContainer = mapPane.getElementsByClassName('leaflet-tile-container');
		tileContainer = tileContainer[tileContainer.length - 1];
		var tileContainerXTranslate = parseInt(tileContainer.style.transform.match(/\(([-0-9]*)/)[1]);
		var mapPaneXTranslate = parseInt(mapPane.style.transform.match(/\(([-0-9]*)/)[1]);

		var rulerOffset = mapPaneXTranslate + firstTileXTranslate + tileContainerXTranslate + (this.options.tileMargin * scale);

		this._rFace.style.marginLeft = rulerOffset + 'px';
	},

	_initiateDrag: function(e) {
		this._map.rulerActive = true;

		var dragableElem = e.srcElement || e.target;
		L.DomEvent.on(this._rFace, 'mousemove', this._moveMargin, this);
		L.DomEvent.on(this._map, 'mouseup', this._endDrag, this);
		this._initialposition = e.clientX;

		if (L.DomUtil.hasClass(dragableElem, 'loleaflet-ruler-right')) {
			L.DomUtil.addClass(this._rMarginDrag, 'leaflet-drag-moving');
			this._rFace.style.cursor = 'w-resize';
		}
		else {
			L.DomUtil.addClass(this._lMarginDrag, 'leaflet-drag-moving');
			this._rFace.style.cursor = 'e-resize';
		}
	},

	_moveMargin: function(e) {
		var posChange = e.clientX - this._initialposition;
		var unit = this.options.unit ? this.options.unit : ' cm';
		if (L.DomUtil.hasClass(this._rMarginDrag, 'leaflet-drag-moving')) {
			var rMargin = this.options.pageWidth - (this.options.nullOffset + this.options.margin2);
			var newPos = this.options.DraggableConvertRatio*rMargin - posChange;
			this._rToolTip.style.display = 'block';
			this._rToolTip.style.right = newPos - 25 + 'px';
			this._rToolTip.innerText = (Math.round(this.options.pageWidth / 100 - newPos / (this.options.DraggableConvertRatio * 100)) / 10).toString() + unit;
			this._rMarginDrag.style.width = newPos + 'px';
		}
		else {
			newPos = this.options.DraggableConvertRatio*this.options.nullOffset + posChange;
			this._lToolTip.style.display = 'block';
			this._lToolTip.style.left = newPos - 25 + 'px';
			this._lToolTip.innerText = (Math.round(newPos / (this.options.DraggableConvertRatio * 100)) / 10).toString() + unit;
			this._lMarginDrag.style.width = newPos + 'px';
		}
	},


	_endDrag: function(e) {
		this._map.rulerActive = false;

		var posChange = e.originalEvent.clientX - this._initialposition;
		var unoObj = {}, marginType, fact;

		L.DomEvent.off(this._rFace, 'mousemove', this._moveMargin, this);
		L.DomEvent.off(this._map, 'mouseup', this._endDrag, this);

		if (L.DomUtil.hasClass(this._rMarginDrag, 'leaflet-drag-moving')) {
			marginType = 'Margin2';
			fact = -1;
			L.DomUtil.removeClass(this._rMarginDrag, 'leaflet-drag-moving');
			this._rToolTip.style.display = 'none';
		}
		else {
			marginType = 'Margin1';
			fact = 1;
			L.DomUtil.removeClass(this._lMarginDrag, 'leaflet-drag-moving');
			this._lToolTip.style.display = 'none';
		}

		this._rFace.style.cursor = 'default';

		unoObj[marginType] = {};
		unoObj[marginType]['type'] = 'string';
		unoObj[marginType]['value'] = fact * posChange/(this.options.DraggableConvertRatio * this.options.pageWidth);
		this._map._socket.sendMessage('uno .uno:RulerChangeState ' + JSON.stringify(unoObj));
	}
});


L.control.ruler = function (options) {
	return new L.Control.Ruler(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.PosAnimation is used by Leaflet internally for pan animations.
 */

L.PosAnimation = L.Class.extend({
	includes: L.Mixin.Events,

	run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._newPos = newPos;

		this.fire('start');

		el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
		        's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

		L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
		L.DomUtil.setPosition(el, newPos);

		// toggle reflow, Chrome flickers for some reason if you don't do this
		L.Util.falseFn(el.offsetWidth);

		// there's no native way to track value updates of transitioned properties, so we imitate this
		this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
	},

	stop: function () {
		if (!this._inProgress) { return; }

		// if we just removed the transition property, the element would jump to its final position,
		// so we need to make it stay at the current position

		L.DomUtil.setPosition(this._el, this._getPos());
		this._onTransitionEnd();
		L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
	},

	_onStep: function () {
		var stepPos = this._getPos();
		if (!stepPos || (this._el._leaflet_pos.x == stepPos.x && this._el._leaflet_pos.y == stepPos.y)) {
			this._onTransitionEnd();
			return;
		}
		/*eslint-disable camelcase*/
		// make L.DomUtil.getPosition return intermediate position value during animation
		this._el._leaflet_pos = stepPos;
		/*eslint-enable camelcase*/

		this.fire('step');
	},

	// you can't easily get intermediate values of properties animated with CSS3 Transitions,
	// we need to parse computed style (in case of transform it returns matrix string)

	_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

	_getPos: function () {
		var left, top, matches,
		    el = this._el,
		    style = window.getComputedStyle(el);

		if (L.Browser.any3d) {
			matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
			if (!matches) { return; }
			left = parseFloat(matches[1]);
			top  = parseFloat(matches[2]);
		} else {
			left = parseFloat(style.left);
			top  = parseFloat(style.top);
		}

		return new L.Point(left, top, true);
	},

	_onTransitionEnd: function () {
		L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

		if (!this._inProgress) { return; }
		this._inProgress = false;

		this._el.style[L.DomUtil.TRANSITION] = '';

		/*eslint-disable camelcase*/
		// make sure L.DomUtil.getPosition returns the final position value after animation
		this._el._leaflet_pos = this._newPos;
		/*eslint-enable camelcase*/

		clearInterval(this._stepTimer);

		this.fire('step').fire('end');
	}

});

/* -*- js-indent-level: 8 -*- */
/*
 * Extends L.Map to handle panning animations.
 */

L.Map.include({

	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this.stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = L.extend({animate: options.animate}, options.zoom);
				options.pan = L.extend({animate: options.animate}, options.pan);
			}

			// try animating pan or zoom
			var animated = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (animated) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	panBy: function (offset, options) {
		offset = L.point(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this;
		}
		//If we pan too far then chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new L.PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan if animate: true specified
		if (options.animate === true) {
			L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset);
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._floor();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return (options && options.animate) !== false;
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * L.PosAnimation fallback implementation that powers Leaflet pan animations
 * in browsers that don't support CSS3 Transitions.
 */

L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

	run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = L.DomUtil.getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		this.fire('start');

		this._animate();
	},

	stop: function () {
		if (!this._inProgress) { return; }

		this._step();
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = L.Util.requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function () {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration));
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		L.DomUtil.setPosition(this._el, pos);

		this.fire('step');
	},

	_complete: function () {
		L.Util.cancelAnimFrame(this._animId);

		this._inProgress = false;
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 * Extends L.Map to handle zoom animations.
 */

L.Map.mergeOptions({
	zoomAnimation: true,
	zoomAnimationThreshold: 4
});

var zoomAnimated = L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.mobileOpera;

if (zoomAnimated) {

	L.Map.addInitHook(function () {
		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {

			this._createAnimProxy();

			L.DomEvent.on(this._proxy, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
		}
	});
}

L.Map.include(!zoomAnimated ? {} : {

	_createAnimProxy: function () {

		var proxy = this._proxy = L.DomUtil.create('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = L.DomUtil.TRANSFORM,
			    transform = proxy.style[prop];

			L.DomUtil.setTransform(proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', function () {
			var c = this.getCenter(),
			    z = this.getZoom();
			L.DomUtil.setTransform(proxy, this.project(c, z), this.getZoomScale(z, 1));
		}, this);
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		L.Util.requestAnimFrame(function () {
			this
			    .fire('movestart')
			    .fire('zoomstart')
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			scale: this.getZoomScale(zoom),
			origin: this.latLngToLayerPoint(center),
			offset: this._getCenterOffset(center).multiplyBy(-1),
			noUpdate: noUpdate
		});
	},

	_onZoomTransitionEnd: function () {

		this._animatingZoom = false;

		L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

		this._resetView(this._animateToCenter, this._animateToZoom, true, true);
	}
});

/* -*- js-indent-level: 8 -*- */
L.Map.include({
	flyTo: function (targetCenter, targetZoom) {

		this.stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = L.latLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = to.distanceTo(from),
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var b = (w1 * w1 - w0 * w0 + (i ? -1 : 1) * rho2 * rho2 * u1 * u1) / (2 * (i ? w1 : w0) * rho2 * u1);
			return Math.log(Math.sqrt(b * b + 1) - b);
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = L.Util.requestAnimFrame(frame, this);

				this._resetView(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom), true, true);

			} else {
				this._resetView(targetCenter, targetZoom, true, true);
			}
		}

		this.fire('zoomstart');
		frame.call(this);
	}
});

/* -*- js-indent-level: 8 -*- */
/*
 *  L.AnnotationManager
 */

/* global $ */

L.AnnotationManager = L.Class.extend({
	options: {
		marginX: 40,
		marginY: 10,
		offset: 5,
		extraSize: L.point(290, 0)
	},

	initialize: function (map, options) {
		this._map = map;
		this._items = [];
		this._selected = null;
		L.setOptions(this, options);
		this._arrow = L.polyline([], {color: 'darkblue', weight: 1});
		this._map.on('zoomend', this._onAnnotationZoom, this);
		this._map.on('AnnotationCancel', this._onAnnotationCancel, this);
		this._map.on('AnnotationClick', this._onAnnotationClick, this);
		this._map.on('AnnotationReply', this._onAnnotationReply, this);
		this._map.on('AnnotationSave', this._onAnnotationSave, this);
		this._map.on('RedlineAccept', this._onRedlineAccept, this);
		this._map.on('RedlineReject', this._onRedlineReject, this);
	},

	// Remove only text comments from the document (excluding change tracking comments)
	clear: function () {
		var it = 0;
		while (it < this._items.length) {
			if (!this._items[it].trackchange) {
				this._map.removeLayer(this._items[it]);
				this._items.splice(it, 1);
			} else {
				it++;
			}
		}
		this._selected = null;
		this._map.removeLayer(this._arrow);
	},

	// Remove only change tracking comments from the document
	clearChanges: function() {
		var it = 0;
		while (it < this._items.length) {
			if (this._items[it].trackchange) {
				this._map.removeLayer(this._items[it]);
				this._items.splice(it, 1);
			} else {
				it++;
			}
		}
	},

	adjustComment: function(comment) {
		var rectangles, color, viewId;
		comment.trackchange = false;
		rectangles = L.PolyUtil.rectanglesToPolygons(L.LOUtil.stringToRectangles(comment.textRange || comment.anchorPos), this._map._docLayer);
		comment.anchorPos = L.LOUtil.stringToBounds(comment.anchorPos);
		comment.anchorPix = this._map._docLayer._twipsToPixels(comment.anchorPos.min);
		viewId = this._map.getViewId(comment.author);
		color = viewId >= 0 ? L.LOUtil.rgbToHex(this._map.getViewColor(viewId)) : '#43ACE8';
		if (rectangles.length > 0) {
			comment.textSelected = L.polygon(rectangles, {
				pointerEvents: 'all',
				interactive: false,
				fillColor: color,
				fillOpacity: 0.25,
				weight: 2,
				opacity: 0.25
			});
			comment.textSelected.addEventParent(this._map);
			L.DomEvent.on(comment.textSelected, 'contextmenu', L.DomEvent.preventDefault);
			comment.textSelected.on('click', function() {
				this.selectById(comment.id);
			}, this);
		}
	},

	adjustRedLine: function(redline) {
		// All sane values ?
		if (!redline.textRange) {
			console.warn('Redline received has invalid textRange');
			return false;
		}

		// transform change tracking index into an id
		redline.id = 'change-' + redline.index;
		redline.anchorPos = L.LOUtil.stringToBounds(redline.textRange);
		redline.anchorPix = this._map._docLayer._twipsToPixels(redline.anchorPos.min);
		redline.trackchange = true;
		redline.text = redline.comment;
		var rectangles = L.PolyUtil.rectanglesToPolygons(L.LOUtil.stringToRectangles(redline.textRange), this._map._docLayer);
		if (rectangles.length > 0) {
			redline.textSelected = L.polygon(rectangles, {
				pointerEvents: 'all',
				interactive: false,
				fillOpacity: 0,
				opacity: 0
			});
			redline.textSelected.addEventParent(this._map);
			L.DomEvent.on(redline.textSelected, 'contextmenu', L.DomEvent.preventDefault);
			redline.textSelected.on('click', function() {
				this.selectById(redline.id);
			}, this);
		}

		return true;
	},

	// Fill normal comments in the documents
	fill: function (comments) {
		var comment;
		this.clear();
		// items contains redlines
		var ordered = !this._items.length;
		for (var index in comments) {
			comment = comments[index];
			this.adjustComment(comment);
			if (comment.author in this._map._viewInfoByUserName) {
				comment.avatar = this._map._viewInfoByUserName[comment.author].userextrainfo.avatar;
			}
			this._items.push(L.annotation(this._map.options.docBounds.getSouthEast(), comment).addTo(this._map));
		}
		if (this._items.length > 0) {
			if (!ordered) {
				this._items.sort(function(a, b) {
					return Math.abs(a._data.anchorPos.min.y) - Math.abs(b._data.anchorPos.min.y) ||
						Math.abs(a._data.anchorPos.min.x) - Math.abs(b._data.anchorPos.min.x);
				});
			}
			this.layout();
		}
	},

	fillChanges: function(redlines) {
		var changecomment;
		this.clearChanges();
		// items contains comments
		var ordered = !this._items.length;
		for (var idx in redlines) {
			changecomment = redlines[idx];
			if (!this.adjustRedLine(changecomment)) {
				// something wrong in this redline, skip this one
				continue;
			}
			if (changecomment.author in this._map._viewInfoByUserName) {
				changecomment.avatar = this._map._viewInfoByUserName[changecomment.author].userextrainfo.avatar;
			}
			this._items.push(L.annotation(this._map.options.docBounds.getSouthEast(), changecomment).addTo(this._map));
		}
		if (this._items.length > 0) {
			if (!ordered) {
				this._items.sort(function(a, b) {
					return Math.abs(a._data.anchorPos.min.y) - Math.abs(b._data.anchorPos.min.y) ||
						Math.abs(a._data.anchorPos.min.x) - Math.abs(b._data.anchorPos.min.x);
				});
			}
			this.layout();
		}
	},

	getItem: function (id) {
		for (var iterator in this._items) {
			if (this._items[iterator]._data.id === id) {
				return this._items[iterator];
			}
		}
		return null;
	},

	getIndexOf: function (id) {
		for (var index = 0; index < this._items.length; index++) {
			if (this._items[index]._data.id === id) {
				return index;
			}
		}
		return -1;
	},

	// Returns the root comment id of given id
	getRootIndexOf: function(id) {
		var index = this.getIndexOf(id);
		for (var idx = index - 1;
			     idx >=0 && this._items[idx]._data.id === this._items[idx + 1]._data.parent;
			     idx--)
		{
			index = idx;
		}

		return index;
	},

	// Returns the last comment id of comment thread containing the given id
	getLastChildIndexOf: function(id) {
		var index = this.getIndexOf(id);
		for (var idx = index + 1;
		     idx < this._items.length && this._items[idx]._data.parent === this._items[idx - 1]._data.id;
		     idx++)
		{
			index = idx;
		}

		return index;
	},

	getBounds: function () {
		if (this._items.length <= 0)
			return null;

		var allCommentsBounds;
		var idx = 0;
		while (!allCommentsBounds) {
			if (this._items[idx].isVisible())
				allCommentsBounds = this._items[0].getBounds();
			idx++;
		}

		for (; idx < this._items.length; idx++) {
			if (!this._items[idx].isVisible())
				continue;
			var bounds = this._items[idx].getBounds();
			allCommentsBounds.extend(bounds.min);
			allCommentsBounds.extend(bounds.max);
		}
		return allCommentsBounds
	},

	removeItem: function (id) {
		var annotation;
		for (var iterator in this._items) {
			annotation = this._items[iterator];
			if (annotation._data.id === id) {
				this._items.splice(iterator, 1);
				return annotation;
			}
		}
	},

	unselect: function () {
		if (this._selected) {
			this._selected = null;
			this.update();
		}
	},

	select: function (annotation) {
		if (annotation) {
			// Select the root comment
			var idx = this.getRootIndexOf(annotation._data.id);
			this._selected = this._items[idx];
			this.update();
		}
	},

	selectById: function(commentId) {
		var idx = this.getRootIndexOf(commentId);
		this._selected = this._items[idx];
		this.update();
	},

	update: function () {
		if (!this._selected) {
			this._map.removeLayer(this._arrow);
		}
		this.layout();
	},

	updateDocBounds: function () {
		if (this._items.length === 0) {
			this._map.fire('updatemaxbounds', {sizeChanged: true});
		}
	},

	_checkBounds: function () {
		if (!this._map || this._map.animatingZoom || this._items.length === 0) {
			return;
		}
		var maxBounds = this._map.getLayerMaxBounds();
		var thisBounds = this.getBounds();
		if (!thisBounds)
			return;
		var margin = this._items[0].getMargin();
		if (!maxBounds.contains(thisBounds)) {
			var docBounds = this._map.getLayerDocBounds();
			var delta = L.point(Math.max(thisBounds.max.x - docBounds.max.x, 0), Math.max(thisBounds.max.y - docBounds.max.y, 0));
			if (delta.x > 0) {
				delta.x += margin.x;
			}
			if (delta.y > 0) {
				delta.y += margin.y;
			}
			this._map.fire('updatemaxbounds', {
				sizeChanged: true,
				extraSize: delta
			});
		}
	},

	layoutUp: function (commentThread, latLng, layoutBounds) {
		if (commentThread.length <= 0)
			return;

		(new L.PosAnimation()).run(commentThread[0]._container, this._map.latLngToLayerPoint(latLng));
		commentThread[0].setLatLng(latLng, /*skip check bounds*/ true);
		var bounds = commentThread[0].getBounds();
		var idx = 1;
		while (idx < commentThread.length) {
			bounds.extend(bounds.max.add([0, commentThread[idx].getBounds().getSize().y]));
			idx++;
		}

		var docRight = this._map.project(this._map.options.docBounds.getNorthEast());
		var posX = docRight.x + this.options.marginX;
		posX = this._map.latLngToLayerPoint(this._map.unproject(L.point(posX, 0))).x;
		var posY;
		if (layoutBounds.intersects(bounds)) {
			layoutBounds.extend(layoutBounds.min.subtract([0, bounds.getSize().y]));
			posY = layoutBounds.min.y;
		}
		else {
			posY = bounds.min.y;
			layoutBounds.extend(L.point(layoutBounds.min.x, bounds.min.y));
		}
		var pt = L.point(posX, posY);
		layoutBounds.extend(layoutBounds.min.subtract([0, this.options.marginY]));

		idx = 0;
		for (idx = 0; idx < commentThread.length; ++idx) {
			latLng = this._map.layerPointToLatLng(pt);
			(new L.PosAnimation()).run(commentThread[idx]._container, this._map.latLngToLayerPoint(latLng));
			commentThread[idx].setLatLng(latLng, /*skip check bounds*/ true);
			commentThread[idx].show();

			var commentBounds = commentThread[idx].getBounds();
			pt = pt.add([0, commentBounds.getSize().y]);
		}
	},

	layoutDown: function (commentThread, latLng, layoutBounds) {
		if (commentThread.length <= 0)
			return;

		(new L.PosAnimation()).run(commentThread[0]._container, this._map.latLngToLayerPoint(latLng));
		commentThread[0].setLatLng(latLng, /*skip check bounds*/ true);
		var bounds = commentThread[0].getBounds();
		var idx = 1;
		while (idx < commentThread.length) {
			bounds.extend(bounds.max.add([0, commentThread[idx].getBounds().getSize().y]));
			idx++;
		}

		var docRight = this._map.project(this._map.options.docBounds.getNorthEast());
		var posX = docRight.x + this.options.marginX;
		posX = this._map.latLngToLayerPoint(this._map.unproject(L.point(posX, 0))).x;
		var posY;
		if (layoutBounds.intersects(bounds)) {
			posY = layoutBounds.getBottomLeft().y;
			layoutBounds.extend(layoutBounds.max.add([0, bounds.getSize().y]));
		}
		else {
			posY = bounds.min.y;
			layoutBounds.extend(L.point(layoutBounds.max.x, bounds.max.y));
		}
		var pt = L.point(posX, posY);
		layoutBounds.extend(layoutBounds.max.add([0, this.options.marginY]));

		idx = 0;
		for (idx = 0; idx < commentThread.length; ++idx) {
			latLng = this._map.layerPointToLatLng(pt);
			(new L.PosAnimation()).run(commentThread[idx]._container, this._map.latLngToLayerPoint(latLng));
			commentThread[idx].setLatLng(latLng, /*skip check bounds*/ true);
			commentThread[idx].show();

			var commentBounds = commentThread[idx].getBounds();
			pt = pt.add([0, commentBounds.getSize().y]);
		}
	},

	doLayout: function (zoom) {
		this._updateScaling();
		var docRight = this._map.project(this._map.options.docBounds.getNorthEast());
		var topRight = docRight.add(L.point(this.options.marginX, this.options.marginY));
		var latlng, layoutBounds, point, idx;
		if (this._selected) {
			var selectIndexFirst = this.getRootIndexOf(this._selected._data.id);
			var selectIndexLast = this.getLastChildIndexOf(this._selected._data.id);
			if (zoom) {
				this._items[selectIndexFirst]._data.anchorPix = this._map._docLayer._twipsToPixels(this._items[selectIndexFirst]._data.anchorPos.min);
			}

			var posX = docRight.x;
			var posY = this._items[selectIndexFirst]._data.anchorPix.y;
			point = this._map._docLayer._twipsToPixels(this._items[selectIndexFirst]._data.anchorPos.min);

			if (L.Browser.mobile) {
				var mapBoundsPx = this._map.getPixelBounds();
				var annotationBoundsPx = this._items[selectIndexFirst].getBounds();
				var annotationSize = annotationBoundsPx.getSize();
				var topLeftPoint = L.point(posX, posY);
				annotationBoundsPx = L.bounds(topLeftPoint, topLeftPoint.add(annotationSize));

				if (!mapBoundsPx.contains(annotationBoundsPx)) {
					var scrollX = 0, scrollY = 0, spacing = 16;

					if (annotationBoundsPx.min.x < mapBoundsPx.min.x) {
						scrollX = annotationBoundsPx.min.x - mapBoundsPx.min.x - spacing;
					} else if (annotationBoundsPx.max.x > mapBoundsPx.max.x) {
						scrollX = annotationBoundsPx.max.x - mapBoundsPx.max.x + spacing;
					}
					if (annotationBoundsPx.min.y < mapBoundsPx.min.y) {
						scrollY = annotationBoundsPx.min.y - mapBoundsPx.min.y + spacing;
					} else if (annotationBoundsPx.max.y > mapBoundsPx.max.y) {
						scrollY = annotationBoundsPx.max.y - mapBoundsPx.max.y - spacing;
					}
					scrollX = Math.round(scrollX);
					scrollY = Math.round(scrollY);
					posX -= scrollX;
					if (posX < mapBoundsPx.min.x)
						posX = Math.round(mapBoundsPx.min.x + spacing);
					posY -= scrollY;
					if (posY < mapBoundsPx.min.y)
						posY = Math.round(mapBoundsPx.min.y + spacing);
					if (posX < this._items[selectIndexFirst]._data.anchorPix.x + spacing) {
						var anchorPosMax = this._map._docLayer._twipsToPixels(this._items[selectIndexFirst]._data.anchorPos.max);
						var lineHeight = Math.round(anchorPosMax.y - this._items[selectIndexFirst]._data.anchorPix.y);
						posY += 2 * lineHeight;
						point.y += lineHeight;
					}
				}
			}

			// Draw arrow
			this._arrow.setLatLngs([this._map.unproject(point), this._map.unproject(L.point(posX, posY))]);
			this._map.addLayer(this._arrow);

			latlng = this._map.unproject(L.point(posX, posY));
			(new L.PosAnimation()).run(this._items[selectIndexFirst]._container, this._map.latLngToLayerPoint(latlng));
			this._items[selectIndexFirst].setLatLng(latlng, /*skip check bounds*/ true);
			layoutBounds = this._items[selectIndexFirst].getBounds();

			// Adjust child comments too, if any
			for (idx = selectIndexFirst + 1; idx <= selectIndexLast; idx++) {
				if (zoom) {
					this._items[idx]._data.anchorPix = this._map._docLayer._twipsToPixels(this._items[idx]._data.anchorPos.min);
				}
				latlng = this._map.layerPointToLatLng(layoutBounds.getBottomLeft());
				(new L.PosAnimation()).run(this._items[idx]._container, layoutBounds.getBottomLeft());
				this._items[idx].setLatLng(latlng, /*skip check bounds*/ true);

				var commentBounds = this._items[idx].getBounds();
				layoutBounds.extend(layoutBounds.max.add([0, commentBounds.getSize().y]));
			}

			layoutBounds.min = layoutBounds.min.add([this.options.marginX, 0]);
			layoutBounds.max = layoutBounds.max.add([this.options.marginX, 0]);
			layoutBounds.extend(layoutBounds.min.subtract([0, this.options.marginY]));
			layoutBounds.extend(layoutBounds.max.add([0, this.options.marginY]));
			for (idx = selectIndexFirst - 1; idx >= 0;) {
				var commentThread = [];
				var tmpIdx = idx;
				do {
					if (zoom) {
						this._items[idx]._data.anchorPix = this._map._docLayer._twipsToPixels(this._items[idx]._data.anchorPos.min);
					}
					commentThread.push(this._items[tmpIdx]);
					tmpIdx = tmpIdx - 1;
				} while (tmpIdx >= 0 && this._items[tmpIdx]._data.id === this._items[tmpIdx + 1]._data.parent);

				commentThread.reverse();
				// All will have some anchor position
				this.layoutUp(commentThread, this._map.unproject(L.point(topRight.x, commentThread[0]._data.anchorPix.y)), layoutBounds);
				idx = idx - commentThread.length;
			}
			for (idx = selectIndexLast + 1; idx < this._items.length;) {
				commentThread = [];
				tmpIdx = idx;
				do {
					if (zoom) {
						this._items[idx]._data.anchorPix = this._map._docLayer._twipsToPixels(this._items[idx]._data.anchorPos.min);
					}
					commentThread.push(this._items[tmpIdx]);
					tmpIdx = tmpIdx + 1;
				} while (tmpIdx < this._items.length && this._items[tmpIdx]._data.parent === this._items[tmpIdx - 1]._data.id);

				// All will have some anchor position
				this.layoutDown(commentThread, this._map.unproject(L.point(topRight.x, commentThread[0]._data.anchorPix.y)), layoutBounds);
				idx = idx + commentThread.length;
			}
			if (!this._selected.isEdit()) {
				this._selected.show();
			}
		} else if (this._items.length > 0) {
			point = this._map.latLngToLayerPoint(this._map.unproject(L.point(topRight.x, this._items[0]._data.anchorPix.y)));
			layoutBounds = L.bounds(point, point);
			for (idx = 0; idx < this._items.length;) {
				commentThread = [];
				tmpIdx = idx;
				do {
					if (zoom) {
						this._items[tmpIdx]._data.anchorPix = this._map._docLayer._twipsToPixels(this._items[tmpIdx]._data.anchorPos.min);
					}
					commentThread.push(this._items[tmpIdx]);
					tmpIdx = tmpIdx + 1;
				} while (tmpIdx < this._items.length && this._items[tmpIdx]._data.parent === this._items[tmpIdx - 1]._data.id);

				this.layoutDown(commentThread, this._map.unproject(L.point(topRight.x, commentThread[0]._data.anchorPix.y)), layoutBounds);
				idx = idx + commentThread.length;
			}
		}
		this._checkBounds();
	},

	layout: function (zoom) {
		if (zoom)
			this.doLayout(zoom);
		else if (!this._layoutTimer) {
			var me = this;
			me._layoutTimer = setTimeout(function() {
				delete me._layoutTimer;
				me.doLayout(zoom);
			}, 250 /* ms */);
		} // else - avoid excessive re-layout

	},

	add: function (comment) {
		var annotation = L.annotation(this._map._docLayer._twipsToLatLng(comment.anchorPos.getTopRight()), comment,
			comment.id === 'new' ? {noMenu: true} : {}).addTo(this._map);
		if (comment.parent && comment.parent > '0') {
			var parentIdx = this.getIndexOf(comment.parent);
			this._items.splice(parentIdx + 1, 0, annotation);
		} else {
			this._items.push(annotation);
		}
		this._items.sort(function(a, b) {
			return Math.abs(a._data.anchorPos.min.y) - Math.abs(b._data.anchorPos.min.y) ||
				Math.abs(a._data.anchorPos.min.x) - Math.abs(b._data.anchorPos.min.x);
		});
		return annotation;
	},

	edit: function (comment) {
		var annotation = L.annotation(this._map._docLayer._twipsToLatLng(comment.anchorPos.getTopRight()), comment).addTo(this._map);
		annotation.edit();
		annotation.focus();
	},

	modify: function (annotation) {
		annotation.edit();
		this.select(annotation);
		annotation.focus();
	},

	reply: function (annotation) {
		annotation.reply();
		this.select(annotation);
		annotation.focus();
	},

	remove: function (id) {
		var comment = {
			Id: {
				type: 'string',
				value: id
			}
		};
		this._map.sendUnoCommand('.uno:DeleteComment', comment);
		this.unselect();
		this._map.focus();
	},

	_onRedlineAccept: function(e) {
		var command = {
			AcceptTrackedChange: {
				type: 'unsigned short',
				value: e.id.substring('change-'.length)
			}
		};
		this._map.sendUnoCommand('.uno:AcceptTrackedChange', command);
		this.unselect();
		this._map.focus();
	},

	_onRedlineReject: function(e) {
		var command = {
			RejectTrackedChange: {
				type: 'unsigned short',
				value: e.id.substring('change-'.length)
			}
		};
		this._map.sendUnoCommand('.uno:RejectTrackedChange', command);
		this.unselect();
		this._map.focus();
	},

	// Adjust parent-child relationship, if required, after `comment` is added
	adjustParentAdd: function(comment) {
		if (comment.parent && comment.parent > '0') {
			var parentIdx = this.getIndexOf(comment.parent);
			if (parentIdx === -1) {
				console.warn('adjustParentAdd: No parent comment to attach received comment to. ' +
				             'Parent comment ID sought is :' + comment.parent + ' for current comment with ID : ' + comment.id);
				return;
			}
			if (this._items[parentIdx + 1] && this._items[parentIdx + 1]._data.parent === this._items[parentIdx]._data.id) {
				this._items[parentIdx + 1]._data.parent = comment.id;
			}
		}
	},

	// Adjust parent-child relationship, if required, after `comment` is removed
	adjustParentRemove: function(comment) {
		var newId = '0';
		var parentIdx = this.getIndexOf(comment._data.parent);
		if (parentIdx >= 0) {
			newId = this._items[parentIdx]._data.id;
		}
		var currentIdx = this.getIndexOf(comment._data.id);
		if (this._items[currentIdx + 1] && this._items[currentIdx].parentOf(this._items[currentIdx + 1])) {
			this._items[currentIdx + 1]._data.parent = newId;
		}
	},

	onACKComment: function (obj) {
		var id;
		var changetrack = obj.redline ? true : false;
		var action = changetrack ? obj.redline.action : obj.comment.action;

		if (changetrack && obj.redline.author in this._map._viewInfoByUserName) {
			obj.redline.avatar = this._map._viewInfoByUserName[obj.redline.author].userextrainfo.avatar;
		}
		else if (!changetrack && obj.comment.author in this._map._viewInfoByUserName) {
			obj.comment.avatar = this._map._viewInfoByUserName[obj.comment.author].userextrainfo.avatar;
		}

		if (action === 'Add') {
			if (changetrack) {
				if (!this.adjustRedLine(obj.redline)) {
					// something wrong in this redline
					return;
				}
				this.add(obj.redline);
			} else {
				this.adjustComment(obj.comment);
				this.adjustParentAdd(obj.comment);
				this.add(obj.comment);
			}
			if (this._selected && !this._selected.isEdit()) {
				this._map.focus();
			}
			this.layout();
		} else if (action === 'Remove') {
			id = changetrack ? 'change-' + obj.redline.index : obj.comment.id;
			var removed = this.getItem(id);
			if (removed) {
				this.adjustParentRemove(removed);
				this._map.removeLayer(this.removeItem(id));
				if (this._selected === removed) {
					this.unselect();
				} else {
					this.layout();
				}
			}
			this.updateDocBounds();
		} else if (action === 'Modify') {
			id = changetrack ? 'change-' + obj.redline.index : obj.comment.id;
			var modified = this.getItem(id);
			if (modified) {
				var modifiedObj;
				if (changetrack) {
					if (!this.adjustRedLine(obj.redline)) {
						// something wrong in this redline
						return;
					}
					modifiedObj = obj.redline;
				} else {
					this.adjustComment(obj.comment);
					modifiedObj = obj.comment;
				}
				modified.setData(modifiedObj);
				modified.update();
				this.update();
			}
		}
	},

	_onAnnotationCancel: function (e) {
		if (e.annotation._data.id === 'new') {
			this._map.removeLayer(this.removeItem(e.annotation._data.id));
			this.updateDocBounds();
		}
		if (this._selected === e.annotation) {
			this.unselect();
		} else {
			this.layout();
		}
		this._map.focus();
	},

	_onAnnotationClick: function (e) {
		this.select(e.annotation);
	},

	_onAnnotationReply: function (e) {
		var comment = {
			Id: {
				type: 'string',
				value: e.annotation._data.id
			},
			Text: {
				type: 'string',
				value: e.annotation._data.reply
			}
		};
		this._map.sendUnoCommand('.uno:ReplyComment', comment);
		this.unselect();
		this._map.focus();
	},

	_onAnnotationSave: function (e) {
		var comment;
		if (e.annotation._data.id === 'new') {
			comment = {
				Text: {
					type: 'string',
					value: e.annotation._data.text
				},
				Author: {
					type: 'string',
					value: e.annotation._data.author
				}
			};
			this._map.sendUnoCommand('.uno:InsertAnnotation', comment);
			this._map.removeLayer(this.removeItem(e.annotation._data.id));
		} else if (e.annotation._data.trackchange) {
			comment = {
				ChangeTrackingId: {
					type: 'long',
					value: e.annotation._data.index
				},
				Text: {
					type: 'string',
					value: e.annotation._data.text
				}
			};
			this._map.sendUnoCommand('.uno:CommentChangeTracking', comment);
		} else {
			comment = {
				Id: {
					type: 'string',
					value: e.annotation._data.id
				},
				Text: {
					type: 'string',
					value: e.annotation._data.text
				}
			};
			this._map.sendUnoCommand('.uno:EditAnnotation', comment);
		}
		this.unselect();
		this._map.focus();
	},

	_onAnnotationZoom: function () {
		this._map.fire('updatemaxbounds', {sizeChanged: true});
		this.layout(true);
	},

	_getScaleFactor: function () {
		var scaleFactor = 1.0 / this._map.getZoomScale(this._map.options.zoom, this._map._zoom);
		if (scaleFactor < 0.4)
			scaleFactor = 0.4;
		else if (scaleFactor < 0.6)
			scaleFactor = 0.6 - (0.6 - scaleFactor) / 2.0;
		else if (scaleFactor < 0.8)
			scaleFactor = 0.8;
		else if (scaleFactor <= 2)
			scaleFactor = 1;
		else if (scaleFactor > 2) {
			scaleFactor = 1 + (scaleFactor - 1) / 10.0;
			if (scaleFactor > 1.5)
				scaleFactor = 1.5;
		}
		return scaleFactor;
	},

	_updateScaling: function () {
		if (!L.Browser.mobile || this._items.length === 0)
			return;

		var initNeeded = (this._initialLayoutData === undefined);
		var contentWrapperClass = $('.loleaflet-annotation-content-wrapper');
		if (initNeeded && contentWrapperClass.length > 0) {
			var contentAuthor = $('.loleaflet-annotation-content-author');
			var dateClass = $('.loleaflet-annotation-date');

			this._initialLayoutData = {
				wrapperWidth: parseInt(contentWrapperClass.css('width')),
				wrapperFontSize: parseInt(contentWrapperClass.css('font-size')),
				authorContentHeight: parseInt(contentAuthor.css('height')),
				dateFontSize: parseInt(dateClass.css('font-size')),
			};
		}

		var menuClass = $('.loleaflet-annotation-menu');
		if ((this._initialLayoutData.menuWidth === undefined) && menuClass.length > 0) {
			this._initialLayoutData.menuWidth = parseInt(menuClass.css('width'));
			this._initialLayoutData.menuHeight = parseInt(menuClass.css('height'));
		}

		var scaleFactor = this._getScaleFactor();
		var idx;
		if (this._selected) {
			var selectIndexFirst = this.getRootIndexOf(this._selected._data.id);
			var selectIndexLast = this.getLastChildIndexOf(this._selected._data.id);
			for (idx = 0; idx < this._items.length; idx++) {
				if (idx < selectIndexFirst || idx >  selectIndexLast) {
					this._items[idx]._updateScaling(scaleFactor, this._initialLayoutData);
				}
				else {
					this._items[idx]._updateScaling(1, this._initialLayoutData);
				}
			}
		}
		else {
			for (idx = 0; idx < this._items.length; idx++) {
				this._items[idx]._updateScaling(scaleFactor, this._initialLayoutData);
			}
		}
	}
});


L.Map.include({
	insertComment: function() {
		var avatar = undefined;
		var author = this.getViewName(this._docLayer._viewId);
		if (author in this._viewInfoByUserName) {
			avatar = this._viewInfoByUserName[author].userextrainfo.avatar;
		}
		this._docLayer.newAnnotation({
			text: '',
			textrange: '',
			author: author,
			dateTime: new Date().toDateString(),
			id: 'new', // 'new' only when added by us
			avatar: avatar
		});
	}
});


L.annotationManager = function (map, options) {
	return new L.AnnotationManager(map, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.Scroll.Annotation
 */
/* global _ */
L.Control.Scroll.Annotation = L.Control.extend({
	options: {
		position: 'topright',
		arrowUp: '0x25b2',
		arrowUpTitle: _('Scroll up annotations'),
		arrowDown: '0x25bc',
		arrowDownTitle: _('Scroll down annotations')
	},

	onAdd: function (map) {
		var scrollName = 'leaflet-control-scroll',
		    container = L.DomUtil.create('div', 'loleaflet-bar');

		this._map = map;

		this._buttonUp  = this._createButton(
		        this.options.arrowUp, this.options.arrowUpTitle,
		        scrollName + '-up',  container, this._onScrollUp,  this);
		this._buttonDown = this._createButton(
		        this.options.arrowDown, this.options.arrowDownTitle,
		        scrollName + '-down', container, this._onScrollDown, this);

		return container;
	},

	_onScrollUp: function () {
		this._map.fire('AnnotationScrollUp');
	},

	_onScrollDown: function () {
		this._map.fire('AnnotationScrollDown');
	},

	_createButton: function (html, title, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.innerHTML = String.fromCharCode(html);
		link.href = '#';
		link.title = title;

		var stop = L.DomEvent.stopPropagation;

		L.DomEvent
		    .on(link, 'click', stop)
		    .on(link, 'mousedown', stop)
		    .on(link, 'dblclick', stop)
		    .on(link, 'click', L.DomEvent.preventDefault)
		    .on(link, 'click', fn, context);

		return link;
	}
});

L.control.scroll.annotation = function (options) {
	return new L.Control.Scroll.Annotation(options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.Annotation
 */

/* global $ Autolinker L _ */

L.Annotation = L.Layer.extend({
	options: {
		minWidth: 160,
		maxHeight: 50,
		imgSize: L.point([32, 32]),
		margin: L.point([40, 40]),
		noMenu: false
	},

	initialize: function (latlng, data, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
		this._data = data;
		this._skipCheckBounds = false;
	},

	onAdd: function (map) {
		this._map = map;
		if (!this._container) {
			this._initLayout();
		}

		map._panes.popupPane.appendChild(this._container);
		this.update();
	},

	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	onRemove: function (map) {
		map._panes.popupPane.removeChild(this._container);
		if (this._data.textSelected) {
			this._data.textSelected.removeEventParent(map);
			map.removeLayer(this._data.textSelected);
		}
		this._map = null;
	},

	update: function () {
		if (!this._map) { return; }

		this._updateContent();
		this._updateLayout();
		this._updatePosition();
	},

	setData: function (data) {
		if (this._data.textSelected) {
			this._data.textSelected.removeEventParent(this._map);
			this._map.removeLayer(this._data.textSelected);
		}
		this._data = data;
	},

	setLatLng: function (latlng, skipCheckBounds) {
		if (this._latlng != latlng) {
			this._skipCheckBounds = !!skipCheckBounds;
			this._latlng = latlng;
			this._updatePosition();
			this._skipCheckBounds = false;
		}
		return this;
	},

	getBounds: function () {
		var point = this._map.latLngToLayerPoint(this._latlng);
		return L.bounds(point, point.add(L.point(this._container.offsetWidth, this._container.offsetHeight)));
	},

	getMargin: function () {
		return this.options.margin;
	},

	show: function () {
		this._container.style.visibility = '';
		this._contentNode.style.display = '';
		this._nodeModify.style.display = 'none';
		this._nodeReply.style.display = 'none';
		if (this._data.textSelected && !this._map.hasLayer(this._data.textSelected)) {
			this._map.addLayer(this._data.textSelected);
		}
	},

	hide: function () {
		this._container.style.visibility = 'hidden';
		this._contentNode.style.display = 'none';
		this._nodeModify.style.display = 'none';
		this._nodeReply.style.display = 'none';
		if (this._data.textSelected && this._map.hasLayer(this._data.textSelected)) {
			this._map.removeLayer(this._data.textSelected);
		}
	},

	isVisible: function () {
		return (this._container.style && this._container.style.visibility === '');
	},

	edit: function () {
		this._container.style.visibility = '';
		this._contentNode.style.display = 'none';
		this._nodeModify.style.display = '';
		this._nodeReply.style.display = 'none';
		return this;
	},

	reply: function () {
		this._container.style.visibility = '';
		this._contentNode.style.display = '';
		this._nodeModify.style.display = 'none';
		this._nodeReply.style.display = '';
		return this;
	},

	isEdit: function () {
		return (this._nodeModify && this._nodeModify.style.display !== 'none') ||
		       (this._nodeReply && this._nodeReply.style.display !== 'none');
	},

	focus: function () {
		this._nodeModifyText.focus();
		this._nodeReplyText.focus();
	},

	parentOf: function(comment) {
		return this._data.id === comment._data.parent;
	},

	onZoom: function(scaleFactor) {
		var authorImageWidth = Math.round(this.options.imgSize.x * scaleFactor);
		var authorImageHeight = Math.round(this.options.imgSize.y * scaleFactor);
		this._authorAvatarImg.setAttribute('width', authorImageWidth);
		this._authorAvatarImg.setAttribute('height', authorImageHeight);
	},

	_checkBounds: function () {
		if (this._skipCheckBounds || !this._map || this._map.animatingZoom || !this.isVisible()) {
			return;
		}
		var maxBounds = this._map.getLayerMaxBounds();
		var thisBounds = this.getBounds();
		if (!maxBounds.contains(thisBounds)) {
			var docBounds = this._map.getLayerDocBounds();
			var delta = L.point(Math.max(thisBounds.max.x - docBounds.max.x, 0), Math.max(thisBounds.max.y - docBounds.max.y, 0));
			if (delta.x > 0) {
				delta.x += this.options.margin.x;
			}
			if (delta.y > 0) {
				delta.y += this.options.margin.y;
			}
			this._map.fire('updatemaxbounds', {
				sizeChanged: true,
				extraSize: delta
			});
		}
	},

	_createButton: function(container, value, handler) {
		var button = L.DomUtil.create('input', 'loleaflet-controls', container);
		button.type = 'button';
		button.value = value;
		L.DomEvent.on(button, 'mousedown', L.DomEvent.preventDefault);
		L.DomEvent.on(button, 'click', handler, this);
	},

	_initLayout: function () {
		var buttons,
		    tagTd = 'td',
		    tagDiv = 'div',
		    empty = '',
		    click = 'click',
		    tagTextArea = 'textarea',
		    cancel = _('Cancel'),
		    classTextArea = 'loleaflet-annotation-textarea',
		    classEdit = 'loleaflet-annotation-edit';
		var container = this._container =
		    L.DomUtil.create(tagDiv, 'loleaflet-annotation');
		if (this._data.trackchange) {
			var wrapper = this._wrapper = L.DomUtil.create(tagDiv, 'loleaflet-annotation-redline-content-wrapper', container);
		} else {
			wrapper = this._wrapper = L.DomUtil.create(tagDiv, 'loleaflet-annotation-content-wrapper', container);
		}
		this._author = L.DomUtil.create('table', 'loleaflet-annotation-table', wrapper);
		var tbody = L.DomUtil.create('tbody', empty, this._author);
		var tr = L.DomUtil.create('tr', empty, tbody);
		var tdImg = L.DomUtil.create(tagTd, 'loleaflet-annotation-img', tr);
		var tdAuthor = L.DomUtil.create(tagTd, 'loleaflet-annotation-author', tr);
		var imgAuthor = L.DomUtil.create('img', 'avatar-img', tdImg);
		imgAuthor.setAttribute('src', L.Icon.Default.imagePath + '/user.png');
		imgAuthor.setAttribute('width', this.options.imgSize.x);
		imgAuthor.setAttribute('height', this.options.imgSize.y);
		this._authorAvatarImg = imgAuthor;
		this._contentAuthor = L.DomUtil.create(tagDiv, 'loleaflet-annotation-content-author', tdAuthor);
		this._contentDate = L.DomUtil.create(tagDiv, 'loleaflet-annotation-date', tdAuthor);

		if (this._data.trackchange && this._map._permission !== 'readonly') {
			var tdAccept = L.DomUtil.create(tagTd, 'loleaflet-annotation-menubar', tr);
			var acceptButton = L.DomUtil.create('button', 'loleaflet-redline-accept-button', tdAccept);
			var tdReject = L.DomUtil.create(tagTd, 'loleaflet-annotation-menubar', tr);
			var rejectButton = L.DomUtil.create('button', 'loleaflet-redline-reject-button', tdReject);

			acceptButton.title = _('Accept change');
			L.DomEvent.on(acceptButton, click, function() {
				this._map.fire('RedlineAccept', {id: this._data.id});
			}, this);

			rejectButton.title = _('Reject change');
			L.DomEvent.on(rejectButton, click, function() {
				this._map.fire('RedlineReject', {id: this._data.id});
			}, this);
		}

		if (this.options.noMenu !== true && this._map._permission !== 'readonly') {
			var tdMenu = L.DomUtil.create(tagTd, 'loleaflet-annotation-menubar', tr);
			var divMenu = this._menu = L.DomUtil.create(tagDiv, this._data.trackchange ? 'loleaflet-annotation-menu-redline' : 'loleaflet-annotation-menu', tdMenu);
			divMenu.title = _('Open menu');
			divMenu.annotation = this;
		}
		if (this._data.trackchange) {
			this._captionNode = L.DomUtil.create(tagDiv, 'loleaflet-annotation-caption', wrapper);
			this._captionText = L.DomUtil.create(tagDiv, empty, this._captionNode);
		}
		this._contentNode = L.DomUtil.create(tagDiv, 'loleaflet-annotation-content loleaflet-dont-break', wrapper);
		this._nodeModify = L.DomUtil.create(tagDiv, classEdit, wrapper);
		this._nodeModifyText = L.DomUtil.create(tagTextArea, classTextArea, this._nodeModify);
		this._contentText = L.DomUtil.create(tagDiv, empty, this._contentNode);
		this._nodeReply = L.DomUtil.create(tagDiv, classEdit, wrapper);
		this._nodeReplyText = L.DomUtil.create(tagTextArea, classTextArea, this._nodeReply);

		buttons = L.DomUtil.create(tagDiv, empty, this._nodeModify);
		L.DomEvent.on(this._nodeModifyText, 'blur', this._onLostFocus, this);
		L.DomEvent.on(this._nodeReplyText, 'blur', this._onLostFocusReply, this);
		this._createButton(buttons, _('Save'), this._onSaveComment);
		this._createButton(buttons, cancel, this._onCancelClick);
		buttons = L.DomUtil.create(tagDiv, empty, this._nodeReply);
		this._createButton(buttons, _('Reply'), this._onReplyClick);
		this._createButton(buttons, cancel, this._onCancelClick);
		L.DomEvent.disableScrollPropagation(this._container);

		this._container.style.visibility = 'hidden';
		this._nodeModify.style.display = 'none';
		this._nodeReply.style.display = 'none';

		var events = [click, 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'keydown', 'keypress', 'keyup', 'touchstart', 'touchmove', 'touchend'];
		L.DomEvent.on(container, click, this._onMouseClick, this);
		L.DomEvent.on(container, 'mouseleave', this._onMouseLeave, this);
		for (var it = 0; it < events.length; it++) {
			L.DomEvent.on(container, events[it], L.DomEvent.stopPropagation, this);
		}

		L.DomEvent.on(container, 'touchstart',
			function (e) {
				if (e && e.touches.length > 1) {
					L.DomEvent.preventDefault(e);
				}
			},
			this);

	},

	_onCancelClick: function (e) {
		L.DomEvent.stopPropagation(e);
		this._nodeModifyText.value = this._contentText.origText;
		this._nodeReplyText.value = '';
		this.show();
		this._map.fire('AnnotationCancel', {annotation: this});
	},

	_onSaveComment: function (e) {
		L.DomEvent.stopPropagation(e);
		this._data.text = this._nodeModifyText.value;
		this._updateContent();
		this.show();
		this._checkBounds();
		this._map.fire('AnnotationSave', {annotation: this});
	},

	_onLostFocus: function (e) {
		if (this._contentText.origText !== this._nodeModifyText.value) {
			this._onSaveComment(e);
		}
		else if (this._nodeModifyText.value == '') {
			// Implies that this._contentText.origText == ''
			this._onCancelClick(e);
		}
	},

	_onLostFocusReply: function(e) {
		if (this._nodeReplyText.value !== '') {
			this._onReplyClick(e);
		}
	},

	_onMouseClick: function (e) {
		var target = e.target || e.srcElement;
		L.DomEvent.stopPropagation(e);
		if (L.DomUtil.hasClass(target, 'loleaflet-annotation-menu') || L.DomUtil.hasClass(target, 'loleaflet-annotation-menu-redline')) {
			$(target).contextMenu();
			return;
		}
		L.DomEvent.stopPropagation(e);
		this._map.fire('AnnotationClick', {annotation: this});
	},

	_onMouseLeave: function (e) {
		var layerPoint = this._map.mouseEventToLayerPoint(e),
		    latlng = this._map.layerPointToLatLng(layerPoint);
		L.DomEvent.stopPropagation(e);
		if (this._contextMenu || this.isEdit()) {
			return;
		}
		this.fire('AnnotationMouseLeave', {
			originalEvent: e,
			latlng: latlng,
			layerPoint: layerPoint
		});
	},

	_onReplyClick: function (e) {
		L.DomEvent.stopPropagation(e);
		this._data.reply = this._nodeReplyText.value;
		// Assigning an empty string to .innerHTML property in some browsers will convert it to 'null'
		// While in browsers like Chrome and Firefox, a null value is automatically converted to ''
		// Better to assign '' here instead of null to keep the behavior same for all
		this._nodeReplyText.value = '';
		this.show();
		this._checkBounds();
		this._map.fire('AnnotationReply', {annotation: this});
	},

	_updateLayout: function () {
		var style = this._wrapper.style;
		style.width = '';
		style.whiteSpace = 'nowrap';

		style.whiteSpace = '';
	},

	_updateContent: function () {
		// .text() method will escape the string, does not interpret the string as HTML
		$(this._contentText).text(this._data.text);
		// Get the escaped HTML out and find for possible, useful links
		var linkedText = Autolinker.link($(this._contentText).html());
		// Set the property of text field directly. This is insecure otherwise because it doesn't escape the input
		// But we have already escaped the input before and only thing we are adding on top of that is Autolinker
		// generated text.
		this._contentText.innerHTML = linkedText;
		// Original unlinked text
		this._contentText.origText = this._data.text;
		$(this._nodeModifyText).text(this._data.text);
		$(this._contentAuthor).text(this._data.author);
		$(this._authorAvatarImg).attr('src', this._data.avatar);
		var user = this._map.getViewId(this._data.author);
		if (user >= 0) {
			var color = L.LOUtil.rgbToHex(this._map.getViewColor(user));
			$(this._authorAvatarImg).css('border-color', color);
		}

		var d = new Date(this._data.dateTime.replace(/,.*/, 'Z'));
		var dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
		$(this._contentDate).text((isNaN(d.getTime()) || this._map.getDocType() === 'spreadsheet')? this._data.dateTime: d.toLocaleDateString(String.locale, dateOptions));

		if (this._data.trackchange) {
			$(this._captionText).text(this._data.description);
		}
	},

	_updatePosition: function () {
		if (this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng);
			L.DomUtil.setPosition(this._container, pos);
		}
		this._checkBounds();
	},

	_updateScaling: function (scaleFactor, initialLayoutData) {
		if (!L.Browser.mobile)
			return;

		var wrapperWidth = Math.round(initialLayoutData.wrapperWidth * scaleFactor);
		this._wrapper.style.width = wrapperWidth + 'px';
		var wrapperFontSize = Math.round(initialLayoutData.wrapperFontSize * scaleFactor);
		this._wrapper.style.fontSize = wrapperFontSize + 'px';
		var contentAuthorHeight = Math.round(initialLayoutData.authorContentHeight * scaleFactor);
		this._contentAuthor.style.height = contentAuthorHeight + 'px';
		var dateFontSize = Math.round(initialLayoutData.dateFontSize * scaleFactor);
		this._contentDate.style.fontSize = dateFontSize + 'px';
		if (this._menu) {
			var menuWidth = Math.round(initialLayoutData.menuWidth * scaleFactor);
			this._menu.style.width = menuWidth + 'px';
			var menuHeight = Math.round(initialLayoutData.menuHeight * scaleFactor);
			this._menu.style.height = menuHeight + 'px';
		}

		var authorImageWidth = Math.round(this.options.imgSize.x * scaleFactor);
		var authorImageHeight = Math.round(this.options.imgSize.y * scaleFactor);
		this._authorAvatarImg.setAttribute('width', authorImageWidth);
		this._authorAvatarImg.setAttribute('height', authorImageHeight);
	}
});

L.annotation = function (latlng, data, options) {
	return new L.Annotation(latlng, data, options);
};

/* -*- js-indent-level: 8 -*- */
/*
 * L.DivOverlay
 */

L.DivOverlay = L.Layer.extend({

	initialize: function (latLngBounds, options) {
		this._latLngBounds = L.latLngBounds(latLngBounds);
		L.setOptions(this, options);
	},

	onAdd: function (map) {
		this._map = map;
		if (!this._container) {
			this._initLayout();
		}
		map._panes.overlayPane.appendChild(this._container);
	},

	onRemove: function (map) {
		map.removeLayer(this._annotation);
		map._panes.overlayPane.removeChild(this._container);
	},

	setLatLngBounds: function (latLngBounds) {
		this._latLngBounds = L.latLngBounds(latLngBounds);
		this.update();
	},

	update: function () {
		if (this._container && this._map) {
			var topLeft = this._map.latLngToLayerPoint(this._latLngBounds.getNorthWest());
			var size = this._map.latLngToLayerPoint(this._latLngBounds.getSouthEast()).subtract(topLeft);
			L.DomUtil.setPosition(this._container, topLeft);
			this._container.style.width = size.x + 'px';
			this._container.style.height = size.y + 'px';
		}
		if (this._annotation) {
			this._annotation.setLatLng(this._latLngBounds.getNorthEast());
		}
	},

	openAnnotation: function () {
		if (this._map && this._annotation && !this._map.hasLayer(this._annotation) &&
		    !this._annotation.isEdit()) {
			this._annotation.setLatLng(this._latLngBounds.getNorthEast());
			this._map.addLayer(this._annotation);
			this._annotation.show();
		}
	},

	editAnnotation: function () {
		if (this._map && this._annotation) {
			this._annotation.setLatLng(this._latLngBounds.getNorthEast());
			this._map.addLayer(this._annotation);
			this._annotation.edit();
			this._annotation.focus();
		}
	},

	closePopup: function () {
		if (this._map && this._annotation) {
			this._annotation.show();
			this._map.removeLayer(this._annotation);
		}
	},

	closeAnnotation: function (e) {
		if (this._map && this._annotation && this._map.hasLayer(this._annotation) &&
		    !this._annotation.isEdit() &&
		    !this._annotation.getBounds().contains(e.layerPoint)) {
			this._map.removeLayer(this._annotation);
		}
	},

	_onMouseLeave: function (e) {
		if (this._map && this._annotation && this._map.hasLayer(this._annotation) &&
		    !this._annotation.isEdit() &&
		    !this._latLngBounds.contains(e.latlng)) {
			this._map.removeLayer(this._annotation);
		}
	},

	bindAnnotation: function (annotation) {
		this._annotation = annotation;
		if (!this._handlersAdded) {
			this.on('mouseover', this.openAnnotation, this);
			this.on('mouseout', this.closeAnnotation, this);
			this._annotation.on('AnnotationMouseLeave', this._onMouseLeave, this);
			this._handlersAdded = true;
		}
		return this;
	},

	unbindAnnotation: function () {
		if (this._annotation) {
			this.off('mouseover', this.openAnnotation, this);
			this.off('mouseout', this.closeAnnotation, this);
			this._annotation.off('AnnoationMouseLeave', this._onMouseLeave, this);
			this._handlerAdded = false;
			this._annotation = null;
		}
		return this;
	},

	_initLayout: function () {
		this._container = L.DomUtil.create('div', 'loleaflet-div-layer');
		L.DomEvent.on(this._container, 'mouseover', this._fireMouseEvents, this);
		L.DomEvent.on(this._container, 'mouseout', this._fireMouseEvents, this);
		L.DomUtil.setOpacity(this._container, this.options.opacity);
		this.update();
	},

	_fireMouseEvents: function (e) {
		var containerPoint = this._map.mouseEventToContainerPoint(e),
		    layerPoint = this._map.containerPointToLayerPoint(containerPoint),
		    latlng = this._map.layerPointToLatLng(layerPoint);

		this.fire(e.type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});
	}
});

L.divOverlay = function (latLngBounds, options) {
	return new L.DivOverlay(latLngBounds, options);
};


/* -*- js-indent-level: 8 -*- */
/* global errorMessages getParameterByName accessToken accessTokenTTL accessHeader vex host */
/* global serviceRoot idleTimeoutSecs outOfFocusTimeoutSecs setupToolbar*/
/*eslint indent: [error, "tab", { "outerIIFEBody": 0 }]*/
(function (global) {

var wopiParams;
var wopiSrc = getParameterByName('WOPISrc');

if (wopiSrc !== '' && accessToken !== '') {
	wopiParams = { 'access_token': accessToken, 'access_token_ttl': accessTokenTTL };
}
else if (wopiSrc !== '' && accessHeader !== '') {
	wopiParams = { 'access_header': accessHeader };
}

var filePath = getParameterByName('file_path');
var permission = getParameterByName('permission') || 'edit';
var timestamp = getParameterByName('timestamp');
// Shows close button if non-zero value provided
var closebutton = getParameterByName('closebutton');
// Shows revision history file menu option
var revHistoryEnabled = getParameterByName('revisionhistory');
// Should the document go inactive or not
var alwaysActive = getParameterByName('alwaysactive');
// Loleaflet Debug mode
var debugMode = getParameterByName('debug');
if (wopiSrc === '' && filePath === '' && !window.ThisIsAMobileApp) {
	vex.dialog.alert(errorMessages.wrongwopisrc);
}
if (host === '' && !window.ThisIsAMobileApp) {
	vex.dialog.alert(errorMessages.emptyhosturl);
}

// loleaflet.js accesses these globals
// TODO: Get rid of these globals
global.closebutton = closebutton;
global.revHistoryEnabled = revHistoryEnabled;
var docURL, docParams;
var isWopi = false;
if (wopiSrc != '') {
	docURL = decodeURIComponent(wopiSrc);
	docParams = wopiParams;
	isWopi = true;
} else {
	docURL = filePath;
	docParams = {};
}

var notWopiButIframe = getParameterByName('NotWOPIButIframe') != '';

var map = L.map('map', {
	server: host,
	doc: docURL,
	serviceRoot: serviceRoot,
	docParams: docParams,
	permission: permission,
	timestamp: timestamp,
	documentContainer: 'document-container',
	debug: debugMode,
	// the wopi and wopiSrc properties are in sync: false/true : empty/non-empty
	wopi: isWopi,
	wopiSrc: wopiSrc,
	notWopiButIframe: notWopiButIframe,
	alwaysActive: alwaysActive,
	idleTimeoutSecs: idleTimeoutSecs,  // Dim when user is idle.
	outOfFocusTimeoutSecs: outOfFocusTimeoutSecs // Dim after switching tabs.
});

////// Controls /////
map.addControl(L.control.menubar());
setupToolbar(map);
map.addControl(L.control.scroll());
map.addControl(L.control.alertDialog());
map.addControl(L.control.lokDialog());
map.addControl(L.control.contextMenu());
map.addControl(L.control.infobar());
map.loadDocument(global.socket);

global.socket = map._socket;
window.addEventListener('beforeunload', function () {
	if (map && map._socket) {
		map._socket.close();
	}
});

if (!L.Browser.mobile) {
	L.DomEvent.on(document, 'contextmenu', L.DomEvent.preventDefault);
}

}(window));
}(window, document));
