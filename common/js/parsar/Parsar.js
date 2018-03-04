function parse(tokens) {
  // Clears all these lists
  objectList = [];
  var statements = [];

  var currentToken = 0;

  // Splits tokens by statements and pushes into an arraylist
  while(!checkToken(EOF, currentToken, tokens)) {
    var statement = [];

    var i = 0;
    while(!checkToken(SEMICOLON, currentToken, tokens)) {
      statement[i] = tokens[currentToken];
      currentToken++;
      i++;
    }
    currentToken++;
    statements.push(statementss(statement));
  }

  // Evaluates all the statements
  for (i = 0; i < statements.length; i++) {
    statements[i].evaluate();
  }
}

function statementss(statement) {
// ======================= OBJECT CREATION STATEMENT ======================= //
  if (has(statement, VAR) && has(statement, ARROW)) {
    var id = statement[1].getLexeme();
    var value = statement[3].getLiteral();
    var type = statement[3].getTokenType();

    return new statementObjectCreation(id, value, type);
  }
// ======================= OBJECT CREATION STATEMENT ======================= //
  else if (has(statement, IDENTIFIER) && has(statement, ARROW)) {
    var id = statement[0].getLexeme();
    var value = statement[2].getLexeme();
    var type = statement[2].getTokenType();

    return new statementSetObjectValue(id, value, type);
  }
// ======================= PRINT STATEMENT ======================= //
  else if (has(statement, PRINT) && (has(statement, IDENTIFIER) || has(statement, STRING) || has(statement, NUMBER))) {
      var value = statement[1].getLexeme();
      var type = statement[1].getTokenType();

      return new statementPrint(value, type);
    }
// ======================= RECTANGLE STATEMENT ======================= //
  else if (has(statement, VAR) && has(statement, IDENTIFIER) && has(statement, RECTANGLE)) {
    // var dog = rectangle (x, y, width, height, red, green, blue);
    var id = statement[0].getLexeme();
    var type = statement[3].getTokenType();
    var x = statement[5].getLexeme();
    var y = statement[7].getLexeme();
    var width = statement[9].getLexeme();
    var height = statement[11].getLexeme();
    var red = statement[13].getLexeme();
    var green = statement[15].getLexeme();
    var blue = statement[17].getLexeme();
  }
// ======================= CIRCLE STATEMENT ======================= //

// ======================= ERROR HANDLING FOR UNKNOWN STATEMENTS ======================= //
  else {
    errorList.push(new Error(statement[0].getLine(), "This statement is not recognized!"));
  }
}

function expression() {

}
