// VARIABLES GLOBALES 
const SIZE_STEP = 0.1; // Incremento/decremento en 'em'
const DEFAULT_SIZE = 1.0; // Tamaño inicial en 'em'
let currentSize = DEFAULT_SIZE; // Variable para rastrear el tamaño actual

// Variable para almacenar la referencia a todos los párrafos
let parrafos = [];

// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtener los párrafos
  parrafos = document.querySelectorAll("#areaTexto p");
  // Aplicar el tamaño inicial por defecto
  applySize();
});

// Función auxiliar para aplicar el tamaño de fuente actual a todos los párrafos
function applySize() {
  parrafos.forEach((p) => {
    p.style.fontSize = `${currentSize}em`;
  });
}

// TAMAÑO DE FUENTE (Funciones independientes) 
function aumentarFuente() {
  currentSize += SIZE_STEP;
  applySize();
}

function decrementarFuente() {
  // Límite mínimo para el tamaño de fuente
  if (currentSize > 0.5) {
    currentSize -= SIZE_STEP;
    applySize();
  }
}

function resetFuente() {
  currentSize = DEFAULT_SIZE;
  applySize();
}

// ALINEACIÓN DE TEXTO (Función independiente) 
function cambiarAlineacion(alineacion) {
  parrafos.forEach((p) => {
    // Modifica la propiedad style.textAlign con el valor pasado como argumento
    p.style.textAlign = alineacion;
  });
}
