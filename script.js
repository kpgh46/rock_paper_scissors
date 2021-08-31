
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
let playerScore = document.querySelector('#playertally');
let computerScore = document.querySelector('#computertally');

let p = 0;
let c = 0;


function playRound(playerSelection,computerSelection){

    while (p < 5 || c < 5){

    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        document.getElementById("result").innerHTML = "Player 1 wins!";
        p+=1;
        console.log(`Player 1 has a score of ${p}`);
        playerScore.textContent = `${p}`;

            if (p === 5){
                playerScore.textContent = `That is ${p} wins.  PLAYER 1 is VICTORIOUS!`
            }
            break;
  
    } else if (playerSelection === computerSelection){
        document.getElementById("result").innerHTML="It is a tie!";
        console.log(p);
        break;

    } else{
        document.getElementById("result").innerHTML="You LOST. Computer wins";
        c+=1;
        console.log(`Computer has a score of ${c}`);
        computerScore.textContent = `${c}`;

            if (c === 5){
            computerScore.textContent = `That is ${c} wins.  Computer 1 is VICTORIOUS!`};
            break;
    };
}
};

    
    rock.addEventListener('click', () =>{
        playRound('rock', computerPlay())});
    
    paper.addEventListener('click', () =>{
        playRound('paper', computerPlay())});
    
    scissors.addEventListener('click', () =>{
        playRound('scissors', computerPlay())});