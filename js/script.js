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

// unused function in button version
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
    let result = ``;
    if (humanChoice === computerChoice) {
        result = `It's a tie: ${humanChoice} is the same as ${computerChoice}.`;
    } else if (humanWins(humanChoice, computerChoice)) {
        result = `You win: ${humanChoice} beats ${computerChoice}.`;
        ++humanScore;
    } else {
        result = `You lose: ${computerChoice} beats ${humanChoice}.`;
        ++computerScore;
    }
    let currScore = `: (You) ${humanScore} to (CPU) ${computerScore}`;
    winLossRound.textContent = result;
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            winLoss.textContent = "You win the game!";
        } else if (humanScore < computerScore) {
            winLoss.textContent = "You lose the game!";
        } else {
            winLoss.textContent = "The game is a tie...";
        }
        score.textContent = "Final Score" + currScore;
        humanScore = 0;
        computerScore = 0;
        body.appendChild(score);
        body.appendChild(winLossRound);
        body.appendChild(winLoss);
    } else {
        score.textContent = "Score" + currScore;
        winLoss.remove();
        body.appendChild(score);
        body.appendChild(winLossRound);
    }
}

function playGame(rounds = 5) {
    humanScore = 0;
    computerScore = 0;
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

const body = document.querySelector("body");
const winLossRound = document.createElement("p");
const winLoss = document.createElement("p");
const score = document.createElement("p");
const buttons = document.querySelectorAll("button");
for (btn of buttons) {
    btn.addEventListener("click", () => playRound(btn.className, getComputerChoice()));
}

// playGame();

// console.log(getHumanChoice());

// for (let i = 0; i < 10; ++i) {
//     console.log(getComputerChoice());
// }
