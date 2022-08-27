/* let nombre = "fabio";
let edad = 45;
let direccion = "AV"; */

/* 
estructura de un objeto
{key1: value1, ..., keyn: valuen}
*/

/* const persona = {
  nombre: "fabio", 
  edad: 45, 
  direccion: "AV",
  colorCabello: "Negro"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona.colorCabello);

let key = "nombre";
console.log(persona[key]);
console.log(persona["edad"]);
console.log(persona["direccion"]);
console.log(persona["colorCabello"]);

persona["nombre"] = "pepito";
persona.edad = 77;

console.log(persona); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

const persona1 = new Persona("mariana", 50, "AV");
console.log(persona1); */

/* function Producto(imagen, precio, nombre){
  this.imagen = imagen;
  this.precio = precio;
  this.nombre = nombre;
}

const producto1 = new Producto("http", 406000, "Monitor Sam...");
const producto2 = new Producto("httpbase", 74900, "Base...");
console.log(producto1.nombre);
console.log(producto2.nombre); */

/* function Usuario(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

let nombre = prompt("ingrese su nombre");
let edad = prompt("Ingrese su edad");
const usuario1 = new Usuario(nombre, edad); */

/* function Usuario(info){
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion;
  this.identidad = info.identidad;
  this.colorCabello = info.colorCabello;
  this.colorOjos = info.colorOjos;
  this.altura = info.altura;
  this.peso = info.peso;
}

const usuario1 = new Usuario(
  {
    nombre: "pepito grande",
    identidad: "DNI",
    edad: 34,
    direccion: "AV",
    colorOjos: "Azul",
    altura: 180,
    colorCabello: "Rojo",
    peso: 45
  }
)

console.log(usuario1); */


/* function Usuario(info){
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion;
  this.identidad = info.identidad;
  this.colorCabello = info.colorCabello;
  this.colorOjos = info.colorOjos;
  this.altura = info.altura;
  this.peso = info.peso;
  this.hablar = function (){console.log("Hola soy " + this.nombre);}
}

const usuario1 = new Usuario(
  {
    nombre: "pepito grande",
    identidad: "DNI",
    edad: 34,
    direccion: "AV",
    colorOjos: "Azul",
    altura: 180,
    colorCabello: "Rojo",
    peso: 45
  }
)

usuario1.hablar(); */

/* const persona = {
  nombre: "fabio", 
  edad: 45, 
  direccion: "AV",
  colorCabello: "Negro"
};

for(const key in persona){
  console.log(key);
  console.log(persona[key]);
} */

/* 
function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function (){console.log("Hola soy " + this.nombre);}
}
*/
/* class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log("Hola soy " + this.nombre);
  }
}

const persona1 = new Persona("Pepito", 45, "AV");
persona1.hablar(); */

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("monitor", 10000);
const producto2 = new Producto("computador", 100001);
console.log(producto1);
producto1.vender();
producto2.vender();
console.log(producto1);
console.log(producto2); */

/* class Producto{
  constructor(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}

for (let index = 0; index < 500; index++) {
  let nombre = prompt("Ingrese el nombre");
  let precio = prompt("Ingrese el precio");
  let cantidad = prompt("Ingrese la cantidad");

  const producto = new Producto(nombre, precio, cantidad);
} */
// const producto2 = new Producto("camputador", 10000, 5);
/* console.log(producto1);
producto1.vender();
console.log(producto1); */
