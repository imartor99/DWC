const devuelveCookie = (nombre) =>{
    const name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





const mostrarCookie = () =>{
    console.log('Cookies ' + document.cookie);
    let resultado = devuelveCookie('prueba');
    console.log('Cookie buscada= ' + resultado);
}

const creaCookie = () =>{
    document.cookie="usuario=Juan";
    document.cookie="tema=Oscuro"
    fCrearCookie('prueba','12345',7);
    console.log('Cookie a mostrar');
}

const fCrearCookie = (nombre, valor, diasExpiracion) =>{
    let fechaExpiracion = "";
    if(diasExpiracion){
        const date = new Date();
        date.setTime(date.getTime() + (diasExpiracion*24*60*60*1000));
        fechaExpiracion = "; expires=" + date.toUTCString();
    }
    document.cookie = nombre + "=" + (valor || "")  + fechaExpiracion + "; path=/";
}


const main = () => {
    //crear una cookie
    console.log('Usando las cookies');
    console.log('---------------------------');

    document.getElementById('btnCrearCookie').addEventListener('click', creaCookie);
    document.getElementById('btnMostrarCookie').addEventListener('click', mostrarCookie);

    

}

document.addEventListener("DOMContentLoaded", main);