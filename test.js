function computerPlay() {
  game = ["rock", "paper", "scissor"];
  hand = game[Math.floor(Math.random() * game.length)];
  console.log("Computer play " + hand);
  return hand;
}
function playerSelection(name) {
  var handle = window.prompt("What is your figure(rock,paper,scissor)");
  handle = handle.toLowerCase();

  switch (handle) {
    case "rock":
      console.log(name + " chose " + handle);
      break;
    case "paper":
      console.log(name + " chose " + handle);
      break;
    case "scissor":
      console.log(name + " chose" + handle);
      break;
    case "exit":
      console.log("Good bye");
      window.stop;
      break;

    default:
      console.log(name + "Your figure is incorrect.");
      playerSelection(name);
  }
  return handle;
}
function playRound(playerSelection, computerPlay, name) {
  if (playerSelection == "rock" && computerPlay == "scissor") {
    console.log(name + " win! Rock beats scissor.");
  } else if (playerSelection == "rock" && computerPlay == "paper") {
    console.log(name + " lose! Paper beats rock.");
  } else if (playerSelection == "rock" && computerPlay == "rock") {
    console.log("Egality!!!");
  } else if (playerSelection == "paper" && computerPlay == "scissor") {
    console.log(name + " lose!Scissor beats paper .");
  } else if (playerSelection == "paper" && computerPlay == "rock") {
    console.log(name + " win! Paper beats rock .");
  } else if (playerSelection == "paper" && computerPlay == "paper") {
    console.log("Egality!!!");
  } else if (playerSelection == "scissor" && computerPlay == "paper") {
    console.log(name + " win!Scissor beats paper");
  } else if (playerSelection == "scissor" && computerPlay == "rock") {
    console.log(name + " lose! Rock beats scissor");
  } else if (playerSelection == "scissor" && computerPlay == "scissor") {
    console.log("Egality");
  }
}
function setPseudo() {
  var handle = window.prompt("What is your pseudo");
  console.log("Your pseudo is " + handle);
  return handle;
}
function main() {
  alert(" Welcome to Rock Paper Scissor");
  var chose = window.prompt(
    "Press 'p'to play a single party.\n Press 'q' to quit the game.\nPress 'm' to play a many party. "
  );
  console.log("Your pseudo is " + handle);
  switch (chose) {
    case "p":
      console.log("The game will start");
      game();
      break;
    case "m":
      var howMany = parseInt(prompt("select the number of game you will play ?"));
      manyGame(howMany);
      break;
    case "q":
      console.log("Good bye");
      window.stop;
    default:
      console.log("Try again");
      main();
      break;
  }
}
function game() {
  var pseudo = setPseudo();
  var player = playerSelection(pseudo);
  var computer = computerPlay();
  var result = playRound(player, computer, pseudo);
  console.log(result);
}
function manyGame(nb) {
  pseudo = setPseudo();
  nb;
  for (let i = 0; i < nb; i++) {
    player = playerSelection(pseudo);
    computer = computerPlay();
    result = playRound(player, computer, pseudo);
    console.log(result);
  }
}

main();
