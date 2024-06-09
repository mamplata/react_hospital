import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminDashboard = ({ currentUser, users, setUsers }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout action here (e.g., clear session, reset authentication state)
        navigate('/');
    };

    React.useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h2>Welcome, {currentUser.name}</h2>
            <p>Role: {currentUser.role}</p>
            <button onClick={handleLogout}>Logout</button>

            <nav>
                <ul>
                    <li><Link to="users">User Management</Link></li>
                    <li><Link to="doctors">Doctor Management</Link></li>
                    <li><Link to="patients">Patient Management</Link></li>
                    <li><Link to="appointments">Appointment Management</Link></li>
                    <li><Link to="records">Medical Records Management</Link></li>
                </ul>
            </nav>

            <Outlet context={{ users, setUsers }} />
        </div>
    );
};

export default AdminDashboard;
