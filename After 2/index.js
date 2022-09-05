/* const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "zapato", precio: 1300 },
  { id: 4, nombre: "gorra", precio: 2000 },
]; */

/* let precio = productos.map(item => item.precio);
console.log(precio);

let nombres = productos.map(item => item.nombre);
console.log(nombres);

let nuevosPrecios = productos.map(item => {
  return {
    nombre: item.nombre,
    precio: item.precio + 5
  };
});

console.log(nuevosPrecios); */

const productos = [
  { id: 1, nombre: "pantalon", precio: 1000, status: "no disponible" },
  { id: 2, nombre: "camisa", precio: 700, status: "disponible" },
  { id: 3, nombre: "zapato", precio: 1300, status: "no disponible" },
  { id: 4, nombre: "gorra", precio: 2000, status: "disponible" },
];
/* 
let nombre = prompt("Ingrese el nombre del producto");
let producto = productos.find(item => item.nombre === nombre);

let mensaje = `El producto ${nombre} tiene un precio de ${producto.precio}`;
alert(mensaje); */

let precio = parseInt(prompt("ingrese el rango de precio que desea buscar"));
let resultado = productos.filter(item => item.precio > precio && item.status === "disponible");

resultado.forEach(item => alert(item.nombre));
