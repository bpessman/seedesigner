function parse(tokens) {
  var currentToken = 0;
  program();

  function checkToken(typeOfToken, index) {
    if (tokens[index].getTokenType() == typeOfToken) {
      return true;
    }
    return false;
  }

  function program() {
    var objectList = [];
    var objectListNames = [];

    var statements = [];

    while(!checkToken(EOF, currentToken)) {
      var statement = [];
      var i = 0;
      while(!checkToken(SEMICOLON, currentToken)) {
        statement[i] = tokens[currentToken];
        currentToken++;
        i++;
      }

      currentToken++;
      statements.push(statement);
    }
// ------------- This stuff should change ------------- //
    console.log(statements);
    for (c = 0; c < statements.length; c++) {
      var statement = statements[c];
      var statementLength = statement.length;

      if (statement[0].getTokenType() == NUMBER) {
        var a = statement[0].getLiteral();
        if (statement[1].getTokenType() == PLUS) {
          if(statement[2].getTokenType() == NUMBER) {
            var b = statement[2].getLiteral();
            codeOutputArea.value += expressionAddition(a,b) + "\n";
          }
        } else if (statement[1].getTokenType() == MINUS) {
          if(statement[2].getTokenType() == NUMBER) {
            var b = statement[2].getLiteral();
            codeOutputArea.value += expressionSubtraction(a,b) + "\n";
          }
        } else if (statement[1].getTokenType() == SLASH) {
          if(statement[2].getTokenType() == NUMBER) {
            var b = statement[2].getLiteral();
            codeOutputArea.value += expressionDivision(a,b) + "\n";
          }
        } else if (statement[1].getTokenType() == STAR) {
          if(statement[2].getTokenType() == NUMBER) {
            var b = statement[2].getLiteral();
            codeOutputArea.value += expressionMultiplication(a,b) + "\n";
          }
        }
      } else if (statement[0].getTokenType() == VAR) {
        if (statement[1].getTokenType() == IDENTIFIER) {
          if (statement.length > 2 && statement[2].getTokenType() == ARROW) {
            if (statement.length > 3 && (statement[3].getTokenType() ==  STRING || statement[3].getTokenType() == NUMBER)) {
              objectList[objectList.length] = (new CreateObject(statement[1].getLexeme(), statement[3].getLiteral(), statement[3].getTokenType()));
            } else if (statement.length > 3 && objectList.find(variable => variable.getName() == statement[3].getLexeme())) {
              var value = objectList.find(variable => variable.getName() == statement[3].getLexeme()).getValue();
              var type = objectList.find(variable => variable.getName() == statement[3].getLexeme()).getType();
              objectList[objectList.length] = (new CreateObject(statement[1].getLexeme(), value, type));
            }
          }
        }
      } else if (statement[0].getTokenType() == IDENTIFIER) {
        if (objectList.find(variable => variable.getName() == statement[0].getLexeme())) {
          if (statement[1].getTokenType() == PLUS) {
            if (objectList.find(variable => variable.getName() == statement[2].getLexeme())) {
              var a = objectList.find(variable => variable.getName() == statement[0].getLexeme()).getValue();
              var b = objectList.find(variable => variable.getName() == statement[2].getLexeme()).getValue();
              codeOutputArea.value += "[Identifier A:] " + statement[0].getLexeme() + " [Identifier B:] " +
                                      statement[2].getLexeme() + " [Value:] " + expressionAddition(a,b) + "\n";
            }
          }
          else if (statement[1].getTokenType() == MINUS) {
            if (objectList.find(variable => variable.getName() == statement[2].getLexeme())) {
              var a = objectList.find(variable => variable.getName() == statement[0].getLexeme()).getValue();
              var b = objectList.find(variable => variable.getName() == statement[2].getLexeme()).getValue();
              codeOutputArea.value += "[Identifier A:] " + statement[0].getLexeme() + " [Identifier B:] " +
                                      statement[2].getLexeme() + " [Value:] " + expressionSubtraction(a,b) + "\n";
            }
          }
          else if (statement[1].getTokenType() == STAR) {
            if (objectList.find(variable => variable.getName() == statement[2].getLexeme())) {
              var a = objectList.find(variable => variable.getName() == statement[0].getLexeme()).getValue();
              var b = objectList.find(variable => variable.getName() == statement[2].getLexeme()).getValue();
              codeOutputArea.value += "[Identifier A:] " + statement[0].getLexeme() + " [Identifier B:] " +
                                      statement[2].getLexeme() + " [Value:] " + expressionMultiplication(a,b) + "\n";
            }
          }
          else if (statement[1].getTokenType() == SLASH) {
            if (objectList.find(variable => variable.getName() == statement[2].getLexeme())) {
              var a = objectList.find(variable => variable.getName() == statement[0].getLexeme()).getValue();
              var b = objectList.find(variable => variable.getName() == statement[2].getLexeme()).getValue();
              codeOutputArea.value += "[Identifier A:] " + statement[0].getLexeme() + " [Identifier B:] " +
                                      statement[2].getLexeme() + " [Value:] " + expressionDivision(a,b) + "\n";
            }
          }
        }
      }
    }
    for (i = 0; i < objectList.length; i++) {
      codeOutputArea.value += "[Object:] " + objectList[i].getName() + " [Value:] " + objectList[i].getValue() + "\n";
    }
// ------------- This stuff should change ------------- //
  }

  function statement() {

  }

  function expression() {

  }
}
