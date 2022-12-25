var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;  //random no. 1 - 6

var randomDiceimg = "dice" + randomNumber1 + ".png";  //random dice image dice1.png - dice6.png

var diceImageSource = "images/" + randomDiceimg;

var image1 = document.querySelectorAll( "img" )[ 0 ];

image1.setAttribute( "src", diceImageSource );

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

var Diceimg2 = "dice" + randomNumber2 + ".png";

var diceImage2Source = "images/" + Diceimg2;

document.querySelectorAll( "img" )[ 1 ].setAttribute( "src", diceImage2Source );

if ( randomNumber1 > randomNumber2 )
{
    document.querySelector( "h1" ).innerHTML = "Player 1 Wins"
}
else if ( randomNumber2 > randomNumber1 )
{
    document.querySelector("h1").innerHTML = "Payer 2 wins"
}
else
{
    document.querySelector("h1").innerHTML = "Draw!"
}