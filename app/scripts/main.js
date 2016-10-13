/* jshint smarttabs:true */
/* global $ */

$(document).ready(() => {
	'use strict';

	console.log('\'Allo \'Allo!');

	/**
	*  Menu
	*/
	$('.btn_lines').click(event => {
		event.preventDefault();
		$(event.currentTarget).toggleClass('close');
		//$('menu').toggleClass('visible');
	});

});