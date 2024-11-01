// src/pages/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 1, 2023",
  });

  const [editUser, setEditUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditUser(user);
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Call API or show confirmation dialog for account deletion
    alert("Account deleted!");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      {!isEditing ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date Joined:</strong> {user.joined}</p>
          <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
        </div>
      ) : (
        <div className="profile-edit">
          <label>
            Name: 
            <input 
              type="text" 
              value={editUser.name} 
              onChange={(e) => setEditUser({...editUser, name: e.target.value})} 
            />
          </label>
          <label>
            Email: 
            <input 
              type="email" 
              value={editUser.email} 
              onChange={(e) => setEditUser({...editUser, email: e.target.value})} 
            />
          </label>
          <div className="edit-actions">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

      <h3>Profile Settings</h3>
      <div className="profile-settings">
        <p>Customize your profile settings here.</p>
        {/* Add more settings options here */}
      </div>

      <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default Profile;
