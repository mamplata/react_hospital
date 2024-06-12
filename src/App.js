import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import AdminDashboard from './components/Admin/AdminDashboard';
import PatientDashboard from './components/Patient/PatientDashboard';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import ReceptionistDashboard from './components/Receptionist/ReceptionistDashboard';
import UserManagement from './components/Admin/UserManagement';
import DoctorManagement from './components/Admin/DoctorManagement';
import PatientManagement from './components/Admin/PatientManagement';
import AppointmentManagement from './components/Admin/AppointmentManagement';
import MedicalRecordsManagement from './components/Admin/MedicalRecordsManagement';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { id: 2, name: 'Patient User', email: 'patient@example.com', password: 'patient123', role: 'patient' },
    { id: 3, name: 'Doctor User', email: 'doctor@example.com', password: 'doctor123', role: 'doctor' },
    { id: 4, name: 'Receptionist User', email: 'receptionist@example.com', password: 'receptionist123', role: 'receptionist' }
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: users.length ? users[users.length - 1].id + 1 : 1 };
    setUsers([...users, newUser]);
  };

  const loginUser = (user) => {
    setCurrentUser(user);
  };

   // Dummy data for patients, doctors, appointments, and medical records
   const [patients, setPatients] = useState([
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: new Date('1980-01-01').toISOString(),
      gender: 'Male',
      address: '123 Main Street, Anytown, CA 12345',
      phone: '555-555-5555',
      email: 'john.doe@example.com',
      emergency_contact: {
        name: 'Jane Doe',
        phone: '555-555-1234',
      },
      medical_history: 'None',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // Add more dummy patient data here
  ]);

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      first_name: 'Jane',
      last_name: 'Smith',
      specialization: 'Cardiology',
      license_number: '123456',
      phone: '555-555-6666',
      email: 'jane.smith@example.com',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // Add more dummy doctor data here
  ]);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient_id: 1,
      doctor_id: 1,
      appointment_date: new Date('2024-06-13').toISOString(), // Adjust date as needed
      status: 'Scheduled',
      reason: 'Annual checkup',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // Add more dummy appointment data here
  ]);

  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      patient_id: 1,
      doctor_id: 1,
      visit_date: new Date('2024-06-13').toISOString(), // Adjust date as needed
      diagnosis: 'Normal',
      treatment: 'N/A',
      notes: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    // Add more dummy medical record data here
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login users={users} loginUser={loginUser} />} />
        <Route path="/register" element={<Registration addUser={addUser} />} />
        <Route path="/admindashboard/*" element={<AdminDashboard currentUser={currentUser} users={users} setUsers={setUsers} />}>
          <Route path="users" element={<UserManagement users={users} setUsers={setUsers} />} />
          <Route path="doctors" element={<DoctorManagement />} />
          <Route path="patients" element={<PatientManagement />} />
          <Route path="appointments" element={<AppointmentManagement />} />
          <Route path="records" element={<MedicalRecordsManagement />} />
        </Route>
        <Route path="/patientdashboard" element={<PatientDashboard currentUser={currentUser} />} />
        <Route path="/doctordashboard/*" element={<DoctorDashboard currentUser={currentUser}/>}>
          <Route path="doctors" element={<DoctorManagement doctors={doctors} setDoctors={setDoctors}/>} />
          <Route path="patients" element={<PatientManagement />} />
          <Route path="appointments" element={<AppointmentManagement doctors={doctors}/>} />
          <Route path="records" element={<MedicalRecordsManagement />} />
        </Route>
        <Route path="/receptionistdashboard" element={<ReceptionistDashboard currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
