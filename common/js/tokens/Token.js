var Token = function(tokenType, lexeme, line, literal) {
  this.tokenType = tokenType;
  this.lexeme = lexeme;
  this.line = line;
  this.literal = literal;

  this.toString = function() {
    return "[TOKENTYPE]: " + tokenType + "\n[LEXEME]: " + lexeme + "\n[LITERAL]: " + literal + "\n[Line]: " + line + "\n\n";
  };
};
