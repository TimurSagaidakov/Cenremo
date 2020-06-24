$(document).ready(function(){
    $('.slider-wrap').slick({
        dots: true,
        dotsClass: 'dots',
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
    });
    
});
$(document).ready(function(){
$('.repair-without-block__example').on('click', function(){
    $('.slider').toggleClass('slider__active');
    $('.repair-form').removeClass('repair-form-active');
});
$('.slider-close').on('click', function(){
    $('.slider').removeClass('slider__active');
});
$('.repair-without-block__price').on('click', function(){
    $('.repair-form').toggleClass('repair-form-active');
    $('.slider').removeClass('slider__active');
});
$('.repair-form-close').on('click', function(){
    $('.repair-form').removeClass('repair-form-active');
    });
});

$(document).ready(function(){
    $('.slider2-wrap2').slick({
        dots: true,
        dotsClass: 'dots2',
        prevArrow: $('.left-arrow2'),
        nextArrow: $('.right-arrow2')
    });
    
});
$(document).ready(function(){
$('.repair-without-block__example2').on('click', function(){
    $('.slider2').toggleClass('slider2__active2');
    $('.repair-form2').removeClass('repair-form2-active2');
});
$('.slider2-close2').on('click', function(){
    $('.slider2').removeClass('slider2__active2');
});
$('.repair-without-block__price2').on('click', function(){
    $('.repair-form2').toggleClass('repair-form2-active2');
    $('.slider2').removeClass('slider2__active2');
});
$('.repair-form2-close2').on('click', function(){
    $('.repair-form2').removeClass('repair-form2-active2');
    });
});

$(document).ready(function () {
    $('.modal-progressbar').progressbar({
        value: 62
    });
    $('.modal-point-list :checkbox').change(function(){
        var chcheckbox = $('.modal-point-list :checkbox:checked').size()* 4.761;
        $('.modal-progressbar').progressbar({
            value: chcheckbox
            
        });
        var percent = chcheckbox.toFixed();
        var progressbarText = $('.modal-point-list div[id*=checkbox]').size();
            $('.modal-progressbar__complete').text('Выполнено : ' + percent + ' %');
    });
        
        $('.modal-point-list').load(function() {
            var chcheckbox = $('.opros :checkbox:checked').size() * 4.761;
            $(".modal-progressbar").progressbar({
                value: chcheckbox
                
            });
            var percent = chcheckbox.toFixed();

            var progressbarText = $('.modal-point-list div[id*=checkbox]').size();
            $('.modal-progressbar__complete').text('Выполнено : ' + percent + ' %');
        });
        


});
$(document).ready(function(){
    $('.finish-block-head__button').on('click', function(){
        $('.modal').addClass('modal-active');
    });
    $('.modal__close').on('click', function(){
        $('.modal').removeClass('modal-active');
    });
    $('.show__button').on('click', function(){
        $('.finish-blocks').animate({
            height: "1500px"
        }, 500, "linear");
        $("html, .finish-blocks").animate({ scrollTop: +6450 +"px"},500);
        $('.hide').addClass('hide-active');
        $('.show').addClass('show-passive');
    });
    $('.hide__button').on('click', function(){
        $('.finish-blocks').animate({
            height: "750px"
        }, 500, "linear");
        $('.hide').removeClass('hide-active');
        $('.show').removeClass('show-passive');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px"}, 1000);
        return false;
    });
});

