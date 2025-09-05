

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
    const [uploadStatus, setUploadStatus] = useState("");
    const navigate = useNavigate();
    // Dummy API call for file upload
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploadStatus("Uploading...");
        // Simulate API call
        try {
            // Replace with actual API endpoint
            const formData = new FormData();
            formData.append("file", file);
            // Dummy fetch
            await new Promise((resolve) => setTimeout(resolve, 1500));
            // Example: await fetch("https://dummyapi.io/upload", { method: "POST", body: formData });
            setUploadStatus("Upload successful!");
        } catch (err) {
            setUploadStatus("Upload failed.");
        }
    };

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
                {/* ...existing form fields... */}
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
                <div>
                    <label className="label">Upload Image/PDF:</label>
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileUpload}
                    />
                    {uploadStatus && <span className="policy-upload-status">{uploadStatus}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PolicyForm;
