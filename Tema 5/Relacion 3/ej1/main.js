// Variable global para almacenar el valor del contador
let contador = 0;

// Función auxiliar para incrementar el contador
function incrementarContador() {
  contador++;
  const contadorDiv = document.getElementById("contador");
  contadorDiv.textContent = contador;
}

function main() {
  const btnIncrementar = document.getElementById("btnIncrementar");
  btnIncrementar.addEventListener("click", incrementarContador);
}

document.addEventListener("DOMContentLoaded", main);
