var length = 0;

var generateBtn = document.querySelector("#generate");

function getLength() {
  while(true) {
    length = window.prompt("Enter password length (8 to 128)");
    if (length !== null) {
      length = parseInt(length);
      if (length >= 8 && length <= 128) {
        return length;
      }
    }
    alert(`Invalid length: ${length}`);
  }
}

function main() {
  getLength();
  alert(`length: ${length}`);
}

generateBtn.addEventListener("click", main);
