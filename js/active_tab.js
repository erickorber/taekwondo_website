if (currentPage == "home") {
	removeActiveClass();
	$('#home-tab').addClass('active-tab');
}
if (currentPage == "about") {
	removeActiveClass();
	$('#about-tab').addClass('active-tab');
}
if (currentPage == "location") {
	removeActiveClass();
	$('#location-tab').addClass('active-tab');
}
if (currentPage == "schedule") {
	removeActiveClass();
	$('#schedule-tab').addClass('active-tab');
}
if (currentPage == "benefits") {
	removeActiveClass();
	$('#benefits-tab').addClass('active-tab');
}
if (currentPage == "contact") {
	removeActiveClass();
	$('#contact-tab').addClass('active-tab');
}
if (currentPage == "join") {
	removeActiveClass();
	$('#join-tab').addClass('active-tab');
}

function removeActiveClass() {
	if ( $('#home-tab').hasClass('active-tab') ) {
		$('#home-tab').removeClass('active-tab');
	}
	if ( $('#about-tab').hasClass('active-tab') ) {
		$('#about-tab').removeClass('active-tab');
	}
	if ( $('#location-tab').hasClass('active-tab') ) {
		$('#location-tab').removeClass('active-tab');
	}
	if ( $('#schedule-tab').hasClass('active-tab') ) {
		$('#schedule-tab').removeClass('active-tab');
	}
	if ( $('#benefits-tab').hasClass('active-tab') ) {
		$('#benefits-tab').removeClass('active-tab');
	}
	if ( $('#contact-tab').hasClass('active-tab') ) {
		$('#contact-tab').removeClass('active-tab');
	}
	if ( $('#join-tab').hasClass('active-tab') ) {
		$('#join-tab').removeClass('active-tab');
	}
}