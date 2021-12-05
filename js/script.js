$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 300,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        draggable: false,

    });
})