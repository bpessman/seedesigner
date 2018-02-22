function string() {
  while (peek() != '"' && !isAtEnd()) {

    if (peek() == '\n') {
      line++;
    }
    nextCharacter();
  }

  if (current >= source.length) {
    errorList.push(new Error(line, "Unterminated string found."));
    return;
  }
  nextCharacter();


  var value = source.substring(start + 1, current - 1);
  addToken(STRING, value);
}
