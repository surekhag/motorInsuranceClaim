import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CarDetails from "./CarDetails";

const App =()=> {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/details">CarDetails</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
