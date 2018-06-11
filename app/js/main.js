$(function() {
	var topNavBtn = $('#js-top-nav-btn'),
		topNav = $('.top-nav');
	$(topNavBtn).on('click', function(){
		$(topNav).slideToggle();
	});

	var mainSlider = $('#js-main-slider');
	$(mainSlider).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

	/*var teamSlider = $('.team-slider');
	$(teamSlider).slick({
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 1920,
				settings: "unslick"
			}
		]
	})*/

	var galleryShowBtn = $('#js-show-more'),
		galleryItems = $('.portfolio-gallery-item'),
		galleryItemsToShow = 6;
	$(galleryShowBtn).on('click', function(){
		$(galleryItems).slice(galleryItemsToShow,galleryItemsToShow+=3).css('display', 'block');
		if(galleryItemsToShow == galleryItems.length) {
			$(this).css('display', 'none');
		}
	});

	
});

