let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
}

updateScoreElement()


function playGame(playerMove) {
    const computerMove = pickComputerMove()
    const guess = playerMove;
    if (guess === computerMove) {
        result = 'You win!'
    }
    else {
        result = 'You lose!'
    }
    
    
    
    if (result === 'You win!') {
        score.wins += 1
    }
    else if (result === 'You lose!') {
        score.losses += 1
    }
    
    
    localStorage.setItem('score', JSON.stringify(score))
    
    document.querySelector('.js-result').innerHTML = result
    
    // document.querySelector('.js-moves')
    // .innerHTML = `You ${playerMove} - ${computerMove} Computer`
    
    updateScoreElement()
}


function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`
}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = ''
    if (randomNumber < 0.5) {
        computerMove = 'heads'
    }
    else {
        computerMove = 'tails'
    }
    return computerMove
}