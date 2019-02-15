let numberHand = [];
let pocketPair01 = false;
let pocketPair02 = false;
let deckPair01 = false;
let deckPair02 = false;
let deckPair03 = false;
let deckPair04 = false;
let pocketTriss01 = false;
let pocketTriss02 = false;
let pocketQuad01 = false;
let pocketQuad02 = false;
let deckQuad01 = false;
let deckQuad02 = false;
let deckTriss01 = false;
let deckTriss02 = false;
let deckTriss03 = false;
let deckTriss04 = false;
let doublePair01 = false;
let doublePair02 = false;

let cardValue = [];
function Deck(suit, number){
	this.suit = suit;
	this.number = number;
}
						//Getting hand value
function handValue(i){
	let deck = new Deck();
	let getOfStartPosition = cards[i].indexOf(" of ");
	let ofPosition = [getOfStartPosition, getOfStartPosition+4];
	let suit = cards[i].slice(ofPosition[1]);
	let number = cards[i].slice(0, ofPosition[0]);
	deck.suit = cards[i].slice(ofPosition[1]);
	deck.number = cards[i].slice(0, ofPosition[0]);
	numberHand.push(deck.number);
	//console.log(deck.number + " of " + deck.suit);
}
						//Looping through hand value
function getHandValue(){
	for (var i = 0; i < cards.length; i++) {
		handValue(i);
	}
}
						//Assigning card value
function assignCardValue(){
	let value;
	for (var i = 0; i < cards.length; i++) {		
		switch(numberHand[i]){
		case "2":
		value = 2;
		break;
		case "3":
		value = 3;
		break;
		case "4":
		value = 4;
		break;
		case "5":
		value = 5;
		break;
		case "6":
		value = 6;
		break;
		case "7":
		value = 7;
		break;
		case "8":
		value = 8;
		break;
		case "9":
		value = 9;
		break;
		case "10":
		value = 10;
		break;
		case "Jack":
		value = 11;
		break;
		case "Queen":
		value = 12;
		break;
		case "King":
		value = 13;
		break;
		case "Ace":
		value = 14;
		break;
	}
	cardValue.push(value);
	//console.log(cardValue);
	}	
}
						//Checking for pocket pairs
function checkPocketPair(){
	for (var i = 0; i < cards.length; i++) {
		if (cardValue[0] == cardValue[1]) {
			pocketPair01 = true;
			i = cards.length;
			console.log(pocketPair01 + " pocket Pair Player 1");
		}
	}
	for (var i = 0; i < cards.length; i++){
		if (cardValue[2] == cardValue[3]) {
			pocketPair02 = true;
			i = cards.length;
			console.log(pocketPair02 + " pocket Pair Player 2");
		}
	}
}
						//checking for deck pairs
function checkDeckPair(){
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[0] === cardValue[i]) {
			deckPair01 = true;
			i = cards.length;
			console.log(deckPair01 + " deck Pair Player 1 card 1");
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[1] === cardValue[i]) {
			deckPair02 = true;
			i = cards.length;
			console.log(deckPair02 + " deck Pair Player 1 card 2");
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[2] === cardValue[i]) {
			deckPair03 = true;
			i = cards.length;
			console.log(deckPair03 + " deck Pair Player 2 card 1");
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[3] === cardValue[i]) {
			deckPair04 = true;
			i = cards.length;
			console.log(deckPair04 + " deck Pair Player 2 card 2");
		}
	}
}
						//Checking for triss with pocket pairs
function checkPocketTriss(){
	for (var i = 4; i < cards.length; i++) {
		if (pocketPair01 == true){
			if (cardValue[0] === cardValue[i]) {
			pocketTriss01 = true;
			i = cards.length;
			console.log(pocketTriss01 + " pocket triss Player 1");
			}
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (pocketPair02 == true){
			if (cardValue[2] === cardValue[i]) {
			pocketTriss02 = true;
			i = cards.length;
			console.log(pocketTriss02 + " pocket triss Player 2");
			}
		}
	}
}
						//Checking for quad with pocket pairs
function checkPocketQuad(){
	var quadCard01;
	var quadCard02;
	var deckQuadCard01;
	var deckQuadCard02;
	if (pocketPair01 == true) {
		quadCard01 = cardValue[0];
		for (var i = 4; i < cards.length; i++) {
			if(cardValue[i] == cardValue[i+1]){
				deckQuadCard01 = cardValue[i];
				i = cards.length;
				if (quadCard01 == deckQuadCard01) {
					pocketQuad01 = true;
					console.log(pocketQuad01 + " pocket quad Player 1");
				}
			}
		}
	}
	if (pocketPair02 == true) {
		quadCard02 = cardValue[2];
		for (var i = 4; i < cards.length; i++) {
			if(cardValue[i] == cardValue[i+1]){
				deckQuadCard02 = cardValue[i];
				i = cards.length;
				if (quadCard02 == deckQuadCard02) {
					pocketQuad02 = true;
					console.log(pocketQuad02 + " pocket quad Player 2");
				}
			}
		}
	}		
}

function checkDeckQuad(){
	var deckQuadPair01;
	var deckQuadPair02;
	for (var i = 4; i < cards.length; i++) {
		if(cardValue[i] == cardValue[i+1]){
			deckQuadPair01 = cardValue[i];
			deckQuadPair01 = cardValue[i+1];
			i = cards.length;
		}
	}
}
						//Checking for triss with deck pair
function checkDeckTriss(){
	var trissCard01 = cardValue[0];
	var trissCard02 = cardValue[1];
	var trissCard03 = cardValue[2];
	var trissCard04 = cardValue[3];
	var deckTrissCard01;
	var deckTrissCard02;
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[i] == cardValue[i+1]) {
			deckTrissCard01 = cardValue[i];
			i = cards.length;
			if (deckTrissCard01 == trissCard01) {
				deckTriss01 = true;
				console.log(deckTriss01 + " deck triss Player 1 card 1");
			}
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[i] == cardValue[i+1]) {
			deckTrissCard02 = cardValue[i];
			i = cards.length;
			if (deckTrissCard02 == trissCard02) {
				deckTriss02 = true;
				console.log(deckTriss02 + " deck triss Player 1 card 2");
			}
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[i] == cardValue[i+1]) {
			deckTrissCard03 = cardValue[i];
			i = cards.length;
			if (deckTrissCard03 == trissCard03) {
				deckTriss03 = true;
				console.log(deckTriss03 + " deck triss Player 2 card 1");
			}
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardValue[i] == cardValue[i+1]) {
			deckTrissCard04 = cardValue[i];
			i = cards.length;
			if (deckTrissCard04 == trissCard04) {
				deckTriss04 = true;
				console.log(deckTriss04 + " deck triss Player 2 card 2");
			}
		}
	}
}
						//Checking for two pairs
function checkDoublePair(){
	if (deckPair01 == true && deckPair02 == true) {
		doublePair01 = true;
		console.log(doublePair01 + " double pair Player 1");
	}
	if (deckPair03 == true && deckPair04 == true) {
		doublePair02 = true;
		console.log(doublePair02 + " double pair Player 2");
	}
}
						//Activation function
function testFunction(){
	getHandValue();
	assignCardValue();
	checkPocketPair();
	checkDeckPair();
	checkPocketTriss();
	checkPocketQuad();
	checkDeckTriss();
	checkDoublePair();
	checkDeckQuad();
}