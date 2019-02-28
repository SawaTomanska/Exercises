var Player1 = document.querySelector("button.player1");
var Player2 = document.querySelector("button.player2");
var Reset = document.querySelector("button.reset");
var AnswerPlayingTo = document.querySelector("input");
var ParagrafPlayingTo = document.querySelector("p span");
var ParagrafPlaying1 = document.querySelector("span.player1");
var ParagrafPlaying2 = document.querySelector("span.player2");
var effectPlayer1 = 0;
var effectPlayer2 = 0;
var PlayingTo = 5;

function printEffect(Player1Print, Player2Print) {
	ParagrafPlaying1.innerHTML = Player1Print;
	ParagrafPlaying2.innerHTML = Player2Print;
};

function reset() {
	effectPlayer1 = 0;
	effectPlayer2 = 0;
	AnswerPlayingTo.value = "";
	ParagrafPlayingTo.innerHTML = PlayingTo;
	ParagrafPlaying1.style.color = "black";
	ParagrafPlaying2.style.color = "black";
	printEffect(0, 0);
};

Reset.addEventListener("click", function () {
	reset();
});

Player1.addEventListener("click", function () {
	if (effectPlayer1 < PlayingTo && effectPlayer2 < PlayingTo) {
		effectPlayer1++;
		printEffect(effectPlayer1, effectPlayer2);
		if (effectPlayer1 == PlayingTo) {
			ParagrafPlaying1.style.color = "green";
		};
	};
});

Player2.addEventListener("click", function () {
	if (effectPlayer1 < PlayingTo && effectPlayer2 < PlayingTo) {
		effectPlayer2++;
		printEffect(effectPlayer1, effectPlayer2);
		if (effectPlayer2 == PlayingTo) {
			ParagrafPlaying2.style.color = "green";
		};
	};
});

AnswerPlayingTo.addEventListener("change", function () {
	PlayingTo = this.value;
	ParagrafPlayingTo.innerHTML = this.value;
	reset();
});
