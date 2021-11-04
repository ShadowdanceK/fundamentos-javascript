            //? ClassList

//* Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); // adiciona a classe ativo ao elemento
menu.classList.add('ativo', 'mobile'); // adiciona duas classes
menu.classList.remove('ativo'); // remove a classe ativo 
menu.classList.toggle('ativo'); // adiciona/remove a classe 
menu.classList.contains('ativo'); // true or false caso a classe exista ou não
menu.classList.replace('ativo', 'inativo');

/* -------------------------------------------------------- */

            //? Attributes

//* Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // Retorna todos os atributos
animais.attributes[0]; // Retorna o primeiro atributo

/* -------------------------------------------------------- */

            //? getAttribute e setAttribute

//* Métodos que retornam ou definem de acordo com o atributo selecionado.

const img = document.querySelector('img');

img.getAttribute('src'); // Valor do src
img.setAttribute('alt', 'Texto Alternativo'); // Muda o valor de Alt
img.hasAttribute('id'); // True or False
img.removeAttribute('alt'); // Remove o alt

img.hasAttributes('src'); // True or False se tem algum atributo

//* Métodos de get e set são muito usados.

            //? Read Only VS Writable

//* Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Only, ou seja, apenas leitura.

animais.className; // String com o nome das classes
animais.className = 'azul'; // Substitui completamente a string
animais.className += ' vermelho'; // Adiciona vermelho à string

animais.attributes = 'class="ativo"'; // Não funciona, Read Only

//! Lembre-se de que podemos modificar o valor de uma propriedade objeto.propriedade = ''