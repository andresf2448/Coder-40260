/* 
estructura del if
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

/* let nombre = "andres";

if(nombre === "andres"){
  console.log("entramos");
}

console.log("terminamos"); */
/* let nombre = prompt("ingrese su nombre").toLowerCase();

if(nombre === "felipe"){
  alert("Hola Felipe");
}

alert("terminamos"); */

/* 
estructura if else
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}
*/

/* let nombre = prompt("ingrese su nombre").toLowerCase();

if(nombre === "andrés"){
  alert("Hola Felipe");
}else{
  alert("quien eres?");
}

alert("terminamos"); */

/* let respuesta = prompt("terminaste la tarea?");

if(respuesta === "si"){
  alert("puede salir a jugar");
}else{
  alert("no puede salir a jugar");
} */

/* 
estructura del if else if
if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

/* let edad = parseInt(prompt("Ingrese su edad"));

if(edad < 15){
  alert("No puedes entrar");
}else if(edad < 18){
  alert("Puede entrar con un adulto");
}else{
  alert("puede entrar a la fiesta");
} */

// let valor = true;

/* 
&& es verdadero siempre que todas condiciones sean verdaderas de lo contrario es falso

|| es verdadero cuando al menos una de las condiciones sea verdadera de lo contrario es falso
*/

/* let nombre = prompt("Ingrese su nombre");

if((nombre != "") && (nombre === "andres" || nombre === "ANDRES")){
  alert("Hola andrés");
}else{
  alert("Nombre no identificado");
} */

/* let nombre = prompt("Ingrese su nombre");

if(nombre != ""){
  alert(`Hola ${nombre}`);
}else{
  alert("Nombre no identificado");
}
 */
let nombre = "camila";
let edad = 5;

console.log("Hola " + nombre);
console.log(`Hola ${nombre} tienes ${edad}`);