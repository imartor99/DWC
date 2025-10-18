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