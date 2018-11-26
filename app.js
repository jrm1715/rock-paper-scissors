let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scis_div = document.getElementById("scissors");

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose() {

}

function draw() {

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscis":
    case "paperrock":
    case "scispaper":
      win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
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
    game("scissors");
  });
}

main();
