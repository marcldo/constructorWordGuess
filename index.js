const Word = require('./Word');
const inquirer = require('inquirer');
const words = require('./wordList.json');



// add words to data.json, then function to pick a random word from data.json 
// and use the constructof function to create one word object and go through the prompts 

getRandomWord();

function getRandomWord() {
    let wordToGuess = '';


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
    count = 10;
    console.log(`Guess this word! 

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
            if (count > 0) {

                startRound(wordObj);
                --count;
            }
        });
}


