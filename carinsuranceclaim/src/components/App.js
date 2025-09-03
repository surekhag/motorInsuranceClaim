import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import CarDetails from "./CarDetails";
import Dashboard from "./Dashboard";
import Offers from "./Offers";
import AcceptOffer from "./AccepteOffer";
import RejectOffer from "./RejestOffer";
import ClaimSubmission from "./ClaimSubmission";

const App =()=> {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/details">CarDetails</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submission" element={<ClaimSubmission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
