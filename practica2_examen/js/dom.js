import { llamadaAPI } from "./api.js";

/**
 * Función que genera cada card individualmente
 * TODO: Adaptar según la estructura de tu API
 */
export function crearCard(producto) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${producto.title}</h2>
    <p><b>${producto.price}€</b></p>
    <p>Categoría: ${producto.category}</p>
    <p>${producto.description}</p>
    <p>
      Valoración: ${producto.rating.rate} <br>
      Votos: (${producto.rating.count})
    </p>
    <img src="${producto.image}" alt="imagen producto">
  `;

  return card;
}

/**
 * Función que coordina la creación de las cards individuales
 */
export function crearCards(arrProductos) {
  const contenedor = document.getElementById("contenido");
  contenedor.classList.add("cards");
  contenedor.innerHTML = "";

  arrProductos.forEach((producto) => {
    const card = crearCard(producto);
    contenedor.appendChild(card);
  });
}

/**
 * Función que filtra productos según un criterio
 * TODO: Cambiar la URL por la de tu API
 */
export async function filtra(obFiltro) {
  const arrProductos = await llamadaAPI("http://localhost:3000/productos");
  const { atributo, valor } = obFiltro;

  return arrProductos.filter((producto) => {
    if (atributo === "price") {
      return producto.price < valor;
    } else if (atributo === "rate") {
      return producto.rating.rate < valor;
    } else if (atributo === "count") {
      return producto.rating.count < valor;
    }
  });
}

/**
 * Devuelve un array con las categorías únicas
 */
export function DevuelveGeneros(arrProductos) {
  const generos = new Set();
  arrProductos.forEach((producto) => generos.add(producto.category));
  return Array.from(generos);
}
