
console.log("Hello World");


function computerPlay(){
    let choice = Math.random()*3;
    let choicetwo = Math.floor(choice);

    if(choicetwo === 0){
        console.log("Rock")
    }else if(choicetwo === 1){
        console.log("Paper")
    }else{
        console.log("Scissors")
    }
}

computerPlay();

