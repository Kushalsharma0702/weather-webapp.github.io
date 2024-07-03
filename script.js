const apiKey = '224c3c88436780892ccf91437f966aa6';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const weatherDetails = document.getElementById('weatherDetails');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found');
      return;
    }

    cityName.innerText = data.name;
    temperature.innerText = `${data.main.temp}°C`;
    description.innerText = data.weather[0].description;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
