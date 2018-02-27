function parse(tokens) {
  var current = 0;
  program();

  function checkToken(typeOfToken, index) {
    if (tokens[index].getTokenType() == typeOfToken) {
      return true;
    }
    return false;
  }

  function program() {
    var statements = [];
    var t = 0;
    while(!checkToken(EOF)) {
      var statement = [];
      var i = 0;
      while(!checkToken(SEMICOLON)) {
        statement[i] = tokens[current];
        current++;
        i++
      }
      console.log(statement);
      current++;
      statements[t] = statement;
      t++;
    }

  }

  function statement() {

  }

  function expression() {

  }
}
