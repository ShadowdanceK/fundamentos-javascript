//? Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.

const linkInterno = document.querySelectorAll('a[href^="#"]');

function adicionaClasse(e) {
  e.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove('ativo');
  });
  e.currentTarget.classList.add('ativo');
};

linkInterno.forEach((link) => {
  link.addEventListener('click', adicionaClasse);
});

//? Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.

let allElements = document.querySelectorAll('body *'); // A palavra chave > * seleciona somente os elementos filhos e apenas o * seleciona todos os elementos descendentes.

function qualElemento(e) {
  let currentTarget = e.currentTarget;
  console.log(currentTarget);
}

allElements.forEach((elemento) => {
  elemento.addEventListener('click', qualElemento);
});

//? Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.

/*
function retiraElemento(e) {
  let currentTargetRemove = e.currentTarget.remove();
}

allElements.forEach((elemento) => {
  elemento.addEventListener('click', retiraElemento);
}); */


//? Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function keyboardText(e) {
  if (e.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
};

window.addEventListener('keydown', keyboardText);

