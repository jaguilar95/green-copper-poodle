// Assignment code here

// generatePassword() function

// startUp() function with initial questions
var startUp = function () {
  askPasswordLength();
  askPasswordCriteria();

  // Generate random password
  for (var i = 0; i < passwordLength; i++) {
    password =
      password + criteriaArray[randomNumber(0, criteriaArray.length - 1)];
  }

  console.log(password);
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

  console.log(
    "You have requested a password length of " + passwordLength + " characters."
  );

  return passwordLength;
};

// Asks for which criteria they want to use in a row
var askPasswordCriteria = function () {
  var lowercaseConfirm = window.confirm(
    "Would you like to use LOWERCASE letters in your password?"
  );

  // Add lowercase if confirmed
  if (lowercaseConfirm) {
    criteriaArray = lowercase;
  }

  var uppercaseConfirm = window.confirm(
    "Would you like to use UPPERCASE letters in your password?"
  );

  // Add uppercase if confirmed
  if (uppercaseConfirm && !lowercase) {
    criteriaArray = uppercase;
  } else if (uppercaseConfirm) {
    criteriaArray = criteriaArray.concat(uppercase);
  }

  var numbersConfirm = window.confirm(
    "Would you like to use NUMBERS in your password?"
  );

  // Add numbers if confirm
  if (numbersConfirm && !lowercase && !uppercase) {
    criteriaArray = numbers;
  } else if (numbersConfirm) {
    criteriaArray = criteriaArray.concat(numbers);
  }

  if (1 > lowercaseConfirm + uppercaseConfirm + numbersConfirm) {
    window.alert(
      "Please choose at lease one set of criteria for your password"
    );
    askPasswordCriteria();
  } else {
    console.log(lowercaseConfirm + uppercaseConfirm);
  }
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

startUp();
