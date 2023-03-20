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
    console.log(message);
    console.log(`CPU choice was: ${cpuChoice}`)
    console.log(`The score is Player ${playerWins} - CPU ${cpuWins}`);
}
function runGame() {
    for (let gamesToPlay = 5; gamesToPlay > 0; gamesToPlay--) {
        let playerChoice = normalizeInput(prompt('Type your selection!'));
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
                gamesToPlay++;
                break;
            case 'invalid':
                message = 'Your input was invalid!'
                gamesToPlay++;
                break;
        }
        printResults(message);
    }
}

runGame();