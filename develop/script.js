//global variables
var numbers     = "0123456789";
var specialChar = "!@#$%^&*()_+~`-+|':;/?><.,}]{[";
var lowerCase   = "abcdefghijklmnopqrstuvwxyz";
var upperCase   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Assignment Code
//The query selector lets you find the first element that matches the CSS selector #generate.
//We are calling the querySelector method on the document.
//generateBtn holds the returned value of the querySelector() method.
//#generate is the CSS selector to search for.
//This gives us the 1st element which has the #generate tag/id.
var generateBtn = document.querySelector("#generate");
//console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  //need to create the generatePassword() function.
  //calling the generatePassword() function.
  //generatePassword() returns the generated password.
  var password = generatePassword();
  
  //get the 1st element in index.html that has the #password tag/id.
  //this returns password element id="password" and assigns it to passwordText. 
  var passwordText = document.querySelector("#password");

  //passwordText is now the updated value that equals var password (from line 15).
  //the element id="password" (passwordText) gets updated with the generated password (password).
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    alert("1st var numbers is " + numbers);
    //initialize the password to be generated to an empty string.
    var passwordChoices = "";

    //ask user for length of password.
    //The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.
    passwLength = parseInt(prompt("How many characters would you like the password to have?\n It needs to be between 8 and 128 characters."));

  //   if (!numberChoice && !specialChoice && !lowerCaseChoice && !upperCaseChoice) {
  //     alert("You must choose at least one type of character.");
  // }

    //validate length of the password
    if (passwLength < 8 || passwLength > 128) {
      passwLength = parseInt(prompt("You must choose between 8 and 128 characters long."));
      if (passwLength < 8 || passwLength > 128) {
        alert("You must choose between 8 and 128 characters long. \nPlease come back when you need a password!");
        //kill execution of the program.
        return "You entered the wrong number of characters. \n You must choose between 8 and 128 characters long.";
      }
    } else if (passwLength >= 8 || passwLength <= 128) {
        alert("I am inside the else if");
        let numberChoice = confirm("Do you want numbers in your password?")
        alert("var numbers is " + numberChoice);
        if (numberChoice===true){
          passwordChoices=passwordChoices.concat(numbers)
          alert("passwordChoices is " + passwordChoices)
        } 
        let specialChoice = confirm("Do you want special characters in your password?")
        if (specialChoice===true) {
          passwordChoices=passwordChoices.concat(specialChar)
          alert("passwordChoices in specialChoice is " + passwordChoices)
        } 
        let lowerCaseChoice = confirm("Do you want lowercase in your password?")
        if (lowerCaseChoice===true) {
          passwordChoices=passwordChoices.concat(lowerCase)
          alert("passwordChoices is " + passwordChoices)
        }
        let upperCaseChoice = confirm("Do you want uppercase in your password?")
        if (upperCaseChoice===true) {
          passwordChoices=passwordChoices.concat(upperCase)
          alert("passwordChoices is " + passwordChoices)
        } 

        alert("numberChoice is " + numberChoice);
        alert("specialChoice is " + specialChoice);
        alert("lowerCaseChoice is " + lowerCaseChoice);
        alert("upperCaseChoice is " + upperCaseChoice);
        if (!numberChoice && !specialChoice && !lowerCaseChoice && !upperCaseChoice) {
          alert("You must choose at least one type of character.");
          return "Choose at least one type of characters: numbers, special characters, uppercase or lowercase letters. Thanks!";
}
    } else {
        return;
  }
  
    //declare a new password variable to hold the different choices
    var userPassword = "";
    for (let i = 0; i < passwLength; i++) {
      let x=Math.floor(Math.random() * (passwordChoices.length));
      alert("value of x is " + x);
      userPassword = userPassword.concat(passwordChoices[x])
      alert("value of passwordChoices[x] is " + x);
    }

  return userPassword;
}

