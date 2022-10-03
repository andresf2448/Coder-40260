/* let nuevaCopia;

const cargarStorage = async () => {
  let response = await fetch("./data.json");
  let data = await response.json();

  localStorage.setItem("carrito", JSON.stringify(data));
};
 */

let container = document.getElementById("container");

const getCharacters = async () => {
  // let response = await fetch("https://rickandmortyapi.com/api/character");
  // let data = await response.json();
  //name, status, gender, image
  let response = await axios("https://rickandmortyapi.com/api/character");
  let data = response.data.results;
  let dataRenderizada = data.filter(item => item.status === "Dead");
  dataRenderizada.forEach(character => {
    const item = document.createElement("div");
    item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
      <hr/>
    `;

    container.append(item);
  });
};

getCharacters();