var parsarLineNumber;

function parse(tokens) {
  // Clears all these lists
  objectList = [];
  shapeList = [];
  parsarLineNumber = 0;
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
    statementss(statement).evaluate();
    parsarLineNumber++;
    //statements.push(statementss(statement));
  }
}

function statementss(statement) {
// ======================= OBJECT CREATION STATEMENT ======================= //
  if (has(statement, VAR) && has(statement, ARROW) && !has(statement, RECTANGLE) && !has(statement, CIRCLE) && !has(statement, LINE) && !has(statement, TEXT)) {
    var id = statement[1].getLexeme();
    var value = expression(statement.slice(3, statement.length));
    // var value = statement[3].getLiteral();
    var type = statement[3].getTokenType();

    return new statementObjectCreation(id, value, type);
  }
// ======================= OBJECT SET STATEMENT ======================= //
  else if (has(statement, IDENTIFIER) && has(statement, ARROW) && !has(statement, RECTANGLE) && !has(statement, CIRCLE)&& !has(statement, LINE) && !has(statement, TEXT)) {
    var id = statement[0].getLexeme();
    var value = expression(statement.slice(2, statement.length));
    var type = statement[2].getTokenType();

    return new statementSetObjectValue(id, value, type);
  }
// ======================= PRINT STATEMENT ======================= //
  else if (has(statement, PRINT) && (has(statement, IDENTIFIER) || has(statement, STRING) || has(statement, NUMBER))) {
    var value = expression(statement.slice(1, statement.length));
    var type = statement[1].getTokenType();

    return new statementPrint(value, type);
  }
// ======================= RECTANGLE STATEMENT ======================= //
  else if (has(statement, VAR) && has(statement, IDENTIFIER) && has(statement, RECTANGLE)) {
    var id = statement[1].getLexeme();
    var type = statement[3].getTokenType();
    var x = expression(statement.slice(5, 6));
    var y = expression(statement.slice(7, 8));
    var width = expression(statement.slice(9, 10));
    var height = expression(statement.slice(11, 12));
    var red = expression(statement.slice(13, 14));
    var green = expression(statement.slice(15, 16));
    var blue = expression(statement.slice(17, 18));

    return new statementRectangle(id, type, x, y, width, height, red, green, blue);
  }
// ======================= CIRCLE STATEMENT ======================= //
else if (has(statement, VAR) && has(statement, IDENTIFIER) && has(statement, CIRCLE)) {
  var id = statement[1].getLexeme();
  var type = statement[3].getTokenType();
  var cx = expression(statement.slice(5, 6));
  var cy = expression(statement.slice(7, 8));
  var radius = expression(statement.slice(9, 10));
  var red = expression(statement.slice(11, 12));
  var green = expression(statement.slice(13, 14));
  var blue = expression(statement.slice(15, 16));

  return new statementCircle(id, type, cx, cy, radius, red, green, blue);
}
// ======================= LINE STATEMENT ======================= //
else if (has(statement, VAR) && has(statement, IDENTIFIER) && has(statement, LINE)) {
  var id = statement[1].getLexeme();
  var type = statement[3].getTokenType();
  var x1 = expression(statement.slice(5, 6));
  var y1 = expression(statement.slice(7, 8));
  var x2 = expression(statement.slice(9, 10));
  var y2 = expression(statement.slice(11, 12));
  var red = expression(statement.slice(13, 14));
  var green = expression(statement.slice(15, 16));
  var blue = expression(statement.slice(17, 18));
  var strokeWidth = expression(statement.slice(19, 20));

  return new statementLine(id, type, x1, y1, x2, y2, red, green, blue, strokeWidth);
}
// ======================= TEXT STATEMENT ======================= //
else if (has(statement, VAR) && has(statement, IDENTIFIER) && has(statement, TEXT)) {
  var id = statement[1].getLexeme();
  var type = statement[3].getTokenType();
  var x = expression(statement.slice(5, 6));
  var y = expression(statement.slice(7, 8));
  var text = expression(statement.slice(9, 10));
  var red = expression(statement.slice(11, 12));
  var green = expression(statement.slice(13, 14));
  var blue = expression(statement.slice(15, 16));

  return new statementText(id, type, x, y, text, red, green, blue);
}
// ======================= ELLIPSE STATEMENT ======================= //

// ======================= POLYGON STATEMENT ======================= //

// ======================= POLYLINE STATEMENT ======================= //

// ======================= FIXEDUPDATE FUNCTION ======================= //

// ======================= ERROR HANDLING FOR UNKNOWN STATEMENTS ======================= //
  else {
    errorList.push(new Error(parsarLineNumber, "Parsar", "This statement is not recognized!"));
  }
}

function expression(tokens) {
  return expr(tokens);
}
