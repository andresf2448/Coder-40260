/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
}
*/

/* function saludar(){
  let apellido = prompt("Ingrese el nombre");
  let mensaje = `Hola ${apellido}`;
  alert(mensaje);
} */

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

/* function sumar(numero1, numero2){
  alert(numero1 + numero2);
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

sumar(num1, num2); */

/* function sumar(x, y){
  return x + y;
}

let resultado = 9;
console.log("retorno de la suma", resultado); */

/* function saludar(x, y){
  console.log("hola");
  return
  console.log("chao");
}

saludar(); */

/* function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    default:
      return "operacion no valida";
      break;
  }
}

let numero1 = parseInt(prompt("ingrese numero 1"));
let numero2 = parseInt(prompt("ingrese numero 2"));
let operacion = prompt("Ingrese la operacion");
let resultado = calculadora(numero1, numero2, operacion);

alert(resultado); */

//SCOPE
/* {
  let mensaje = "Hola";

}
console.log(mensaje); */

/* let resultado;
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado); */

/* function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
} */

/* const suma = function (a, b) {
  return a + b;
}; */

/* let suma = (a, b) => a + b;

console.log(suma(6, 8)); */

/* saludo();

function saludo(){

}

const saludo = () => {} */

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);