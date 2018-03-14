document.getElementById("codeInputArea").onkeydown = function(e) {
    textarea = document.getElementById("codeInputArea");

    if (e.keyCode === 9) { // Tab Key

        // Inserts a tab inbetween the String (or back/front)
        textarea.value = textarea.value.substring(0, textarea.selectionStart) + '\t' + textarea.value.substring(textarea.selectionEnd);

        // Resets the caret position
        textarea.selectionStart = textarea.selectionEnd
    }
};
