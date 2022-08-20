/* 
estructura del for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
// i = i + 1     i++

/* for(let i = 10; i < 100; i = i + 5){
  console.log(i);
} */

/* let numero = parseInt(prompt("ingrese un numero"));

for(let i = 0; i <= 10; i++){
  let multiplicacion = numero * i;
  let mensaje = `${numero} * ${i} = ${multiplicacion}`;

  alert(mensaje);
} */

/* for(let turno = 1; turno <= 10; turno++){
  let nombre = prompt("Ingrese su nombre para asignar el turno");
  let mensaje = `Turno #${turno} Nombre: ${nombre}`;
  alert(mensaje);
}

alert("No tenemos mas turnos"); */

/* for(let i = 0; i <= 10; i++){
  console.log(i);
  if(i === 5){
    break;
  }
}

console.log("terminamos"); */

/* for(let i = 0; i <= 10; i++){
  if(i === 5){
    continue;
  }

  console.log(i);
}

console.log("terminamos"); */

/* 
estructura del while
while(condicion){
  codigo a repetir mientras las condicion sea verdadera
}
*/

/* let repetir = true;

while(repetir){
  console.log("Hola");
} */

/* let usuario = prompt("Ingrese su usuario");

while(usuario != "andres"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese su usuario");
}

alert("Bienvenid@"); */

/* let i = 0;

while(i < 100){
  console.log("Hola");
  i++;
} */

/* 
estructura del do while
do{
  codigo a ejecutar por primera vez y cuando la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

/* while(repetir){
  console.log("Entramos");
} */

/* do{
  console.log("Entramos");
}while(repetir); */

/* 
estructura del switch
switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor sea valor1
    break;
  
  case valor2:
    codigo a ejecutar en caso de que valor sea valor2
    break;

  default:
    codigo a ejecutar en caso de que valor no coincida con ninguno de los anteriores
    break;
}
*/

/* let moneda = "usd";

switch (moneda) {
  case "cop":
    console.log("Moneda de colombia");
    break;

  case "clp":
    console.log("Moneda de chile");
    break;

  case "ars":
    console.log("Moneda de argentina");
    break;

  default:
    console.log("Moneda no identificada");
    break;
} */

// let entrada = prompt("Ingresar un nombre").toUpperCase();

// while(entrada != "ESC" ){
//    switch (entrada) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert("¿QUIÉN SOS?")
//            break;
//    }
//    entrada = prompt("Ingresar un nombre");
// }

// alert("Gracias!!!");