
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


    var banners = new Vue({
        el: '#banners',
        data: {
            banners: [
                { titulo: "Sobre o Leonor", corpo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum soluta quibusdam consequatur.Odio magnam saepe minima, amet qui quibusdam quasi recusandae quidem ipsum ut quos et placeat minus architecto?" }
            ]
        }
    });

    var recados = new Vue({
        el: '#recados',
        data: {
            recados: [
                { titulo: "Recados", corpo: "Primeiro recado(um exemplo)" }
            ]
        }
    });

    var contatos = new Vue({
        el: '#contatos',
        data: {
            contatos: [
                { titulo: "Contatos", redessociais: "Redes sociais", redesocialcorpo: "Fique por dentro das novidades, receba dicas, ou simplesmente mostre ao mundo que você faz parte dessa escola sensacional!", endereco: "Endereço", enderecocorpo: "R. José Molina, 150 - Vila Industrial, São José dos Campos - SP, 12220-300", contato: "Contato", contatocorpo: "(12) 3929-1714" }
            ]
        }
    });

    var faleconosco = new Vue({
        el: '#faleconosco',
        data: {
            faleconosco: [
                { titulo: "Fale Conosco", corpo: "Dúvidas, criticas ou sujestões? Entre em Contatos conosco, seu feedback é muito importante." }
            ]
        }
    });

    var direitos = new Vue({
        el: '#direitos',
        data: {
            direitos: [
                { direitos: "© Miguel de Souza Ribeiro 2020 - Todos os direitos reservados" }
            ]
        }
    });

    new Vue({
        el: '#ano1',
        template: `
        <!-- 1°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/1Ano.png" alt="1°Ano" class="materialboxed">
                        <a href="#1Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            1°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 1°Ano -->
            <div class="modal" id="1Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        1°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        1°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        1°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano2',
        template: `
        <!-- 2°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/2Ano.png" alt="2°Ano" class="materialboxed">
                        <a href="#2Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            2°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 2°Ano -->
            <div class="modal" id="2Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        2°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        2°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        2°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano3',
        template: `
        <!-- 3°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/3Ano.png" alt="3°Ano" class="materialboxed">
                        <a href="#3Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            3°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 3°Ano -->
            <div class="modal" id="3Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        3°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        3°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        3°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano4',
        template: `
        <!-- 4°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/4Ano.png" alt="4°Ano" class="materialboxed">
                        <a href="#4Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            4°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 4°Ano -->
            <div class="modal" id="4Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        4°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        4°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        4°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano5',
        template: `
        <!-- 5°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/5Ano.png" alt="5°Ano" class="materialboxed">
                        <a href="#5Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            5°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 5°Ano -->
            <div class="modal" id="5Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        5°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        5°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        5°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano6',
        template: `
        <!-- 6°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/6Ano.png" alt="6°Ano" class="materialboxed">
                        <a href="#6Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            6°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 6°Ano -->
            <div class="modal" id="6Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        6°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        6°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        6°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano7',
        template: `
        <!-- 7°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/7Ano.png" alt="7°Ano" class="materialboxed">
                        <a href="#7Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            7°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 7°Ano -->
            <div class="modal" id="7Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        7°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        7°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        7°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano8',
        template: `
        <!-- 8°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/8Ano.png" alt="5°Ano" class="materialboxed">
                        <a href="#8Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            8°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 8°Ano -->
            <div class="modal" id="8Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        8°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        8°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        8°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano9',
        template: `
        <!-- 9°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/9Ano.png" alt="9°Ano" class="materialboxed">
                        <a href="#9Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            9°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 9°Ano -->
            <div class="modal" id="9Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        9°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        9°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        9°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano4',
        template: `
        <!-- 4°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/4Ano.png" alt="4°Ano" class="materialboxed">
                        <a href="#4Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            4°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 4°Ano -->
            <div class="modal" id="4Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        4°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        4°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        4°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#ano5',
        template: `
        <!-- 5°Ano -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/5Ano.png" alt="5°Ano" class="materialboxed">
                        <a href="#5Ano-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            5°Ano
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: 5°Ano -->
            <div class="modal" id="5Ano-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <p class="light azul-logo-text">
                        5°A
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        5°B
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                    <p class="light azul-logo-text">
                        5°C
                    </p>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Português</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Matemática</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Ciências</a>
                        </li>
                        <li class="collection-item">
                            <a href="">História</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Geografia</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Inglês</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Arte</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Educação Fisíca</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Enriquecimento Curricular</a>
                        </li>
                        <li class="collection-item">
                            <a href="">Sala de Leitura</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#coral',
        template: `
        <!-- Canto Coral -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/coral.png" alt="Canto Coral" class="materialboxed">
                        <a href="#coral-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            Coral
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: Coral -->
            <div class="modal" id="coral-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Canto
                                Coral</a>
                        </li>
                    </ul>
                </div>

                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action  modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>

        `
    })

    new Vue({
        el: '#pingpong',
        template: `
        <!-- Ping Pong -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/pingpong.png" alt="Ping Pong" class="materialboxed">
                        <a href="#ping-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            Ping Pong
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: Ping Pong -->
            <div class="modal" id="ping-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Ping
                                Pong</a>
                        </li>
                    </ul>
                </div>

                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#xadrez',
        template: `
        <!-- Xadrez -->
        <div class="semBordaInferior">
            <article class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="img/xadrez.png" alt="Xadrez" class="materialboxed">
                        <a href="#xadrez-modal" class="btn btn-floating halfway-fab azul-logo modal-trigger hoverable">
                            <i class="material-icons">
                                more_horiz
                            </i>
                        </a>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            Xadrez
                        </h3>
                        <p class="light left-align">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum...
                        </p>
                    </div>
                </div>
            </article>
            <!-- Modal: Xadrez -->
            <div class="modal" id="xadrez-modal">
                <div class="modal-content">
                    <h5 class="light">
                        Atividades dessa semana:
                    </h5>
                    <ul class="collection">
                        <li class="collection-item">
                            <a href="">Xadrez</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#atividades" class="btn blue-logo modal-action modal-close">
                        Sair
                    </a>
                </div>
            </div>
        </div>
        `
    })

    new Vue({
        el: '#horario',
        template: `
            <div class="row container center semBordaInferior">
                <!-- Botão Quadro de Horários -->
                <div class="row center">
                    <a href="#horarios-modal" class="btn btn-large azul-logo modal-trigger">
                        <i class="material-icons left">timer</i> horario meet
                    </a>
                </div>
                <!-- Modal Quadro de Horários -->
                <div class="modal" id="horarios-modal">
                    <div class="modal-content">
                        <h5 class="light">
                            Quadro de Horários das Reuniões
                        </h5>
                        <div class="row">
                            <div class="col s12">
                                <ul class="tabs">
                                    <li class="tab col s3">
                                        <a href="#tabela-6Ano">
                                            6°Ano
                                        </a>
                                    </li>
                                    <li class="tab col s3">
                                        <a href="#tabela-7Ano">
                                            7°Ano
                                        </a>
                                    </li>
                                    <li class="tab col s3">
                                        <a href="#tabela-8Ano">
                                            8°Ano
                                        </a>
                                    </li>
                                    <li class="tab col s3">
                                        <a href="#tabela-9Ano">
                                            9°Ano
                                        </a>
                                    </li>
                                </ul>
                                <table class="striped responsive-table" id="tabela-6Ano">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07:00 às 08:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>08:00 às 09:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>09:00 às 10:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>10:00 às 11:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:00 às 12:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="striped responsive-table" id="tabela-7Ano">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07:00 às 08:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>08:00 às 09:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>09:00 às 10:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>10:00 às 11:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:00 às 12:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="striped responsive-table" id="tabela-8Ano">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07:00 às 08:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>08:00 às 09:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>09:00 às 10:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>10:00 às 11:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:00 às 12:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="striped responsive-table" id="tabela-9Ano">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07:00 às 08:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>08:00 às 09:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>09:00 às 10:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>10:00 às 11:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>11:00 às 12:00
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        `
    })


    new Vue({
        el: '#carrosel',
        template: `
        <div class="col s12 l3 right">
        <div class="carousel carousel-slider hoverable" data-indicators="true">
            <a href="#" class="carousel-item">
                <img src="img/Banner01.jpeg" alt="Imagem intitucional">
            </a>
            <a href="#" class="carousel-item">
                <img src="img/Banner02.jpeg" alt="Imagem intitucional">
            </a>
            <a href="#" class="carousel-item">
                <img src="img/Banner03.jpeg" alt="Imagem intitucional">
            </a>
        </div>
    </div>
        `
    })



    new Vue({
        el: '#home',
        template: `
        <!-- Home -->
        <section class="home bloco scrollSpy" id="home">
            <div class="row container semBordaInferior">
                <div class="col s12 center">
                    <h2 class="white-text titulo">
                        Portal Leonor
                    </h2>
                    <p class="white-text light">
                        Portal oficial do Leonor
                    </p>
                    <div class="row botoes">
                        <a href="#sobre" class="btn btn-large white
                                hoverable azul-logo-text">
                            Sobre nós
                        </a>
                        <a href="#contatos" class="btn btn-large white hoverable
                                azul-logo-text">
                            Contatos
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `
    })

    /*    
    
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
                ano1: [
                    ano1A,
                    ano1B,
                    ano1C
                ]
            }
        })
    */
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