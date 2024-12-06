import React from "react";

const Favorites = ({ favorites, fetchWeatherForCity, removeFromFavorites }) => {
  return (
    <div className="favorites">
      <h3>Favorite Cities</h3>
      {favorites.map((city) => (
        <div key={city.id} className="favorite-item">
          <span>{city.name}</span>
          <div>
            <button onClick={() => fetchWeatherForCity(city.name)}>View</button>
            <button onClick={() => removeFromFavorites(city.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
