$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.header__right').toggleClass('active');
    })


});

// ------start sticky header------

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    });
    
//-------end sticky header---

//start slider
$('.slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

$('.multu-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    nextArrow: $('.multu-next'),
    prevArrow: $('.multu-prev'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }
    ]
});

//end slider
  