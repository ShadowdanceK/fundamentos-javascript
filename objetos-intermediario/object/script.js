//? Object

//* Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const carro = {
  marca: "Ford",
  ano: 2020,
};

const pessoa = new Object({
  nome: "André",
  idade: 28,
});

/* -------------------------------------------------------- */

//? Métodos de object

//* Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro1 = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro1);
honda.init("Honda").acelerar();

/* -------------------------------------------------------- */

//? Object.assign

//* Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel);
// {rodas: 2, capacete: true, acelerar: ƒ, buzinar: ƒ}
Object.assign(carro2, funcaoAutomovel);
// {rodas: 4, mala: true, acelerar: ƒ, buzinar: ƒ}

/* -------------------------------------------------------- */

//? Object.defineProperties()

//* Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto1 = {};
Object.defineProperties(moto1, {
  rodas: {
    value: 2,
    configurable: false, //* Impede deletar e mudança de valor
    enumerable: true, //* Torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, //* Impede mudança de valor
  },
});

moto1.rodas = 4;
console.log(moto1);
// {rodas: 2, capacete: true}

delete moto1.capacete;
console.log(moto1);
// {rodas: 2}

//* Existe também o Object.defineProperty, para uma propriedade única.

/* -------------------------------------------------------- */

//? get e set

//* É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'valor' a função de set é ativada.

const moto2 = {};
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto2.velocidade = 200;
moto2.velocidade;
// 200
console.log(moto2);
// {velocidade: 200}

/* -------------------------------------------------------- */

//? Object.getOwnPropertyDescriptors(obj)

//* Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades de Array.

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array.

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade.

/* -------------------------------------------------------- */

//? Object.keys(obj), Object.values(obj) e Object.entries(obj)

//* Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com arrays contendo a chave e o valor.

Object.keys(Array);
// [] Vazia, pois não possui propriedades enumeráveis.

const carro3 = {
  marca: "Ford",
  ano: 2018,
};

Object.keys(carro3);
// ['marca', 'ano']

Object.values(carro3);
// ['Ford', 2018]

Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]

/* -------------------------------------------------------- */

//? Object.getOwnPropertyNames(obj)

//* Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

Object.getOwnPropertyNames(carro);
// ['marca', 'ano']

/* -------------------------------------------------------- */

//? Object.getPrototypeOf() e Object.is(obj1, obj2)

//* Object.getPrototypeOf() retorna o protótipo do objeto, Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ["Banana", "Pêra"];
Object.getPrototypeOf(frutas);
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pêra"];

Object.is(frutas, frutas1); // False

/* -------------------------------------------------------- */

//? Object.freeze(), Object.seal(), Object.preventExtensions()

//* Object.freeze() impede qualquer mudança nas propriedades, Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro4 = {
  marca: "Ford",
  ano: 2018,
};

Object.freeze(carro4);
carro4.marca = "Honda";
console.log(carro4);

Object.seal(carro4);
carro4.portas = 4;
delete carro4.ano;
console.log(carro4);

Object.preventExtensions(carro4);

Object.isFrozen(carro4); // True
Object.isSealed(carro4); // True
Object.isExtensible(carro4); //! False

/* -------------------------------------------------------- */

//? Propriedades e métodos do protótipo

//* Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

frutas.constructor; // Array

const frase = "Isso é uma String";
frase.constructor; // String

/* -------------------------------------------------------- */

//? {}.hasOwnProperty('prop') e {}.propertyIsEnumerable()

//* Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

const marcas = ["BMW", "Volvo"];

marcas.hasOwnProperty("map"); // False
Array.hasOwnProperty("map"); // False
Array.prototype.hasOwnProperty("map"); // True

Array.prototype.propertyIsEnumerable("map"); // False
window.propertyIsEnumerable("innerHeight"); // True

/* -------------------------------------------------------- */

//? {}.isPrototypeOf(valor)

//* Verifica se é o protótipo do valor passado.

Array.prototype.isPrototypeOf(marcas); // True

/* -------------------------------------------------------- */

//? {}.toString()

//* Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

marcas.toString(); // 'BMW,Volvo'
typeof marcas; // object
Object.prototype.toString.call(marcas); // [object Array]

const frase1 = "Uma String";
frase.toString(); // 'Uma String'
typeof frase1; // string
Object.prototype.toString.call(frase1); // [object String]

const carro5 = { marca: "Ford" };
carro.toString(); // [object Object]
typeof carro5; // object
Object.prototype.toString.call(carro5); // [object Object]

const li = document.querySelectorAll("li");
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
