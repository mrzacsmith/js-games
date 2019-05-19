let game = {'min': 1, 'max': 10};
let gameBtnTxt = 'Guess?';
let gameBtnRestart = 'Restart Game';



document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM is loaded');

    game.output = document.querySelector('.output');
    game.message = document.querySelector('.message');
    game.guessInput = document.querySelector('input');
    game.btn = document.querySelector('button');
    game.btn.addEventListener('click', guessValue);

    init();
});

function guessValue() {

    if (game.btn.classList.contains('replay')) {
        init();
        game.btn.textContent = gameBtnTxt;
        game.guessInput.style.display = '';
        game.btn.classList.remove('replay');
    } else {
        game.guesses++;
        let tempGuess = game.guessInput.value;
        game.guessInput.value = '';
        tempGuess = parseInt(tempGuess);
        
        if(isNaN(tempGuess)) {
            message('Please enter only digits!', 'red');
        } else if(tempGuess === game.num) {
            message(`Correct! You guessed ${game.num} in  ${game.guesses} trys!`, 'green');
            gameOver();
        } else {
            let holder = tempGuess > game.num ? 
                {'color':'blue', 'message':'Guess is too high'} : 
                {'color':'purple', 'message':'Guess is too low'};
            message(`${holder.message}`, holder.color);
            
        }
    }
}

function gameOver() {
    game.btn.textContent = gameBtnRestart;
    game.guessInput.style.display = 'none';
    game.btn.classList.add('replay');
    game.max += 5;
}

function init() {
    game.guesses = 0;
    game.num = ranNumber(game.min, game.max);
    let tempMessage = `Guess a number from ${game.min} to ${game.max}`;
    message(tempMessage, '#777777');
}; 

function ranNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(message, color) {
    game.message.textContent = message;
    game.message.style.color = color || 'black';
    game.guessInput.style.borderColor = color || 'black';
    game.btn.style.backgroundColor = color || 'black';
    game.btn.style.color = 'white';
};
