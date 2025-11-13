/**
 * Función principal que configura todos los eventos 'focus' y 'blur'.
 * Se ejecuta al cargar el DOM para asegurar que los elementos HTML estén disponibles.
 */
function inicializarEventosFormulario() {
  // Referencia al elemento donde se mostrará el mensaje de ayuda.
  const ayudaMensaje = document.getElementById("ayuda-mensaje");

  // Selecciono todos los campos y botones interactivos del formulario.
  const elementosInteractivo = document.querySelectorAll(
    "#formulario-contacto input, #formulario-contacto textarea, #formulario-contacto button"
  );

  // Asigno los listeners de evento a cada elemento.
  elementosInteractivo.forEach((elemento) => {
    // Evento 'focus': Muestra el mensaje de ayuda.
    elemento.addEventListener("focus", (event) => {
      // Obtenemos el mensaje del atributo data-help del elemento enfocado.
      const mensaje = event.target.dataset.help;
      if (mensaje) {
        ayudaMensaje.textContent = mensaje;
      }
    });

    // Evento 'blur': Oculta el mensaje de ayuda.
    elemento.addEventListener("blur", () => {
      ayudaMensaje.textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", inicializarEventosFormulario);
