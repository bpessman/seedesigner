var errorList = [];

var Error = function(line, message) {
  this.line = line;
  this.message = message;

  this.toString = function() {
    return "ERROR->[Line: " + line + "]:" + " " + message + "\n";
  };
};
