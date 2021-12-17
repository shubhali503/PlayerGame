//Initial Health of Players
var player1Health=100;
var player2Health =100;

let roundCounter=0;

let lastname;
console.log(localStorage.getItem("lastname"));

let player1Score=0;
let player2Score=0;

//Executing onclick Function for Shooting
function shootBtn(){
   
    //Getting Random Shot for each player
    var player1Shot =  Math.floor(Math.random() * 5);
    var player2Shot =  Math.floor(Math.random() * 5);
    
    console.log("Player 1 Shot: " + player1Shot);
    console.log("Player 2 Shot: " + player2Shot);
    
    document.getElementById("p1shot").innerHTML=player1Shot;
    
    localStorage.setItem("player1Score","p1FireScore");
    document.getElementById("p2shot").innerHTML=player2Shot;
    
    
    //Calculating Players Health after getting shot
      player1Health = player1Health-player2Shot;
      player2Health = player2Health-player1Shot;
    
      console.log("Player 1 Health: " + player1Health);
      console.log("Player 2 Health: " + player2Health);


      //Counting Number of Rounds Left
       roundCounter++;
       console.log(roundCounter)

    
    // The Player whose health reaches 0, dies and the game ends.
      if(player1Health==0){
        document.getElementById("grid-item-7").innerHTML = "Player 2 Won!";

      }
      if(player2Health==0){
        document.getElementById("grid-item-7").innerHTML = "Player 1 Won!";

      }
      
    //Restricting Shoot Button after 5 Rounds are Completed
      if(roundCounter==5){
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML = "Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
      }

      //Finding the Winner of individual rounds and incrementing their score by 1
      if(player1Shot > player2Shot){
          player1Score = player1Score + 1;
        }

        if(player2Shot > player1Shot){
            player2Score = player2Score + 1;
        }

      localStorage.setItem("lastname",player1Score);

      console.warn("Player 1 Win: " + player1Score)
      console.warn("Player 2 Win: " + player2Score)
      document.getElementById("grid-item-3").innerHTML=player1Score;
      document.getElementById("grid-item-6").innerHTML=player2Score;


      //Terminating the game if any of the player scored 3 and announcing the result
      if(player1Score==3){
       
        gameOver("Player 1 Won!");

      }

      if(player2Score==3){
        gameOver("Player 2 Won!");
       
      }
      
      //Checking which player has scored more after completing 5 rounds
     if(roundCounter==5){
        if(player1Score>player2Score){
          
            gameOver("Player 1 Won!");
            
          }
        
          if(player2Score>player1Score){
            gameOver("Player 2 Won!");
        }
          
        //Checking if both the players have scored equally, if yes then printing DRAW
          if(player2Score==player1Score){
            gameOver("Match Draw");
        }
     } 

     console.log("");
}

function gameOver(playercomment){
  document.getElementById("grid-item-7").innerHTML = playercomment;
  document.getElementById("ShootBtn").disabled = true;
  document.getElementById("ShootBtn").innerHTML="Game Over";
  document.getElementById("ShootBtn").style.backgroundColor = "grey";
}

//Reset Button Function / Reload of location page
function resetBtn()
{
    location.reload();
    localStorage.clear();
}