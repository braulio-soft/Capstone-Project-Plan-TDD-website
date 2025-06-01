import React from 'react';

function UserProfile({ user }) {
  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      {user.avatar && (
        <img
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
          style={styles.avatar}
        />
      )}
      <div style={styles.info}>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
        <p><strong>Age:</strong> {user.age || 'N/A'}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '15px'
  },
  info: {
    textAlign: 'left'
  }
};

export default UserProfile;
