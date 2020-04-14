$(function() {
	var controller = new ScrollMagic.Controller();

	$(".parallax").each(function() {

		var parallax = TweenMax.to($(this).find(".parallax-title"), 1, {
			y: '0'
		});

		var parallaxImage = TweenMax.to($(this).find(".parallax-image-container"), 1, {
			y: '10%'
		});

		var parallaxImage = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 1,
				duration: '200%'
			})
			.setTween(parallaxImage)
			.addTo(controller);
	});
});