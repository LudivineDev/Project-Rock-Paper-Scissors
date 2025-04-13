function getComputerChoice() {
    let choice;
    let randomnumber = Math.random();
    if (randomnumber<0.33) {
        choice="Paper";
    } else if (randomnumber<0.66) {
        choice="Scissors"
    } else {
        choice="Rock"
    }
    console.log(choice);
    console.log(randomnumber)
}
getComputerChoice();

function getHumanChoice() {
    let choiceh = prompt("Please Choose between Rock, Paper or Scissors");
    console.log(choiceh);
}
getHumanChoice();

let humanScore = 0;
console.log(humanScore);
let computerScore = 0;
console.log(computerScore);


