window.onload = () => {

	@@include('../components/header/header.js')

	$('.js-slider').slick({
		arrows: false,
		dots: true,
		infinite: false
	});

}
