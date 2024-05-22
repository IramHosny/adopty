import React, { useState, useEffect } from 'react';
import './CSS/Cards.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ChienCard = ({ dog }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Vérifier si le chien est déjà dans la liste des favoris lors de l'initialisation du composant
    const favoritesdog = JSON.parse(localStorage.getItem('favoritesdog')) || [];
    const isDogInFavorites = favoritesdog.some((favoriteDog) => favoriteDog._id === dog._id);
    setIsFavorite(isDogInFavorites);
  }, [dog._id]); // Déclencher l'effet uniquement lorsque l'ID du chien change

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Ajouter ou supprimer le chien de la liste des favoris dans le localStorage
    const favoritesdog = JSON.parse(localStorage.getItem('favoritesdog')) || [];
    const index = favoritesdog.findIndex((favoriteDog) => favoriteDog._id === dog._id);
    if (index === -1) {
      // Si le chien n'est pas déjà dans les favoris, l'ajouter
      favoritesdog.push(dog);
      window.location.reload();
    } else {
      // Sinon, le supprimer
      favoritesdog.splice(index, 1);
      window.location.reload();
    }
    localStorage.setItem('favoritesdog', JSON.stringify(favoritesdog));
  };

  return (
    <div>
      <main>
        <button onClick={toggleFavorite} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '100%' }}>
          <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} size="2x" />
        </button>

        <div className="card_pets">
          <img src={dog?.image} alt="" />
          <div className="card-content" style={{ backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)' }} >
            <h2 style={{ fontWeight: 'bold' }}>{dog?.name}</h2>
            <p style={{ fontStyle: 'italic', fontFamily: 'cursive', fontSize: '50px', fontWeight: 'bold' }}>
              <h4>{dog?.breed}</h4>
              <h4>{dog?.sexe}</h4>
              <h4><i className="fas fa-map-marker-alt" /> {dog?.location}</h4>
            </p>
            <Link style={{ width: '100%', marginBottom: '-50px', fontWeight: 'bold' }} to={`/dogdetails/${dog?._id}`} >
              <a className="button">Find out more</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChienCard;
