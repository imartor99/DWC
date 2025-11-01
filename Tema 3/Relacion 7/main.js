import { Persona, calcularEdadPromedio } from "./persona.js";
import { Telefono } from "./telefono.js";
import { Punto } from "./punto.js";
import { Recta } from "./recta.js";
import { Casa } from "./casa.js";
import { Alumno } from "./alumno.js";
import { Colegio } from "./colegio.js";

(() => {
 
  // 1. Personas
  console.log("\n--- 1. Personas ---");

  // REQUISITO 1.1: Crear un objeto literal persona
  const personaLiteral = {
    nombre: "Ana",
    edad: 30,
    esMayorDeEdad: function () {
      return this.edad >= 18;
    },
  };
  console.log(
    `Literal - Nombre: ${
      personaLiteral.nombre
    }, Mayor de Edad: ${personaLiteral.esMayorDeEdad()}`
  );

  // REQUISITO 1.2: Clase Persona
  const persona1 = new Persona("Juan", 25);
  const persona2 = new Persona("Laura", 16);

  //Imprimimos personas creadas
  console.log(`Persona 1: Nombre: ${persona1.nombre}, Edad: ${persona1.edad}`);
  console.log(`Persona 1: Nombre: ${persona2.nombre}, Edad: ${persona2.edad}`);

  console.log(
    `Clase Persona - ${persona1.nombre} es mayor: ${persona1.esMayorDeEdad()}`
  );
  console.log(
    `Clase Persona - ${persona2.nombre} es mayor: ${persona2.esMayorDeEdad()}`
  );

  // REQUISITO 1.3 y 1.4: Array y edad promedio
  const grupoPersonas = [
    persona1,
    persona2,
    new Persona("Pedro", 40),
    new Persona("Marta", 10),
  ];
  const edadPromedio = calcularEdadPromedio(grupoPersonas);
  console.log(`La edad promedio del grupo es: ${edadPromedio.toFixed(2)}`);

  // Prueba de la advertencia
  const edadPromedioVacio = calcularEdadPromedio([]);
  console.log(`Resultado del promedio con array vacío: ${edadPromedioVacio}`);

  // 2. Teléfono
  console.log("\n--- 2. Teléfono ---");

  const miTelefono = new Telefono("600123456");
  console.log(
    `Teléfono: ${miTelefono.numeroTelefono}, Llamadas iniciales: ${miTelefono.numeroDeLlamadas}`
  );

  miTelefono.llamar();
  miTelefono.llamar();
  console.log(`Llamadas después de 2 llamadas: ${miTelefono.numeroDeLlamadas}`);

  // 3. Puntos y líneas
  console.log("\n--- 3. Puntos y líneas ---");

  const p1 = new Punto(1, 5);
  const p2 = new Punto(4, 9);
  console.log(`Punto 1: (${p1.x}, ${p1.y})`);
  console.log(`Punto 2: (${p2.x}, ${p2.y})`);

  const rectaAB = new Recta(p1, p2);
  console.log(
    `Recta creada entre P1(${rectaAB.puntoA.x}, ${rectaAB.puntoA.y}) y P2(${rectaAB.puntoB.x}, ${rectaAB.puntoB.y})`
  );

  // 4. Viviendas
  console.log("\n--- 4. Viviendas ---");

  const casaA = new Casa("Garcia Prieto", 58, 15706);
  const casaB = new Casa("Camino Caneiro", 29, 32004);
  const casaC = new Casa("San Clemente", "s/n", 15705);

  console.log(
    `El código postal de la casa es: ${casaA.imprimeCodigoPostal()}.`
  );
  console.log(`La calle de la casa es: ${casaC.imprimeCalle()}.`);

  casaA.setNumero(60);
  console.log(`Número de casaA actualizado: ${casaA.imprimeNumero()}.`);

  // 5. Centro Educativo
  console.log("\n--- 5. Centro Educativo ---");

  const centro1 = new Colegio("Compañía de Jesús", 8, 5);

  centro1.consultarNotaMedia(0);
  centro1.modificarNotaMedia(3, 8.75);
  centro1.consultarNotaMedia(3);
  centro1.consultarNotaMedia(99);

})();
