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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
               
                // Resets both hands to rock
                setTimeout(() => {
                    this.src = `./assests/rock.png`;
                }, 2000);
            });
        });

        // Computer game choice options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);
                // console.log(`pScore: ${pScore}`);
                // console.log(`cScore: ${cScore}`);

                setTimeout(() => {
                    // Compare hands
                    compareHands(this.textContent, computerChoice);

                    // Update images based on choice
                    playerHand.src = `./assests/${this.textContent}.png`;
                    computerHand.src = `./assests/${computerChoice}.png`;   
                }, 2000);

                playerHand.style.animation = 'playerShake 2s ease';
                computerHand.style.animation = 'computerShake 2s ease';
            });
        });   
    };

    // Update player and computer scores
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
       
    };

    // Compare player and computer hands
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
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            };
        };

        // Check if player plays paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        };

        // Check if player plays scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        };
    };

    // Call functions
    startGame();
    playMatch();
    
}

game();