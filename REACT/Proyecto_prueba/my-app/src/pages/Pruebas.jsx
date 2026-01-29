import React from 'react'
import GridProductos from '../components/GridProductos';
import Contador from '../components/Contador';
import { useSearchParams } from 'react-router-dom';

export default function Pruebas() {
   // const arrProductos = ['Pera', 'Manzana', 'Platanos', 'Naranja'];
   let [searchParams] = useSearchParams();
  return (
    <div>
      <h2>Mi pagina de Pruebas</h2>
      <GridProductos />
    </div>
  )
}
