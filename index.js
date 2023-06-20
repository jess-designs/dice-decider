var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];



function updateDiceImg() {
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

document.querySelector(".img1").src = diceImages[randomNumber1];
document.querySelector(".img2").src = diceImages[randomNumber2];

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
document.querySelector("h1").innerText = "Player 2 Wins!";
}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
}
}
