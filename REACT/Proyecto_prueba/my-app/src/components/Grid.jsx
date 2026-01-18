import React from "react";
import Card from "./Card";
import db from "../json/dbFakestoreapi.json";

export default function Grid() {
  return (
    <> 
      <ul>
        Lista de productos
        {db.productos.map((prod) => (
          <Card key={prod.id} Producto={prod} />
        ))}
      </ul>
    </>
  );
}
