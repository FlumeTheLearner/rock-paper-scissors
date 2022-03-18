let username = prompt("Please enter your name", "");
let computerScore = 0;
let playerScore = 0;
let winner;

document.querySelector("#player-score").innerHTML = playerScore;
document.querySelector("#computer-score").innerHTML = computerScore;
document.querySelector("#user-name").innerHTML = username;

// attach event listeners to buttons
let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let paperButton = document.getElementById("paper");

// rockButton.addEventListener("click", function () {
//   let playerSelection = "rock";
//   let computerSelection = computerPlay();
//   const result = playRound(playerSelection, computerSelection);
//   console.log("You chose " + playerSelection);
//   console.log("Computer chose " + computerSelection);
//   console.log(result);
//   console.log(playerScore);
//   console.log(computerScore);
//   checkWinner();
// });

rockButton.addEventListener("click", function () {
  let playerSelection = "rock";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  // Parse information from js to html regarding playerMove
  let playerMove = ("You chose " + playerSelection);
  document.querySelector("#player-move").innerHTML = playerMove;
   // Parse information from js to html regarding computerMove
  let computerMove = ("Computer chose " + computerSelection);
  document.querySelector("#computer-move").innerHTML = computerMove;
  // Parse information from js to html regarding result
  document.querySelector("#presult").innerHTML = result;
  // Parse information from js to html regarding playerScore
  document.querySelector("#player-score").innerHTML = playerScore;
  // Parse information from js to html regarding computerScore
  document.querySelector("#computer-score").innerHTML = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    checkWinner();
  } else {
    reset();
  }
});

paperButton.addEventListener("click", function () {
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  // Parse information from js to html regarding playerMove
  let playerMove = ("You chose " + playerSelection);
  document.querySelector("#player-move").innerHTML = playerMove;
   // Parse information from js to html regarding computerMove
  let computerMove = ("Computer chose " + computerSelection);
  document.querySelector("#computer-move").innerHTML = computerMove;
  // Parse information from js to html regarding result
  document.querySelector("#presult").innerHTML = result;
  // Parse information from js to html regarding playerScore
  document.querySelector("#player-score").innerHTML = playerScore;
  // Parse information from js to html regarding computerScore
  document.querySelector("#computer-score").innerHTML = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    checkWinner();
  } else {
    reset();
  }
});

scissorsButton.addEventListener("click", function () {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  // Parse information from js to html regarding playerMove
  let playerMove = ("You chose " + playerSelection);
  document.querySelector("#player-move").innerHTML = playerMove;
   // Parse information from js to html regarding computerMove
  let computerMove = ("Computer chose " + computerSelection);
  document.querySelector("#computer-move").innerHTML = computerMove;
  // Parse information from js to html regarding result
  document.querySelector("#presult").innerHTML = result;
  // Parse information from js to html regarding playerScore
  document.querySelector("#player-score").innerHTML = playerScore;
  // Parse information from js to html regarding computerScore
  document.querySelector("#computer-score").innerHTML = computerScore;
  if (playerScore === 5 || computerScore === 5) {
    checkWinner();
  } else {
    reset();
  }
});

// function to randomize computer choice

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
    result = "You win!";
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win!";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win!";
    playerScore++;
    // lose result
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    result = "You lose!";
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    result = "You lose!";
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    result = "You lose!";
    computerScore++;
  } else {
    result = "An error has occured";
  }
  return result;
}

// function updateScore() {
//   document.getElementById("playerScore").textContent = playerScore;
//   document.getElementById("computerScore").textContent = computerScore;
// }

function checkWinner() {
  if (playerScore === 5) {
    winner = "Congratulations, you were the first to 5 wins! Choose another move to restart the game!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winner = "Unlucky, looks like you weren't the first to 5 wins. Choose another move to restart the game!";
    playerScore = 0;
    computerScore = 0;
  }
  document.querySelector("#checkWinner").innerHTML = winner;
}

function reset() {
  if (playerScore === 0 || computerScore === 0) {
    winner = "";
  }
  document.querySelector("#checkWinner").innerHTML = winner;
}