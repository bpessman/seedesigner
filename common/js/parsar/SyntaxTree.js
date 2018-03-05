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
function statementRectangle(id, type, x, y, width, height, red, green, blue) {
  this.id = id;
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.red = red;
  this.green = green;
  this.blue = blue;

  this.evaluate = function() {
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    shapeList.push("rect:" + id);
    rect.setAttribute("id", "rect:" + id);
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", "rgb(" + red + "," + green + "," + blue + ")");
    document.getElementById("canvas").appendChild(rect);
  };
}

// ======================= CIRCLE STATEMENT ======================= //
function statementCircle(id, type, cx, cy, radius, red, green, blue) {
  this.id = id;
  this.type = type;
  this.cx = cx;
  this.cy = cy;
  this.radius = radius;
  this.red = red;
  this.green = green;
  this.blue = blue;
  console.log("Ok");
  this.evaluate = function() {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    shapeList.push("circle:" + id);
    circle.setAttribute("id", "circle:" + id);
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "rgb(" + red + "," + green + "," + blue + ")");
    document.getElementById("canvas").appendChild(circle);
  };
}
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
function subtractionExpression(left, right) {
  this.left = left;
  this.right = right;

  return left - right;
}
// ======================= DIVISION EXPRESSION ======================= //
function divisionExpression(left, right) {
  this.left = left;
  this.right = right;

  return left / right;
}
// ======================= MULTIPLICATION EXPRESSION ======================= //
function multiplicationExpression(left, right) {
  this.left = left;
  this.right = right;

  return left * right;
}
// ======================= MOD EXPRESSION ======================= //
function modExpression(left, right) {
  this.left = left;
  this.right = right;

  return left % right;
}
