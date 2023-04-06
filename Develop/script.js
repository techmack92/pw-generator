// Assignment Code
var generateBtn = document.querySelector("#generate");

var optionsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var optionsSpecial = ['!()-.?[]_`~;:@#$%^&*+=)'];

function generatePassword() {
  // 1. Prompt the user for password length (btwn 8-128)
  var lengthOfPw = prompt("How many characters would you like your password to contain?");

  // 2. Validate length of password
  // If user selects "cancel", end function
  if (!lengthOfPw) {
    return;
  }
  else if (lengthOfPw < 8 || lengthOfPw > 128) {
      alert("Length of password can be no less than 8 characters & no more than 128 characters.");
      return generatePassword();
    } 

  // Variables that prompt user to confirm password criteria
  var lowerCase = confirm("Click OK to confirm if you want to include lowercase characters.");
  var upperCase = confirm("Click OK to confirm if you want to include uppercase characters.");
  var numericChar = confirm("Click OK to confirm if you want numeric characters.");
  var specialChar = confirm("Click OK to confirm if you want special characters.");

  // 2a. Validate confirmation of lowerCase, upperCase, numericChar & specialChar
  if (!lowerCase && !upperCase && !numericChar && !specialChar) {
    alert("Please enter at least one character type.");
    return generatePassword();
  }






  














  // 3. Generate pw


  // 4. Display generated pw on page
  // return "Generated password will go here";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
