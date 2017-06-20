//Адаптация меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
  });
	$('.nav ul li').click(function() {
		$('nav ul').slideToggle(500);
  });

	$(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		}
	});
});


//фиксированние меню
jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>140){
			$('.nav').addClass('fixed');
		}
		else if ($(this).scrollTop()<140){
			$('.nav').removeClass('fixed');
		}
	});
});


/*Плавный переход по якорям*/
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
   e.preventDefault();
   
   var target = this.hash,
   $target = $(target);
   
   $('html, body').stop().animate({
       'scrollTop': $target.offset().top
   }, 1000, 'swing', function () {
       window.location.hash = target;
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



//скрипт всплытия картинки плюсика при ховере 
$(document).ready(function(){
    $('.team__content-item').hover(
        function(){ 
            $(this).find('.team__content-item-block-plus').toggleClass('visible');
        }
    );
});

   


//подсвечивание заголовка блока и кнопки "Buy now" по наведению ТОЛЬКО лишь на кнопку buy now. а не на весь блок.
$(document).ready(function(){
  $('.offer__content-item').on('mouseover', 'button', function(e){
    e.preventDefault();
    $(this).closest('form').find('h3').addClass('main__active');
    $(this).closest('form').find('button').addClass('main__active');
  });
});
$(document).ready(function(){
  $('.offer__content-item').on('mouseout', 'button', function(e){
    e.preventDefault();
    $(this).closest('form').find('h3').removeClass('main__active');
    $(this).closest('form').find('button').removeClass('main__active');
  });
});



//Валидация на более длинный комментарий
function validateComments(input) {
       if (input.value.length < 3) {
          input.setCustomValidity("Дайте более развернутый ответ.");   
       }
       else {
          // Длина комментария отвечает требованию, 
          // поэтому очищаем сообщение об ошибке
          input.setCustomValidity("");
       }
}