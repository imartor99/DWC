// Array con las rutas de las imágenes
const imagenes = [
  "img/imagen1.jpg",
  "img/imagen2.jpg",
  "img/imagen3.jpg",
  "img/imagen4.jpg",
  "img/imagen5.jpg",
  "img/imagen6.jpg",
];

// Variable para controlar el índice imagen actual
let indiceActual = 0;

/**
 * Función para mostrar la imagen actual basada en el índice.
 */
function actualizarImagen() {
  const imagenElemento = document.getElementById("imagenVisor");
  if (imagenElemento) {
    imagenElemento.src = imagenes[indiceActual];
    imagenElemento.alt = "Imagen " + (indiceActual + 1);
  }
}

/**
 * Función para pasar a la siguiente imagen.
 */
function siguienteImagen() {
  indiceActual++;
  // Si llegamos al final, volvemos al principio 
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  actualizarImagen();
}

/**
 * Función para volver a la imagen anterior.
 */
function anteriorImagen() {
  indiceActual--;
  // Si bajamos de 0, vamos a la última imagen
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  actualizarImagen();
}

/**
 * Función principal que genera la interfaz.
 */
function main() {
  // Título
  const h1 = document.createElement("h1");
  h1.textContent = "Ejercicio 6 - Visor de Imágenes";
  document.body.appendChild(h1);

  // Contenedor principal
  const contenedor = document.createElement("div");
  contenedor.id = "visorImagenes";
  contenedor.style.textAlign = "center";
  document.body.appendChild(contenedor);

  // Imagen
  const img = document.createElement("img");
  img.id = "imagenVisor";
  img.src = imagenes[0];
  img.alt = "Imagen 1";
  img.style.maxWidth = "100%";
  img.style.maxHeight = "400px";
  img.style.display = "block";
  img.style.margin = "0 auto 20px auto";
  contenedor.appendChild(img);

  // Contenedor de botones
  const divBotones = document.createElement("div");
  contenedor.appendChild(divBotones);

  // Botón Anterior
  const btnAnterior = document.createElement("button");
  btnAnterior.textContent = "Anterior";
  btnAnterior.style.marginRight = "10px";
  divBotones.appendChild(btnAnterior);

  // Botón Siguiente
  const btnSiguiente = document.createElement("button");
  btnSiguiente.textContent = "Siguiente";
  divBotones.appendChild(btnSiguiente);

  // Eventos
  btnAnterior.addEventListener("click", anteriorImagen);
  btnSiguiente.addEventListener("click", siguienteImagen);
}

document.addEventListener("DOMContentLoaded", main);
