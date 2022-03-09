function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

// function returns the expected value - tested in browser

function computerPlay2() {
  let choices = ["rock", "paper", "scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

// single round

function playRound() {
  let playerSelection = computerPlay2();
  let computerSelection = computerPlay();
  let result;
  // win result
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats Rock!";
    // lose result
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    result = "You lose! Rock beats Scissors!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    result = "You lose! Scissors beats Paper!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    result = "You lose! Paper beats Rock!";
  } else {
    result = "DRAW! Try again!";
  }
  console.log(playerSelection);
  console.log(computerPlay());
  console.log(result);
}

console.log(playRound());
