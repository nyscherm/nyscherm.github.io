$(document).ready(function() {

	$('nav a').click(function() {
		console.log(this);
		var target = $(this).attr('href').replace('#','');
		console.log(target);
		$('body,html').animate({
			scrollTop: $('div[id='+target+']').offset().top - 95
		}, 300);
	});	
});	