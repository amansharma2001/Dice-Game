function myFunction()
{
    var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice"+randomNumber1+".png";

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomDiceImageSource1 = "images/" +randomDiceImage1;
var randomDiceImageSource2 = "images/" +randomDiceImage2;


var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomDiceImageSource1);
img2.setAttribute("src", randomDiceImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML  ="🚩 Player 1 wins";

}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}
else
{
    var win1 = document.querySelector("h1").innerHTML= "Draw";
}


}
myFunction();