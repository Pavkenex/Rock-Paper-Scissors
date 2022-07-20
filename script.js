
let getComputerChoice=()=>{
    let index=Math.floor(Math.random()*3)+1;
    switch(index)
    {
        case 1: return "Rock";break;
        case 2: return "Paper";break;
        case 3: return "Scissors";break;
    }
}


let playGame=()=>{

    let AIChoice =getComputerChoice().toUpperCase();
    let playerChoice=prompt().toUpperCase();
    console.log(`You chose ${playerChoice}. Your opponnent chose ${AIChoice}.`);

    if(playerChoice===AIChoice)
    {
        console.log("Draw");
    }else if(playerChoice==="ROCK"&& AIChoice==="SCISSORS")
    {
        console.log("You won!");
    }else if(playerChoice==="ROCK"&& AIChoice==="PAPER")
    {
        console.log("You Lost!");
    }else if(playerChoice==="PAPER"&& AIChoice==="ROCK")
    {
        console.log("You won!");
    }else if(playerChoice==="PAPER"&& AIChoice==="SCISSORS")
    {
        console.log("You Lost!");
    }else if(playerChoice==="SCISSORS"&& AIChoice==="PAPER")
    {
        console.log("You won!");
    }else if(playerChoice==="SCISSORS"&& AIChoice==="ROCK")
    {
        console.log("You Lost!");
    }
    
}
playGame();
