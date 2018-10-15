// 2. Your solution should have, at minimum, three files:

// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


var request = require("request");
var inquirer = require ('inquirer'); 
// or `prompt` 



var letter = function() {

var line = "_";




inquirer.prompt([
    {
         type: "list",
         message: "Which option would you like to try?",
         choices: ["Guess a letter", "Exit"],
         name: "program",
     },    

 ]).then(function(inquirerResponse){              

         if (inquirerResponse.program === "sGuess a letter" ){
                     console.log("Guess letter")

        }
        else {
          console.log("Exit");
        }

});
}

module.exports = letter;