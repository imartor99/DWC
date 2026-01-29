import React from "react";
import { Routes, Route } from "react-router-dom";
import Pruebas from "./pages/Pruebas";
import DetalleCard from "./components/DetalleCard";
import Navigator from "./components/Navigator";

export default function MyApp() {
  return (
    <div>
      <Navigator />
      <h1>Welcome to MyApp!</h1>
      <Routes>
        <Route path="/" element={<Pruebas />} />
        <Route path="/detalle/:id" element={<DetalleCard />} />
      </Routes>
    </div>
  );
}
