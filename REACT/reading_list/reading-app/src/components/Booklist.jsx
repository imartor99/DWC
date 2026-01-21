import React from "react";
import ReadingList from "./ReadingList";
import FormBooks from "./FormBooks";
import { useState } from "react";

export default function Booklist() {
  const arrLibros = [
    {
      id: 1,
      titulo: "El Quijote",
      autor: "Miguel de Cervantes",
      genero: "Novela",
      leido: false,
      fechaLectura: null,
    },
    {
      id: 2,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      leido: false,
      fechaLectura: null,
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción",
      leido: false,
      fechaLectura: null,
    },
  ];

  const [libros, setLibros] = useState(arrLibros);

  return (
    <div>
      <>
        <ReadingList libros={libros} setLibros={setLibros}/>
        <FormBooks libros={libros} setLibros={setLibros}/>
      </>
    </div>
  );
}
