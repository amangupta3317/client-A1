import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
