// ?Crie uma função para verificar se um valor é Truthy.

function typeValidation(dado) {
  if (!!dado) {
   return console.log('é um valor Truthy')
  } else {
   return console.log('é um valor False')
  }
}

// ?Crie uma função matemática que retorne o perímetro de um quadrado.
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  const calc = lado * 4;
  return calc;
}
console.log(perimetro(5));

// ?Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome.

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('hercules', 'miranda'));

// ?Crie uma função que verifica se um número é par.
function verificaPar(number) {
  var modulo = number % 2;
  if (modulo !== 0) {
    console.log('é ímpar');
  } else {
    console.log('é par');
  }
}
console.log(verificaPar(4));

// ?Crie uma função que retorne o tipo de dado do argumento passado nela (typeof).

function tipoDado(entrada) {
  return typeof entrada;
}
console.log(tipoDado(verificaPar));

//? addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//? utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log('Hércules Miranda');
});

//? Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
 
//! resolução: 
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
jaVisitei(20);

