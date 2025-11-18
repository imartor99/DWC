// --- FUNCIONES MODULARES DE VALIDACIÓN (Regex) ---

/**
 * Verifica si la cadena tiene al menos un carácter en minúscula.
 */
function esMinuscula(str) {
  return /[a-z]/.test(str);
}

/**
 * Verifica si la cadena tiene al menos un carácter en mayúscula.
 */
function esMayuscula(str) {
  return /[A-Z]/.test(str);
}

/**
 * Verifica si la cadena tiene una longitud de 6 o más caracteres, usando una Regex fija.
 */
function tieneLongitudMinima(str) {
  return /.{6,}/.test(str);
}

// --- LÓGICA DE ACTUALIZACIÓN EN TIEMPO REAL ---

function iniciarValidacionTiempoReal() {
  
  const usuarioInput = document.getElementById("nombreUsuario");
  const botonEnviar = document.getElementById("boton-enviar");

  // Mapeo en un array de objetos los requisitos, sus elementos en el DOM y sus funciones validadoras
  const mapaValidacion = [
    {
      elemento: document.getElementById("req-minuscula"),
      validador: esMinuscula,
    },
    {
      elemento: document.getElementById("req-mayuscula"),
      validador: esMayuscula,
    },
    {
      elemento: document.getElementById("req-longitud"),
      validador: tieneLongitudMinima,
    },
  ];

  /**
   * Función que se ejecuta cada vez que el contenido del input cambia ('input' event).
   */
  function actualizarValidacion() {
    const valor = usuarioInput.value;
    let esTodoValido = true;

    // Iterar sobre el mapa para verificar cada requisito
    mapaValidacion.forEach((item) => {
      const esValido = item.validador(valor);

      // Aplicar la clase 'valido' o 'invalido'
      if (esValido) {
        item.elemento.classList.remove("invalido");
        item.elemento.classList.add("valido");
      } else {
        item.elemento.classList.remove("valido");
        item.elemento.classList.add("invalido");
        esTodoValido = false;
      }
    });

    // Habilitar o deshabilitar el botón de envío
    botonEnviar.disabled = !esTodoValido;
  }

  // Enlace del evento clave para la validación en tiempo real
  usuarioInput.addEventListener("input", actualizarValidacion);

  // Ejecutar la validación una vez al cargar
  actualizarValidacion();
}

// --- INICIALIZACIÓN ---

document.addEventListener("DOMContentLoaded", iniciarValidacionTiempoReal);
