function getComputerChoice() {
    let choice;
    let randomnumber = Math.random();
    if (randomnumber<0.33) {
        choice="paper";
    } else if (randomnumber<0.66) {
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

let humanScore = 0;
console.log(humanScore);
let computerScore = 0;
console.log(computerScore);
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();


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

    Message = ("You Win " + humanChoice + " Beats "+ computerChoice + " !");
    } else {
    Message = ("You Loose " + computerChoice + " Beats "+ humanChoice + " !");
    }
    console.log(Message);

}

playRound(humanChoice, computerChoice);