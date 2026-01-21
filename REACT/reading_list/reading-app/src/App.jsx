import { Routes, Route } from "react-router-dom";
import ReadingPage from "./pages/ReadingPage";
import DetalleLibro from "./components/DetalleLibro";
import "./App.css";
import Navigator from "./components/Navigator";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<ReadingPage />} />
        <Route path="/detalle/:id" element={<DetalleLibro />} />
      </Routes>
    </>
  );
}

export default App;
