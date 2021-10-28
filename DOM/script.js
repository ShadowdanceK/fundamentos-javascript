            //? Dom para iniciantes
            //>> o que é o DOM

            //? Document Object Model (DOM)

//* É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window)
//* window é o objeto global do browser.
//* possui diferentes métodos e propriedades.

window.innerHeight // retorna a altura do browser

//* Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

/* -------------------------------------------------------- */

            //? Window e Document

//* São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

window.alert('Isso é um alerta')
alert('isso é um alerta') // Também funciona.

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

//* Window é um objeto global,  por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

            //? Node

//* Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1')

titulo.innerText // Retorna o texto
titulo.classList // Retorna as classes
titulo.id // Retorna o ID
titulo.offsetHeight // Retorna a altura do elemento

function callback() {
  console.log('clicou em', titulo.innerText)
}

titulo.addEventListener('click', callback) // Ativa a função callback ao click no titulo.



