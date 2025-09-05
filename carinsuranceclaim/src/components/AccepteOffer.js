import React from "react";

import "../styles/AccepteOffer.scss";

const AcceptOffer = () => {
    return (
        <div className="wrapper accept-offer">
            <h2 className="accept-offer__heading">Offer Accepted</h2>
            <p className="accept-offer__text">Thank you for accepting the offer. Your claim will be processed soon.</p>
        </div>
    );
};

export default AcceptOffer;