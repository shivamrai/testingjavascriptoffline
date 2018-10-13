// Add your code here
// BlackJack Practice from Mark Z Tutorial on Pluralsight

let suits=['Hearts','Clubs','Diamonds','Spades'];

let values=['Ace','King','Queen','Jack','Ten','Nine'
    ,'Eight','Seven','Six','Five','Four','Three','Two'
];

//let deck=[];
//push into deck
function createDeck() {
    let deck=[];
    for (let suitIdx=0;suitIdx<suits.length;suitIdx++){
        for(let valueIdx=0;valueIdx<values.length;valueIdx++){
            deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}

//take one card from deck
function getNextCard(){
    return deck.shift();
}

//init funtion
let deck=createDeck();

//print deck
for(let i=0; i<deck.length; i++){
    console.log(deck[i]);
}

//get 2 cards in an array from getNextCard()
let playerCards = [getNextCard(),getNextCard()];

//let card1="Ace of Spades";
//let card2="Ten of Hearts";

console.log("Welcome to Blackjack");

console.log("You are Dealt");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);