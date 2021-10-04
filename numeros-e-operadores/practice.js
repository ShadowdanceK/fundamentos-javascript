// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; 35

// Crie duas expressões que retornem NaN
let expressao1 = 10 + 5 * '15n',
    expressao2 = 20 - 10 / 'lagoa azul';
console.log(expressao2, expressao1);

// Somar a string '200' com o número 50 e retornar 250
const somaString = +'200' + 50;
console.log(somaString);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois);
