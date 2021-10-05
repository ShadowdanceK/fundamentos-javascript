// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var compararIdade = 22;
var idadex = 32;
if (compararIdade > idadex) {
  console.log('é maior');
} else if (compararIdade === idadex){
  console.log('é igual');
} else {
  console.log('é menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);//R= 3
//console.log(5 - ' ');


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//R= true
var idade = 28;//R= true
var possuiDoutorado = false;//R= false
var empregoFuturo;//R= false
var dinheiroNaConta = 0;//R= false 
//console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
  console.log('brasil tem mais habitantes');
} else {
  console.log('brasil tem menos habitantes');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//R= falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//R= Cão