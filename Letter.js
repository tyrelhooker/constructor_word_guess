
function Letter(character) {
  this.character = character;
  this.correctCharacter = false;

  this.populateCharacters = function() {
    if (this.correctGuess === true) {
      return this.character;
    }
    else {
      return "_";
    }
  }

  this.correctGuess = function(userGuess) {
    if (userGuess === this.character) {
      console.log("Correct guess");
      this.correctCharacter = true;
      console.log(this.correctCharacter)
    }
    else {
      console.log("Guess again");
    }
  }
}

// var letter1 = new Letter ("a");
// var letter2 = new Letter ("a");

// letter1.letterGuessed();
// letter1.correctGuess();
// letter2.letterGuessed();
// letter2.correctGuess();

// exporting the Letter constructor
module.exports = Letter;