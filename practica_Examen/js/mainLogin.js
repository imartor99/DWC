import { validaUsuario } from "./login.js";

const main = () => {
  const formulario = document.getElementById("formLogin");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("usuario").value;
    const passwordInput = document.getElementById("contraseña").value;

    try {
      const usuarioEncontrado = await validaUsuario(
        usernameInput,
        passwordInput
      );
      console.log("Resultado de validaUsuario:", usuarioEncontrado);

      if (usuarioEncontrado) {
        localStorage.setItem(
          "usuarioLogueado",
          JSON.stringify(usuarioEncontrado)
        );
        alert(
          "Login exitoso. ¡Bienvenido, " + usuarioEncontrado.username + "!"
        );
        window.location.href = "datos.html";
      } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.log("Hubo un error: " + error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
