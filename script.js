
console.log("Hello World");

// function which generates random input from computer
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

// asks user their selection
function playerPlay(){
    selection = prompt("Please choose Rock, Paper, or Scissors")
    selection = selection.toLowerCase()
    return selection
};

const rock = document.querySelector("#rockbtn");
const paper = document.querySelector('#paperbtn');
const scissors = document.querySelector('#scissorsbtn');



// main function. 
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

rock.addEventListener('click', () =>{
    playRound('rock', computerPlay())});

paper.addEventListener('click', () =>{
    playRound('paper', computerPlay())});

scissors.addEventListener('click', () =>{
    playRound('scissors', computerPlay())});
    