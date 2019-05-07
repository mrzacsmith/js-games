const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
           introScreen.classList.add('fadeOut'); 
           matchScreen.classList.add('fadeIn');
        });
    };

    // Play the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // Computer game choice options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);
            });
        });   
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        // Check to see if a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
        };

        // Check if player plays rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                return;
            } else {
                winner.textContent = 'Computer wins!';
                return;
            };
        };

        // Check if player plays paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                return;
            } else {
                winner.textContent = 'Computer wins!';
                return;
            }
        };

        // Check if player plays scissors
        if (playMatch === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins';
                return;
            } else {
                winner.textContent = 'Computer wins';
                return;
            }
        };
    };

    // Call functions
    startGame();
    playMatch();
    
}

game();