            //? Adicionar classes para manipulação

//* A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

//! Primeiro, adicionar classes que irão facilitar a manipulação dos elementos

<ul class="animais-lista jstab-menu"></ul>;

<div class="animais-descricao js-tabcontent"></div>;

/* -------------------------------------------------------- */

            //? Selecionar os itens

const tabMenu = document.querySelectorAll('.jstab-menu li');
const tabContent = document.querySelectorAll('.js-tabcontent section')

/* -------------------------------------------------------- */

            //? Função callback

//* Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.

function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

/* -------------------------------------------------------- */

            //? Adicionar o evento

//* Neste caso precisamos passar antes a função anônima no callback, para podermos passar o index como argumento de activeTab.

tabMenu.forEach((ItemMenu, index) => {
  ItemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});

/* -------------------------------------------------------- */

            //? Assim que carregar

//* Adicionar a classe ativo ao primeiro elemento e adicionar a classe js ao html. Assim identificamos se o JavaScript está habilitado ou não.

//! No head do browser
<Script>document.documentElement.className += ' js'</Script>

//* Verificar se existe elemento em tabContent e tabMenu

if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');
}

/* -------------------------------------------------------- */

            //? Animação com CSS

//* Animação simples com css, sai de display none para display block.

/*

.js .js-tabcontent section {
  display: none;
}

.js-tabcontent section.ativo {
  display: block !important;
  animation: show .5s forwards;
}

@keyframes show {
  from {
    opacity: 0,
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}

*/

//! Lembre-se, o display none remove o texto até dos leitores de tela (acessibilidade).


