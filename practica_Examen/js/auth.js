// Función para verificar si el usuario está logueado
export function verificarLogin() {
  const usuario = localStorage.getItem('usuarioLogueado');
  // console.log(usuario);
  if (!usuario) {
    // Si NO hay usuario guardado, redirigir a login
    alert('Debes iniciar sesión primero');
    window.location.href = 'login.html';
    return null;
  }
  
  // Si hay usuario, convertir el texto de vuelta a objeto
  return JSON.parse(usuario);
}

// Función para cerrar sesión
export function cerrarSesion() {
  localStorage.removeItem('usuarioLogueado');
  window.location.href = 'login.html';
}