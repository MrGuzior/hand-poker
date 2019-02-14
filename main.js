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
/*
function dealCards(){
	for (var i = 0; i < 2; i++) {
		pickCards(".player-one");		
	}
	for (var i = 0; i < 2; i++) {
		pickCards(".player-two");
	}	
	playButton.innerHTML = '<button onclick="dealFlop()">Deal flop</button>';
}
function dealFlop(){
	for (var i = 0; i < 3; i++) {
		pickCards(".dealt-flop");
	}	
	playButton.innerHTML = '<button onclick="dealRiver()">Deal river</button>';
}
function dealRiver(){
	for (var i = 0; i < 1; i++) {
		pickCards(".dealt-river");
	}
	playButton.innerHTML = '<button onclick="dealTurn()">Deal turn</button>';
}
function dealTurn(){
	for (var i = 0; i < 1; i++) {
		pickCards(".dealt-turn");
	}
	writeCard()	
	playButton.innerHTML = '<button onclick="reloadPage()">Reload Page</button>';
}
*/
function writeCard(){
	for (var i = 0; i < cards.length; i++) {
		//console.log(cards[i]);
	}
	
}
function reloadPage(){
	window.location.reload();
}