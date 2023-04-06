// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Prompt the user for password criteria
  //    a. Password length (btwn 8-128)
  //    b. upper/lower case, numbers, special characters
  var lengthOfPw = prompt("How many characters would you like your password to contain?");
  var lowerCase = confirm("Click OK to confirm if you want to include lowercase characters.");
  var upperCase = confirm("Click OK to confirm if you want to include uppercase characters.");
  var numericChar = confirm("Click OK to confirm if you want numeric characters.");
  var specialChar = confirm("Click OK to confirm if you want special characters.");

// 2. Validate the input















// 3. Generate pw


  // 4. Display generated pw on page
    return "Generated password will go here";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
