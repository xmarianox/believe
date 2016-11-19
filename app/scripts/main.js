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

// const navigation = (type, prevView, nextView, position) => {
// 	'use strict';

// 	if (type === 'back') {
// 		nextView.hide();
// 		prevView.show();
// 		$('.steps li').removeClass('active');
// 		$(position).addClass('active');
// 		$('html,body').scrollTop(0);
// 	} else {
// 		prevView.hide();
// 		nextView.show();
// 		$('.steps li').removeClass('active');
// 		$(position).addClass('active');
// 		$('html,body').scrollTop(0);
// 	}
// };

// const roomingView = (prevStep, currentStep, nextStep, list) => {
// 	'use strict';

// 	prevStep.hide();
// 	currentStep.show();

// 	$('.steps li').removeClass('active');
// 	//console.log(stepsList);
// 	$(list[0]).addClass('active');

// 	$('.gallery').slick();

// 	setSlick('.room_list');

// 	$('.back').click(event => {
// 		event.preventDefault();
// 		navigation('back', prevStep, currentStep, list[5]);
// 	});

// 	$('.next').click(event => {
// 		event.preventDefault();
// 		navigation('next', currentStep, nextStep, list[1]);
// 	});
// };

const goToStep = (step) => {
	'use strict';

	var steps = [];
	// steps views
	steps[0] = $('.welcome');
	steps[1] = $('.rooming');
	steps[2] = $('.meals');
	steps[3] = $('.surf_yoga');
	steps[4] = $('.transportation');
	steps[5] = $('.resume');

	for(var s = 0; s <= 5; s++){
		if(s === step){
			steps[s].show();
		}
		else{
			steps[s].hide();
		}
	}

	$('.steps_active').text(step);

	if(step > 0){
		$('#current_selection').show();
		$('.main-container').removeClass('welcomeActive');
	}
	else{
		$('#current_selection').hide();
		$('.main-container').addClass('welcomeActive');
	}
	if (step === 1) {
		$('.gallery').slick();
		setSlick('.room_list');

		$('.room_list_item').click(function (event) {
			event.preventDefault();
			var currentItem = event.currentTarget;
			$('.room_list_item.active').removeClass('active');
			$(currentItem).addClass('active');
		});
		if (isMobile.phone()) {
			$('.btn_see_more').click(function (event) {
				event.preventDefault();
				var currentItem = $(event.currentTarget).attr('data-rel');
				$(currentItem).addClass('visible');
			});

			$('.btn_see_less').click(function (event) {
				event.preventDefault();
				$('.accordion').removeClass('visible');
			});
		} else {

			$('.rooming_modal .btn_close_modal').click(function (event) {
				event.preventDefault();
				$('.rooming_modal').removeClass('visible');
			});

			$('.btn_see_more').click(function (event) {
				event.preventDefault();
				$('.rooming_modal').addClass('visible');
				$('.gallery').slick('unslick');
				$('.gallery').slick();
			});
		}
	}
};

$(document).ready(() => {
	'use strict';

	isMobile = new MobileDetect(window.navigator.userAgent);

	goToStep(0);
	/**
	*  Menu
	*/
	$('.btn_lines').click(event => {
		event.preventDefault();
		$(event.currentTarget).toggleClass('close');
		//$('menu').toggleClass('visible');
	});

	$('.open_modal, .btn_tips').click(event => {
		event.preventDefault();
		let currentItem = $(event.currentTarget).attr('href');
		//console.log(currentItem);
		$(`${currentItem}`).addClass('visible');
	});

	$('.btn_close_modal').click(event => {
		event.preventDefault();
		$('.modal').removeClass('visible');
	});

});