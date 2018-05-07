var Letter = require("./Letter.js");

function Word(randomWord) {
  // this.gameWord= randomWord.split("");
  this.randomWord = randomWord;
  this.wordArr = [];
  this.combinedLettersArr = [];

  // Populates the lettersGuessed array with the user's guessed letters
  this.createLetterObj = function(character) {
    for (var i = 0; i < randomWord.length; i++) {
      this.wordArr.push(new Letter(randomWord[i]));
    }
    console.log(this.wordArr);
  };

  this.combineLetters = function() {
    for (var i = 0; i < this.wordArr.length; i++) {
      this.combinedLettersArr.push(this.wordArr[i].populateCharacters());
    }
    console.log(this.combinedLettersArr);
    // console.log(this.combinedLettersArr.join(" "));
  };

  this.guessedLetterCheck = function(character) {
    for (var i = 0; i < this.wordArr.length; i++) {
      this.wordArr[i].correctGuess(character);
    }
    console.log(this.combinedLettersArr);
  };
};

// var testWord = new Word("Superman");
// testWord.createLetterObj();
// testWord.combineLetters();
// testWord.guessedLetterCheck("p");

module.exports = Word;


