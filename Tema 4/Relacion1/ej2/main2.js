// 2. Captura el movimiento del ratón, para que se muestre la posición en la que se encuentra en cada momento.
function capturaRaton() {
    document.addEventListener('mousemove',(event)=>{
        console.log(`Raton en ${event.clientX}, ${event.clientY}`);
    })
}


(()=>{
    capturaRaton();
})();