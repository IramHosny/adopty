import React, { useState, useEffect } from 'react';

const ShowLocalStorageCat = () => {
  const [favoritescat, setFavorites] = useState([]);

  useEffect(() => {
    // Récupérer les données du localStorage au chargement du composant
    const localStorageData = localStorage.getItem('favoritescat');
    if (localStorageData) {
      // Convertir les données JSON en objet JavaScript
      const parsedFavoritescat = JSON.parse(localStorageData);
      setFavorites(parsedFavoritescat);
    }
  }, []);

  return (
    <div>
      <h2 style={{color:'black',fontStyle:'italic',marginTop:'2%',fontWeight:'bold'}}>Your Favorite Cats</h2>
      <ul>
        {favoritescat.map((favorite, index) => (
          <li  key={index} style={{ fontStyle: 'italic'}}>{favorite.name}</li>
          // Vous pouvez ajuster cette ligne en fonction de la structure de vos données favorites
        ))}
      </ul>
    </div>
  );
};

export default ShowLocalStorageCat;
