import React, { useState } from 'react';

const AppointmentManagement = ({ doctors }) => {
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
    const [newAppointment, setNewAppointment] = useState({
        id: '',
        patient_id: '',
        doctor_id: doctors.id,
        appointment_date: '',
        status: '',
        reason: '',
        created_at: '',
        updated_at: ''
    });

    const handleAddAppointment = () => {
        const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
        const updatedAppointments = [...appointments, { ...newAppointment, id }];
        setAppointments(updatedAppointments);
        // Reset newAppointment state
        setNewAppointment({
            id: '',
            patient_id: '',
            doctor_id: doctorId,
            appointment_date: '',
            status: '',
            reason: '',
            created_at: '',
            updated_at: ''
        });
    };

    const handleEditAppointment = (id, updatedData) => {
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === id ? { ...appointment, ...updatedData } : appointment
        );
        setAppointments(updatedAppointments);
    };

    const handleDeleteAppointment = (id) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
        setAppointments(updatedAppointments);
    };

    return (
        <div>
            <h3>Appointment Management</h3>
            <div>
                <h4>Doctor's Appointments</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Patient</th>
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
                                <td>{appointment.status}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <button onClick={() => handleEditAppointment(appointment.id, { status: 'cancelled' })}>Cancel</button>
                                    <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h4>Add Appointment</h4>
                    <input type="datetime-local" value={newAppointment.appointment_date} onChange={(e) => setNewAppointment({ ...newAppointment, appointment_date: e.target.value })} />
                    <input type="text" placeholder="Patient ID" value={newAppointment.patient_id} onChange={(e) => setNewAppointment({ ...newAppointment, patient_id: e.target.value })} />
                    <input type="text" placeholder="Status" value={newAppointment.status} onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })} />
                    <input type="text" placeholder="Reason" value={newAppointment.reason} onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })} />
                    <button onClick={handleAddAppointment}>Add Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentManagement;
