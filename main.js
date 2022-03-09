function computerPlay() {
  let handSignals = ["rock", "paper", "scissors"];
  let randChoice = handSignals[Math.floor(Math.random() * handSignals.length)];
  console.log(computerChoice);
}

// function returns the expected value - tested in browser

let playerSelection;
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "rock":
    case playerSelection == "paper" && computerSelection == "paper":
    case playerSelection == "scissors" && computerSelection == "scissors":
      console.log("DRAW!");
      break;
  }
}
