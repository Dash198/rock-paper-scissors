function getComputerChoice(){
    const choice=Math.floor(Math.random()*3);
    const arr=["rock","paper","scissors"];
    return arr[choice];
}

let humanScore=0, computerScore=0;

function playRound(humanChoice){  
    let compChoice = getComputerChoice(); 
    humanChoice=humanChoice.toLowerCase();
    choices.textContent=`You selected ${humanChoice}.\nComputer selected ${compChoice}.`;
    if(humanChoice==compChoice){
        stat.textContent=`Draw! Both selected ${humanChoice}!`;
    }
    else if((humanChoice=="rock" && compChoice=="scissors") || (humanChoice=="paper" && compChoice=="rock") || (humanChoice=="scissors" && compChoice=="paper")){
        stat.textContent=`${humanChoice} beats ${compChoice}! You win!`;
        humanScore++;
    }
    else{
        stat.textContent=`${compChoice} beats ${humanChoice}! You lose!`;
        computerScore++;
    }

    pScore.textContent=`Your Score: ${humanScore}`;
    cScore.textContent=`Computer Score: ${computerScore}`;

    if(humanScore>=5 && computerScore<5){
        winCheck.textContent="You reached 5 points first! You win!";
    }
    else if(humanScore<5 && computerScore>=5){
        winCheck.textContent="Comp reached 5 points first! You lose!";
    }
    else if(humanScore>=5 && computerScore>=5){
        winCheck.textContent="Both win!";
    }
    else{
        winCheck.textContent=`You are ${5-humanScore} points away from victory and Comp is ${5-computerScore} points away from victory!`;
    }
}

const scores=document.querySelector("#scores");
const stat=document.createElement("p");
const choices=document.createElement("p");
scores.appendChild(choices);
scores.appendChild(stat);
const pScore=document.createElement("p");
pScore.textContent=`Your Score: ${humanScore}`;
const cScore=document.createElement("p");
cScore.textContent=`Computer Score: ${computerScore}`;
scores.appendChild(pScore);
scores.appendChild(cScore);
const winCheck=document.createElement("p");
scores.appendChild(winCheck);

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click",()=>{
    playRound("rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click",()=>{
    playRound("paper");
});

const scissorButton = document.querySelector("#scissors");
scissorButton.addEventListener("click",()=>{
    playRound("scissors");
});

