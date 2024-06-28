//Computer player to randomly select rock paper or scissors
function getComputerChoice() {
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
// function getHumanChoice() {
//     let humanChoice = Number(prompt("Enter the corresponding number to play; 1 = rock, 2 = paper, 3 = scissors"));

//     switch (humanChoice){
//         case 1:
//             return "rock";
//         case 2:
//             return "paper";
//         case 3:
//             return "scissors";
//         default:
//             return "Please enter only numbers 1, 2 or 3 to represent rock, paper or scissors respectively"
//     }
//     return humanChoice;
// }

//Play round, compare computer and human player's inputs to see who wins 
function playRound (playerSelect){

    //Get computer's input
    let computerChoice = getComputerChoice();
    let humanChoice = playerSelect;

    //match outcome is decided, scores are updated
    if (humanChoice === computerChoice ) {
        results.textContent = "It's a draw! Your score is " + humanScore + ". Computer's score is " + computerScore + ".";
    }
    else if (humanChoice === "rock" && computerChoice==="scissors") {
        humanScore += 1;
        results.textContent = "You win! Rock beats scissors. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }
    else if (humanChoice === "rock" && computerChoice==="paper") {
        computerScore += 1;
        results.textContent = "You lose! Paper beats rock. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }
    else if (humanChoice === "paper" && computerChoice==="scissors") {
        computerScore += 1;
        results.textContent = "You lose! Scissors beat paper. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }
    else if (humanChoice === "paper" && computerChoice==="rock") {
        humanScore += 1;
        results.textContent = "You win! Paper beats rock. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }
    else if (humanChoice === "scissors" && computerChoice==="rock") {
        computerScore += 1;
        results.textContent = "You lose! Rock beats scissors. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }
    else if (humanChoice === "scissors" && computerChoice==="paper") {
        humanScore += 1;
        results.textContent = "You win! Scissors beat paper. Your score is " + humanScore + ". Computer's score is " + computerScore + "."
    }

    if (humanScore==5) {
        winner.textContent = "Player wins!";
    }
        
    else if (computerScore==5) {
        winner.textContent = "Computer wins!";
    }
    
}

 //Initialise game
 let humanScore = 0;
 let computerScore = 0;

//Define buttons for rock, paper scissors
const rockSelect = document.createElement("button");
rockSelect.textContent = "rock";
document.body.appendChild(rockSelect);
rockSelect.addEventListener("click", ()=>{
    playRound("rock");
})

const paperSelect = document.createElement("button");
paperSelect.textContent = "paper";
document.body.appendChild(paperSelect);
paperSelect.addEventListener("click", ()=>{
    playRound("paper");
})

const scissorsSelect = document.createElement("button");
scissorsSelect.textContent = "scissors";
document.body.appendChild(scissorsSelect);
scissorsSelect.addEventListener("click", ()=>{
    playRound("scissors");
})

//Print results
const results = document.createElement("div");
document.body.appendChild(results);

//Check and announce winner, 1st to 5 wins
const winner = document.createElement("div")
document.body.appendChild(winner);


