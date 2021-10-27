            //? Escopo de função
        
//* Váriáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro(){
  var carro = 'Fusca'
  console.log(carro)
}

mostrarCarro() // Fusca no console
console.log(carro) //! script.js:10 Uncaught ReferenceError: carro is not defined

//*  Escopo evita o conflito entre nomes.

/* -------------------------------------------------------- */

            //? Variável global(ERRO)

//* Declarar variáveis sem a palavra chave var, const ou let cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro.

function mostrarCarro1(){
  carro = 'Kombi'
  console.log(carro)
}

mostrarCarro1() // Kombi
console.log(carro) // Kombi

//* 'use strict' impede isso.

/* -------------------------------------------------------- */

            //? Escopo de função (PAI)

//* Variáveis declaradas no escopo pai da função, conseguem ser acessadads pelas mesmas. 

var carro = 'Brasilia'
function mostrarCarro2() {
  var frase = `Meu carro é uma ${carro}`
  return console.log(frase)
}

mostrarCarro2() // Meu carro é uma Brasilia
console.log(carro) // Brasilia

/* -------------------------------------------------------- */

            //? Escopo de bloco

//* Variáveis criadas com var vazam o bloco. Por isso com a introdução do ES6 a melhor forma de decararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if(true){
  var carro = 'Jeep'
  console.log(carro)
}
console.log(carro) // Jeep

/* -------------------------------------------------------- */

            //! VAR vaza o bloco

//* Mesmo com a condição falsa, a variável ainda será declarada utilizando o hoisting e o valor ficará como undefined 

if(false) {
var carro1 = 'busao';
console.log(carro1);
}

console.log(carro1) // undefined

/* -------------------------------------------------------- */

          //? Const e Let no lugar de Var

//* A partir de agora devemos utilizar apenas const e let para declararmos variáveis.

if(true){
  const carro2 = 'van'
  console.log(carro2)
}
//* console.log(carro2)
//! Erro, carro2 is not defined

/* -------------------------------------------------------- */

            //? {} Criar um bloco

//* Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro3 = 'Busão'
  const ano = 2021
}

console.log(carro) // Busão
//* console.log(ano) 
//! erro ano is not defined

/* -------------------------------------------------------- */

            //? For Loop

//* Ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existirá fora do loop.

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`)
}
console.log(i) // 10

/* -------------------------------------------------------- */

            //? For loop com Let 

//* Com o let evitamos que o número vaze.

for(let a = 0; a < 10; a++) {
  console.log(`Número ${a}`)
}
//* console.log(a)
//! a is not defined

/* -------------------------------------------------------- */

            //? CONST
        
//* Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = 'Dezembro'
//* mes = 'Janeiro' 
//! erro, tentou modificar uma constante

//* const semana
//! erro, declaração sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2021,
}

data.dia = 29 // Funciona
//* data = 'Janeiro' 
//! Erro

//* Variáveis com valores constantes devem sempre utilizar o const.

/* -------------------------------------------------------- */

            //? Let

//* Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano
ano = 2018
ano++
console.log(ano) // 2019

//* let ano = 2022
//! erro, redeclarou variável

//* Geralmente será utilizado o const.