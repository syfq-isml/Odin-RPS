/* PLANNING

Design a function that will randomly return R, P, S.

1. Use Math.Random() to generate random decimal
2. Divide numbers by 3 sections for equal probability, i.e.
if <0.333 return Rock, 0.333=< < 0.666 return Paper, else return Scissors */


function computerPlay() {
    let computerChoice = Math.random().toFixed(3);
    //console.log("Random number generated: " + computerChoice);
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
        console.log("You have cancelled the prompt.")
        return "cancelled";
    } else {
    playerSelection = choice.toUpperCase();

    
    console.log("You chose " + playerSelection);
    
computerSelection = computerPlay();


    function resultMsg(playerResult) {
        console.log("Computer chose " + computerSelection);
            if (playerResult === "lose") {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
                return "lose";
            } else if (playerResult === "win") {
                console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
                return "win";
            } else if (playerResult === "draw") {
                console.log("Its a draw!")
                return "draw";
            } else {
                console.log("Something went wrong...") 
                return "error"; }

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

        default:
            console.log("You typed your choice wrong... Try again.");
            return playRound();
    }  
    }
}




/*TASK: Design a function that plays 5 rounds, keep tracks of rounds won, declares a winner at the end of 5 rounds.

Declare score 0-0
FOR count to 5,
    Call function playRound
    playRound should return a win/loss value
    use value to add 1 score
    (use You ${} - ${} COmputer)

Show winner

*/

function game() {

let playerScore = 0;
let computerScore = 0;


for (let i = 0; i<5; i++) {
    
    let roundResult = playRound();
    
    if (roundResult === "lose") {
        ++computerScore;
    } else if (roundResult === "win") {
        ++playerScore;
    } else if (roundResult === "cancelled") {
        return 0;
    } else {
        playerScore = playerScore + 0;
    } 
    console.log(`<--- SCORE: YOU ${playerScore} - ${computerScore} COMPUTER --->`);
    
    
}

if (playerScore > computerScore) {
    console.log("That's 5 rounds, you win!");
} else if (playerScore === computerScore) {
    console.log("That's 5 rounds, it's a draw!");
} else 
    console.log("That's 5 rounds, you lose!");

}

game();