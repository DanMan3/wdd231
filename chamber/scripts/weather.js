import apiFetch from './api-fetch.js';

const currentWeather = document.querySelector('.weather-stats');
const weatherForecast = document.querySelector('.weather-forecast');


const url = `https://api.openweathermap.org/data/2.5/forecast?lat=40.3763&lon=-111.7950&units=imperial&appid=0b23909d6afa5cdeee2cec3f80daec2d`;



let response = await apiFetch(url)
displayCurrentWeather(response);
displayWeatherForecast(response);




function displayCurrentWeather(data) {

    let first = data.list[0]

    const weatherIcon = document.querySelector('.weather-icon img')
    weatherIcon.src = `https://openweathermap.org/img/wn/${first.weather[0].icon}.png`
    weatherIcon.alt = first.weather[0].description;

    const temp = document.querySelector('.temp')
    temp.innerHTML = `<span>${Math.round(first.main.temp)}°</span> F`

    const cloudStatus = document.querySelector('.cloud-status')
    cloudStatus.innerHTML = `<span>${first.weather[0].description}</span>`

    const high = document.querySelector('.high')
    high.innerHTML = `High: <span>${Math.round(first.main.temp_max)}°</span> F`

    const low = document.querySelector('.low')
    low.innerHTML = `Low: <span>${Math.round(first.main.temp_min)}°</span> F`

    const humidity = document.querySelector('.humidity')
    humidity.innerHTML = `Humidity: <span>${first.main.humidity}%</span>`

    const sunrise = document.querySelector('.sunrise')
    const sunriseTime = new Date(data.city.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    sunrise.innerHTML = `Sunrise: <span>${sunriseTime}</span>`

    const sunset = document.querySelector('.sunset')
    const sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    sunset.innerHTML = `Sunset: <span>${sunsetTime}</span>`
}


function displayWeatherForecast(data) {
    const list = Array.isArray(data.list) ? data.list : [];

    const days = []
    const seenDates = new Set()
    for (const item of list) {
        if (!item.dt_txt) continue;
        const [datePart, timePart] = item.dt_txt.split(' ')
        if (timePart === '12:00:00' && !seenDates.has(datePart)) {
            days.push(item);
            seenDates.add(datePart);
            if (days.length === 3) break;
        }
    }

    const elements = [
        document.querySelector('.today'),
        document.querySelector('.tomorrow'),
        document.querySelector('.next-day')
    ];

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i]
        const item = days[i]
        if (!el || !item) continue;

        const dayName = getWeekday(item.dt)

        el.innerHTML = `${dayName}: <span>${Math.round(item.main.temp)}°F</span>`;
    }
}

function getWeekday(dtSeconds, tzOffsetSeconds = 0) {
    return new Date((dtSeconds + (tzOffsetSeconds || 0)) * 1000)
        .toLocaleDateString(undefined, { weekday: 'long' });
}
