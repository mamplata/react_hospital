import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleRegistration = () => {
    const newUser = { name, email, password, role, created_at: new Date(), updated_at: new Date() };

    // Add the new user to the user list
    addUser(newUser);

    // Simulating server response
    alert('Account created successfully! Please log in.');
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
        <option value="receptionist">Receptionist</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
