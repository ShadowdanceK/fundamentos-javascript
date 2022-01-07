//? Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento:

const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

//* Resolução:

let totalTaxa = 0;
let totalRecebimento = 0;

transacoes1.forEach((element) => {
  if (element.descricao.startsWith("Taxa")) {
    function somar() {
      let taxa = element.valor.replace(/[R$ ]+/g, "");
      taxa = parseInt(taxa);
      totalTaxa += taxa;
    }
    somar();
    console.log(`A taxa total é R$ ${totalTaxa}`);
  } else {
    function somar() {
      let taxa = element.valor.replace(/[R$ ]+/g, "");
      taxa = parseInt(taxa);
      totalRecebimento += taxa;
    }
    somar();
    console.log(`O recebimento total é de R$ ${totalRecebimento}`);
  }
});

//? Retorne uma array com a lista abaixo
let transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");

//? Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let htmlArray1 = html.split("span").join("a");
//? Retorne o último caracter da frase
const frase3 = "Melhor do ano!";

let lastChar = frase3.charAt(frase3.length - 1);

//? Retorne o total de taxas
const transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxaTotal = 0;
transacoes.forEach((element) => {
  element = element.toLowerCase();
  element = element.trim();
  element = element.slice(0, 4);
  if (element === "taxa") {
    taxaTotal++;
  }
});
console.log(taxaTotal);
