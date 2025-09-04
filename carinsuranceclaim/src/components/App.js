
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import CarDetails from "./CarDetails";
import Dashboard from "./Dashboard";
import Offers from "./Offers";
import AcceptOffer from "./AccepteOffer";
import RejectOffer from "./RejectOffer";
import ClaimSubmission from "./ClaimSubmission";
import PolicyForm from "./PolicyForm";


const App = () => (
  <BrowserRouter>
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> | <Link to="/details">Car Details</Link> | <Link to="/offers">Offers</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<CarDetails />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/acceptOffer" element={<AcceptOffer />} />
      <Route path="/rejectOffer" element={<RejectOffer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/claimSubmission" element={<ClaimSubmission />} />
      <Route path="/policy-form" element={<PolicyForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
