import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const UserManagement = () => {
    const { users, setUsers } = useOutletContext();
    const [editingUser, setEditingUser] = useState(null);
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'patient', details: {} });
    const [isEditing, setIsEditing] = useState(false); // State to track if editing a user

    // Function to handle adding or updating a user
    const handleAddOrUpdateUser = () => {
        if (isEditing) {
            // If editing, update the user without modifying the password
            setUsers(users.map(user => user.id === editingUser.id ? { ...user, name: newUser.name, email: newUser.email, role: newUser.role, details: newUser.details } : user));
            setEditingUser(null);
            setIsEditing(false); // Reset the editing state
        } else {
            // If not editing, add a new user
            const id = users.length ? users[users.length - 1].id + 1 : 1;
            setUsers([...users, { ...newUser, id, created_at: new Date(), updated_at: new Date() }]);
            setNewUser({ name: '', email: '', password: '', role: 'patient', details: {} });
        }
    };

    // Function to handle editing a user
    const handleEditUser = (id) => {
        const userToEdit = users.find(user => user.id === id);
        setEditingUser(userToEdit);
        setIsEditing(true); // Set the editing state
        setNewUser({ name: userToEdit.name, email: userToEdit.email, role: userToEdit.role, details: userToEdit.details });
    };

    // Function to handle deleting a user
    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h3>User Management</h3>
            <div>
                <h4>{isEditing ? 'Edit User' : 'Add New User'}</h4>
                <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                {!isEditing && <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />}
                <select value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="receptionist">Receptionist</option>
                    <option value="patient">Patient</option>
                </select>
                {newUser.role === 'patient' && (
                    <>
                        <input type="text" placeholder="First Name" value={newUser.details.first_name || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, first_name: e.target.value } })} />
                        <input type="text" placeholder="Last Name" value={newUser.details.last_name || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, last_name: e.target.value } })} />
                        <input type="date" placeholder="Date of Birth" value={newUser.details.date_of_birth || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, date_of_birth: e.target.value } })} />
                        <input type="text" placeholder="Gender" value={newUser.details.gender || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, gender: e.target.value } })} />
                        <input type="text" placeholder="Address" value={newUser.details.address || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, address: e.target.value } })} />
                        <input type="text" placeholder="Phone" value={newUser.details.phone || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, phone: e.target.value } })} />
                        <input type="text" placeholder="Emergency Contact" value={newUser.details.emergency_contact || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, emergency_contact: e.target.value } })} />
                        <textarea placeholder="Medical History" value={newUser.details.medical_history || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, medical_history: e.target.value } })}></textarea>
                    </>
                )}
                {newUser.role === 'doctor' && (
                    <>
                        <input type="text" placeholder="First Name" value={newUser.details.first_name || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, first_name: e.target.value } })} />
                        <input type="text" placeholder="Last Name" value={newUser.details.last_name || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, last_name: e.target.value } })} />
                        <input type="text" placeholder="Specialization" value={newUser.details.specialization || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, specialization: e.target.value } })} />
                        <input type="text" placeholder="License Number" value={newUser.details.license_number || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, license_number: e.target.value } })} />
                        <input type="text" placeholder="Phone" value={newUser.details.phone || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, phone: e.target.value } })} />
                        <input type="email" placeholder="Email" value={newUser.details.email || ''} onChange={(e) => setNewUser({ ...newUser, details: { ...newUser.details, email: e.target.value } })} />
                    </>
                )}
                <button onClick={handleAddOrUpdateUser}>{isEditing ? 'Update User' : 'Add User'}</button>
            </div>
            <div>
                <h4>User List</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleEditUser(user.id)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
