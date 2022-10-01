/* 
//setTimeout
setTimeout(funcion, tiempo);
*/
/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 3000);

console.log("final"); */

/* let boton = document.getElementById("boton");
let saludo = document.getElementById("saludo");

boton.addEventListener("click", () => {
  saludo.classList.add("color");

  setTimeout(() => {
    saludo.classList.remove("color");
  }, 3000);
}); */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000);
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000);
} */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */

//setInterval

/* setInterval(() => {
  console.log("hola");
}, 3000); */

/* let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000);
 */

//PROMESAS
/* new Promise((resolve, reject) => {
  //codigo o cuerpo de la promesa
}); */

/* const futuro = (valor) => {
  return new Promise((resolve, reject) => {
    valor ? resolve(["anita", "sofia", "andres"]) : reject("Promesa rechazada");
  });
};

futuro(true)
  .then((reponse) => {
    reponse.forEach((element) => {
      console.log(element);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("terminamos el proceso")); */

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "zapato", precio: 800 },
  { id: 4, nombre: "gorra", precio: 1500 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      // reject("ocurrio un error");
    }, 3000);
  });
};

traerProductos()
.then(response => {
  response.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item. id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    document.body.append(div);
  });
})
.catch(error => console.log(error));