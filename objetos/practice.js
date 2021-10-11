//? Crie um objeto com os seus dados pessoais, deve possuir pelo menos duas propriedades, nome e sobrenome
var dadosPessoais = {
  nome: 'Hércules',
  sobrenome: 'Miranda',
  idade: 22,
}

//? Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.showName = function () {
  console.log(`${this.nome} ${this.sobrenome}`);
}
//? Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

//? Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  alerta(pessoa){
    if(pessoa === 'homem') {
      return 'Latir'
    } else {
      return 'dormir';
    }
  }
}
