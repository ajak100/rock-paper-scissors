let playerSelection = "";
let computerSelection = "";
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {

    let choice = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choice[rand];
}

function compare(a, b) {

    if (a === b) {
        return 0;
    } else if ((a === "rock" && b === "scissors") || (a === "paper" && b === "rock") || (a === "scissors" && b === "paper")) {
        return 1;
    } else {
        return -1;
    }
}

function playRound(playerSelection, computerSelection) {

    if (compare(playerSelection, computerSelection) === 0) {
        console.log("It's a tie, you both chose " + playerSelection);
    } else if (compare(playerSelection, computerSelection) === 1) {
        console.log("You won this round! " + playerSelection + " beats " + computerSelection);
        playerPoints++;
    } else if (compare(playerSelection, computerSelection) === -1) {
        console.log("You Lose this round! " + computerSelection + " beats " + playerSelection);
        computerPoints++;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay().toLowerCase();
        playerSelection = prompt("Choose Rock, Paper or Scissors");

        if (playerSelection === null) {
            return;
        }
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("You must pick - Rock, Paper or Scissors");
            return;
        }
        playRound(playerSelection, computerSelection);
    }
    showPoints();
}

function showPoints() {
    if (playerPoints === computerPoints) {
        alert("It's a tie, you both have " + playerPoints + " points.");
    } else if (playerPoints > computerPoints) {
        alert("You win with " + playerPoints + " points, congrats!")
    } else {
        alert("Computer won this round with " + computerPoints + " points :( Try again");
    }
    playerPoints = 0;
    computerPoints = 0;
}
game();













