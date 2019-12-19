var ele1 = document.getElementById("fade1");
var ele2 = document.getElementById("fade2");


$(window).scroll(function() {
	var screenPosition1 = ele1.getBoundingClientRect();
	var ele1y = screenPosition1.y
	
	var screenPosition2 = ele2.getBoundingClientRect();
	var ele2y = screenPosition2.y


	


	ele1y = Math.abs(ele1y);
	ele2y = Math.abs(ele2y);
	

	$(ele1).css({
		opacity: 1 - ele1y/500 + 0.7
	});
	$(ele2).css({
		opacity: 1 - ele2y/500 +0.5
	});
	

	
	
});


var day;
var sec;
var ticker;

function getSeconds() {
	let now 			= new Date();
	let next			= new Date(2020, 0, 13, 5, 30, 00, 00 );

	let current 	= now.getTime();
	let nextTime	= next.getTime();
	let diff			= parseInt((next - now)/1000);

	startTimer (diff);
}

function startTimer(secs) {
	sec = parseInt(secs);
	ticker = setInterval("tick()", 1000);
	tick();
}

function tick() {
	let secs = sec;

	if (secs > 0) {
		sec--;
	} else {
		clearInterval(ticker);
		getSeconds();
	}


	let days = Math.floor(secs/86400);
	secs %= 86400;
	let hours = Math.floor(secs/3600);
	secs %= 3600;
	let mins = Math.floor(secs/60);
	secs %= 60;



	$('#days').text(days + ' D');
	$('#hours').text(((hours < 10) ? '0' : '') + hours + ' H');
	$('#minutes').text(((mins < 10) ? '0' : '') + mins +' M');
	
}




$('.flip').hover(function(){
	        $(this).find('.card').toggleClass('flipped');
});

function openTab(tab){
  window.location.hash=tab.innerText.trim();
  /*tab.innerText show some white space at the beginning of the string in IE. It's better to trim that using trim() method. trim() removes white space from both beginning and ending of a string. So replace 'tab.innerText' with 'tab.innerText.trim()' */
}


const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}


jQuery(document).ready(function($){
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
   		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

//open popup
function openpopup(id) {
    
    	$("#"+id+"").addClass('is-visible');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



$(document).ready(function() {
	tick();
	
});
