/* 
fetch(url, config);
*/
/* let contenedor = document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <h2>userId: ${item.userId}</h2>
      <p>${item.title}</p>
      <p>${item.body}</p>
      <hr/>
    `;

    contenedor.append(li);
  });
}); */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "probando",
    body: "probando la primera publicacion",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data)); */

/* let contenedor = document.getElementById("contenedor");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

      contenedor.append(li);
    });
  }); */

const conseguirProductos = async () => {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await reponse.json();
    let contenedor = document.getElementById("contenedor");

    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <h2>userId: ${item.userId}</h2>
      <p>${item.title}</p>
      <p>${item.body}</p>
      <hr/>
    `;

      contenedor.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

conseguirProductos();
