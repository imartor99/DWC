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