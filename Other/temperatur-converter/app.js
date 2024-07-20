const celsiusEl = document.getElementById("celsius");
const kelvinEl = document.getElementById("kelvin");
const fahreneitEl = document.getElementById("fahreneit");


function computeTemp(event){
    const currentInput = +event.target.value;

    switch(event.target.name) {
        case "celsius":
            kelvinEl.value = (currentInput + 273.32).toFixed(2)
            fahreneitEl.value = (currentInput * 1.8 + 32).toFixed(2);
            break;
        case "fahreneit":
            celsiusEl.value = ((currentInput - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentInput - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currentInput - 273.32).toFixed(2);
            fahreneitEl.value = ((currentInput - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;

    }
}