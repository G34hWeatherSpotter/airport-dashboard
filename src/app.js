import React, { useState } from "react";
import MapPicker from "./components/MapPicker";
import OpenMeteoWeather from "./components/OpenMeteoWeather";
import "./App.css";

function App() {
  const [coords, setCoords] = useState({ lat: 51.4700, lng: -0.4543 });

  return (
    <div className="App">
      <header>
        <h1>Airport Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Pick a Location on the Map</h2>
          <MapPicker
            initialPosition={coords}
            onLocationChange={setCoords}
          />
          <div>
            <b>Latitude:</b> {coords.lat.toFixed(4)} <b>Longitude:</b> {coords.lng.toFixed(4)}
          </div>
          <OpenMeteoWeather latitude={coords.lat} longitude={coords.lng} />
        </section>
        <section>
          <h2>Live Flight Radar</h2>
          <div style={{ width: "90vw", maxWidth: 1000, height: 480, margin: "0 auto" }}>
            <iframe
              title="Flight Radar"
              src="https://globe.adsbexchange.com/"
              width="100%"
              height="100%"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
