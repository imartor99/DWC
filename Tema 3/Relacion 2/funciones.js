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
function existe(ele,arr1){
    if(ele in arr1){
        console.log('EL color ' + ele + ' moradoexiste en el array')
    }else{
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