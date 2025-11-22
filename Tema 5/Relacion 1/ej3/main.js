import { arrArticulos } from "./modulos/articulos.mjs";

const main = () => {
  const contenedor = document.getElementById("contenedor-articulos");

  arrArticulos.forEach((articulo) => {
    // Contenedor de artículos
    const divArticulo = document.createElement("div");
    //Le doy la clase articulo para posterior diseño css
    divArticulo.classList.add("articulo");

    // Imagen
    const img = document.createElement("img");
    img.src = articulo.image;
    img.alt = articulo.title;
    divArticulo.appendChild(img);

    // Título
    const titulo = document.createElement("h3");
    titulo.textContent = articulo.title;
    divArticulo.appendChild(titulo);

    // Precio
    const precio = document.createElement("p");
    precio.textContent = `Precio: ${articulo.price}€`;
    divArticulo.appendChild(precio);

    // Categoría
    const categoria = document.createElement("p");
    categoria.textContent = `Categoría: ${articulo.category}`;
    divArticulo.appendChild(categoria);

    // Añadir al contenedor principal
    contenedor.appendChild(divArticulo);
  });
};

document.addEventListener("DOMContentLoaded", main);
