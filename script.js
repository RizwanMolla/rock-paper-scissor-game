let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "Player Wins";
        playerScore++;
        document.getElementById("player-score").value = playerScore;
    } else {
        result = "Computer Wins";
        computerScore++;
        document.getElementById("computer-score").value = computerScore;
    }

    updateComputerImage(computerChoice);
    document.getElementById("show-result").value = result;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function updateComputerImage(choice) {
    const imageMap = {
        rock: "assets/rock.png",
        paper: "assets/paper.png",
        scissor: "assets/scissor.png",
    };
    document.getElementById("computer-img").src = imageMap[choice];
}

function changeName() {
    const playerName = document.getElementById("player-name").value;
    document.querySelector(".player p").textContent = playerName || "Player";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").value = "0";
    document.getElementById("computer-score").value = "0";
    document.getElementById("show-result").value = "";
    document.getElementById("computer-img").src = "assets/computer.png";
}
