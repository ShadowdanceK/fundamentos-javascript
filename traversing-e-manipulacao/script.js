            //? outerHTML, innerHTML e innerText

//* Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const menu = document.querySelector('.menu');

menu.outerHTML; // Todo o html do elemento
menu.innerHTML; // html inteiro
menu.innerText; // Texto, sem tags

menu.innerText = '<p>Texto</p>'; // A tag vai como texto
menu.innerHTMl = '<p>Texto</p>'; // A tag é renderizada


/* -------------------------------------------------------- */

            //? Trasversin

//* Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // Pai
lista.parentElement.parentElement; // Pai do Pai
lista.previousElementSibling; // Elemento acima
lista.nextElementSibling; // Elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // Primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // Todas as LI's

lista.querySelector('li:last-child'); // último filho

/* -------------------------------------------------------- */

            //? Element vs Node

//* Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

lista.previousElementSibling; // Elemento acima
lista.previousSibling; // Node acima

lista.firstChild; // Primeiro node child
lista.childNodes; // Todos os nodes child.

//* Geralmente estamos atrás de um elemento e não de qualquer node em si.

/* -------------------------------------------------------- */

            //? Manipulando elementos

//* É possível mover elementos no dom com métodos de Node.

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // Move a lista para o final de contato
contato.insertBefore(lista, titulo); // Insere a lista antes de titulo
contato.replaceChild(lista, titulo); // Substitui titulo por lista
//* target.replaceWith(element) também é uma forma de realizar a operação acima

contato.removeChild(lista); // Remove lista de contato

/* -------------------------------------------------------- */

            //? Novos elementos

//* Podemos criar novos elementos com o método createElement();

let animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

/* -------------------------------------------------------- */

            //? Clonar elementos 

//* Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const titulo2 = document.querySelector('h1');
const titulo3 = document.querySelector('h1');
const novoTitulo = titulo2;

//* titulo2, titulo3 e novoTitulo correspondem ao mesmo elemento.

const cloneTitulo = titulo2.cloneNode(true);
contato.appendChild(cloneTitulo);

//* true sinaliza para incluir os filhos.







