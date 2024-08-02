const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["pierre", "feuille", "ciseau"];

    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Manches restante(s): ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText.toLowerCase(), computerChoice);

        // Calling gameOver function after 10 moves
        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Égalité";
    } else if (player == "pierre") {
      if (computer == "feuille") {
        result.textContent = "Manche perdue";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Manche gagné";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "ciseau") {
      if (computer == "pierre") {
        result.textContent = "Manche perdue";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Manche gagné";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "feuille") {
      if (computer == "ciseau") {
        result.textContent = "Manche perdue";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Manche gagné";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "Game Over!! RETRY 😜";
    movesLeft.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Félicitationsvous avez gagné";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Désolé vous avez perdu ";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Égalité";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Recommencer";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  playGame();
};

// Calling the game function
game();
