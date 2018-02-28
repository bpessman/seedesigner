var objectList = [];
var objectListNames = [];

var CreateObject = function(name, value, type) {
  this.name = name;
  this.value = value;
  this.type = type;

  this.toString = function() {
    return "Name: " + this.name + " Value: " + this.value + " Type: " + this.type;
  }

  this.getName = function() {
    return this.name;
  }

  this.getValue = function() {
    return this.value;
  }

  this.getType = function() {
    return this.type;
  }
};
