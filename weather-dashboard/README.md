# Weather-Dashboard

## Overview

The Weather Dashboard is a React-based web application that allows users to view the current weather and a 5-day forecast for any city of their choice. Users can search for cities, view real-time weather data, and manage their favorite cities using the OpenWeatherMap API and a JSON server to store and retrieve favorite cities.

### Key Features:
**1. Search City Weather**
Users can enter a city name in the search bar to view the current weather and 5-day forecast for that city. If no city is entered, a default city (e.g., "Delhi") is displayed.

**2. Add to Favorites**
After viewing a city's weather, users can add it to their list of favorite cities. This functionality is implemented by sending a POST request to a mock backend server (using JSON Server) to store the favorite city.

**3. Remove from Favorites**
Users can remove a city from their list of favorites by clicking a "Remove" button associated with each city in the favorites list.

**4. Display Favorite Cities Weather**
The weather for favorite cities can be viewed by clicking on any city in the favorites list. The application retrieves the weather data for the selected city and displays it in the weather section.

**5. Temperature Unit Toggle**
The application provides a toggle button that allows users to switch between Celsius and Fahrenheit for temperature readings.

**6. Local Storage**
The app remembers the last searched city and loads it automatically when the page is refreshed.

### Steps to Install and Run

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Weather-Dashboard.git
cd Weather-Dashboard
```

2. Install dependencies:
```bash
npm install
```
3. Start the JSON server to manage favorite cities:
    - Install JSON Server globally (if you haven't already):
```bash
npm install -g json-server
```
This will start a mock backend at http://localhost:5000 for managing favorite cities.
4. Start the application:
```bash
npm start
```

### API Integration 
The Weather Dashboard uses the [OpenWeatherMap API](https://openweathermap.org/api) to retrieve the current weather and 5-day forecast for a given city. You need to sign up for an API key to use the services provided by OpenWeatherMap.

### API Key
To use the OpenWeatherMap API, you need to generate an API key:

1. Visit the [OpenWeatherMap API page](https://openweathermap.org/api).
2. Sign up for an account and generate an API key.
3. Replace `{API_KEY}` in the API endpoints below with your generated API key.

---

## API Endpoints

- Current Weather Data
'https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric'
- 5-day forecast:
'https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={API_KEY}&units=metric'


### Future Enhancements

- Add user authentication to store favorites in a database.
- Allow users to view more detailed weather data, such as hourly forecasts.
- Implement unit tests for key components.


