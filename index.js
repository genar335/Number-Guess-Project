//Getting DOM objects
const output = document.querySelector('.display');
const buttons = document.body.querySelectorAll('.buttons');

//Assigning variables
var input = '';
var unknownNumber = 0;

//
function getNewNumber() {
  unknownNumber = Math.floor(Math.random() * 100);
}

/*
document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
  output.innerHTML = "Heya";
};
*/
