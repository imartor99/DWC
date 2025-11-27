/**
 * Función para añadir un nuevo elemento a la lista.
 */
function anadirElemento() {
  const lista = document.getElementById("listaElementos");
  if (lista) {
    const nuevoElemento = document.createElement("li");
    // Contamos los hijos actuales para poner un número
    const numeroElemento = lista.children.length + 1;
    nuevoElemento.textContent = "Elemento " + numeroElemento;
    lista.appendChild(nuevoElemento);
  }
}

/**
 * Función principal que genera el DOM.
 */
function main() {
  // Título
  const h1 = document.createElement("h1");
  h1.textContent = "Ejercicio 4 - Lista Dinámica";
  document.body.appendChild(h1);

  // Lista
  const ul = document.createElement("ul");
  ul.id = "listaElementos";
  document.body.appendChild(ul);

  // Botón
  const boton = document.createElement("button");
  boton.textContent = "Añadir Elemento";
  boton.id = "btnAnadir";
  document.body.appendChild(boton);

  // Evento
  boton.addEventListener("click", anadirElemento);
}

document.addEventListener("DOMContentLoaded", main);
