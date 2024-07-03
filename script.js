const apiKey = '224c3c88436780892ccf91437f966aa6';

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found.');
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('weather-icon').src = icon;
}
