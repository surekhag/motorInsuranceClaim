
import React from "react";
import { useNavigate } from "react-router-dom";

const PolicyDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>PolicyDetails Page</h2>
            <button onClick={() => navigate('/policyForm')}>Fill Details & Submit</button>
        </div>
    );
};

export default PolicyDetails;