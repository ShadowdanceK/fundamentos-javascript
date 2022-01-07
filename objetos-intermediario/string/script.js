//? String

//* É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2022);

/* -------------------------------------------------------- */

//? string.length

//* Propriedade com o total de caracteres da string.

const frase = "A melhor comida";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

/* -------------------------------------------------------- */

//? string.charAt(n)

//* Retorna o caracter de acordo com o index de (n).

const linguagem = "JavaScript";

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

/* -------------------------------------------------------- */

//? string.concat(STR2, STR3, ...)

//* Concatena as strings e retorna o resultado.

const frase1 = "A melhor linguagem é ";

const fraseCompleta = frase1.concat(linguagem, "!!");

/* -------------------------------------------------------- */

//? string.includes(search, position)

//* Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // True
fruta.includes(listaFrutas); // False

/* -------------------------------------------------------- */

//? string.endsWith(search) e string.startsWith(search)

//* Procura pela string exata dentro de outra string. A procura é case sensitive.

fruta.endsWith("nana"); // True
fruta.startsWith("Ba"); // True
fruta.startsWith("na"); // False

/* -------------------------------------------------------- */

//? string.slice(start, end)

//* Corta a string de acordo com os valores de start e end.

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 4); // Depó
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

/* -------------------------------------------------------- */

//? string.substring(start, end);

//* Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.

//>ex: 'JavaScript'

linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript

/* -------------------------------------------------------- */

//? string.indexOf(search) e string.lastIndexOf(search)

//* Retorna o index da string, assim que encontrar o primeiro resultado. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3

/* -------------------------------------------------------- */

//? string.padStart(n, string) e string.padEnd(n, string)

//* Aumenta o tamanho da string para o valor de n, ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços em branco, caso não declarado o segundo argumento.

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....

/* -------------------------------------------------------- */

//? string.repeat(n);

//* Repete a string (n) vezes.

const frase2 = "Ta";
frase2.repeat(3); // TaTaTa

/* -------------------------------------------------------- */

//? string.replace(regExp|substring, newString|function)

//* Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

/* -------------------------------------------------------- */

//? string.split(padrao)

//* Divide a string de acordo com o padrão passado e retorna uma array.

const arrayItens = listaItens.split(" "); // Corta a lista a cada espaço em branco.

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div"); // Corta a lista a cada palavra 'div'.
const htmlNovo = htmlArray.join("section");

//* Join é um método de Array.

/* -------------------------------------------------------- */

//? string.toLowerCase() e string.toUpperCase()

//* Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // True
sexo2.toLowerCase() === "feminino"; // True
sexo3.toLowerCase() === "feminino"; // True

/* -------------------------------------------------------- */

//? string.trim(), string.trimStart() e string.trimEnd()

//* Remove espaço em branco do início ou final de uma string.

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$23.00'
valor.trimStart(); // 'R$23.00   '
valor.trimEnd(); // '  23.00'
