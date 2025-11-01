// Importamos la clase Alumno para poder crear instancias de alumnos
import { Alumno } from "./alumno.js";

export class Colegio {
  constructor(nombre, numAulas, numAlumnos) {
    this.nombre = nombre;
    this.numeroAulas = numAulas;
    this.numeroAlumnos = numAlumnos;
    this.alumnos = []; // Array que contendrá los objetos Alumno

    // Inicializar el array de alumnos en el constructor
    for (let i = 0; i < numAlumnos; i++) {
      const alumno = new Alumno(i, `alumno${i + 1}`);
      this.alumnos.push(alumno);
    }
    console.log(
      `Colegio '${this.nombre}' instanciado con ${this.alumnos.length} alumnos iniciales.`
    );
  }

  /**
   * consultarNotaMedia: consulta y muestra la nota media de un alumno por su identificador.
   */
  consultarNotaMedia(id) {
    const alumno = this.alumnos.find((a) => a.identificador === id);
    if (alumno) {
      console.log(
        `Nota media del alumno ID ${id} (${
          alumno.nombre
        }): ${alumno.notaMedia.toFixed(2)}`
      );
      return alumno.notaMedia;
    } else {
      console.log(`Error: Alumno con ID ${id} no encontrado.`);
      return null;
    }
  }

  /**
   * modificarNotaMedia: modifica la nota media de un alumno por su identificador.
   */
  modificarNotaMedia(id, nuevaNota) {
    const alumno = this.alumnos.find((a) => a.identificador === id);
    if (alumno) {
      alumno.notaMedia = nuevaNota;
      console.log(
        `Nota media de ${
          alumno.nombre
        } (ID ${id}) actualizada a: ${nuevaNota.toFixed(2)}`
      );
      return true;
    } else {
      console.log(
        `Error: No se pudo modificar. Alumno con ID ${id} no encontrado.`
      );
      return false;
    }
  }
}
