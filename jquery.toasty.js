/*
 * Toasty v0.1.2
 * Show Dan Forden's Toasty from Mortal Kombat as an Easter Egg for your website
 * (c)2014 Ruben Torres - rubentdlh@gmail.com
 * Released under the MIT license
 */

 (function($) {

 	//singleton
 	var singleToasty;

 	function Toasty(elem, options){
 		this.options=options;
 	}

 	Toasty.prototype = {

 		//initialize including neccesary elements in DOM
 		init: function(){
 			//Add to dom needed elements
 			$("body").append('<div id="toasty-guy-dan"><img src="'+ this.options.image +'" alt="toasty"></div>');
			$('#toasty-guy-dan').css('position', 'fixed');
			$('#toasty-guy-dan').css('right', '-170px');
			$('#toasty-guy-dan').css('bottom', '0px');
			if(this.options.sound){
				$("body").append('<audio id="toasty-audio"><source src="'+ this.options.sound +'" type="audio/mpeg"></source></audio>');
 			}
 		},

 		pop: function(){
 			var audio = document.getElementById('toasty-audio');
			audio.play();
			$("#toasty-guy-dan").addClass("show-dan");
			setTimeout( function(){ $("#toasty-guy-dan").removeClass("show-dan"); }, 1000);
 		}

 	}

 	$.fn.toasty = function(options) {

 		this.each(function(){
			// Check if we should operate with some method
			if (/^(pop)$/i.test(options)) {
				// Normalize method's name
				options = options.toLowerCase();
				switch(options){
					case 'pop':
						singleToasty.pop();
						break;
				}
			}else if (typeof options == 'object' || !options) {
				options = $.extend({}, $.fn.toasty.defaults, options);
				if(!singleToasty){
					singleToasty = new Toasty($(this), options);
					singleToasty.init();
				}
			}
 		});

	}

	$.fn.toasty.defaults = {
 		sound: true,
 		image: 'toasty.png',
 		sound: 'toasty.mp3'
 	};

})(jQuery);
