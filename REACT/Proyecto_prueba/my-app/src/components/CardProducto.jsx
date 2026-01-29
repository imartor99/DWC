import React from "react";
import styles from "./CardProducto.module.css";
import { Link } from "react-router-dom";

export default function CardProducto({ Producto }) {
  return (
    <div className={styles.card}>
      <h3>{Producto.title}</h3>
      <img src={Producto.image} alt={Producto.title} />
      <p>
        precio:{" "}
        {Producto.price > 100
          ? Producto.price + "$ producto caro"
          : Producto.price + "$ producto barato"}
      </p>
      <br />
      <p>Categoria: {Producto.category}</p>
      <Link to={`/detalle/${Producto.id}`}>Ver detalle de producto</Link>
    </div>
  );
}
