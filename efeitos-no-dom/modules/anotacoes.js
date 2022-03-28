//? Módulos

//! Manutenção
//* Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

//! Compartilhamento
//* O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

//! Nativo no ES6+
//* Ferramentas que permitem dividirmo o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.

/* -------------------------------------------------------- */

//? Modules ES6

//* Basta adicionar type='module' na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

// <script type="module" src="js/script.js"></script>

// Arquivo scroll-suave.js
export default function scrollSuave() {}

// Arquivo script.js
import scrollSuave from "./scroll-suave.js";
scrollSuave();

//* Geralmente um valor por módulo.

/* -------------------------------------------------------- */

//? Named exports

//* Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

// Arquivo scroll.js
export function scrollSuave() {}
export function scrollAnimacao() {}

// Arquivo script.js
import { scrollSuave, scrollAnimacao } from "./scroll.js";
scrollSuave();
scrollAnimacao();

// Importe todos os valores em um objeto
import * as scroll from "./scroll.js;";
scroll.scrollSuave();
scroll.scrollAnimacao();

/* -------------------------------------------------------- */

//? Valores do export

//* Podemos exportar objetos, funções, classes, números, strings e mais.

// Arquivo configuracao.js
export function scrollSuave() {}
export const ano = 2000;
export const obj = { nome: "Ford" };
export const str = "Frase";
export class Carro {}

// Arquivo script.js
import * as conf from "./configuracao.js";
conf.str;
conf.obj;
vonf.ano;

/* -------------------------------------------------------- */

//? Características

//! Strict mode
//* 'use strict' por padrão em todos os arquivos.

//! Variáveis ficam no module apenas
//* Não vazam para o escopo global.

//! This fora de um objeto faz referência a undefined
//* Ao invés de fazer referência ao window

//! Assíncrono

/* -------------------------------------------------------- */

//? use strict

//* O modo estrito previne algumas ações consideradas como erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.

("use strict");
nome = "Ford"; // Erro, variável global
delete Array.prototype; // Erro, não deletável
window.top = 200; // Erro, não pode mudar
// const arguments = 3.14; //! Escrever em palavra reservada

//! Por padrão todo module está no modo estrito.
