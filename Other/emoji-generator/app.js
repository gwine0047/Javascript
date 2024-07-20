const btnEl = document.getElementById("btn");
const sectorEl = document.querySelector("sector");
const nameEl = document.getElementById("name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=c779fd669c03b9e39bb1bfdf428b5be6a357b5d2");
    data = await response.json();

    for (let i=0; i<1500; i++){
        emoji.push({
            name:data[i].unicodeName,
            char:data[i].character
        });
    }
    console.log(emoji);
}
getEmoji()

btnEl.addEventListener("click", () => {

    const randomNumber = Math.floor(Math.random() * emoji.length);
    // alert(randomNumber);
    btnEl.innerText = emoji[randomNumber].char;
    nameEl.innerText = emoji[randomNumber].name;
});
