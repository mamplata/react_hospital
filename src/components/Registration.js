import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  const [role, setRole] = useState('patient');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    const name = `${firstName} ${lastName}`;
    const userData = {
      name,
      email,
      password,
      role,
    };

    // First send request to /login endpoint
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          alert('Error during login: ' + JSON.stringify(data.errors));
        } else {
          // Now send request to either /patient or /doctor endpoint
          if (role === 'patient') {
            registerPatient();
          } else if (role === 'doctor') {
            registerDoctor();
          }
        }
      })
      .catch(error => console.error('Error during login:', error));
  };

  const registerPatient = () => {
    const patientData = {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      gender,
      address,
      phone,
      email,
      emergency_contact: emergencyContact,
      medical_history: medicalHistory,
    };

    fetch('http://127.0.0.1:8000/api/addPatients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          alert('Error registering patient: ' + JSON.stringify(data.errors));
        } else {
          alert('Patient account created successfully! Please log in.');
          navigate('/');
        }
      })
      .catch(error => console.error('Error registering patient:', error));
  };

  const registerDoctor = () => {
    const doctorData = {
      first_name: firstName,
      last_name: lastName,
      specialization,
      license_number: licenseNumber,
      phone,
      email,
    };

    fetch('http://127.0.0.1:8000/api/addDoctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          alert('Error registering doctor: ' + JSON.stringify(data.errors));
        } else {
          alert('Doctor account created successfully! Please log in.');
          navigate('/');
        }
      })
      .catch(error => console.error('Error registering doctor:', error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Registration</h2>

              {/* Role selection */}
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" className="form-control" value={role} onChange={e => setRole(e.target.value)}>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              {/* Common fields */}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
              {/* Additional fields for patients */}
              {role === 'patient' && (
                <>
                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="date" className="form-control" id="dateOfBirth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input type="text" className="form-control" id="emergencyContact" placeholder="Emergency Contact" value={emergencyContact} onChange={e => setEmergencyContact(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="medicalHistory">Medical History</label>
                    <input type="text" className="form-control" id="medicalHistory" placeholder="Medical History" value={medicalHistory} onChange={e => setMedicalHistory(e.target.value)} />
                  </div>
                </>
              )}

              {/* Additional fields for doctors */}
              {role === 'doctor' && (
                <>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input type="text" className="form-control" id="specialization" placeholder="Specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="licenseNumber">License Number</label>
                    <input type="text" className="form-control" id="licenseNumber" placeholder="License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              {/* Register button */}
              <button type="button" className="btn btn-primary" onClick={handleRegistration}>Register</button>
              <p className="mt-3">Already have an account? <a href="/">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
