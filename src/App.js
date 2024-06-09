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
        <Route path="/doctordashboard" element={<DoctorDashboard currentUser={currentUser} />} />
        <Route path="/receptionistdashboard" element={<ReceptionistDashboard currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
