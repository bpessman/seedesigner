function checkToken(typeOfToken, index, tokens) {
  if (tokens[index].getTokenType() == typeOfToken) {
    return true;
  }
  return false;
}

function has(statement, type) {
  for (i = 0; i < statement.length; i++) {
    if (statement[i].getTokenType() == type) {
      return true;
    }
  }
  return false;
}

// ----------------- OBJECT HELPER METHODS ----------------- //
function isAnObject(id) {
  for(var object in objectList) {
    if (objectList[object].id == id) {
      return true;
    }
  }
  return false;
}

function getObjectIndex(id) {
  index = 0;
  for (var object in objectList) {
    if (objectList[object].id == id) {
      return index;
    }
    index++;
  }
  return -1;
}

function createAnObject(id, value, type) {
  var object = Object.create(objects);
  object.id = id;
  object.value = value;
  object.type = type;
  return object;
}
