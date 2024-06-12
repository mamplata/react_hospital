import React, { useState, useEffect } from 'react';

const DoctorManagement = ({ doctors, setDoctors }) => {
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [newDoctor, setNewDoctor] = useState({
        id: '',
        first_name: '',
        last_name: '',
        specialization: '',
        license_number: '',
        phone: '',
        email: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    // Function to fetch doctor data based on doctorId
    const fetchDoctorData = (doctorId) => {
        // For demo purposes, filtering doctor from the doctors state
        return doctors.find(doctor => doctor.id === doctorId);
    };

    useEffect(() => {
        // Fetch doctor data based on doctorId
        const doctorId = doctors.id; // Replace with the actual doctorId from App.js state or props
        const doctorData = fetchDoctorData(doctorId);
        if (doctorData) {
            setEditingDoctor(doctorData);
            setNewDoctor(doctorData);
        }
    }, [doctors]); // Re-run effect when doctors state changes

    const handleUpdateProfile = () => {
        // Update doctor profile logic
        // For demo purposes, just logging doctor data
        console.log(newDoctor);
        
        // Update the doctor in the doctors state
        const updatedDoctors = doctors.map(doctor =>
            doctor.id === editingDoctor.id ? newDoctor : doctor
        );
        setDoctors(updatedDoctors);
        
        // Reset editing state
        setEditingDoctor(null);
        setIsEditing(false);
    };

    return (
        <div>
            <h3>Doctor Profile</h3>
            {editingDoctor && (
                <div>
                    <p>ID: {editingDoctor.id}</p>
                    <p>Name: {editingDoctor.first_name} {editingDoctor.last_name}</p>
                    <p>Specialization: {editingDoctor.specialization}</p>
                    <p>License Number: {editingDoctor.license_number}</p>
                    <p>Phone: {editingDoctor.phone}</p>
                    <p>Email: {editingDoctor.email}</p>
                    {isEditing && <button onClick={handleUpdateProfile}>Update Profile</button>}
                </div>
            )}
        </div>
    );
};

export default DoctorManagement;
