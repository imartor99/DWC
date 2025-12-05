import { llamadaAPI } from "./llamadaApi.js";

const main = () => {
  const formulario = document.getElementById("formLogin");
  console.log("Prueba");

  formulario.addEventListener("submit", (event) => {
    console.log("Prueba");
    event.preventDefault();
    //verifico que inputs coincidan con usuario igual a name de la llamada fetch y password igual al email de la llamada fetch
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    //mirar getApiCallback
    llamadaAPI("http://localhost:3000/students")
      .then((usuarios) => {
        const usuarioEncontrado = usuarios.find(
          (usuario) =>
            usuario.name === usernameInput && usuario.email === passwordInput
        );
        if (usuarioEncontrado) {
          alert("Login exitoso. ¡Bienvenido, " + usuarioEncontrado.name + "!");
          window.location.href = "index.html";
        } else {
          alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
      })
      .catch((error) => console.log("Hubo un error: " + error.message));
  });
};

document.addEventListener("DOMContentLoaded", main);
