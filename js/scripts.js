// события при загрузке DOM

$(function() {

	$('.h-btn').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('menu-open');
	});


	$('.testimonials-slider').slick({
		fade: true,
		speed: 800,
		dots: true,
		arrows: false
	});


	$('.menu__link').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('menu-open');
	});

});


$(window).on('load', function () {
	$('.loader').addClass('loader-hide');
});


// события при скролле

// $(window).on('scroll', function() {

// 	if ($(this).scrollTop() > 10) {
// 		$('.header').addClass('header_scroll');
// 	} else {
// 		$('.header').removeClass('header_scroll');
// 	}

// });