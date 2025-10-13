//EJERCICIO 1
function valores(arr1) {
    let valorMaximo = Math.max(...arr1);
    let valorMinimo = Math.min(...arr1);

    let suma = 0;

    for (let i = 0; i < arr1.length; i++) {
        suma += arr1[i];
    }

    let valorMedio = suma / arr1.length;

    console.log('--- Estadísticas ---');
    console.log('Valor máximo: ' + valorMaximo);
    console.log('Valor mínimo: ' + valorMinimo);
    console.log('Valor medio: ' + valorMedio.toFixed(2));
}

//EJERCICIO 2
function existe(ele, arr1) {
    if (ele in arr1) {
        console.log('EL color ' + ele + ' moradoexiste en el array')
    } else {
        console.log('EL color ' + ele + ' no existe en el array')
    }
}

//EJERCICIO 5
function generarArrayAleatorio(tam, maxValor) {
    // Array.from crea un array de la longitud especificada (tamaño) 
    const arrayGenerado = Array.from({ length: tam }, () => {
        // Genera un número aleatorio entre 0 y 100 (incluido 100).
        return parseInt(Math.random() * (maxValor + 1));
    });
    return arrayGenerado;
}

function calcularMinimo(arr) {
    // Compara el acumulador (min) con la nota actual, devolviendo el menor.
    return arr.reduce((min, nota) => (nota < min ? nota : min));
}

function calcularMaximo(arr) {
    // Compara el acumulador (max) con la nota actual, devolviendo el mayor.
    return arr.reduce((max, nota) => (nota > max ? nota : max));
}

function calcularMedia(arr) {
    // 1. Sumamos todos los elementos usando reduce. El valor inicial es 0.
    const sumaTotal = arr.reduce((total, nota) => total += nota, 0);

    // 2. Calculamos la media dividiendo la suma entre la longitud del array.
    const media = sumaTotal / arr.length;

    // Redondeamos a dos decimales, usando toFixed.
    return parseFloat(media.toFixed(2));
}

//EJERCICIO 6

//Función principal para solicitar una palabra y buscarla en todos los párrafos del documento.
function buscarPalabraEnDocumento() {
    // 1. Solicitar la palabra al usuario
    const palabraBuscada = prompt("Introduce una palabra o cadena de texto para buscar:").trim();

    if (!palabraBuscada) {
        alert("Búsqueda cancelada o palabra vacía.");
        return;
    }

    // Obtener la colección de elementos <p>
    const parrafosCollection = document.getElementsByTagName('p');

    // Convertir la colección del DOM a un Array estándar
    // Array.from se utiliza mucho para convertir colecciones en arrays y así poder usar los métodos funcionales.
    const arrayParrafos = Array.from(parrafosCollection);

    // a) Usar map() para extraer el texto de cada párrafo y convertirlo a minúsculas
    // map() permite modificar cada elemento de un array y devuelve un nuevo array con los elementos modificados.
    const arrayTextosEnMinusculas = arrayParrafos.map(p => p.textContent.toLocaleLowerCase());

    // b) Usar join() para concatenar todos los elementos del array en una única cadena, separándolos por un espacio.
    const textoCompletoDocumento = arrayTextosEnMinusculas.join(' ');

    // Convertir la palabra buscada a minúsculas para una comparación correcta
    const palabraNormalizada = palabraBuscada.toLocaleLowerCase();

    // Verificar la existencia de la palabra
    // includes() devuelve true si la cadena incluye el elemento pasado como parámetro.
    const existe = textoCompletoDocumento.includes(palabraNormalizada);

    document.writeln(`<h2>Resultado de la Búsqueda de: "${palabraBuscada}"</h2>`);

    if (existe) {
        document.writeln('<p>La palabra <strong>SÍ</strong> se encontró en el documento.</p>');
    } else {
        document.writeln('<p>La palabra <strong>NO</strong> se encontró en el documento.</p>');
    }

    document.writeln('<button onclick="window.location.reload()">Volver a cargar la página</button>');
}