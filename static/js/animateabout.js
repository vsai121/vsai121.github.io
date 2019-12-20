

$.fn.jQuerySimpleCounter = function( options ) {
	var settings = $.extend({
		start:  0,
		end:    100,
		easing: 'swing',
		duration: 400,
		complete: ''
	}, options );

	var thisElement = $(this);

	$({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};


$('#number1').jQuerySimpleCounter({end: 1961,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 1685,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359400, duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;

  $(id + " ." + sliceID).css({
    "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
  });

  $(id + " ." + sliceID + " span").css({
    "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
    "background-color": color
  });
}

function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var
    maxSize = 179,
    sliceID = "s" + dataCount + "-" + sliceCount;

  if( sliceSize <= maxSize ) {
    addSlice(id, sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(id, maxSize, pieElement, offset, sliceID, color);
    iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}

function createPie(id) {
  var
    listData      = [],
    listTotal     = 0,
    offset        = 0,
    i             = 0,
    pieElement    = id + " .pie-chart__pie"
    dataElement   = id + " .pie-chart__legend"

    color         = [
      "cornflowerblue",
      "olivedrab",
      "orange",
      "tomato",
      "crimson",
      "purple",
      "turquoise",
      "forestgreen",
      "navy"
    ];

  color = shuffle( color );

  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });

  for(i = 0; i < listData.length; i++) {
    listTotal += listData[i];
  }

  for(i=0; i < listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
    $(dataElement + " li:nth-child(" + (i + 1) + ")").css("border-color", color[i]);
    offset += size;
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function createPieCharts() {
  createPie('.pieID--micro-skills' );
  createPie('.pieID--categories' );
  createPie('.pieID--operations' );
}





$(document).ready(function() {
	createPieCharts();
});

