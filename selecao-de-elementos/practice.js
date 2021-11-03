//? Retorne no console todas as imagens do site

const allImages = document.querySelectorAll('img')
console.log(allImages)

//? Retorne no console apenas as imagens que começaram com a palavra imagem

const someImages = document.querySelectorAll('[src^="img/imagem"]')
console.log(someImages)

//? Selecione todos os links internos (onde o href começa com #)

const internalLink = document.querySelectorAll('[href^="#"]')

//? Selecione o primeiro h2 dentro de .animais-descricao

const select = document.querySelector('.animais-descricao h2')

//? Selecione o último p do site

const paragraph = document.querySelectorAll('p')
console.log(paragraph[--paragraph.length])
