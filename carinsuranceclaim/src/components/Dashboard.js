
import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();
	const form = location.state || {};

		return (
			<div className="wrapper">
				<h2>Dashboard</h2>
				{form.accidentDate ? (
					<div>
						<h3>Accident Submission Details</h3>
						<p><span className="label">Claim Number:</span> {form.claimNumber}</p>
						<p><span className="label">Car Name:</span> {form.carName}</p>
						<p><span className="label">Car Location:</span> {form.carLocation}</p>
						<p><span className="label">Date of Accident:</span> {form.accidentDate}</p>
						<p><span className="label">Location of Accident:</span> {form.accidentLocation}</p>
						<p><span className="label">Description:</span> {form.description}</p>
						<p><span className="label">Estimated Damage Cost:</span> {form.damageEstimate}</p>
					</div>
				) : (
					<p>No submission details available.</p>
				)}
			</div>
		);
};

export default Dashboard;
