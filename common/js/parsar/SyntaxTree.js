// ======================= OBJECT CREATION STATEMENT ======================= //
function statementObjectCreation(id, value, type) {
  this.id = id;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (!isAnObject(id)) {
      console.log(value);
      if (isAnObject(value)) {
        console.log("H");
        objectList.push(createAnObject(id,objectList[getObjectIndex(value)].value,type));
      } else {
        objectList.push(createAnObject(id,value,type));
      }
    } else {
      errorList.push(new Error(null, "You have already created a '" + id + "' object."));
    }
  };
}

// ======================= OBJECT SET VALUE STATEMENT ======================= //
function statementSetObjectValue(id, value, type) {
  this.id = id;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (isAnObject(id)) {
      if (isAnObject(value)) {
        value = objectList[getObjectIndex(value)].value;
      }

      objectList.splice(getObjectIndex(id), 1);
      objectList.push(createAnObject(id,value,type));
    } else {
      errorList.push(new Error(null, "You have not created a '" + id + "' object."));
    }
  };
}

// ======================= PRINT STATEMENT ======================= //
function statementPrint(value, type) {
  this.value = value;

  this.evaluate = function() {
    if(type == IDENTIFIER && !isAnObject(value)) {
      errorList.push(new Error(null, "You tried using a identifier which was not initialized yet!"));
    } else {
      if (isAnObject(value)) {
        codeOutputArea.value += objectList[getObjectIndex(value)].value + "\n";
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
function additionExpression(left, right) {
  this.left = left;
  this.right = right;

  return left + right;
}
// ======================= SUBTRACTION EXPRESSION ======================= //

// ======================= DIVISION EXPRESSION ======================= //

// ======================= MULTIPLICATION EXPRESSION ======================= //

// ======================= MOD EXPRESSION ======================= //
