import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './App.css';
import video from './back1.mp4';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="matrix-effect">
        <div className="matrix-line">WELCOME</div>
        <div className="icon-container">
          <i className="fas fa-database"></i>
          <i className="fas fa-lock"></i>
        </div>
        <h2 className="loading-text">
          Chargement en cours
          <span className="loading-dots">
            <span>*</span><span>*</span><span>*</span>
          </span>
        </h2>
      </div>
    </div>
  );
};
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
          setTimeout(() => {
            setContentReady(true);
          }, 3000);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
          setContentReady(true);
        });
    };

    fetchData();

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <LoadingScreen />
      ) : (
        contentReady && (
          <>
            <header className="app-header">
              <video autoPlay loop muted playsInline className="background-video">
                <source src={video} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
              <h1 className="skills">U$ER</h1>
              <h1>LI$T</h1>
            </header>
            <div className="user-list">
              {users.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default App;
