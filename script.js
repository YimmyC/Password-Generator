// This is my database: numbers, special characters, lowercase characters, uppercase letters
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upper = ['A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z',];
let lower = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',];
let special = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.',];
let passwordLength = [];
let password = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let allChoices = [];
  
  // ask user how long is password
  let passwordLength = window.prompt("Please choose a number between 8-128 for your password length");
    if (passwordLength<8 || passwordLength>128) {
      window.alert(`Password length not within range`);
      return;
    }
    

    
  // TODO: validate that they entered a number between 8 and 20
  // ask user if they want numbers
  let isNumbers = window.confirm("Do you want to include numbers?");
  // ask user if they want uppercase
  let isUpper = window.confirm("Do you want to include upper case?");

  // ask user if they want lowercase
  let isLower = window.confirm("Do you want to include lower case?");

  // ask user if they want special characters
  let isSpecial = window.confirm("Do you want to include special characters?");

  password = [];
  if (isNumbers === true) {
    //TODO: pick one random number and push it to password
      allChoices = allChoices.concat(number);
      let maximum = number.length - 1;
      let rnd = Math.floor(Math.random() * (number.length - 0 + 1)) + 0;
      password.push(number[rnd]);
      passwordLength --;
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upper);
    let maximum = upper.length - 1;
      let rnd = Math.floor(Math.random() * (upper.length - 0 + 1)) + 0;
      password.push(upper[rnd]);
      passwordLength --;
    
}
if (isLower === true) {
  allChoices = allChoices.concat(lower);
  let maximum = lower.length - 1;
      let rnd = Math.floor(Math.random() * (lower.length - 0 + 1)) + 0;
      password.push(lower[rnd]);
      passwordLength --;
  
}
if (isSpecial === true) {
  allChoices = allChoices.concat(special);
  let maximum = special.length - 1;
      let rnd = Math.floor(Math.random() * (special.length - 0 + 1)) + 0;
      password.push(special[rnd]);
      passwordLength --;
  
}
  for(let i = 0; i < passwordLength; i++){
    
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
  
  // create a password with random numbers
}
// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
