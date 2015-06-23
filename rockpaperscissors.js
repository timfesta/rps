////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
/*'use strict';*/

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

var getWinner = function(playerMove, computerMove) {
    
playerMove = getPlayerMove();
computerMove = getComputerMove();
    if(playerMove === computerMove) {
        return "tie";
    } else if (playerMove === "rock") {
        if(computerMove === "scissors") {
            return "playerWins";
        } else {
            return "computerWins";
        }
    } else if(playerMove === "paper") {
        if(computerMove === "rock") {
            return "playerWins";
        } else {
            return "computerWins";
        }
    } else if(playerMove === "scissors") {
        if(computerMove === "paper") {
            return "playerWins";
        } else {
            return "computerWins";
        }
    }
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

       while (playerWins < 5 && computerWins < 5) {
        var outcome = getWinner()
        if(outcome === "Tie") {
            console.log("it is a tie")
        } else if (outcome === playerWins) {
            playerWins ++
        } else {
            computerWins ++
        }
    }
    return [playerWins, computerWins];


