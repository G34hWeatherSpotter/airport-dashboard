import React, { useEffect, useState } from "react";

export default function OpenMeteoWeather({ latitude, longitude }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data.current_weather));
    }
  }, [latitude, longitude]);

  if (!weather) return <div>Loading weather...</div>;
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Current Weather</h3>
      <p>
        <b>Temperature:</b> {weather.temperature}°C<br />
        <b>Windspeed:</b> {weather.windspeed} m/s<br />
        <b>Weather code:</b> {weather.weathercode}
      </p>
    </div>
  );
}
