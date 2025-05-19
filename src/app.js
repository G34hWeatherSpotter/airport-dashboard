import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Airport Dashboard</h1>
      </header>
      <main>
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
          <p style={{ fontSize: "0.9em", color: "#666" }}>
            Powered by <a href="https://globe.adsbexchange.com/" target="_blank" rel="noopener noreferrer">ADSBexchange Globe</a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
