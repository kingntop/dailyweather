'use strict'
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


function addZero(num) {
    return num < 10 ? '0' + num : num; // 숫자가 10보다 작으면 앞에 0을 붙입니다.
  }

let now = new Date();
//연도 구하기
let nowYear = now.getFullYear();
//달 구하기
let nowMonth = addZero(now.getMonth() + 1);
//일 구하기
let nowDate = now.getDate();
//현재 시 구하기
let nowHours = addZero(now.getHours());
//현재 분 구하기
let nowMins = addZero(now.getMinutes());
//현재 초 구하기
let nowSec = addZero(now.getSeconds());

//그래서 지금은...
let newdate = `${nowYear}년 ${nowMonth}월 ${nowDate}일 ${nowHours}시 ${nowMins}분 ${nowSec}초`;

const app = document.querySelector('.app');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=2d48b1d7080d09ea964e645ccd1ec93f&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        app.insertAdjacentHTML('afterbegin', `<div class="bar">

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
            <h5>바람</h5>
            <p>${data.wind.speed}mps</p>
        </div>
        <div class="info">
            <h5>시야</h5>
            <p>${data.visibility} m</p>
        </div>
    </div>
    
    <div class="col">
        <div class="info">
            <h5>습도</h5>
            <p>${data.main.humidity}%</p>
        </div>
        <div class="info">
            <h5>기압</h5>
            <p>${data.main.pressure} mph</p>
        </div>
    </div>

</div>`)

    });

