// ======================= OBJECT CREATION STATEMENT ======================= //
function StatementObjectCreation(identifier, value, type) {
  this.identifier = identifier;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (!objectList.find(variable => variable.getName() == identifier)) {
      objectList.push(new CreateObject(identifier, value, type))
    } else {
      errorList.push(new Error(null, "You have already created a '" + identifier + "' object."));
    }
  };
}

// ======================= OBJECT SET VALUE STATEMENT ======================= //
function StatementSetObjectValue(identifier, value, type) {
  this.identifier = identifier;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (objectList.find(variable => variable.getName() == identifier)) {
      // Stupidly Inefficient Code
      var index;
      var counter = 0;
      objectList.forEach(function(element) {
        if (element.getName() == identifier) {
          index = counter;
        }
        counter++;
      });
      // Stupidly Inefficient Code Ends Here

      if (objectList.find(variable => variable.getName() == value)) {
        value = objectList.find(variable => variable.getName() == value).getValue();
      }

      objectList.splice(index, 1);
      objectList.push(new CreateObject(identifier, value, type))
    } else {
      errorList.push(new Error(null, "You have not created a '" + identifier + "' object."));
    }
  };
}

// ======================= PRINT STATEMENT ======================= //
function StatementPrint(value, type) {
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if(type == IDENTIFIER && !objectList.find(variable => variable.getName() == value)) {
      errorList.push(new Error(null, "You tried using a identifier which was not initialized yet!"));
    } else {
      if (objectList.find(variable => variable.getName() == value)) {
        codeOutputArea.value += objectList.find(variable => variable.getName() == value).getValue() + "\n";
      } else {
        codeOutputArea.value += value + "\n";
      }
    }
  };
}

// ======================= RECTANGLE STATEMENT ======================= //

// ======================= CIRCLE STATEMENT ======================= //

// ======================= ELLIPSE STATEMENT ======================= //

// ======================= LINE STATEMENT ======================= //

// ======================= POLYGON EXPRESSION ======================= //

// ======================= POLYLINE STATEMENT ======================= //

// ======================= TEXT STATEMENT ======================= //

// ======================= ADDITION EXPRESSION ======================= //
function ExpressionAddition(a, b) {
    this.a = a;
    this.b = b;
    this.evaluate = function() {
      //Do Stuff Here
    }
}

// ======================= SUBTRACTION EXPRESSION ======================= //
function ExpressionSubtraction(a, b) {
  this.a = a;
  this.b = b;
  this.evaluate = function() {
    //Do Stuff Here
  }
}

// ======================= MULTIPLICATION EXPRESSION ======================= //
function ExpressionMultiplication(a, b) {
  this.a = a;
  this.b = b;
  this.evaluate = function() {
    //Do Stuff Here
  }
}

// ======================= DIVISION EXPRESSION ======================= //
function ExpressionDivision(a, b) {
  this.a = a;
  this.b = b;
  this.evaluate = function() {
    //Do Stuff Here
  }
}
