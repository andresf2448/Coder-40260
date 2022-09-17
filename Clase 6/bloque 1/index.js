/* localStorage.setItem("numero", "6");
localStorage.setItem("valor", "true");
localStorage.setItem("arreglo", [1,2,3,4,5]);
localStorage.setItem("objeto", {nombre: "camilo", edad: 56}); */
/* let nombre = localStorage.getItem("nombre");
console.log(nombre); */

// sessionStorage.setItem("edad", 50);

/* for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);

  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
} */

/* localStorage.removeItem("nombre"); //eliminar un elemento del Storage
sessionStorage.removeItem("nombre");

localStorage.clear(); //eliminar el storage por completo
sessionStorage.clear(); */

/* localStorage.setItem("arreglo", [1,2,3,4,5]);
localStorage.setItem("objeto", {nombre: "camilo", edad: 56}); */

/* localStorage.setItem("arreglo", JSON.stringify([1,2,3,4,5]));
localStorage.setItem("objeto", JSON.stringify({nombre: "camilo", edad: 56})); */

/* let arreglo = JSON.parse(localStorage.getItem("arreglo"));
let objeto = JSON.parse(localStorage.getItem("objeto"));

console.log(arreglo);
console.log(objeto); */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const producto of productos) {
  guardarStorage(producto.id, JSON.stringify(producto));
}

localStorage.setItem("carrito", JSON.stringify(productos)); */

/* let carrito = JSON.parse(localStorage.getItem("carrito"));

let nombre = prompt("Ingrese el nombre del producto a buscar");
let producto = carrito.find(item => item.nombre === nombre);

let mensaje = `
  id: ${producto.id}
  nombre: ${producto.nombre}
  $${producto.precio}
`;

alert(mensaje); */

//session
/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  let mensaje = `Bienvenido nuevamente ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Por favor ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
} */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1000 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

localStorage.setItem("carrito", JSON.stringify(productos)); */
const eliminarProducto = (id) => {
  alert(id);
}

let contenedor = document.getElementById("contenedor");
let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}

carrito.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <button id="boton${producto.id}">Eliminar</button>
  `;

  contenedor.append(div);
  let eliminar = document.getElementById(`boton${producto.id}`);
  eliminar.addEventListener("click", () => eliminarProducto(producto.id))
});

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  alert("carrito eliminado");
  contenedor.innerHTML = "";
  localStorage.clear();
});