
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [userName, setUserName] = useState("");

    // Reset checkbox and userName when component mounts (user returns to Home)
    useEffect(() => {
        setIsChecked(false);
        setUserName("");
    }, []);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleNext = () => {
        if (isChecked && userName.trim()) {
            // Save userName to sessionStorage
            sessionStorage.setItem("userName", userName.trim());
            navigate("/details"); // Change '/details' to your actual route
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome to Car Insurance Claim Portal</h1>
            <p>
                Please enter your name and read the instructions carefully before proceeding. You must confirm your agreement by checking the box below to continue to the next page.
            </p>
            <div className="home-input-container">
                <label>
                    Name:
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                        placeholder="Enter your name"
                        required
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </div>
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
                className={`home-next-btn${isChecked && userName.trim() ? '' : ' disabled'}`}
                onClick={handleNext}
                disabled={!isChecked || !userName.trim()}
            >
                Next
            </button>
        </div>
    );
}

export default Home;