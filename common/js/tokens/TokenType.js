// Single-Character Tokens
var LEFT_PAREN = "LEFT_PAREN";
var RIGHT_PAREN = "RIGHT_PAREN";
var RIGHT_BRACE = "RIGHT_BRACE";
var LEFT_BRACE = "LEFT_BRACE";
var COMMA = "COMMA";
var DOT = "DOT";
var MINUS = "MINUS";
var PLUS = "PLUS";
var SEMICOLON = "SEMICOLON";
var COLON = "COLON";
var SLASH = "SLASH";
var STAR = "STAR";

// One or Two Character tokens
var NOT = "NOT";
var NOT_EQUAL = "NOT_EQUAL";
var EQUAL = "EQUAL";
var EQUAL_EQUAL = "EQUAL_EQUAL";
var GREATER = "GREATER";
var GREATER_EQUAL = "GREATER_EQUAL";
var LESS = "LESS";
var LESS_EQUAL = "LESS_EQUAL";
var PLUS_PLUS = "PLUS_PLUS";
var MINUS_MINUS = "MINUS_MINUS";

// Literals
var IDENTIFIER = "IDENTIFIER";
var STRING = "STRING";
var NUMBER = "NUMBER";

// Keywords
var AND = "AND";
var CLASS = "CLASS";
var ELSE = "ELSE";
var FALSE = "FALSE";
var FUNCT = "FUNCT";
var FOR = "FOR";
var IF = "IF";
var NULL = "NULL";
var OR = "OR";
var PRINT = "PRINT";
var RETURN = "RETURN";
var THIS = "THIS";
var TRUE = "TRUE";
var VAR = "VAR";
var WHILE = "WHILE";
var NEW = "NEW";

// SVG Object Keywords
var RECTANGLE = "RECTANGLE";
var CIRCLE = "CIRCLE";
var ELLIPSE = "ELLIPSE";
var LINE = "LINE";
var POLYGON = "POLYGON";
var POLYLINE = "POLYLINE";
var TEXT = "TEXT";

// Keywords in a Map
var keywordsList = new Map();
keywordsList.set("and" , AND);
keywordsList.set("class" , CLASS);
keywordsList.set("else" , ELSE);
keywordsList.set("false" , FALSE);
keywordsList.set("funct" , FUNCT);
keywordsList.set("for" , FOR);
keywordsList.set("if" , IF);
keywordsList.set("null" , NULL);
keywordsList.set("or" , OR);
keywordsList.set("print" , PRINT);
keywordsList.set("return" , RETURN);
keywordsList.set("this" , THIS);
keywordsList.set("true" , TRUE);
keywordsList.set("var" , VAR);
keywordsList.set("while" , WHILE);
keywordsList.set("new", NEW);
keywordsList.set("rectangle", RECTANGLE);
keywordsList.set("circle", CIRCLE);
keywordsList.set("ellipse", ELLIPSE);
keywordsList.set("line", LINE);
keywordsList.set("polygon", POLYGON);
keywordsList.set("polyline", POLYLINE);
keywordsList.set("text", TEXT);

// Special
var EOF = "EOF";
