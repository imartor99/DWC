const main= ()=> {
  const datos = [
    { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
    { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
    { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
    { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 },
  ];

  const tbody = document.querySelector("#tabla-personas tbody");

  datos.forEach((persona) => {
    const tr = document.createElement("tr");

    // Crear celdas para cada propiedad
    const tdCodigo = document.createElement("td");
    tdCodigo.textContent = persona.codigo;
    tr.appendChild(tdCodigo);

    const tdDni = document.createElement("td");
    tdDni.textContent = persona.dni;
    tr.appendChild(tdDni);

    const tdNombre = document.createElement("td");
    tdNombre.textContent = persona.Nombre;
    tr.appendChild(tdNombre);

    const tdEdad = document.createElement("td");
    tdEdad.textContent = persona.edad;
    tr.appendChild(tdEdad);

    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", main);
