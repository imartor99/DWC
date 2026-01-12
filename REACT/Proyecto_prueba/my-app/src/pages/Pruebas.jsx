import React from 'react'
import Card from '../components/Card';

export default function Pruebas() {
    const arrProductos = ['Pera', 'Manzana', 'Platanos', 'Naranja'];
  return (
    <div>
      <h2>Mi pagina de Pruebas</h2>
      <ul>
        <Card />
        <li>Elemento 1 {arrProductos[0]}</li>
        <li>Elemento 2 {arrProductos[1]}</li>
        <li>Elemento 3 {arrProductos[2]}</li>
      </ul>
    </div>
  )
}
