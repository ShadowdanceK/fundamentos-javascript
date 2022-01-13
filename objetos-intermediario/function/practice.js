//? Retorne a soma total de caracteres dos parágrafos no HTML utilizando reduce
const paragrafos = document.querySelectorAll("p");

const caracteresTotal = Array.prototype.reduce.call(
  paragrafos,
  (acc, p) => {
    const paragrafo = p.innerText.length;
    return (acc += paragrafo);
  },
  0
);

console.log(caracteresTotal);

//? Crie uma função que retorne novos elementos html, com os seguintes parâmetros: tag, classe e conteúdo
function NewElements(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? (element.innerHTML = conteudo) : null;
  return element;
}
console.log(NewElements("p", 0, false));

//? Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteúdo continuará dinâmico

const newTitle = NewElements.bind(null, "h1", "titulo");
console.log(newTitle("teste"));
