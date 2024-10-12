$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.header__right').toggleClass('active');
    })

    $('.destination-item__plus').click(function(){
        $(this).parent().parent().find('.destination-item__content').slideToggle();
        // $(this).parent().toggleClass('active');
    })



    $('.itinerary-item .destination-item__header').click(function(){
        $(this).parent().find('.destination-item__content').slideToggle();
        $(this).toggleClass('active');
    })
    
    $('.modal-window').on('click', function(e) {
      if ($(e.target).closest('.modal-window__content').length === 0) {
          $(this).fadeOut();
      }
  });




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
$(function(){
$('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    pauseOnHover: false,
    fade: true
});

$('.multu-slider').slick({
    slidesToShow: 4,
    nextArrow: $('.multu-next'),
    prevArrow: $('.multu-prev'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
});
});
//end slider
if($(window).width() < 992) {

        $('.menu > ul > li > a').on('click', function(event) {
          event.preventDefault(); 
          $(this).siblings('.sub-menu').toggleClass('active');
         $('.sub-menu-item').toggleClass('active');
        });
  
      
}