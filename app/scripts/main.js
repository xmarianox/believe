/* jshint smarttabs:true */
/* global $, MobileDetect */

var isMobile;

const setSlick = (element) => {
	'use strict';

	if (!isMobile.phone()) {
		if (isMobile.tablet()) {
			if (window.innerWidth > 800) {
				$(element).slick({
					infinite: false,
		  			slidesToShow: 3,
		  			slidesToScroll: 3
				});
			}
		} else {
			$(element).slick({
				infinite: false,
	  			slidesToShow: 4,
	  			slidesToScroll: 4
			});
		}
	}
};

const navigation = (type, prevView, nextView, position) => {
	'use strict';

	if (type === 'back') {
		nextView.hide();
		prevView.show();
		$('.steps li').removeClass('active');
		$(position).addClass('active');
		$('html,body').scrollTop(0);
	} else {
		prevView.hide();
		nextView.show();
		$('.steps li').removeClass('active');
		$(position).addClass('active');
		$('html,body').scrollTop(0);
	}
};

const roomingView = (prevStep, currentStep, nextStep, list) => {
	'use strict';

	prevStep.hide();
	currentStep.show();

	$('.steps li').removeClass('active');
	//console.log(stepsList);
	$(list[0]).addClass('active');

	$('.gallery').slick();

	setSlick('.room_list');

	$('.back').click(event => {
		event.preventDefault();
		navigation('back', prevStep, currentStep, list[5]);
	});

	$('.next').click(event => {
		event.preventDefault();
		navigation('next', currentStep, nextStep, list[1]);
	});
};

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
	let stepsList = $('.steps ol').children();

	// set initial state;
	step0.show();

	//currentSelectionBar.hide();
	step1.hide();
	step2.hide();
	step3.hide();
	step4.hide();
	step5.hide();

	$('#form_start_calculator').submit((event) => {
		event.preventDefault();
		roomingView(step0, step1, step2, stepsList);
	});

};

$(document).ready(() => {
	'use strict';

	isMobile = new MobileDetect(window.navigator.userAgent);

	initApp();

	/**
	*  Menu
	*/
	$('.btn_lines').click(event => {
		event.preventDefault();
		$(event.currentTarget).toggleClass('close');
		//$('menu').toggleClass('visible');
	});

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