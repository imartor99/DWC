import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div>Contador</div>
      <button onClick={() => setContador(contador + 1)}>Add {contador}</button>
    </>
  );
}
