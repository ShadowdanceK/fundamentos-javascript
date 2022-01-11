//? Arrays

//* Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, booleans, numbers, functions, objects e mais.

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome + " andou");
  },
];

dados[2]("Ford"); // Ford andou
dados[1][2].cor; // Azul

console.log(dados[1][2].cor);

/* -------------------------------------------------------- */

//? Construção de arrays

//* Toda array herda os métodos e propriedades do protótipo do construtor Array.

const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";
carros.length; // 11
console.log(carros);

//* Os valores das arrays não são estáticos.

/* -------------------------------------------------------- */

//? Array.from()

//* Array.from() é um método utilizado para transformar array-like objects, em uma array.

let li = document.querySelectorAll("li"); // Nodelist
li = Array.from(li); // Array

const carros1 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};

const carros1Array = Array.from(carros1);

/* -------------------------------------------------------- */

//? Array.isArray()

//* Verifica se o valor passado é uma array e retorna um valor booleano.

Array.isArray(li); // True

//! Sem o método Array.from(li) executado anteriormente, o valor agora retornaria False.

/* -------------------------------------------------------- */

//? Array.of(), Array() e new Array()

//* Array.of() cria uma array usando somente os argumentos passados, Array() cria uma array usando os argumentos fornecidos ou com paramêtros vazios. A palavra chave new não é necessária para utilizar o construtor Array.

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [empty × 5]
Array(5); // [empty × 5]
Array(1, 2, 3, 4); // [1,2,3,4]

/* -------------------------------------------------------- */

//? Propriedades e métodos do prototype

//* [].length retorna o tamanho da array.

const frutas = ["Banana", "Pêra", ["Uva roxa", "Uva verde"]];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2

/* -------------------------------------------------------- */

//? Métodos modificadores [].sort()

//* Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a array pelo unicode(ordem alfabética).

instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

/* -------------------------------------------------------- */

//? [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() faz o mesmo porém adiciona os elementos ao final da array.

const marcas = ["Ford", "Fiat", "VW"];
marcas.unshift("Honda", "Kia"); // 5
marcas; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']

marcas.push("Ferrari"); // 6
marcas; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']

/* -------------------------------------------------------- */

//? [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() faz o mesmo porém remove o último elemento da array.

const primeiraMarca = marcas.shift(); // 'Honda'
marcas; // ['Kia', 'Ford', 'Fiat', 'VW', 'Ferrari']

const ultimaMarca = marcas.pop(); // 'Ferrari'
marcas; // ['Kia', 'Ford', 'Fiat', 'VW']

/* -------------------------------------------------------- */

//? [].reverse()

//* [].reverse() inverte os itens da array e retorna a nova array.

marcas.reverse(); // ['VW', 'Fiat', 'Ford', 'Kia']

/* -------------------------------------------------------- */

//? [].splice()

//* [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

marcas.splice(1, 0, "Kia", "Mustang"); // []
marcas; // ['VW', 'Kia', 'Mustang', 'Fiat', 'Ford', 'Kia']

marcas.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
marcas; // ['VW', 'Kia', 'Mustang', 'Ferrari', 'Kia']

/* -------------------------------------------------------- */

//? [].copyWithin()

//* [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

/* -------------------------------------------------------- */

//? [].fill()

//* [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);

/* -------------------------------------------------------- */

//? Métodos de acesso [].concat()

//* Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

const transportes1 = ["Barco", "Avião"];
const transportes2 = ["Carro", "Moto"];
const transportes = transportes1.concat(transportes2);
// ['Barco', 'Avião', 'Carro', 'Moto']

const maisTransportes = [].concat(transportes1, transportes2, "Van");
// ['Barco', 'Avião', 'Carro', 'Moto', 'Van']

/* -------------------------------------------------------- */

//? [].includes(), [].indexOf() e [].lastIndexOf()

//* [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // True
linguagens.includes("ruby"); // False
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

/* -------------------------------------------------------- */

//? [].join()

//* [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

linguagens.join(); // 'html,css,js,php,python,js'
linguagens.join(" "); // 'html css js php python js'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python-_-js'

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// '<h1>Título Principal</h1>'

/* -------------------------------------------------------- */

//? [].slice()

//* [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor final.

linguagens.slice(3); // ['php', 'python', 'js']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
