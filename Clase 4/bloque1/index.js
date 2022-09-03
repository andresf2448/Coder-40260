/* const array1 = [];
const numeros = [2, 3, 1, 5, 6, 7, 56, 7];
const nombres = ["andres", "camila", "mariano", "andrea"];
const valores = [true, false, false, true];
const varios = [1, true, "casa"]; */

/* console.log(nombres[3]);
console.log(numeros[3] + numeros[0]); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];

for(let index = 0; index < nombres.length; index++){
  alert(nombres[index]);
} */

/* const nombres = ["andres", "camila"];
nombres.push("mariano"); //agrega elementos al final del arreglo
nombres.unshift("lucas"); //agrega elementos al principio del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.pop(); //para sacar elementos del final
nombres.shift(); //para sacar elementos del principio
console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.splice(2, 2); // para eleminar elemntos del arreglo (desde donde, cuantos elementos)

console.log(nombres); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
console.log(nombres.join("++++++")); une en un unico string los elementos del arreglo separados por lo indicado
 */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const perritos = ["max", "firu", "zeus"];
const varios = perritos.concat(nombres); //concatena dos arreglos
console.log(varios); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
const copia = nombres.slice(1, 4); //crea una copia de un fragmento del arreglo
console.log(copia); */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.indexOf(nombre)); //busca la posicion de un elemento dentro de una arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
let nombre = prompt("Ingrese el nombre a encontrar su posicion");
alert(nombres.includes(nombre)); // valida si un elemento existe o no dentro del arreglo */

/* const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
nombres.reverse();

console.log(nombres); */

const nombres = ["andres", "camila", "mariano", "andrea", "lucas", "manuel"];
console.log(nombres.indexOf("lucas"));