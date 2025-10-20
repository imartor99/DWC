 export class Albaran {
            constructor(cliente, nAlbaran, fecha, lineas = []) {
                this.cliente = cliente;
                this.nAlbaran = nAlbaran;
                this.fecha = fecha;
                this.lineas = lineas;
            }

            addArticulo(articulo) {
                this.lineas.push(articulo);
            }

            getTotal() {
                return this.lineas.reduce(function (total, art) {
                    return total + art.pvp;
                }, 0);
            }

            mostrarAlbaran() {
                console.log("ALBARÁN Nº " + this.nAlbaran);
                this.cliente.mostrarCliente();
                console.log(
                    "Fecha: " + this.fecha +
                    "Número de artículos: " + this.lineas.length + "\n"
                );
                console.log("Artículos: ");

                for (let i = 0; i < this.lineas.length; i++) {
                    this.lineas[i].mostrarArticulo();
                }

                console.log("TOTAL: " + this.getTotal() + "€");
            }
        }