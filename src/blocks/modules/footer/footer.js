function isIE() {
	const ua = navigator.userAgent;
	const is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1; return is_ie;
}
if (isIE()) {
	$(".twitter-widget__content a").removeClass("twitter-timeline");
	$(".twitter-widget__content ").addClass("ie");
	$('.twitter-widget__content').text("Your browser does not support the display of the Twitter feed. Please try another browser.");
}