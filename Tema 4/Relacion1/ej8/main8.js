/**
 * Función que convierte todas las instancias del ampersand (&) a la cadena "and".
 * @param {string} cadena - La cadena de texto a procesar.
 * @returns {string} La cadena de texto con la sustitución realizada.
 */
function convertirAmpersand(cadena) {
  // Uso una Expresión Regular (g) para reemplazar todas las ocurrencias.
  return cadena.replace(/&/g, "and");
}

/**
 * Manejador del evento 'blur' que aplica la conversión al contenido del campo.
 * @param {Event} event - El evento 'blur' del campo de texto.
 */
function manejarBlur(event) {
  const campo = event.target;

  // Obtener el valor, convertirlo y reasignarlo al campo.
  campo.value = convertirAmpersand(campo.value);
}

/**
 * Función principal que configura los eventos una vez que el DOM está cargado.
 */
function inicializarConversion() {
  // Seleccionamos el campo de comentario.
  const campoComentario = document.getElementById("comentario");

  // Enlazamos la función manejarBlur al evento 'blur' (onblur) del campo.
  if (campoComentario) {
    campoComentario.addEventListener("blur", manejarBlur);
  }
}

// Aseguramos que el script se ejecute solo cuando el documento esté completamente cargado.
document.addEventListener("DOMContentLoaded", inicializarConversion);
