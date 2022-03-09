function computerPlay() {
  let handSignals = ["rock", "paper", "scissors"];
  let randChoice = handSignals[Math.floor(Math.random() * handSignals.length)];
  return randChoice;
}

// function returns the expected value - tested in browser
let playerSelection = prompt("Choose rock, paper or scissors", "");
let computerSelection = computerPlay();

function playRound() {
  let result;
  playerSelection = playerSelection.toLowerCase();
  // draw result
  if (playerSelection === computerSelection) {
    result = "Draw";
    // win result
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win! Rock beats Scissors";
    // lose result
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    result = "You lose! Rock beats Scissors";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    result = "You lose! Rock beats Scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    result = "You lose! Rock beats Scissors";
  } else {
    result = "An error has occured";
  }
  return result;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound());
