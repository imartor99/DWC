import { devuelvePersonajes } from "./main.js";

function validarLogin(usuario, password) {
  const arrUsuarios = devuelvePersonajes();
  return arrUsuarios.then((usuarios) => {
    const usuarioEncontrado = usuarios.find(
      (u) => u.name === usuario && u.gender === password
    );
    return usuarioEncontrado;
  });
}

const main = () => {
  const formulario = document.getElementById("formularioLogin");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    validarLogin(usernameInput, passwordInput).then(usuarioEncontrado);
    console.log("Resultado valida usuario: ", usuarioEncontrado);
    if (usuarioEncontrado) {
      localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuarioEncontrado)
      );
      alert("Login exitoso. ¡Bienvenido, " + usuarioEncontrado.name + "!");
      window.location.href = "index.html";
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
