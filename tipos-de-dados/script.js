var nome = 'hércules',
    idade = 23,
    time = null,
    simbolo = Symbol();

console.log(typeof simbolo);

/* var nome = 'hércules',
    sobrenome = 'miranda',
    nomecompleto = nome + ' ' + sobrenome; */

console.log(nomecompleto);

var gols = 1000,
    frase = 'romário fez ' + gols + ' gols';

console.log(frase);

var gols = 1000,
    frase1 = 'romário fez ' + gols + ' gols';
    frase2 = `romário fez ${gols * 2} gols`;

console.log(frase2);

// Declare uma variável contendo uma string

var string = 'melancia';

// Declare uma variável contendo um número dentro de uma string

let numeroescrito = '25';

// Declare uma variável com a sua idade

var idade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var sobrenome = 'miranda',
    nomecompleto = `${nome} ${sobrenome}`

// Coloque a seguinte frase em uma variável: It's time

var frase = 'it\'s time'

// Verifique o tipo da variável que contém o seu nome
var verificartipo = typeof nome;
console.log(verificartipo);
