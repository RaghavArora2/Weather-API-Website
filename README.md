# Weather App

Welcome to the Weather App! This is a simple weather application that displays current weather data and forecasts based on a user's location. The app uses the OpenWeatherMap API to fetch weather data and provides a user-friendly interface to view it.

## Features

- **Current Weather**: Displays the current temperature, humidity, pressure, wind speed, sunrise, and sunset times.
- **Daily Forecast**: Shows a 7-day weather forecast with temperature highs and lows.
- **Dynamic Updates**: Real-time updates for current weather and time.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the web page.
- **JavaScript**: For fetching data from the API and updating the UI dynamically.
- **OpenWeatherMap API**: For retrieving weather data.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RaghavArora2/Weather-API-Website
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd weather_new
   ```

3. **Create a Configuration File**:
   - Create a `config.js` file in the root directory of the project.
   - Add your API key to `config.js`:
     ```javascript
     const API_KEY = "your-api-key-here";
     ```

4. **Open `index.html`**:
   - Open `index.html` in your browser to view the application.

## Deployment

As of now, the project is not hosted. You can run it locally by following the steps in the "Getting Started" section.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. **Fork the Repository**.
2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Your Changes**.
4. **Commit Your Changes**:
   ```bash
   git commit -m "Add some feature"
   ```
5. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature
   ```
6. **Create a Pull Request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **OpenWeatherMap**: For providing the weather data API.
