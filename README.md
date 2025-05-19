# Airport Dashboard

A customizable dashboard for aviation enthusiasts, spotters, and travelers. Displays live flight radar, airport webcam feeds, weather info, and other toggleable aviation widgets—all tailored to your location or airport of choice.

## Features

- **Live Flight Radar:**  
  Embedded real-time flight radar (powered by [ADSBexchange Globe](https://globe.adsbexchange.com/)), showing flights near the selected airport or your current location.

- **Airport Live Webcam:**  
  View live video feeds from public airport webcams. Automatically suggests the closest airport, but you can search and select any airport.

- **Weather Information:**  
  Get current weather conditions, forecasts, and aviation (METAR/TAF) data for your chosen airport.

- **Toggleable Widgets:**  
  Enable or disable additional features, such as:
  - Arrival/departure boards
  - NOTAMs (Notices to Airmen)
  - Airspace maps
  - Aviation news feeds
  - ...and more!

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/G34hWeatherSpotter/airport-dashboard.git
cd airport-dashboard
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm start
```

The dashboard will be available at `http://localhost:3000`.

---

## Customization

- **Default Airport:**  
  The app will try to detect your location and suggest the nearest airport. You can also search for and select any airport.

- **Widgets:**  
  Toggle widgets on or off from the settings menu.

- **APIs/Integrations:**  
  - [ADSBexchange Globe](https://globe.adsbexchange.com/) (flight radar)
  - [OpenWeatherMap](https://openweathermap.org/), [AviationWeather.gov](https://aviationweather.gov/) (weather)
  - Public webcam APIs and curated webcam URLs

## Contributing

Pull requests are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

[MIT](LICENSE)

---

**Ideas or suggestions?**  
Feel free to open an issue or a discussion!
