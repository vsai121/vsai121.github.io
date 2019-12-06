var dir = document.getElementById("live1");
var amb = document.getElementById("live2");
var cru = document.getElementById("live3");

$(window).scroll(function() {
	var dirP = dir.getBoundingClientRect().y;
	var ambP = amb.getBoundingClientRect().y;
	var cruP = cru.getBoundingClientRect().y;
	
	if(dirP <= 0 || dirP >= 1000){
		document.getElementById("live1").innerHTML = "";
		i = 0;
	}	
	else{
		typingDirectorMessage();
	}
	
	if(ambP <= 0 || ambP >= 1000){
		document.getElementById("live2").innerHTML = "";
		j = 0;
	}	
	else{
		typingAmbassadorMessage();
	}
	
	if(cruP <= 0 || cruP >= 1000){
		document.getElementById("live3").innerHTML = "";
		k = 0;
	}	
	else{
		typingCrusadorMessage();
	}
	
	console.log(cruP);

	
});


var speed = 300;
var i = 0;
var j = 0;
var k = 0;

var Directortxt = 'Director\'s message - a random message to test the animation for the director message in multiple lines and see how it will affect he layout';
const typingDirectorMessage = () => {
	
	if (i < Directortxt.length) {
		document.getElementById("live1").innerHTML += 		Directortxt.charAt(i);
		i++;
		setTimeout(typingDirectorMessage, speed);
	} else {
		//document.getElementById('live').classList.add("live");
		document.getElementById('belongTo1').classList.add("fade-in");
		document.getElementById('belongTo1').classList.remove("hidden");
	}
		
};



var Ambassadortxt = 'Ambassador\'s message - a random message to test the animation';
const typingAmbassadorMessage = () => {

	if (j < Ambassadortxt.length) {
		document.getElementById("live2").innerHTML += Ambassadortxt.charAt(j);
		j++;
		setTimeout(typingAmbassadorMessage , speed);
	} else {
		//document.getElementById('live').classList.add("live");
		document.getElementById('belongTo2').classList.add("fade-in");
		document.getElementById('belongTo2').classList.remove("hidden");
	}
		
};


var Crusadortxt = 'Crusador\'s message - a random message to test the animation';
const typingCrusadorMessage = () => {

	if (k < Crusadortxt.length) {
		document.getElementById("live3").innerHTML += Crusadortxt.charAt(k);
		k++;
		setTimeout(typingCrusadorMessage , speed);
	} else {
		//document.getElementById('live').classList.add("live");
		document.getElementById('belongTo3').classList.add("fade-in");
		document.getElementById('belongTo3').classList.remove("hidden");
	}
		
};

$(document).ready(function() {

});

