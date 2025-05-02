// src/UserProfile.js
import React from 'react';

// Functional component to display user info
const UserProfile = (props) => {
  console.log("UserProfile Props:", props);

  return (
    <div className="profile-card" style={{ border: '1px solid #eee', padding: '15px', margin: '15px', borderRadius: '5px' }}>
      <h2>User Profile</h2>
      {/* FIX: Access the prop using the correct name 'userName' */}
      <p><strong>Name:</strong> {props.userName}</p>
      <p><strong>Role:</strong> {props.role}</p>
      <p><strong>ID:</strong> {props.userId}</p>
    </div>
  );
};

// Consider adding defaultProps or PropTypes for robustness, although not strictly required by the fix
/*
UserProfile.defaultProps = {
  userName: 'N/A',
  role: 'N/A',
  userId: 'N/A'
};
*/

export default UserProfile;