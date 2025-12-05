import { llamadaAPICallback } from "./llamadaApiCALLBACK";  

const procesadatos = (datos) => {
  const $framento = document.createElement("fragment");

  document.getElementById("contenedor").innerHTML = "";

  datos.forEach((element) => {
    let $p = document.createElement("p");
    $p.textContent = " " + element.title + " " + element.price;
    $framento.appendChild($p);
    console.log(element);
  });
  document.getElementById("contenedor").appendChild($framento);
};

const procesandoerror=(error) => {
  document.getElementById("contenedor").innerHTML = "Error en petición..";
  console.error('Error en petición...' + error)
}

const main = () => {
    
}

document.addEventListener("DOMContentLoaded", main);