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
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
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
if($(window).width() < 992) {

        $('.menu > ul > li > a').on('click', function(event) {
          event.preventDefault(); 
          $(this).siblings('.sub-menu').toggleClass('active');
         $('.sub-menu-item').toggleClass('active');
        });
  
      
}