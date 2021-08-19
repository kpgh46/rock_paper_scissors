
console.log("Hello World");


function computerPlay(){
    let choice = Math.random()*3;
    let choicetwo = Math.floor(choice);

    if(choicetwo === 0){
        return "rock"
    }else if(choicetwo === 1){
        return "paper"
    }else{
        return "scissors"
    }
};

function playerPlay(){
    selection = prompt("Please choose Rock, Paper, or Scissors")
    selection = selection.toLowerCase()
    return selection
};

function playRound(playerSelection,computerSelection){

    console.log(`Player 1 choses ${playerSelection} while computer chooses ${computerSelection}`);

    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        document.getElementById("result").innerHTML = "Player 1 wins!";
    } else if (playerSelection === computerSelection){
        document.getElementById("result").innerHTML="It is a tie!";
    } else{
        document.getElementById("result").innerHTML="You LOST. Computer wins";
    };
    
};





