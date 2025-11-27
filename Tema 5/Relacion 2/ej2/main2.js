/**
 * Función auxiliar para mostrar el texto oculto y ocultar el enlace.
 */
function mostrarTextoCompleto(event) {
  event.preventDefault(); // Evito que el enlace navegue

  const textoOculto = document.getElementById("textoOculto");
  const enlace = document.getElementById("enlaceVerMas");

  if (textoOculto) {
    textoOculto.style.display = "inline"; 
  }

  if (enlace) {
    enlace.style.display = "none"; // Oculto el enlace después de pulsarlo
  }
}

/**
 * Función principal que configura los eventos.
 */
function main() {
  const enlace = document.getElementById("enlaceVerMas");
  if (enlace) {
    enlace.addEventListener("click", mostrarTextoCompleto);
  }
}


document.addEventListener("DOMContentLoaded", main);
