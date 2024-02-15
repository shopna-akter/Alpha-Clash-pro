function hideElementById (elementById){
    const hideobject = document.getElementById(elementById);
    hideobject.classList.add('hidden')
}
function showElementById(elementById){
    const showObject = document.getElementById(elementById)
    showObject.classList.remove('hidden')
}
function setBackgrounColorById(elementById){
    const element = document.getElementById(elementById);
    element.classList.add('bg-amber-500');
} 
function removeBackgrounColorById(elementById){
    const element = document.getElementById(elementById);
    element.classList.remove('bg-amber-500');
} 
function getTextElementValueById(elementById){
    const element =document.getElementById(elementById);
    const elementValueText =element.innerText;
    const value = parseInt(elementValueText);
    return value
}
function setTextElementValueById(elementById , value){
    const element =document.getElementById(elementById);
    element.innerText = value;
}
function getTextElementById(elementById){
    const element = document.getElementById(elementById);
    const text = element.innerText;
    return text
}
function getRandomAlphabet(){
    const alphabetList = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabets = alphabetList.split('');
    const getRandomNumber = Math.random()*26;
    const index = Math.round(getRandomNumber);
    const alphabet = alphabets[index];
    return alphabet
}