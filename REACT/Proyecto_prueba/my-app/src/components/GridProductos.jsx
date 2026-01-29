import React, { useState } from "react";
import styles from "./GridProductos.module.css";
import CardProducto from "./CardProducto";
import useGet from "../hooks/useGet";
import { useSearchParams } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import DebugBusqueda from "./DebugBusqueda";

export default function GridProductos() {
  const [filtro, setFiltro] = useState("all");
  const [parametros, setParametros] = useSearchParams();

  // Fetch ALL products from localhost
  const { data: productos } = useGet("http://localhost:3000/productos");

  // Categorias
  const categorias = productos
    ? [...new Set(productos.map((prod) => prod.category))]
    : [];

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    if (term) {
      setParametros({ search: term });
    } else {
      setParametros({});
    }
  };

  const searchTerm = parametros.get("search") || "";

  // Filtro de productos basado en categoría y término de búsqueda
  const productosFiltrados = productos
    ? productos.filter((prod) => {
        // 1. Filtro por categoría
        const matchesCategory = filtro === "all" || prod.category === filtro;

        // 2. Filtro por término de búsqueda
        const matchesSearch = prod.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
      })
    : [];

  return (
    <>
      <h1>Lista de productos</h1>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {/* Filtro por categoría */}
        <div>
          <label htmlFor="categoryFilter">Categoría: </label>
          <select
            id="categoryFilter"
            value={filtro}
            onChange={handleFiltroChange}
          >
            <option value="all">Todas</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Input de búsqueda */}
        <SearchFilter valor={searchTerm} onChange={handleSearchChange} />
      </div>

      <DebugBusqueda valor={searchTerm} />

      <div className={styles.cards}>
        {productosFiltrados.map((prod) => (
          <CardProducto key={prod.id} Producto={prod} />
        ))}
      </div>
    </>
  );
}
