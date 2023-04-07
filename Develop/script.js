// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Password criteria options for uppercase, lowercase, numbers and special characters
  var optionsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var optionsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var optionsNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var optionsSpecial = ["!", "(", ")", "-", ".", "?", "[", "]", "_", "`", "~", ";", ":", "@", "#", "$", "%", "^", "&", "*", "+", "="];

  // 1. Prompt the user for length of password (between 8-128 characters)
  var lengthOfPw = prompt("How many characters would you like your password to contain?");

  // If user selects "cancel", end function
  if (!lengthOfPw) {
    return;
  }
  // 2. Validate length of password is between 8-128 characters
  // If user enters invalid input, function restarts
  else if (lengthOfPw < 8 || lengthOfPw > 128) {
      alert("Length of password can be no less than 8 characters & no more than 128 characters.");
      return generatePassword();
    } 

  // Prompt user to confirm if they want to include various password criteria
  var lowerCase = confirm("Click OK to confirm if you want to include lowercase characters.");
  var upperCase = confirm("Click OK to confirm if you want to include uppercase characters.");
  var numericChar = confirm("Click OK to confirm if you want numeric characters.");
  var specialChar = confirm("Click OK to confirm if you want special characters.");

  // 2a. Validate confirmation of lowerCase, upperCase, numericChar & specialChar
  // If user selects no criteria, function restarts
  if (!lowerCase && !upperCase && !numericChar && !specialChar) {
    alert("Please enter at least one character type.");
    return generatePassword();
  }

  // Store each critera option in a single variable "generatedResult"
  var generatedResult = [];

  if (upperCase) {
    generatedResult = generatedResult.concat(optionsUpper);
  }
  
  if (lowerCase) {
    generatedResult = generatedResult.concat(optionsLower);
  }

  if (numericChar) {
    generatedResult = generatedResult.concat(optionsNumeric);
  }

  if (specialChar) {
    generatedResult = generatedResult.concat(optionsSpecial);
  }

  // 3. Generate random password using user's chosen criteria
  var randomChar = "";
  for (var i = 0; i < lengthOfPw; i++){
    var randomIndex = Math.floor(Math.random() * generatedResult.length);
    randomChar = randomChar + generatedResult[randomIndex];
    }

  // 4. Display generated pw on page
  return randomChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
