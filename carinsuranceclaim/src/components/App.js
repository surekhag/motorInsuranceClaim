

import React from "react";
import "../styles/app.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = React.lazy(() => import("./Home"));
const CarDetails = React.lazy(() => import("./CarDetails"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Offers = React.lazy(() => import("./Offers"));
const Details = React.lazy(() => import("./Details"));
const RejectOffer = React.lazy(() => import("./RejectOffer"));
const ClaimSubmission = React.lazy(() => import("./ClaimSubmission"));
const PolicyForm = React.lazy(() => import("./PolicyForm"));




const App = () => (
  <BrowserRouter>
    <Header />
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> | <Link to="/details">Car Details</Link> | <Link to="/offers">Offers</Link>
    </nav>
    <React.Suspense fallback={
      <div className="loader-container">
        <div className="loader-spinner" />
        <p className="loader-text">Loading...</p>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/details" element={<Details title="Car Details Page" nextRoute="/policyForm" showBack={true} backRoute="/" />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/acceptOffer" element={<AcceptOffer />} />
        <Route path="/rejectOffer" element={<RejectOffer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claimSubmission" element={<ClaimSubmission />} />
        <Route path="/policyForm" element={<PolicyForm />} />
      </Routes>
    </React.Suspense>
    <Footer />
  </BrowserRouter>
);

export default App;
