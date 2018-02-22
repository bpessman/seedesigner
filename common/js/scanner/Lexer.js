var tokenList;
var source;
var line;
var current;
var start;
var totalRuns = 0;

window.onload = function() {
  var s = "";
  for (i = 1; i <= 45; i++) {
    s += i + ".\n";
  }
  document.getElementById("codeLineNumberArea").value = s;
}

function run() {
  source = document.getElementById("codeInputArea").value;

  errorList = [];
  tokenList = [];
  line = 1;
  current = 0;
  start = 0;

  while(!isAtEnd()) {
    start = current;
    scanToken();
  }
  
  totalRuns++;
  tokenList.push(new Token(EOF, "", line, null));
  displayTokenOutput(tokenList);
  console.log(errorList);
}

function scanToken() {
  var c = nextCharacter();
  switch(c) {
    case '(':
      addToken(LEFT_PAREN, null);
      break;
    case ')':
      addToken(RIGHT_PAREN, null);
      break;
    case '{':
      addToken(LEFT_BRACE, null);
      break;
    case '}':
      addToken(RIGHT_BRACE, null);
      break;
    case ',':
      addToken(COMMA, null);
      break;
    case '.':
      addToken(DOT, null);
      break;
    case '-':
      addToken(match('-') ? MINUS_MINUS : MINUS, null);
      break;
    case '+':
      addToken(match('+') ? PLUS_PLUS : PLUS, null);
      break;
    case ';':
      addToken(SEMICOLON, null);
      break;
    case '/':
      if (match('/')) {
        while (peek() != '\n' && !isAtEnd()) nextCharacter();
      } else {
        addToken(SLASH, null);
      }
      break;
    case '*':
      addToken(STAR, null);
      break;
    case '!':
      addToken(match('=') ? NOT_EQUAL : NOT, null);
      break;
    case '=':
      addToken(match('=') ? EQUAL_EQUAL : EQUAL, null);
      break;
    case '<':
      addToken(match('=') ? LESS_EQUAL : LESS, null);
      break;
    case '>':
      addToken(match('=') ? GREATER_EQUAL : GREATER, null);
      break;
    case ' ':
      break;
    case '\r':
      break;
    case '\t':
      break;
    case '\n':
      line++;
      break;
    case '"':
      string();
      break;

    default:
      if (isDigit(c)) {
        number();
      } else if(isAlpha) {
        identifier();
      } else {
        errorList.push(new Error(line, "Unexpected '" + c + "' character."));
      }
  }
}

function displayTokenOutput(tokenList) {
  codeOutputArea.value += "\n<===================== [End of Run: " + totalRuns + "] =====================>\n" + tokenList
  + "Total Errors: [" + errorList.length + "]\n" + errorList;
}
