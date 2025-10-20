 export class Articulo {
            constructor(codigo, nombre, precio) {
                this.codigo = codigo;
                this.nombre = nombre;
                this.precio = precio;
            }

            get pvp() {
                return this.precio * 1.21;
            }

            mostrarArticulo() {
                console.log(
                    "Código: " + this.codigo +
                    " Nombre: " + this.nombre +
                    " Precio: " + this.precio +
                    " PVP: " + this.pvp
                );
            }
        }