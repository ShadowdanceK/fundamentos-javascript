//? Adicione um atributo data-anima="show-down" e data-anima="show-right" a todas as sections com a descrição de animais no HTML.
// <div class="animais-descricao js-tabcontent">
// <section data-anima="show-right">

//? Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)
function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove("ativo");
  });
  const direcao = tabContent[index].dataset.anima;
  tabContent[index].classList.add("ativo", direcao);
} //* Basta alterar a function activeTab no script principal (script.js), para que a mesma isole o valor de 'data-anima' e em seguida o adicione como classe.

//? No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita

/* .js-tabcontent section.ativo.show-right {
  animation: show-right 0.5s forwards;
}

.js-tabcontent section.ativo.show-down {
  animation: show-down 0.5s forwards;
}

@keyframes show-right {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
} */

//? Substitua no HTML todas as classes js- por data atributes.
