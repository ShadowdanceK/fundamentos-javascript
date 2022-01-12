//? Selecione cada curso no HTML e retorne uma array com objetos contendo o título, descrição, aulas e horas de cada curso
let section = document.querySelectorAll("section");
section = Array.from(section);

const sectionInfo = section.map((section) => {
  const elementosSecundarios = section.children;
  return {
    titulo: elementosSecundarios[0].innerText,
    descricao: elementosSecundarios[1].innerText,
    aulas: elementosSecundarios[2].innerText,
    horas: elementosSecundarios[3].innerText,
  };
});
console.log(sectionInfo);

//? Retorne uma lista com os números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];

const maisQue100 = numeros4.filter((n) => n > 100);
console.log(maisQue100);

//? Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const possuiBaixo = instrumentos.some((instrumento) => instrumento === "Baixo");

//? Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
];

let soma = 0;
const valorTotal = compras.map((compra) => {
  let preco = +compra.preco.replace(/[R$ ]+/g, "").replace(",", ".");
  return (soma += preco);
});
console.log(valorTotal);

const valorTotal1 = compras.reduce((acc, compra) => {
  let preco = +compra.preco.replace(/[R$ ]+/g, "").replace(",", ".");
  return (acc += preco);
}, 0);
console.log(valorTotal1);
