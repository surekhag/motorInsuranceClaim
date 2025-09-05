

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PolicyForm = () => {
    const [form, setForm] = useState({
        carName: "",
        carLocation: "",
        accidentDate: "",
        accidentLocation: "",
        description: "",
        damageEstimate: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add dummy claim number
        const claimData = { ...form, claimNumber: "CLM123456" };
        navigate('/claimSubmission', { state: claimData });
    };

    return (
        <div className="wrapper">
            <h2>Car Accident Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label">Car Name:</label>
                    <input name="carName" value={form.carName} onChange={handleChange} required />
                </div>
                <div>
                    <label className="label">Car Location:</label>
                    <input name="carLocation" value={form.carLocation} onChange={handleChange} required />
                </div>
                <div>
                    <label className="label">Date of Accident:</label>
                    <input type="date" name="accidentDate" value={form.accidentDate} onChange={handleChange} required />
                </div>
                <div>
                    <label className="label">Location of Accident:</label>
                    <input name="accidentLocation" value={form.accidentLocation} onChange={handleChange} required />
                </div>
                <div>
                    <label className="label">Description of Accident:</label>
                    <textarea name="description" value={form.description} onChange={handleChange} required />
                </div>
                <div>
                    <label className="label">Estimated Damage Cost:</label>
                    <input type="number" name="damageEstimate" value={form.damageEstimate} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PolicyForm;
