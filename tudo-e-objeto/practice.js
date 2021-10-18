//? nomeie 3 propriedades ou métodos de strings
var chocolate = 'muito açúcar'

chocolate.length // 12
chocolate.anchor() // '<a name="undefined">muito açúcar</a>'
chocolate.bold() // '<b>muito açúcar</b>'
//? nomeie 5 propriedades ou métodos de elementos do DOM

// Selecionar elementos por seletor de CSS
let exemplo = document.querySelector("seletorCSS");
let exemplo1 = document.querySelectorAll("seletoresCSS");

// Selecionar por ID
let exemplo2 = document.getElementById("idDoElemento");
// Selecionar por classe
let exemplo3 = document.getElementsByClassName("classeDosElementos");

// adicionar eventos ao elemento
let btn1 = document.querySelector('#copy')

btn1.addEventListener('click', function(){
  console.log('Copiou');
})

//? busque na web um objeto (método) capaz de interagir com o clipboard, clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
btn1.addEventListener('click', function(){
  let textArea = document.querySelector('.text')
  textArea.select();
  document.execCommand('copy')
})

