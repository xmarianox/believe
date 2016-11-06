/* jshint smarttabs:true */
/* global $ */

const setSlick = () => {
	'use strict';

	if (window.innerWidth >= 900) {
		$('.room_list').slick({
			infinite: false,
  			slidesToShow: 3,
  			slidesToScroll: 3
		});
	} else if (window.innerWidth >= 1050) {
		$('.room_list').slick({
			infinite: false,
  			slidesToShow: 4,
  			slidesToScroll: 4
		});
	}
}


const initApp = () => {
	'use strict';

	// steps views
	let step0 = $('.welcome');
	let step1 = $('.rooming');
	let step2 = $('.meals');
	let step3 = $('.surf_yoga');
	let step4 = $('.transportation');
	let step5 = $('.resume');
	//let currentSelectionBar = $('#current_selection');

	// set initial state;
	step0.show();

	//currentSelectionBar.hide();
	step1.hide();
	step2.hide();
	step3.hide();
	step4.hide();
	step5.hide();
}



$(document).ready(() => {
	'use strict';

	initApp();

	/**
	*  Menu
	*/
	$('.btn_lines').click(event => {
		event.preventDefault();
		$(event.currentTarget).toggleClass('close');
		//$('menu').toggleClass('visible');
	});

	$('.gallery').slick();

	if ($('.rooming').is(':visible')) {
		// set initial slick
		setSlick();
		// on resize listener
		$(window).resize(setSlick);
	}

	$('.open_modal').click(event => {
		event.preventDefault();
		let currentItem = $(event.currentTarget).attr('href');
		console.log(currentItem);
		$(`${currentItem}`).addClass('visible');
	});

	$('.btn_close_modal').click(event => {
		event.preventDefault();
		$('.modal').removeClass('visible');
	});

});