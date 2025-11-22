import { arrArticulos } from "./modulos/articulos.mjs";

const main = () => {
  // Cargo estilos dinámicamente
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "style.css";
  document.head.appendChild(link);

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
    precio.textContent = `${articulo.price}€`;
    divArticulo.appendChild(precio);

    // Categoría
    const categoria = document.createElement("p");
    categoria.textContent = articulo.category;
    divArticulo.appendChild(categoria);

    // Añadir al contenedor principal
    contenedor.appendChild(divArticulo);
  });
};

document.addEventListener("DOMContentLoaded", main);
