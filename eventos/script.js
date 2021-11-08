            //? addEventListener

//* Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste element.

const img = document.querySelector('img');

//* elemento.addEventListener(event, callback, options)

img.addEventListener('click', function() {
  console.log('Clicou');
});

//* O terceiro parâmetro é opcional.

/* -------------------------------------------------------- */

            //? Callback

//* É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.

function callback() {
  console.log('Clicou')
};

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // Undefined

img.addEventListener('click', function() {
  console.log('Clicou');
});
img.addEventListener('click', () => {
  console.log('Clicou');
});

/* -------------------------------------------------------- */

            //? Event

//* O primeiro parâmetro callback é referente ao evento que ocorreu.

function callback(event) {
  console.log(event);
};

//* Geralmente utilizam /* e */ como nome do parâmetro.

/* -------------------------------------------------------- */

            //? Propriedades do event

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // This
  const target = event.target; // Onde o clique ocorreu
  const type = event.type; // Tipo de evento
  const path = event.path; // Caminho até o elemento no DOM
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

/* -------------------------------------------------------- */

            //? event.preventDefaut()

//* Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="https"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
};

linkExterno.addEventListener('click', clickNoLink);

/* -------------------------------------------------------- */

            //? This

//* A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que o addEventListener foi adicionado.

function callback1(event) {
  console.log(this); // Retorna a imagem
  console.log(this.getAttribute('src'));
};

img.addEventListener('click', callback1);

//* Geralmente igual ao event.currentTarget

/* -------------------------------------------------------- */

            //? Diferentes eventos

//* Existem diversos eventos como: click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
/*
const h1 = document.querySelector('h1');

function callback2(event) {
  console.log(event.type, event);
};

h1.addEventListener('click', callback2);
h1.addEventListener('mouseenter', callback2);
window.addEventListener('scroll', callback2);
window.addEventListener('resize', callback2);
window.addEventListener('keydown', callback2); */

//* https://developer.mozilla.org/en-US/docs/Web/Events

/* -------------------------------------------------------- */

            //? Keyboard

//* Você pode adicionar atalhos para facilitar a navageção no seu site, através de eventos do keyboard.

function handleKeyboard(e) {
  if(e.key === 'a')
    document.body.classList.toggle('azul');
  else if(e.key === 'v')
    document.body.classList.toggle('vermelho')
};

window.addEventListener('keydown', handleKeyboard);

/* -------------------------------------------------------- */

            //? forEach e eventos

//* O método addEventListener é adicionado à um único elemento, então é necessário um loop entre os elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(e) {
  const src = e.currentTarget.getAttribute('src');
  console.log(src);
};

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});