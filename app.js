
function pickComputerMove() {
    const randomNumber = Math.random();
    result = randomNumber < 0.5 ? 'heads' : 'tails';
}

function playGame(playerMove) {
    pickComputerMove()
    const guess = playerMove;
    alert(guess === result ? 'You win!' : 'You lose!');
}