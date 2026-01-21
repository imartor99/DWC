import React, { useState, useEffect } from "react";
import styles from "./GridProductos.module.css";
import CardProducto from "./CardProducto";

export default function GridProductos() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtro, setFiltro] = useState("all");

  const getData = () => {
    let url = "https://fakestoreapi.com/products";
    if (filtro !== "all") {
      url = `https://fakestoreapi.com/products/category/${filtro}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductos([...data]));
  };

  const getCategorias = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorias([...data]));
  };

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    getData();
  }, [filtro]);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <>
      <h1>Lista de productos</h1>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="categoryFilter">Filtrar por categoría: </label>
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

      <div className={styles.cards}>
        {productos &&
          productos.map((prod) => (
            <CardProducto key={prod.id} Producto={prod} />
          ))}
      </div>
    </>
  );
}
