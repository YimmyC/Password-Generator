// This is my database: numbers, special characters, lowercase characters, uppercase letters
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // create a number array with elements (numbers) 0-9
let passwordLength = 5;
let password = 'bigboy';


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
