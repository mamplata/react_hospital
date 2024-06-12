import React, { useState } from 'react';

const AppointmentManagement = ({ patientId }) => {
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
        patient_id: patientId,
        doctor_id: '', // Doctor ID can be set based on receptionist's selection
        appointment_date: '',
        status: 'scheduled',
        reason: ''
    });

    const cancelAppointment = (appointmentId) => {
        // Logic to cancel the appointment
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === appointmentId ? { ...appointment, status: 'cancelled' } : appointment
        );
        setAppointments(updatedAppointments);
    };

    const handleAddAppointment = () => {
        // Add validation logic here if needed
        setAppointments([...appointments, { ...newAppointment, id: appointments.length + 1 }]);
        setNewAppointment({
            patient_id: patientId,
            doctor_id: '',
            appointment_date: '',
            status: 'scheduled',
            reason: ''
        });
    };

    return (
        <div>
            <h3>Appointment Management</h3>
            <div>
                <h4>Your Appointments</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Appointment Date</th>
                            <th>Doctor</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments
                            .filter(appointment => appointment.patient_id === patientId)
                            .map(appointment => (
                                <tr key={appointment.id}>
                                    <td>{appointment.appointment_date}</td>
                                    <td>{appointment.doctor_id}</td>
                                    <td>{appointment.status}</td>
                                    <td>{appointment.reason}</td>
                                    <td>
                                        <button onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                                        {/* Add button for rescheduling if needed */}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h4>Schedule New Appointment</h4>
                <input type="datetime-local" value={newAppointment.appointment_date} onChange={(e) => setNewAppointment({ ...newAppointment, appointment_date: e.target.value })} />
                <input type="text" placeholder="Doctor ID" value={newAppointment.doctor_id} onChange={(e) => setNewAppointment({ ...newAppointment, doctor_id: e.target.value })} />
                <input type="text" placeholder="Reason" value={newAppointment.reason} onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })} />
                <button onClick={handleAddAppointment}>Schedule Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentManagement;
