$(document).ready(function() {
  var imgPopup = $('.img-popup');
  var imgCont  = $('.filter');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
  imgCont.on('click', function() {
	  console.log('Hi');
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
