# Diseño de Objetos: Juegos (2º DAW)

Este documento modela las clases principales para los juegos, utilizando la Programación Orientada a Objetos (POO) en JavaScript. El enfoque se centra en el **diseño de la clase**, sus atributos y métodos, que servirán como base para la implementación de la lógica.

---

## 1) Clase `Puzzle`

Un `Puzzle` es un tablero cuadrado con un hueco que permite reordenar las piezas.

### 1.1. Propiedades (Atributos)

| Propiedad         | Descripción                                                                   | Tipo (JS)            |
| :---------------- | :---------------------------------------------------------------------------- | :------------------- |
| `dimension`       | Tamaño $N$ del tablero (e.g., $N \times N$).                                  | `Number`             |
| `tablero`         | Matriz $N \times N$ que representa el estado actual de las piezas y el hueco. | `Array` (Matriz 2D)  |
| `posicionHueco`   | Coordenadas `{fila, columna}` del espacio en blanco.                          | `Object`             |
| `movimientos`     | Contador del número de movimientos realizados.                                | `Number`             |
| `tiempoInicio`    | Marca de tiempo del inicio del juego para el control del tiempo mínimo.       | `Number` (Timestamp) |
| `tableroSolucion` | La configuración de las piezas cuando el puzzle está resuelto.                | `Array` (Matriz 2D)  |

### 1.2. Métodos Expandidos

| Método                          | Propósito Detallado y Lógica Esperada                                                                                                                                                              | Lo que Devuelve                                                          |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `generarTableroAleatorio()`     | **Propósito:** Crea un estado inicial aleatorio. **Lógica:** Genera el tablero ordenado y lo desordena mediante una serie de **movimientos válidos aleatorios** para asegurar que sea resoluble.   | `void` (Modifica `tablero`)                                              |
| `esMovimientoValido(direccion)` | **Propósito:** Controla la frontera del tablero. **Lógica:** Verifica si, al mover el hueco en la `direccion` indicada, este se saldría de la matriz.                                              | `Boolean` (`true` si es válido, `false` en caso contrario)               |
| `mover(direccion)`              | **Propósito:** Ejecutar la acción del jugador y actualizar el estado. **Lógica:** Si es válido, intercambia la pieza adyacente con el hueco, actualiza `posicionHueco` e incrementa `movimientos`. | `Boolean` (`true` si el movimiento se ejecutó, `false` si no fue válido) |
| `estaResuelto()`                | **Propósito:** Comprobar si se ha ganado el juego. **Lógica:** Compara el `tablero` actual con `tableroSolucion`.                                                                                  | `Boolean` (`true` si el tablero está ordenado)                           |
| `getTiempoMinimo()`             | **Propósito:** Medir el rendimiento del jugador. **Lógica:** Calcula la diferencia entre el tiempo actual y `tiempoInicio`.                                                                        | `Number` (Tiempo transcurrido en segundos)                               |
| `dibujar()`                     | **Propósito:** Facilitar la prueba de la lógica sin interfaz gráfica. **Lógica:** Itera sobre la matriz `tablero` e imprime cada fila en la consola.                                               | `void` (Imprime en consola)                                              |

### 1.3. Esqueleto Básico en JavaScript

```javascript
/**
 * Clase que modela el juego del Puzzle (N x N)
 */
class Puzzle {
  /**
   * @param {number} dimension - La dimensión (N) del tablero.
   */
  constructor(dimension) {
    this.dimension = dimension;
    this.tablero = [];
    this.tableroSolucion = [];
    this.posicionHueco = { fila: 0, columna: 0 };
    this.movimientos = 0;
    this.tiempoInicio = 0;

    this.generarTableroAleatorio();
    this.iniciarTiempo();
  }

  /**
   * @returns {void}
   */
  generarTableroAleatorio() {
    /* Lógica de llenado y mezcla del tablero */
  }

  /**
   * @returns {void}
   */
  iniciarTiempo() {
    this.tiempoInicio = Date.now();
  }

  /**
   * @param {string} direccion - 'ARRIBA', 'ABAJO', 'IZQUIERDA', 'DERECHA'.
   * @returns {boolean}
   */
  esMovimientoValido(direccion) {
    /* Lógica para comprobar límites */ return false;
  }

  /**
   * @param {string} direccion - 'ARRIBA', 'ABAJO', 'IZQUIERDA', 'DERECHA'.
   * @returns {boolean} - true si se movió, false si no.
   */
  mover(direccion) {
    if (this.esMovimientoValido(direccion)) {
      /* Lógica de intercambio */
      this.movimientos++;
      return true;
    }
    return false;
  }

  /**
   * @returns {boolean} - true si está resuelto.
   */
  estaResuelto() {
    /* Lógica de comparación */ return false;
  }

  /**
   * @returns {number} - Tiempo transcurrido en segundos.
   */
  getTiempoMinimo() {
    return this.tiempoInicio === 0
      ? 0
      : Math.floor((Date.now() - this.tiempoInicio) / 1000);
  }

  /**
   * @returns {void}
   */
  dibujar() {
    console.log(`--- Puzzle ${this.dimension}x${this.dimension} ---`);
    console.log(`Movimientos: ${this.movimientos}`);
    console.log(`Tiempo: ${this.getTiempoMinimo()}s`);
    /* Lógica para imprimir this.tablero */
  }
}
```

