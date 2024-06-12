import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const DoctorDashboard = ({ currentUser}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    React.useEffect(() => {
        if (!currentUser || currentUser.role !== 'doctor') {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <div>
            <h2>Doctor Dashboard</h2>
            <h2>Welcome, {currentUser.name}</h2>
            <p>Role: {currentUser.role}</p>
            <button onClick={handleLogout}>Logout</button>

            <nav>
                <ul>
                    <li><Link to="doctors">Doctor Management</Link></li>
                    <li><Link to="patients">Patient Management</Link></li>
                    <li><Link to="appointments">Appointment Management</Link></li>
                    <li><Link to="records">Medical Records Management</Link></li>
                </ul>
            </nav>

            <Outlet context={{ currentUser}} />
        </div>
    );
};

export default DoctorDashboard;
