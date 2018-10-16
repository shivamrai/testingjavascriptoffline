// Add your code here
// BlackJack Practice from Mark Z Tutorial on Pluralsight

let suits=['Hearts','Clubs','Diamonds','Spades'];

let values=['Ace','King','Queen','Jack','Ten','Nine'
    ,'Eight','Seven','Six','Five','Four','Three','Two'
];

//UI Controls, DOM Variables
let textArea = document.getElementById('text-Area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game Variables
let gameStarted = false,
    gameOver=false,
    playerWon=false,
    dealerCards=[],
    playerCards=[],
    dealerScore=0,
    playerScore=0,
    deck=[];

//Start Screen setup
hitButton.style.display=('none');
stayButton.style.display=('none');
showStatus();

newGameButton.addEventListener('click',function(){
    gameStarted=true;
    gameOver=false;
    playerWon=false;

    deck=createDeck();
    shuffleDeck(deck);
    dealerCards=[getNextCard(),getNextCard()];
    playerCards=[getNextCard(),getNextCard()];

    //textArea.innerText = 'Started....';
    newGameButton.style.display='none';
    hitButton.style.display=('inline');
    stayButton.style.display=('inline');
    showStatus();
});
//let deck=[];
//push into deck
function createDeck() {
    let deck=[];
    for (let suitIdx=0;suitIdx<suits.length;suitIdx++){
        for(let valueIdx=0;valueIdx<values.length;valueIdx++){
            let card={
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

function getCardString(card){
    return card.value + ' ' + card.suit;
}

//Show Status
function showStatus(){
    if(!gameStarted){
        textArea.innerText("Welcome to Blackjack!");
        return;
    }

    for(var i=0; i<deck.length; i++){
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

//take one card from deck
function getNextCard(){
    return deck.shift();
}

//Shuffle cards in deck using random
function shuffleDeck(deck){
    for(i=0;i<deck.length;i++){
        let swapIdx = Math.trunc(Math.random()*deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx]=deck[i];
        deck[i]=tmp;
    }
}

//init funtion
let deck=createDeck();

//print deck
//for(let i=0; i<deck.length; i++){
//    console.log(deck[i]);
//}

//get 2 cards in an array from getNextCard()
let playerCards = [getNextCard(),getNextCard()];

//let card1="Ace of Spades";
//let card2="Ten of Hearts";

console.log("Welcome to Blackjack");

console.log("You are Dealt");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));