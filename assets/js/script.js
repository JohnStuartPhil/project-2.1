/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let pScore = 0;
let cScore = 0;

/**
 * Add event listener to all the functions
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The main game function. Accepts one paramter, which 
 * is the data choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateMessage(result);
    
    updateScores(result);

    checkEndOfGame(playerScore, computerScore);

    updateEndMessage(result);

}

function checkWinner(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "draw"

    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "player"
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "computer"
    } else if (playerChoice == "rock" && computerChoice == "lizard") {
        return "player" 
    } else if (playerChoice == "rock" && computerChoice == "spock") {
        return "computer"

    }  else if (playerChoice == "paper" && computerChoice == "rock") {
        return "player"
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "computer"
    }  else if (playerChoice == "paper" && computerChoice == "spock") {
        return "player"
    } else if (playerChoice == "paper" && computerChoice == "lizard") {
        return "computer"

    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "player"
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "computer"
    } else if (playerChoice == "scissors" && computerChoice == "lizard") {
        return "player"
    } else if (playerChoice == "scissors" && computerChoice == "spock") {
        return "computer"

    } else if (playerChoice == "lizard" && computerChoice == "paper") {
        return "player"
    } else if (playerChoice == "lizard" && computerChoice == "rock") {
        return "computer"
    } else if (playerChoice == "lizard" && computerChoice == "spock") {
        return "player"
    } else if (playerChoice == "lizard" && computerChoice == "scissors") {
        return "computer"

    } else if (playerChoice == "spock" && computerChoice == "rock") {
        return "player"
    } else if (playerChoice == "spock" && computerChoice == "paper") {
        return "computer"
    } else if (playerChoice == "spock" && computerChoice == "scissors") {
        return "player"
    } else if (playerChoice == "spock" && computerChoice == "lizard") 
        return "computer"
}

function updateMessage(result) {
    let message 
    if (result == "draw") {
        message = "It's a draw" 
    } else if (result == "player") {
        message = "Player Wins"
    } else if (result == "computer") {
        message = "Computer Wins"
    }

    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = message;
}

function updateScores(result) {
    if (result == "draw") {
        return
    } 
    let scoreSpan = document.getElementById(result + "-score");
    let score = scoreSpan.innerHTML;
    score++;
    scoreSpan.innerHTML = score;
}


function checkEndOfGame() {
    if (playerScore) {
      result = "end-player"
    } else if (computerScore) {
        result = "end-computer"
   } 
}

function updateEndMessage() {
    let endMessage 
    if (result == "end-player") {
        endMessage = "End of game - Player Wins" 
    } else (result == "end-computer")
        endMessage = "End of game - Computer Wins"

    let endMessageDiv = document.getElementById("end-message");
    endMessageDiv.innerHTML = endMessage;
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  let modalButton = document.getElementById('myBtn');
  modalButton.textContent = "Click x to close";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  let modalButtonA = document.getElementById('myBtn');
  modalButtonA.textContent = "Click here for instructions";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //if (event.target == modal) {
    //modal.style.display = "none";
  //}
//}
