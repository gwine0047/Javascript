const api_key = "514d525ecb9f03cddfeb25a0b84d1166";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

if (formEl && cityInputEl && weatherDataEl) {
    formEl.addEventListener("submit", (event) => {
        // prevent refresh when submit button is hit
        event.preventDefault();

        const cityValue = cityInputEl.value;
        console.log(cityValue);
    });
}

else {
    console.error('One or more element are mising');
}