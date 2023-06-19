const choices = ["Rock", "Paper", "Scissors"];

function computerChoice(){
    let computer = choices[Math.floor(Math.random() * choices.length)];
    console.log(computer);
    return computer;
}

function playerChoice(){
    let userChoice = prompt("Rock, Paper, Scissors?");
    console.log(userChoice);
    return userChoice;
}

function game(player, computer){

    if(player === computer){
        alert('DRAW!!')
    } else if(player === "Rock" && computer === "Scissors") {
        alert('Player WIN!!')
    } else if(player === "Rock" && computer === "Paper") {
        alert('Computer WIN!!')
    } else if(player === "Scissors" && computer === "Rock") {
        alert('Computer WIN!!')
    } else if(player === "Scissors" && computer === "Paper") {
        alert('Player WIN!!')
    } else if(player === "Paper" && computer === "Scissors") {
        alert('Computer WIN!!')
    } else if(player === "Paper" && computer === "Rock") {
        alert('Player WIN!!')
    }

}


game(playerChoice(), computerChoice());