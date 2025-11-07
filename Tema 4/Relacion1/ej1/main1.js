// 1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
function showAlert() {
    document.addEventListener('click', function() {
        alert('¡Has hecho clic en algún lugar de la página!');
    });
}   


(()=>{
    showAlert();
})();