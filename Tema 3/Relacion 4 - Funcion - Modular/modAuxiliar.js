/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean menor al valor del filtro.
 *
 * @param {number[]} numbers Array de números a filtrar
 * @param {number} filter Número a partir del cuál filtrar los demás números
 * @returns {Number[]} Array de números filtrados menores a {filter}
 */
function filterNumbersGreaterThan(numbers, filter) {
    return numbers.filter(number => number < filter);
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Transforma 'a' en 4, 'e' en 3, 'i' en 1, 'o' en 0, y 's' en 5.
 *
 * @param {string} text El texto a convertir
 * @returns {String} El texto convertido a "Hacker Speak"
 */
function toHackerSpeak(text) {
    const map = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };
    
    // Convierte a minúsculas y usa replace() con una expresión regular global para sustituir.
    return text.toLowerCase().replace(/[aeios]/g, char => map[char]);
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file El nombre del archivo a obtener la extensión
 * @returns {String} - La extensión del archivo
 */
function getFileExtension(file) {
    const parts = file.split('.');
    if (parts.length > 1 && parts[parts.length - 1] !== "") {
        return parts.pop();
    }
    return "";
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los items
 *
 * @param {[][]} arr Array 2D a "aplanar"
 * @returns {[]} El array "aplanado"
 */
function flatArray(arr) {
    return arr.flat();
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr Array con duplicados a remover
 * @returns {[]} El array resultante sin duplicados
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 *
 * @param {string} Letter Letra a contar
 * @param {string} text Texto sobre el que realizar la cuenta de {Letter}
 * @returns {Number} Número de veces que aparece {Letter} en {text}
 */
function countLetter(Letter, text) {
    const regex = new RegExp(Letter, 'gi');
    const matches = text.match(regex);

    return matches ? matches.length : 0;
}

// ----------------------------------------------------------------------------------------------------------------------

/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el
 * string sin las palabras removidas
 *
 * @param {string} str Texto a recortar
 * @param {string[]} words Palabras a remover
 * @returns {string} Texto resultante con las palabras removidas
 */
function removeWords(str, words) {
    let result = str;

    words.forEach(word => {
        // Usa \b (límite de palabra) para asegurar que solo se reemplace la palabra completa.
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        result = result.replace(regex, '');
    });

    // Limpia los espacios extra y recorta.
    return result.replace(/\s+/g, ' ').trim();
}