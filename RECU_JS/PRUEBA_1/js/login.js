import { llamadaApi } from "./api.js";

export async function validaUsuario(obUsuario){
  const resUsuarios = await llamadaApi('https://dummyjson.com/users');
  const usuarios = resUsuarios.users;

  const usuarioEncontrado = usuarios.find((u) => u.username === obUsuario.usuario && u.password === obUsuario.password);

  if(!usuarioEncontrado) return null;

  const usuarioFormatedo = {
    usuario : usuarioEncontrado.username,
    email : usuarioEncontrado.email,
    id : usuarioEncontrado.id
  };

  return usuarioFormatedo;
}