// Change navbar style on scroll
window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
$(document).ready(function(){
    $('.slider_new').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        adaptiveHeight: true,
    });
});


