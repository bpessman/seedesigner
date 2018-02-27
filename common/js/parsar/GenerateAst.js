function evaluateAll(statementsParsed) {
  this.evaluate = function() {
    for(i = 0; i < statements.length; i++) {
      statementsParsed[i].evaluate();
    }
  }
}

function expressionAddition(a, b) {
  this.calc() = new function() {
    return a + b;
  }
}
