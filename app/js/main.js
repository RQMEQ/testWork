//Адаптация меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
  });//end slide toggle

	$(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		}
	});//end resize
});//end ready

//фиксированние меню
jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>140){
			$('#nav').addClass('fixed');
		}
		else if ($(this).scrollTop()<140){
			$('#nav').removeClass('fixed');
		}
	});
});



//слайдер
var btn_prev = document.querySelector('.slider__buttons-prev');
var btn_next = document.querySelector('.slider__buttons-next');

var images = document.querySelectorAll('.slider__photos-item');
var i = 0;

btn_prev.onclick = function(){
     images[i].style.display = 'none';
     i--; 
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].style.display = 'block';
}

btn_next.onclick = function(){
     images[i].style.display = 'none';
     i++; 
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].style.display = 'block';
}
