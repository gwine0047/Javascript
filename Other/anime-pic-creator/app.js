const bntEl = document.getElementById("btn");
const animeContainerEl =  document.querySelector(".anime-container");
const animeImgEl =  document.querySelector(".anime-img");
const animeNameEl =  document.querySelector(".anime-name");

const urlAPI = "https://dattebayo-api.onrender.com/characters"

bntEl.addEventListener("click", async function(){
    try{
        bntEl.disabled = true;
        bntEl.innerText = "loading...";
        animeNameEl.innerText = "Getting your anime pic...";
        animeImgEl.src = "spinner.svg";

        const response = await fetch(urlAPI);
        const data = await response.json();
        let picNum = Math.floor(Math.random() * 20) +1;

        // if an error occurs, none of the following will be executed.
        animeContainerEl.style.display = "block";
        console.log(data.characters[0].images[0]);

        animeImgEl.src = data.characters[picNum].images[0];
        animeNameEl.innerText = data.characters[picNum].name;

        bntEl.disabled = false;
        bntEl.innerText = "Get Anime";

    } catch(error) {
        console.error(error);
        bntEl.disabled = false;
        bntEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error has occured!"
    }
});