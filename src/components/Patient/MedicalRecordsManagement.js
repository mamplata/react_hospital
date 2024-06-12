import React, { useState, useEffect } from 'react';

const MedicalRecordsManagement = ({ patients }) => {
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

    useEffect(() => {
        // Filter medical records based on the patient's ID
        const patientMedicalRecords = medicalRecords.filter(record => record.patient_id === patients.id);
        setMedicalRecords(patientMedicalRecords);
    }, [patientId]);

    return (
        <div>
            <h3>Medical Records</h3>
            <div>
                <h4>Your Medical Records</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Visit Date</th>
                            <th>Doctor ID</th>
                            <th>Diagnosis</th>
                            <th>Treatment</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicalRecords.map(record => (
                            <tr key={record.id}>
                                <td>{record.visit_date}</td>
                                <td>{record.doctor_id}</td>
                                <td>{record.diagnosis}</td>
                                <td>{record.treatment}</td>
                                <td>{record.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedicalRecordsManagement;
