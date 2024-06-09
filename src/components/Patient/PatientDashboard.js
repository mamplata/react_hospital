import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = ({ currentUser }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout action here (e.g., clear session, reset authentication state)
        navigate('/');
    };

    if (!currentUser) {
        navigate('/');
    }

    return (
        <div>
            <h2>Patient Dashboard</h2>
            <h2>Welcome, {currentUser.name}</h2>
            <p>Role: {currentUser.role}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default PatientDashboard;
