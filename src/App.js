import "./reset.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Formview from "./Formview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formview" element={<Formview />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
