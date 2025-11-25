import db from './db.json' with { type: 'json' };

function crearDiv(nodoPadre){
    for (let i=0; i< db.length;i++){
        let producto = db[i];

        const div = document.createElement('div');
        div.id = `Producto-${producto.id}`;

        div.addEventListener('click', mostrarDetalle);

        const pId = document.createElement('p');
        pId.textContent = `ID: ${producto.id}`;
        div.appendChild(pId);

        const pNombre = document.createElement('p');
        pNombre.textContent = `Nombre: ${producto.title}`;
        div.appendChild(pNombre);

        const pPrecio = document.createElement('p');
        pPrecio.textContent = `Precio: ${producto.price} €`;
        div.appendChild(pPrecio);

        const pImg = document.createElement('img');
        pImg.src = producto.image;
        pImg.alt = producto.title;
        pImg.style.width = '100px';
        div.appendChild(pImg);

        nodoPadre.appendChild(div);
    }
}

function hacerFlex() {
    const contenedor = document.getElementById('contenedor');
    contenedor.style.width = '80%';
    contenedor.style.margin = '0 auto';
    //margen superior div padre
    contenedor.style.marginTop = '100px';
    contenedor.style.display = 'flex';
    contenedor.style.flexWrap = 'wrap';
    contenedor.style.justifyContent = 'space-evenly';
    contenedor.style.padding = '30px 20px';
    contenedor.style.gap = '20px'; 
    contenedor.style.border = '1px solid black';
    
    const divs = contenedor.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.border = '1px solid black';
        divs[i].style.padding = '10px';
        //mismo tamaño para cada card ocupando 4 cards por fila
        divs[i].style.flex = '1 1 calc(25% - 40px)'; 
        divs[i].style.boxSizing = 'border-box';
        divs[i].style.textAlign = 'center';
    }
}

function crearSelect() {
    // Extraer categorías únicas
    const categorias = [];
    db.forEach(producto => {
        if (!categorias.includes(producto.category)) {
            categorias.push(producto.category);
        }
    });

    // creo el elemento select y opciones
    const opcion = document.createElement('select');
    const opcionTodas = document.createElement('option');
    opcionTodas.value = '';
    opcionTodas.textContent = 'Todas las categorías';
    opcion.appendChild(opcionTodas);
    // creo las opciones del select
    categorias.forEach(categoria => {
        const opcionCategoria = document.createElement('option');   
        opcionCategoria.value = categoria;
        opcionCategoria.textContent = categoria;
        opcion.appendChild(opcionCategoria);
    });


    //añado select encima del contenedor
    const contenedor = document.getElementById('contenedor');
    contenedor.parentNode.insertBefore(opcion, contenedor);

    // añado evento change al select
    opcion.addEventListener('change', (event) => {
        const categoriaSeleccionada = event.target.value;
        const divs = contenedor.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            const producto = db[i];
            if (producto.category === categoriaSeleccionada || categoriaSeleccionada === '') {
                divs[i].style.display = 'block';
            } else {
                divs[i].style.display = 'none';
            }
        }
    });

}

function mostrarDetalle(event){
    const clickDiv = event.currentTarget;
    const productoIdString = clickDiv.id.split('-')[1];
    const productoId = parseInt(productoIdString);

    const producto = db.find(p => parseInt(p.id) === productoId);
    if (producto) {
        const detalle = `<p>
        <strong>Detalles del Producto:</strong> <br>
        ------------------------------------------------- <br><br>
        <b>Categoria</b>: ${producto.category} <br><br>
        <b>Descripción</b>: ${producto.description} <br><br>
        <b>Valoracion</b>: ${producto.rating.rate} (basada en ${producto.rating.count} reviews)
        </p>
        `;

        //añado el detalle al div clicado
        clickDiv.innerHTML += detalle;  
    }else{
        alert('Datos del producto no encontrado');
    }

}

const main = () => {
    const contenedor = document.getElementById('contenedor');
    crearSelect();
    crearDiv(contenedor);
    hacerFlex();
}

document.addEventListener('DOMContentLoaded', main);