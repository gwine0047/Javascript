const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");

const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
    try{
        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "none";

        infoTextEl.innerText = `Searching for the meaning of the word: ${word} ...`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((response) => response.json());
        console.log(result);
        infoTextEl.style.display = "none";

        meaningContainerEl.style.display = "block";
        wordEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;

        audioEl.src = result[0].phonetics[0].audio;
    } catch(error){
        console.error(error);
    }
};

inputEl.addEventListener("keyup", (e) =>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
});