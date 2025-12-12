import { llamadaAPI } from "./api.js";

export function crearCard(personaje) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <h1>${personaje.name}</h1>
        <p>Sexo: ${personaje.gender}</p>
        <p>Estado: ${personaje.status}</p>
        <img src="${personaje.image}" alt="img personaje">
    `;

  return card;
}

export function crearCards(arrPersonajes) {
  const contenedor = document.getElementById("contenido");
  contenedor.classList.add("cards");

  contenedor.innerHTML = "";
  arrPersonajes.forEach((personaje) => {
    const card = crearCard(personaje);

    contenedor.appendChild(card);
  });
}

// Función para filtrar personajes por ID
export async function filtra(obFiltro) {
  const response = await llamadaAPI("https://futuramaapi.com/api/characters");
  const { atributo, valor } = obFiltro;

  // Filtrar por ID (personajes con ID menor al valor)
  return response.items.filter((personaje) => {
    if (atributo === "id") {
      return personaje.id < valor;
    }
    return true;
  });
}

export function devuelveGeneros(arrPersonajes) {
  const generos = new Set();
  arrPersonajes.forEach((personaje) => {
    generos.add(personaje.gender);
  });
  return Array.from(generos);
}
