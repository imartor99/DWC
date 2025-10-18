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
