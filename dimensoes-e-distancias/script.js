
            //? Height e Width

//* Estas são propriedades e métodos dos objetos Element e HTMLElement 

const section = document.querySelector('.animais-lista');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//* Mesma coisa para o Width, clientWidth

/* -------------------------------------------------------- */

            //? offsetTop e offsetLeft

//* Distância entre o topo do elemento e o topo da página

section.offsetTop;

//* Distância entre o canto esquerdo do elemento e o canto esquerdo da página

section.offsetLeft;

/* -------------------------------------------------------- */

            //? getBoundingClientRect()

//* Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const rect = section.getBoundingClientRect();
rect.height; // Height do elemento
rect.width; // Width do elemento
rect.top; // Distância entre o topo do elemento e o scroll

/* -------------------------------------------------------- */

            //? Window

window.innerWidth; // Width da janela
window.outerWidth; // Soma dev tools também
window.innerHeight; // Height da janela
window.outerHeight; // Soma a barra de endereço

window.pageYOffset; // Distância total do scroll horizontal
window.pageXOffset; // Distância total do scroll vertical

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px')
}

/* -------------------------------------------------------- */

            //? matchMedia()

//* Utilize um media-querie como no CSS para verificar a largura do browser.

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

/* -------------------------------------------------------- */

            //? Dica

//* Seleciona o elemento no inspetor (Browser/DOM)
//* Abra o console e digite $0 para selecionar o mesmo
//* Os elementos selecionados anteriormente são $1, $2 ...

