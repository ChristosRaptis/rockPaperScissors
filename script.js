let computerScore = 0;
let playerScore = 0;

const winScore = 5;
const buttons = document.querySelectorAll('.choice');
const playGame = document.getElementById('play');
const winmessage = document.getElementById("winner");
const computer = document.getElementById("computer-score");
const computerChoice = document.getElementById("computer-choice");
const player = document.getElementById("player-score");
const playerChoice = document.getElementById("player-choice");
const result =document.getElementById("final-result");
const messages = document.getElementById("messages");


function quit(){
    playGame.style.display = "inline-block";
    playGame.textContent = "Quit"
    playGame.addEventListener('click', (e) => {
        window.location.reload();
    })
}

function win(){    
    computer.textContent = `Computer score : ${computerScore}`;
    player.textContent = `Your score : ${playerScore}`;
    if (computerScore == winScore){
        result.style.visibility = "visible";
        result.textContent= "Too bad, you Lost!";
        result.style.color = "#8B0000";
        quit();           
    }else if (playerScore == winScore){
        result.style.visibility = "visible";
        result.textContent = "Gratz, You Won!";
        result.style.color = "green";
        quit();       
    }
}

function startGame(){    
    playGame.style.display = "none";
    buttons.forEach((button) => {
        button.style.display = "inline-block";
    });
    messages.style.visibility = "visible";    
}

function computerPlay(){
    let choice = Math.floor(Math.random() * Math.floor(3));
    switch (choice) {
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
    }          
}

function playRound(playerSelection, computerSelection){
    let winner = ""           
    playerChoice.textContent = `You chose ${playerSelection}`;
    computerChoice.textContent = `The computer chose ${computerSelection}` ;

    if ((playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")) {
        winner = "tie";
        winmessage.textContent = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "computer";
        computerScore++;
        winmessage.textContent = "Paper beats rock, you lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "player";
        playerScore++;
        winmessage.textContent = "Rock beats scissors, you win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "player";
        playerScore++;
        winmessage.textContent ="Paper beats rock, you win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "computer";
        computerScore++;
        winmessage.textContent = "Scissors beat paper, you lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "player";
        playerScore++;
        winmessage.textContent = "Scissors beat paper, you win!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "computer";
        computerScore++;
        winmessage.textContent ="Rock beats scissors, you lose!";
    }   
    win();
    
}

playGame.addEventListener("click", (e) => {
    startGame();
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {        
        playRound(button.id, computerPlay());
        
    });
})
