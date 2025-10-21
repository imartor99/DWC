import { Articulo } from './Articulo.js'

export class Articulos {
    constructor(arArticulos) {
        this.listaArticulos = arArticulos;
    }

    inicializaDatos() {
        const arArticulos = [];
        console.log("Inicializando datos.....")
        for (let i = 0; i < 3; i++) {
            arArticulos.push(new Articulo(i + 1, `Articulos ${ i + 1}`, (i + 1)))
    }
        return arArticulos;
    }

/**
 * True si existe el artículo con el código indicado, falso en caso contrario
 * @param {*} codigo del artículo
 * @returns 
 */
existeArticulo(codigo) {
    if (this.listaArticulos.find(art => art.codigo === codigo) === undefined)
        return false
    return true
}


/**
 * Devueve un array con los artículos superiores a precio minimo
 * @param {*} precioMinimo
 */
filtrarPorPrecio(precioMinimo) {
    return this.listaArticulos.filter(art => art.precio > precioMinimo)
}


/**
 * Filtra los artículos según la función de callback proporcionada
 * @param {*} callback función del filtro
 */
filtra(callback) {
    return this.listaArticulos.filter(callback)
}


addArticulo(articulo) {
    this.listaArticulos.push(articulo);
}

removeArticulo(cod) {
    return this.listaArticulos = this.listaArticulos.filter(({ codigo }) => codigo !== cod)
}

}