import React from 'react'
import styles from './GridProductos.module.css'
import CardProducto from './CardProducto'
import db from '../json/dbFakestoreapi.json'    

export default function GridProductos() {
  return (

    <div className={styles.cards}>
      {db.productos.map((prod) => (
        <CardProducto key={prod.id} Producto={prod} />
      ))}
    </div>
  );
}
