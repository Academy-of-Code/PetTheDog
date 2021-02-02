let pets = 0;
let PetsPerSecond = 0;

let hands_price = 1;
let hands_count = 0;

let groom_price = 100;
let groom_count = 0;

let treats_price = 2000;
let treats_count = 0;

let multiverse_price = 500000;
let multiverse_count = 0;

element = document.getElementById("rot");

hands_element = document.getElementById("hands");
groom_element = document.getElementById("groom");
treats_element = document.getElementById("treats");
multiverse_element = document.getElementById("multiverse");

setInterval("pets = pets+PetsPerSecond; display()",1000)

document.getElementById("store").style.display='none';
document.getElementById("store-button-hide").style.display='none';

reset()

function buy_hands(){
if(pets >= hands_price)
{
pets=pets-hands_price
hands_count = hands_count+1
hands_price = hands_price + randomNum(1,20) * hands_count - 30
PetsPerSecond = PetsPerSecond+randomNum(1,6);


display();
}

}


function buy_grooms(){
if(pets >= groom_price && hands_count >= 10)
{
pets=pets-groom_price
groom_count = groom_count+1
groom_price = groom_price + randomNum(50,200) * groom_count - 30
PetsPerSecond = PetsPerSecond+randomNum(20,100);


display();
}

}


function buy_treats(){
if(pets >= treats_price && groom_count >= 5 && hands_count >= 10)
{
pets=pets-treats_price
treats_count = treats_count+1
treats_price = treats_price + randomNum(300,1000) * treats_count - 30
PetsPerSecond = PetsPerSecond+randomNum(100,400);


display();
}

}

function buy_multiverse(){
if(pets >= multiverse_price && groom_count >= 10  && hands_count >= 20 && treats_count >= 5)
{
pets=pets-multiverse_price
multiverse_count = multiverse_count+1
multiverse_price = multiverse_price * 10
PetsPerSecond = PetsPerSecond*2


display();
}

}

function display(){

document.getElementById("hands").innerHTML = "Hands "+"("+hands_price+")"+" *"+hands_count+"*";

if (hands_count >= 10){document.getElementById("groom").innerHTML = "Groom "+"("+groom_price+")"+" *"+groom_count+"*";}else{}

if (groom_count >= 5){document.getElementById("treats").innerHTML = "Treats "+"("+treats_price+")"+" *"+treats_count+"*";}else{}

if (hands_count >= 20 && groom_count >= 10 && treats_count >= 5){document.getElementById("multiverse").innerHTML = "Multiverse "+"("+multiverse_price+")"+" *"+multiverse_count+"*";}else{}

document.getElementById("pets").innerHTML = pets+" Pets";
document.getElementById("PPS").innerHTML = PetsPerSecond+" Pets per Second";
}

function pet(){
pets=pets+1
document.getElementById("pets").innerHTML = pets+' Pets'
}


function hide(){
	document.getElementById("store-button-hide").style.display='none';
  document.getElementById("store-button-reveal").style.display='block';
	document.getElementById("store").style.display='none';
}

function reveal(){
document.getElementById("store-button-reveal").style.display='none';
document.getElementById("store-button-hide").style.display='block';
	document.getElementById("store").style.display='block';
}

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("rotate");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("rotate");
}, false);
}
