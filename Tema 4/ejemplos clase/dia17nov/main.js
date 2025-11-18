import db from './db.json' with { type: 'json' };

function crearDiv(nodoPadre) {
    for (let i = 0; i < db.students.length; i++) {
        const student = db.students[i];

        const div = document.createElement('div');
        div.id = `student-${student.id}`;

        div.addEventListener('click', mostrarDetallesDelEstudiante);
        
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
//Filtro estudiantes por estado(active)
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

function mostrarDetallesDelEstudiante(event) {
    const clickedDiv = event.currentTarget;
    // Extraer el ID único del estudiante del ID del div target
    const studentIdString = clickedDiv.id.split('-')[1];
    const studentId = parseInt(studentIdString);


    const student = db.students.find(s => parseInt(s.id) === studentId);

    if (student) {
        const detalles = `<p>
            Detalles del Estudiante: <br>
            ---------------------------------- <br>
            Nombre: ${student.name} <br>
            ID: ${student.id} <br>
            Nivel: ${student.level} <br>
            Activo: ${student.active} <br>
            Email: ${student.email || 'N/A'} <br>
            Fecha de Inscripción: ${student.enrollmentDate || 'N/A'}
        </p>
        `;

        // Creo un div para mostrar los detalles en lugar de un alert
        const divDetalles = document.createElement('div');
        divDetalles.style.border = '1px solid black';
        divDetalles.style.padding = '10px';
        divDetalles.style.marginTop = '20px';
        divDetalles.innerHTML = detalles;

        // Añado el div al body
        document.body.appendChild(divDetalles);
        
        
        // alert(detalles);
    } else {
        alert(`Estudiante con ID ${studentId} no encontrado en la DB.`);
    }
}

function crearDom() {
    crearDiv(document.getElementById('contenedor'));
    hacerFlex();
    const checkbox = document.getElementById('activeOnly');
    checkbox.addEventListener('change', filtrarActivos);
}

document.addEventListener("DOMContentLoaded", crearDom);