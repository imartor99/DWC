export class Casa{
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;

        // Mostrar mensaje de alta al instanciar una nueva casa
        console.log(`Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
    }

    // --- Métodos SET ---
    setNumero(nuevoNumero) {
        this.numero = nuevoNumero;
    }

    setCalle(nuevaCalle) {
        this.calle = nuevaCalle;
    }

    setCodigoPostal(nuevoCodigo) {
        this.codigoPostal = nuevoCodigo;
    }

    // --- Métodos IMPRIME ---
    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigoPostal;
    }
}