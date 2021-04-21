console.log("olo")
function computerPlay() {
    let choice = Math.floor(Math.random() * 3); 
    switch (choice){
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
    }

}

function playRound(playerSelection,computerSelection){
    let winner;
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")){
        return "Player";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Paper" && computerSelection === "Scissors")){
        return "Computer";
    }
    else {
        return "Draw";
    }
}

function game(){
    let roundWinner = "Initial";
    let compWins = 0;
    let playerWins = 0;
    let rounds = window.prompt("How many rounds of Rock-Paper-Scissors would you like to play?");
    rounds = parseInt(rounds);
    let playerSelection = window.prompt("Enter your move: r- for rock, s- for scissors, p-- for paper");
    for (var i = 0; i<rounds;i++){
        if (roundWinner === "Player"){
            playerSelection = window.prompt("You won that round! \n\nEnter your next move: r- for rock, s- for scissors, p-- for paper");
  
        }
        else if (roundWinner === "Computer"){
            playerSelection = window.prompt("Sorry, the computer won. \n\nEnter your next move: r- for rock, s- for scissors, p-- for paper");
            compWins++;
        }
        else if (roundWinner === "Draw"){
            playerSelection = window.prompt("That one was a draw. \n\nEnter your move: r- for rock, s- for scissors, p-- for paper");
        }   
        let letter = playerSelection.charAt(0).toUpperCase();
        if(letter === "R"){
            roundWinner = playRound("Rock",computerPlay());
        }
        else if(letter === "S"){
            roundWinner = playRound("Scissors",computerPlay());
        }
        else if(letter === "P"){
            roundWinner = playRound("Paper",computerPlay());
        }
        switch (roundWinner) {
            case "Player":
                playerWins++;
                break;
            case "Computer":
                compWins++;
                break;
            case "Draw":
                break;
            default:
                console.log("Something went wrong, roundwinner is not Player, Computer or Draw");
                break;
          }
    
    }
    if(compWins > playerWins){
        alert("The game was won by the computer, "+compWins+" to "+playerWins);
    }
    else if(compWins < playerWins){
        alert("You won!! ("+playerWins+" to "+compWins+")");
    }
    else if(compWins === playerWins){
        alert("It was a "+compWins+" - "+playerWins+" draw ");
    }
    
}