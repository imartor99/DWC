document.addEventListener("DOMContentLoaded", () => {
  // Obtengo el elemento que voy a arrastrar usando su ID
  let image = document.getElementById("imagenArrastrar");

  // Deshabilito la función nativa de arrastre del navegador.
  // Esto es necesario para evitar conflictos con mi propia implementación.
  image.ondragstart = function () {
    return false;
  };

  // Inicio el arrastre al presionar el botón del ratón (onmousedown)
  image.onmousedown = function (event) {
    // CÁLCULO DE LA POSICIÓN RELATIVA (EVITAR EL "SALTO")
    // Calculo la distancia desde el puntero hasta el borde superior/izquierdo de la imagen.
    // Esto me asegura que la imagen se mueva desde el punto exacto donde hice clic, no desde su esquina.
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;

    // PREPARACIÓN DEL ELEMENTO PARA EL ARRASTRE
    // Fijo la posición como absoluta para poder moverlo libremente en la página.
    image.style.position = "absolute";
    // Asigno un zIndex alto para asegurar que esté sobre otros elementos.
    image.style.zIndex = 1000;

    // FUNCIÓN PRINCIPAL DE MOVIMIENTO
    // Aplica la nueva posición a la imagen. Uso los shifts (shiftX/Y) para mantener la posición relativa.
    function moveAt(pageX, pageY) {
      image.style.left = pageX - shiftX + "px";
      image.style.top = pageY - shiftY + "px";
    }

    // Muevo la imagen a la posición inicial donde hice clic.
    moveAt(event.pageX, event.pageY);

    // MANEJADOR DE MOVIMIENTO (onmousemove)
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // Captura del Movimiento
    // Adjunto el 'mousemove' al documento entero.
    // Esto es crucial porque si muevo el ratón muy rápido y salgo del límite de la imagen,
    // el documento sigue capturando el movimiento y el arrastre no se interrumpe.
    document.addEventListener("mousemove", onMouseMove);

    // Finalización del arrastre (al soltar el botón)
    image.onmouseup = function () {
      // Elimino el manejador de 'mousemove' del documento para detener el arrastre.
      document.removeEventListener("mousemove", onMouseMove);
      // Elimino mi propio manejador de 'mouseup' para que no se dispare de nuevo.
      image.onmouseup = null;
    };
  };
});
