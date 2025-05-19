import React from "react";
import AirportWebcam from "./components/AirportWebcam";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Airport Dashboard</h1>
      <p>
        A simple dashboard showing a live airport webcam feed.<br />
        (To add weather and radar, let me know and I’ll provide those components!)
      </p>
      <AirportWebcam />
    </div>
  );
}

export default App;
