function runProgram() {
  resetInformation();

  parse(run(source = document.getElementById("codeInputArea").value));

  checkForErrors();
}

//----------------------------------------------------------------------------------------------
//    Checking/Displaying Errors after Run
//----------------------------------------------------------------------------------------------

function checkForErrors() {
  for (i = 0; i < errorList.length; i++) {
    console.log(errorList[i].getString());
  }
}

//----------------------------------------------------------------------------------------------
//    Resets all Global variables and the Canvas
//----------------------------------------------------------------------------------------------

function resetInformation() {
  var canvas = document.getElementById("canvas");
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }

  errorList = [];
  tokenList = [];
  line = 1;
  current = 0;
  start = 0;
  totalRuns = 0;
}
