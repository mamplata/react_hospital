import React, { useState } from 'react';

const AppointmentManagement = () => {
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            patient_id: 1,
            doctor_id: 1,
            appointment_date: '2024-06-15T10:00:00Z',
            status: 'scheduled',
            reason: 'Regular checkup',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        },
        {
            id: 2,
            patient_id: 2,
            doctor_id: 2,
            appointment_date: '2024-06-20T14:00:00Z',
            status: 'scheduled',
            reason: 'Follow-up consultation',
            created_at: '2024-06-10T12:00:00Z',
            updated_at: '2024-06-10T12:00:00Z'
        }
    ]);

    return (
        <div>
            <h3>Appointment Management</h3>
            <div>
                <h4>All Appointments</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.patient_id}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{appointment.status}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    {/* Add action buttons here if needed */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentManagement;
