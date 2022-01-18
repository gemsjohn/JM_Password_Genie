// Assignment code here
const characters = 'abcdefghijklmnopqrstuvxyz';
const specialCharacters = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~'

function generatePassword() {
  
  passLength();
  caseToggle();
  numericToggle();
  specialCharactersToggle();
  //validator();
  //console.log(passwordArray);
  //console.log(validatorArray);
  console.log(randomPassword(passwordArray.length));
};

function passLength() {
  var passwordLength = window.prompt("What length do you want your password to be? Select a number between 8 and 128.");
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please provide a number between 8 and 128.");
    passLength();
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    // alert("Your password length has been set to " + passwordLength + ".");
    console.log(passwordLength);
    passwordArray.length = passwordLength;
    
  } else {
    window.alert("Please provide a number between 8 and 128.");
    passLength();
  }
  // return passwordLength;
};

function caseToggle() {
  var chooseCase = window.prompt("Do you want to use lowercase or uppercase? Enter 'lowercase' or 'uppercase'.");
  chooseCase = chooseCase.toLowerCase();
  if (chooseCase == 'lowercase') {
    // alert("You have chosen to use" + chooseCase + ".");
    console.log("lowercase");
    passwordArray.case = chooseCase;
  } else if (chooseCase == 'uppercase') {
    console.log("uppercase");
    passwordArray.case = chooseCase;
  } else {
    window.alert("Please enter either 'lowercase' or 'uppercase'.");
    return caseToggle();
  }
};
function numericToggle() {
  var numericOnOff = window.prompt("Would you like to use numbers in your password? Please enter 'yes' or 'no'.");
  numericOnOff = numericOnOff.toLowerCase();
  if (numericOnOff == 'yes') {
    console.log("numeric on");
    passwordArray.numeric = numericOnOff;
  } else if (numericOnOff == 'no') {
    console.log("numeric off");
    passwordArray.numeric = numericOnOff;
  } else {
    window.alert("Please enter either 'yes' or 'no'.");
    return numericToggle();
  }
};
function specialCharactersToggle() {
  var specialCharOnOff = window.prompt("Would you like to use special characters in your password? Please enter 'yes' or 'no'.")
  specialCharOnOff = specialCharOnOff.toLowerCase();
  if (specialCharOnOff == 'yes') {
    console.log("special characters on");
    passwordArray.special = specialCharOnOff;
  } else if (specialCharOnOff == 'no') {
    console.log("special characters off");
    passwordArray.special = specialCharOnOff;
  } else {
    window.alert("Please enter either 'yes' or 'no'.");
    return specialCharactersToggle();
  }
};
function validator() {
  var sum = 0;

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

  for (var i = 0; i < 4; i++) {
    sum += validatorArray[i];
  }
  if (sum === 0) {
    generatePassword();
  }
  console.log("Number of characteristics: " + sum);
};
function randomPassword(length) {
  var result = "";
  var charLength = characters.length;
  var specCharLength = specialCharacters.length;
  
   for (var i = 0; i < length; i++) {
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

   return result;
};

var passwordArray = {
    length: null,
    case: null,
    numeric: null,
    special: null
};
var validatorArray = [0, 0, 0, 0];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
