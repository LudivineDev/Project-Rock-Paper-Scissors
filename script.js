function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const resultContainer = document.getElementById("result");

    const divScore = document.createElement("div");
    const finalMessage = document.createElement("div");

    resultContainer.appendChild(divScore);
    resultContainer.appendChild(finalMessage);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log("Human Chose: " + humanChoice);
        console.log("Computer chose: " + computerChoice);

        let message;
        if (humanChoice === computerChoice) {
            message = "That's a tie!";
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            message = `You win! ${humanChoice} beats ${computerChoice}!`;
        } else {
            computerScore++;
            message = `You lose! ${computerChoice} beats ${humanChoice}!`;
        }

        divScore.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
        finalMessage.textContent = message;

        // Optional: declare winner when someone reaches 5
        if (humanScore === 5 || computerScore === 5) {
            setTimeout(() => {
                const winner = humanScore === 5 ? "You win the game! 🎉" : "Computer wins the game! 💻";
                alert(winner);
            }, 50); // or show in the DOM
            // Reset scores (optional)
            humanScore = 0;
            computerScore = 0;
        }
    }
}

playGame();

