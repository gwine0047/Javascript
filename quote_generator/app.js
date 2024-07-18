const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const quoteMarkEl = document.querySelector("fa-solid")
const apiURL = "https://api.quotable.io/random"

async function getQuote(){
    quoteEl.style.color = "#1b1b1b";
    try{
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;

        quoteEl.innerText = "Getting quote..."
        const response = await fetch(apiURL)
        const data = await response.json();

        quoteEl.innerText = data.content;
        authorEl.innerHTML = data.author;
        
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
    }catch(error){
        console.error(error);
        quoteEl.style.color = "red";
        quoteEl.innerText = "An error has occured!"
        quoteMarkEl.style.color = "red";
        authorEl.innerText = "";
    }
    
}

// getQuote();

btnEl.addEventListener("click", getQuote);