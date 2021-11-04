//? Verifique a distância da primeira imagem em relação ao topo da página

let firstImage = document.querySelector('img');
let distancia = firstImage.offsetTop;
console.log(distancia);

//? Retorne a soma da largura de todas as imagens

function somaImagens() {
const imgs = document.querySelectorAll('img');
let soma = 0;
  imgs.forEach((item) => {
    const img = item.getBoundingClientRect();
    let largura = img.width;
    soma = soma + largura;
    console.log( item, soma);
  })
};

window.onload = function() {
  somaImagens();
};
// 966

//? Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
  let dimensao = link.getBoundingClientRect();
  let width = dimensao.width;
  let height = dimensao.height;
  if (width && height >= 48) {
    console.log('Possui o mínimo recomendado');
  } else {
    console.log('Não possui o mínimo recomendado')
  }
})

//? Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');
let hd = window.matchMedia('(max-width: 720px)').matches;

if (hd) {
  menu.classList.add('menu-mobile');
}