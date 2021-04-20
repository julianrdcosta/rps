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
        return "Drawr";
    }
}
