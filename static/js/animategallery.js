function gallery(){
	console.log('Hi');
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


 var imgPopup = $('.img-popup');
  var imgCont  = $('.filter');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont.on('click', function() {
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



$(document).ready(function() {
 

  gallery();

});
