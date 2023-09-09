// Ask player for an input (Rock, Paper or Scissors)
// Output randomly one of the three
// If player won, add one point to the player
// If computer won, add one point to the computer
// If five rounds had been played, output winner to the console
// Restart the game

// Rock > Scissors
// Scissors > Paper
// Paper > Rock

"use strict";

let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    console.log("Computer's choice: Rock");
    return "Rock";
  }
  if (randomNumber === 2) {
    console.log("Computer's choice: Paper");
    return "Paper";
  }
  if (randomNumber === 3) {
    console.log("Computer's choice: Scissors");
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
  computerSelection = getComputerChoice();
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerPoints += 1;
    console.log("Your points: " + playerPoints);
    console.log("Computer points: " + computerPoints);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerPoints += 1;
    console.log("Your points: " + playerPoints);
    console.log("Computer points: " + computerPoints);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Paper")
  ) {
    console.log("Your points: " + playerPoints);
    console.log("Computer points: " + computerPoints);
  } else {
    console.log("Invalid input.");
  }
}

function game() {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  if (playerPoints > computerPoints) {
    console.log("You've won the game!");
  } else if (computerPoints > playerPoints) {
    console.log("You've lost the game!");
  } else {
    console.log("The game's a draw!");
  }
}

game();
