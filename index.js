window.onload = function() {
  //Getting DOM objects
  const output = document.querySelector('.display');
  const buttons = document.body.querySelectorAll('.buttons');
  const textBox = document.querySelector('.textBox');
  const sContainer = document.querySelector('.smallerContainer');
  const bContainer = document.querySelector('.biggerContainer');

  //Assigning variables
  var input = "";
  var unknownNumber = 0;
  var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
  var str = "";
  var minLimit = 0;
  var maxLimit = 0;
  var switcher = false; //switcher for cleaninf the display
  //
  function getNewNumber(minLimit, maxLimit) {
    unknownNumber = Math.floor((Math.random()) * ((maxLimit - minLimit) + minLimit));
  }

  document.onclick = function() {

    if (event.target.id == "0-100") {
      maxLimit = 100;
      getNewNumber(minLimit, maxLimit);
      alert(unknownNumber);
    };
    if (event.target.id == "0-500") {
      maxLimit = 500;
      getNewNumber(minLimit, maxLimit);
    };
    if (event.target.id == "0-1000") {
      maxLimit = 1000;
      getNewNumber(minLimit, maxLimit);
    };

    if (numbers.includes(event.target.id)) {
      if (switcher == false) {
        output.innerText = "";
        switcher = true;
      }
      buttonValue = event.target.innerText;
      output.innerText += buttonValue;
    };
    if (event.target.className == "buttonClear") {
      output.innerText = "";
    };
    if (event.target.className == "buttonEnter") {
      numberGuesser();
      output.innerText = "";
    }
  };

  function numberGuesser() {
    var str = output.innerText;
    var value = parseInt(str);
    var switcheer = false;
    /*
    if (switcheer == false && ) {
      sContainer.innerText = "";
      bContainer.innerText = "";
      switcher = true;
    };
*/
    if (value != unknownNumber) {
      textBox.innerText = "Wrong";
      if (value < unknownNumber) {
        sContainer.innerText += value;
      };
      if (value > unknownNumber) {
        bContainer.innerText += value;
      };
    } else {
      textBox.innerText = "You are correct!";
      switcheer = false;
      sContainer.innerText = "";
      bContainer.innerText = "";
    };
  }

};
