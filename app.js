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
        
    };


    // Call functions
    startGame();
    playMatch();
    
}

game();