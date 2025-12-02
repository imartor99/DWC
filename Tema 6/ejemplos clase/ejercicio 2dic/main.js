function obtenerPersonajes(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => json.items)
    .catch((error) => {
      console.error("Error al obtener personajes:", error.message);
    });
}

function obtenerPersonajePorId(id) {
  return fetch(`https://futuramaapi.com/api/characters/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error al obtener personaje:", error.message);
    });
}

function crearCard(personaje) {
  const divPersonaje = document.createElement("div");
  divPersonaje.classList.add("personaje");

  divPersonaje.innerHTML = `
    <h3><b>${personaje.name}</b></h3>
    <img src="${personaje.image}" alt="${personaje.name}" />
  `;

  divPersonaje.addEventListener("click", () => {
    mostrarDetalle(personaje.id);
  });

  return divPersonaje;
}

function generarCards(personajes) {
  const contenedor = document.getElementById("contenedorDatos");

  personajes.forEach((personaje) => {
    const card = crearCard(personaje);
    contenedor.appendChild(card);
  });
}

function mostrarDetalle(id) {
  obtenerPersonajePorId(id).then((personaje) => {
    const modal = document.createElement("div");
    modal.classList.add("modal-vista");

    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}" />
        <div class="modal-detalles">
          <p><b>Género:</b> ${personaje.gender}</p>
          <p><b>Especie:</b> ${personaje.species}</p>
          <p><b>Estado:</b> ${personaje.status}</p>
        </div>
      </div>
    `;

    //le asocio al boton cerrar la accion de cerrar el modal
    modal
      .querySelector(".modal-close")
      .addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });

    document.body.appendChild(modal);
  });
}

function aplicarEstilos() {
  const contenedor = document.getElementById("contenedorDatos");
  const boton = document.getElementById("cargaDatos");
  contenedor.classList.add("contenedor");
  boton.classList.add("boton");
}

function limpiarContenedor() {
  const contenedor = document.getElementById("contenedorDatos");
  contenedor.innerHTML = "";
  contenedor.classList.remove("contenedor");
}

function cargarDatos() {
  limpiarContenedor();

  obtenerPersonajes("https://futuramaapi.com/api/characters")
    .then((personajes) => {
      console.log("Datos recibidos:", personajes);
      generarCards(personajes);
      aplicarEstilos();
    })
    .catch((error) => {
      console.error("Error al cargar datos:", error.message);
      const contenedor = document.getElementById("contenedorDatos");
      contenedor.innerHTML = `<p class="error">Error al cargar datos: ${error.message}</p>`;
    });
}

const main = () => {
  console.log("Cargando script main ejemplo Fetch");
  document.getElementById("cargaDatos").addEventListener("click", cargarDatos);
};

document.addEventListener("DOMContentLoaded", main);
