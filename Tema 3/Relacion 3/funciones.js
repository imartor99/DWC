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

// EJERCICIO 5

function paresImpares() {
    // Crear el array de 100 números aleatorios (1 a 1000)
    let arrayNumeros = [];
    for (let i = 0; i < 100; i++) {
        // Math.floor(Math.random() * 1000) genera un número de 0 a 999.
        // Se suma 1 para que sea de 1 a 1000.
        arrayNumeros.push(Math.floor(Math.random() * 1000) + 1);
    }

    // 2. Mostrar el contenido inicial
    document.write("<h2>1. Array Original (100 números):</h2>");
    document.write(`<p>${arrayNumeros.join(', ')}</p>`);

    // Organizar el array: pares y después impares

    // Filtrar los pares (número % 2 === 0)
    const pares = arrayNumeros.filter(numero => numero % 2 === 0);

    // Filtrar los impares (número % 2 !== 0)
    const impares = arrayNumeros.filter(numero => numero % 2 !== 0);

    // Concatenar el nuevo array (pares + impares)
    const arrayOrganizado = pares.concat(impares);

    document.write("<h2>2. Array Organizado (Pares primero, luego Impares):</h2>");
    document.write(`<p>${arrayOrganizado.join(', ')}</p>`);

    document.write(`<p>Total de números: ${arrayOrganizado.length}</p>`);
}

// EJERCICIO 6

/* Calcula el salario final de un vendedor. */
function calcularSalario(montoVentas) {
    // Uso las constantes declaradas en el HTML.
    let ventas = parseFloat(montoVentas);

    if (isNaN(ventas) || ventas < 0) {
        return BASE_SALARIAL;
    }

    let salarioCalculado = BASE_SALARIAL + (ventas * COMISION_PORCENTAJE);

    return parseFloat(salarioCalculado.toFixed(2));
}

/* Lee los datos del formulario, realiza el cálculo, añade el objeto al array global (listadoVendedores) y actualiza la visualización. */
function agregarVendedor() {

    // La lógica de entrada y salida (DOM) permanece aquí.
    let nombreVendedor = document.getElementById("inputNombre").value;
    let montoVentas = document.getElementById("inputVentas").value;
    let contenedorResultado = document.getElementById("resultado");

    // Validación
    if (nombreVendedor.trim() === "" || isNaN(parseFloat(montoVentas)) || parseFloat(montoVentas) < 0) {
        contenedorResultado.innerHTML = "<p style='color:red;'>Error: Datos de entrada inválidos.</p>";
        return;
    }

    // Cálculo
    let salarioNumerico = calcularSalario(montoVentas);

    // Creo el objeto
    const nuevoVendedor = {
        nombreVendedor: nombreVendedor,
        montoVentas: parseFloat(montoVentas).toFixed(2),
        salarioTotal: salarioNumerico.toFixed(2)
    };

    // Uso el array global declarado en el HTML.
    listadoVendedores.push(nuevoVendedor);

    // Limpieza
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputVentas").value = "";
    document.getElementById("inputNombre").focus();

    // Mostrar resultados
    mostrarDatosVendedores(listadoVendedores);
}

/* Muestra el listado completo de vendedores en el contenedor #resultado. */
function mostrarDatosVendedores(listadoVendedores) {

    let contenedorResultados = document.getElementById("resultado");

    if (listadoVendedores.length === 0) {
        contenedorResultados.innerHTML = `<h3>No hay datos de vendedores para mostrar.</h3>`;
        return;
    }

    // Construyo la salida HTML 
    let salida = `<h3>Listado de Vendedores y Salarios:</h3>`;
    salida += `<table border='1'>`;
    salida += `<tr><th>Nombre del Vendedor</th><th>Ventas Brutas ($)</th><th>Salario Final ($)</th></tr>`;

    // Recorro el array.
    listadoVendedores.forEach(vendedor => {
        salida += `
            <tr>
                <td>${vendedor.nombreVendedor}</td>
                <td align='right'>$ ${vendedor.montoVentas}</td>
                <td align='right'>$ ${vendedor.salarioTotal}</td>
            </tr>
        `;
    });

    salida += `</table>`;

    // Inserto resultados en el DIV contenedor
    contenedorResultados.innerHTML = salida;
}

//EJERCICIO 7

// Uso el array global 'miArray' definido en el HTML.

/** Establece todos los 10 elementos del array global a cero. */
function establecerCeros() {

    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = 0;
    }
    mostrarValores();
}

/** Añade 1 a cada uno de los 10 elementos del array global. */
function añadirUno() {

    for (let i = 0; i < miArray.length; i++) {
        miArray[i] += 1;
    }
    mostrarValores();
}

/** Muestra los valores del array separados por espacios. */
function mostrarValores() {
    const resultadoDiv = document.getElementById('resultado');

    resultadoDiv.innerHTML = `
        <h3>Valores Actuales del Array:</h3>
        <p>[ ${miArray.join(' ')} ]</p>
    `;
}

// EJERCICIO 8

/* Simula el lanzamiento de dos dados NUMERO_LANZAMIENTOS veces y cuenta la frecuencia de cada suma. */
function simularLanzamientos() {
    // El array 'frecuencias' y la constante 'NUMERO_LANZAMIENTOS' se leen del HTML.

    // El bucle simula los 36,000 lanzamientos.
    for (let i = 0; i < NUMERO_LANZAMIENTOS; i++) {
        // Lanzamiento del Dado 1 (número aleatorio entre 1 y 6)
        const dado1 = Math.floor(Math.random() * 6) + 1;

        // Lanzamiento del Dado 2 (número aleatorio entre 1 y 6)
        const dado2 = Math.floor(Math.random() * 6) + 1;

        const suma = dado1 + dado2;

        // La suma de los dados varía de 2 a 12. 
        // Para usar un array de índice 0 a 10 (11 elementos), restamos 2 a la suma.
        // Índice 0 (Suma 2), Índice 10 (Suma 12)
        const indice = suma - 2;

        // Incrementamos el contador en la posición correspondiente del array.
        frecuencias[indice]++;
    }

    mostrarResultados();
}

/** Muestra las frecuencias de las sumas en una tabla. */
function mostrarResultados() {
    const resultadoDiv = document.getElementById('resultado');

    let salida = `
        <h3>Resultados de ${NUMERO_LANZAMIENTOS} Lanzamientos:</h3>
        <table border="1">
            <thead>
                <tr><th>Suma de los Dados</th><th>Veces que Aparece</th><th>Probabilidad (%)</th></tr>
            </thead>
            <tbody>
    `;

    // Recorremos el array 'frecuencias'
    for (let suma = 2; suma <= 12; suma++) {
        const indice = suma - 2;
        const frecuencia = frecuencias[indice];

        // Cálculo de la probabilidad
        const probabilidad = ((frecuencia / NUMERO_LANZAMIENTOS) * 100).toFixed(4);

        salida += `
            <tr>
                <td>${suma}</td>
                <td align="right">${frecuencia}</td>
                <td align="right">${probabilidad}%</td>
            </tr>
        `;
    }

    salida += '</tbody></table>';

    resultadoDiv.innerHTML = salida;
}