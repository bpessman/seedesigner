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
    var identifier = statement[1].getLexeme();
    var value = statement[3].getLiteral();
    var type = statement[3].getTokenType();

    return new statementObjectCreation(identifier, value, type);
  }
// ======================= OBJECT CREATION STATEMENT ======================= //
  // else if (has(statement, IDENTIFIER) && has(statement, ARROW)) {
  //   var identifier = statement[0].getLexeme();
  //   var value;
  //   console.log(objectList);
  //   if (objectList.find(variable => variable.getName() == statement[2].getLexeme())) {
  //     console.log("k");
  //     value = objectList.find(variable => variable.getName() == statement[2].getLexeme()).getValue();
  //   } else {
  //     value = statement[2].getLiteral();
  //   }
  //   var type = statement[2].getTokenType();
  //
  //   return new statementSetObjectValue(identifier, value, type);
  // }
// ======================= PRINT STATEMENT ======================= //
  else if (has(statement, PRINT) && (has(statement, IDENTIFIER) || has(statement, STRING) || has(statement, NUMBER))) {
      var value = statement[1].getLexeme();

      return new statementPrint(value, type);
    }
// ======================= RECTANGLE STATEMENT ======================= //

// ======================= CIRCLE STATEMENT ======================= //

// ======================= ERROR HANDLING FOR UNKNOWN STATEMENTS ======================= //
  else {
    errorList.push(new Error(statement[0].getLine(), "This statement is not recognized!"));
  }
}

function expression() {

}
