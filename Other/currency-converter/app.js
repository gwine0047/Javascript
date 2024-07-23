const firstCurrencyEl = document.getElementById("first-currency");
const secondCurrencyEl = document.getElementById("second-currency");

const secondWorthEl = document.getElementById("second-worth");
const firstWorthEl = document.getElementById("first-worth");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(` https://v6.exchangerate-api.com/v6/273d5af644236fb2701bad8c/latest/${firstCurrencyEl.value}`).then((res) =>res.json())
    .then((data) => {
        const rate = data.conversion_rates[secondCurrencyEl.value]
        exchangeRateEl.innerText = `1 ${firstCurrencyEl.value} = ${rate + " " + secondCurrencyEl.value}`;

        secondWorthEl.value = (firstWorthEl.value * rate).toFixed(2)
});

}

firstCurrencyEl.addEventListener("change", updateRate)

secondCurrencyEl.addEventListener("change", updateRate);

firstWorthEl.addEventListener("change", updateRate)