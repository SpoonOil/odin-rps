const choices = ['rock', 'paper', 'scissors'];
function getCpuChoice() {
    return choices[Math.floor(Math.random()*3)]
}
cpuChoice = getCpuChoice();

function decideWinner(playerChoice) {
    let result = 'undecided';
    cpuChoice = getCpuChoice();
    if (playerChoice != '') {
        switch (cpuChoice) {
            case 'rock':
                switch (playerChoice) {
                    case 'rock':
                        return 'tie';
                    case 'scissors':
                        return 'lose';
                    case 'paper':
                        return 'win';
                }
            case 'scissors':
                switch (playerChoice) {
                    case 'rock':
                        return 'win';
                    case 'scissors':
                        return 'tie';
                    case 'paper':
                        return 'lose';
                }
            case 'paper':
                switch (playerChoice) {
                    case 'rock':
                        return 'lose';
                    case 'scissors':
                        return 'win';
                    case 'paper':
                        return 'tie';
                }
        }
    } 
    else {
        return 'invalid'
    }
}

function normalizeInput(string) {
    string.toLowerCase();
    if (choices.includes(string)) { 
        return string;
    }
    else {  
        return '';
    }
}

let cpuWins = 0;
let playerWins = 0;

function printResults(message) {
    if (playerWins == 5 || cpuWins == 5) {
        resultsHeader.textContent = message;
    }
    results.innerHTML = (`CPU choice was: ${cpuChoice} <br> The score is: Player ${playerWins} - CPU ${cpuWins}`)
}
function runGame(playerChoice) {
    // for (let gamesToPlay = 5; gamesToPlay > 0; gamesToPlay--) {
        if (playerWins == 5 || cpuWins == 5) {
            return
        }
        let outcome = decideWinner(playerChoice);
        let message = 'Something went wrong!';
        switch (outcome) {
            case 'win':
                message = 'You Win!'
                playerWins++;
                break;
            case 'lose':
                message = 'You Lose!'
                cpuWins++;
                break;
            case 'tie':
                message = 'You Tied!'
                // gamesToPlay++;
                break;
            case 'invalid':
                message = 'Your input was invalid!'
                // gamesToPlay++;
                break;
        }
        printResults(message);
    // }
}

// const buttons = document.querySelectorAll('.playRound');

// buttons.forEach(button, () => addEventListener('click', buttonClicked))

// function buttonClicked() {

// }

const scissorsBtn = document.querySelector('.scissorsBtn');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const results = document.querySelector('p.body');
const resultsHeader = document.querySelector('h1.header');

scissorsBtn.addEventListener('click', () => runGame('scissors'));
rockBtn.addEventListener('click', () => runGame('rock'));
paperBtn.addEventListener('click', () => runGame('paper'));