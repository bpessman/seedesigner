function runProgram() {
  var canvas = document.getElementById("canvas");
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }

  var _tokens = run(source = document.getElementById("codeInputArea").value);
  var _ast = parse(_tokens);

  console.log("Total Errors: [" + errorList.length + "]\n" + errorList + "\n" + "================= [END OF RUN] ==================\n");
}
