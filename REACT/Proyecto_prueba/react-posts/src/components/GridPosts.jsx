import React from "react";
import useGet from "../hooks/useGet";
import CardPost from "./CardPost";
import styles from "./GridPosts.module.css";
import { useSearchParams } from "react-router-dom";
import SearchPosts from "./SearchPosts";

export default function GridPosts() {
  // Obtengo los posts de la API usando mi hook personalizado
  const { data: posts } = useGet("https://jsonplaceholder.typicode.com/posts");
  // Utilizo este hook para leer y actualizar los parámetros de la URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Leo el término de búsqueda de la URL o uso una cadena vacía por defecto
  const searchTerm = searchParams.get("search") || "";

  // Manejo el cambio en el input de búsqueda
  const handleSearchChange = (e) => {
    const term = e.target.value;
    // Si hay texto, actualizo la URL con el parámetro de búsqueda
    if (term) {
      setSearchParams({ search: term });
    } else {
      // Si no hay texto, limpio los parámetros de la URL
      setSearchParams({});
    }
  };

  // Filtro los posts basándome en el título y el término de búsqueda
  const filteredPosts = posts
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  return (
    <div>
      <h2 className={styles.title}>Últimas Noticias</h2>
      {/* Paso el término actual y la función de cambio al componente de búsqueda */}
      <SearchPosts valor={searchTerm} onChange={handleSearchChange} />

      {/* Si no encuentro resultados, muestro un mensaje informativo */}
      {filteredPosts.length === 0 ? (
        <p className={styles.noResults}>
          No hay posts que coincidan con tu búsqueda.
        </p>
      ) : (
        // Si hay resultados, los muestro en un grid
        <div className={styles.grid}>
          {filteredPosts.map((post) => (
            // Renderizo cada tarjeta pasándole el post correspondiente
            <CardPost key={post.id} Post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
