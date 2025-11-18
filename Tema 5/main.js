import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  console.log(arrArticulos);
  arrArticulos.forEach((articulo) => {
    console.log(articulo);
  });
})();


