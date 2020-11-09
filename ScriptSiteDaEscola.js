
// Inicialização
$(document).ready(function() {
    // Menu Mobile
    $(".sidenav").sidenav();
    // Link Interno
    $(".scrollSpy").scrollSpy({
        scrollOffset: 0
    });
    // Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    // Modal
    $('.modal').modal();
    // Tabs
    $('.tabs').tabs();
    // Esconder Menu ao clicar
    $(".hide-menu").click(function() {
        $(".sidenav").sidenav("close");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".navbar").addClass("nav-color");
        }
    });

    $('.AlturaCerta').matchHeight();

});