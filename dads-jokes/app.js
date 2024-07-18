"use strict";

const apiKey = "DRwB7OAVt2hmclkMIzpDLA==UjNFcYPsyD6bSdBR";
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit-1"

async function getJoke(){
    try {

        jokeEl.innerHTML = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading ..";
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Get a Joke";
        // const jsonData = JSON.stringify(data, null, 2);
        // const blob = new Blob([jsonData], { type: 'application/json' });
        // const url = URL.createObjectURL(blob);
        // const a =document.createElement('a');
        // a.href=url;
        // a.download = 'response.json';
        // a.click();
        // URL.revokeObjectURL(url);

        jokeEl.innerText = data[0].joke;
    } catch(error) {
        jokeEl.innerText = "An error has occured";
        btnEl.disabled = false;
        btnEl.innerText = "Get a Joke";
        console.error('Error fetching data from API', error);
    }
}

btnEl.addEventListener("click", getJoke);