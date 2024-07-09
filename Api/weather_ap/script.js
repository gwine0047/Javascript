const api_key = "514d525ecb9f03cddfeb25a0b84d1166";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

if (formEl && cityInputEl && weatherDataEl) {
    formEl.addEventListener("submit", (event) => {
        // prevent refresh when submit button is hit
        event.preventDefault();

        const cityValue = cityInputEl.value.trim();
        getWeatgerData(cityValue);
    });
}

else {
    console.error('One or more element are mising');
}

// async allow the use of await
async function getWeatgerData(cityValue)
{
    try
    {
        // awaut prevents the code to go to the next line until current line is executed
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok.");
        }

        // response is not usable as it is. It has to be converted to a json file
        const data = await response.json();

        // now, let's fill our page with these json info
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        // collect the details in an array
        const detail_s = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`,
        ]

        // we can target our html elements using the id weatherdataEl
        // innerHTML is used to change img element in html
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description").textContent = `${description}`

        weatherDataEl.querySelector(".details").innerHTML = detail_s.map((detail) => `<div>${detail}</div>`).join(" ")
    }

    catch (error)
    {
        console.error('Error fetching weather data:', error);
        weatherDataEl.querySelector(".icon").innerHTML = ``
        weatherDataEl.querySelector(".temperature").textContent = ``;
        errorText = weatherDataEl.querySelector(".error");
        errorText.style.color = 'red';
        errorText.textContent = `${cityInputEl.value} cannot be found.`

        weatherDataEl.querySelector(".details").innerHTML = ""
    }
}