$(document).ready(function() {
	$("nav a").click(function() {
		var href = $(this).attr("href");
		$.scrollTo(href, 700);
	});

	$(".footer-nav a").click(function() {
		var href = $(this).attr("href");
		$.scrollTo(href, 700);
	});


	$('.projects li').mouseenter(function() {
		var descript = $(this).data('descript');
		var link = $(this).data('href');

		var html = '<div class="descript">';
				html +='<p style="font-size: 12px; font-family: Arial; color: black;" class="descript-text">' + descript + '</p>';
				html += '<center><a href="' + link + '">Click to Launch</a></center>';
				html += '</div>';

		$('.descript').remove();
		$(this).append(html).mouseleave(function() {
			$('.descript').remove();
		});
	})
});