import React from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ title = "Details Page", nextRoute = "/policyForm", showBack = true, backRoute = "/" }) => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h2>{title}</h2>
            {showBack && <button onClick={() => navigate(backRoute)}>Back</button>}
            <button onClick={() => navigate(nextRoute)}>Next</button>
        </div>
    );
};

export default Details;
