// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars = 0;
var charsToInclude = [];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '&', '*'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random()*(max-min) + min);
}

function generatePassword() {
  numberOfChars = window.prompt("Enter a number of characters for your password between 8 and 128:"); 
   if(numberOfChars >= 8 && numberOfChars <= 128) {
    charsToInclude[0] = window.confirm("Include lower-case letters?");
  }else{
    window.alert("Invalid entry");
  }
  if(charsToInclude[0] == true || charsToInclude[0] == false) {
    charsToInclude[1] = window.confirm("Include upper-case letters?");
  }
  if(charsToInclude[1] == true || charsToInclude[1] == false) {
    charsToInclude[2] = window.confirm("Include numeric characters?");
  }
  if(charsToInclude[2] == true || charsToInclude[2] == false) {
    charsToInclude[3] = window.confirm("Include special characters?");
  }
  if(charsToInclude[3] == true || charsToInclude[3] == false) {
    window.alert(charsToInclude);
  }
  var lowSelIndex = getRandomInt(0, lowerCase.length);
  var lowSel = lowerCase[lowSelIndex];

  var upSelIndex = getRandomInt(0, upperCase.length);
  var upSel = upperCase[upSelIndex];

  var numSelIndex = getRandomInt(0, numeric.length);
  var numSel = numeric[numSelIndex];

  var specSelIndex = getRandomInt(0, special.length);
  var specSel = special[specSelIndex];

  return window.alert(lowSel + upSel + numSel + specSel); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
