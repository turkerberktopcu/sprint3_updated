$(document).ready(function() {
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        fade: true
    });
    
    if ($('#tabs').length) {
        $('#tabs').tabs();
    }
});