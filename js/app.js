/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];



/*-------------------------------- Variables --------------------------------*/
// Game state: Ask yourself what changes do we need to keep track of to know the current state of the game?

let playerChoice;

let computerChoice;

let msg;




/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');





/*-------------------------------- Functions --------------------------------*/

const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
};

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
}

const compare = () => {
    if (playerChoice === computerChoice) {
        msg = 'You Tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
        // rock vs scissors
        msg = 'Congrats! you win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
        // paper vs rock
        msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
        // scissors vs paper
        msg = 'Congrats! You win!'
    } else {
        msg = 'You lose! Try again?'
    }
};

const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}

const play = (event) => { // make sure that all the functions are in the correct order of game
    getPlayerChoice(event);
    // console.log(playerChoice); // log ot verify that everything is working
    // console.log(event.target);
    getComputerChoice();
    compare();
    render();
};




/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play);

document.querySelector('#paper').addEventListener('click', play);

document.querySelector('#scissors').addEventListener('click', play);

// If we wanted to refactor the above code it would look like below:
// document.querySelector('button').forEach(function (button) {
//     button.addEventListener('click', play);
// });












