import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BreedSelector({ onBreedSelected }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        const breedList = Object.keys(response.data.message);
        setBreeds(breedList);
      })
      .catch((error) => {
        console.error('Error fetching breeds:', error);
      });
  }, []);

  const handleBreedChange = (event) => {
    const selectedBreed = event.target.value;
    onBreedSelected(selectedBreed);
  };

  return (
    <div>
      <label htmlFor="breedSelector">Select a Dog Breed:</label>
      <select id="breedSelector" onChange={handleBreedChange}>
        <option value="">-- Select Breed --</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BreedSelector;
