import React from 'react';

function WeatherInfo({ weatherData }) {
  console.log(weatherData);
  if (weatherData === null) {
    return <p>No weather data available.</p>;
  }
  const iconCode = weatherData.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weatherInfo">
      <h2>{weatherData.name}</h2>
      <img src={iconURL} alt="" />
      <p>Temperatur: {weatherData.main.temp}°C</p>
      <p>Luftfeuchtigkeit: {weatherData.main.humidity}%</p>
      <p>
        Wetterbedingungen: {weatherData.weather[0].main} - {weatherData.weather[0].description}
      </p>
    </div>
  );
}

export default WeatherInfo;
