/*
function pickCards(i,x,part){
	let playButton = document.querySelector(".button");
	let card;
	let cardNumber;
	do{
		cardNumber = Math.floor(Math.random()*Math.floor(52));
		switch(cardNumber){
			case 0:
			card = "2 of Hearts";
			break;
			case 1:
			card = "3 of Hearts";
			break;
			case 2:
			card = "4 of Hearts";
			break;
			case 3:
			card = "5 of Hearts";
			break;
			case 4:
			card = "6 of Hearts";
			break;
			case 5:
			card = "7 of Hearts";
			break;
			case 6:
			card = "8 of Hearts";
			break;
			case 7:
			card = "9 of Hearts";
			break;
			case 8:
			card = "10 of Hearts";
			break;
			case 9:
			card = "Jack of Hearts";
			break;
			case 10:
			card = "Queen of Hearts";
			break;
			case 11:
			card = "King of Hearts";
			break;
			case 12:
			card = "Ace of Hearts";
			break;
			case 13:
			card = "2 of Spades";
			break;
			case 14:
			card = "3 of Spades";
			break;
			case 15:
			card = "4 of Spades";
			break;
			case 16:
			card = "5 of Spades";
			break;
			case 17:
			card = "6 of Spades";
			break;
			case 18:
			card = "7 of Spades";
			break;
			case 19:
			card = "8 of Spades";
			break;
			case 20:
			card = "9 of Spades";
			break;
			case 21:
			card = "10 of Spades";
			break;
			case 22:
			card = "Jack of Spades";
			break;
			case 23:
			card = "Queen of Spades";
			break;
			case 24:
			card = "King of Spades";
			break;
			case 25:
			card = "Ace of Spades";
			break;
			case 26:
			card = "2 of Clubs";
			break;
			case 27:
			card = "3 of Clubs";
			break;
			case 28:
			card = "4 of Clubs";
			break;
			case 29:
			card = "5 of Clubs";
			break;
			case 30:
			card = "6 of Clubs";
			break;
			case 31:
			card = "7 of Clubs";
			break;
			case 32:
			card = "8 of Clubs";
			break;
			case 33:
			card = "9 of Clubs";
			break;
			case 34:
			card = "10 of Clubs";
			break;
			case 35:
			card = "Jack of Clubs";
			break;
			case 36:
			card = "Queen of Clubs";
			break;
			case 37:
			card = "King of Clubs";
			break;
			case 38:
			card = "Ace of Clubs";
			break;
			case 39:
			card = "2 of Diamonds";
			break;
			case 40:
			card = "3 of Diamonds";
			break;
			case 41:
			card = "4 of Diamonds";
			break;
			case 42:
			card = "5 of Diamonds";
			break;
			case 43:
			card = "6 of Diamonds";
			break;
			case 44:
			card = "7 of Diamonds";
			break;
			case 45:
			card = "8 of Diamonds";
			break;
			case 46:
			card = "9 of Diamonds";
			break;
			case 47:
			card = "10 of Diamonds";
			break;
			case 48:
			card = "Jack of Diamonds";
			break;
			case 49:
			card = "Queen of Diamonds";
			break;
			case 50:
			card = "King of Diamonds";
			break;
			case 51:
			card = "Ace of Diamonds";
			break;
		}
		i++;
		var para = document.createElement("P");
		var t = document.createTextNode(card);
		para.appendChild(t);
		document.querySelector(part).appendChild(para);			
	}
	while(i <= x);
	console.log(card);
}
*/
//////////////////////////////////
/*function Deck(suit, number) {
	this.suit = suit;
	this.number = number;
}*/

/*function pickCards(i, x, part){
	let card = new Deck();
	let playButton = document.querySelector(".button");
	do{
		let chooseRandomSuit = Math.floor(Math.random()* Math.floor(4));
		let chooseRandomNumber = Math.floor(Math.random()* Math.floor(13));
		let setCards = document.querySelector(".dealt-cards");
		switch(chooseRandomSuit){
			case 0:
			Deck.suit = "Hearts";
			break;
			case 1:
			Deck.suit = "Spades";
			break;
			case 2:
			Deck.suit = "Clubs";
			break;
			case 3:
			Deck.suit = "Diamonds";
			break;
		}
		switch(chooseRandomNumber){
			case 0:
			Deck.number = "2";
			break;
			case 1:
			Deck.number = "3";
			break;
			case 2:
			Deck.number = "4";
			break;
			case 3:
			Deck.number = "5";
			break;
			case 4:
			Deck.number = "6";
			break;
			case 5:
			Deck.number = "7";
			break;
			case 6:
			Deck.number = "8";
			break;
			case 7:
			Deck.number = "9";
			break;
			case 8:
			Deck.number = "10";
			break;
			case 9:
			Deck.number = "Jack";
			break;
			case 10:
			Deck.number = "Queen";
			break;
			case 11:
			Deck.number = "King";
			break;
			case 12:
			Deck.number = "Ace";
			break;
		}
		i++;
		card = Deck.number + " of " + Deck.suit;
		var para = document.createElement("P");
		var t = document.createTextNode(card);
		para.appendChild(t);
		document.querySelector(part).appendChild(para);
	}
	while(i <= x);
}*/