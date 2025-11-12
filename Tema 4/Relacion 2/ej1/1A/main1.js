function cambiarEstilo(tema) {
  const body = document.getElementById("body");
  const section = document.getElementById("section");
  const parrafoNormal = document.getElementById("parrafo-normal");
  const marco = document.getElementById("marco");
  const menu = document.getElementById("menu")

  if (tema === "normal") {
    // TEMA NORMAL
    body.style.minHeight = "100vh"; // Altura mínima del viewport
    body.style.margin = "0"; 
    body.style.backgroundColor = "#FFFFE0";

    //Columna lateral
    body.style.backgroundImage =
      "repeating-linear-gradient(90deg, #ADD8E6, #ADD8E6 10px, #4682B4 10px, #4682B4 20px)";
    body.style.backgroundSize = "200px 100%"; 
    body.style.backgroundRepeat = "no-repeat";
    body.style.padding = "20px 20px 20px 40px"; 

    //Estilos Nav
    menu.style.backgroundColor = "#b4adf6ff";
    menu.style.border = "1px solid black";
    menu.style.color = "black";


    // Estilos de Section 
    section.style.maxWidth = "1400px";
    section.style.margin = "0 auto";
    section.style.padding = "0";
    section.style.border = "none";

    // Párrafo visible
    parrafoNormal.style.display = "block";

    // Estilos del Marco (fondo amarillo fuerte)
    marco.style.backgroundColor = "#FFFF99";
    marco.style.border = "1px solid #CCCC00";
    marco.style.padding = "10px";
    marco.style.margin = "15px 0";
  } else if (tema === "minimalista") {
    // TEMA MINIMALISTA

    // Estilos del Body (fondo blanco y limpiar estilos)
    body.style.backgroundColor = "#FFFFFF";
    body.style.backgroundImage = "none"; // Limpiar background del tema normal
    body.style.backgroundSize = "none";
    body.style.backgroundRepeat = "none";
    body.style.padding = "0";

    // Estilos de Section
    section.style.maxWidth = "800px";
    section.style.margin = "20px auto";
    section.style.padding = "20px";
    section.style.border = "none";

    // Párrafo oculto
    parrafoNormal.style.display = "none";

    // Estilos del Marco
    marco.style.backgroundColor = "#FFFFFF";
    marco.style.border = "none";
    marco.style.padding = "0";
    marco.style.margin = "15px 0";
  }
}
