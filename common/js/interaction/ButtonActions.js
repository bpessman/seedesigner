function compileClicked() {
  var _tokens = run(source = document.getElementById("codeInputArea").value);
  var _ast = parse(_tokens);
}

function clearClicked() {
  document.getElementById("codeOutputArea").value = "";
}

function clearCodeClicked() {
  document.getElementById("codeInputArea").value = "";
}
