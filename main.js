function computerPlay() {
  let handSignals = ["rock", "paper", "scissors"];
  let randChoice = handSignals[Math.floor(Math.random() * handSignals.length)];
  return randChoice;
}

// function returns the expected value - tested in browser

function playRound(playerSelection, computerSelection) {
  let result;
  // draw result
  if (playerSelection == "rock" && computerSelection == "rock") {
    result = "Draw";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    result = "Draw";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    result = "Draw";
    // win result
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "You win! Rock beats Scissors";
    // lose result
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    result = "You lose! Rock beats Scissors";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    result = "You lose! Rock beats Scissors";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    result = "You lose! Rock beats Scissors";
  }
  return result;
}

let playerSelection = document.querySelector("#pchoice").value;
let computerSelection = computerPlay();
let result = playRound(playerSelection, computerSelection);
document.querySelector("#presult").innerHTML = result;

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = playerPlay();
//     let computerSelection = computerPlay();
//     let currentRound = playRound(playerSelection, computerSelection);
//     console.log(currentRound);
//   }
// }
