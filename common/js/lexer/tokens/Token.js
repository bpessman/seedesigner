var Token = function(tokenType, lexeme, line, literal) {
  this.tokenType = tokenType;
  this.lexeme = lexeme;
  this.line = line;
  this.literal = literal;

  this.toString = function() {
    return "[TOKENTYPE]: " + tokenType + "\n[LEXEME]: " + lexeme + "\n[LITERAL]: " + literal + "\n[Line]: " + line + "\n\n";
  };

  this.getTokenType = function() {
    return this.tokenType;
  }

  this.getLexeme = function() {
    return this.lexeme;
  }

  this.getLine = function() {
    return this.line;
  }

  this.getLiteral = function() {
    return this.literal;
  }
};
