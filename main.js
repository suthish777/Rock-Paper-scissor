let userScore = 0;
let computerScore =  0;
const userScore__span = document.getElementById("user-score");
const computerScore__span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter) {
   if ( letter === 'r') return "Rock";
   if ( letter === 'p') return "Paper";
   return "Scissor";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore__span.innerHTML = userScore;
    computerScore__span.innerHTML = computerScore;
    result.innerHTML = `${converToWord(userChoice)}(user) beats ${converToWord(computerChoice)}(comp). you win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore__span.innerHTML = userScore;
    computerScore__span.innerHTML = computerScore;
    result.innerHTML = `${converToWord(userChoice)}(user) loses to ${converToWord(computerChoice)}(comp). you lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result.innerHTML = `${converToWord(userChoice)}(user) equals ${converToWord(computerChoice)}(comp). It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) { 
        case "rs":
        case "pr":
        case "sp":
          win(userChoice, computerChoice);
          break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);     
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;                    
    }
}

function main() {
    rock.addEventListener('click', () => game('r'));
    
    paper.addEventListener('click', () => game('p'));

    scissor.addEventListener('click', () => game('s'));
}

main();