import { llamadaAPI } from "./api.js";
import { crearCard, crearCards, filtra, devuelveGeneros } from "./dom.js";
import { verificarLogin, cerrarSesion } from "./auth.js";
import { Carrito } from "./carrito.js";

const main = async () => {
  const usuarioActual = verificarLogin();

  const titulo = document.querySelector("h1");
  titulo.textContent = `Bienvenido ${usuarioActual.username}`;

  const btnCerrarSesion = document.getElementById("btnCerrarSesion");
  btnCerrarSesion.addEventListener("click", cerrarSesion);

  const carrito = new Carrito();
  function renderizarCarrito() {
    const contentCarro = document.getElementById("carrito");
    contentCarro.innerHTML = "";
    const fragmentCarrito = carrito.dibujarCarrito();
    contentCarro.appendChild(fragmentCarrito);
  }

  renderizarCarrito();

  const arrPersonajes = await llamadaAPI(
    "https://futuramaapi.com/api/characters"
  );

  crearCards(arrPersonajes.items);

  // Rellenar el select de géneros
  const selectGenero = document.getElementById("genero");
  const generos = devuelveGeneros(arrPersonajes.items);

  generos.forEach((genero) => {
    const opcion = document.createElement("option");
    opcion.value = genero;
    opcion.textContent = genero;
    selectGenero.appendChild(opcion);
  });

  // Añadir eventos click a las cards para añadir al carrito
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const personaje = arrPersonajes.items[index];
      carrito.add(personaje);
      renderizarCarrito();
      alert(`${personaje.name} añadido al carrito`);
    });
  });

  // Evento para el formulario de filtros
  const formulario = document.getElementById("formFiltros");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const atributo = document.getElementById("atributo").value;
    const valor = parseInt(document.getElementById("valor").value);
    const generoSeleccionado = document.getElementById("genero").value;
    const obFiltro = { atributo, valor };

    let personajesFiltrados = await filtra(obFiltro);

    // Filtrar por género si se seleccionó uno
    if (generoSeleccionado !== "") {
      personajesFiltrados = personajesFiltrados.filter(
        (personaje) => personaje.gender === generoSeleccionado
      );
    }

    if (personajesFiltrados.length === 0) {
      alert("No hay personajes con esos filtros");
    } else {
      crearCards(personajesFiltrados);
    }
  });

  // Evento para el botón "Mostrar Todos"
  const btnMostrarTodos = document.getElementById("btnMostrarTodos");

  btnMostrarTodos.addEventListener("click", async () => {
    const response = await llamadaAPI("https://futuramaapi.com/api/characters");
    crearCards(response.items);
  });
};

document.addEventListener("DOMContentLoaded", main);
