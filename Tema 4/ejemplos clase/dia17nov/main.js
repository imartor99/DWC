import db from './db.json' with { type: 'json' };

function crearDiv(nodoPadre) {
    for (let i = 0; i < db.students.length; i++) {
        const student = db.students[i];

        const div = document.createElement('div');
        div.id = `student-${student.id}`;
        
        const pName = document.createElement('p');
        pName.textContent = `Name: ${student.name}`;
        div.appendChild(pName);
        
        const pLevel = document.createElement('p');
        pLevel.textContent = `Level: ${student.level}`;
        div.appendChild(pLevel);

        const pStatus = document.createElement('p');
        pStatus.textContent = `Active: ${student.active}`; 
        div.appendChild(pStatus); 

        nodoPadre.appendChild(div);
    }
}

function hacerFlex() {
    const contenedor = document.getElementById('contenedor');
    contenedor.style.display = 'flex';
    contenedor.style.justifyContent = 'space-evenly';
    contenedor.style.padding = '30px 20px'
    contenedor.style.gap = '20px'; 
    contenedor.style.border = '1px solid black'
    
    const divs = contenedor.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.border = '1px solid black';
        divs[i].style.padding = '10px';
    }
}

function filtrarActivos() {
    const checkbox = document.getElementById('activeOnly');
    const contenedor = document.getElementById('contenedor');
    const divs = contenedor.getElementsByTagName('div');

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        
        // Convierto ID del estudiante a numérico para la búsqueda
        const studentId = parseInt(div.id.split('-')[1]); 
        
        // Se busca el estudiante
        const student = db.students.find(s => parseInt(s.id) === studentId); 

        if (checkbox.checked) {
            // Muestro solo si existe y student.active es true
            if (student && student.active) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        } else {
            // Si el checkbox no esta marcado, muestro todos
            div.style.display = 'block';
        }
    }
}

function crearDom() {
    crearDiv(document.getElementById('contenedor'));
    hacerFlex();
    const checkbox = document.getElementById('activeOnly');
    checkbox.addEventListener('change', filtrarActivos);
}

document.addEventListener("DOMContentLoaded", crearDom);