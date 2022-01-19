// Assignment code here

// Constant variables used in conjunction with 
// Math.random() function in randomPassword() function
const characters = 'abcdefghijklmnopqrstuvxyz';
const specialCharacters = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~'

// When the user selects the Generate Password button
// all of these functions execute in order
function generatePassword() {
  passLength();
  caseToggle();
  numericToggle();
  specialCharactersToggle();
  validator();
  console.log(randomPassword(passwordArray.length));
};

// This function restricts the user to select
// a password length between 8 and 128. Any password
// length chosen outside of that range will request the user to 
// provide a number between 8 and 128.
function passLength() {
  var passwordLength = window.prompt("What length do you want your password to be? Select a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please provide a number between 8 and 128.");
    passLength();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    // console.log(passwordLength);
    passwordArray.length = passwordLength;
  } else {
    window.alert("Please provide a number between 8 and 128.");
    passLength();
  }
};

// This function forces the user the select lowercase
// or uppercase. Depending on the users choice the
// password letters with comply.
function caseToggle() {
  var chooseCase = window.prompt("Do you want to use lowercase or uppercase? Enter 'lowercase' or 'uppercase'.");
  chooseCase = chooseCase.toLowerCase();
  if (chooseCase == 'lowercase') {
    // console.log("lowercase");
    passwordArray.case = chooseCase;
  } else if (chooseCase == 'uppercase') {
    // console.log("uppercase");
    passwordArray.case = chooseCase;
  } else {
    window.alert("Please enter either 'lowercase' or 'uppercase'.");
    caseToggle();
  }
};

// This function toggles numeric characters 
// on or off.
function numericToggle() {
  var numericOnOff = window.prompt("Would you like to use numbers in your password? Please enter 'yes' or 'no'.");
  numericOnOff = numericOnOff.toLowerCase();
  if (numericOnOff == 'yes') {
    // console.log("numeric on");
    passwordArray.numeric = numericOnOff;
  } else if (numericOnOff == 'no') {
    // console.log("numeric off");
    passwordArray.numeric = numericOnOff;
  } else {
    window.alert("Please enter either 'yes' or 'no'.");
    numericToggle();
  }
};

// This function toggles special characters 
// on or off.
function specialCharactersToggle() {
  var specialCharOnOff = window.prompt("Would you like to use special characters in your password? Please enter 'yes' or 'no'.")
  specialCharOnOff = specialCharOnOff.toLowerCase();
  if (specialCharOnOff == 'yes') {
    // console.log("special characters on");
    passwordArray.special = specialCharOnOff;
  } else if (specialCharOnOff == 'no') {
    // console.log("special characters off");
    passwordArray.special = specialCharOnOff;
  } else {
    window.alert("Please enter either 'yes' or 'no'.");
    specialCharactersToggle();
  }
};

// This validator function commits information to an array.
// If password length, case, numeric, and/or special are 
// toggled on they recieve a value or 1. Otherwise 0.
function validator() {
  if (passwordArray.length >= 8 && passwordArray.length <= 128) {
    validatorArray[0] = 1;
  } else {
    validatorArray[0] = 0;
  }
  if (passwordArray.case == 'lowercase' || passwordArray.case == 'uppercase') {
    validatorArray[1] = 1;
  } else {
    validatorArray[0] = 0;
  }
  if (passwordArray.numeric == 'yes') {
    validatorArray[2] = 1;
  } else {
    validatorArray[2] = 0;
  }
  if (passwordArray.special == 'yes') {
    validatorArray[3] = 1;
  } else {
    validatorArray[3] = 0;
  }
};

// This function is the heart of the random generator. 
// This evaluates the validator conditions (i.e. what is activated and what isn't).
// Then depending on the validation conditions,
// a for loop is used to cycle through the desired password length.
// Using the Math.random function we randomly choose flip between
// letter, number, or special character. This way we dont end up
// with a predictable organization like letter, number, special, on repeat.
function randomPassword(length) {
  var result = "";
  var charLength = characters.length;
  var specCharLength = specialCharacters.length;

  if (validatorArray[0] && validatorArray[1] && validatorArray[2] && validatorArray[3]){
    passwordArray.condition = 1;
    // console.log("condition 1");
  } else if (validatorArray[0] && validatorArray[1] && validatorArray[2] && !validatorArray[3]) {
    passwordArray.condition = 2;
    // console.log("condition 2");
  } else if (validatorArray[0] && validatorArray[1] && !validatorArray[2] && validatorArray[3]) {
    passwordArray.condition = 3;
    // console.log("condition 3");
  } else if (validatorArray[0] && validatorArray[1] && !validatorArray[2] && !validatorArray[3]) {
    passwordArray.condition = 4;
    // console.log("condition 4");
  }

  for (var i = 0; i < length; i++) {
    if (passwordArray.condition == 1) {
      if (Math.random() <= 1 && Math.random() >= 0.66) {
        if (passwordArray.case == 'lowercase') {
          result += characters.toLowerCase().charAt(Math.floor(Math.random() * charLength));
        } else if (passwordArray.case == 'uppercase') {
          result += characters.toUpperCase().charAt(Math.floor(Math.random() * charLength));
        }
      } else if (Math.random() < 0.66 && Math.random() >= 0.33) {
        if (passwordArray.numeric == 'yes'){
          result += Math.floor(Math.random() * 9);
        }
      } else {
        if (passwordArray.special == 'yes') {
          result += specialCharacters.charAt(Math.floor(Math.random() * specCharLength));
        }
      }
    } 
    else if (passwordArray.condition == 2) {
      if (Math.random() >= 0.5) {
        if (passwordArray.case == 'lowercase') {
          result += characters.toLowerCase().charAt(Math.floor(Math.random() * charLength));
        } else if (passwordArray.case == 'uppercase') {
          result += characters.toUpperCase().charAt(Math.floor(Math.random() * charLength));
        }
      } else {
        if (passwordArray.numeric == 'yes'){
          result += Math.floor(Math.random() * 9);
        }
      }
    }
    else if (passwordArray.condition == 3) {
      if (Math.random() >= 0.5) {
        if (passwordArray.case == 'lowercase') {
          result += characters.toLowerCase().charAt(Math.floor(Math.random() * charLength));
        } else if (passwordArray.case == 'uppercase') {
          result += characters.toUpperCase().charAt(Math.floor(Math.random() * charLength));
        }
      } else {
        if (passwordArray.special == 'yes'){
          result += specialCharacters.charAt(Math.floor(Math.random() * specCharLength));
        }
      }
    } 
    else if (passwordArray.condition == 4) {
      if (passwordArray.case == 'lowercase') {
        result += characters.toLowerCase().charAt(Math.floor(Math.random() * charLength));
      } else if (passwordArray.case == 'uppercase') {
        result += characters.toUpperCase().charAt(Math.floor(Math.random() * charLength));
      }
    }
  }
   return result;
};

// This array is where all the conditions are stored.
// Password length, lowercase vs uppercase, numeric toggle, 
// special character toggle, and the conidtion (1, 2, 3 or 4)
var passwordArray = {
    length: null,
    case: null,
    numeric: null,
    special: null,
    condition: null
};

// Validator array is kind of like a boolean array because
// the values are either 0 or 1. This is dependent ont he validator() function.
var validatorArray = [0, 0, 0, 0];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert(randomPassword(passwordArray.length));
  // document.getElementById("password").innerHTML = randomPassword(passwordArray.length);

  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
