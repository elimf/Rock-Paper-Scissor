const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const computerOptions = ["pierre", "feuille", "ciseau"];
  const playerChoices = [];

  const emojiMap = {
    pierre: "🪨",
    feuille: "📄",
    ciseau: "✂️",
  };

  const chooseComputerMove = (playerChoices) => {
    const lastPlayerMove = playerChoices[playerChoices.length - 1];
    const makeMistake = Math.random() < 0.6;

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

    // Créer une zone d’historique si elle n’existe pas
    let history = document.querySelector(".history");
    if (!history) {
      history = document.createElement("div");
      history.classList.add("history");
      document.querySelector(".game").appendChild(history);
      history.innerHTML = "<h3>Historique des manches</h3><ul class='history-list'></ul>";
    }

    const historyList = document.querySelector(".history-list");

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `Manches restante(s): ${10 - moves}`;

        const playerChoice = this.value;
        playerChoices.push(playerChoice);

        const computerChoice = chooseComputerMove(playerChoices);

        // Ajouter à l’historique
        const li = document.createElement("li");
        li.innerHTML = `👤 ${emojiMap[playerChoice]} (${playerChoice}) vs 💻 ${emojiMap[computerChoice]} (${computerChoice})`;
        historyList.appendChild(li);

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
