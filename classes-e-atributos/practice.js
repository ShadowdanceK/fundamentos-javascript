//? Adicione a classe ativo a todos os itens do menu

let menuLi = menu.querySelectorAll('.menu a');
menuLi.forEach((item) => item.classList.add('ativo'));

//? Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuLi.forEach(item => item.classList.toggle('ativo'));
menuLi[0].classList.add('ativo');

//? Verifique se as imagens possuem o atributo alt

let imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log( img, possuiAtributo)
});

//? Modifique o href do link externo no menu

let linkExterno = document.querySelector('a[href^="https://pt.stackoverflow"]');

linkExterno.setAttribute('href', 'https://www.google.com/');

