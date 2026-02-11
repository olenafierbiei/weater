import React from 'react';
import './App.css';

// Масив з даними (це твоя база даних)
const weatherData = [
  { id: 'lisbon', city: 'Lisbon', temp: '21°C', icon: 'wi-day-sunny' },
  { id: 'paris', city: 'Paris', temp: '11°C', icon: 'wi-night-sleet' },
  { id: 'beldrad', city: 'Belgrade', temp: '15°C', icon: 'wi-day-cloudy' },
  { id: 'venice', city: 'Venice', temp: '21°C', icon: 'wi-day-cloudy-high' },
  { id: 'tel-avive', city: 'Tel-Avive', temp: '32°C', icon: 'wi-hot' },
  { id: 'cair', city: 'Cair', temp: '21°C', icon: 'wi-day-sunny' },
  { id: 'new-york', city: 'New-York', temp: '17°C', icon: 'wi-day-sleet-storm' },
  { id: 'new-delhi', city: 'New-Delhi', temp: '17°C', icon: 'wi-rain-wind' },
  { id: 'san-francisco', city: 'San-Francisco', temp: '15°C', icon: 'wi-day-sunny-overcast' },
  { id: 'tokyo', city: 'Tokyo', temp: '8°C', icon: 'wi-night-clear' },
  { id: 'sydney', city: 'Sydney', temp: '25°C', icon: 'wi-night-partly-cloudy' },
];

function App() {
  return (
    <div className="container">
      <header>
        CSS Weather Forecast <i className="wi wi-sunrise"></i>
      </header>
      
      <ul className="weather">
        {weatherData.map((item) => (
          <li key={item.id} id={item.id}>
            {item.city} <br />
            {item.temp}
            <i className={`wi ${item.icon}`}></i>
          </li>
        ))}
      </ul>

      <footer>
        Have a nice day and don't forget umbrella if you are in New Delhi now!
      </footer>
    </div>
  );
}

export default App;