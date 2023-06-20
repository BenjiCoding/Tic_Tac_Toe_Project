const choices = ["Rock", "Paper", "Scissors"];
var userScore = 0;
var computerScore = 0;

let choiceButton = document.querySelectorAll('.button');

choiceButton.forEach(btn => {
    btn.addEventListener('click', e => {
        let userChoice = e.target.textContent;
        console.log('User Choice : ' + userChoice)
        game(playerChoice(userChoice), computerChoice());
        console.log('Clicked! ' + userScore + ' ' + computerScore);
    })
});

function computerChoice(){
    let computer = choices[Math.floor(Math.random() * choices.length)];
    console.log(computer);
    return computer;
}

function playerChoice(val){
    let userChoice = val
    return userChoice;
}

function game(player, computer){


    if(player === computer){
        alert('DRAW!!')
    } else if(player === "Rock" && computer === "Scissors") {
        //alert('Player WIN!!')
        userScore += 1;
    } else if(player === "Rock" && computer === "Paper") {
        //alert('Computer WIN!!')
        computerScore += 1;
    } else if(player === "Scissors" && computer === "Rock") {
        //alert('Computer WIN!!')
        computerScore += 1;
    } else if(player === "Scissors" && computer === "Paper") {
        //alert('Player WIN!!')
        userScore += 1;
    } else if(player === "Paper" && computer === "Scissors") {
        //alert('Computer WIN!!')
        computerScore += 1;
    } else if(player === "Paper" && computer === "Rock") {
        //alert('Player WIN!!')
        userScore += 1;
    }

}