// generatePassword() function with initial questions
var generatePassword = function () {
  askPasswordLength();
  askPasswordCriteria();

  var password = "";

  // Generate random password
  for (var i = 0; i < passwordLength; i++) {
    password =
      password + criteriaArray[randomNumber(0, criteriaArray.length - 1)];
  }

  // Reset password length
  passwordLength = "";

  return password;
};

// Creating a function that lets us choose randomly based on two variables
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
};

// Asks for how many characters we need the password to be
var askPasswordLength = function () {
  // Loop to check if length is eligible
  while (
    isNaN(passwordLength) ||
    passwordLength <= 7 ||
    passwordLength >= 129
  ) {
    passwordLength = Number(
      prompt(
        "Please enter in a password length with at least 8 characters and up to 128 characters."
      )
    );
  }

  return passwordLength;
};

// Asks for which criteria they want to use in a row
var askPasswordCriteria = function () {
  // Ask which characters they'd like to use
  var lowercaseConfirm = window.confirm(
    "Would you like to use LOWERCASE letters in your password?"
  );

  var uppercaseConfirm = window.confirm(
    "Would you like to use UPPERCASE letters in your password?"
  );

  var numbersConfirm = window.confirm(
    "Would you like to use NUMBERS in your password?"
  );

  var specialConfirm = window.confirm(
    "Would you like to use SPECIAL CHARACTERS in your password?"
  );

  // Add characters if confirmed
  if (lowercaseConfirm) {
    criteriaArray = lowercase;
  }

  if (uppercaseConfirm && !lowercaseConfirm) {
    criteriaArray = uppercase;
  } else if (uppercaseConfirm) {
    criteriaArray = criteriaArray.concat(uppercase);
  }

  if (numbersConfirm && !lowercaseConfirm && !uppercaseConfirm) {
    criteriaArray = numbers;
  } else if (numbersConfirm) {
    criteriaArray = criteriaArray.concat(numbers);
  }

  if (
    specialConfirm &&
    !lowercaseConfirm &&
    !uppercaseConfirm &&
    !numbersConfirm
  ) {
    criteriaArray = special;
  } else if (specialConfirm) {
    criteriaArray = criteriaArray.concat(special);
  }

  // Validates if we have at least one set of characters selected
  if (
    1 >
    lowercaseConfirm + uppercaseConfirm + numbersConfirm + specialConfirm
  ) {
    window.alert(
      "Please choose at lease one set of criteria for your password"
    );
    askPasswordCriteria();
  }

  // Reset confirms for next generation
  lowercaseConfirm = false;
  uppercaseConfirm = false;
  numbersConfirm = false;
  specialConfirm = false;
};

// Password criteria arrays declarations
var criteriaArray = [];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["!", "#", "$", "%", "&", "@", "^", "*", "+", "-", "/"];

// passwordLength declaration
var passwordLength = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
