//? Retorne um número aleatório entre 1050 e 2000
let random = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(random);

//? Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

const arrayNumeros = numeros.split(", ");
const maxNumber = Math.max(...arrayNumeros);
console.log(maxNumber);

//? Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total
let listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function precoFormatado(valor) {
  valor = valor
    .trim()
    .toLocaleUpperCase()
    .replace(/[,]+/g, ".")
    .replace("R$ ", "");
  valor = parseFloat(valor).toFixed(2);
  valor = +valor;
  return valor;
}

let somaTotal = 0;
listaPrecos.forEach((element) => {
  somaTotal += precoFormatado(element);
});

console.log(
  somaTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
