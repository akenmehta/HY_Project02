// add nav bar when window resizes
$(window).resize(function(){
	if($(window).width() < 960)
		$('.nav-container').addClass('shrink');
});

// add/remove nav bar based on scroll and window size
$(window).scroll(function(){
	if($(document).scrollTop()>60)
		$('.nav-container').addClass('shrink');
	else if($(window).width() > 960)
		$('.nav-container').removeClass('shrink');

	$('header nav').removeClass('nav-open');
});

$('.burger-nav').on('click', function(){
	$('header nav').toggleClass('nav-open');
});

// google maps code
function initMap() {
    var uluru = {lat: 43.648, lng: -79.397};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
initMap();
