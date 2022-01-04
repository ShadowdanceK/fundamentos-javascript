//? Crie uma função construtora de Pessoas, deve conter nome, sobrenome e idade, crie um método no protótipo que retorne o nome completo da pessoa:

function Pessoa1(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa1.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const maria = new Pessoa1("Maria", "Cristina", 16);
console.log(maria.nomeCompleto());

//? Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document:
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//? Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //* HTMLElement
li.click; //* Function
li.innerText; //* String
li.value; //* Number
li.hidden; //* Boolean
li.offsetLeft; //* Number
li.click(); //* undefined

console.log(li.offsetLeft.constructor.name);

//? Qual o construtor do dado abaixo:
li.hidden.constructor.name; //* String

console.log(li.hidden.constructor.name.constructor.name);
