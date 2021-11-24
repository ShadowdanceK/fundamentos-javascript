//? Objetos

//* Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É`possível com o Object.create, mas veremos ele mais tarde.

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;

//* carro, fiat e honda apontam para o mesmo objeto.

/* -------------------------------------------------------- */

//? Constructor Functions

//* Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda1 = new Carro();
honda1.marca = "Honda";
honda1.preco = 4000;
const fiat1 = new Carro();
fiat1.marca = "Fiat";
fiat1.preco = 3000;

//* É considerado uma boa prática pela comunidade, usar Pascal Case, ou seja, começar com letra maiúscula quando for nomear uma Constructor Function.

/* -------------------------------------------------------- */

//? New Keyword

//* A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
function newObject() {
  let bmw = new Carro();

  // 1º - Cria um novo objeto:
  bmw = {};

  // 2º - Define o protótipo:
  bmw.prototype = Carro.prototype;

  //3º - Aponta a variável this para o objeto
  this === bmw;

  //4º - Executa a função, substituindo this pelo objeto
  bmw.marca = "Marca";
  bmw.preco = 0;

  //5º - Retorna o novo objeto
  return (bmw = {
    marca: "Marca",
    preco: 0,
  });
}

/* -------------------------------------------------------- */

//? Parâmetros e argumentos

//* Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro1(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda2 = new Carro1("Honda", 5000);
const fiat2 = new Carro1("Fiat", 6000);

/* -------------------------------------------------------- */

//? This Keyword

//* O this faz referência ao próprio objeto construído com a Constructor Function.

function Moto(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const Yamaha = new Moto("Yamaha", 4000);

//* Variáveis dentro da Constructor estão "reservadas".

/* -------------------------------------------------------- */

//? Exemplo real

//* Quando mudamos a propriedade do seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

const Dom = {
  seletor: "li",
  Element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.Element().classList.add("ativo");
  },
};

Dom.ativo(); // Adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // Adiciona ativo ao ul

/* -------------------------------------------------------- */

//? Constructor function real

//* Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

function Dom1() {
  this.seletor = "li";
  const element = document.querySelector(this.seletor);
  this.ativo = function () {
    element.classList.add("ativo");
  };
}

const lista = new Dom1();
lista.seletor = "ul";
lista.ativo();

const lastLi = new Dom1();
lastLi.seletor = "li:last-child";
lastLi.ativo();

/* -------------------------------------------------------- */

//? Lembre-se de usar parâmetros

function Dom2(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista1 = new Dom2("ul");
lista1.ativo("ativo");

const lastLi1 = new Dom2("li:last-child");
lastLi1.ativo("ativo");
