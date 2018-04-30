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
	test = true;

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
	$('#rando').text(randoreps);

	play();
}

//function for game functionality

var play = function(){

	$("#set1, #set2, #set3, #set4, #wins, #losses, #sum").empty();

	$("#set1").on("click", function() {
		score = score + rando1;
		$('#set1').text(score);
		return;
	}

	$("#set2").on("click", function() {
		score = score + rando2;
		$('#set2').text(score);
		return;
	}

	$("#set3").on("click", function() {
		score = score + rando3;
		$('#set3').text(score);
		return;
	}

	$("#set4").on("click", function() {
		score = score + rando4;
		$('#set4').text(score);
		return;
	}

	result();
}

//function to keep track of game outcome result

var result = function(){
	if(score === randoreps){
		wins++;
		$('#wins').text(wins);
		alert('You Won!')
		reset();
	}else if(score > randoreps){
		losses++;
		$('#losses').text(losses);
		alert('You lost :(');
		reset();
	}
}

