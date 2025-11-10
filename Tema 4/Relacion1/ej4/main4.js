/* 4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.*/

function crearCanvas(filas, columnas) {
  // Creo la tabla y el tbody
  const table = document.createElement("table");
  table.id = "canvas-table";
  const tbody = document.createElement("tbody");

  // Creo las celdas
  for (let i = 0; i < filas; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const td = document.createElement("td");

      // Asigno el evento onmousemove a la celda
      td.addEventListener("mousemove", (event) => {
        pintarCelda(event);
      });

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  // Monto la tabla en el DOM
  table.appendChild(tbody);
  const container = document.getElementById("canvas-container");
  if (container) {
    container.appendChild(table);
    console.log(`Canvas (Tabla de ${filas}x${columnas}) creado.`);
  } else {
    console.error("No se encontró el contenedor con ID 'canvas-container'.");
  }
}

function pintarCelda(event) {
  // El 'target' del evento es la celda (<td>) sobre la que se movió el ratón
  const celda = event.currentTarget;

  // Solo si el ratón se está moviendo SOBRE la celda
  if (celda.tagName === "TD") {
    // Tecla Ctrl pulsada -> Pintar Rojo
    if (event.ctrlKey) {
      celda.style.backgroundColor = "red";
    }

    // Tecla Shift pulsada -> Pintar Azul
    else if (event.shiftKey) {
      celda.style.backgroundColor = "blue";
    }

    // Ninguna de las anteriores -> No pintar nada
  }
}

(() => {
  // Usamos `DOMContentLoaded` para asegurar que el `div` contenedor exista antes de intentar insertarle la tabla.
  document.addEventListener("DOMContentLoaded", () => {
    crearCanvas(70, 70);
  });
})();
