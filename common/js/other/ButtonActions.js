function compileClicked() {
  runProgram();
}

function clearClicked() {
  document.getElementById("codeOutputArea").value = "";
}

function clearCodeClicked() {
  document.getElementById("codeInputArea").value = "";
}

function playClicked() {

}

function pauseClicked() {

}


document.getElementById('codeInputArea').addEventListener('blur', e => {
  e.target.focus();
});
