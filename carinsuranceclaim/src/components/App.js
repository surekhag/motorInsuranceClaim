

import React from "react";
import "../styles/app.scss";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Home = React.lazy(() => import("./Home"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Offers = React.lazy(() => import("./Offers"));
const Details = React.lazy(() => import("./Details"));
const RejectOffer = React.lazy(() => import("./RejectOffer"));
const ClaimSubmission = React.lazy(() => import("./ClaimSubmission"));
const PolicyForm = React.lazy(() => import("./PolicyForm"));
const Login = React.lazy(() => import("./Login"));
const AcceptOffer = React.lazy(() => import("./AccepteOffer"));


// Auth wrapper for protected routes
function RequireAuth({ children }) {
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

const App = () => {
  // Redirect to /login if not authenticated and not already on /login
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  const currentPath = window.location.pathname;
  if (!isLoggedIn && currentPath !== "/login") {
    window.location.replace("/login");
    return null;
  }
  return (
    <BrowserRouter>
      <Header />
      <main>
        <React.Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-spinner" />
              <p className="loader-text">Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/details"
              element={
                <RequireAuth>
                  <Details
                    title="Car Details Page"
                    nextRoute="/policyForm"
                    showBack={true}
                    backRoute="/"
                  />
                </RequireAuth>
              }
            />
            <Route
              path="/policyForm"
              element={
                <RequireAuth>
                  <PolicyForm />
                </RequireAuth>
              }
            />
            <Route
              path="/offers"
              element={
                <RequireAuth>
                  <Offers />
                </RequireAuth>
              }
            />
            <Route
              path="/acceptOffer"
              element={
                <RequireAuth>
                  <AcceptOffer />
                </RequireAuth>
              }
            />
            <Route
              path="/rejectOffer"
              element={
                <RequireAuth>
                  <RejectOffer />
                </RequireAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/claimSubmission"
              element={
                <RequireAuth>
                  <ClaimSubmission />
                </RequireAuth>
              }
            />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
