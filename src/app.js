import React from "react";
import AirportWebcam from "./components/AirportWebcam";
import AirportRadar from "./components/AirportRadar";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Airport Dashboard</h1>
      <p>
        A simple dashboard showing a live airport webcam feed and live radar.<br />
        (To add weather, let me know!)
      </p>
      <AirportWebcam />
      <AirportRadar />
    </div>
  );
}

export default App;
