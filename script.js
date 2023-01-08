function game(){
    console.log('you are in the game function');
}

window.onload=function(){
    const input1 = document.getElementById('player1');
    input1.addEventListener('input', updatePlayer1);

    const input2 = document.getElementById('player2');
    input2.addEventListener('input', updatePlayer2);
  }


/* This function is called when the Player 1 contenteditable div is edited and changes the text on the button "button1" to reflect the player's name */
function updatePlayer1(){
    var player1 = document.getElementById("player1").innerHTML;
    document.getElementById("button1").innerHTML = player1;
    console.log('you are in the updatePlayer1 function');
}

/* This function is called when the Player 2 contenteditable div is edited and changes the text on the button "button2" to reflect the player's name */
function updatePlayer2(){
    var player2 = document.getElementById("player2").innerHTML;
    document.getElementById("button2").innerHTML = player2;
}

/*The function updateScore updates the match score as follows:
    1. It grabs the current score from the HTML table and stores it in six local variables.
    2. Based on whether the input value 'whoScored' was player1 or player2, it adds 1 to that players points and updates all the variables according to the rules of tennis
*/
function updateScore(whoScored){
    //Grab the current score from the HTML table
    var player1Score = document.getElementById("player1Score").innerHTML;
    var player1Games = document.getElementById("player1Games").innerHTML;
    var player1Sets = document.getElementById("player1Sets").innerHTML;
    var player2Score = document.getElementById("player2Score").innerHTML;
    var player2Games = document.getElementById("player2Games").innerHTML;
    var player2Sets = document.getElementById("player2Sets").innerHTML;
    
    //Update the score based on who scored
    if(whoScored == "player1"){
        if(player1Score == "0"){
            player1Score = "15";
        }
        else if(player1Score == "15"){
            player1Score = "30";
        }
        else if(player1Score == "30"){
            player1Score = "40";
        }
        else if(player1Score == "40"){
            if(player2Score == "40"){
                player1Score = "AD";
            }
            else if(player2Score == "AD"){
                player2Score = "40";
            }
            else{
                player1Score = "0";
                player1Games++;
            }
        }
        else if(player1Score == "AD"){
            player1Score = "0";
            player1Games++;
        }
    }
    else if(whoScored == "player2"){
        if(player2Score == "0"){
            player2Score = "15";
        }
        else if(player2Score == "15"){
            player2Score = "30";
        }
        else if(player2Score == "30"){
            player2Score = "40";
        }
        else if(player2Score == "40"){
            if(player1Score == "40"){
                player2Score = "AD";
            }
            else if(player1Score == "AD"){
                player1Score = "40";
            }
            else{
                player2Score = "0";
                player2Games++;
            }
        }
        else if(player2Score == "AD"){
            player2Score = "0";
            player2Games++;
        }
    }
    
    //Update the games if necessary
    if(player1Games == 6 && player2Games < 5){
        player1Games = 0;
        player2Games = 0;
        player1Sets++;
    }
    else if(player2Games == 6 && player1Games < 5){
        player1Games = 0;
        player2Games = 0;
        player2Sets++;
    }
    else if(player1Games == 7 && player2Games >= 5){
        player1Games = 0;
        player2Games = 0;
        player1Sets++;
    }
    else if(player2Games == 7 && player1Games >= 5){
        player1Games = 0;
        player2Games = 0;
        player2Sets++;
    }

    //Update the sets if necessary
    if(player1Sets == 2){
        alert("Player 1 wins!");
    }
    else if(player2Sets == 2){
        alert("Player 2 wins!");
    }

    //Update the HTML table
    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player1Games").innerHTML = player1Games;
    document.getElementById("player1Sets").innerHTML = player1Sets;
    document.getElementById("player2Score").innerHTML = player2Score;
    document.getElementById("player2Games").innerHTML = player2Games;
    document.getElementById("player2Sets").innerHTML = player2Sets;
}
