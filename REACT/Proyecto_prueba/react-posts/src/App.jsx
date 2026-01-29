import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Navigator from "../../form-app/src/components/Navigator";

function App() {
  return (
    <>
      <Navigator />
      <h1>React Posts Project</h1>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
