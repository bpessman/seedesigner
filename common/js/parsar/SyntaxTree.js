// ======================= OBJECT CREATION STATEMENT ======================= //
function statementObjectCreation(id, value, type) {
  this.id = id;
  this.value = value;
  this.type = type;

  this.evaluate = function() {
    if (!isAnObject(id)) {
      if (isAnObject(value)) {
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
    shapeList.push(id);
    rect.setAttribute("id", id);
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

  this.evaluate = function() {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    shapeList.push(id);
    circle.setAttribute("id", id);
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "rgb(" + red + "," + green + "," + blue + ")");
    document.getElementById("canvas").appendChild(circle);
  };
}
// ======================= ELLIPSE STATEMENT ======================= //

// ======================= LINE STATEMENT ======================= //
function statementLine(id, type, x1, y1, x2, y2, red, green, blue, strokeWidth) {
  this.id = id;
  this.type = type;
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.strokeWidth = strokeWidth;

  this.evaluate = function() {
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    shapeList.push(id);
    line.setAttribute("id", id);
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("style", "stroke:rgb(" + red + "," + green + "," + blue + ");stroke-width:" + strokeWidth);
    document.getElementById("canvas").appendChild(line);
  };
}
// ======================= POLYGON EXPRESSION ======================= //

// ======================= POLYLINE STATEMENT ======================= //

// ======================= TEXT STATEMENT ======================= //
function statementText(id, type, x, y, text, red, green, blue) {
  this.id = id;
  this.type = type;
  this.x = x;
  this.y = y;
  this.text = text;
  this.red = red;
  this.green = green;
  this.blue = blue;

  this.evaluate = function() {
    var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    shapeList.push(id);
    textElement.setAttribute("id", id);
    textElement.setAttribute("x", x);
    textElement.setAttribute("y", y);
    textElement.setAttribute("fill", "rgb(" + red + "," + green + "," + blue + ")");
    textElement.innerHTML = text;
    document.getElementById("canvas").appendChild(textElement);
  };
}

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
