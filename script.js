window.onload = function() {
    // OpenWeatherMap API 키
    var apiKey = 'f302c3976c10428a0e5467cce4b54984';
    // API 호출 URL
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + apiKey;

    // API 호출
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // 예보 데이터 받아오기
        var forecastData = data.list.map(item => ({
            time: item.dt_txt,
            temperature: item.main.temp,
            description: item.weather[0].description,
            icon: item.weather[0].icon
        }));

        // 날씨 예보 정보 HTML에 추가
        var forecastElement = document.getElementById('forecast');
        forecastData.forEach(forecast => {
            forecastElement.innerHTML += `
                <div class="forecast-item">
                    <p>${forecast.time}</p>
                    <p>온도: ${forecast.temperature}℃</p>
                    <p>날씨: ${forecast.description}</p>
                    <img src="http://openweathermap.org/img/wn/${forecast.icon}.png" alt="weather-icon">
                </div>
            `;
        });
    })
    .catch(error => console.log('Error fetching weather forecast data:', error));
};