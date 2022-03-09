function computerPlay() {
  let handSignals = ["rock", "paper", "scissors"];
  let randChoice = handSignals[Math.floor(Math.random() * handSignals.length)];
  console.log(randChoice);
}

// function returns the expected value - tested in browser

function playRound(playerSelection, computerSelection) {
  // draw result
  if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("DRAW!");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    console.log("DRAW!");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    console.log("DRAW!");
    // win result
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win! Scissors beats Rock");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win! Paper beats Rock");
    // lose result
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("You lose! Rock beats Scissors");
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    console.log("You lose! Scissors beats Rock");
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("You lose! Paper beats Rock");
  }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
