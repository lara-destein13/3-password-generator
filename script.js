var length = 0;
var eligibleCharacters = '';

var generateBtn = document.querySelector("#generate");
var passwordArea = document.querySelector("#password");

// Prompt the user for length. If length does not meet requirements then print
// an error message and prompt the user again.
function getLength() {
  while(true) {
    length = window.prompt("Enter password length (8 to 128)");
    if (length !== null && length !== '') {
      length = parseInt(length);
      if (length >= 8 && length <= 128) {
        return length;
      }
    }
    alert(`Invalid length: ${length}`);
  }
}

// Prompt the user regarding numeric characters. If the response does not meet requirements then print
// an error message and prompt the user again.
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

// Prompt the user regarding lowercase characters. If the response does not meet requirements then print
// an error message and prompt the user again.
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

// Prompt the user regarding uppercase characters. If the response does not meet requirements then print
// an error message and prompt the user again.
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

// Prompt the user regarding special characters. If the response does not meet requirements then print
// an error message and prompt the user again.
function getSpecial() {
  while(true) {
    var response = window.prompt("Would you like your password to include special characters?");
    if (response !== null) {
      response = response.toLowerCase();
      if (response === 'n') {
        return;
      }
      if (response === 'y') {
        eligibleCharacters += '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
        return;
      }
    }
    alert('Please answer "Y" or "N"');
  }
}

// Prompt the user regarding character types. If the user has disallowed all character types
// print an error message and prompt the user again.
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

// Prompt user for length and character type requirements. Generate the password by randomly 
// selecting from the eligible characters. 
function main() {
  getLength();
  getCharacters();
  var password = '';
  for (let i = 0; i < length; i += 1) {
    var index = Math.floor(Math.random() * eligibleCharacters.length)
    var char = eligibleCharacters[index];
    password += char;
  }
  passwordArea.innerHTML = password;
}

generateBtn.addEventListener("click", main);
