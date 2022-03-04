function computerPlay() {
    let computerChoice = Math.random().toFixed(3);
    //console.log("Random number generated: " + computerChoice);
    if (computerChoice < 0.333)
            return "ROCK";
    else if (computerChoice >= 0.333 && computerChoice < 0.666)
            return "PAPER";
    else    return "SCISSORS";
}



function playRound(e) {

let playerSelection;
if (e.target.className === 'rock') { 
    playerSelection = "ROCK";
} else if (e.target.className === 'paper') {
    playerSelection = "PAPER";
} else if (e.target.className === 'scissors') {
    playerSelection = "SCISSORS";
} else 
    playerSelection = "error";

console.log("You chose " + playerSelection);

let computerSelection = computerPlay();

function resultMsg(playerResult) {
    console.log("Computer chose " + computerSelection);
    
    
    
    resultSection = document.createElement('div');
    resultSection.style.cssText = 'margin-top:10px';
    //resultSection.style.marginTop = "10px";
    result.append(resultSection);

    if (playerResult === "lose") {
        resultSection.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        return scoreCounter("lose");
    } else if (playerResult === "win") {
        resultSection.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        return scoreCounter("win");
    } else if (playerResult === "draw") {
        resultSection.textContent = `You both chose ${playerSelection}! It's a draw!`;
        return scoreCounter("draw");
    } else {
        console.log("Something went wrong...") 
        return "error"; 
    }

} 


switch(playerSelection) {

    case "ROCK":
        if (computerSelection === "PAPER")
            return resultMsg("lose");
        else if (computerSelection === "SCISSORS")
            return resultMsg("win");
        else 
            return resultMsg("draw");
    
    case "PAPER":
        if (computerSelection === "SCISSORS")
            return resultMsg("lose");
        else if (computerSelection === "ROCK")
            return resultMsg("win");
        else 
            return resultMsg("draw");
    
    
    case "SCISSORS":
        if (computerSelection === "ROCK")
            return resultMsg("lose");
        if (computerSelection === "PAPER")
            return resultMsg("win");
        else 
            return resultMsg("draw");

    default:
        console.log("Something went wrong... Try again.");
        return;
}  
    
}

// setting button events -----------------------//
const btnR = document.querySelector('.rock');
const btnP = document.querySelector('.paper');
const btnS = document.querySelector('.scissors');

btnR.addEventListener('click', playRound); 
btnP.addEventListener('click', playRound); 
btnS.addEventListener('click', playRound); 
//----------------------------------------------//


// adding div to display results and combat log//-------//
const body = document.querySelector('body');

const result = document.createElement('div');

const pResult = document.createElement('p');
const cResult = document.createElement('p');
pResult.textContent = `Your Score: 0`;
cResult.textContent = `Computer Score: 0`;


result.appendChild(pResult);
result.appendChild(cResult);
body.appendChild(result);

resultSectionLog = document.createElement('div');
resultSectionLog.textContent = "Combat Log:";
resultSectionLog.style.cssText = 'margin-top:10px; font-weight:700';
result.append(resultSectionLog);
//------------------------------------------------------//

// function to keep track of score //--------------//
let playerScore = 0;
let computerScore = 0;

function scoreCounter(winLoss) {
    
    if (winLoss === 'win') {
        ++playerScore;
        pResult.textContent = `Your Score: ${playerScore}`;
        game5();
        return;
    } else if (winLoss === 'lose') {
        ++computerScore;
        cResult.textContent = `Computer Score: ${computerScore}`;
        game5();
        return;
    } else if (winLoss === 'draw') {
        return;
    }
}
//---------------------------------------------//

// function to play only 5 games and victory screen //
function game5() {
    const victorySection = document.createElement('h1');
    body.appendChild(victorySection);
    
    if (playerScore === 5) {
        body.removeChild(result);
        body.removeChild(btnP);
        body.removeChild(btnR);
        body.removeChild(btnS);
        victorySection.textContent = "You win!"
    } else if (computerScore === 5) {
        body.removeChild(result);
        body.removeChild(btnP);
        body.removeChild(btnR);
        body.removeChild(btnS);
        victorySection.textContent = "You lose!"
    }

}
// ----------------------------------------//



//function to display message

//update message

//update after 5 rounds