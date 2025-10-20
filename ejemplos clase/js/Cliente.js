export class Cliente {
            constructor(NIF, nombre, direccion, telefono, email) {
                this.NIF = NIF;
                this.nombre = nombre;
                this.direccion = direccion;
                this.telefono = telefono;
                this.email = email;
            }

            mostrarCliente() {
                console.log(
                    "NIF: " + this.NIF +
                    " Nombre: " + this.nombre +
                    " Dirección: " + this.direccion +
                    " Teléfono: " + this.telefono +
                    " Email: " + this.email
                );
            }
        }