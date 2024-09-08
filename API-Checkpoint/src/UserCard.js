import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => setShowDetails(!showDetails);

  return (
    <div className="card" style={{ backgroundImage: `url('https://media.tenor.com/Zp9f2I9FpFcAAAAd/anonimous-hacker.gif')` }}>
      <h3 className="user-name">{user.name}</h3>
      <button onClick={handleToggle} className="toggle-button">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <div className={`user-details ${showDetails ? 'show' : 'hide'}`}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
