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
   git clone https://github.com/yourusername/your-repo.git
Navigate to the Project Directory:

bash
Copy code
cd weather_new
Create a Configuration File:

Create a config.js file in the root directory of the project.
Add your API key to config.js:
javascript
Copy code
const API_KEY = "your-api-key-here";
Open index.html:

Open index.html in your browser to view the application.
Deployment
As of now, the project is not hosted. You can run it locally by following the steps in the "Getting Started" section.

Adding to .gitignore
To ensure your config.js file is not pushed to GitHub, add it to your .gitignore file:

Create a .gitignore File (if it doesn't exist):

bash
Copy code
echo "config.js" > .gitignore
Add Other Files to Ignore:

You can add other files or directories to .gitignore as needed.
Contributing
If you would like to contribute to this project, please follow these guidelines:

Fork the Repository.
Create a New Branch:
bash
Copy code
git checkout -b feature/your-feature
Make Your Changes.
Commit Your Changes:
bash
Copy code
git commit -m "Add some feature"
Push to the Branch:
bash
Copy code
git push origin feature/your-feature
Create a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
OpenWeatherMap: For providing the weather data API.