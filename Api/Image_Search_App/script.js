const accessKey = "uLNEuwEcrFZzCazup-S2K5LakNrHLLEmUTtoNvSvT-M"

const formEl = document.querySelector("form");
const SearchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button")

// let is a changing variable
let inputData = "";
let page = 1;

async function searchImages(){
    inputData = SearchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }
    // result is a object in the json data file
    const results = data.results;

    results.map((result)=>{
    // creating a new result holder div. This means the div as used will remain placeHolders inside html
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("result");

    // 
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);

    searchResultsEl.append(imageWrapper);

});
    page++;
    console.log(page);
    if (page > 1 && page < 1000){
        showMoreButtonEl.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    // prevent refreshing the page
    event.preventDefault()
    page = 1;
    searchImages();
});

    showMoreButtonEl.addEventListener("click", () =>{
        searchImages();
});
