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

//function to compare values

function compare(num){
	if(num === randoreps){
		wins++;
		$('#wins').text(wins);
		alert('You Won!')
		reset();
	}else if(num > randoreps){
		losses++;
		$('#losses').text(losses);
		alert('You lost :(');
		reset();
	}
}

//function to reset game

function reset(){
	score = 0;
	$('#sum').empty();
	start();	
}

//function to start game

start();

function start(){
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

	$("#set1").on("click", function() {
		score = score + rando1;
		console.log(score)
		$('#set1').val(score);
		$('#sum').text(score);
		compare(score);
	})

	$("#set2").on("click", function() {
		score = score + rando2;
		$('#set2').val(score);
		$('#sum').text(score);
		compare(score);
	})

	$("#set3").on("click", function() {
		score = score + rando3;
		$('#set3').val(score);
		$('#sum').text(score);
		compare(score);
	})

	$("#set4").on("click", function() {
		score = score + rando4;
		$('#set4').val(score);
		$('#sum').text(score);
		compare(score);
	})
}

});

