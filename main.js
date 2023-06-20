const choices = ["Rock", "Paper", "Scissors"];
var userScore = 0;
var computerScore = 0;

let choiceButton = document.querySelectorAll('.button');
let playAgain = document.getElementById('play-again');
let userText = document.getElementById('playerScore');
let computerText = document.getElementById('computerScore');
let winner = document.getElementById('winner');

userText.textContent = 'Player : ' + userScore;
computerText.textContent = 'Computer : ' + computerScore;

choiceButton.forEach(btn => {
    btn.addEventListener('click', e => {
        let userChoice = e.target.textContent;
        console.log('User Choice : ' + userChoice)
        game(playerChoice(userChoice), computerChoice());
        console.log('Clicked! ' + userScore + ' ' + computerScore);
        userText.textContent = 'Player : ' + userScore;
        computerText.textContent = 'Computer : ' + computerScore;
        if(userScore == 5 || computerScore == 5){
            alert('Game finish');
            if(userScore == 5){
                winner.textContent = "PLAYER WIN !!";
            } else {
                winner.textContent = "COMPUTER WIN !!";
            }
        }
        if(userScore == 5 || computerScore == 5){
            playAgain.style.display = 'block';
        } else {
            playAgain.style.display = 'none';
        }
    })
});

playAgain.addEventListener('click', e => {
    userScore = 0;
    computerScore = 0;
    userText.textContent = 'Player : ' + userScore;
    computerText.textContent = 'Computer : ' + computerScore;
    winner.textContent = "";
    console.log('PLAY AGAIN');
})


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
        //alert('DRAW!!')
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