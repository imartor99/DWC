// EJERCICIO 1

function mostrarClase(arrayClase) {
    // Generamos el título de la sección.
    document.write("<h2>Detalle de Alumnos:</h2>");

    for (let i = 0; i < arrayClase.length; i++) {
        const elemento = arrayClase[i];

        document.write(`
            <p>
                clase[${i}] = “${elemento}”
            </p>
        `);
    }
}

// EJERCICIO 2

// Utilizamos null como valor por defecto para el trimestre.
function obtenerNota(arrayClase, estudianteNum, trimestre = null) {
    // Si el índice del estudiante está fuera de rango, devolvemos un error.
    if (estudianteNum < 0 || estudianteNum >= arrayClase.length) {
        return "Error: Índice de estudiante no válido.";
    }

    const estudianteDataString = arrayClase[estudianteNum];

    // Dividimos la cadena y limpiamos los espacios.
    const campos = estudianteDataString.split(',').map(s => s.trim());

    // Extraemos solo las notas (índices 2, 3, 4) y las convertimos a números de punto flotante.
    // Usamos slice(2, 5) para tomar los 3 elementos que contienen las notas 
    // Usamos map() para transformar el array de strings de notas en un array de números 
    const notas = campos.slice(2, 5).map(notaStr => parseFloat(notaStr));

    // Comprobamos si se debe devolver la nota media (si trimestre es null, el valor por defecto).
    if (trimestre === null) {
        // CÁLCULO DE LA NOTA MEDIA

        // Usamos reduce() para sumar todos los elementos del array de notas, iniciando en 0 
        const sumaNotas = notas.reduce((total, nota) => total + nota, 0);

        const media = sumaNotas / notas.length;

        // Devolvemos la media redondeada a un decimal (ejemplo de práctica de Number) 
        return parseFloat(media.toFixed(1));

    } else {
        // DEVOLUCIÓN DE NOTA ESPECÍFICA

        // El trimestre 1 corresponde al índice 0 en el array 'notas' (que es el índice 2 en 'campos').
        const indiceNota = trimestre - 1;

        if (indiceNota < 0 || indiceNota >= notas.length) {
            return "Error: Trimestre debe ser 1, 2 o 3.";
        }

        return notas[indiceNota];
    }
}

// EJERCICIO 3

function calcularEdadMedia(arrayClase) {
    // Extraer las edades:
    // arrayClase.map() itera sobre cada string del alumno.
    const edades = arrayClase.map(alumno => {
        // split(',') divide la cadena en un array de campos.
        const campos = alumno.split(',');

        // La edad está en el índice 1. Debes acceder al elemento del array (campos[1])
        // antes de usar .trim().
        const edadStr = campos[1].trim();

        return parseInt(edadStr);
    });

    // Sumar todas las edades:
    // reduce() aplica una función callback (acumulador, valor actual) para obtener un único valor.
    // El '0' es el valor inicial del acumulador (total).
    const sumaEdades = edades.reduce((total, edad) => total + edad, 0);

    // Calcular la media:
    const media = sumaEdades / arrayClase.length;

    // Devolvemos la media redondeada a un decimal.
    return parseFloat(media.toFixed(1));
}

// EJERCICIO 4

function obtenerEstudianteAlAzar(arrayClase) {
    // Genera un índice aleatorio entre 0 (incluido) y la longitud del array (excluido).
    const indiceAleatorio = Math.floor(Math.random() * arrayClase.length);

    // Obtiene la cadena completa del estudiante en esa posición.
    const estudianteCompleto = arrayClase[indiceAleatorio];

    // Separa el nombre (índice 0) y lo limpia de espacios.
    const nombre = estudianteCompleto.split(',')[0].trim();

    return nombre;
}