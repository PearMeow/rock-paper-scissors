console.log("Hello World");

function getComputerChoice() {
    const rng = Math.floor(Math.random() * 3);
    if (rng == 0) {
        return "rock";
    } else if (rng == 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper, or scissors", "rock");
    if (choice !== null) {
        choice = choice.toLowerCase();
    }
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid choice. Type rock, paper or scissors", "rock");
        if (choice !== null) {
            choice = choice.toLowerCase();
        }
    }
    return choice;
}

function humanWins(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        return true;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return true;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return true;
    }
    return false;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie: ${humanChoice} is the same as ${computerChoice}.`);
    }
    if (humanWins(humanChoice, computerChoice)) {
        console.log(`You win: ${humanChoice} beats ${computerChoice}.`);
        ++humanScore;
    } else {
        console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
        ++computerScore;
    }
}

function playGame(rounds = 5) {
    for (let i = 0; i < rounds; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Final score: ${humanScore}(You) to ${computerScore}(CPU)`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie...");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();

// console.log(getHumanChoice());

// for (let i = 0; i < 10; ++i) {
//     console.log(getComputerChoice());
// }
