import React from "react";

import "../styles/RejectOffer.scss";

const RejectOffer = () => {
    return (
        <div className="wrapper reject-offer">
            <h2 className="reject-offer__heading">Offer Rejected</h2>
            <p className="reject-offer__text">You have rejected the offer. Please contact support for further assistance.</p>
        </div>
    );
};

export default RejectOffer;