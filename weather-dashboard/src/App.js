import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric");

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;// Replace with your OpenWeatherMap API key

  // Fetch weather for a city
  const fetchWeatherData = async () => {
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
      );
      setCurrentWeather(weatherRes.data);
      setForecastData(forecastRes.data.list.filter((_, i) => i % 8 === 0));
    } catch (error) {
      alert("Error fetching weather data. Please try again.");
    }
  };

  // Fetch favorites
  const fetchFavorites = async () => {
    const res = await axios.get("http://localhost:5000/favorites");
    setFavorites(res.data);
  };

  // Add city to favorites
  const addToFavorites = async () => {
    const existing = favorites.find((fav) => fav.name === city);
    if (existing) {
      alert("City is already in favorites!");
      return;
    }
    const newFavorite = { name: city };
    await axios.post("http://localhost:5000/favorites", newFavorite);
    fetchFavorites();
  };

  // Remove city from favorites
  const removeFromFavorites = async (id) => {
    await axios.delete(`http://localhost:5000/favorites/${id}`);
    fetchFavorites();
  };

  // Fetch weather for a favorite city
  const fetchWeatherForCity = (cityName) => {
    setCity(cityName);
    fetchWeatherData();
  };
  
const handleUnitToggle = () => {
    // Toggle the unit
    setUnit(unit === "metric" ? "imperial" : "metric");
    // Refetch the weather data after unit change
    fetchWeatherData();
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <Search city={city} setCity={setCity} handleSearch={fetchWeatherData} />
      <WeatherDisplay currentWeather={currentWeather} forecastData={forecastData} />
      <p className="unit-indicator">
        Weather is showing in {unit === "metric" ? "°F" : "°C"}
      </p>
      <button className="add-to-favorite" onClick={addToFavorites}>Add to Favorites</button>
      <Favorites
        favorites={favorites}
        fetchWeatherForCity={fetchWeatherForCity}
        removeFromFavorites={removeFromFavorites}
      />
      <div className="toggle">
      <button onClick={handleUnitToggle}>
        Toggle °C/°F
      </button>
      <p className="unit-indicator">
        Weather is showing in {unit === "metric" ? "°F" : "°C"}
      </p>
      </div>
    </div>
  );
};

export default App;
