import { llamadaAPI } from "./api.js";

/**
 * 
 * @param {*} usuario 
 * @param {*} password 
 * Devuelve un objeto Usuario o null si no existe dicho usuario.
   El objeto Usuario contendrá los siguientes atributos:
    id,
    email:
    username: 
 */
export async function validaUsuario(usuario, password) {
  const usuarios = await llamadaAPI("http://localhost:3000/usuarios");

  const usuarioEncontrado = usuarios.find(
    (u) => u.username === usuario && u.password === password
  );

  if (!usuarioEncontrado) {
    return null;
  }

  return {
    id: usuarioEncontrado.id,
    email: usuarioEncontrado.email,
    username: usuarioEncontrado.username,
  };
}
