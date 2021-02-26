// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = lowToHigh(65, 90) 
var lowercaseLetters = lowToHigh(97, 122)
var numberCharacters = lowToHigh(48, 57) //instead of = [0,1,2,3,4,5,6,7,8,9];
var symbolCharacters = lowToHigh(33, 47).concat(lowToHigh(58, 64)).concat(
  lowToHigh(91, 96)).concat(lowToHigh(123, 126)
)
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var totalCharacters = prompt("How many characters would you like your password to contain?");
  var hasUpperCaseLetters = window.confirm("Would you like uppercase characters?");
  var hasNumbers = window.confirm("Would you like number characters?");
  var hasSpecialCharacters = window.confirm("Would you like special characters?");

var potenitalPasswordCharacters = lowercaseLetters
   if(hasUpperCaseLetters) potenitalPasswordCharacters = potenitalPasswordCharacters.concat(uppercaseLetters)
   if(hasNumbers) potenitalPasswordCharacters = potenitalPasswordCharacters.concat(numberCharacters)
   if(hasSpecialCharacters) potenitalPasswordCharacters = potenitalPasswordCharacters.concat(symbolCharacters)

   var passwordCharacter = []
   for (var i = 0; i < totalCharacters; i++) {
    var characterCode = potenitalPasswordCharacters[Math.floor(Math.random() * potenitalPasswordCharacters.length)]  
    passwordCharacter.push(String.fromCharCode(characterCode))
   }

   return passwordCharacter.join('')
  
  }

  function lowToHigh(low, high) {
    var array = []
     for(var i = low; i <= high; i++) {
         array.push(i)
     }
     return array
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// We need a Prompt to ask for the length of the password - Completed
// We need 4 more prompts - used 3 and set lowercase as default
// Each prompt will be for each character type - Completed
// Special, Number, LowerCase, UpperCase - Completed