/**
 * Solicita el nombre al usuario y guarda la cookie si es válido
 * @param {HTMLElement} app Elemento contenedor
 * @param {string} cookieName Nombre de la cookie
 */
function solicitarNombre(app, cookieName) {
  let nombre = prompt("Por favor, introduce tu nombre:");

  // Validación básica: si da a cancelar o deja vacío.
  if (nombre && nombre.trim() !== "") {
    crearCookie(cookieName, nombre, 5); // 5 minutos de expiración
    mostrarSaludo(nombre, app, cookieName);
  } else {
    app.innerHTML =
      "<p>No has introducido un nombre. Recarga la página para intentar de nuevo.</p>";
  }
}

/**
 * Muestra el saludo y el botón de cerrar sesión
 * @param {string} nombre Nombre del usuario
 * @param {HTMLElement} app Elemento contenedor
 * @param {string} cookieName Nombre de la cookie para el logout
 */
function mostrarSaludo(nombre, app, cookieName) {
  app.innerHTML = `
        <h1>¡Hola, ${nombre}!</h1>
        <p>Bienvenido de nuevo.</p>
        <br>
        <label for="fondo">Color de fondo:</label>
        <input type="color" id="fondo">
        <br>
        <br>
        <label for="texto">Color del texto:</label>
        <input type="color" id="texto">
        <br>
        <br>
        <label for="tamaño">Tamaño del texto:</label>
        <input type="number" id="tamaño">
        <br>
        <button id="btn-cambios">Cambiar Colores y Tamaño</button>
        <button id="btn-logout">Cerrar Sesión (Borrar Cookie)</button>
    `;

  document.getElementById("btn-logout").addEventListener("click", () => {
    borrarCookie(cookieName);
    location.reload(); // Recargar para volver al estado inicial
  });

  //evento al pusar el boton de cambios color y tamaño
  document.getElementById("btn-cambios").addEventListener("click", () => {
    const colorFondo = document.getElementById("fondo").value;
    const colorTexto = document.getElementById("texto").value;
    const tamaño = document.getElementById("tamaño").value;
    document.body.style.backgroundColor = colorFondo;
    document.body.style.color = colorTexto;
    document.body.style.fontSize = tamaño + "px";
    //creo las cookies que guardan los colores y el tamaño
    crearCookie("colorFondo", colorFondo, 5);
    crearCookie("colorTexto", colorTexto, 5);
    crearCookie("tamaño", tamaño, 5);
  });
}

/**
 * Aplica las preferencias de color y tamaño guardadas en cookies
 */
function aplicarPreferencias() {
  const colorFondo = obtenerCookie("colorFondo");
  document.body.style.backgroundColor = colorFondo;
  const colorTexto = obtenerCookie("colorTexto");
  document.body.style.color = colorTexto;
  const tamaño = obtenerCookie("tamaño");
  document.body.style.fontSize = tamaño + "px";
}

/**
 * Crea una cookie
 * @param {string} cname Nombre de la cookie
 * @param {string} cvalue Valor de la cookie
 * @param {number} minutes Minutos para expirar
 */
function crearCookie(cname, cvalue, minutes) {
  let d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/"; //encodeURIComponent me asegura la aceptación de caracteres especiales(ñ, espacios ...)
}

/**
 * Obtiene el valor de una cookie
 * @param {string} cname Nombre de la cookie a buscar
 * @returns {string|null} Valor de la cookie o null si no existe
 */
function obtenerCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return "";
}

/**
 * Borra una cookie estableciendo su fecha de expiración en el pasado
 * @param {string} cname Nombre de la cookie
 */
function borrarCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/**
 *
 * Función principal que gestiona la lógica de la aplicación
 */
function main() {
  //aplico preferencias si existen de color y tamaño
  aplicarPreferencias();

  const app = document.getElementById("app");
  const cookieName = "usuario";

  const nombreUsuario = obtenerCookie(cookieName);

  if (nombreUsuario) {
    mostrarSaludo(nombreUsuario, app, cookieName);
  } else {
    solicitarNombre(app, cookieName);
  }
}

document.addEventListener("DOMContentLoaded", main);
