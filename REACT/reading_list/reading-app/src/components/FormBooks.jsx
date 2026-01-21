import React from "react";

export default function FormBooks({ libros, setLibros }) {
  const añadeLibros = (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;

    setLibros([
      ...libros,
      {
        id: libros.length + 1,
        titulo: titulo,
        autor: autor,
        genero: genero,
        leido: false,
        fechaLectura: null,
      },
    ]);
  };

  return (
    <div>
      <h2>Añadir libros</h2>
      <form>
        <label>Titulo:</label>
        <input type="text" name="titulo" id="titulo" />
        <br />
        <br />

        <label>Autor:</label>
        <input type="text" name="autor" id="autor" />
        <br />
        <br />

        <label>Género:</label>
        <input type="text" name="genero" id="genero" />
        <br />
        <br />

        <button type="submit" onClick={añadeLibros}>
          Añadir libro
        </button>
      </form>
    </div>
  );
}
