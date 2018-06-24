$(document).ready(function() {



	$('form').ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
			yaCounter39241065.reachGoal('call');
		}
	});

	$("#toTop").scrollToTop();

	$(".main__slider").slick({
		autoplay: true,
		autoplaySpeed: 7000,
		fade: true,
		speed: 1500,
		draggable: false,
		swipe: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				appendArrows: ".main__slider-arrow"
			}
		}]
	});

	$(".client__items").slick({
		autoplay: true,
		autoplaySpeed: 4000,
		draggable: false,
		swipe: false,
		slidesToShow: 5,
		appendArrows: ".client__arrows",
		responsive: [{
			breakpoint: 1200,
			settings: {
				appendArrows: ".client__items"
			}
		}]
	});

	$(".main__slider").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var $nextSlide = $(slick.$slides[nextSlide]);

			$bg = $(".main__bg").css("display", "none");
			$bg.css("background-image", "url(" + $nextSlide.find('.main__slide').data("bg-url") + ")");
			$bg.fadeIn(1500);
	});


	$(".certificate__slider").slick({
		slidesToShow: 3,
		variableWidth: true,
		centerMode: true,
		appendArrows: ".certificate__slider-wrap",
		responsive: [{
			breakpoint: 1200,
			settings: {
				appendArrows: ".certificate__slider-arrow"
			}
		}]
	});

	$(".certificate__slider").on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$( window ).scroll();
	});

	$(".reviews__slider").slick({
		fade: true
	})

	$(".fancy").fancybox({
		padding: 0
	});

	// jQuery.scrollSpeed(100, 800);
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});

	$(".input--phone").mask("+7 (999) 999-99-99");
});

$(window).on("load", function () {
	// if(!isMobile.any) {
		new WOW().init();
	// }
});

(function($) {
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}

		var scrollDiv=$(this);
		$(window).scroll(function(){

			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else{
				$(scrollDiv).fadeIn("slow")
			}
		});

		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow")
		})
	}
})(jQuery);
