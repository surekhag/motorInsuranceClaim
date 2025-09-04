
import React from "react";
import { useLocation } from "react-router-dom";

const ClaimSubmission = () => {
    const location = useLocation();
    const form = location.state || {};

    return (
        <div>
            <h2>Claim Submission Page</h2>
            {form.accidentDate ? (
                <div>
                    <h3>Accident Submission Details:</h3>
                    <p><strong>Claim Number:</strong> {form.claimNumber}</p>
                    <p><strong>Car Name:</strong> {form.carName}</p>
                    <p><strong>Car Location:</strong> {form.carLocation}</p>
                    <p><strong>Date of Accident:</strong> {form.accidentDate}</p>
                    <p><strong>Location of Accident:</strong> {form.accidentLocation}</p>
                    <p><strong>Description:</strong> {form.description}</p>
                    <p><strong>Estimated Damage Cost:</strong> {form.damageEstimate}</p>
                    <button onClick={() => window.location.assign('/dashboard')}>Go to Dashboard</button>
                </div>
            ) : (
                <p>No details submitted.</p>
            )}
        </div>
    );
};

export default ClaimSubmission;