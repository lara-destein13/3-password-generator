var length = 0;
var eligibleCharacters = '';

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

function getNumeric() {
  while(true) {
    var response = window.prompt("Would you like your password to include numeric characters?");
    if (response !== null) {
      response = response.toLowerCase();
      if (response === 'n') {
        return;
      }
      if (response === 'y') {
        eligibleCharacters += '0123456789';
        return;
      }
    }
    alert('Please answer "Y" or "N"');
  }
}

function getLowercase() {
  while(true) {
    var response = window.prompt("Would you like your password to include lowercase letters?");
    if (response !== null) {
      response = response.toLowerCase();
      if (response === 'n') {
        return;
      }
      if (response === 'y') {
        eligibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
        return;
      }
    }
    alert('Please answer "Y" or "N"');
  }
}

function getUppercase() {
  while(true) {
    var response = window.prompt("Would you like your password to include uppercase letters?");
    if (response !== null) {
      response = response.toLowerCase();
      if (response === 'n') {
        return;
      }
      if (response === 'y') {
        eligibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return;
      }
    }
    alert('Please answer "Y" or "N"');
  }
}

function getSpecial() {
  while(true) {
    var response = window.prompt("Would you like your password to include special characters?");
    if (response !== null) {
      response = response.toLowerCase();
      if (response === 'n') {
        return;
      }
      if (response === 'y') {
        eligibleCharacters += ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
        return;
      }
    }
    alert('Please answer "Y" or "N"');
  }
}

function getCharacters() {
  while(true) {
    eligibleCharacters = '';
    getNumeric();
    getLowercase();
    getSpecial();
    getUppercase();
    if (eligibleCharacters.length > 0) {
      return;
    }
    alert('You must allow one or more of "digits", "lowercase", "special" or "uppercase"');
  }
}


function main() {
  getLength();
  alert(`length: ${length}`);
  getCharacters();
  alert(`eligibleCharacters: ${eligibleCharacters}`);
}

generateBtn.addEventListener("click", main);
