//? Function

//* Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function("lado", "return lado * 4");

/* -------------------------------------------------------- */

//? Propriedades

//* Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

/* -------------------------------------------------------- */

//? function.call()

//* function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
  marca: "Ford",
  ano: "2018",
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

/* -------------------------------------------------------- */

//? this

//* O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call()

const carros = ["Ford", "Fiat", "VW"];

carros.forEach((i) => console.log(i));
// Log de cada carro.

carros.forEach.call(carros, (i) => console.log(i));
// Log de cada carro.

const frutas = ["Banana", "Pêra", "Uva"];

carros.forEach.call(frutas, (i) => console.log(i));
// Log de cada fruta.

/* -------------------------------------------------------- */

//? Exemplo real

//* O objeto atribuído a 'lista' será o substituído pelo primeiro argumento de call()

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const lista = new Dom("ul");
lista.ativo("ativar");
console.log(lista);

/* -------------------------------------------------------- */

//? O objeto deve ser parecido

//* O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

const novoSeletor = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(novoSeletor, "ativo");

/* -------------------------------------------------------- */

//? Arrays e call

//* É comum utilizarmos o call () nas funções do protótipo do constructor Array. Assim podemos estender todos os métodos de Array à objetos que se pareçam com uma (array-like).

Array.prototype.mostreThis = function () {
  console.log(this);
};

const frutas1 = ["Uva", "Maçã", "Banana"];
frutas1.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas1); // Remove Banana.
frutas1.pop(); // Mesma coisa que a função acima.

/* -------------------------------------------------------- */

//? array-like

//* HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por sso conseguimos utilizar os mesmos na substituição do this em call.

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, function (i) {
  return i.classList.contains("ativo");
});

filtro; // Retorna os itens que possuem ativo.

/* -------------------------------------------------------- */

//? function.apply()

//* O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

//* Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar.

/* -------------------------------------------------------- */

//? apply VS call

//* A única diferença é a array como segundo argumento.

function itemPossuiAtivo(i) {
  return i.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

/* -------------------------------------------------------- */

//? function.bind()

//* Diferente de call e aplly, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const filtrarLi = Array.prototype.filter.bind(li, function (i) {
  return i.classList.contains("ativo");
});

filtrarLi(); //[li.ativo]

/* -------------------------------------------------------- */

//? Argumentos e .bind()

//* Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.

const carro1 = {
  marca: "Ford",
  ano: 2022,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

carro1.acelerar(100, 20);
// Ford acelerou 100 em 20.

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro1.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10.

/* -------------------------------------------------------- */

//? Argumentos comuns

//* Podemos passar argumentos padrões para uma função e retornar uma nova função.

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6
