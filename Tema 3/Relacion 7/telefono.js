export class Telefono {
   
    constructor(numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
        this.numeroDeLlamadas = 0; // Propiedad inicializada en cero
    }

    llamar() {
        this.numeroDeLlamadas++;
    }
}