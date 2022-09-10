/* const respuesta = () => {
  console.log("Hola click");
};

let boton = document.getElementById('boton');

let evento = prompt("Ingrese el evento"); */
// boton.addEventListener(evento, respuesta); // primera forma
// boton.onclick = respuesta; // segunda forma


/* const respuesta = (nombre) => {
  console.log("Hola click " + nombre);
};

let boton = document.getElementById('boton');
boton.addEventListener("click", () => respuesta("mariano")); */

//EVENTOS DEL MOUSE
// let saludo = document.getElementById("saludo");
// let boton = document.getElementById('boton');

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
/* boton.addEventListener("mousedown", () => {
  saludo.className = "amarillo";
});

boton.addEventListener("click", () => {
  saludo.className = "verde";
});

boton.addEventListener("mouseover", () => {
  saludo.className = "rojo";
});

boton.addEventListener("mouseout", () => {
  saludo.className = "azul";
}); */

//EVENTOS PARA EL TECLADO
// let saludo = document.getElementById("saludo");
// let nombre = document.getElementById("nombre");

// nombre.addEventListener("keyup", () => console.log("keyup"));
// nombre.addEventListener("keydown", () => console.log("keydown"));

/* nombre.addEventListener("keyup", (e) => {
  if(e.key === "a"){
    saludo.className = "rojo";
  }else if(e.key === "s"){
    saludo.className = "azul";
  }else if(e.key === "d"){
    saludo.className = "amarillo";
  }else{
    saludo.className = "verde";
  }
}); */

/* nombre.addEventListener("change", () => {
  if(!nombre.value.includes("@")){
    saludo.className = "rojo";
  }else{
    saludo.className = "azul";
  }
}); */

/* nombre.addEventListener("input", () => {
  console.log(nombre.value);
});
 */

/* let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  if(!inputs[0].value.includes("@")){
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = "correo incorrecto";
    div.className = "rojo";

    contenedor.append(div);
  }else{
    contenedor.innerHTML = "";
  }
}) */

let productos = [];
let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;
  productos.push(inputs[0].value);

  productos.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML = producto;
    contenedor.append(div);
  })

  inputs[0].value = "";
})