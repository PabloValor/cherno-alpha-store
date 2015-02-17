$(document).on("ready", function () {
	
	//Initialize slider 
	$('.bxslider').bxSlider({
		autoHover: true,
		mode: 'horizontal',
		infiniteLoop: true,
		auto: true,
		captions: true,
	   	slideWidth: 1024
		});

	$('#tab-container').easytabs(); //initialize tabs section (ofertas)

	$('.up').on('click', goUp);

	function goUp(event) {
	  	event.preventDefault();
	  	$("body, html").animate(
	  		{ scrollTop: 0},
	  		500
	  		);
	};

	//Initialize popups from Ofertas section
	$('.test-popup-link').magnificPopup(
		{ 
			type: 'image'
		}

	);

	// go to top page animation
	$('menu ul').on('click', 'a', function(e) {       
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });

});
