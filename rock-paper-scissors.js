let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * (3) + 1);

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

    const choice = prompt("Choose between rock, paper or scissors: ");

    return choice;
}

function playRound(humanChoice, computerChoice) {

    const humanChoiceLowerCase = humanChoice.toLowerCase();
    
    if (humanChoiceLowerCase === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        console.log("You win! Rocks beats Scissors");
    } else if (humanChoiceLowerCase === "paper" && computerChoice === "rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock");
    } else if (humanChoiceLowerCase === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log("You win! Scissors beats Paper")
    } else if (humanChoiceLowerCase === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rocks");
    } else if (humanChoiceLowerCase === "paper" && computerChoice === "scissors"){
        computerScore += 1;
        console.log("You lose! Scissors beats Paper");
    } else if (humanChoiceLowerCase === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats Paper");
    } else {
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human: ", humanSelection);
console.log("Computer: ", computerSelection);

playRound(humanSelection, computerSelection);