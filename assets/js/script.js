//Define DOM elements
const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const messages = document.getElementById("messages");
const DisplayPlayerScore = document.getElementById("DisplayPlayerScore");
const DisplayComputerScore = document.getElementById("DisplayComputerScore");

let playerScore = 0;
let computerScore = 0;

//This function handles the game itself
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if(playerChoice === computerChoice) {
        result = "DRAW!"
    } else {
      switch(playerChoice) {
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "papper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
                case "scissors":
                  result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"; 
                  break;
      }  
    }
    player.textContent = `PLAYER: ${playerChoice}`;
    computer.textContent = `COMPUTER: ${computerChoice}`;
    messages.textContent = result;

    messages.classList.remove("green", "red");
}

switch(result) {
    case "YOU WIN!":
        messages.classList.add("green");
        break;
        case "YOU LOSE!":
            messages.classList.add("red");
            break;
}

