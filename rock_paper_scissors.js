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

console.log(getComputerChoice());

function getHumanChoice(){
    const humanChoice = prompt("It's your play: rock, paper or scissors?");

    return humanChoice;
}

console.log(getHumanChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

        if(finalHumanChoice.toUpperCase() === computerChoice.toUpperCase()){
            return "It's a draw.";
        } else if(finalHumanChoice.toUpperCase() === "ROCK" && computerChoice === "scissors"){
            return "You win! Rock beats scissors";
        } else if(finalHumanChoice.toUpperCase() === "ROCK" && computerChoice === "paper"){
            return "You lose! Paper beats rock.";
        } else if(finalHumanChoice.toUpperCase() === "PAPER" && computerChoice === "rock"){
            return "You win! Paper beats rock";
        } else if(finalHumanChoice.toUpperCase() === "PAPER" && computerChoice === "scissors"){
            return "You lose! Scissors beats paper";
        } else if(finalHumanChoice.toUpperCase() === "SCISSORS" && computerChoice === " rock"){
            return "You lose! Rock beats scissors";
        } else if(finalHumanChoice.toUpperCase() === "SCISSORS" && computerChoice === "paper"){
            return "You win! Scissors beats paper";
        }

}