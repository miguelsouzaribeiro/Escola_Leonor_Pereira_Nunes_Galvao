
// Inicialização
$(document).ready(function() {

    var valores = new Vue({
        el: '#valores',
        data: {
          valores: [
            { id: "1", titulo: "Ensino de Qualidade", icone: "check_circle", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." },
            { id: "2", titulo: "Entre as melhores", icone: "assessment", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." },
            { id: "3", titulo: "Projetos Extra Curricular", icone: "supervisor_account", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." }

        ]
        }
      })

    var banners = new Vue({
        el: '#banners-col',
        data: {
            banners: [
                { id: "1", imagem: "img/Banner01.jpeg", descricao: 'alt="Imagem intitucional"' },
                { id: "2", imagem: "img/Banner02.jpeg", descricao: 'alt="Imagem intitucional"' },
                { id: "3", imagem: "img/Banner03.jpeg", descricao: 'alt="Imagem intitucional"' }
    
            ]
        }

      })

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