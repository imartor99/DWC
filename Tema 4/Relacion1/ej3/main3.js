//3. Haciendo uso del evento onLoad, muestra el tiempo transcurrido desde la carga de la página.
const inicioCarga = Date.now();
function tiempoDesdeCarga() {
    window.addEventListener('load', ()=>{
        const finCarga = Date.now();
        
        const diferenciaSegundos = finCarga - inicioCarga;
        alert(`Tiempo transcurrido desde la carga de la página: ${diferenciaSegundos} milisegundos`);
    })
}
(()=>{
    tiempoDesdeCarga();
})();