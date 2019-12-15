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





$(document).ready(function() {
 
    var i;
	for (i = 1; i <= 100; i++) {
	 $('.no-gutters').append("<div class=\"col-6 col-sm-6 col-md-4 col-lg-4 filter 2019\"><img src=\"static/images/Gallery/_" + i.toString() + ".jpg\" class=\"img-fluid\"><div class=\"overlay\"></div></div>")
	}
  
  gallery();
  
var imgPopup = $('.img-popup');
var imgCont  = $('.filter');
var popupImage = $('.img-popup img');
var closeBtn = $('.close-btn');

// handle events
imgCont.on('click', function() {
console.log('stfu');	
var img_src = $(this).children('img').attr('src');
imgPopup.children('img').attr('src', img_src);
imgPopup.addClass('opened');
});

$(imgPopup, closeBtn).on('click', function() {
imgPopup.removeClass('opened');
imgPopup.children('img').attr('src', '');
});

popupImage.on('click', function(e) {
e.stopPropagation();

});


});
