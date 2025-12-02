// Palabras por categoría (array de categorías)
const categorias = [
  {
    nombre: "Ciudades",
    palabras: [
      { palabra: "MADRID", pista: "Capital de España" },
      { palabra: "PARIS", pista: "Ciudad de la Torre Eiffel" },
      { palabra: "ROMA", pista: "Ciudad del Coliseo" },
    ],
  },
  {
    nombre: "Animales",
    palabras: [
      { palabra: "LEON", pista: "Rey de la selva" },
      { palabra: "TIGRE", pista: "Felino con rayas" },
      { palabra: "DELFIN", pista: "Mamífero marino inteligente" },
    ],
  },
  {
    nombre: "Frutas",
    palabras: [
      { palabra: "MANZANA", pista: "Fruta roja o verde" },
      { palabra: "NARANJA", pista: "Fruta cítrica" },
      { palabra: "SANDIA", pista: "Fruta grande y verde por fuera" },
    ],
  },
];

// Variables globales del juego
let categoriaActual = "";
let palabraActual = "";
let pistaActual = "";
let palabraMostrada = [];
let vidasRestantes = 10;
let juegoTerminado = false;
let pistaUsada = false;

// Elementos del DOM
const teclado = document.getElementById("teclado");
const palabraDiv = document.getElementById("palabra");
const vidasSpan = document.getElementById("numVidas");
const categoriaSpan = document.getElementById("nombreCategoria");
const mensaje = document.getElementById("mensaje");
const btnPista = document.getElementById("btnPista");
const btnReiniciar = document.getElementById("btnReiniciar");

/**
 * Selecciona una palabra aleatoria de una categoría aleatoria
 */
function seleccionarPalabraAleatoria() {
  // Selección de categoría aleatoria
  const categoriaAleatoria =
    categorias[Math.floor(Math.random() * categorias.length)];

  // Selección de palabra aleatoria de esa categoría
  const palabraAleatoria =
    categoriaAleatoria.palabras[
      Math.floor(Math.random() * categoriaAleatoria.palabras.length)
    ];

  categoriaActual = categoriaAleatoria.nombre;
  palabraActual = palabraAleatoria.palabra.toUpperCase();
  pistaActual = palabraAleatoria.pista;

  categoriaSpan.textContent = categoriaActual;
}

/**
 * Crea el teclado alfabético
 */
function crearTeclado() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  letras.forEach((letra) => {
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.classList.add("tecla");
    boton.addEventListener("click", () => manejarLetra(letra, boton));
    teclado.appendChild(boton);
  });
}

/**
 * Inicializa la palabra mostrada con guiones bajos
 */
function inicializarPalabra() {
  palabraMostrada = palabraActual
    .split("")
    .map((letra) => (letra === " " ? " " : "_"));
  mostrarPalabra();
}

/**
 * Muestra la palabra en el DOM
 */
function mostrarPalabra() {
  palabraDiv.innerHTML = "";

  palabraMostrada.forEach((letra) => {
    const div = document.createElement("div");
    if (letra === " ") {
      div.classList.add("espacio");
    } else {
      div.classList.add("letra");
      div.textContent = letra;
    }
    palabraDiv.appendChild(div);
  });
}

/**
 * Maneja el clic en una letra del teclado
 * @param {string} letra - Letra seleccionada
 * @param {HTMLElement} boton - Botón de la letra
 */
function manejarLetra(letra, boton) {
  if (juegoTerminado) return;

  boton.disabled = true;

  if (palabraActual.includes(letra)) {
    // Letra correcta
    boton.classList.add("correcta");

    // Actualizar palabra mostrada
    for (let i = 0; i < palabraActual.length; i++) {
      if (palabraActual[i] === letra) {
        palabraMostrada[i] = letra;
      }
    }

    mostrarPalabra();
    verificarVictoria();
  } else {
    // Letra incorrecta
    boton.classList.add("incorrecta");
    vidasRestantes--;
    vidasSpan.textContent = vidasRestantes;

    if (vidasRestantes === 0) {
      perderJuego();
    }
  }
}

/**
 * Verifica si el jugador ha ganado
 */
function verificarVictoria() {
  if (!palabraMostrada.includes("_")) {
    ganarJuego();
  }
}

/**
 * Maneja la victoria del jugador
 */
function ganarJuego() {
  juegoTerminado = true;
  mensaje.textContent = "¡Felicidades! Has ganado";
  mensaje.classList.add("ganado");
  deshabilitarTeclado();
  btnReiniciar.style.display = "inline-block";
  btnPista.disabled = true;
}

/**
 * Maneja la derrota del jugador
 */
function perderJuego() {
  juegoTerminado = true;
  mensaje.textContent = `Game Over! La palabra era: ${palabraActual}`;
  mensaje.classList.add("perdido");

  // Mostrar la palabra completa
  palabraMostrada = palabraActual.split("");
  mostrarPalabra();

  deshabilitarTeclado();
  btnReiniciar.style.display = "inline-block";
  btnPista.disabled = true;
}

/**
 * Deshabilita todas las teclas del teclado
 */
function deshabilitarTeclado() {
  const teclas = document.querySelectorAll(".tecla");
  teclas.forEach((tecla) => (tecla.disabled = true));
}

/**
 * Muestra una pista al jugador
 */
function mostrarPista() {
  if (!pistaUsada && !juegoTerminado) {
    alert(`Pista: ${pistaActual}`);
    pistaUsada = true;
    btnPista.disabled = true;
  }
}

/**
 * Reinicia el juego
 */
function reiniciarJuego() {
  // Reseteo variables
  vidasRestantes = 10;
  juegoTerminado = false;
  pistaUsada = false;

  // Limpio mensaje
  mensaje.textContent = "";
  mensaje.classList.remove("ganado", "perdido");

  // Limpio teclado
  teclado.innerHTML = "";

  // Oculto botón reiniciar
  btnReiniciar.style.display = "none";

  // Habilito botón pista
  btnPista.disabled = false;

  // Actualización de vidas
  vidasSpan.textContent = vidasRestantes;

  // Inicio nuevo juego
  iniciarJuego();
}

/**
 * Inicializa el juego
 */
function iniciarJuego() {
  seleccionarPalabraAleatoria();
  crearTeclado();
  inicializarPalabra();
}

/**
 * Función principal
 */
function main() {
  iniciarJuego();

  btnPista.addEventListener("click", mostrarPista);
  btnReiniciar.addEventListener("click", reiniciarJuego);
}

document.addEventListener("DOMContentLoaded", main);
