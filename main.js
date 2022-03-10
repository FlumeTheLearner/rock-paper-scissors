let computerSelection = computerPlay();
let playerSelection = playerPlay();
let computerScore = 0;
let playerScore = 0;

function playerPlay() {
  let rockButton = document.getElementById("rock");
  let scissorsButton = document.getElementById("scissors");
  let paperButton = document.getElementById("paper");

  rockButton.addEventListener("click", function () {
    playerSelection = "rock";
    return playerSelection;
  });

  paperButton.addEventListener("click", function () {
    playerSelection = "paper";
    return playerSelection;
  });

  scissorsButton.addEventListener("click", function () {
    playerSelection = "scissors";
    return playerSelection;
  });
}

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// function returns the expected value - tested in browser

function playRound(playerSelection, computerSelection) {
  let result;
  // draw result
  if (playerSelection === computerSelection) {
    result = "Draw";
    // win result
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors!";
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beats Paper!";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats Rock!";
    playerScore++;
    // lose result
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    result = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    result = "You lose! Scissors beats Paper!";
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    result = "You lose! Paper beats Rock!";
    computerScore++;
  } else {
    result = "An error has occured";
  }
  return result;
}

function updateScore() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function checkWinner() {
  let winner;
  if (playerScore === 5) {
    winner = "You win the game! Congratulations";
  } else if (computerScore === 5) {
    winner = "Computer wins the game! Better luck next time!";
  }
  console.log(winner);
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound());
console.log(playerScore);
console.log(computerScore);
