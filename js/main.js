$(function(){
    var windowHeight = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeight - (upperH+navH));
})