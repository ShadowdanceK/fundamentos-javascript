//? Mostre no console cada parágrado do site

let paragraph = document.querySelectorAll('p')
paragraph.forEach(item => {
  console.log(item)
})

//? Mostre o texto dos parágrafos no console

paragraph.forEach(item => {
  console.log(item.innerText)
})

//? Como corrigir os erros abaixo:

/* const imgs1 = document.querySelectorAll('img');

imgs1.forEach(item, index => {
  console.log(item, index);
});

let a = 0;
imgs1.forEach( => {
  console.log(a++);
});

imgs1.forEach(() => a++); */

//* Solução:

const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item, index) => {
  console.log(item, index);
});

let a = 0;
imgs1.forEach(() => {
  console.log(a++);
});

imgs1.forEach(() => a++); 

console.log(a)