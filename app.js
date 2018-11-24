const userScpre = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scis_div = document.getElementById("scissors");

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscis":
    case "paperrock":
    case "scispaper":
      console.log("User Wins!");
      break;
    case "scisrock":
    case "rockpaper":
    case "paperscis":
      console.log("Computer Wins!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scisscis":
      console.log("Draw!");
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scis"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
  });
  paper_div.addEventListener('click', function() {
    game("paper");
  });
  scis_div.addEventListener('click', function() {
    game("scis");
  });
}

main();
