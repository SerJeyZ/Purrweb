$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger').toggleClass('burger__active');
		$('.page-navigation').toggleClass('page-navigation__active');
		$('body').toggleClass('lock');
	})
	$(window).resize(function (event) {
		if(event.target.innerWidth > 767) {
			$('.burger').removeClass('burger__active');
			$('.page-navigation').removeClass('page-navigation__active');
			$('body').removeClass('lock');
		}
	});
});