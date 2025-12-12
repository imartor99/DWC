export function verificarLogin(){
    const usuario = localStorage.getItem('usuarioLogueado')

    if(!usuario){
        alert('Debes logearte antes de usar la app')
        window.location.href = 'login.html'
        return null
    }

    return JSON.parse(usuario);
}

export function cerrarSesion(){
    localStorage.removeItem('usuarioLogueado');
    window.location.href='login.html';
}
