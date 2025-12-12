import { llamadaAPI } from "./api.js";

// TODO: Implementar función validaUsuario(usuario, password)
export async function validaUsuario(usuario,password) {

    const usuarios = await llamadaAPI('https://futuramaapi.com/api/users');

    const UsuarioEncontrado = usuarios.items.find(
        (u)=> u.username === usuario && u.name === password
    );

    if(!UsuarioEncontrado){
        return null;
    }

    return {
        id: UsuarioEncontrado.id,
        name : UsuarioEncontrado.name,
        username : UsuarioEncontrado.username
    }
    
}
