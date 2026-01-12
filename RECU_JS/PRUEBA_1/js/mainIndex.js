import { llamadaApi } from "./api.js";
import { verificaLogin, cerrarSesion } from "./auth.js";
import { creaCards, devuelveGeneros, filtra } from "./dom.js";
import { Carrito } from "./Carrito.js";

const main = async () => {
  //Compruebo que hay usuario logueado sino redirigo a login
  verificaLogin();

  //Listenner para boton de logout
  const btnCerrarSesion = document.getElementById("logout");
  btnCerrarSesion.addEventListener("click", cerrarSesion);

  //datos
  const res = await llamadaApi("https://dummyjson.com/products?limit=0"); //el limit es para que no me traiga todos los productos
  const arrProductos = res.products;

  //Creo carrito
  const carrito = new Carrito();

  function renderizarCarrito() {
    const contentCarrito = document.getElementById("content-carrito");
    contentCarrito.innerHTML = "";
    const fragmentCarrito = carrito.dibujaCarrito();
    contentCarrito.appendChild(fragmentCarrito);
  }

  renderizarCarrito();

  //Creo cards
  creaCards(arrProductos);

  //Filtro por categoria
  const categorias = devuelveGeneros(arrProductos);
  //console.log("Categorias: " + [...categorias].join(", "));

  const selectCategoria = document.getElementById("filtro-categoria");
  if (selectCategoria) {
    categorias.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      selectCategoria.appendChild(option);
    });
  }

  //Click en las cards
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // IMPORTANTE: Convertimos a Number el dataset.id que denimos en creaCard() porque dummyjson usa IDs numéricos
      const idSeleccionado = Number(card.dataset.id);

      const producto = arrProductos.find((p) => p.id === idSeleccionado);

      if (producto) {
        carrito.add(producto);
        renderizarCarrito();
      }
    });
  });

  //CLICK DENTRO DEL CARRITO para gestion de cada producto/linea
  const contentCarrito = document.getElementById("content-carrito");

  contentCarrito.addEventListener("click", (e) => {
    const accion = e.target.dataset.accion;
    const id = Number(e.target.dataset.id);

    if (!accion) return;

    switch (accion) {
      case "sumar":
        const item = carrito.articulos.find((i) => i.id === id);
        if (item) carrito.add(item);
        break;

      case "restar":
        carrito.restar(id);
        break;

      case "eliminar":
        carrito.eliminar(id);
        break;

      case "vaciar":
        carrito.vaciar();
        break;
    }

    renderizarCarrito();
  });

  //Filtros
  const filtros = document.getElementById("filtros");
  filtros.addEventListener("submit", async (e) => {
    e.preventDefault();
    const obFiltro = {
      atributo: e.target.atributo.value,
      valor: Number(e.target.valor.value),
    };
    const arrProductosFiltrados = await filtra(obFiltro);

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    creaCards(arrProductosFiltrados);
  });
};

document.addEventListener("DOMContentLoaded", main);
