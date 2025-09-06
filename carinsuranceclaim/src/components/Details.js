import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ title = "Details Page", nextRoute = "/policyForm", showBack = true, backRoute = "/" }) => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        userName: "",
        email: "",
        mobile: "",
        homePhone: "",
        policyNumber: ""
    });

    // Dummy API function
    function fetchUserDetails() {
        return {
            userName: sessionStorage.getItem("userName") || "User",
            email: "user@example.com",
            mobile: "9876543210",
            homePhone: "0123456789",
            policyNumber: "POL123456"
        };
    }

    useEffect(() => {
        // Call dummy API and set state
        setUserDetails(fetchUserDetails());
    }, []);

    return (
        <div className="wrapper">
            <h2>{title}</h2>
            <div className="details-info">
                <p><span className="label">User Name:</span> {userDetails.userName}</p>
                <p><span className="label">Email:</span> {userDetails.email}</p>
                <p><span className="label">Mobile Number:</span> {userDetails.mobile}</p>
                <p><span className="label">Home Phone Number:</span> {userDetails.homePhone}</p>
                <p><span className="label">Policy Number:</span> {userDetails.policyNumber}</p>
            </div>
            <div className="buttonWrapper">
                {showBack && (
                    <button
                        className="details-btn details-btn--back"
                        onClick={() => navigate(backRoute)}
                    >
                        Back
                    </button>
                )}
                <button
                    className="details-btn details-btn--next"
                    onClick={() => navigate(nextRoute)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Details;
