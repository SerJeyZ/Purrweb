import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {

	$('#header-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	//----scroll find-more -------//
	$("#find-more").on("click", "a", function (event) {
		event.preventDefault();
		const id = $(this).attr('href'),
					top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});

});

