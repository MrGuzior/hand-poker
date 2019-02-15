let cards = [];
let cardNumber;
let usedNumbers = []

function randomCards(){
	let newNumber = Math.floor(Math.random()*Math.floor(52));
	while (usedNumbers.indexOf(newNumber) !== -1) {
		newNumber = Math.floor(Math.random()*Math.floor(52));
	}
	cardNumber = newNumber
	usedNumbers.push(newNumber)
}

function pickCards(part){
	let card;
	randomCards();
	switch(cardNumber){
			case 0:
			card = "2 of Hearts";
			i++;
			break;
			case 1:
			card = "3 of Hearts";
			i++;
			break;
			case 2:
			card = "4 of Hearts";
			i++;
			break;
			case 3:
			card = "5 of Hearts";
			i++;
			break;
			case 4:
			card = "6 of Hearts";
			i++;
			break;
			case 5:
			card = "7 of Hearts";
			i++;
			break;
			case 6:
			card = "8 of Hearts";
			i++;
			break;
			case 7:
			card = "9 of Hearts";
			i++;
			break;
			case 8:
			card = "10 of Hearts";
			i++;
			break;
			case 9:
			card = "Jack of Hearts";
			i++;
			break;
			case 10:
			card = "Queen of Hearts";
			i++;
			break;
			case 11:
			card = "King of Hearts";
			i++;
			break;
			case 12:
			card = "Ace of Hearts";
			i++;
			break;
			case 13:
			card = "2 of Spades";
			i++;
			break;
			case 14:
			card = "3 of Spades";
			i++;
			break;
			case 15:
			card = "4 of Spades";
			i++;
			break;
			case 16:
			card = "5 of Spades";
			i++;
			break;
			case 17:
			card = "6 of Spades";
			i++;
			break;
			case 18:
			card = "7 of Spades";
			i++;
			break;
			case 19:
			card = "8 of Spades";
			i++;
			break;
			case 20:
			card = "9 of Spades";
			i++;
			break;
			case 21:
			card = "10 of Spades";
			i++;
			break;
			case 22:
			card = "Jack of Spades";
			i++;
			break;
			case 23:
			card = "Queen of Spades";
			i++;
			break;
			case 24:
			card = "King of Spades";
			i++;
			break;
			case 25:
			card = "Ace of Spades";
			i++;
			break;
			case 26:
			card = "2 of Clubs";
			i++;
			break;
			case 27:
			card = "3 of Clubs";
			i++;
			break;
			case 28:
			card = "4 of Clubs";
			i++;
			break;
			case 29:
			card = "5 of Clubs";
			i++;
			break;
			case 30:
			card = "6 of Clubs";
			i++;
			break;
			case 31:
			card = "7 of Clubs";
			i++;
			break;
			case 32:
			card = "8 of Clubs";
			i++;
			break;
			case 33:
			card = "9 of Clubs";
			i++;
			break;
			case 34:
			card = "10 of Clubs";
			i++;
			break;
			case 35:
			card = "Jack of Clubs";
			i++;
			break;
			case 36:
			card = "Queen of Clubs";
			i++;
			break;
			case 37:
			card = "King of Clubs";
			i++;
			break;
			case 38:
			card = "Ace of Clubs";
			i++;
			break;
			case 39:
			card = "2 of Diamonds";
			i++;
			break;
			case 40:
			card = "3 of Diamonds";
			i++;
			break;
			case 41:
			card = "4 of Diamonds";
			i++;
			break;
			case 42:
			card = "5 of Diamonds";
			i++;
			break;
			case 43:
			card = "6 of Diamonds";
			i++;
			break;
			case 44:
			card = "7 of Diamonds";
			i++;
			break;
			case 45:
			card = "8 of Diamonds";
			i++;
			break;
			case 46:
			card = "9 of Diamonds";
			i++;
			break;
			case 47:
			card = "10 of Diamonds";
			i++;
			break;
			case 48:
			card = "Jack of Diamonds";
			i++;
			break;
			case 49:
			card = "Queen of Diamonds";
			i++;
			break;
			case 50:
			card = "King of Diamonds";
			i++;
			break;
			case 51:
			card = "Ace of Diamonds";
			i++;
			break;
	}			
	var para = document.createElement("P");
	var t = document.createTextNode(card);
	para.appendChild(t);
	document.querySelector(part).appendChild(para);			
	cards.push(card);	
}
// tutaj ok

// to patrz
function randomTestCards(){
	let newNumber;
	for (var i = 0; i < 9; i++) {
		newNumber = i;
		console.log('Wykonuje randomTestCards(). NewNumber:' + newNumber)
	}
	cardNumber = newNumber
}

function pickTestCards(part, testCardNumber){
	let card;

	switch(testCardNumber){
			case 0:
			card = "7 of Hearts"; //Player one card 1
			i++;
			break;
			case 1:
			card = "3 of Hearts"; //Player one card 2
			i++;
			break;
			case 2:
			card = "4 of Hearts"; //Player two card 1
			i++;
			break;
			case 3:
			card = "5 of Hearts"; //Player two card 2
			i++;
			break;
			case 4:
			card = "7 of Hearts"; //Flop
			i++;
			break;
			case 5:
			card = "7 of Hearts"; //Flop
			i++;
			break;
			case 6:
			card = "7 of Hearts"; //Flop
			i++;
			break;
			case 7:
			card = "9 of Hearts"; //Turn
			i++;
			break;
			case 8:
			card = "10 of Hearts"; //River
			i++;
			break;
	}			
	var para = document.createElement("P");
	var t = document.createTextNode(card);
	para.appendChild(t);
	document.querySelector(part).appendChild(para);			
	cards.push(card);
}
//
//
