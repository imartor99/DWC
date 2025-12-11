import { verificarLogin, cerrarSesion } from "./auth.js";
import { llamadaAPI } from "./api.js";
import { crearCards, filtra, DevuelveGeneros } from "./dom.js";
import { Carrito } from "./carrito.js";

const main = async () => {
  //Verifico Login y añado username al titulo
  const usuarioActual = verificarLogin();
  const titulo = document.querySelector("h1");
  titulo.textContent = `Bienvenido ${usuarioActual.username}`;

  //Creo instancia Carrito
  const carrito = new Carrito();
  function renderizarCarrito() {
    const contentCarro = document.getElementById("carrito");
    contentCarro.innerHTML = "";
    const fragmentCarrito = carrito.dibujarCarrito();
    contentCarro.appendChild(fragmentCarrito);
  }

  renderizarCarrito();

  //Añado evento al boton de cerrar sesion
  const btnCerrarSesion = document.getElementById("btnCerrarSesion");
  btnCerrarSesion.addEventListener("click", cerrarSesion);

  //Llamo a la API y creo las cards
  const arrProductos = await llamadaAPI("http://localhost:3000/productos");

  crearCards(arrProductos);

  //añado evento click a la card para añadir al carrito
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const producto = arrProductos[index];
      carrito.add(producto);
      renderizarCarrito();
    });
  });

  //Añado eventos a los botones de filtro y mostrar todos
  const formulario = document.getElementById("formFiltros");
  const botonMostrarTodos = document.getElementById("btnMostrarTodos");
  const selectCategoria = document.getElementById("categoria");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    //Obtengo los valores del formulario
    const atributo = document.getElementById("atributo").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const categoriaSelect = selectCategoria.value;
    //Creo el objeto de filtro
    const obFiltro = { atributo, valor };

    //Filtro los productos y lo declaro con let xq le cambio el valor luego
    let arrProductosFiltrados = await filtra(obFiltro);

    if (categoriaSelect !== "") {
      arrProductosFiltrados = arrProductosFiltrados.filter(
        (producto) => producto.category === categoriaSelect
      );
    }

    if (arrProductosFiltrados.length === 0) {
      alert("No hay productos que cumplan con el filtro");
    } else {
      crearCards(arrProductosFiltrados);
    }
  });

  //Hago un boton con el evento de mostrar todos los productos de nuevo para resetear filtros
  botonMostrarTodos.addEventListener("click", async () => {
    const arrProductos = await llamadaAPI("http://localhost:3000/productos");
    crearCards(arrProductos);
  });

  //Relleno el select de categorias
  const categorias = DevuelveGeneros(arrProductos);

  categorias.forEach((categoria) => {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    selectCategoria.appendChild(opcion);
  });

  //   // Prueba de DevuelveGeneros (para demostrar que funciona)
  //   const categorias = DevuelveGeneros(arrProductos);
  //   console.log("Categorías disponibles:", categorias);
};

document.addEventListener("DOMContentLoaded", main);
