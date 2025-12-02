// Variables globales
let tiempoInicio = 0;
let tiempoTranscurrido = 0;
let intervalo = null;
let enEjecucion = false;

// Elementos del DOM
const display = document.getElementById("display");
const btnIniciar = document.getElementById("btnIniciar");
const btnDetener = document.getElementById("btnDetener");
const btnReiniciar = document.getElementById("btnReiniciar");

/**
 * Formatea el tiempo en formato MM:SS
 * @param {number} milisegundos - Tiempo en milisegundos
 * @returns {string} Tiempo formateado
 */
function formatearTiempo(milisegundos) {
  const segundosTotales = Math.floor(milisegundos / 1000);
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;

  return `${minutos.toString().padStart(2, "0")}:${segundos
    .toString()
    .padStart(2, "0")}`;
}

/**
 * Actualiza el display del cronómetro
 */
function actualizarDisplay() {
  const tiempoActual = Date.now() - tiempoInicio + tiempoTranscurrido;
  display.textContent = formatearTiempo(tiempoActual);
}

/**
 * Inicia el cronómetro
 */
function iniciar() {
  if (!enEjecucion) {
    tiempoInicio = Date.now();
    intervalo = setInterval(actualizarDisplay, 10);
    enEjecucion = true;

    // Actualizar estado de botones
    btnIniciar.disabled = true;
    btnDetener.disabled = false;
  }
}

/**
 * Detiene el cronómetro
 */
function detener() {
  if (enEjecucion) {
    clearInterval(intervalo);
    tiempoTranscurrido += Date.now() - tiempoInicio;
    enEjecucion = false;

    // Actualizar estado de botones
    btnIniciar.disabled = false;
    btnDetener.disabled = true;
  }
}

/**
 * Reinicia el cronómetro a 00:00
 */
function reiniciar() {
  clearInterval(intervalo);
  tiempoInicio = 0;
  tiempoTranscurrido = 0;
  enEjecucion = false;
  display.textContent = "00:00";

  // Actualizar estado de botones
  btnIniciar.disabled = false;
  btnDetener.disabled = true;
}

/**
 * Función principal que inicializa el cronómetro
 */
function main() {
  // Estado inicial de botones
  btnDetener.disabled = true;

  btnIniciar.addEventListener("click", iniciar);
  btnDetener.addEventListener("click", detener);
  btnReiniciar.addEventListener("click", reiniciar);
}

document.addEventListener("DOMContentLoaded", main);
