import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
 contato
import Contato from "./Pages/Contato";

import Produtos from "./Pages/Produtos";
import FAQ from "./Pages/FAQ";
leleo3
import Notfound from "./Pages/Notfound";
main
main

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
leleo3
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
main
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
