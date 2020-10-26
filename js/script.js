let playerSelection = "";
let computerSelection = "";
let playerPoints = 0;
let computerPoints = 0;
const results = document.querySelector('.results');
let rounds = 0;
let buttons = Array.from(document.querySelectorAll('.btn'));

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

function game() {
    
    buttons.forEach(button => button.addEventListener("click",function(e) {
        computerSelection = computerPlay().toLowerCase();
        playerSelection = button.value;
        playRound(button.value,computerSelection);
    }));   
}

function playRound(playerSelection, computerSelection) {
     
    const para = document.createElement('p');
 
    if (compare(playerSelection, computerSelection) === 0) {
        para.textContent = "It's a tie, you both chose " + playerSelection;
    } else if (compare(playerSelection, computerSelection) === 1) {
        para.textContent = "You won this round! " + playerSelection + " beats " + computerSelection;
        playerPoints++;
    } else if (compare(playerSelection, computerSelection) === -1) {
        para.textContent = "You Lose this round! " + computerSelection + " beats " + playerSelection;
        computerPoints++;
    }
    rounds++;
    results.appendChild(para);
    showFinalPoints();
}

function showFinalPoints() {
    const finalResults = document.createElement('p');
    
    if(computerPoints === 5 && computerPoints > playerPoints){
        finalResults.textContent = "computer wins. "+computerPoints+":"+playerPoints+". Rounds played "+rounds;
        resetGame();
    }else if(playerPoints === 5 && computerPoints < playerPoints){
        finalResults.textContent = "player wins."+playerPoints+":"+computerPoints+". Rounds played "+rounds;
        resetGame();
    }else if(playerPoints === 5 && computerPoints === 5){
        finalResults.textContent = "it's a tie. Rounds played "+rounds;
        resetGame();
    }
    
    finalResults.style.color = "green";
    results.appendChild(finalResults);  
    
    
    
}    
function resetGame(){
    computerPoints = 0;
    playerPoints = 0;
    playAgain();
    rounds = 0;
    

}
function playAgain(){
    
    buttons.forEach(button => {
        button.disabled = true;
    });
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play again.";
   
    playAgain.addEventListener("click", function(){
        location.reload();
    });
    results.appendChild(playAgain);
}
game();
