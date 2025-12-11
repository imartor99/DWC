import { llamadaAPI } from "./api.js";

/**
 * Funcion que genera cada card individualmente
 */
export function crearCard(producto) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
            <h2>${producto.title}</h2>

            <p><b>${producto.price}€</b></p>

            <p>Categoria: ${producto.category}</p>

            <p>${producto.description}</p>

            <p> 
                Valoracion: ${producto.rating.rate} <br>
                Votos: (${producto.rating.count})
            </p>

            <img src="${producto.image}" alt="imagen producto">
        `;

  return card;
}
/**
 * Funcion que coordina la creacion de las card individuales dentro del contenedor .cards
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
 * Funcion que en base a un objeto con un atributo y un valor del mismo, filtra cumpliedo ese criterio
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
 * Recibe el array de todos los productos y devuelve un array
 */
export function DevuelveGeneros(arrProductos) {
  const generos = new Set();
  arrProductos.forEach((producto) => generos.add(producto.category));
  return Array.from(generos);
}
