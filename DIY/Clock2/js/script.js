"use strict";

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener('click', (e) =>
{
    const html = document.querySelector('html');
    if(html.classList.contains("dark"))
        {
            html.classList.remove('dark');
            e.target.innerHTML = "Pink Mode";
        }
        else
        {
            html.classList.add("dark");
            e.target.innerHTML = "Brown Mode";
        }
});