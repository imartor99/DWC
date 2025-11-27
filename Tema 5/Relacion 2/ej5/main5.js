/**
 * Función para añadir un nuevo input de tipo fichero.
 */
function anadirInputFichero(event) {
  event.preventDefault(); //Evito envio real

  // Selecciono el contenedor donde irán los inputs
  const contenedor = document.getElementById("contenedorFicheros");

  if (contenedor) {
    const saltoLinea = document.createElement("br");
    contenedor.appendChild(saltoLinea);

    const nuevoInput = document.createElement("input");
    nuevoInput.type = "file";
    nuevoInput.name = "fichero[]";//Para simular almacenamiento de ficheros en array

    contenedor.appendChild(nuevoInput);
  }
}

/**
 * Función principal que genera la interfaz.
 */
function main() {
  // título del ejercicio
  const h1 = document.createElement("h1");
  h1.textContent = "Ejercicio 5 - Subida de Ficheros";
  document.body.appendChild(h1);

  // formulario para agrupar los elementos
  const formulario = document.createElement("form");
  formulario.id = "formSubida";
  document.body.appendChild(formulario);

  // contenedor específico para los inputs de fichero
  const contenedorFicheros = document.createElement("div");
  contenedorFicheros.id = "contenedorFicheros";
  formulario.appendChild(contenedorFicheros);

  // primer input de fichero inicial
  const primerInput = document.createElement("input");
  primerInput.type = "file";
  primerInput.name = "fichero[]";
  contenedorFicheros.appendChild(primerInput);

  // salto de línea para separar los botones
  const br = document.createElement("br");
  formulario.appendChild(br);
  const br2 = document.createElement("br");
  formulario.appendChild(br2);

  // botón para adjuntar más ficheros
  const btnAdjuntar = document.createElement("button");
  btnAdjuntar.textContent = "Adjuntar otro fichero";
  btnAdjuntar.id = "btnAdjuntar";
  formulario.appendChild(btnAdjuntar);

  // espacio entre botones
  const espacio = document.createTextNode(" ");
  formulario.appendChild(espacio);

  // botón de enviar
  const btnEnviar = document.createElement("button");
  btnEnviar.textContent = "Enviar";
  btnEnviar.type = "submit";
  formulario.appendChild(btnEnviar);

  // evento al botón de adjuntar
  btnAdjuntar.addEventListener("click", anadirInputFichero);

  // evento al formulario para controlar el envío
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evito el envío real para este ejercicio
    alert("Enviando ficheros... (Simulación)");
  });
}

document.addEventListener("DOMContentLoaded", main);
