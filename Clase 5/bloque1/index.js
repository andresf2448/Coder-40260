// getElementById
/* let app = document.getElementById("aplicacion");
console.log(app.innerHTML);
console.log(app.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText);
 */

// getElementsByClassName
/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

// getElementsByTagName
/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let contenedor = document.getElementById("contenedor");

let seccion = prompt("Ingrese la seccion deseada");

if (seccion === "carrito") {
  contenedor.innerHTML = "<h1>Bienvenido al carrito</h1>";
  contenedor.className = "amarillo";
} else if (seccion === "favoritos") {
  contenedor.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
  contenedor.className = "verde";
}else{
  contenedor.innerHTML = "<h1>Bienvenido a nuestra pagina</h1>";
} */

/* let contenedor = document.getElementById("contenedor");
// Creacion de nodos
let div = document.createElement("div"); //creacion del elemento
div.innerHTML = "<h1>Hola a todos</h1>"; //asignacion de contenido
document.body.append(div);
// contenedor.append(div);

 */
/* 
let contenedor = document.getElementById("contenedor");
contenedor.remove(); */

/* let productos = ["camisa", "gorra", "pantalon", "zapato", "medias", "correa"];
let contenedor = document.getElementById("contenedor");

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = producto;
  contenedor.append(li);
} */

/* let contenedor = document.getElementById("contenedor");
let producto = {id: 1, nombre: "camisa", precio: 1234};

contenedor.innerHTML = `
<h2>ID: ${producto.id}</h2>
<p>Producto: ${producto.nombre}</p>
<b>$${producto.precio}</b>
`; */

/* let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1500 },
  { id: 2, nombre: "pantalon", precio: 2000 },
  { id: 3, nombre: "gorra", precio: 700 },
  { id: 4, nombre: "zapato", precio: 100 },
];

let precio = parseInt(prompt("Ingrese el valor minimo"));
let filtrados = productos.filter(item => item.precio > precio);

for(const producto of filtrados){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
} */

let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1500 },
  { id: 2, nombre: "pantalon", precio: 2000 },
  { id: 3, nombre: "gorra", precio: 700 },
  { id: 4, nombre: "zapato", precio: 100 },
];
let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

let obj = {
  id: productos.length + 1,
  nombre: nombre,
  precio: precio
};
productos.push(obj);

for(const producto of productos){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
}