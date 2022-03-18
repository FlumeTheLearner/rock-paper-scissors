let computerScore = 0;
let playerScore = 0;

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
  console.log(playerScore);
  console.log(computerScore);
  checkWinner();
});

paperButton.addEventListener("click", function () {
  let playerSelection = "paper";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);
  console.log(result);
  console.log(playerScore);
  console.log(computerScore);
  checkWinner();
});

scissorsButton.addEventListener("click", function () {
  let playerSelection = "scissors";
  let computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log("You chose " + playerSelection);
  console.log("Computer chose " + computerSelection);
  console.log(result);
  console.log(playerScore);
  console.log(computerScore);
  checkWinner();
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

// function updateScore() {
//   document.getElementById("playerScore").textContent = playerScore;
//   document.getElementById("computerScore").textContent = computerScore;
// }

function checkWinner() {
  let winner;
  if (playerScore === 5) {
    winner = "You win the game! Congratulations!";
    computerScore = 0;
    playerScore = 0;
  } else if (computerScore === 5) {
    winner = "Computer wins the game! Better luck next time!";
    computerScore = 0;
    playerScore = 0;
  }
  console.log(winner);
}