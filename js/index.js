function getComputerChoice(){
    const choice=Math.floor(Math.random()*3);
    const arr=["rock","paper","scissors"];
    return arr[choice];
}

function getHumanChoice(){
    return (prompt("Enter your choice: Rock, Paper, Scissors"));
}

let humanScore=0, computerScore=0;

function playRound(humanChoice, compChoice){   
    humanChoice=humanChoice.toLowerCase();
    console.log(`You selected ${humanChoice}.\nComputer selected ${compChoice}.`)
    if(humanChoice==compChoice){
        console.log(`Draw! Both selected ${humanChoice}!`);
        return 0;
    }
    else if((humanChoice=="rock" && compChoice=="scissors") || (humanChoice=="paper" && compChoice=="rock") || (humanChoice=="scissors" && compChoice=="paper")){
        console.log(`${humanChoice} beats ${compChoice}! You win!`);
        return 1;
    }
    else{
        console.log(`${compChoice} beats ${humanChoice}! You lose!`);
        return 2;
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
        let hChoice=getHumanChoice();
        let cChoice=getComputerChoice();
        let result=playRound(hChoice,cChoice);
        if(result==1){
            humanScore++;
        }
        else if(result==2){
            computerScore++;
        }
    }

    console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
    if(humanScore>computerScore){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

playGame();

