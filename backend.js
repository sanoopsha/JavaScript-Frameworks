var compTotal=0;
var playerTotal=0;

var compsc=0;
var playersc=0;


document.getElementById('rock').onclick = function(){
    
	calculateREsult("rock");
	
}
document.getElementById('paper').onclick = function(){
    
	calculateREsult("paper");
}
document.getElementById('scissors').onclick = function(){
	
    calculateREsult("scissors");
}

document.getElementById('ov').onclick = function(){
	if(compTotal==playerTotal){
		document.getElementById('res').innerHTML = "Game Over Game Tie";
		
		
	}else if(compTotal>playerTotal){
		document.getElementById('res').innerHTML = "Game Over Computer Tie";
	}
	else if(compTotal<playerTotal){
		document.getElementById('res').innerHTML = "Game Over Player Tie";
	}
	document.getElementById("bord").style.display = "none";
	document.getElementById("over").style.display = "none";
	document.getElementById("start").style.display = "none";
	
    
}

document.getElementById('strt').onclick = function(){
	playerTotal=0;
		compTotal=0;
		document.getElementById('res').innerHTML ="";
	
    document.getElementById("bord").style.display = "block";
	document.getElementById("over").style.display = "block";
	document.getElementById("result").style.display = "block";
	document.getElementById("res").style.display = "block";
	document.getElementById("start").style.display = "none";
}



function calculateREsult(playerchoice){
	
	var comp= ["rock","paper","scissors"];
	var x = Math.floor((Math.random() * 2) + 0);
	var compChoice=comp[x];
	
	
	alert('Player Select : ' + playerchoice + '\nComputer Select : '+ compChoice);
	
	if(compChoice==playerchoice){
		alert("Turn is Tie");
	}

	
	
	else if(playerchoice=="rock" && compChoice=="scissors"){
		alert("Player Win this Turn");
		playerTotal++;
		document.getElementById('userScore').innerHTML = playerTotal;
	}
	else if(playerchoice=="rock" && compChoice=="paper"){
		alert("Computer Win this Turn");
		compTotal++;
		document.getElementById('compScore').innerHTML = compTotal;
	}
	else if(playerchoice=="scissors" && compChoice=="paper"){
		alert("Player Win this Turn");
		playerTotal++;
		document.getElementById('userScore').innerHTML = playerTotal;
	}
	else if(playerchoice=="scissors" && compChoice=="rock"){
		alert("Computer Win this Turn");
		compTotal++;
		document.getElementById('compScore').innerHTML = compTotal;
	}
	else if(playerchoice=="paper" && compChoice=="rock"){
		alert("player Win this Turn");
		playerTotal++;
		document.getElementById('userScore').innerHTML = playerTotal;
	}
	else if(playerchoice=="paper" && compChoice=="scissors"){
		alert("Computer Win this Turn");
		compTotal++;
		document.getElementById('compScore').innerHTML = compTotal;
	}
	
	if(compTotal==10){
		document.getElementById('res').innerHTML ="Game Over Computer Wins";
		
		document.getElementById('userScore').innerHTML ="0";
		document.getElementById('compScore').innerHTML ="0";
		
		document.getElementById("start").style.display = "block";
		document.getElementById("bord").style.display = "none";
	}
	if(playerTotal==10){
		
		document.getElementById('res').innerHTML ="Game Over Player Wins ";
		document.getElementById('userScore').innerHTML ="0";
		document.getElementById('compScore').innerHTML ="0";
		
		document.getElementById("start").style.display = "block";
		document.getElementById("bord").style.display = "none";
	}
	
}