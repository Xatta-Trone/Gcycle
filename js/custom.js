$(document).ready(function(){
	//scroll to top
	 $(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);   // Fade in the arrow
	        $("#sticker").addClass("lightheader");
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	        $("#sticker").removeClass("lightheader");
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	
	// owl carousel

	$(".testimonial-slides").owlCarousel({
		items: 1,
		margin:30,
		autoplay:false,
		autoplayTimeout:2500,
        loop:true,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
	});

	//counter 

	$('.counter').counterUp({
                delay: 10,
                time: 1500
    });

	// value area show
    $(".getPrice").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".phone-value-details").slideDown(700);
		return false;
	});

	$("#editprofile").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(".profile-edit-area").slideDown(700);
		return false;
	});
});


document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 20,
    startDelay: 1000,
    loop: true,
    loopCount: Infinity,
    onComplete: function(self) { prettyLog('onComplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });

  
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}

