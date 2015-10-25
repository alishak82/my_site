$(document).ready(function() {
	$("nav a").click(function() {
		var href = $(this).attr("href");
		$.scrollTo(href, 700);
	})
})