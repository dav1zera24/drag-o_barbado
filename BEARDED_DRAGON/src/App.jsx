import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Produtos from "./Pages/Produtos";
import FAQ from "./Pages/FAQ";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
