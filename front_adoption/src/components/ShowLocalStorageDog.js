import React, { useState, useEffect } from 'react';

const ShowLocalStorageDog = () => {
  const [favoritesdog, setFavorites] = useState([]);

  useEffect(() => {
    // Récupérer les données du localStorage au chargement du composant
    const localStorageData = localStorage.getItem('favoritesdog');
    if (localStorageData) {
      // Convertir les données JSON en objet JavaScript
      const parsedFavoritesdog = JSON.parse(localStorageData);
      setFavorites(parsedFavoritesdog);
    }
  }, []);

  return (
    <div>
      <h2 style={{color:'black',fontStyle:'italic',marginTop:'2%',fontWeight:'bold'}}>Your Favorite Dogs</h2>
      <ul>
        {favoritesdog.map((favorite, index) => (
          <li key={index}>{favorite.name}</li>
          // Vous pouvez ajuster cette ligne en fonction de la structure de vos données favorites
        ))}
      </ul>
    </div>
  );
};

export default ShowLocalStorageDog;
