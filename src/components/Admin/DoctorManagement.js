import React, { useState } from 'react';

const DoctorManagement = () => {
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            specialization: 'Cardiologist',
            license_number: '123456',
            phone: '123-456-7890',
            email: 'john@example.com',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        },
        {
            id: 2,
            first_name: 'Jane',
            last_name: 'Smith',
            specialization: 'Pediatrician',
            license_number: '789012',
            phone: '987-654-3210',
            email: 'jane@example.com',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        }
    ]);
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [newDoctor, setNewDoctor] = useState({
        first_name: '',
        last_name: '',
        specialization: '',
        license_number: '',
        phone: '',
        email: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleAddOrUpdateDoctor = () => {
        if (isEditing) {
            setDoctors(doctors.map(doctor => doctor.id === editingDoctor.id ? { ...newDoctor, id: editingDoctor.id, created_at: editingDoctor.created_at, updated_at: new Date().toISOString() } : doctor));
            setEditingDoctor(null);
            setIsEditing(false);
        } else {
            const id = doctors.length ? doctors[doctors.length - 1].id + 1 : 1;
            setDoctors([...doctors, { ...newDoctor, id, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]);
            setNewDoctor({
                first_name: '',
                last_name: '',
                specialization: '',
                license_number: '',
                phone: '',
                email: ''
            });
        }
    };

    const handleEditDoctor = (id) => {
        const doctorToEdit = doctors.find(doctor => doctor.id === id);
        setEditingDoctor(doctorToEdit);
        setIsEditing(true);
        setNewDoctor(doctorToEdit);
    };

    const handleDeleteDoctor = (id) => {
        setDoctors(doctors.filter(doctor => doctor.id !== id));
    };

    return (
        <div>
            <h3>Doctor Management</h3>
            <div>
                <h4>{isEditing ? 'Edit Doctor' : 'Add New Doctor'}</h4>
                <input type="text" placeholder="First Name" value={newDoctor.first_name} onChange={(e) => setNewDoctor({ ...newDoctor, first_name: e.target.value })} />
                <input type="text" placeholder="Last Name" value={newDoctor.last_name} onChange={(e) => setNewDoctor({ ...newDoctor, last_name: e.target.value })} />
                <input type="text" placeholder="Specialization" value={newDoctor.specialization} onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })} />
                <input type="text" placeholder="License Number" value={newDoctor.license_number} onChange={(e) => setNewDoctor({ ...newDoctor, license_number: e.target.value })} />
                <input type="text" placeholder="Phone" value={newDoctor.phone} onChange={(e) => setNewDoctor({ ...newDoctor, phone: e.target.value })} />
                <input type="email" placeholder="Email" value={newDoctor.email} onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })} />
                <button onClick={handleAddOrUpdateDoctor}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</button>
            </div>
            <div>
                <h4>Doctor List</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>License Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>{doctor.first_name} {doctor.last_name}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.license_number}</td>
                                <td>
                                    <button onClick={() => handleEditDoctor(doctor.id)}>Edit</button>
                                    <button onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorManagement;
