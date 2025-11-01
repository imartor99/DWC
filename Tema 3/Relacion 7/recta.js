// Importamos la clase Punto desde su archivo para poder usarla en el constructor
import { Punto } from './punto.js';

/**
 * Clase Recta que se define por dos objetos Punto.
 */
export class Recta {
  
    constructor(punto1, punto2) {

        this.puntoA = punto1;
        this.puntoB = punto2;
    }
}

