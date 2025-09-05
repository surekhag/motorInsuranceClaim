
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    // Only need to track checkbox now
    useEffect(() => {
        setIsChecked(false);
    }, []);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleNext = () => {
        if (isChecked) {
            navigate("/details"); // Change '/details' to your actual route
        }
    };

    // Get userName from sessionStorage
    const userName = sessionStorage.getItem("userName") || "User";

    return (
        <div className="home-container">
            <h1>Welcome, {userName}! to Car Insurance Claim Portal</h1>
            <p>
                Please read the instructions carefully before proceeding. You must confirm your agreement by checking the box below to continue to the next page.
            </p>
            <div className="home-checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    {' '}I have read and agree to the instructions.
                </label>
            </div>
            <button
                className={`home-next-btn${isChecked ? '' : ' disabled'}`}
                onClick={handleNext}
                disabled={!isChecked}
            >
                Next
            </button>
        </div>
    );
}

export default Home;