const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const computerOptions = ["pierre", "feuille", "ciseau"];
  const playerChoices = [];

  // IA moins intelligente (30% de chance de faire une erreur)
  const chooseComputerMove = (playerChoices) => {
    const lastPlayerMove = playerChoices[playerChoices.length - 1];

    const makeMistake = Math.random() < 0.3; // 30% chance de se tromper

    if (makeMistake || !lastPlayerMove) {
      const randomIndex = Math.floor(Math.random() * 3);
      return computerOptions[randomIndex];
    }

    if (lastPlayerMove === "pierre") return "feuille";
    if (lastPlayerMove === "feuille") return "ciseau";
    if (lastPlayerMove === "ciseau") return "pierre";

    return computerOptions[Math.floor(Math.random() * 3)];
  };

  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Manches restante(s): ${10 - moves}`;

        const playerChoice = this.value;
        playerChoices.push(playerChoice);

        const computerChoice = chooseComputerMove(playerChoices);

        winner(playerChoice, computerChoice);

        if (moves === 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");

    if (player === computer) {
      result.textContent = "Égalité";
    } else if (
      (player === "pierre" && computer === "ciseau") ||
      (player === "feuille" && computer === "pierre") ||
      (player === "ciseau" && computer === "feuille")
    ) {
      result.textContent = "Manche gagnée !";
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    } else {
      result.textContent = "Manche perdue.";
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }
  };

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
      result.innerText = "Félicitations, vous avez gagné ! 🎉";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Désolé, vous avez perdu 😢";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Match nul !";
      result.style.color = "grey";
    }

    reloadBtn.innerText = "Rejouer";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
