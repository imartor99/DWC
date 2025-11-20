// FUNCIONES DE VALIDACIÓN CON EXPRESIONES REGULARES 

/**
 * Valida un campo de texto que solo debe contener letras y espacios.
 */
function validarLetras(valor) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(valor);
}

/**
 * Valida un número de teléfono de 9 dígitos.
 */
function validarTelefono(valor) {
  // Patrón: 9 dígitos exactos
  const regex = /^\d{9}$/;
  return regex.test(valor.replace(/[^0-9]/g, "")); // Limpia el valor (guiones, espacios) antes de validar
}

/**
 * Valida el formato de email.
 */
function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

/**
 * Valida la contraseña: Min. 8 caracteres, mayúscula, minúscula y dígito.
 */
function validarPassword(valor) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(valor);
}

// LÓGICA DE GESTIÓN DE ERRORES Y RESALTADO 

/**
 * Aplica o remueve las clases de error en el campo y muestra el mensaje.
 */
function actualizarEstado(id, mensaje) {
  const inputElement = document.getElementById(id);
  const errorElement = document.getElementById(`${id}-error`);

  if (inputElement) {
    if (mensaje) {
      inputElement.classList.add("input-error");
    } else {
      inputElement.classList.remove("input-error");
    }
  }

  if (errorElement) {
    errorElement.textContent = mensaje;
  }
}

// FUNCIÓN PRINCIPAL Y MANEJADOR DE EVENTOS 

function iniciarValidacion() {
  const formulario = document.getElementById("registro-form");
  // Incluyo agree-privacy aquí para que se limpie su estado de error correctamente
  const campos = [
    "first-name",
    "last-name",
    "phone",
    "email",
    "password",
    "confirm-password",
  ];

  function manejarEnvio(event) {
    event.preventDefault();

    let esValido = true;

    // Limpieza inicial de errores
    campos.forEach((id) => actualizarEstado(id, ""));
    actualizarEstado("agree-privacy", "");

    // Obtención de valores
    const valores = {
      firstName: document.getElementById("first-name").value.trim(),
      lastName: document.getElementById("last-name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirm-password").value,
      agreePrivacy: document.getElementById("agree-privacy").checked,
    };

    // Validación de Obligatoriedad 

    // La validación de obligatoriedad se mantiene, pero NO usamos 'return' al fallar.
    // Simplemente marcamos 'esValido = false' y continuamos para que se apliquen los errores de formato.

    let algunCampoVacio = false;

    [
      "first-name",
      "last-name",
      "phone",
      "email",
      "password",
      "confirm-password",
    ].forEach((id) => {
      const valor = valores[id.replace("-", "")];

      if (valor === "" || valor === undefined) {
        actualizarEstado(id, "Este campo es obligatorio.");
        esValido = false;
        algunCampoVacio = true; // Marcamos que hay un campo vacío
      }
    });

    // Si algún campo estaba vacío, no tiene sentido verificar el formato, pero si solo marcamos 'esValido = false'
    // la lógica posterior corregirá los mensajes si tienen datos pero mal formato.

    // Validación con Regex y Reglas Específicas (Solo si el campo NO está vacío)

    // *******************************************************************
    // * La clave está en no detener la ejecución si falló la obligatoriedad.
    // * Si un campo tiene texto, la validación de formato se aplicará,
    // * SOBREESCRIBIENDO el mensaje de "es obligatorio" si lo hubiera,
    // * lo cual es el comportamiento deseado.
    // *******************************************************************

    if (valores.firstName && !validarLetras(valores.firstName)) {
      actualizarEstado("first-name", "El nombre solo debe contener letras.");
      esValido = false;
    }
    if (valores.lastName && !validarLetras(valores.lastName)) {
      actualizarEstado("last-name", "El apellido solo debe contener letras.");
      esValido = false;
    }
    if (valores.phone && !validarTelefono(valores.phone)) {
      actualizarEstado("phone", "Teléfono no válido (9 dígitos requeridos).");
      esValido = false;
    }
    if (valores.email && !validarEmail(valores.email)) {
      actualizarEstado("email", "El formato del email no es válido.");
      esValido = false;
    }
    if (valores.password && !validarPassword(valores.password)) {
      actualizarEstado(
        "password",
        "Contraseña: Mín. 8 caracteres, mayúscula, minúscula y dígito."
      );
      esValido = false;
    }

    // Validación de coincidencia de contraseña (solo si ambas tienen texto)
    if (
      valores.password &&
      valores.confirmPassword &&
      valores.password !== valores.confirmPassword
    ) {
      actualizarEstado("confirm-password", "Las contraseñas no coinciden.");
      esValido = false;
    } else if (
      valores.password &&
      valores.confirmPassword &&
      !validarPassword(valores.confirmPassword)
    ) {
      // Esto asegura que si ambas están llenas, pero la confirmación tiene mal formato, también falle
      actualizarEstado(
        "confirm-password",
        "La confirmación no cumple el formato."
      );
      esValido = false;
    }

    // Validación de Checkbox
    if (!valores.agreePrivacy) {
      actualizarEstado(
        "agree-privacy",
        "Debe aceptar los términos y condiciones."
      );
      esValido = false;
    }

    if (esValido) {
      alert("¡Registro exitoso! Datos listos para el servidor.");
    }
  }

  if (formulario) {
    formulario.addEventListener("submit", manejarEnvio);
  }
}


document.addEventListener("DOMContentLoaded", iniciarValidacion);
