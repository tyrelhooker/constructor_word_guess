var inquirer = require("inquirer");
var Word = require("./word.js");


var wordBank = [
  "TOY STORY",
  "MONSTERS INC",
  "COCO",
  "CARS",
  "INSIDE OUT",
  "UP",
  "THE INCREDIBLES",
  "WALL E",
  "FINDING NEMO",
  "FINDING DORY",
  "BRAVE",
  "RATATOUILLE",
  "A BUGS LIFE",
  "THE GOOD DINOSAUR",
  "MONSTERS UNIVERSITY"
];
var guessesRemaining = 10;
var randomWord = "";


function gameProgress() {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  if (combinedLettersArr.indexOf("_") === -1) {
    // end game
  }
  else if (guessesRemaining === 0) {
    // end game
  }
  else {
    inquirer.prompt([
      {
        type: "input",
        name: "userAnswer",
        message: "Please enter a letter."
      }
    ]).then(function(answer) {
      var userGuess = response.userAnswer.toUpperCase();
    })
  }
}

 var testWord = new Word(randomWord);
 testWord.createLetterObj();
 testWord.combineLetters();
 testWord.guessedLetterCheck();
