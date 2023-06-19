const choices = ["Rock", "Paper", "Scissors"];

function computerChoice(){
    let computer = choices[Math.floor(Math.random() * choices.length)];
    console.log(computer);
}

function playerChoice(){
    let userChoice = prompt("Rock, Paper, Scissors?");
    console.log(userChoice);
    computerChoice();
}

playerChoice();