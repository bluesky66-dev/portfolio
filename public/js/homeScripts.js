// SEND PAGE BACK TO TOP ON REFRESH
$(window).load(function() {
	window.onbeforeunload = function() {window.scrollTo(0,0);}
});



//  Button Page Load Delay

/// DESKTOP ////
// About Text Opacity on Scroll

$(window).load(function() {

	$(document).scroll(function(e){
		var textTarget = $('.aboutUs');
		var targetHeight = textTarget.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      textTarget.css('opacity', scrollPercent);
	    }
	  };
	});

// DH Nav Text Opacity on Scroll



	$(document).scroll(function(e){
		var navTarget = $('#dh-target');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();		
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      navTarget.css('opacity', scrollPercent);
	    }
	  };
	});


// Arrow Opacity on Scroll
	/*$(document).scroll(function(e){
		var a = $('.index-arrow');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
	    if(scrollPercent >= 0){
	      a.css('opacity', scrollPercent);
	    }
	  };
	});


// Background Opacity on Scroll

	$(document).scroll(function(e){
		var bg = $('.bg-color-overlay');
		var target = $('.aboutUs')
		var targetHeight = target.outerHeight();
		if ($(window).width() >= 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      bg.css('opacity', scrollPercent);
	    }
	  };
	});



/// MOBILE ////

// Arrow Opacity on Scroll

	/*$(document).scroll(function(e){
		var a = $('.index-arrow');
		var target = $('#heightRowMob');
		var targetHeight = target.outerHeight();
		if ($(window).width() < 768) { 
	    var scrollPercent = ( targetHeight - window.scrollY ) / targetHeight;
	    if(scrollPercent >= 0){
	      a.css('opacity', scrollPercent);
	    }
	  };
	});


// Background Opacity on Scroll

	/*$(document).scroll(function(e){
		var bg = $('.bg-color-overlay');
		var target = $('#heightRowMob');
		var scrollTop = $(this).scrollTop();
		var targetHeight = target.outerHeight();
		if ($(window).width() < 768) { 
	    var scrollPercent = ( 1 - ( targetHeight - window.scrollY ) / targetHeight);
	    if(scrollPercent >= 0){
	      bg.css('opacity', scrollPercent);
	    }
	  };
	});*/





});

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	$('.bg-color-overlay').css({
	  opacity: function() {
	    var elementHeight = $(this).height();
	    var range = ($('#heightRow').height() - elementHeight );
	        opacity = ( scrollTop / range );

	    return opacity;
	  }
	});
	$('.index-arrow').css({
	  opacity: function() {
	    var elementHeight = $(this).height(),
	        opacity = ((elementHeight - scrollTop) / elementHeight);

	    return opacity;
	  }
	});
});


// Mobile button color change on 'active'

$( document ).ready(function() {
  var menuBtn = document.getElementById('landingMobile');

  if ($(window).width() < 768) { 
  	if(menuBtn) {
  		menuBtn.addEventListener('click', function() {
  			if ($('#landing-mobile-menu').hasClass('open')) {
  				$('#landingMobile').addClass('active')
  			} else {
  				$('#landingMobile').removeClass('active')
  			}
		  }, false);
	  }
  } 
});










