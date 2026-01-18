import React from 'react'
import styles from './Card.module.css'

export default function Card({Producto}) {
  return (
    <li>
      <h3 className={styles.h3}>{Producto.title}</h3>
      <p>precio: {Producto.price > 100 ? Producto.price + "$ producto caro" : Producto.price + "$ producto barato"}</p>
      <p>Categoria: {Producto.category}</p>
    </li>
  )
}
