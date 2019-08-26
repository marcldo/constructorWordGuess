const Word = require('./Word');
const inquirer = require('inquirer');
const words = require('./wordList.json');
let count = 10;


// add words to data.json, then function to pick a random word from data.json 
// and use the constructof function to create one word object and go through the prompts 

getRandomWord();

function getRandomWord() {
    let wordToGuess = '';
    count = 10;

    words.forEach((word, index) => {
        let randomWordIndex = Math.floor(Math.random() * (words.length));

        wordToGuess = words[randomWordIndex];
    });

    constructWordObj(wordToGuess);
}


function constructWordObj(wordToGuess) {
    const word = new Word;
    word.addLetters(wordToGuess);
    wordString = word.wordString();

    startRound(word);
}


function startRound(wordObj) {

    console.log(`
Guess this programming language! 
You have ${count} lives remaining

${wordObj.wordString()}

`);

    inquirer.prompt([
        {
            name: 'guess',
            message: 'Enter your guess:'
        }
    ])
        .then(answer => {

            wordObj.guessLetter(answer.guess);


        })
        .then(() => {
            let wordNotGuessed = wordObj.wordString().includes("*");

            if (wordNotGuessed === false) {
                console.log(`you guesed it ${wordObj.wordString()}!`);
                inquirer.prompt([
                    {
                        type: 'confirm',
                        message: 'play again?',
                        name: 'playAgain'
                    }
                ])
                    .then((answer) => {
                        if (answer.playAgain) {
                            getRandomWord();
                        }
                        else {
                            return;
                        }
                    })
            }
            else if (count === 0) {
                console.log('You ran out of lives x___x');
                inquirer.prompt([
                    {
                        type: 'confirm',
                        message: 'play again?',
                        name: 'playAgain'
                    }
                ])
                    .then((answer) => {
                        if (answer.playAgain) {
                            getRandomWord();
                        }
                        else {
                            return;
                        }
                    })
            }
            else if (wordNotGuessed || count > 0) {

                startRound(wordObj);
                --count;
            }
        });
}


