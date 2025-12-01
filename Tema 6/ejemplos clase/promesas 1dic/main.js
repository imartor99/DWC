function obtenerProductos() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      formatearDatos(json);
      hacerFlex();
    })
    .catch((error) => console.log("Hubo un error: " + error.message));
}

function obtenerProductoPorId(id) {
  return fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .catch((error) => console.log("Hubo un error: " + error.message));
}

function formatearDatos(ar) {
  let contenedor = document.getElementById("contenedorDatos"); 
  ar.forEach((articulo) => {
    let divArticulo = document.createElement("div");
    divArticulo.classList.add("articulo");

    divArticulo.innerHTML = `<h3><b>${articulo.title}</b></h3>
        <img src="${articulo.image}" alt="${articulo.title}" />`;

    divArticulo.addEventListener("click", () => {
      if (divArticulo.querySelector(".detalles")) return;

      obtenerProductoPorId(articulo.id).then((productoCompleto) => {
        if (productoCompleto) {
          let detallesDiv = document.createElement("div");
          detallesDiv.classList.add("detalles");
          detallesDiv.innerHTML = `
                        <p><b>Precio: </b> ${productoCompleto.price} €</p>
                        <p><b>Categoría: </b> ${productoCompleto.category}</p>
                        <p><b>Descripción: </b> ${productoCompleto.description}</p>
                    `;
          divArticulo.appendChild(detallesDiv);
        }
      });
    });

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
  console.log("Cargando script main ejemplo Fetch");
  document.getElementById("cargaDatos").addEventListener("click", obtenerProductos);
};

document.addEventListener("DOMContentLoaded", main);
