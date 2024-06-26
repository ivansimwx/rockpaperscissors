//Computer player to randomly select rock paper or scissors
function getComputerChoice(){
    //Randomly generate a number 
   let randomNum = Math.random()

    //console.log(randomNum);
    //console.log(typeof(randomNum));

    //Associate random number with rock,paper or scissors
    if (randomNum<0.3){
        console.log("Computer plays rock.");
        return "rock";
    }
    
    else if (randomNum<0.6){
        console.log("Computer plays paper.");
        return "paper";
    }

    else if (randomNum<1){
        console.log("Computer plays scissors.");
        return "scissors";
    }
}

//Human player to input rock, paper or scissors
function getHumanChoice() {
    let humanChoice = Number(prompt("Enter the corresponding number to play; 1 = rock, 2 = paper, 3 = scissors"));

    switch (humanChoice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Please enter only numbers 1, 2 or 3 to represent rock, paper or scissors respectively"
    }
    return humanChoice;
}

//Play round, compare computer and human player's inputs to see who wins 
function playRound (){

    //Get players' inputs
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //match outcome is decided, scores are updated
    if (humanChoice === computerChoice ) {
        console.log("It's a draw!");
    }
    else if (humanChoice === "rock" && computerChoice==="scissors") {
        humanScore += 1;
        console.log("You win! Rock beats scissors.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    else if (humanChoice === "rock" && computerChoice==="paper") {
        computerScore += 1;
        console.log("You lose! Paper beats rock.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    else if (humanChoice === "paper" && computerChoice==="scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beat paper.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    else if (humanChoice === "paper" && computerChoice==="rock") {
        humanScore += 1;
        console.log("You win! Paper beats rock.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    else if (humanChoice === "scissors" && computerChoice==="rock") {
        computerScore += 1;
        console.log("You lose! Rock beats scissors.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    else if (humanChoice === "scissors" && computerChoice==="paper") {
        humanScore += 1;
        console.log("You win! Scissors beat paper.")
        console.log("Your score is " + humanScore + ". Computer's score is " + computerScore + ".")
    }
    }


//Play a full game consisting of 5 rounds
function playGame(){

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

 //Initialise game
 let humanScore = 0;
 let computerScore = 0;
 playGame();
