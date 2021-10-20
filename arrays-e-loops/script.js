            //? Array

//* É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável

var videoGames = ['Switch', 'PS4', 'Xbox']

videoGames[0] // Switch
videoGames[2] // Xbox

//* Acesse um elemento da array utilizando [n]

/* -------------------------------------------------------- */

            //? Métodos e propriedades de uma array

videoGames.push('3DS') // Adiciona ao final da array

videoGames.pop() // Remove o último item e retorna ele

videoGames.length // 3

//* Existem diversos métodos, como map, reduce, forEach e outros que serão abordados

/* -------------------------------------------------------- */

            //? For Loop

//* Fazem algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//* Retorna de 0 a 9 no console

//! O for loop possui 3 partes, início, condição e incremento

/* -------------------------------------------------------- */

            //? While loop

var i = 0
while (i < 10) {
  console.log(i)
  i++
}

//* O for loop é o mais comum

/* -------------------------------------------------------- */

            //? Arrays e loops

for (var i = 0; i < videoGames.length; i++){
  console.log(videoGames[i])
}

//* O for loop é o mais comum

/* -------------------------------------------------------- */

            //? Break

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
  if(videoGames[i] === 'PS4'){
    break;
  }
}

//* O loop irá parar caso encontre a palavra break

/* -------------------------------------------------------- */

            //! Não se confunda com a sintaxe

var numero = 0
var maximo = 50
for(;numero < maximo;){
  console.log(numero)
  numero++
}

//! Não é aconselhado escrever desta forma, mas funciona normalmente.