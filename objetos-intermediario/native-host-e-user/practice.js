//? Liste 5 objetos nativos
String;
Object;
Number;
Array;
Function;

//? Liste 5 objetos do browser
//*DomList; HTMLCollection; Element; NodeList; Document;

//? Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
//* webkitHidden; webkitVisibilityState

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
