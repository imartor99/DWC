function CargarDatos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("respuestaDelServidor").innerHTML =
        this.responseText;
    }

    console.log("Ready state:" + this.readyState, "-", this.status);
  };
  xhttp.open("GET", "https://fakestoreapi.com/products", true);
  xhttp.send();
}

function CargarDatosOnLoad() {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let arDatos = JSON.parse(this.responseText);
    console.log(arDatos);
    formatearDatos(arDatos);
    hacerFlex();
  };
  xhttp.open("GET", "https://fakestoreapi.com/products", true);
  xhttp.send();
}


function formatearDatos(ar) {
    //meter cada articulo en un div
    let contenedor = document.getElementById("contenedorDatos");
    ar.forEach((articulo) => {
        let divArticulo = document.createElement("div");
        divArticulo.classList.add("articulo");
        divArticulo.innerHTML = `<h3><b>${articulo.title}</b></h3>
        <img src="${articulo.image}" alt="${articulo.title}" />
        <p><b>Precio: </b> ${articulo.price} €</p>
        <p><b>Categoría: </b> ${articulo.category}</p>
        <p><b>Descripción: </b> ${articulo.description}</p>`;
        contenedor.appendChild(divArticulo);
    });
}

function hacerFlex() {
  let contenedor = document.getElementById("contenedorDatos");
  let boton = document.getElementById("cargaDatos");
  contenedor.classList.add("contenedor");
  boton.classList.add("boton");
}

const main = () => {
  console.log("Cargando script main ejemplo XMLHttpRequest");
  document
    .getElementById("cargaDatos")
    .addEventListener("click", CargarDatosOnLoad);
};

document.addEventListener("DOMContentLoaded", main);
