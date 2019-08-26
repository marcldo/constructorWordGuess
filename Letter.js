// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder
// (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter 
// has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against 
// the underlying character, updating the stored boolean value to true if it was guessed correctly

const Letter = function (character) {
    this.character = character;
    this.guessed = false;

    // A function that returns the underlying character if the letter 
    // has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.returnChar = () => {
        let printOut = '';

        if (this.guessed === true) {
            printOut = this.character;
        }

        else {
            printOut = '*';
        }

        return printOut;

    };

    // A function that takes a character as an argument and checks it against 
    // the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.updateGuessed = function (char) {

        if (char === character) {
            this.guessed = true;

        }
        else {
            if (this.guessed) {
                return;
            }
            else {
                this.guessed = false;

            }
        }
    }
};

module.exports = Letter;

// let a = new Letter('a');

// a.updateGuessed('a');

// a.returnChar();