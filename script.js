const timeEI = document.getElementById("time");
const dateEI = document.getElementById("date");
const currentweatheritemsEI = document.getElementById("current-weather-items");
const timezoneEI = document.getElementById("time-zone");
const countryEI = document.getElementById("country");
const weatherforecastEI = document.getElementById("weather-forecast");
const currenttempEI = document.getElementById("current-temp");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  // Add leading zero to hours and minutes if they are less than 10
  const formattedHours = hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  timeEI.innerHTML = formattedHours + ":" + formattedMinutes + " " + `<span id="am-pm">${ampm}</span>`;
  dateEI.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);

getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      })
  })
}

function showWeatherData(data) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  timezoneEI.innerHTML = data.timezone;  // Use timezoneEI instead of timezone
  countryEI.innerHTML = data.lat + 'N ' + data.lon + 'E';  // Use countryEI instead of countryEl

  currentweatheritemsEI.innerHTML = `
  <div class="weather-item">
      <div>Humidity</div>
      <div>${humidity}%</div>
  </div>
  <div class="weather-item">
      <div>Pressure</div>
      <div>${pressure}</div>
  </div>
  <div class="weather-item">
      <div>Wind Speed</div>
      <div>${wind_speed}</div>
  </div>

  <div class="weather-item">
      <div>Sunrise</div>
      <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
  </div>
  <div class="weather-item">
      <div>Sunset</div>
      <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
  </div>
  `;

  let otherDayForcast = '';
  data.daily.forEach((day, idx) => {
    if (idx == 0) {
      currenttempEI.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
      <div class="other">
          <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
          <div class="temp">Night - ${day.temp.night}&#176;C</div>
          <div class="temp">Day - ${day.temp.day}&#176;C</div>
      </div>
      `;
    } else {
      otherDayForcast += `
      <div class="weather-forecast-item">
          <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
          <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
          <div class="temp">Night - ${day.temp.night}&#176;C</div>
          <div class="temp">Day - ${day.temp.day}&#176;C</div>
      </div>
      `;
    }
  });

  weatherforecastEI.innerHTML = otherDayForcast;  // Use weatherforecastEI instead of weatherForecastEl
}
