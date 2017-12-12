new WOW().init();


$(function() {

    function close() {
        $('body').removeClass('has-active-menu');
        setTimeout(function(){
            $('.nav-slider').removeClass('toggling');
        }, 500);
    }

    function open() {
        $('body').addClass('has-active-menu');
        $('.nav-slider').addClass('toggling');
    }

    $('.nav-mask').click(close);
    $('.navbar-toggler').click(open);
});


var vids = document.getElementsByClassName('feature-video'); 

window.onscroll = autoplay;

function autoplay(){
    for (var i = vids.length - 1; i >= 0; i--) {
        var currentYpos = window.pageYOffset || document.documentElement.scrollTop;
		if ( currentYpos >= vids[i].offsetTop && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight ) {
			//vids[i].pause();
		}else{
			vids[i].play();
		}
	}
}

