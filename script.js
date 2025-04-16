function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]; // Return computer choice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const finalMessage = document.createElement("div");
    resultDiv.innerHTML = "";

    if (humanScore > computerScore) {
        finalMessage.textContent="You win the game!";
    } else if (computerScore > humanScore) {
        finalMessage.textContent="Computer wins the game!";
    } else {
        finalMessage.textContent="It's a tie!";
    }
    const divScore = document.createElement("div");
    divScore.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;

    const resultContainer = document.getElementById("result");
    resultContainer.appendChild(divScore);
    resultContainer.appendChild(finalMessage);

    // Add event listeners to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.id; // Get human choice from clicked button
            const computerChoice = getComputerChoice(); // Get computer's choice
            playRound(humanChoice, computerChoice); // Call playRound with both choices
        });
    });

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Normalize human choice
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

        console.log(message);
        console.log(`Score: You - ${humanScore} | Computer - ${computerScore}`);
    }
finalMessage();

}


playGame();


