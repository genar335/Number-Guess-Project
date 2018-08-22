//Getting DOM objects
const output = document.querySelector('.display');
const buttons = document.body.querySelectorAll('.buttons');

//Assigning variables
var input = '';
var unknownNumber = 0;

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
var switcher = false; //switcher for cleaninf the display
//
function getNewNumber() {
  unknownNumber = Math.floor(Math.random() * 100);
}

/*
document.addEventListener('click', function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement,
    text = target.textContent || text.innerText;
}, false);
*/
document.onclick = function() {
  if (numbers.includes(event.target.id)) {
    if (switcher == false) {
      output.innerText = "";
      switcher = true;
    }
    output.innerText += event.target.innerText;
  }; 
  if (event.target.className == "buttonClear"){
    output.innerText = "";
  };
};

/*
one.onclick = function () {
  output.innerText += "1";
};
two.onclick = function () {
  output.innerText += "2";
};
three.onclick = function () {
  output.innerText += "3";
};
four.onclick = function () {
  output.innerText += "4";
};
five.onclick = function () {
  output.innerText += "5";
};
six.onclick = function () {
  output.innerText += "6";
};
seven.onclick = function () {
  output.innerText += "7";
};
eight.onclick = function () {
  output.innerText += "8";
};
nine.onclick = function () {
  output.innerText += "9";
};
zero.onclick = function () {
  output.innerText += "0";
};
*/


/*
document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
  output.innerHTML = "Heya";
};
*/
