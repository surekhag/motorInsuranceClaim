
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h2>Home Page</h2>
            <button onClick={() => navigate('/details')}>Go to Car Details</button>
        </div>
    );
};

export default Home;