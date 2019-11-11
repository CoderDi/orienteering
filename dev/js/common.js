window.onload = () => {

	@@include('../components/header/header.js')

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.js-slider').slick({
		arrows: false,
		dots: true,
		infinite: false,
		autoHeight: true
	});

	$(".drop__text").click(function(){
		$(this).parents(".drop").addClass("drop--open");
	});
	$(".drop__item").click(function(){
		$(this).parents(".drop").find(".drop__text").html($(this).html());
		$(this).parents(".drop").find("input").val($(this).text());
		$(this).parents(".drop").removeClass("drop--open");
	});

	$(".butter").click(function(){
		$(".menu").addClass("menu--open");
	});
	$(".menu").click(function(){
		$(".menu").removeClass("menu--open");
	});

	$(".js-auth").click(function(){
		$(".popup").addClass("popup--open");
	});
	$(".popup-bg").click(function(){
		$(".popup").removeClass("popup--open");
	});

}
