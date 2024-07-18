const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const pronunciationEl = document.getElementById("pronunciation");
const partsOfSpeechEl = document.getElementById("partsofspeech");

const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
    try{
        // infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "none";

        infoTextEl.innerText = `Searching for the meaning of the word: ${word} ...`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((response) => response.json());

        if(result.title){
            meaningContainerEl.style.display = "block";
            infoTextEl.style.display = "none";

            wordEl.innerText = word;
            meaningEl.innerText = "N/A";
            partsOfSpeechEl.innerText = "N/A"
            pronunciationEl.innerText = "N/A"
            audioEl.style.display = "none";
        }
        else{
            // console.log(result);
            infoTextEl.style.display = "none";

            meaningContainerEl.style.display = "block";

            wordEl.innerText = result[0].word;
            pronunciationEl.innerText = result[0].phonetics[0].text;

            const meanings = result[0].meanings[0].definitions;
            for(let i = 0; i < meanings.length; i++){
                meaningEl.innerText = meanings[i].definition;
                console.log(meanings[i].definition);
            }
        }

        // meaningEl.innerText = result[0].meanings[0].definitions[0].definition;

        partsOfSpeechEl.innerText = result[0].meanings[0].partOfSpeech;

        audioEl.src = result[0].phonetics[0].audio;
    } catch(error){
        console.error(error);
        infoTextEl.innerText = "An error has occured.Try again later."
    }
};

inputEl.addEventListener("keyup", (e) =>{
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
});