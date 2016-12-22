;(function($) {

	$(function() {

		$('.intro-slider').slick({
			'slidesToShow': 3,
			'speed': 1000,
			'slide': '.intro-slider__item',
			'centerMode': true,
			'infinite': true,
			'centerPadding': '100px',
			'autoplay': true,
			'autoplaySpeed': 2000,
			'prevArrow': '.slider-arrow--prev',
			'nextArrow': '.slider-arrow--next'
		}); // end slick

		/*$('.intro-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.intro-slider .intro-slider__item').addClass('slide-hover');
		}); //end beforeChange 
	
		$('.intro-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.intro-slider .intro-slider__item').removeClass('slide-hover');
		}); //end afterChange */
		
	}); // end ready

})(jQuery);