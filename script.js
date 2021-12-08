// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars = 0;
var charsToInclude = [];

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
    window.alert(charsToInclude.length);
    window.alert(charsToInclude);
    console.log(charsToInclude);
  }
}


  


  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
