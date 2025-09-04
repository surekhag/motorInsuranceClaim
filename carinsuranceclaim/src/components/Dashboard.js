
import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();
	const form = location.state || {};

	return (
		<div>
			<h2>Dashboard</h2>
			{form.accidentDate ? (
				<div>
					<h3>Accident Submission Details</h3>
					<p><strong>Claim Number:</strong> {form.claimNumber}</p>
					<p><strong>Car Name:</strong> {form.carName}</p>
					<p><strong>Car Location:</strong> {form.carLocation}</p>
					<p><strong>Date of Accident:</strong> {form.accidentDate}</p>
					<p><strong>Location of Accident:</strong> {form.accidentLocation}</p>
					<p><strong>Description:</strong> {form.description}</p>
					<p><strong>Estimated Damage Cost:</strong> {form.damageEstimate}</p>
				</div>
			) : (
				<p>No submission details available.</p>
			)}
		</div>
	);
};

export default Dashboard;
