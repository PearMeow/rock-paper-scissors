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
    choice = choice.toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid choice. Type rock, paper or scissors", "rock");
        choice = choice.toLowerCase();
    }
    return choice;
}

console.log(getHumanChoice());

// for (let i = 0; i < 10; ++i) {
//     console.log(getComputerChoice());
// }
