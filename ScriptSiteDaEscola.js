
// Inicialização
$(document).ready(function () {

    var valores = new Vue({
        el: '#valores',
        data: {
            valores: [
                { id: "1", titulo: "Ensino de Qualidade", icone: "check_circle", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." },
                { id: "2", titulo: "Entre as melhores", icone: "assessment", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." },
                { id: "3", titulo: "Projetos Extra Curricular", icone: "supervisor_account", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus..." }

            ]
        }
    });


    var ano1A = {
        nome: "1°Ano A",
        materias: [
            { id: "2", materia: "Português", link: "http://xxxx" },
            { id: "3", materia: "Matemática", link: "http://xxxx" },
            { id: "4", materia: "Ciências", link: "http://xxxx" },
            { id: "5", materia: "História", link: "http://xxxx" },
            { id: "6", materia: "Geografia", link: "http://xxxx" },
            { id: "7", materia: "Inglês", link: "http://xxxx" },
            { id: "8", materia: "Arte", link: "http://xxxx" },
            { id: "9", materia: "Educação Fisíca", link: "http://xxxx" },
            { id: "10", materia: "Enriquecimento Curricular", link: "http://xxxx" }
        ]
    };

    var ano1B = {
        nome: "1°Ano B",
        materias: [
            { id: "2", materia: "Português", link: "http://xxxx" },
            { id: "3", materia: "Matemática", link: "http://xxxx" },
            { id: "4", materia: "Ciências", link: "http://xxxx" },
            { id: "5", materia: "História", link: "http://xxxx" },
            { id: "6", materia: "Geografia", link: "http://xxxx" },
            { id: "7", materia: "Inglês", link: "http://xxxx" },
            { id: "8", materia: "Arte", link: "http://xxxx" },
            { id: "9", materia: "Educação Fisíca", link: "http://xxxx" },
            { id: "10", materia: "Enriquecimento Curricular", link: "http://xxxx" }
        ]
    };

    var ano1C = {
        nome: "1°Ano C",
        materias: [
            { id: "2", materia: "Português", link: "http://xxxx" },
            { id: "3", materia: "Matemática", link: "http://xxxx" },
            { id: "4", materia: "Ciências", link: "http://xxxx" },
            { id: "5", materia: "História", link: "http://xxxx" },
            { id: "6", materia: "Geografia", link: "http://xxxx" },
            { id: "7", materia: "Inglês", link: "http://xxxx" },
            { id: "8", materia: "Arte", link: "http://xxxx" },
            { id: "9", materia: "Educação Fisíca", link: "http://xxxx" },
            { id: "10", materia: "Enriquecimento Curricular", link: "http://xxxx" }
        ]
    };

    var series = new Vue({
        el: '#seriesXXXX',
        data: {
            series: [
                ano1A,
                ano1B,
                ano1C
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
    $(".hide-menu").click(function () {
        $(".sidenav").sidenav("close");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar").addClass("nav-color");
        }
    });

    $('.AlturaCerta').matchHeight();

});