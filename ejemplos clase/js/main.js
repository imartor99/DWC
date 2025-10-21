import { Articulo } from "./Articulo.js";
import { Articulos } from "./Articulos.js"


let dbDatosArticulos = []
let dbArt;


let fInit = () => {
    let art1 = new Articulo(1, "Camiseta", 19.90);
    let art2 = new Articulo(2, "Pantalón", 39.99);
    let art3= new Articulo(3, "Zapatos", 59.99);

    dbArt= new Articulos([art1,art2,art3, new Articulo(4, "Chaqueta", 89.99)])

    dbDatosArticulos.push(art1,art2,art3);
    console.log("Datos de artículos iniciados")
}


(function () {
    console.log("main.js Cargado")
    fInit()
    console.log("dbDatosArticulos", dbDatosArticulos)

    //filtrar los artículos
    let valoresFiltrados = [4,5,6].filter(num => num >= 5)
    console.log("Valores filtrados mayor o igual a 5", valoresFiltrados)

    let articulosFiltrados = dbDatosArticulos.filter(art => art.precio > 30)
    console.log("Articulos precio mayor que 30", articulosFiltrados)

    //con destructuración
    let articulosFiltradosDestructurados = dbDatosArticulos.filter(({ precio }) => precio > 30)
    console.log("Articulos precio mayor que 30 con destructuración", articulosFiltradosDestructurados)

    dbArt.existeArticulo(2)?console.log("El articulo con cógigo 2 existe"): console.log("El articulo con ese codigo no existe")

    console.log("Filtrar por precio", dbArt.filtrarPorPrecio(40))

    //Filtrar según la función que pongas
    console.log("Filtra (por el campo que quieras) codigo menor que 3", dbArt.filtra( ({codigo}) => codigo < 3))

    // Me muestra mi array quitandome el que el código actual es 2
    console.log("Eliminar por código", dbArt.removeArticulo(2))
})();