function cambiarEstilo(tema) {
  const body = document.getElementById("body");
  const section = document.getElementById("section");
  const parrafoNormal = document.getElementById("parrafo-normal");
  const marco = document.getElementById("marco");
  const menu = document.getElementById("menu");

  const enlaces = menu ? menu.querySelectorAll("a") : [];

  if (tema === "normal") {
    // TEMA NORMAL

    // ESTILOS BODY (Fondo y Columna Lateral)
    body.style.minHeight = "100vh";
    body.style.margin = "0";
    body.style.backgroundColor = "#FFFFE0";
    body.style.backgroundImage =
      "repeating-linear-gradient(90deg, #ADD8E6, #ADD8E6 10px, #4682B4 10px, #4682B4 20px)";
    body.style.backgroundSize = "200px 100%";
    body.style.backgroundRepeat = "no-repeat";
    body.style.padding = "20px 20px 20px 220px";

    // ESTILOS MENU (Nav)
    menu.style.backgroundColor = "#b4adf6ff";
    menu.style.border = "1px solid black";
    menu.style.color = "black";
    // ESTILOS COMUNES DE ENLACES
    enlaces.forEach((enlace) => {
      enlace.style.textDecoration = "none";
      enlace.style.fontSize = "1.5em";
      enlace.style.color = "blue";
      enlace.style.fontWeight = "bold";
    });

    // ESTILOS SECTION
    section.style.maxWidth = "1200px";
    section.style.margin = "0 auto";
    section.style.padding = "0";
    section.style.border = "none";

    // ESTILOS PÁRRAFO ESTILO NORMAL
    parrafoNormal.style.display = "block";
    parrafoNormal.style.fontWeight = "bold";

    // ESTILOS MARCO
    marco.style.backgroundColor = "#FFFF99";
    marco.style.border = "1px solid #CCCC00";
    marco.style.padding = "10px";
    marco.style.margin = "15px 0";
  } else if (tema === "minimalista") {
    //----------------------------------------------------------------------------------
    // TEMA MINIMALISTA

    // ESTILOS BODY (Fondo y Columna Lateral)
    body.style.backgroundColor = "#FFFFFF";
    body.style.backgroundImage = "none";
    body.style.backgroundSize = "none";
    body.style.backgroundRepeat = "none";

    // ESTILOS MENU (Nav)
    menu.style.border = "none";
    menu.style.backgroundColor = "white";
    enlaces.forEach((enlace) => {
      enlace.style.fontSize = "1.5em";
      enlace.style.textDecoration = "underline";
    });

    // ESTILOS SECTION
    section.style.maxWidth = "100%";
    section.style.border = "none";

    // ESTILOS PÁRRAFO CONDICIONAL
    parrafoNormal.style.display = "none";
    parrafoNormal.style.fontWeight = "normal";

    // ESTILOS MARCO
    marco.style.backgroundColor = "#FFFFFF";
    marco.style.border = "none";
    marco.style.padding = "0";
    marco.style.margin = "15px 0";
  }
}
