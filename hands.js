let numberHand = [];

function Deck(suit, number){
	this.suit = suit;
	this.number = number;
}

function handValue(i){
	let deck = new Deck();
	let getOfStartPosition = cards[i].indexOf(" of ");
	let ofPosition = [getOfStartPosition, getOfStartPosition+4];
	let suit = cards[i].slice(ofPosition[1]);
	let number = cards[i].slice(0, ofPosition[0]);
	deck.suit = cards[i].slice(ofPosition[1]);
	deck.number = cards[i].slice(0, ofPosition[0]);

	numberHand.push(deck.number);

	console.log(deck.number + " of " + deck.suit);
	
}

function getHandValue(){
	for (var i = 0; i < cards.length; i++) {
		handValue(i);
	}
}

function checkPocketPair(){
	let pocketPair01 = false;
	let pocketPair02 = false;
	for (var i = 0; i < cards.length; i++) {
		if (numberHand[0] == numberHand[1]) {
			pocketPair01 = true;
			i = cards.length;
			console.log(pocketPair01 + " Pocket first");
		}
		}
	for (var i = 0; i < cards.length; i++){
		if (numberHand[2] == numberHand[3]) {
			pocketPair02 = true;
			i = cards.length;
			console.log(pocketPair02 + " Pocket second");
		}
		}
}

function checkDeckPair(){
	let deckPair01 = false;
	let deckPair02 = false;
	for (var i = 0; i < cards.length; i++) {
		if (numberHand[0] === numberHand[i+4]) {
			deckPair01 = true;
			i = cards.length;
			console.log(deckPair01 + " deck first");
		}
	}
	for (var i = 1; i < cards.length; i++) {
		if (numberHand[1] === numberHand[i+4]) {
			deckPair02 = true;
			i = cards.length;
			console.log(deckPair02 + " deck second");
		}
	}
}

function testFunction(){
	getHandValue();
	checkPocketPair();
	checkDeckPair();
}