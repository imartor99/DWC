import React, { useState } from "react";
import styles from "./ReadingList.module.css";
export default function ReadingList() {
  // Inicializo el estado 'libros' con un array de objetos predefinidos.
  // setLibros es la función que uso para actualizar este estado.
  const [libros, setLibros] = useState([
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
  ]);

  // Función para marcar un libro como leído.
  // Recibe el 'id' del libro que quiero marcar.
  const libroLeido = (id) => {
    setLibros(
      // .map para crear un NUEVO array basado en el anterior
      libros.map((libro) => {
        // Si encuentro el libro coincidente por ID
        if (libro.id === id) {
          // devuelvo una COPIA del libro (...libro) con los campos modificados.
          // NO modifico 'libro' directamente, creo un nuevo objeto.
          return { ...libro, leido: true, fechaLectura: new Date() };
        }
        // Si no es el libro que busco, lo devuelvo tal cual.
        return libro;
      }),
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Reading List</h2>
      <ul className={styles.list}>
        {/* Recorro el array de libros para generar un <li> por cada uno */}
        {libros.map((libro) => (
          <li key={libro.id} className={styles.card}>
            <h3 className={styles.bookTitle}>{libro.titulo}</h3>
            <p className={styles.bookInfo}>
              <strong>Autor:</strong> {libro.autor}
            </p>
            <p className={styles.bookInfo}>
              <strong>Género:</strong> {libro.genero}
            </p>
            {/* Renderizado condicional:
                Si 'libro.leido' es true, muestro la fecha.
                Si es false, muestro el botón para marcarlo. */}
            <div className={styles.readStatus}>
              {libro.leido ? (
                <p className={styles.readText}>
                  Leído el {libro.fechaLectura.toLocaleDateString()}
                </p>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => libroLeido(libro.id)}
                >
                  Marcar como leído
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
