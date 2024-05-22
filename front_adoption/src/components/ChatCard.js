import React, { useState, useEffect } from 'react';
import './CSS/Cards.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ChatCard = ({ cat }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Vérifier si le chat est déjà dans la liste des favoris lors de l'initialisation du composant
    const favoritescat = JSON.parse(localStorage.getItem('favoritescat')) || [];
    const isCatInFavorites = favoritescat.some((favoriteCat) => favoriteCat._id === cat._id);
    setIsFavorite(isCatInFavorites);
  }, [cat._id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Ajouter ou supprimer le chat de la liste des favoris dans le localStorage
    const favoritescat = JSON.parse(localStorage.getItem('favoritescat')) || [];
    const index = favoritescat.findIndex((favoriteCat) => favoriteCat._id === cat._id);
    if (index === -1) {
      // Si le chat n'est pas déjà dans les favoris, l'ajouter
      favoritescat.push(cat);
      window.location.reload();
    } else {
      // Sinon, le supprimer
      favoritescat.splice(index, 1);
      window.location.reload();
    }
    localStorage.setItem('favoritescat', JSON.stringify(favoritescat));
  };

  return (
    <div>
      <main>
        <button onClick={toggleFavorite} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '100%' }}>
          <FontAwesomeIcon icon={faHeart} color={isFavorite ? 'red' : 'gray'} size="2x" />
        </button>

        <div className="card_pets">
          <img src={cat?.image} alt="" />
          <div className="card-content">
            <div className='card-content-pets'>
              <h2 className='card-title' style={{ fontWeight: 'bold' }}>{cat?.name}</h2>
              <p style={{ fontStyle: 'italic', fontFamily: 'cursive', fontSize: '50px', fontWeight: 'bold' }}>
                <h4>{cat?.breed}</h4>
                <h4>{cat?.sexe}</h4>
                <h4><i className="fas fa-map-marker-alt" /> {cat?.location}</h4>
              </p>
              <Link style={{ width: '100%', marginBottom: '-50px', fontWeight: 'bold' }} to={`/catdetails/${cat?._id}`}>
                <a className="button">Find out more</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatCard;
