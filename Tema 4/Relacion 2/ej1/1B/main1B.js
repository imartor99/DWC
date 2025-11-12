/**
 * Cambia la hoja de estilo del tema cargada dinámicamente.
 * @param {string} tema - 'normal' o 'minimalista'
 */
function cambiarEstilo(tema) {
  // Obtenemos la referencia al elemento <link> por su ID
  const linkEstilo = document.getElementById("estiloTema");

  // Determinamos el nombre del archivo CSS a cargar
  let nombreArchivo;
  if (tema === "normal") {
    nombreArchivo = "normal.css";
  } else if (tema === "minimalista") {
    nombreArchivo = "minimalista.css";
  } else {
    console.error("Tema no reconocido.");
    return;
  }

  // Cambiamos el atributo href para cargar la nueva hoja de estilo
  linkEstilo.setAttribute("href", nombreArchivo);
}
