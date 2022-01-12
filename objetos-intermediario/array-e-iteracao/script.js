//? [].forEach()

//* [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual(valor do item da array), index(index do valor na array) e array(array original).

const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
});

// Com Arrow Function:
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

//! O método sempre retorna undefined.

/* -------------------------------------------------------- */

//? Arrow Function

const li = document.querySelectorAll("li");

li.forEach((i) => i.classList.add("ativa"));

li.forEach(function (item) {
  item.classList.add("ativa");
});

/* -------------------------------------------------------- */

//? Modificar a array original

//* O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

carros.forEach((item, index, array) => {
  array[index] = "Carro " + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

//! É melhor utilizarmos o map para isso.

/* -------------------------------------------------------- */

//? [].map()

//* [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const carrosAntigos = ["Parati", "Brasília", "Kombi"];
const newCarrosAntigos = carrosAntigos.map((item) => {
  return "Carro clássico " + item;
});

carrosAntigos; // ['Parati', 'Brasília', 'Kombi']
newCarrosAntigos; // ['Carro clássico Parati', 'Carro clássico Brasília', 'Carro clássico Kombi']

/* -------------------------------------------------------- */

//? Valor retornado

//* Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

const novoCarrosAntigos = carrosAntigos.map((i) => {
  const novoValor = "Carro " + i;
});

novoCarrosAntigos; // [undefined, undefined, undefined]

/* -------------------------------------------------------- */

//? Arrow Function e [].map()

//* Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((i) => i * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42]

/* -------------------------------------------------------- */

//? [].map() VS [].forEach()

//* Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores

/* -------------------------------------------------------- */

//? [].map() com objetos

//* Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((i) => i.min);
tempoAulas; // [15, 10, 20, 25]

const puxarNomes = (i) => i.nome;
const nomesAulas = aulas.map(puxarNomes);
nomesAulas; // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

/* -------------------------------------------------------- */
//? [].reduce()

//< [].reduce(callback(acumulador, valorAtual, index, array), valorInicial);

//* Executa a função de callback para cada item da array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aula = [10, 25, 30];

const total1 = aula.reduce((acumulador, atual, index, array) => {
  return acumulador + atual;
}, 0);
total1; // 65

const total2 = aula.reduce((acc, cur) => acc + cur, 100);
total2; // 165

/* -------------------------------------------------------- */

//? reduce passo a passo 1

//* O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior .

const aulas1 = [10, 25, 30];
/*
//< 1º:
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); //* Retorna 10

//< 2º:
aulas1.reduce((10,25) => {
  return 10 + 25;
}, 0); //* Retorna 35

//< 3º:
aulas1.reduce((35+30) => {
  return 35 + 30;
}, 0); //* Retorna 65
*/

/* -------------------------------------------------------- */

//? reduce passo a passo 2

//* Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começará a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

const aulas2 = [10, 25, 30];
/*
//< 1º:
aulas.reduce((10,25) => {
  return 10 + 25;
}); //* Retorna 35

//< 2º:
aulas.reduce((35,30) => {
  return 35 + 30;
}); //* Retorna 65
*/

/* -------------------------------------------------------- */

//? Maior valor com [].reduce()

const numeros1 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros1.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

/* -------------------------------------------------------- */

//? Podemos retornar outros valores

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});
listaAulas; // {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'}

/* -------------------------------------------------------- */

//? Passo a passo reduce

//* Passo a passo do método reduce criando um Objeto.
/*
//< 1º:
aulas.reduce(({}, {nome: "HTML 1", min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {});

//< 2º:
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {});

//< 3º:
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {});

//< 4º:
aulas.reduce(({0: 'HTML1', 1: 'HTML 2', 2: 'CSS1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {});
*/

/* -------------------------------------------------------- */

//? [].reduceRight()

//* Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

let frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);

const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

/* -------------------------------------------------------- */

//? []some()

//* Se pelo menos um return da iteração for Truhty, o método [].some() retorna true.

const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
}); // True

function maiorQue100(numero) {
  return numero > 100;
}

const numeros2 = [0, 43, 22, 88, 100.1, 2];
const temMaior = numeros2.some(maiorQue100);

/* -------------------------------------------------------- */

//? [].every()

//* Se todos os returns das iterações forem truthy, o método [].every() irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

frutas[3] = "";

const arraysCompletas = frutas.every((fruta) => {
  return fruta; // False
});
// * Retorna false pois pelo menos um item da array está vazio '', o que é um valor falsy.

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros3.every((x) => x > 3); // True

/* -------------------------------------------------------- */

//? [].find() e [].findIndex()

//* [].find() retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

frutas[3] = "Maçã";

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

const buscaMaior45 = numeros3.find((x) => x > 45); // 88

/* -------------------------------------------------------- */

//? [].filter()

//* O método [].filter() retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas1.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']

const buscaMaior50 = numeros3.filter((x) => x > 50); // [88, 101]

/* -------------------------------------------------------- */

//? Filter em objetos

const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
}); //* [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
