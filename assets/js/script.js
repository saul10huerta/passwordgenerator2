//generator functions
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecial () {
  const special = '!@#$%^&*(){}[]=<>/,.';
  return special [Math.floor(Math.random() * special.length)]
}
//object for generator functions created
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};

//DOM elements
const resultEl = document.getElementById('result');
const quantityEl = document.getElementById('quantity');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numericEl = document.getElementById('numeric');
const specialEl = document.getElementById('special');
const generateBtnEl = document.getElementById('generate');

// Assignment code here
function generatePassword() {
  
  //get user input from DOM elements
   //get the number of the string
  const quantity = +quantityEl.value
  const isLower = lowercaseEl.checked;
  const isUpper = uppercaseEl.checked;
  const isNumeric = numericEl.checked;
  const isSpecial = specialEl.checked;

  //create password variable
  let createdPassword = '';
  //make sure to know which ones are checked and which are not
  const boxesChecked = isLower + isNumeric + isUpper + isSpecial;
  //console.log(boxesChecked);

  //array of the checked boxes
  const boxesArr = [{ isLower }, { isUpper }, { isNumeric }, { isSpecial }].filter
  (
    item => Object.values(item) [0]
  );
  console.log(boxesArr);

  //if no boxes are checked then return nothing
  if(boxesChecked === 0) {
    return '';
  }

  //loop over length and call generator function for all types
  
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);
