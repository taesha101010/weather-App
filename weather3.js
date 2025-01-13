const apiKey = 'a5ce90ba7add4246302d779648bb9157';

async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('city').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weather-info').style.display = 'block';
        } else {
            alert(data.message);
            document.getElementById('weather-info').style.display = 'none';
        }
    } catch (error) {
        alert('Error fetching weather data. Please try again.');
        document.getElementById('weather-info').style.display = 'none';
    }
}
