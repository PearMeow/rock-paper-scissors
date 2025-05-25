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

for (let i = 0; i < 10; ++i) {
    console.log(getComputerChoice());
}
