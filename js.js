// Elementlerim

var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal button");
var game = document.querySelector(".game");
var pScore = document.querySelector(".player-score p");
var cScore = document.querySelector(".computer-score p");
var buttons = document.querySelectorAll(".buttons button");
var playerIcon = document.querySelector(".player-image img");
var computerIcon = document.querySelector(".computer-image img");
var scoreAmmounce = document.querySelector(".result");
var nextPage = document.querySelector(".nextpage")


// Deyiskenlerim 

let playerScore = 0;
let computerScore = 0;
var options = ["rock", "paper", "scissors"];

// Function-Modal buttonum

function startGame() {
    modal.classList.toggle("reveal");
}

modalButton.addEventListener("click", () => {
    modal.classList.toggle("reveal");
    modal.style.pointerEvents = "none";
    game.classList.toggle("reveal");
    modalButton.style.display = "none";
})

// Random secimolan hisse

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        const playerChoice = e.target.getAttribute("data-value");
        const computerChoice = options[Math.floor(Math.random() * 3)];
        playerIcon.src = "./images/rock.png";
        computerIcon.src = "./images/rock.png";

        playerIcon.classList.toggle("move");
        computerIcon.classList.toggle("move");
        game.classList.toggle("disablebuttons")

        setTimeout(() => {

            playerIcon.classList.toggle("move");
            computerIcon.classList.toggle("move");
            game.classList.toggle("disablebuttons")
            playerIcon.src = `./images/${playerChoice}.png`;
            computerIcon.src = `./images/${computerChoice}.png`;
            gameResult(playerChoice, computerChoice);
        }, 2000)
    })
})


function gameResult(playerValue, computerValue) {

    //!---rock---

    if (playerValue === "rock") {
        if (computerValue === "rock") {
            scoreAmmounce.textContent = "IT IS A DRAW :)";
        }
        else if (computerValue === "paper") {
            scoreAmmounce.textContent = "COMPUTER WINS :(";
            computerScore++;
            cScore.textContent = computerScore;
        }
        else if (computerValue === "scissors") {
            scoreAmmounce.textContent = "PLAYER WINS :)";
            playerScore++;
            pScore.textContent = playerScore;
        }
    }


    //!----paper---

    if (playerValue === "paper") {
        if (computerValue === "paper") {
            scoreAmmounce.textContent = "IT IS A DRAW :)";
        }
        else if (computerValue === "rock") {
            scoreAmmounce.textContent = "PLAYER WINS :)";
            playerScore++;
            pScore.textContent = playerScore;
        }
        else if (computerValue === "scissors") {
            scoreAmmounce.textContent = "COMPUTER WINS :(";
            computerScore++;
            cScore.textContent = computerScore;
        }
    }

    //!---scissors---

    if (playerValue === "scissors") {
        if (computerValue === "scissors") {
            scoreAmmounce.textContent = "IT IS A DRAW :)";
        }
        else if (computerValue === "rock") {
            scoreAmmounce.textContent = "COMPUTER WINS :(";
            computerScore++;
            cScore.textContent = computerScore;
        }
        else if (computerValue === "paper") {
            scoreAmmounce.textContent = "PLAYER WINS :)";
            playerScore++;
            pScore.textContent = playerScore;
        }
    }
}


startGame();

nextPage.onclick = () => {
    window.location = 'C:/Users/andro/Desktop/project1/homepage/index.html'
}








