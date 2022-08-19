var charLength;
var charArr = [];

var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // verify that user selected at least one character type
  var verifyCriteria = getCriteria();
  var passwordText = document.querySelector("#password");

  if (verifyCriteria) {
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
  } 
    else {
      passwordText.value = "Please choose at least one character type.";
  }
}

// 1. Prompt user for criteria & length
function getCriteria() {
  charArr = [];
// a. Password length (8 to 128)
  charLength = parseInt(prompt("What length password would you like to generate? (8 - 128 characters)"));
  
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
  alert("Please enter a number between 8 and 128");
  return false;
  }
// b. Prompts for criteria used in password 
  if (confirm("Would you like lowercase letters to be included in your password?")) {
    charArr = charArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters to be included in your password?")) {
    charArr = charArr.concat(upperCaseArr);
  }
  if (confirm("Would you like numbers to be included in your password?")) {
    charArr = charArr.concat(numbersArr);
  }
  if (confirm("Would you like special characters to be included in your password?")) {
    charArr = charArr.concat(specCharArr);
  }
  return true;
}

  
// generate password based on criteria selected
function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomChar = Math.floor(Math.random() * charArr.length);
    password = password + charArr[randomChar];
  }

  return password;
} 


  
  
  
  
    