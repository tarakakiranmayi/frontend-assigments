
import React from 'react';
import { useLocation } from 'react-router-dom';

const userDashedStyles = {
  textAlign: 'center',
  padding: '2rem',
};

const userListStyles = {
  listStyle: 'none',
  padding: '0',
};

function UserDashed() {
  const { state } = useLocation();

  return (
    <div style={userDashedStyles}>
      <h1>Welcome</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ul style={userListStyles}>
          <li><strong>Username:</strong> {state.username}</li>
          <li><strong>Email:</strong> {state.email}</li>
          <li><strong>Date of Birth:</strong> {state.dob}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserDashed;
