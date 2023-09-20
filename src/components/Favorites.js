import React from 'react';

function Favorites({ authenticated }) {
  // Get favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>Favorites</h2>
      {authenticated ? (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <img src={favorite} alt={`Favorite Dog ${index}`} />
            </li>
          ))}
        </ul>
      ) : (
        <p>You need to log in to access favorites.</p>
      )}
    </div>
  );
}

export default Favorites;
