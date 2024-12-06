import React from "react";

const WeatherDisplay = ({ currentWeather, forecastData }) => {
  return (
    <div className="weather-display">
      {currentWeather ? (
        <div>
          <h2>{currentWeather.name} Weather</h2>
          <p>Temperature: {currentWeather.main.temp}°C</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>Condition: {currentWeather.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>{day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
