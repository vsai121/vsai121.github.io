var ele1 = document.getElementById("fade1");
var ele2 = document.getElementById("fade2");
var ele3 = document.getElementById("fade3");

$(window).scroll(function() {
	var screenPosition1 = ele1.getBoundingClientRect();
	var ele1y = screenPosition1.y
	var screenPosition2 = ele2.getBoundingClientRect();
	var ele2y = screenPosition2.y

	var screenPosition3 = ele3.getBoundingClientRect();
	var ele3y = screenPosition3.y

	ele1y = Math.abs(ele1y);
	ele2y = Math.abs(ele2y);
	ele3y = Math.abs(ele3y);

	$(ele1).css({
		opacity: 1 - ele1y/500 + 0.7
	});
	$(ele2).css({
		opacity: 1 - ele2y/500 +0.5
	});
	$(ele3).css({
		opacity: 1 - ele3y/500 +0.5
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

function animate_top (){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});

		$('#back-to-top').click(function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$('#back-to-top').tooltip('show');
}

function gallery(){
	
	$(".filter-button").click(function() {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show();
    } else {
      $(".filter")
        .not("." + value)
        .hide();
      $(".filter")
        .filter("." + value)
        .show();
    }
    if ($(".filter-button").removeClass("active")) {
      $(this).addClass("active");
    }
  });
  
  $(this).addClass("active");
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

items.forEach(item => item.addEventListener('click', toggleAccordion));

$(document).ready(function() {
	tick();
	gallery();
	animate_top();
});
