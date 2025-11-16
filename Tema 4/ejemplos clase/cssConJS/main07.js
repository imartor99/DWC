const eventosDiv=()=>{
    let div = document.getElementById("div1")

    document.getElementById("div1").addEventListener("mouseover", (event)=>{
        document.getElementById("div1").style.backgroundColor= colorHover;
        document.getElementById("div1").textContent = `(${event.clientX}, ${event.clientY})`;
        console.log(object);
    })
}

(()=>{
    eventosDiv();
})();