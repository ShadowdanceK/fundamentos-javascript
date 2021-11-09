//? Duplique o menu e adicione ele em copy

let menuClone = menu.cloneNode(true);

const footer = document.querySelector('footer');
const practice = footer.querySelector('.practice');

footer.insertBefore(menuClone, practice);

//? Selecione o primeiro DT da dl de Faq

let faqLista = document.querySelector('.faq-lista');
let primeiraPergunta = faqLista.children[0];

//? Selecione o DD referente ao primeiro DT

primeiraPergunta.nextElementSibling;

//? Substitua o conteúdo html de .faq pelo de .animais

const animaisClone = animais.cloneNode(true);
const faq = document.querySelector('.faq');

faq.replaceWith(animaisClone);

