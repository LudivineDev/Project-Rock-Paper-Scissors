function getComputerChoice() {
    let choice;
    let randomnumber = Math.floor(Math.random()*3);
    if (randomnumber === 0) {
        choice="paper";
    } else if (randomnumber === 1) {
        choice="scissors"
    } else {
        choice="rock"
    }
    console.log(choice);
    console.log(randomnumber)
    return choice;
}

function getHumanChoice() {
    let choiceh = prompt("Please Choose between rock, paper or scissors");
    console.log(choiceh);
    return choiceh;
}


function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
console.log("Normalized: "+ humanChoice);
console.log(computerChoice)
if (humanChoice === computerChoice) {
    Message = "That's a tie";
} else if (
    (humanChoice==="paper" && computerChoice==="rock")||
    (humanChoice==="rock" && computerChoice==="scissors")||
    (humanChoice==="scissors" && computerChoice==="paper")){
    
    humanScore++;
    Message = ("You Win " + humanChoice + " Beats "+ computerChoice + " !");
    console.log("Human Score: "+ humanScore);
    } else {
    computerScore++;
    Message = ("You Loose " + computerChoice + " Beats "+ humanChoice + " !");
    console.log("Computer Score : "+ computerScore);
    }
    console.log(Message);
    console.log(`Score: You - `+ humanScore +` Computer - ${computerScore}`);

}
for (let i = 1; i <= 5; i++) {
    console.log(`----- Round ${i} -----`);
    const humanChoice = getHumanChoice();// ask again each round 
    const computerChoice = getComputerChoice();// generate new choice each round
    playRound(humanChoice, computerChoice);
}
console.log("Final Score:");
console.log(`You: ${humanScore} | Computer: ${computerScore}`); /* backticks mandatory do not work with ""*/

if (humanScore>computerScore){
    console.log("You Win the game!");
} else if (computerScore>humanScore) {
    console.log("Computer win the game!");
} else{
    console.log("It's a tie!");

}
}
playGame()