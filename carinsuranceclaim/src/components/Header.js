import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <header className="header">
      <h1 className="header__title">Motor Insurance Claim Portal</h1>
      <button className="header__logout-btn" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
