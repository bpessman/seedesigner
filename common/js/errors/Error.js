var errorList = [];

var Error = function(line, location, message) {
  this.line = line;
  this.message = message;
  this.location = location;

  this.toString = function() {
    return "\t[Line: " + line + "][Location: " + location +  "] ->" + " " + message + "\n";
  };
};
