//? Remova o primeiro valor de comidas e coloque em uma variável,remova o último valor de comidas e coloque em uma variável, adicione 'Arroz' ao final da array, adicione 'Peixe' e 'Batata' ao início da array
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

const firstFood = comidas.shift();
const lastFood = comidas.pop();
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");

console.log(comidas);

//? Arrume os estudantes em ordem alfabética, inverta a ordem dos estudantes, verifique se Joana faz parte dos estudantes, verifique se Juliana faz parte dos estudantes
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

estudantes.sort();
estudantes.reverse();
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

//? Substitua section por ul e div com li, utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("section").join("ul");
html = html.split("div").join("li");

console.log(html);

//? Remova o último carro, mas antes de remover salve a array original em outra variável
const carros2 = ["Ford", "Fiat", "VW", "Honda"];

let carrosOriginal = carros2.slice();
carros2.pop();

console.log(carrosOriginal);
