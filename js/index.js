$( document ).ready(function() {
	$(".scroll").on('click', function(){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},'fast');
	});

	var navoffeset=$(".top-nav").offset().top;
	 $(window).scroll(function(){
		var scrollpos=$(window).scrollTop(); 
		if(scrollpos >=navoffeset){
			$(".top-nav").addClass("fixed");
		}else{
			$(".top-nav").removeClass("fixed");
		}
	 });

	$(function() {
		var menu_ul = $('.faq > li > ul'),
   		menu_a  = $('.faq > li > a');
		menu_ul.hide();
		
		menu_a.click(function(e) {
		e.preventDefault();
			if(!$(this).hasClass('active')) {
				menu_a.removeClass('active');
				menu_ul.filter(':visible').slideUp('normal');
		$(this).addClass('active').next().stop(true,true).slideDown('normal');
			} else {
				$(this).removeClass('active');
				$(this).next().stop(true,true).slideUp('normal');
			}
		});
});

});