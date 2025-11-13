document.addEventListener("DOMContentLoaded", () => {
  // El manejador principal de mousedown usa Delegación de Eventos.
  // Esto me permite manejar el arrastre de CUALQUIER elemento con la clase '.arrastrable'
  // sin tener que asignar un listener a cada uno individualmente.
  document.addEventListener("mousedown", function (event) {
    // Identifico si el elemento donde hice clic o uno de sus ancestros es arrastrable.
    let draggedElement = event.target.closest(".arrastrable");

    // Si no encontré un elemento arrastrable, salgo de la función.
    if (!draggedElement) return;

    // Deshabilito el comportamiento nativo de arrastre (ondragstart).
    // Hago esto para evitar conflictos con mi lógica y prevenir la duplicación del elemento.
    draggedElement.ondragstart = function () {
      return false;
    };

    // CÁLCULO DE LA POSICIÓN RELATIVA (EVITAR EL "SALTO")
    // Calculo el desfase (shiftX/Y): la distancia desde el puntero hasta el borde del elemento.
    // Esto asegura que el arrastre inicie desde donde hice clic.
    let shiftX = event.clientX - draggedElement.getBoundingClientRect().left;
    let shiftY = event.clientY - draggedElement.getBoundingClientRect().top;

    // Preparación: subo el z-index para asegurarme de que el elemento arrastrado se vea por encima de otros.
    draggedElement.style.zIndex = 1000;

    // FUNCIÓN PRINCIPAL DE MOVIMIENTO
    // Aplico la nueva posición (left/top) usando los shifts para mantener la posición relativa inicial.
    function moveAt(pageX, pageY) {
      draggedElement.style.left = pageX - shiftX + "px";
      draggedElement.style.top = pageY - shiftY + "px";
    }

    // Muevo el elemento a la posición actual del ratón al inicio del clic.
    moveAt(event.pageX, event.pageY);

    // MANEJADOR DE MOVIMIENTO (onmousemove)
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      // Nota: Si necesitara lógica de "soltar sobre" (droppables), iría aquí,
      // usando la posición del ratón para identificar receptores.
    }

    // Adjunto el manejador 'mousemove' al **documento entero**.
    // Hago esto para que el arrastre continúe incluso si el ratón se sale del elemento arrastrable.
    document.addEventListener("mousemove", onMouseMove);

    // MANEJADOR DE FINALIZACIÓN (onmouseup)
    // Defino una función para limpiar los eventos al soltar el botón.
    function onMouseUp() {
      // Elimino los manejadores de eventos 'mousemove' y 'mouseup' del documento.
      // Esto es crucial para detener el arrastre y evitar fugas de memoria.
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      // Opcional: restauro el z-index.
      draggedElement.style.zIndex = "";
    }

    // Adjunto el manejador de 'mouseup' también al documento para capturar el fin del arrastre.
    document.addEventListener("mouseup", onMouseUp);

    // Previene la selección de texto o cualquier comportamiento por defecto del navegador.
    return false;
  });
});
