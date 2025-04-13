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