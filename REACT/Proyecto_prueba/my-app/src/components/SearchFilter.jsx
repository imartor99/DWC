import React from "react";

export default function SearchFilter({ valor, onChange }) {
  return (
    <div>
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        id="search"
        value={valor}
        onChange={onChange}
        placeholder="Buscar producto..."
      />
    </div>
  );
}
