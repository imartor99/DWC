import React from "react";
import { useParams } from "react-router-dom";

export default function DetalleLibro() {
  const { id } = useParams();
  return (
    <div>
      <div>Detalle {id}</div>
    </div>
  );
}
