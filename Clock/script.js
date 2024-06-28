"use strict";

//These lines select elements from the DOM (Document Object Model)
//  using document.querySelector and assign them to variables.
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleButton = document.querySelector(".toggle");

// light and dark mode effect

// This code adds an event listener to the toggle button. When the button is clicked, it toggles the dark class on the <html> element.

toggleButton.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    // If the dark class is present, it is removed, and the button text is set to "Dark Mode".
    if (html.classList.contains("dark")) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    // If the dark class is not present, it is added, and the button text is set to "Light Mode".
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});

// These arrays store the names of the days of the week and the months of the year. They are used to convert the numerical day and month values from the Date object into readable text.

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

function setTime()
{
    // Getting the current date and time using the Date object.
    const time = new Date();
    // It extracts the current month, day of the week, date, hours, minutes, and seconds.
    const month = time.getMonth();
    // console.log(month)
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();

    // converts the 24-hour format to 12-hour format

    // if hours is >= 13, do % 12 else leave it
    // const hoursForClock = hours >= 13 ? hours % 12 : hours;

    // Use modulo to convert hours to 12-hour format
    const hoursForClock = hours % 12 || 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    
    // It determines whether it's AM or PM based on the hours.
    const ampm = hours >= 12 ? "PM" : "AM";

    // It updates the transform property of the clock hands (hourElement, minuteElement, secondElement) to rotate them according to the current time.
    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;

    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;

    // this will help display our code on the html page
    // if the minute is less than 10, add 0 before it
    timeElement.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}`: minute} ${ampm}`

    // select date element
    // time.getDay and time.getMonth return a number that matches
    // the right day and month in the array we created.
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
/**
 * This function takes a number num and scales it from one range (in_min to in_max) to another range (out_min to out_max).
  * It's used to convert the current time values (hours, minutes, seconds) into degrees for rotating the clock hands. 
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
// setInterval(setTime, 1000) calls setTime every 1000 milliseconds (1 second) to update the time continuously.
setInterval(setTime, 1000);