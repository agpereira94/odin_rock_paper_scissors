console.log("Hello World");

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1){
        return "rock";
    } else if(computerChoice === 2){
        return "paper";
    } else if(computerChoice === 3){
        return "scissors";
    }

    return computerChoice;
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const humanChoice = prompt("What's it gonna be: rock, paper or scissors?");

    return humanChoice;
}

// console.log(getHumanChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

        if(humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "ROCK"){
            return alert("It's a draw. Can you hear the stone hinge?");
        } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "PAPER") {
            return alert("It's a draw. Can you hear the scratching?");
        } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "SCISSORS") {
            return alert("It's a draw. Can you hear the clinking?");
        } else if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "scissors"){
            playerScore +=1;
            return alert("You win! Rock beats scissors."); 
        } else if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "paper"){
            computerScore +=1;
            return alert("You lose! Paper beats rock.");
        } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "rock"){
            playerScore +=1;
            return alert("You win! Paper beats rock.");
        } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "scissors"){
            computerScore +=1;
            return alert("You lose! Scissors beats paper.");
        } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice === " rock"){
            computerScore +=1;
            return alert("You lose! Rock beats scissors.");
        } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice === "paper"){
            playerScore +=1;
            return alert("You win! Scissors beats paper.");
        }

        
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    
    console.log(computerScore);
    console.log(playerScore);