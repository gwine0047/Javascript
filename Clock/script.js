"use strict";

const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleButton = document.querySelector(".toggle");

// light and dark mode effect
toggleButton.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if (html.classList.contains("dark")) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});
