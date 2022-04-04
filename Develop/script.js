// Assignment code here

// generatePassword() function

// startUp() function with initial questions
var startUp = function () {
  askPasswordLength();
  askPasswordCriteria();
};

// Uses responses to define how to randomly choose

// Creating a function that lets us choose randomly based on two variables
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
};

// Asks for how many characters we need the password to be
var askPasswordLength = function () {
  var passwordLength = "";
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
};

// Asks for which criteria they want to use in a row
var askPasswordCriteria = function () {
  var lowercaseConfirm = window.confirm(
    "Would you like to use LOWERCASE letters in your password?"
  );
  var uppercaseConfirm = window.confirm(
    "Would you like to use UPPERCASE letters in your password?"
  );

  if (1 > lowercaseConfirm + uppercaseConfirm) {
    window.alert(
      "Please choose at lease one set of criteria for your password"
    );
    askPasswordCriteria();
  } else {
    console.log(lowercaseConfirm + uppercaseConfirm);
  }
};

// Password criteria arrays declarations
var passwordCriteria = Array();

passwordCriteria[0] = Array("a", "b", "c");
passwordCriteria[1] = Array("A", "B", "C");

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
