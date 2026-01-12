import { llamadaApi } from "./api.js";

export function creaCard(producto) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.dataset.id = producto.id;
  card.innerHTML = `
    <h1> ${producto.title}</h1>

    <img src="${producto.thumbnail}" alt="imagen producto">

    <p>Precio: ${producto.price}</p>

    <p>Descripción: ${producto.description}</p>

    <p>Rating: ${producto.rating}</p>

    <p>Stock: ${producto.stock} </p>

    `;

  return card;
}

export function creaCards(arrProductos) {
  const contenedor = document.getElementById("contenedor");
  contenedor.classList.add("cards");

  arrProductos.forEach((producto) => {
    const card = creaCard(producto);
    contenedor.appendChild(card);
  });
}

export async function filtra(objFiltro) {
  const res = await llamadaApi("https://dummyjson.com/products?limit=0");
  const productos = res.products;

  if (objFiltro.atributo === "price") {
    const arrPrecio = productos.filter((p) => p.price < objFiltro.valor);

    return arrPrecio;
  } else if (objFiltro.atributo === "rating") {
    const arrRating = productos.filter((p) => p.rating < objFiltro.valor);

    return arrRating;
  } else if (objFiltro.atributo === "stock") {
    const arrStock = productos.filter((p) => p.stock < objFiltro.valor);

    return arrStock;
  }
}

export function devuelveGeneros(arrProductos) {
  const categorias = new Set();

  arrProductos.forEach((p) => {
    const categoria = p.category;
    categorias.add(categoria);
  });

  return categorias;
}
