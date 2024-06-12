import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ addUser }) => {
  const [role, setRole] = useState('patient');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    const newUser = {
      role,
      created_at: new Date(),
      updated_at: new Date(),
    };

    if (role === 'patient') {
      newUser.first_name = firstName;
      newUser.last_name = lastName;
      newUser.date_of_birth = dateOfBirth;
      newUser.gender = gender;
      newUser.address = address;
      newUser.phone = phone;
      newUser.email = email;
      newUser.password = password;
    } else if (role === 'doctor') {
      newUser.first_name = firstName;
      newUser.last_name = lastName;
      newUser.specialization = specialization;
      newUser.license_number = licenseNumber;
      newUser.phone = phone;
      newUser.email = email;
      newUser.password = password;
    }

    // Add the new user to the user list
    addUser(newUser);

    // Simulating server response
    alert('Account created successfully! Please log in.');
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
      {role === 'patient' && (
        <>
          <input type="date" placeholder="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
          <input type="text" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
          <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
        </>
      )}
      <input type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {role === 'doctor' && (
        <>
          <input type="text" placeholder="Specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} />
          <input type="text" placeholder="License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
        </>
      )}
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
