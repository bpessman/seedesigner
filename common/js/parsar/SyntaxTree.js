// ======================= OBJECT CREATION STATEMENT ======================= //
function statementObjectCreation(id, value, type) {
  this.id = id;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (objectList.hasOwnProperty("id") != id) {
      var object = Object.create(objects);

      object.id = id;
      object.value = value;
      object.type = type;

      objectList.push(object);
    } else {
      errorList.push(new Error(null, "You have already created a '" + id + "' object."));
    }
  };
}

// ======================= OBJECT SET VALUE STATEMENT ======================= //
// function statementSetObjectValue(identifier, value, type) {
//   this.identifier = identifier;
//   this.value = value;
//   this.type = type;
//
//   this.evaluate = function() {
//     if (objectList.find(variable => variable.getName() == identifier)) {
//       // Stupidly Inefficient Code
//       var index;
//       var counter = 0;
//       console.log("Test: " + objectList.hasOwnProperty("name"));
//       objectList.forEach(function(element) {
//         if (element.getName() == identifier) {
//           index = counter;
//         }
//         counter++;
//       });
//       // Stupidly Inefficient Code Ends Here
//
//       if (objectList.find(variable => variable.getName() == value)) {
//         value = objectList.find(variable => variable.getName() == value).getValue();
//       }
//
//       objectList.splice(index, 1);
//       objectList.push(new CreateObject(identifier, value, type))
//     } else {
//       errorList.push(new Error(null, "You have not created a '" + identifier + "' object."));
//     }
//   };
// }

// ======================= PRINT STATEMENT ======================= //
function statementPrint(value) {
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
