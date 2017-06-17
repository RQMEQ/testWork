//Адаптация меню
$(document).ready(function() {
	$('.menu-trigger').click(function() {
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




/*var planHover = (function() {

	var basic = document.querySelector(".offer__content-item-basic");
	var buy = document.querySelector(".offer__content-item-bbasic");

	buy.addEventListener("mouseenter",
		function () {
			buy.style.backgroundColor = "#49cbcd";
			basic.style.backgroundColor = "#49cbcd";
		});

	buy.addEventListener("mouseleave",
		function () {
			buy.style.backgroundColor = "#788492";
			basic.style.backgroundColor = "#485460";
		});

})();*/







$('.offer__content-item-bbasic').hover(
    function(){
        $('.offer__content-item-basic').css('background-color','#49cbcd');
    },
    function(){
        $('.offer__content-item-basic').css('background-color','#485460');
    }
);

$('.offer__content-item-bpro').hover(
    function(){
        $('.offer__content-item-pro').css('background-color','#49cbcd');
    },
    function(){
        $('.offer__content-item-pro').css('background-color','#485460');
    }
);

$('.offer__content-item-bprem').hover(
    function(){
        $('.offer__content-item-premium').css('background-color','#49cbcd');
    },
    function(){
        $('.offer__content-item-premium').css('background-color','#485460');
    }
);




