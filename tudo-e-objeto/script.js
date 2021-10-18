            //! Tudo é objeto

//* Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Hércules';

nome.length; // 8
nome.charAt(1); // 'é'
nome.replace('es', 'is'); // 'Hérculis'
nome; // 'Hércules'

//* Uma string herda propriedades e métodos do construtor String()

/* -------------------------------------------------------- */

            //? Números

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//* Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

/* -------------------------------------------------------- */

            //? Funções

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; //1

/* -------------------------------------------------------- */

            //? Elementos do DOM

    //<a href="0" class="btn">Clique</a>
var btn = document.querySelector('.btn'); //Seleciona o elemento

btn.classList.add('azul'); //adiciona a classe azul
btn.innerText; // Retorna o valor, no caso: 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
  })

//* Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

//! OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

//* Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.