/**
 * Función principal que se ejecuta una vez que el DOM está completamente cargado.
 * Contiene la lógica para analizar los enlaces de la página y mostrar los resultados.
 */
function main() {
  // Obtengo todos los elementos <a> de la página
  const todosLosEnlaces = document.querySelectorAll("a");

  // Obtengo los párrafos
  const parrafos = document.querySelectorAll("p");

  // CÁLCULOS SOLICITADOS

  // Número de enlaces de la página
  const numTotalEnlaces = todosLosEnlaces.length;

  // Dirección a la que enlaza el penúltimo enlace
  let direccionPenultimoEnlace = "No hay suficientes enlaces (menos de 2).";
  if (numTotalEnlaces >= 2) {
    // La posición del penúltimo es (longitud - 2)
    direccionPenultimoEnlace = todosLosEnlaces[numTotalEnlaces - 2].href;
  }

  // Numero de enlaces que enlazan a Google
  const numEnlacesGoogle = Array.from(todosLosEnlaces).filter((enlace) =>
    enlace.href.includes("google.com")
  ).length;

  // Número de enlaces del tercer párrafo
  let numEnlacesTercerParrafo = "El tercer párrafo no existe.";
  if (parrafos.length >= 3) {
    // Enlances dentro del tercer párrafo (índice 2)
    const enlacesTercerParrafo = parrafos[2].querySelectorAll("a");
    numEnlacesTercerParrafo = enlacesTercerParrafo.length;
  }

  // MOSTRAR RESULTADOS

  const resultadosDiv = document.createElement("div");
  resultadosDiv.innerHTML = `
        <hr>
        <h2>Resultados del Análisis del DOM</h2>
        <p>1. Número total de enlaces de la página: <strong>${numTotalEnlaces}</strong></p>
        <p>2. Dirección a la que enlaza el penúltimo enlace: <strong>${direccionPenultimoEnlace}</strong></p>
        <p>3. Número de enlaces que enlazan a Google: <strong>${numEnlacesGoogle}</strong></p>
        <p>4. Número de enlaces del tercer párrafo: <strong>${numEnlacesTercerParrafo}</strong></p>
        <hr>
    `;

  document.body.append(resultadosDiv);
  console.log("Análisis del DOM completado y resultados mostrados.");
}

document.addEventListener("DOMContentLoaded", main);
