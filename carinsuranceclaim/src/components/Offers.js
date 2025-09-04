
import React from "react";
import { useNavigate } from "react-router-dom";
import AcceptOffer from "./AccepteOffer";
import Rejectoffer from "./RejectOffer";

const Offers = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Offers Page</h2>
            <button onClick={() => navigate("/acceptOffer")}>Accept</button>
            <button onClick={() => navigate("/rejectOffer")}>Reject</button>
        </div>
    );
};

export default Offers;