window.onload = function() {
    // OpenWeatherMap API 키
    var apiKey = 'YOUR_API_KEY';
    // API 호출 URL
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=' + apiKey + '&units=metric';
    
    // API 호출
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // 데이터 받아오기
        var weatherData = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon
        };

        // 날씨 정보 HTML에 추가
        var weatherElement = document.getElementById('weather');
        weatherElement.innerHTML = `
            <h2>${weatherData.city}</h2>
            <p>온도: ${weatherData.temperature}℃</p>
            <p>날씨: ${weatherData.description}</p>
            <img src="http://openweathermap.org/img/wn/${weatherData.icon}.png" alt="weather-icon">
        `;
    })
    .catch(error => console.log('Error fetching weather data:', error));
};
