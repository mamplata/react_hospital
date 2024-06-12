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

    const cancelAppointment = (appointmentId) => {
        // Logic to cancel the appointment
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === appointmentId ? { ...appointment, status: 'cancelled' } : appointment
        );
        setAppointments(updatedAppointments);
    };

    const rescheduleAppointment = (appointmentId, newDate) => {
        // Logic to reschedule the appointment
        const updatedAppointments = appointments.map(appointment =>
            appointment.id === appointmentId ? { ...appointment, appointment_date: newDate } : appointment
        );
        setAppointments(updatedAppointments);
    };

    const bookAppointment = (newAppointment) => {
        // Logic to book a new appointment
        const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
        setAppointments([...appointments, { ...newAppointment, id, status: 'scheduled' }]);
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
                                        <button onClick={() => rescheduleAppointment(appointment.id, 'new date')}>Reschedule</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h4>Schedule New Appointment</h4>
                {/* Here you can include inputs for selecting appointment date, doctor, and reason */}
                <button onClick={() => bookAppointment({ patient_id: patientId, doctor_id: 1, appointment_date: 'new date', reason: 'reason' })}>Book Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentManagement;
