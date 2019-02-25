let numberHand = [];
let cardSuit = [];
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
let fullHouse01 = false;
let fullHouse02 = false;
let pocketFlush01 = false;
let pocketFlush02 = false;
let deckFlush01 = false;
let deckFlush02 = false;
let deckFlush03 = false;
let deckFlush04 = false;
let cardValue = [];
function Deck(suit, number){
	this.suit = suit;
	this.number = number;
}
						//Getting hand value
function handValue(i){
	var deck = new Deck();
	var getOfStartPosition = cards[i].indexOf(" of ");
	var ofPosition = [getOfStartPosition, getOfStartPosition+4];
	var suit = cards[i].slice(ofPosition[1]);
	var number = cards[i].slice(0, ofPosition[0]);
	deck.suit = cards[i].slice(ofPosition[1]);
	deck.number = cards[i].slice(0, ofPosition[0]);
	numberHand.push(deck.number);
	cardSuit.push(deck.suit.toLowerCase());
	//console.log(deck.number + " of " + deck.suit);
	//console.log(deck.suit);
	//console.log(suitHand);
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
						//Checking for quad with deck triss
function checkDeckQuad(){						
	for (var i = 4; i < cards.length; i++) {//Matching with first card player 1
		if (cardValue[0] == cardValue[i]) {
			if (cardValue[i] == cardValue[i+1]) {
				if (cardValue[i+1] == cardValue[i+2]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 1");
				}
				else if (cardValue[i+1] == cardValue[i+3]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 1");
				}
				else if (cardValue[i+1] == cardValue[i+4]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 1");
				}				
			}
			else if (cardValue[i] == cardValue[i+2]) {
				if (cardValue[i+2] == cardValue[i+3]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 1");
				}
				else if (cardValue[i+2] == cardValue[i+4]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 1");
				}
			}
			i = cards.length;
		}
	}
							//Matching with second card player 1
	for (var i = 4; i < cards.length; i++) {	
		if (cardValue[1] == cardValue[i]) {
			if (cardValue[i] == cardValue[i+1]) {
				if (cardValue[i+1] == cardValue[i+2]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 2");
				}
				else if (cardValue[i+1] == cardValue[i+3]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 2");
				}
				else if (cardValue[i+1] == cardValue[i+4]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 2");
				}				
			}
			else if (cardValue[i] == cardValue[i+2]) {
				if (cardValue[i+2] == cardValue[i+3]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 2");
				}
				else if (cardValue[i+2] == cardValue[i+4]) {
					deckQuad01 = true;
					console.log(deckQuad01 + " deck quad player 1 card 2");
				}
			}
			i = cards.length;
		}
	}
							//Matching with first card player 2
	for (var i = 4; i < cards.length; i++) {	
		if (cardValue[2] == cardValue[i]) {
			if (cardValue[i] == cardValue[i+1]) {
				if (cardValue[i+1] == cardValue[i+2]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 1");
				}
				else if (cardValue[i+1] == cardValue[i+3]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 1");
				}
				else if (cardValue[i+1] == cardValue[i+4]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 1");
				}				
			}
			else if (cardValue[i] == cardValue[i+2]) {
				if (cardValue[i+2] == cardValue[i+3]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 1");
				}
				else if (cardValue[i+2] == cardValue[i+4]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 1");
				}
			}
			i = cards.length;
		}
	}
							//Matching with second card player 2
	for (var i = 4; i < cards.length; i++) {	
		if (cardValue[3] == cardValue[i]) {
			if (cardValue[i] == cardValue[i+1]) {
				if (cardValue[i+1] == cardValue[i+2]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 2");
				}
				else if (cardValue[i+1] == cardValue[i+3]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 2");
				}
				else if (cardValue[i+1] == cardValue[i+4]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 2");
				}				
			}
			else if (cardValue[i] == cardValue[i+2]) {
				if (cardValue[i+2] == cardValue[i+3]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 2");
				}
				else if (cardValue[i+2] == cardValue[i+4]) {
					deckQuad02 = true;
					console.log(deckQuad02 + " deck quad player 2 card 2");
				}
			}
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
	var deckTrissCard03;
	var deckTrissCard04;
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
						//Checking for full house
function checkFullHouse(){
	if (deckPair01 == true && deckTriss02 == true) {
		fullHouse01 = true;
		console.log(fullHouse01 + " full house Player 1 1");
	}
	else if (deckTriss01 == true && deckPair02 == true) {
		fullHouse01 = true;
		console.log(fullHouse01 + " full house Player 1 2");
	}

	if (deckPair03 == true && deckTriss04 == true) {
		fullHouse02 = true;
		console.log(fullHouse02 + " full house Player 2 1");
	}
	else if (deckTriss03 == true && deckPair04 == true) {
		fullHouse02 = true;
		console.log(fullHouse02 + " full house Player 2 2");
	}
}
						//Checking for pocket flush
function checkPocketFlush(){
	if (cardSuit[0] == cardSuit[1]) { // Player 1 pocket flush
		for (var i = 4; i < cards.length; i++) {
			if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+1] &&
				cardSuit[0] == cardSuit[i+2]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
			else if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+1] &&
				cardSuit[0] == cardSuit[i+3]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
			else if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+1] &&
				cardSuit[0] == cardSuit[i+4]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
			else if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+2] &&
				cardSuit[0] == cardSuit[i+3]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
			else if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+2] &&
				cardSuit[0] == cardSuit[i+4]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
			else if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+3] &&
				cardSuit[0] == cardSuit[i+4]) {
				pocketFlush01 = true;
				i = cards.length;
				console.log(pocketFlush01 + " pocket flush Player 1");
			}
		}
	}
	if (cardSuit[2] == cardSuit[3]) { // Player 2 pocket flush
		for (var i = 4; i < cards.length; i++) {
			if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+1] &&
				cardSuit[2] == cardSuit[i+2]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
			else if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+1] &&
				cardSuit[2] == cardSuit[i+3]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
			else if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+1] &&
				cardSuit[2] == cardSuit[i+4]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
			else if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+2] &&
				cardSuit[2] == cardSuit[i+3]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
			else if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+2] &&
				cardSuit[2] == cardSuit[i+4]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
			else if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+3] &&
				cardSuit[2] == cardSuit[i+4]) {
				pocketFlush02 = true;
				i = cards.length;
				console.log(pocketFlush02 + " pocket flush Player 2");
			}
		}
	}
}
						//Checking for deck flush
