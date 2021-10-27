//? Por qual motivo o código abaixo retorna com erros?

/* {
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas); */

//* Está passando parâmetros inválidos para o objeto console.log.

//? Como corrigir o erro abaixo?

/* function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6); */

//* A segunda função está tentando solicitar uma variável de escopo diferente a qual não tem acesso, uma solução para o problema seria realocar a variável dois para o escopo pai da função, permitindo assim que ambas tenham acesso a mesma.

//? O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

//* No bloco for, o var precisa ser substituido por let, para que permita a mudança de seus dados e ainda assim não vaze seu escopo, e não interfira na variável total.