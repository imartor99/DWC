class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
}

/**
 * Función que recibe un array de objetos Persona y calcula la edad promedio.
 * Ahora incluye un if-else y un mensaje de advertencia.
 * @param {Array<Persona>} personasArray Un array de objetos Persona.
 * @returns {number} La edad promedio o 0.
 */
function calcularEdadPromedio(personasArray) {
  if (!personasArray || personasArray.length === 0) {
    console.log("ADVERTENCIA: No se puede calcular el promedio. El array de personas está vacío o es inválido.");
    return 0;
  } else {
    const sumaEdades = personasArray.reduce(
      (acc, persona) => acc + persona.edad,
      0
    );
    return sumaEdades / personasArray.length;
  }
}

export { Persona, calcularEdadPromedio };
