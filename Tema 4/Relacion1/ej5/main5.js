/* Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón). */

// FUNCIONES DE DIBUJO Y BORRADO POR CELDA

/**
 * Función que maneja el evento 'mousemove' y decide si pintar o borrar la celda
 * basándose en las teclas modificadoras (Ctrl, Shift, Alt).
 * @param {MouseEvent} event - El objeto de evento del ratón.
 */
function pintarCelda(event) {
  // currentTarget es la celda (<td>) donde se activó el evento.
  const celda = event.currentTarget;

  if (celda.tagName === "TD") {
    // Lógica de Borrado (Tecla Alt)
    if (event.altKey) {
      // Borrado: Se elimina el estilo inline de color, volviendo al estilo CSS por defecto.
      celda.style.backgroundColor = "";
    }

    // Lógica de Dibujo (Ctrl o Shift)
    else if (event.ctrlKey) {
      celda.style.backgroundColor = "red";
    } else if (event.shiftKey) {
      celda.style.backgroundColor = "blue";
    }

    // Si no se pulsa ninguna de las tres (Alt, Ctrl, Shift), no se hace nada.
  }
}

// FUNCIONES DE CONTROL GLOBAL

/**
 * Borra completamente el canvas reseteando el color de todas las celdas de la tabla.
 */
function limpiarCanvasCompleto() {
  // Busca todas las celdas (<td>) dentro del contenedor de la tabla
  const celdas = document.querySelectorAll("#canvas-table td");

  if (celdas.length > 0) {
    celdas.forEach((celda) => {
      // Resetea el color de fondo de la celda
      celda.style.backgroundColor = "";
    });
    console.log("Canvas completamente borrado.");
  } else {
    console.warn("No se encontraron celdas para borrar.");
  }
}

/**
 * Crea la tabla (canvas) y configura los listeners iniciales.
 * @param {number} filas - Número de filas.
 * @param {number} columnas - Número de columnas.
 */
function crearCanvas(filas, columnas) {
  // Creo la tabla y el tbody
  const table = document.createElement("table");
  table.id = "canvas-table";
  const tbody = document.createElement("tbody");

  // Crear las celdas (70x70 es un buen balance)
  for (let i = 0; i < filas; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      const td = document.createElement("td");

      // Asigno el evento 'mousemove' a cada celda
      td.addEventListener("mousemove", (event) => {
        pintarCelda(event);
      });

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  // Montar la tabla en el DOM
  table.appendChild(tbody);
  const container = document.getElementById("canvas-container");
  if (container) {
    // Asegura que el contenedor esté vacío antes de insertar (útil si se regenerara)
    container.innerHTML = "";
    container.appendChild(table);
    console.log(`Canvas (Tabla de ${filas}x${columnas}) creado.`);
  } else {
    console.error("No se encontró el contenedor con ID 'canvas-container'.");
  }
}

// document.addEventListener("DOMContentLoaded") asegura que el DOM esté listo.
document.addEventListener("DOMContentLoaded", () => {
  crearCanvas(70, 70);

  // Asignar el evento 'click' al botón de borrado completo
  const clearButton = document.getElementById("clear-button");
  if (clearButton) {
    clearButton.addEventListener("click", limpiarCanvasCompleto);
  }
});
