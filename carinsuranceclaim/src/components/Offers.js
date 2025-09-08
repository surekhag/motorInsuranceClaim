
import React, { useState } from "react";
import AcceptOffer from "./AccepteOffer";
import RejectOffer from "./RejectOffer";

const Offers = () => {
    const [showAccept, setShowAccept] = useState(false);
    const [showReject, setShowReject] = useState(false);

    const handleAccept = () => {
        setShowAccept(true);
        setShowReject(false);
    };

    const handleReject = () => {
        setShowReject(true);
        setShowAccept(false);
    };

    return (
        <div className="wrapper">
            <h2>Offers Page</h2>
            <div className="buttonWrapper">
                <button className="details-btn details-btn--next" onClick={handleAccept}>Accept</button>
                <button className="details-btn details-btn--back" onClick={handleReject}>Reject</button>
            </div>
            {showAccept && <AcceptOffer />}
            {showReject && <RejectOffer />}
        </div>
    );
};

export default Offers;