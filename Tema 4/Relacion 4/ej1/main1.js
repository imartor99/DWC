/**
 * validarMayuscula: Verifica que la cadena contenga al menos un carácter en mayúscula.
 * @param {string} 
 * @returns {boolean}
 */
function validarMayuscula(valor) {
  return /[A-Z]/.test(valor);
}

/**
 * validarCaracteresEspeciales: Verifica que la cadena contenga al menos uno de los caracteres: !@#$%^&
 * @param {string} 
 * @returns {boolean}
 */
function validarCaracteresEspeciales(valor) {
  return /[!@#$%^&]/.test(valor);
}

/**
 * validarCorreo: Verifica que la cadena tenga el formato básico de un email (ej. usuario@dominio.com).
 * @param {string} 
 * @returns {boolean}
 */
function validarCorreo(valor) {
  // Expresión típica de email:
  // ^[^\s@]+: Empieza con uno o más caracteres que no sean espacio ni @.
  // @: Debe seguir un símbolo @.
  // [^\s@]+: Debe seguir uno o más caracteres que no sean espacio ni @ (el dominio).
  // \.: Debe seguir un punto (escapado con \).
  // [^\s@]+$: Debe terminar con uno o más caracteres (la extensión .com, .net, etc.).
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

/**
 * validarTarjetaCredito: Verifica el formato correcto de una tarjeta de crédito (ej. 16 dígitos separados o no por guiones/espacios).
 * @param {string} 
 * @returns {boolean}
 */
function validarTarjetaCredito(valor) {
  // (\d{4}[- ]?){3}: Busca 4 dígitos seguidos opcionalmente de un guion o espacio, repetido 3 veces.
  // \d{4}: Termina con 4 dígitos.
  // ^...$: Asegura que coincida con toda la cadena.
  const regex = /^(\d{4}[- ]?){3}\d{4}$/;
  return regex.test(valor);
}

/**
 * validarLongitud: Verifica que la cadena tenga al menos 8 caracteres.
 * @param {string} 
 * @returns {boolean}
 */
function validarLongitud(valor) {
  // .{8,}: Busca cualquier carácter (.), repetido al menos 8 veces ({8,}).
  return /.{8,}/.test(valor);
}

/**
 * validarNumero: Verifica que la cadena contenga al menos un dígito.
 * @param {string} 
 * @returns {boolean}
 */
function validarNumero(valor) {
  // \d: Es el atajo para [0-9], busca cualquier dígito.
  return /\d/.test(valor);
}

// --- EJEMPLOS DE USO ---

console.log("--- validarMayuscula ---");
console.log("MAYUSCULA: " + validarMayuscula("HolaMundo"));
console.log("minuscula: " + validarMayuscula("holamundo")); 

console.log("\n--- validarCaracteresEspeciales ---");
console.log("Con @: " + validarCaracteresEspeciales("password@123"));
console.log("Sin especiales: " + validarCaracteresEspeciales("password123")); 

console.log("\n--- validarCorreo ---");
console.log("Válido: " + validarCorreo("test.user@dominio.com"));
console.log("Inválido (sin @): " + validarCorreo("test.userdominio.com")); 

console.log("\n--- validarTarjetaCredito ---");
console.log(
  "Separada por guion: " + validarTarjetaCredito("1234-5678-9012-3456")
); // true
console.log("Sin separación: " + validarTarjetaCredito("1234567890123456"));
console.log("Longitud incorrecta: " + validarTarjetaCredito("12345")); 

console.log("\n--- validarLongitud ---");
console.log("8 caracteres: " + validarLongitud("12345678"));
console.log("7 caracteres: " + validarLongitud("1234567")); 

console.log("\n--- validarNumero ---");
console.log("Con dígito: " + validarNumero("hola123")); 
console.log("Solo letras: " + validarNumero("abc")); 
