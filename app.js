'use strict'
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let dateObj = new Date();
let month = monthNames[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

let newdate = `${month} ${day}, ${year}`;

const app = document.querySelector('.app');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=2d48b1d7080d09ea964e645ccd1ec93f&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        app.insertAdjacentHTML('afterbegin', `<div class="bar">
        <div class="center"><a href="#"><i class="fas fa-crosshairs"></i></a></div>
        <div class="search"><a href="#"><i class="fas fa-search"></i></a></div>
    </div><div class="titlebar">
    <p class="date">${newdate}</p>
    <h4 class="city">${data.name}</h4>
    <p class="description">${data.weather[0].description}</p>
</div>
<div class="temperature">
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <h2>${Math.round(data.main.temp)}°C</h2>
</div>
<div class="extra">
    <div class="col">
        <div class="info">
            <h5>Wind Status</h5>
            <p>${data.wind.speed}mps</p>
        </div>
        <div class="info">
            <h5>Visibility</h5>
            <p>${data.visibility} m</p>
        </div>
    </div>
    
    <div class="col">
        <div class="info">
            <h5>Humidity</h5>
            <p>${data.main.humidity}%</p>
        </div>
        <div class="info">
            <h5>Air pressure</h5>
            <p>${data.main.pressure} mph</p>
        </div>
    </div>

</div>`)

    });

