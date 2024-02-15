
function keyboard (event){
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('showing-Alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    if(playerPressed === expectedAlphabet){
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        removeBackgrounColorById(expectedAlphabet);
        continueGame()
    }
    else{
        const currentlifeElement = document.getElementById('current-life');
        const currentlifeText = currentlifeElement.innerText;
        const currentLife = parseInt(currentlifeText);
        const newLife = currentLife - 1;
        currentlifeElement.innerText = newLife;
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
    showElementById('play-ground')
    continueGame()
}