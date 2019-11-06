window.onload = () => {

	@@include('../components/header/header.js')

	$('.js-slider').slick({
		arrows: false,
		dots: true,
		infinite: false
	});

	$(".drop__text").click(function(){
		$(this).parents(".drop").addClass("drop--open");
	});
	$(".drop__item").click(function(){
		$(this).parents(".drop").find(".drop__text").html($(this).html());
		$(this).parents(".drop").find("input").val($(this).text());
		$(this).parents(".drop").removeClass("drop--open");
	});

}
