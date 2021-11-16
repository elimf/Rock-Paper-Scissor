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
  var winner;
  if (playerSelection == "rock" && computerPlay == "scissor") {
    console.log(name + " win! Rock beats scissor.");
    winner = name;
  } else if (playerSelection == "rock" && computerPlay == "paper") {
    console.log(name + " lose! Paper beats rock.");
    winner = "computer";
  } else if (playerSelection == "rock" && computerPlay == "rock") {
    console.log("Egality!!!");
    winner = null;
  } else if (playerSelection == "paper" && computerPlay == "scissor") {
    console.log(name + " lose!Scissor beats paper .");
    winner = "computer";
  } else if (playerSelection == "paper" && computerPlay == "rock") {
    console.log(name + " win! Paper beats rock .");
    winner = name;
  } else if (playerSelection == "paper" && computerPlay == "paper") {
    console.log("Egality!!!");
    winner = null;
  } else if (playerSelection == "scissor" && computerPlay == "paper") {
    console.log(name + " win!Scissor beats paper");
    winner = name;
  } else if (playerSelection == "scissor" && computerPlay == "rock") {
    console.log(name + " lose! Rock beats scissor");
    winner = "computer";
  } else if (playerSelection == "scissor" && computerPlay == "scissor") {
    console.log("Egality");
    winner = null;
  }
  return winner;
}
function setPseudo() {
  var handle = window.prompt("What is your pseudo");
  console.log("Your pseudo is " + handle);
  return handle;
}
function many() {
  var howMany = window.prompt("select the number of game you will play ?");
  if (howMany <=0) {
    console.log("incoreect");
    many();
  }else if(howMany === String ){
    console.log("String is not accept");
    many();
  }
  
  return howMany;
}
function main() {
  var chose = window.prompt(
    "Press 'p'to play a single party.\n Press 'q' to quit the game.\nPress 'm' to play a many party. "
  );
  switch (chose) {
    case "p":
      console.log("The game will  start");
      game();
      break;
    case "m":
     var nb = many();
     manyGame(nb);
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
  
  for(let i = 0; i < 1; i++) {
    pseudo =setPseudo();
    player = playerSelection(pseudo);
    computer = computerPlay();
    result = playRound(player, computer, pseudo);
    console.log(result);
  }
  
  replayGame();
}
function manyGame(nb) {
  pseudo = setPseudo();
  nb;
  for (let i = 0; i < nb; i++) {
    player = playerSelection(pseudo);
    computer = computerPlay();
    result = playRound(player, computer, pseudo);

  }
  replayGame();
}
function replayGame() {
  var result2 = prompt("Do you want to play again? (yes or no )");

  switch (result2) {
    case "yes":
      game();
      break;
    case "no":
      console.log("You are redirected to the main.");
      main();
      break;

    default:
      replayGame();
      break;
  }
}
alert(" Welcome to Rock Paper Scissor");
main();

