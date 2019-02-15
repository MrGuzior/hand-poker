let i;
let x;
let playButton = document.querySelector(".button");

function dealCards(){
	for (var i = 0; i < 2; i++) {
		pickCards(".player-one");
	}
	for (var i = 0; i < 2; i++) {
		pickCards(".player-two");
	}
	for (var i = 0; i < 3; i++) {
		pickCards(".dealt-flop");
	}
	for (var i = 0; i < 1; i++) {
		pickCards(".dealt-river");
	}
	for (var i = 0; i < 1; i++) {
		pickCards(".dealt-turn");
	}
	playButton.innerHTML = '<button onclick="reloadPage()">Reload Page</button>';
}

function dealTestCards(){
	let testCardNumber = 0

	for (var i = 0; i < 2; i++) {
		pickTestCards(".player-one", testCardNumber);
		testCardNumber++;
	}
	for (var i = 0; i < 2; i++) {
		pickTestCards(".player-two", testCardNumber);
		testCardNumber++;
	}
	for (var i = 0; i < 3; i++) {
		pickTestCards(".dealt-flop", testCardNumber);
		testCardNumber++;
	}
	for (var i = 0; i < 1; i++) {
		pickTestCards(".dealt-river", testCardNumber);
		testCardNumber++;
	}
	for (var i = 0; i < 1; i++) {
		pickTestCards(".dealt-turn", testCardNumber);
		testCardNumber++;
	}
	playButton.innerHTML = '<button onclick="reloadPage()">Reload Page</button>';
}

function writeCard(){
	for (var i = 0; i < cards.length; i++) {
		//console.log(cards[i]);
	}
	
}
function reloadPage(){
	window.location.reload();
}