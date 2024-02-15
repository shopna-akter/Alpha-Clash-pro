
function keyboard (event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('showing-Alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedsScore = currentScore + 1;
        setTextElementValueById('current-score' , updatedsScore)
        removeBackgrounColorById(expectedAlphabet);
        continueGame()
    }
    else{
        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1 ;
        setTextElementValueById('current-life', updatedLife)
        if(updatedLife  === 0 ){
            gameOver()
        }
    }
}

document.addEventListener('keyup', keyboard)

function continueGame (){
    const alphabet  = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('showing-Alphabet')
    currentAlphabetElement.innerText =alphabet;
    setBackgrounColorById(alphabet)
}

function play(){
    hideElementById('home')
    hideElementById('score-board')
    showElementById('play-ground')
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('score-board')
    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('final-score', lastScore)
    const currentAlphabet = getTextElementById('showing-Alphabet')
    removeBackgrounColorById(currentAlphabet)
}