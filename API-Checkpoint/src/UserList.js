import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération des données des utilisateurs !", error);
      });
  }, []);

  const handleExpand = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <div
          key={user.id}
          className={`card ${expandedUser === user.id ? 'expanded' : ''}`}
        >
          <div className="card-header">
            <h2 className="card-title">{user.name}</h2>
            <button className="expand-btn" onClick={() => handleExpand(user.id)}>
              {expandedUser === user.id ? 'Masquer les détails' : 'Afficher les détails'}
            </button>
          </div>
          <div className="card-details">
            <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
            <p><strong>Site Web :</strong> {user.website}</p>
            <p><strong>Entreprise :</strong> {user.company.name}</p>
            <p><strong>Adresse :</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
