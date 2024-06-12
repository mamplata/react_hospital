import React, { useState } from 'react';

const MedicalRecordsManagement = () => {
    const [medicalRecords, setMedicalRecords] = useState([
        {
            id: 1,
            patient_id: 1,
            doctor_id: 1,
            visit_date: '2024-06-15',
            diagnosis: 'Common cold',
            treatment: 'Rest, fluids, over-the-counter medication',
            notes: 'Patient advised to rest for a few days',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        },
        {
            id: 2,
            patient_id: 2,
            doctor_id: 2,
            visit_date: '2024-06-20',
            diagnosis: 'Sprained ankle',
            treatment: 'RICE (Rest, Ice, Compression, Elevation)',
            notes: 'Patient advised to avoid strenuous activities',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        }
    ]);

    const handleUpdateMedicalRecord = (id, updatedData) => {
        const updatedMedicalRecords = medicalRecords.map(record =>
            record.id === id ? { ...record, ...updatedData, updated_at: new Date().toISOString() } : record
        );
        setMedicalRecords(updatedMedicalRecords);
    };

    return (
        <div>
            <h3>Medical Records Management</h3>
            <div>
                <h4>All Medical Records</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Visit Date</th>
                            <th>Patient ID</th>
                            <th>Doctor ID</th>
                            <th>Diagnosis</th>
                            <th>Treatment</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicalRecords.map(record => (
                            <tr key={record.id}>
                                <td>{record.visit_date}</td>
                                <td>{record.patient_id}</td>
                                <td>{record.doctor_id}</td>
                                <td>{record.diagnosis}</td>
                                <td>{record.treatment}</td>
                                <td>{record.notes}</td>
                                <td>
                                    <button onClick={() => handleUpdateMedicalRecord(record.id, { diagnosis: 'Updated diagnosis' })}>Update Diagnosis</button>
                                    {/* Add more buttons for other actions */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedicalRecordsManagement;
