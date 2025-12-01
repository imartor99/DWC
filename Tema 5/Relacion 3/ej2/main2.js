// Guardo el estado del tablero y la posición del hueco
let tablero = [];
let huecoPos;

function crearTablero() {
  const tableroDiv = document.getElementById("tablero");
  tableroDiv.innerHTML = ""; // Limpio el tablero antes de crear uno nuevo

  for (let i = 0; i < 4; i++) {
    tablero[i] = [];
    for (let j = 0; j < 4; j++) {
      const casilla = document.createElement("div");
      casilla.className = "casilla";

      const valor = i * 4 + j + 1; // Calculo el número de cada casilla
      if (valor === 16) {
        casilla.classList.add("vacia");
        tablero[i][j] = 0;
        huecoPos = { fila: i, col: j };
      } else {
        casilla.textContent = valor;
        tablero[i][j] = valor;
      }

      // Añado el event listener a TODAS las casillas
      casilla.addEventListener("click", moverCasilla);

      tableroDiv.appendChild(casilla);
    }
  }
}

function desordenar() {
  // Hago 200 movimientos aleatorios
  for (let i = 0; i < 200; i++) {
    const adyacentes = obtenerAdyacentes(huecoPos.fila, huecoPos.col);
    const randomIndex = Math.floor(Math.random() * adyacentes.length);
    const { fila, col } = adyacentes[randomIndex];
    intercambiar(fila, col, huecoPos.fila, huecoPos.col);
  }
  actualizarTablero();
}

function obtenerAdyacentes(fila, col) {
  const adyacentes = [];

  if (fila > 0) adyacentes.push({ fila: fila - 1, col });
  if (fila < 3) adyacentes.push({ fila: fila + 1, col });
  if (col > 0) adyacentes.push({ fila, col: col - 1 });
  if (col < 3) adyacentes.push({ fila, col: col + 1 });

  return adyacentes;
}

function intercambiar(fila1, col1, fila2, col2) {
  const temp = tablero[fila1][col1];
  tablero[fila1][col1] = tablero[fila2][col2];
  tablero[fila2][col2] = temp;

  if (tablero[fila1][col1] === 0) {
    huecoPos = { fila: fila1, col: col1 };
  } else if (tablero[fila2][col2] === 0) {
    huecoPos = { fila: fila2, col: col2 };
  }
}

function moverCasilla(event) {
  // Obtengo la posición calculando desde el índice
  const casillas = document.querySelectorAll(".casilla");
  const index = Array.from(casillas).indexOf(event.target);
  const fila = Math.floor(index / 4);
  const col = index % 4;

  // Verifico si la casilla está al lado del hueco
  const esAdyacente =
    (Math.abs(fila - huecoPos.fila) === 1 && col === huecoPos.col) ||
    (Math.abs(col - huecoPos.col) === 1 && fila === huecoPos.fila);

  if (esAdyacente) {
    intercambiar(fila, col, huecoPos.fila, huecoPos.col);
    actualizarTablero();

    if (comprobarVictoria()) {
      mostrarMensaje("¡Felicidades! Has resuelto el puzzle 🎉");
    }
  }
}

function actualizarTablero() {
  const casillas = document.querySelectorAll(".casilla");
  let index = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const casilla = casillas[index];
      const valor = tablero[i][j];

      if (valor === 0) {
        casilla.textContent = "";
        casilla.classList.add("vacia");
      } else {
        casilla.textContent = valor;
        casilla.classList.remove("vacia");
      }

      index++;
    }
  }
}

function comprobarVictoria() {
  // Compruebo si las fichas están en orden del 1 al 15
  let valorEsperado = 1;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === 3 && j === 3) {
        return tablero[i][j] === 0;
      }

      if (tablero[i][j] !== valorEsperado) {
        return false;
      }

      valorEsperado++;
    }
  }

  return true;
}

function mostrarMensaje(texto) {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.textContent = texto;
  mensajeDiv.style.display = "block";
}

function ocultarMensaje() {
  const mensajeDiv = document.getElementById("mensaje");
  mensajeDiv.style.display = "none";
}

function reiniciarJuego() {
  ocultarMensaje();
  crearTablero();
  desordenar();
}

function main() {
  // Configuro el botón de reiniciar
  const btnReiniciar = document.getElementById("btnReiniciar");
  btnReiniciar.addEventListener("click", reiniciarJuego);

  crearTablero();
  desordenar();
}

document.addEventListener("DOMContentLoaded", main);
