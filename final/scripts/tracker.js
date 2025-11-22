import { conditions } from '../data/conditions.mjs';


const conditionsDiv = document.querySelector(".conditions");
conditionsDiv.className = "conditions-div";

for (var c of conditions) {


    const conditionsCard = document.createElement("div")
    conditionsCard.className = "conditions-card"

    const name = document.createElement("h2")
    name.textContent = c.name;


    // ------- 3 Day Forecast -----------

    const currentTemps = document.createElement("div")
    const current = c.current;
    const wind = current.wind;
    const snow = c.snow;
    currentTemps.className = "current-temps"
    currentTemps.innerHTML = `
    <div class="conditions-today">
    <h3>Today's Forecast</h3>
    <div class="temps-today">
    <p id="current-temp">${current.tempF}° F</p>
    <p id="feels-like">Feels like: ${current.feelsLikeF}° F</p>
    <p id="condition">${current.condition}</p>
    <p id="wind">Wind: ${wind.dir}, ${wind.speedMph} mph</p>
    </div>
    
    <div class="snow-today">
     <p id="base-depth">Base Depth: ${snow.baseDepthIn}"</p
    <p id="snowfall-24h">Snowfall (24h): ${snow.snowfall24hIn}"</p>
    <p id="season-to-date">Season to Date: ${snow.seasonToDateIn}"</p>
    <p id="visibility">Visibility: ${c.visibilityMi} miles</p>
    </div>
    
    </div>`;


    let hr = document.createElement("hr")

    const threeDayForecast = document.createElement("div")
    const forecastDays = c.forecast;
    threeDayForecast.className = "three-day-forecast"
    threeDayForecast.innerHTML = `
    <h3>3-Day Forecast</h3>
    <div class="forecast-days">
    <div class="forecast-day">
    <h4>${new Date(forecastDays[0].date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
    <p>High: ${forecastDays[0].highF}° F</p>
    <p>Low: ${forecastDays[0].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[0].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[0].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[1].date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
    <p>High: ${forecastDays[1].highF}° F</p>
    <p>Low: ${forecastDays[1].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[1].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[1].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[2].date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
    <p>High: ${forecastDays[2].highF}° F</p>
    <p>Low: ${forecastDays[2].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[2].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[2].expectedSnowIn}"
    </div>`;


    conditionsCard.appendChild(name)
    conditionsCard.appendChild(currentTemps)
    conditionsCard.appendChild(hr)
    conditionsCard.appendChild(threeDayForecast)
    conditionsDiv.appendChild(conditionsCard)

    // ---------- 7-Day Forecast ------------

    const sevenDayForecast = document.createElement("div")
    sevenDayForecast.className = "seven-day-forecast"
    sevenDayForecast.innerHTML = `
    <h3>7-Day Forecast</h3>
    <div class="forecast-days">
    <div class="forecast-day">
    <h4>${new Date(forecastDays[0].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[0].highF}° F</p>
    <p>Low: ${forecastDays[0].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[0].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[0].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[1].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[1].highF}° F</p>
    <p>Low: ${forecastDays[1].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[1].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[1].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[2].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[2].highF}° F</p>
    <p>Low: ${forecastDays[2].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[2].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[2].expectedSnowIn}"
    </div>
    
    <div class="forecast-day"> 
    <h4>${new Date(forecastDays[3].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[3].highF}° F</p>
    <p>Low: ${forecastDays[3].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[3].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[3].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[4].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[4].highF}° F</p>
    <p>Low: ${forecastDays[4].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[4].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[4].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[5].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[5].highF}° F</p>
    <p>Low: ${forecastDays[5].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[5].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[5].expectedSnowIn}"</p>
    </div>

    <div class="forecast-day">
    <h4>${new Date(forecastDays[6].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[6].highF}° F</p>
    <p>Low: ${forecastDays[6].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[6].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[6].expectedSnowIn}"</p>
    </div>
    <div class="forecast-day">
    <h4>${new Date(forecastDays[7].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[7].highF}° F</p>
    <p>Low: ${forecastDays[7].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[7].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[7].expectedSnowIn}"</p>
    </div>
    <div class="forecast-day">
    <h4>${new Date(forecastDays[8].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[8].highF}° F</p>
    <p>Low: ${forecastDays[8].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[8].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[8].expectedSnowIn}"</p>
    </div>
    <div class="forecast-day">
    <h4>${new Date(forecastDays[9].date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
    <p>High: ${forecastDays[9].highF}° F</p>
    <p>Low: ${forecastDays[9].lowF}° F</p>
    <p>Chance of Snow: ${forecastDays[9].chanceSnowPct}%</p>
    <p>Expected Snow: ${forecastDays[9].expectedSnowIn}"</p>
    </div>
    
    `;


    // conditionsCard.appendChild(name)
    // conditionsCard.appendChild(currentTemps)
    // conditionsCard.appendChild(hr)
    hr = document.createElement("hr")


    conditionsCard.appendChild(hr)
    conditionsCard.appendChild(sevenDayForecast)
    conditionsDiv.appendChild(conditionsCard)



}
