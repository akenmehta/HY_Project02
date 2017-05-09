$(window).scroll(function(){
	if($(document).scrollTop()>60)
		$('.nav-container').addClass('shrink');
	else
		$('.nav-container').removeClass('shrink');
});

$(window).resize(function(){
	if($(window).width() < 935)
		$('.nav-container').addClass('shrink');
	else
		$('.nav-container').removeClass('shrink');
});