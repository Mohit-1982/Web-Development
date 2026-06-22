//better to store them inside a object then use them using .botChoose...

let botChoose;
let playerChoose;
let attempts = 1;
let botScore = 0;
let playerScore = 0;
let gameEnded = false;
const showBotChoose = document.querySelector('#bC');
const gameResult = document.querySelector('.game-end');
const scoreDiv = document.querySelector('.score-div');
const showPlayerChoose = document.querySelector('#pC');
const botScoreShow = document.querySelector('#bot-win');
const playerScoreShow = document.querySelector('#player-win');
const buttons = document.querySelectorAll('.elements-button');
const playerChooseDiv = document.querySelector('.playerChoose');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoose = e.currentTarget.getAttribute('id');

        if (attempts > 5 || gameEnded) return;

        chooseByPlayers();
    });
});

function endCalls() {
    if (gameEnded) return;

    gameEnded = true;

    scoreDiv.style.display = 'none';
    playerChooseDiv.style.display = 'none';

    const winner = document.createElement('p');
    if (playerScore > botScore) {
        winner.textContent = `Player Won, Scores: ${playerScore}`;
        winner.style.color = '#4CAF50';
    } else if (playerScore < botScore) {
        winner.textContent = `Bot Won, Scores: ${botScore}`;
        winner.style.color = '#F44336';
    } else {
        winner.textContent = `It's a Draw`;
        winner.style.color = '#FFC107';
    }
    gameResult.appendChild(winner);

    const againPlayButton = document.createElement('button');
    againPlayButton.textContent = 'Play Again';
    againPlayButton.classList.add('button');
    gameResult.appendChild(againPlayButton);

    againPlayButton.addEventListener('click', () => {
        scoreDiv.style.display = 'flex';
        playerChooseDiv.style.display = 'initial';

        attempts = 1;
        playerScore = 0;
        botScore = 0;

        botScoreShow.textContent = botScore;
        playerScoreShow.textContent = playerScore;

        showBotChoose.textContent = 'Bot Choose : ---';
        showPlayerChoose.textContent = 'Player Choose : ---';

        againPlayButton.remove();
        winner.remove();

        gameEnded = false;
    });
}


function chooseByPlayers() {
    let randomValue = Math.floor(Math.random() * 3 + 1);

    if (randomValue === 1) botChoose = 'Scissor';
    else if (randomValue === 2) botChoose = 'Rock';
    else botChoose = 'Paper';

    display();
}

function display() {
    showBotChoose.textContent = `Bot Choose : ${botChoose}`;
    showPlayerChoose.textContent = `Player Choose : ${playerChoose}`;
    console.log(showBotChoose, showPlayerChoose);

    displayScore();
}

function displayScore() {
    let whoWon = gameLogic();

    if (whoWon === 'Player') {
        playerScore++;
        playerScoreShow.textContent = playerScore;
    } else if (whoWon === 'Bot') {
        botScore++;
        botScoreShow.textContent = botScore;
    }

    attempts++;

    if (attempts > 5) {
        endCalls();
    }
}

function gameLogic() {
    if (botChoose === playerChoose) return 'Draw';
    if (botChoose === 'Rock' && playerChoose === 'Paper') return 'Player';
    if (botChoose === 'Paper' && playerChoose === 'Scissor') return 'Player';
    if (botChoose === 'Scissor' && playerChoose === 'Rock') return 'Player';
    return 'Bot';
}