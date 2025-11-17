// --- 1. FUNCIONES MODULARES DE VALIDACIÓN (Expresiones Regulares) ---

/**
 * Valida un campo de texto que solo debe contener letras y espacios (Nombre/Apellidos).
 */
function validarSoloLetras(valor) {
  // Busca uno o más letras (incluye acentos y ñ) y espacios, coincidiendo con toda la cadena. el + permite que se repita lo anterior a el una o mas veces
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(valor);
}

/**
 * Valida un DNI español (8 dígitos seguidos de una letra).
 */
function validarDNI(valor) {
  // Empieza con 8 dígitos y termina con una letra.
  const regex = /^\d{8}[A-Za-z]$/;
  return regex.test(valor);
}

/**
 * Valida un número de teléfono español de 9 dígitos.
 */
function validarTelefono(valor) {
  // Empieza por 6, 7, 8 o 9, y le siguen 8 dígitos más.
  const regex = /^[6789]\d{8}$/;
  return regex.test(valor);
}

/**
 * Valida el formato de email.
 */
function validarEmail(valor) {
  // Formato: caracteres@dominio.caracteres. Entre [] indicamos cualquier caracter menos una espacio o una @
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

/**
 * Valida el Nombre de Usuario: Mínimo 8 caracteres, debe incluir número y puntuación (.,!?:;).
 */
function validarUsuario(valor) {
  // Usa (?=...) para verificar requisitos: 1. número, 2. puntuación, 3. longitud de 8+. {8,} indica como el + pero con un min. de 8. Busca si en algún lugar (.*) aparece al menos un carácter del conjunto definido (punto, coma, exclamación, etc.).
  const regex = /^(?=.*\d)(?=.*[.,!?:;]).{8,}$/;
  return regex.test(valor);
}

// --- LÓGICA AUXILIAR DE ERRORES ---

/**
 * Muestra el mensaje de error en el elemento <span> asociado al campo.
 */
function mostrarError(id, mensaje) {
  const errorElement = document.getElementById(`${id}-error`);
  if (errorElement) {
    errorElement.textContent = mensaje;
  } else if (id === "general") {
    document.getElementById("general-error").textContent = mensaje;
  }
}

/**
 * Limpia el mensaje de error de un campo.
 */
function limpiarError(id) {
  mostrarError(id, "");
}

// --- 2. FUNCIÓN PRINCIPAL DE INICIALIZACIÓN Y VALIDACIÓN ---

/**
 * Función principal: Inicializa los eventos y contiene la lógica de validación al enviar.
 */
function iniciarValidacion() {
  // Obtengo la referencia al formulario.
  const formulario = document.getElementById("registro-form");

  // Defino la función de manejo del submit aquí para que use las funciones de validación.
  function manejarEnvio(event) {
    event.preventDefault();

    // Obtener valores de los campos
    const datos = {
      nombre: document.getElementById("nombre").value.trim(),
      apellidos: document.getElementById("apellidos").value.trim(),
      dni: document.getElementById("dni").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      email: document.getElementById("email").value.trim(),
      usuario: document.getElementById("usuario").value.trim(),
    };

    let esValido = true;

    // Limpiar errores previos
    Object.keys(datos).forEach(limpiarError);
    limpiarError("general");

    // Validación de obligatoriedad
    for (const [key, value] of Object.entries(datos)) {
      if (value === "") {
        mostrarError(key, `El campo ${key.toUpperCase()} es obligatorio.`);
        esValido = false;
      }
    }

    if (!esValido) {
      mostrarError(
        "general",
        "Por favor, rellene todos los campos obligatorios."
      );
      return;
    }

    // Validación específica con Regex

    if (!validarSoloLetras(datos.nombre)) {
      mostrarError("nombre", "Solo se permiten letras y espacios.");
      esValido = false;
    }

    if (!validarSoloLetras(datos.apellidos)) {
      mostrarError("apellidos", "Solo se permiten letras y espacios.");
      esValido = false;
    }

    if (!validarDNI(datos.dni)) {
      mostrarError("dni", "DNI no válido (8 dígitos y 1 letra).");
      esValido = false;
    }

    if (!validarTelefono(datos.telefono)) {
      mostrarError(
        "telefono",
        "Teléfono no válido (9 dígitos, debe empezar por 6, 7, 8 o 9)."
      );
      esValido = false;
    }

    if (!validarEmail(datos.email)) {
      mostrarError("email", "El formato del email no es válido.");
      esValido = false;
    }

    if (!validarUsuario(datos.usuario)) {
      mostrarError(
        "usuario",
        "Debe tener +8 caracteres y contener un número y un signo de puntuación (.,!?:;)."
      );
      esValido = false;
    }

    
    if (esValido) {
      alert("¡Registro exitoso! Datos listos para enviar al servidor.");
    } else {
      mostrarError("general", "Revisa los errores marcados en el formulario.");
    }
  }

  // Asigno el manejador de evento si el formulario existe
  if (formulario) {
    formulario.addEventListener("submit", manejarEnvio);
  }
}

document.addEventListener("DOMContentLoaded", iniciarValidacion);
