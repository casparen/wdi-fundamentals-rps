////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();

}

function getComputerMove(move) {
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

    var playerWins = [];
    var computerWins = [];


function getWinner(playerMove,computerMove) {
    var winner;

//problem; on tie both recive a point

if (playerMove === computerMove){
  playerWins.pop();
  computerWins.pop();
  console.log('tie')
}


if (playerMove == 'rock' || computerMove == "rock" &&  playerMove == 'scissors' || computerMove == "scissors"){
    if (playerMove === "rock"){
    playerWins.push('player') 
  }
  else {
    computerWins.push('computer')
  }
}

if (playerMove == 'scissors' || computerMove === "scissors" && playerMove == 'paper' || computerMove === "paper"){
  if (playerMove === "scissors"){
  playerWins.push('player') 
}
  else {
    computerWins.push('computer')
  }
}

if (playerMove == 'paper' || computerMove === "paper" && playerMove == 'rock' || computerMove === "rock"){
  if (playerMove === "paper"){
  playerWins.push('player') 
}
  else {
    computerWins.push('computer')
  }
}


console.log("Player chose " + playerMove + " while computer chose " + computerMove);

 
}


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  
while (playerWins.length <= 5 || computerWins.length <= 5){
    var pMove = getPlayerMove();
    var cMove = getComputerMove();
    getWinner(pMove, cMove);

    if (playerWins.length === 5){
        console.log("You won this Game");
        break;
    }

    else if (computerWins.length === 5) {
        console.log("You lost");
        break;
    }

    else {
      console.log("The score is currently Player: " + playerWins.length + " to Computer: " + computerWins.length);
    }
  }
}

playToFive()







//return [playerWins, computerWins];



  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
