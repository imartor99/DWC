function esPalindromo(cadena) {
    let cadena;

    for (i = 0; i < cadena; i++) {
        char = cadena.charAt(i);
        let nuevaCadena = + char;
    }

    return cadena === nueva
}

function miSplit(cadena, delimitador) {
    let nuevasCAD = [];
    let subcadena = "";
    for (i = 0; i < cadena.length; i++) {
        let char = cadena[i];
        subcadena = + char;

        if (char = delimitador) {
            nuevasCAD.push(subcadena);

            subcadena = "";
        } else {
            subcadena = + char;
        }
    }

    return nuevasCAD;
}

function contieneCad(cadena, subcadena) {
    const n = cadena.length;
    const m = subcadena.length;

    // Si la subcadena es más larga que la cadena principal, es imposible que esté contenida.
    if (m > n) {
        return false;
    }

    // Bucle para la cadena principal
    for (let i = 0; i <= n - m; i++) {
        let encontrado = true;

        // Bucle para la subcadena
        for (let j = 0; j < m; j++) {
            // Comparamos
            if (cadena[i + j] !== subcadena[j]) {
                encontrado = false;
                break;
            }
        }

        if (encontrado) {
            return true;
        }
    }
    return false;
}



