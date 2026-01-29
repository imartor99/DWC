import React, { useState } from "react";

export default function FormularioArticulo() {
  const [formulario, setFormulario] = useState({ codigo: "", nombre: "" });

  const handleOnChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value.toUpperCase(),
    });
  };

  return (
    <div>
      <h2>Formulario Articulo</h2>
      <form action="">
        <label htmlFor="">Codigo:</label>
        <input
          type="text"
          value={formulario.codigo}
          name="codigo"
          onChange={handleOnChange}
        />

        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          value={formulario.nombre}
          name="nombre"
          onChange={handleOnChange}
        />
      </form>
      <p>Codigo: {formulario.codigo} | Nombre: {formulario.nombre}</p>
    </div>
  );
}
