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

//capture DOM elements
const quantityEl = document.getElementById('quantity');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numericEl = document.getElementById('numeric');
const specialEl = document.getElementById('special');
const generateBtnEl = document.getElementById('generate');

// Assignment code here
function generatePassword(lower, upper, number, special, quantity) {
  
  //create password variable
  let createdPassword = '';
  //make sure to know which ones are checked and which are not
  const boxesChecked = lower + upper + number + special;
  //console.log(boxesChecked);

  //array of the checked boxes
  const boxesArr = [{ lower }, { upper }, { number }, { special }].filter
  (
    item => Object.values(item)[0]
  );
  //console.log(boxesArr);

  //if no boxes are checked then return nothing
  if(boxesChecked === 0) {
    return '';
  }
  //check that it is 8 or more characters
  if(quantity < '8') {
    return alert("Incorect number of Character. Please chose 8 or more.")
  }

  //loop over pwd quantity and call generator function for all types
  for (let i = 0; i < quantity; i += boxesChecked) {
    boxesArr.forEach(type => {
      const func = Object.keys(type)[0];
      //console.log(func);
      createdPassword += randomFunctions[func]();
      
    });
  }
  //console.log(createdPassword);
  return createdPassword;
}

// Write password to the #password input
function writePassword() {

  //get user input from DOM elements
   //get the number of the string
   const quantity = +quantityEl.value
   const isLower = lowercaseEl.checked;
   const isUpper = uppercaseEl.checked;
   const isNumeric = numericEl.checked;
   const isSpecial = specialEl.checked;
  //  console.log(isLower, isUpper, isNumeric, isSpecial);
  const password = generatePassword(isLower, isUpper, isNumeric, isSpecial, quantity);

  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);
