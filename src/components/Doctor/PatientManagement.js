import React, { useState } from 'react';

const PatientManagement = () => {
    const [patients, setPatients] = useState([
        {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            date_of_birth: '1990-01-01',
            gender: 'Male',
            address: '123 Main St',
            phone: '123-456-7890',
            email: 'john@example.com',
            emergency_contact: 'Jane Doe',
            medical_history: 'No significant medical history',
            created_at: '2024-06-10T12:00:00Z'
        },
        {
            id: 2,
            first_name: 'Jane',
            last_name: 'Smith',
            date_of_birth: '1985-05-15',
            gender: 'Female',
            address: '456 Oak Ave',
            phone: '987-654-3210',
            email: 'jane@example.com',
            emergency_contact: 'John Smith',
            medical_history: 'Allergic to penicillin',
            created_at: '2024-06-10T12:00:00Z'
        }
    ]);
    const [editingPatient, setEditingPatient] = useState(null);
    const [newPatient, setNewPatient] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
        address: '',
        phone: '',
        email: '',
        emergency_contact: '',
        medical_history: ''
    });

    const handleEditPatient = (id) => {
        const patientToEdit = patients.find(patient => patient.id === id);
        setEditingPatient(patientToEdit);
        setNewPatient(patientToEdit);
        // Trigger modal for editing
    };

    const handleUpdatePatient = () => {
        setPatients(patients.map(patient => patient.id === editingPatient.id ? { ...newPatient, id: editingPatient.id } : patient));
        setEditingPatient(null);
        // Close modal for editing
    };

    return (
        <div>
            <h3>Patient Management</h3>
            <div>
                {/* Modal for editing patient information */}
                {editingPatient && (
                    <div className="modal">
                        <div className="modal-content">
                            <h4>Edit Patient</h4>
                            <input type="text" placeholder="First Name" value={newPatient.first_name} onChange={(e) => setNewPatient({ ...newPatient, first_name: e.target.value })} />
                            <input type="text" placeholder="Last Name" value={newPatient.last_name} onChange={(e) => setNewPatient({ ...newPatient, last_name: e.target.value })} />
                            <input type="date" placeholder="Date of Birth" value={newPatient.date_of_birth} onChange={(e) => setNewPatient({ ...newPatient, date_of_birth: e.target.value })} />
                            <input type="text" placeholder="Gender" value={newPatient.gender} onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })} />
                            <input type="text" placeholder="Address" value={newPatient.address} onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })} />
                            <input type="text" placeholder="Phone" value={newPatient.phone} onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })} />
                            <input type="email" placeholder="Email" value={newPatient.email} onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })} />
                            <input type="text" placeholder="Emergency Contact" value={newPatient.emergency_contact} onChange={(e) => setNewPatient({ ...newPatient, emergency_contact: e.target.value })} />
                            <textarea placeholder="Medical History" value={newPatient.medical_history} onChange={(e) => setNewPatient({ ...newPatient, medical_history: e.target.value })}></textarea>
                            <button onClick={handleUpdatePatient}>Update Patient</button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h4>Patient List</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id} onClick={() => handleEditPatient(patient.id)}>
                                <td>{patient.first_name} {patient.last_name}</td>
                                <td>{patient.date_of_birth}</td>
                                <td>{patient.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientManagement;
