import { validaUsuario } from "./login.js";

const main = () => {
  const formulario = document.getElementById("formLogin");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("usuario").value;
    const passswordInput = document.getElementById("password").value;

    try {
      const UsuarioEncontrado = await validaUsuario(
        usernameInput,
        passswordInput
      );

      if (!UsuarioEncontrado) {
        alert("Credenciales Incorrectas, Intentelo de nuevo");
      } else {
        alert(
          "Inicio de sesion correcto. Bienvenido " +
            UsuarioEncontrado.username +
            "!"
        );
        localStorage.setItem('usuarioLogueado', JSON.stringify(UsuarioEncontrado))//almaceno credenciales
        window.location.href = "datos.html";
      }
    } catch (error) {
      console.log("hubo un error: " + error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", main);
