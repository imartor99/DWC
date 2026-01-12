import { validaUsuario } from "./login.js";

const main = () => {
    const formLogin = document.getElementById("formLogin")

    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        const obUsuario = {
            usuario : usuario,
            password : password
        };

        const usuarioEncontrado = await validaUsuario(obUsuario);

        if(usuarioEncontrado){
            alert(`Bienvenid@ ${usuarioEncontrado.usuario}!!`);
            localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
            window.location.href = 'index.html';
        }else{
            alert('Credenciales incorrectos, intentelo de nuevo')
        }
    })
}


document.addEventListener('DOMContentLoaded', main);