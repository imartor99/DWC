/* Ejercicio 6: Eventos onMouseOver y onMouseOut
 * 1. Imagen del título: cambia de imagen al pasar el ratón.
 * 2. Tabla de colores: colorea la celda (HEX) al pasar el ratón y
 * muestra el nombre (Nombre) al salir.
 */

// 1. FUNCIONALIDAD DEL TÍTULO (IMAGEN)

/**
 * Cambia la fuente (src) de la imagen al pasar el ratón por encima (MouseOver).
 * Utiliza el atributo 'data-alternative-src' para obtener la nueva imagen.
 * @param {HTMLElement} imagen - El elemento <img> del título.
 */
function cambiarImagen(imagen) {
  const nuevaSrc = imagen.getAttribute("data-alternative-src");
  if (nuevaSrc) {
    imagen.src = nuevaSrc;
  }
}

/**
 * Restaura la fuente (src) de la imagen a su estado original al salir el ratón (MouseOut).
 * Utiliza el atributo 'data-original-src' para obtener la imagen original.
 * @param {HTMLElement} imagen - El elemento <img> del título.
 */
function restaurarImagen(imagen) {
  const originalSrc = imagen.getAttribute("data-original-src");
  if (originalSrc) {
    imagen.src = originalSrc;
  }
}

// 2. FUNCIONALIDAD DE LA TABLA (CELDAS)

/**
 * Se activa con 'mouseover'. Colorea la celda con su valor hexadecimal.
 * @param {Event} event - El objeto de evento.
 */
function colorearEntrada(event) {
  const celda = event.currentTarget; // La celda <td>
  const colorHex = celda.getAttribute("data-color-hex");

  // 1. Colorear la celda con el color HEX
  celda.style.backgroundColor = colorHex;
  // 2. Colorear el texto de la celda de un color que contraste (ej. blanco)
  celda.style.color = "white";
}

/**
 * Se activa con 'mouseout'. Restaura el color de fondo y muestra el nombre del color.
 * @param {Event} event - El objeto de evento.
 */
function nombrarEntrada(event) {
  const celda = event.currentTarget; // La celda <td>
  const colorName = celda.getAttribute("data-color-name");

  // 1. Restaurar el estilo
  celda.style.backgroundColor = "white"; // Fondo blanco por defecto
  celda.style.color = "black"; // Texto negro por defecto

  // 2. Cambiar el contenido de la celda al nombre del color
  celda.textContent = colorName;
}

// INICIALIZACIÓN

document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidad de la Imagen del Título
  const tituloImagen = document.getElementById("titulo-imagen");
  if (tituloImagen) {
    // Asignamos onMouseOver
    tituloImagen.addEventListener("mouseover", () => {
      cambiarImagen(tituloImagen);
    });
    // Asignamos onMouseOut
    tituloImagen.addEventListener("mouseout", () => {
      restaurarImagen(tituloImagen);
    });
    console.log("Eventos de imagen asignados.");
  }

  // Funcionalidad de la Tabla de Colores
  const celdas = document.querySelectorAll("#color-table td");

  celdas.forEach((celda) => {
    // Asignamos onMouseOver: colorear con el HEX
    celda.addEventListener("mouseover", colorearEntrada);

    // Asignamos onMouseOut: mostrar el Nombre del color
    celda.addEventListener("mouseout", nombrarEntrada);
  });
  console.log(`Eventos de tabla asignados a ${celdas.length} celdas.`);
});
