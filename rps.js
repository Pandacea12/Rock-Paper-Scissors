
/* Game code */

const score = {
    wins: 0,
    losses: 0,
    draws: 0,
}

function computerMoves() {

    let computerMove = '';

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'cheesecake' ;
    } else if  (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'cookie' ;
    } else if  (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'cupcake' ;
    }

    return computerMove;
};

function playGame(playerMove) {

    const computerMove = computerMoves();

    let result = '';

    if(playerMove === 'cheesecake') {
        console.log('cheesecake');
        if (computerMove === 'cookie'){
            result = 'win' ;
        } else if (computerMove === 'cupcake'){
            result = 'lose' ;
        } else if (computerMove === 'cheesecake'){
            result = 'draw' ;
    }} else if(playerMove === 'cookie'){
        console.log('cookie');
        if (computerMove === 'cookie'){
            result = 'draw' ;
        } else if (computerMove === 'cupcake'){
            result = 'win' ;
        } else if (computerMove === 'cheesecake'){
            result = 'lose' ;
    }} else if(playerMove === 'cupcake'){
        console.log('cupcake');
        if (computerMove === 'cookie'){
            result = 'lose' ;
        } else if (computerMove === 'cupcake'){
            result = 'draw' ;
        } else if (computerMove === 'cheesecake'){
            result = 'win' ;
    }}

    if(result === 'win') {
        score.wins++;
    } else if(result === 'lose') {
        score.losses++;
    } else if(result === 'draw') {
        score.draws++;
    }

    console.log(` You ${result}, the computer picked ${computerMove} and you picked ${playerMove}`)
    console.log(score)

};

document.querySelector('.cheesecake').addEventListener('click', () => {
    playGame('cheesecake');    
})

document.querySelector('.cookie').addEventListener('click', () => {
    playGame('cookie'); 
})

document.querySelector('.cupcake').addEventListener('click', () => {
    playGame('cupcake'); 
})

/* End game code */

/* Results logging */

