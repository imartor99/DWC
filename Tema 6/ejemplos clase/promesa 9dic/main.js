const generaCards = (data) => {
  const contenedor = document.getElementById("contenido");
  data.forEach((personaje) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}" />
        <p>Especie: ${personaje.species}</p>
        <p>Género: ${ personaje.gender}</p>
      `;
    contenedor.appendChild(card);
  });
};

export const devuelvePersonajes = async () => {
  const api_url = "https://futuramaapi.com/api/characters/";

  const personajes = await fetch(api_url).then((result) => result.json());

  console.log("personajes: ", personajes);

  generaCards(personajes.items);
};

const main = () => {
  devuelvePersonajes();
};

document.addEventListener("DOMContentLoaded", main);
