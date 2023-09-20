import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedSelector from './BreedSelector'; // Import the BreedSelector component here
import DogImage from './DogImages'; // Import the DogImage component here

function Home({ authenticated, onBreedSelected }) {
  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomDogImage = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setImageUrl(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={fetchRandomDogImage}>Fetch Random Dog Image</button>
      {imageUrl && (
        <div>
          <h3>Random Dog Image</h3>
          <img src={imageUrl} alt="Random Dog" />
        </div>
      )}
      {/* Render the BreedSelector component */}
      <BreedSelector onBreedSelected={onBreedSelected} />
      {/* Render the DogImage component */}
      <DogImage authenticated={authenticated} />
    </div>
  );
}

export default Home;
