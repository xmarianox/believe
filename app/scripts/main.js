/* jshint smarttabs:true */
/* global $ */

$(document).ready(() => {
	'use strict';

	/**
	*  Menu
	*/
	$('.btn_lines').click(event => {
		event.preventDefault();
		$(event.currentTarget).toggleClass('close');
		//$('menu').toggleClass('visible');
	});


	$('.gallery').slick();


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