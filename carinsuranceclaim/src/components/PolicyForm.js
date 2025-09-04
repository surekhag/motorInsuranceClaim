import React, { useState } from "react";

const PolicyForm = () => {
    const [form, setForm] = useState({ name: "", email: "", policyNumber: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <h2>Fill Policy Details</h2>
            {submitted ? (
                <div>
                    <h3>Form Submitted!</h3>
                    <p>Name: {form.name}</p>
                    <p>Email: {form.email}</p>
                    <p>Policy Number: {form.policyNumber}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Policy Number:</label>
                        <input name="policyNumber" value={form.policyNumber} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default PolicyForm;
