// Símbolos para las cartas (emojis)
const simbolos = ["🎮", "🎯", "🎨", "🎭", "🎪"];

// Variables globales del juego
let cartas = [];
let cartasVolteadas = [];
let parejasEncontradas = 0;
let movimientos = 0;
let tiempoInicio = 0;
let juegoIniciado = false;
let intervalo = null;

// Elementos del DOM
const tablero = document.getElementById("tablero");
const cronometroDisplay = document.getElementById("cronometro");
const movimientosSpan = document.getElementById("movimientos");
const parejasSpan = document.getElementById("parejas");
const mensaje = document.getElementById("mensaje");
const btnReiniciar = document.getElementById("btnReiniciar");
const instrucciones = document.getElementById("instrucciones");

/**
 * Crea el array de cartas duplicando los símbolos y mezclándolos
 */
function crearCartas() {
  // Duplicar símbolos para crear parejas
  const cartasDuplicadas = [...simbolos, ...simbolos];

  // Mezclar aleatoriamente
  cartas = cartasDuplicadas.sort(() => Math.random() - 0.5);
}

/**
 * Renderiza las cartas en el tablero
 */
function renderizarTablero() {
  tablero.innerHTML = "";

  cartas.forEach((simbolo, index) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.index = index;
    carta.dataset.simbolo = simbolo;

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");
    contenido.textContent = simbolo;

    carta.appendChild(contenido);
    carta.addEventListener("click", () => manejarClickCarta(carta));

    tablero.appendChild(carta);
  });
}

/**
 * Añade un cero delante si el número es menor que 10
 */
function ponerCero(numero) {
  if (numero < 10) {
    return "0" + numero;
  }
  return numero;
}

/**
 * Actualiza el reloj cada segundo
 */
function actualizarReloj() {
  const tiempoActual = Date.now();
  const segundosTranscurridos = Math.floor(
    (tiempoActual - tiempoInicio) / 1000
  );

  const minutos = Math.floor(segundosTranscurridos / 60);
  const segundos = segundosTranscurridos % 60;

  cronometroDisplay.textContent =
    ponerCero(minutos) + ":" + ponerCero(segundos);
}

/**
 * Maneja el click en una carta
 */
function manejarClickCarta(carta) {
  // Si el juego no ha empezado, iniciamos el cronómetro
  if (!juegoIniciado) {
    tiempoInicio = Date.now();
    juegoIniciado = true;
    instrucciones.textContent = "";

    // Iniciamos el intervalo para actualizar el reloj cada segundo
    intervalo = setInterval(actualizarReloj, 1000);
  }

  // Si ya hay 2 cartas volteadas que NO son pareja, las ocultamos ahora
  if (cartasVolteadas.length === 2) {
    const carta1 = cartasVolteadas[0];
    const carta2 = cartasVolteadas[1];

    carta1.classList.remove("volteada");
    carta2.classList.remove("volteada");
    cartasVolteadas = [];
  }

  // Si la carta ya está volteada o encontrada, no hacemos nada
  if (
    carta.classList.contains("volteada") ||
    carta.classList.contains("encontrada")
  ) {
    return;
  }

  // Voltear la carta actual
  carta.classList.add("volteada");
  cartasVolteadas.push(carta);

  // Si acabamos de voltear la segunda carta, comprobamos si hay pareja
  if (cartasVolteadas.length === 2) {
    movimientos++;
    movimientosSpan.textContent = movimientos;
    verificarPareja();
  }
}

/**
 * Verifica si las dos cartas volteadas son pareja
 */
function verificarPareja() {
  const carta1 = cartasVolteadas[0];
  const carta2 = cartasVolteadas[1];

  if (carta1.dataset.simbolo === carta2.dataset.simbolo) {
    // ¡Son pareja! Las marcamos como encontradas
    carta1.classList.add("encontrada");
    carta2.classList.add("encontrada");

    // Vaciamos el array de cartas volteadas para seguir jugando
    cartasVolteadas = [];

    parejasEncontradas++;
    parejasSpan.textContent = parejasEncontradas;

    // Comprobar victoria
    if (parejasEncontradas === simbolos.length) {
      ganarJuego();
    }
  }
}

/**
 * Maneja la victoria del jugador
 */
function ganarJuego() {
  // Detenemos el reloj
  clearInterval(intervalo);

  const tiempoFinal = cronometroDisplay.textContent;
  mensaje.textContent =
    "¡Felicidades! Completaste el juego en " +
    tiempoFinal +
    " con " +
    movimientos +
    " movimientos ";
}

/**
 * Reinicia el juego
 */
function reiniciarJuego() {
  // Detenemos el reloj si estaba corriendo
  if (intervalo) {
    clearInterval(intervalo);
  }

  cartasVolteadas = [];
  parejasEncontradas = 0;
  movimientos = 0;
  juegoIniciado = false;
  tiempoInicio = 0;

  cronometroDisplay.textContent = "00:00";
  movimientosSpan.textContent = "0";
  parejasSpan.textContent = "0";
  mensaje.textContent = "";
  instrucciones.textContent = "HAZ CLIC EN CUALQUIER CARTA PARA COMENZAR";

  crearCartas();
  renderizarTablero();
}

/**
 * Función principal
 */
function main() {
  crearCartas();
  renderizarTablero();
  btnReiniciar.addEventListener("click", reiniciarJuego);
}

document.addEventListener("DOMContentLoaded", main);
