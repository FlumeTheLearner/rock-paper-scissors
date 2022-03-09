let playerSelection = "rock";
let computerSelection = computerPlay();

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

// function returns the expected value - tested in browser

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You win! Rock beats Scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You win! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You win! Rock beats Scissors!";
    // lose result
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    result = "You lose! Rock beats Scissors!";
  } else if (computerSelection == "scissors!" && playerSelection == "paper") {
    result = "You lose! Rock beats Scissors!";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    result = "You lose! Rock beats Scissors!";
  } else {
    result = "DRAW! Try again!";
  }
  console.log(result);
}

console.log(playerSelection);
console.log(computerPlay());
console.log(playRound(playerSelection, computerSelection));
