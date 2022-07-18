import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Instructions from "./pages/instructions/instructions";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  );
}

export default App;
