export function verificaLogin() {
  const usuarioLog = localStorage.getItem("usuarioLogueado");

  if (!usuarioLog) {
    alert("Debe loguearse antes de entrar a HOME");
    window.location.href = "login.html";
  }
}

export function cerrarSesion(){
    localStorage.removeItem('usuarioLogueado');
    window.location.href='login.html';
}