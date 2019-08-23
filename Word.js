// Contains a constructor, Word that depends on the Letter constructor.
const Letter = require('./Letter')
// This is used to create an object representing the current word the user is attempting to guess.
// That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. 
// This should call the function on each letter object(the first function defined in Letter.js)
// that displays the character or an underscore and concatenate those together.

// // A function that takes a character as an argument and calls the guess function on each letter object 
// (the second function defined in Letter.js)

const Word = function () {
    this.letters = [];

    this.addLetters = function (word) {
        for (let letter of word) {
            this.letters.push(new Letter(letter));
        }
        console.log(this.letters);
    }

    // A function that returns a string representing the word. 
    // This should call the function on each letter object(the first function defined in Letter.js)
    // that displays the character or an underscore and concatenate those together.
    this.wordString = function () {
        let wordArr = [];
        for (let letter of this.letters) {
            wordArr.push(letter.returnChar());
        }
        let wordString = wordArr.join("");
        console.log(wordString);
    };

    // // A function that takes a character as an argument and calls the guess function on each letter object 
    // (the second function defined in Letter.js)
    this.guessLetter = function (char) {
        for (let letter of this.letters) {
            letter.updateGuessed(char);
        }
        console.log(this.letters);
    }
};

const cat = new Word;
cat.addLetters("cat");
cat.wordString();
cat.guessLetter("a");
cat.wordString();

module.exports = Word;
