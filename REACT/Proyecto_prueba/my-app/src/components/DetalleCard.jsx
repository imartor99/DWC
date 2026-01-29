import React from "react";
import styles from "./CardProducto.module.css";
import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

export default function DetalleCard() {
  const { id } = useParams();
  const { data: producto } = useGet(`http://localhost:3000/productos/${id}`);

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className={styles.card}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" />
      <p>
        Precio:{" "}
        {producto.price > 100
          ? producto.price + "$ (Producto caro)"
          : producto.price + "$ (Producto barato)"}
      </p>
      <p>Categoría: {producto.category}</p>
      <p>{producto.description}</p>
    </div>
  );
}
