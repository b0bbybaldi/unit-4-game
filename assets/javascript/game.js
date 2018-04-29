//Input

//Clicks from user on figures 

//Operations

//Randomizer for number to guess 19 to 120

//Randomizer for every single crystal 1 to 12

//Reset and start functions

//Score Addeer for wins and losses

//Dom manipulator linking crystals and randomly generated number

//Add total score

//Expected Outcomes

//If total score equals original random number then record that as a win and restart game

//If totall score goes over original random number then record that as  a loss and restart game


$(document).ready(function(){
	
//var random number button 1,2,3,4
var rando1 = 0;
var rando2 = 0;
var rando3 = 0;
var rando4 = 0; 

//var random total number

var randoreps = 0;

//var score

var score = 0;

//var  wins

var wins = 0;

//var losses

var losses = 0; 

//function to generate random values

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to reset game

var reset = function(){
	score = 0;

	rando1 = getRandom(1,12);
	rando2 = getRandom(1,12);
	rando3 = getRandom(1,12);
	rando4 = getRandom(1,12);

	randoreps = getRandom(19,120);

	score = 0;

	wins = 0;

	losses = 0;

	test = false;
	start();	
}



//function to start game

var start = function(){
	score = 0;

	rando1 = getRandom(1,12);
	console.log(rando1);
	rando2 = getRandom(1,12);
	console.log(rando2);
	rando3 = getRandom(1,12);
	console.log(rando3);
	rando4 = getRandom(1,12);
	console.log(rando4);

	randoreps = getRandom(19,120);

	$("#, #, #, #").empty();


}






})

$(document).ready(function() {

      // Make our variables global to the runtime of our application
      var firstNumber = 0;
      var secondNumber = 0;
      var operator = "";
      var result = 0;
      var isOperatorChosen = false;
      var isCalculated = false;

      // Use a function to initialize our calculator.
      // This way when the user hits clear, we can guarantee a reset of the app.
      function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
      }

      $(".card").on("click", ".number", function() {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) {
          return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
          secondNumber += $(this).val();
          $("#second-number").text(secondNumber);

        }
        else {
          firstNumber += $(this).val();
          $("#first-number").text(firstNumber);
        }

      }).on("click", ".operator", function() {

        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        if (!firstNumber || isCalculated) {
          return false;
        }

        // Set isOperatorChosen to true so we start writing to secondNumber
        isOperatorChosen = true;

        // Store off the operator
        operator = $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

      }).on("click", ".equal", function() {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
          return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        if (operator === "plus") {
          result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
          result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
          result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
          result = firstNumber / secondNumber;
        }

        else if (operator === "power") {
          result = Math.pow(firstNumber, secondNumber);
        }

        $("#result").text(result);

      }).on("click", ".clear", function() {

        // Call initializeCalculater so we can reset the state of our app
        initializeCalculator();

      });

      // Call initializeCalculater so we can set the state of our app
      initializeCalculator();
    });