(function ( $ ) {
	
	$.fn.popupmenu = function (whattopop, inSpeed, outSpeed, delayTime) {
		$(this)
		.mouseenter(function(){
			$(whattopop).fadeIn(inSpeed);
		})
		.mouseleave(function(){
			$(whattopop)
				.delay(delayTime)
				.fadeOut(outSpeed);
			$(whattopop)
				.mouseenter(function(){
					$(this).clearQueue();
				});
		});
	};
	
}(jQuery));
