import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogImage({ authenticated }) {
  const [imageUrl, setImageUrl] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch a random dog image
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setImageUrl(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  const handleFavorite = () => {
    if (authenticated) {
      // Add the current image URL to the favorites list (localStorage)
      const updatedFavorites = [...favorites, imageUrl];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div>
      {authenticated && (
        <button onClick={handleFavorite}>Favorite</button>
      )}
      <div>
        <h2>Random Dog Image</h2>
        <img src={imageUrl} alt="Random Dog" />
      </div>
    </div>
  );
}

export default DogImage;
