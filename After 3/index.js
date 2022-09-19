/* const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1500 },
  { id: 4, nombre: "zapato", precio: 300 },
];

localStorage.setItem("productos" , JSON.stringify(productos)); */

// const agregarStorage = (nombre, precio) => {
//   let productos = JSON.parse(localStorage.getItem("productos"));
//   let producto = {
//     id: productos.length + 1,
//     nombre: nombre,
//     precio: precio
//   };

//   productos.push(producto);
//   localStorage.setItem("productos" , JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = parseInt(prompt("Ingrese el precio del producto"));

// agregarStorage(nombre, precio);

// const cambiarPrecio = (nombre, precio) => {
//   let productos = JSON.parse(localStorage.getItem("productos"));

//   let producto = productos.find(item => item.nombre === nombre);
//   producto.precio = precio;
//   productos.find(item => item.nombre === nombre).precio = precio;
//   for (const producto of productos) {
//     if (producto.nombre === nombre) {
//       producto.precio = precio;
//     }
//   }

//   localStorage.setItem("productos" , JSON.stringify(productos));
// };
// cambiarPrecio(nombre, precio);

const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1500 },
  { id: 4, nombre: "zapato", precio: 300 },
];

let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log(inputs[0].value);

  let filtrados = productos.filter(item => item.precio > inputs[0].value);

  filtrados.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    contenedor.append(div);
  })
})

const eliminar = (nombre) => {
  let productos = JSON.parse(localStorage.getItem("productos"));
  productos = productos.filter(item => item.nombre != nombre);

  localStorage.setItem("productos" , JSON.stringify(productos));
};