$(window).scroll(function(){
	if($(document).scrollTop()>60)
		$('.nav-container').addClass('shrink');
	else
		$('.nav-container').removeClass('shrink');
});

$(window).resize(function(){
	if($(window).width() < 960)
		$('.nav-container').addClass('shrink');
	else
		$('.nav-container').removeClass('shrink');
});

$('.burger-nav').on('click', function(){
	$('header nav').toggleClass('nav-open');
});

function initMap() {
  var uluru = {lat: 43.648264, lng: -79.397859};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}