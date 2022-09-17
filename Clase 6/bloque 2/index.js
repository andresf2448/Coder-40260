/* let nombre = "andres";
const NUMERO = 5; */

/* let nombre = prompt("Ingrese su nombre");

if(nombre != "" && nombre === "andres"){
  alert("Hola andres");
}else if(nombre != "" && nombre === "carlitos"){
  alert("Hola carlitos");
}else{
  alert("Quien eres?");
} */
/* let usuarios = ["andres", "camila", "pepito"];
let usuario = prompt("Ingrese su nombre");

while(!usuarios.includes(usuario)){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese su nombre");
}

let mensaje = `Bienvenid@ ${usuario}`;
alert(mensaje); */

/* for(let i = 0; i < 10; i++){
  console.log(i);
} */
/* function suma(x, y) {
  return x + y;
} */
/* const suma = (x, y) => x + y;

console.log(suma(4, 5)); */

/* let persona = {
  nombre: "jaimito",
  edad: 45,
  direccion: "AV"
};

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.direccion); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("pepito", 50, "AV");
console.log(persona1);
console.log(persona1.edad);
console.log(persona1.nombre);
console.log(persona1.direccion); */

/* class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log(`soy ${this.nombre}`);
  }
}

const persona1 = new Persona("pepito", 50, "AV");
console.log(persona1.edad);
console.log(persona1.nombre);
console.log(persona1.direccion);
persona1.hablar(); */

/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
]; */

// productos.forEach(item => console.log(item));
/* let encontrado = productos.find(item => item.producto === "Panasdfasdf");
console.log(encontrado); */

/* let filtrados = productos.filter(item => item.precio > 60);
console.log(filtrados); */

//nombres
//precios
//los mismos objetos pero con el precio modificado

/* let newArray = productos.map((producto) => producto.producto);
console.log(newArray);

let newArray2 = productos.map((producto) => producto.precio);
console.log(newArray2);

let newArray3 = productos.map((producto) => producto.precio * 8);
console.log(newArray3); */

let newArray4 = productos.map((item) => {
  return {
    id: item.id,
    producto: item.producto,
    precio: item.precio * 8,
  };
});
console.log(newArray4);

/* 
localStorage
sessionStorage
setItem(clave, valor) //guardar elemento en el storage
getItem(clave)  //traer elemento del storage por su clave
removeItem(clave) //eleminiar elemento del storager por su clave
clear() //eliminar todo el storage
JSON.stringify(elemento) //convertir un elemento en formato json
JSON.parse(elemento) //para convertir de formato json a el elemento respectivo en javascript
.key(numero) //consigue la clave asociada a la posicion pasada
*/

//formulario
/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;
  let objeto = {
    nombre: inputs[0].value
  }
  localStorage.setItem("persona", JSON.stringify(objeto));
}) */
