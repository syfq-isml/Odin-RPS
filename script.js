/* PLANNING

Design a function that will randomly return R, P, S.

1. Use Math.Random() to generate random decimal
2. Divide numbers by 3 sections for equal probability, i.e.
if <0.333 return Rock, 0.333=< < 0.666 return Paper, else return Scissors */


function computerPlay() {
    let computerChoice = Math.random().toFixed(3);
    console.log("Random number generated: " + computerChoice);
    if (computerChoice < 0.333)
            return "ROCK";
    else if (computerChoice >= 0.333 && computerChoice < 0.666)
            return "PAPER";
    else    return "SCISSORS";
}


/*TASK: Design function to play 1 round, take 2 parameters and declares a winnner. Make players input case insensitve.

function to play a single round
player inputs R, P or S
computer chooses R, P or S

Player lose cases:
IF player choose R & computer choose P
IF player choose P & computer choose S
IF player choose 

switch case: case === player's input
if and else if computers selection and return results */




    

function playRound(playerSelection,computerSelection) {
    choice =  prompt("Rock, Paper or Scissors?");
    if (choice === null || choice === "") {
        return "You have cancelled the prompt.";
    } else {
    playerSelection = choice.toUpperCase();

    
    console.log("You chose " + playerSelection);
    
computerSelection = computerPlay();


    function resultMsg(playerResult) {
        console.log("Computer chose " + computerSelection);
            if (playerResult === "lose")
                {return `You lose! ${computerSelection} beats ${playerSelection}!`;}
            else if (playerResult === "win")
                {return `You win! ${playerSelection} beats ${computerSelection}!`;}
            else if (playerResult === "draw")
                {return "Its a draw!";}
            else return "Something went wrong...";   
    } 


    switch(playerSelection) {

        case "ROCK":
            if (computerSelection === "PAPER" )
                return resultMsg("lose");
            else if (computerSelection === "SCISSORS")
                return resultMsg("win");
            else return resultMsg("draw");
        
        case "PAPER":
            if (computerSelection === "SCISSORS")
                return resultMsg("lose");
            else if (computerSelection === "ROCK")
                return resultMsg("win");
            else return resultMsg("draw");
        
        
        case "SCISSORS":
            if (computerSelection === "ROCK")
                return resultMsg("lose");
            if (computerSelection === "PAPER")
                return resultMsg("win");
            else return resultMsg("draw");

        case null:
        case '':
            return "You have cancelled the prompt.";

        
        default:
            console.log("You typed your choice wrong... Try again.");
            return playRound();
    }  
    }
}


console.log(playRound());