function checkDeckFlush(){
	for (var i = 4; i < cards.length; i++) {
		if (cardSuit[0] == cardSuit[i] && cardSuit[0] == cardSuit[i+1] && 
			cardSuit[0] == cardSuit[i+2] && cardSuit[0] == cardSuit[i+3]) {
			deckFlush01 = true
			i = cards.length;
			console.log(deckFlush01 + " deck flush Player 1 card 1");
		}
		else if (cardSuit[1] == cardSuit[i] && cardSuit[1] == cardSuit[i+1] && 
			cardSuit[1] == cardSuit[i+2] && cardSuit[1] == cardSuit[i+3]) {
			deckFlush02 = true
			i = cards.length;
			console.log(deckFlush02 + " deck flush Player 1 card 2");
		}
	}
	for (var i = 4; i < cards.length; i++) {
		if (cardSuit[2] == cardSuit[i] && cardSuit[2] == cardSuit[i+1] && 
			cardSuit[2] == cardSuit[i+2] && cardSuit[2] == cardSuit[i+3]) {
			deckFlush03 = true
			i = cards.length;
			console.log(deckFlush03 + " deck flush Player 2 card 1");
		}
		else if (cardSuit[3] == cardSuit[i] && cardSuit[3] == cardSuit[i+1] && 
			cardSuit[3] == cardSuit[i+2] && cardSuit[3] == cardSuit[i+3]) {
			deckFlush04 = true
			i = cards.length;
			console.log(deckFlush04 + " deck flush Player 2 card 2");
		}
	}
}
						//Checking for pocket streight
function checkPocketStreight(){
	var streight = [cardValue[0],cardValue[1],cardValue[4],cardValue[5],
					cardValue[6],cardValue[7],cardValue[8]];
	streight = streight.sort(function(a, b){return a - b});
	console.log(streight);
		if (streight[0] == streight[1]-1 && streight[1] == streight[2]-1 &&
			streight[2] == streight[3]-1 && streight[3] == streight[4]-1) {
			console.log("Yea");
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
	checkFullHouse();
	checkPocketFlush();
	checkDeckFlush();
	checkPocketStreight();
}