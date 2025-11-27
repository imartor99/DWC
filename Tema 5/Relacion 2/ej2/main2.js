/**
 * Función auxiliar para mostrar el texto oculto.
 * Se define fuera de main para separar la lógica del evento.
 */
function mostrarTexto(event) {
  event.preventDefault(); // Evitar navegación

  const spanOculto = document.getElementById("textoOculto");
  const enlace = event.target; // El enlace es el elemento que disparó el evento

  if (spanOculto) {
    spanOculto.style.display = "inline";
  }

  if (enlace) {
    enlace.style.display = "none";
  }
}

/**
 * Función principal que genera el DOM y configura los eventos.
 */
function main() {
  // título
  const h1 = document.createElement("h1");
  h1.textContent = "Ejercicio 2 DOM";
  document.body.appendChild(h1);

  // contenedor del artículo
  const divArticulo = document.createElement("div");
  divArticulo.id = "articulo";
  document.body.appendChild(divArticulo);

  // párrafo
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
  divArticulo.appendChild(p);

  // span oculto
  const spanOculto = document.createElement("span");
  spanOculto.id = "textoOculto";
  spanOculto.style.display = "none";
  spanOculto.textContent =
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  p.appendChild(spanOculto);

  // enlace
  const enlace = document.createElement("a");
  enlace.href = "#";
  enlace.id = "enlaceVerMas";
  enlace.textContent = "Ver Articulo Completo";
  divArticulo.appendChild(enlace);

  // Añado evento al enlace usando la función auxiliar
  enlace.addEventListener("click", mostrarTexto);
}

document.addEventListener("DOMContentLoaded", main);