---

## 2) Clase `TresEnRaya`

El juego consiste en un tablero de $3\times3$ donde dos jugadores marcan casillas hasta conseguir tres en línea.

### 2.1. Propiedades (Atributos)

| Propiedad       | Descripción                                                          | Tipo (JS)           |
| :-------------- | :------------------------------------------------------------------- | :------------------ |
| `tablero`       | Matriz $3\times3$ que contiene los valores ('X', 'O', o vacío).      | `Array` (Matriz 2D) |
| `jugadorActual` | Indica el turno ('X' o 'O').                                         | `String`            |
| `estadoJuego`   | Indica si el juego está activo, si hay un ganador o si es un empate. | `String`            |

### 2.2. Métodos Expandidos

| Método                         | Propósito Detallado y Lógica Esperada                                                                                                                                                     | Lo que Devuelve                                                        |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `marcarCasilla(fila, columna)` | **Propósito:** Colocar la ficha en el tablero. **Lógica:** Verifica que la casilla esté vacía y, si lo está, asigna el valor de `jugadorActual`.                                          | `Boolean` (`true` si la marca fue válida)                              |
| `verificarGanador()`           | **Propósito:** Determinar si un jugador ha ganado. **Lógica:** Comprueba las 8 posibles combinaciones de tres en línea (horizontal, vertical o diagonal).                                 | `Boolean` (`true` si el jugador actual ha ganado)                      |
| `verificarFinJuego()`          | **Propósito:** Controlar el estado final. **Lógica:** Llama a `verificarGanador()`. Si no hay ganador, verifica si el `tablero` está completamente lleno (empate).                        | `Boolean` (`true` si hay ganador o empate)                             |
| `jugarTurno(fila, columna)`    | **Propósito:** Encapsular la jugada completa. **Lógica:** Llama a `marcarCasilla()`. Si fue válida, llama a `verificarFinJuego()`. Si el juego no ha terminado, llama a `cambiarTurno()`. | `Object` (Ej: `{exito: true, estado: 'ganador'/'empate'/'continuar'}`) |
| `cambiarTurno()`               | **Propósito:** Alternar el jugador. **Lógica:** Cambia la propiedad `jugadorActual` de 'X' a 'O' o viceversa.                                                                             | `void` (Modifica `jugadorActual`)                                      |

### 2.3. Esqueleto Básico en JavaScript

```javascript
/**
 * Clase que modela el juego del Tres en Raya (3 x 3)
 */
class TresEnRaya {
  constructor() {
    this.tablero = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.jugadorActual = "X";
    this.estadoJuego = "activo";
  }

  /**
   * @param {number} fila
   * @param {number} columna
   * @returns {boolean}
   */
  marcarCasilla(fila, columna) {
    /* Lógica de colocación de ficha */ return false;
  }

  /**
   * @returns {boolean}
   */
  verificarGanador() {
    /* Lógica de comprobación de filas, columnas y diagonales */ return false;
  }

  /**
   * @returns {boolean}
   */
  verificarFinJuego() {
    /* Lógica de comprobación de victoria o tablero lleno */ return false;
  }

  /**
   * @returns {void}
   */
  cambiarTurno() {
    this.jugadorActual = this.jugadorActual === "X" ? "O" : "X";
  }

  /**
   * @param {number} fila
   * @param {number} columna
   * @returns {object} - { exito: boolean, estado: string }
   */
  jugarTurno(fila, columna) {
    // Lógica que integra marcarCasilla, verificarFinJuego y cambiarTurno
    return { exito: false, estado: this.estadoJuego };
  }
}
```

### ⭐️ 2.4. OPCIONAL: Clase `TresEnRayaIA` - Desarrollo del Algoritmo

Para cumplir con el requisito de "cierto grado de inteligencia artificial" (no aleatorio), la IA debe seguir una estrategia por prioridades.

| Método           | Propósito Detallado y Lógica Esperada                                                                                                                                                                                                                                          | Lo que Devuelve                                                    |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| `movimientoIA()` | **Propósito:** Seleccionar la jugada de la máquina con estrategia. **Lógica:** Sigue la heurística (prioridades): **1. Ganar**. **2. Bloquear** al oponente. **3. Jugar en el Centro/Esquina** (posiciones clave). **4. Jugar Aleatorio** (solo si no hay opción estratégica). | `Object` (Coordenadas `{fila, columna}` de la jugada seleccionada) |

---

## 💣 3) Clase `Buscaminas`

