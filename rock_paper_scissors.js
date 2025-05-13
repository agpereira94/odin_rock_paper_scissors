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
        alert("It's a draw. Can you hear the stone hinge?");
        return "draw";
    } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "PAPER") {
        alert("It's a draw. Can you hear the scratching?")
        return "draw";
    } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "SCISSORS") {
        alert("It's a draw. Can you hear the clinking?")
        return "draw";
    } else if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "scissors"){
        playerScore +=1;
        alert("You win! Rock beats scissors.")
        return "win"; 
    } else if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "paper"){
        computerScore +=1;
        alert("You lose! Paper beats rock.")
        return "lose";
    } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "rock"){
        playerScore +=1;
        alert("You win! Paper beats rock.")
        return "win";
    } else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "scissors"){
        computerScore +=1;
        alert("You lose! Scissors beats paper.")
        return "lose";
    } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice === " rock"){
        computerScore +=1;
        alert("You lose! Rock beats scissors.")
        return "lose";
    } else if(humanChoice.toUpperCase() === "SCISSORS" && computerChoice === "paper"){
        playerScore +=1;
        alert("You win! Scissors beats paper.")
        return "win";
    }   
}



// playRound(humanSelection, computerSelection);


function playGame(){
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    return;

}

playGame();

if (playerScore > computerScore){
    alert(`CONGRATS, CHAMP! You won.
        Computer score: ${computerScore}
        Your score: ${playerScore}`);
} else if (playerScore === computerScore){
    alert(`It's a tie. What are the odds?
        Computer score: ${computerScore}
        Your score: ${playerScore}`);
} else {
    alert(`LOSER. This one goes to the computer.
        Computer score: ${computerScore}
        Your score: ${playerScore}`);
}

// console.log(computerScore);
// console.log(playerScore);