import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#0D0D0D]">
      <NavBar />

      <main>
        {/* Conteúdo das páginas */}
      </main>

      <Footer />
    </div>
  );
}

export default App;