El juego consiste en despejar casillas sin minas en un tablero de $8\times8$ con 10 minas.

### 3.1. Propiedades (Atributos)

| Propiedad        | Descripción                                                                         | Tipo (JS)            |
| :--------------- | :---------------------------------------------------------------------------------- | :------------------- |
| `dimension`      | Tamaño del tablero (fijo en $8\times8$).                                            | `Number`             |
| `numMinas`       | Número de minas (fijo en 10).                                                       | `Number`             |
| `tableroMinas`   | Matriz que almacena la ubicación de las minas (valor: mina o número circundante).   | `Array` (Matriz 2D)  |
| `tableroVisible` | Matriz que almacena el estado de las casillas: descubierto, marcado, sin descubrir. | `Array` (Matriz 2D)  |
| `tiempoLimite`   | Tiempo máximo para resolver el juego.                                               | `Number`             |
| `tiempoInicio`   | Marca de tiempo del inicio del juego.                                               | `Number` (Timestamp) |

### 3.2. Métodos Expandidos

| Método                            | Propósito Detallado y Lógica Esperada                                                                                                                                                                                     | Lo que Devuelve                                                |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------- |
| `calcularNumeros()`               | **Propósito:** Asignar valores a las casillas. **Lógica:** Itera sobre cada casilla sin mina, comprueba sus 8 vecinas y cuenta el número de minas circundantes.                                                           | `void` (Modifica `tableroMinas`)                               |
| `descubrirCasilla(fila, columna)` | **Propósito:** Revelar la casilla seleccionada. **Lógica:** Si tiene mina, se pierde. Si el número es 0, llama a `descubrirVecinos`. En otro caso, solo la marca como descubierta.                                        | `Boolean` (`true` si el juego sigue, `false` si se ha perdido) |
| `descubrirVecinos(fila, columna)` | **Propósito:** Implementar la propagación de clics. **Lógica:** De forma recursiva o iterativa, descubre las casillas vecinas no descubiertas. Si una casilla vecina también tiene 0 minas, se propaga el descubrimiento. | `void` (Modifica `tableroVisible`)                             |
| `marcarMina(fila, columna)`       | **Propósito:** Marcar una casilla para el jugador. **Lógica:** Cambia el estado en `tableroVisible` (marcado/interrogación).                                                                                              | `void` (Modifica `tableroVisible`)                             |
| `verificarVictoria()`             | **Propósito:** Comprobar si se ha ganado. **Lógica:** Verifica que todas las casillas que **no** contienen una mina hayan sido despejadas.                                                                                | `Boolean` (`true` si se ha ganado)                             |
| `getTiempoRestante()`             | **Propósito:** Controlar el tiempo límite. **Lógica:** Calcula el tiempo transcurrido y lo resta a `tiempoLimite`.                                                                                                        | `Number` (Tiempo restante en segundos)                         |

### 3.3. Esqueleto Básico en JavaScript

```javascript
/**
 * Clase que modela el juego del Buscaminas (8 x 8 con 10 minas)
 */
class Buscaminas {
  constructor() {
    this.dimension = 8;
    this.numMinas = 10;
    this.tableroMinas = [];
    this.tableroVisible = [];
    this.tiempoLimite = 300; // Ejemplo: 5 minutos
    this.tiempoInicio = Date.now();

    this.inicializarTableros();
    this.colocarMinasAleatoriamente();
    this.calcularNumeros();
  }

  /**
   * @returns {void}
   */
  inicializarTableros() {
    /* Lógica para crear las matrices 8x8 iniciales */
  }

  /**
   * @returns {void}
   */
  colocarMinasAleatoriamente() {
    /* Lógica para colocar las 10 minas */
  }

  /**
   * @returns {void}
   */
  calcularNumeros() {
    /* Lógica para calcular y asignar los números alrededor de las minas */
  }

  /**
   * @param {number} fila
   * @param {number} columna
   * @returns {boolean} - true si el juego sigue, false si se perdió (mina).
   */
  descubrirCasilla(fila, columna) {
    // Lógica de juego principal: mina, número o propagación (descubrirVecinos)
    return true;
  }

  /**
   * @param {number} fila
   * @param {number} columna
   * @returns {void}
   */
  descubrirVecinos(fila, columna) {
    /* Lógica recursiva/iterativa de propagación */
  }

  /**
   * @param {number} fila
   * @param {number} columna
   * @returns {void}
   */
  marcarMina(fila, columna) {
    /* Lógica para alternar el estado de marcado en tableroVisible */
  }

  /**
   * @returns {boolean}
   */
  verificarVictoria() {
    /* Lógica para comprobar si todas las no-minas están descubiertas */ return false;
  }

  /**
   * @returns {number}
   */
  getTiempoRestante() {
    return (
      this.tiempoLimite - Math.floor((Date.now() - this.tiempoInicio) / 1000)
    );
  }
}
```
