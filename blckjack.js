
let sumOfcards = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber>10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function renderGame(){
    startGame()
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
   
    for(let count = 0;count<cards.length;count++){
        cardsEl.textContent += cards[count] + " "
    }

    sumEl.textContent = "Sum: " + sumOfcards

    if(sumOfcards<21){
        message = "Do you want to draw a new card?"
    
    
    }
    
    else if(sumOfcards === 21){
        hasBlackJack = true
        message = " woooho you've got the black jack!"
    
    }
    
    else{
        isAlive = false
        message = "You are Out of the Game"
    
    }
    messageEl.textContent = message
  
}

function newCard()
{
if(isAlive === true && hasBlackJack === false){

    let card = getRandomCard()
sumOfcards += card
cards.push(card)
startGame()
}


}