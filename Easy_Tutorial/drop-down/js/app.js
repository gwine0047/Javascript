const selectFieldEl = document.querySelector(".selectField");
const selectTextEl = document.getElementById("selectText");
const optionsEl = document.getElementsByClassName("options");
const list = document.getElementById("list")
const arrowIconEl = document.getElementById("arrow-icon")


selectFieldEl.onclick = function(){
    list.classList.toggle("hide");
    arrowIconEl.classList.toggle("rotate");
};

for(option of optionsEl){
    option.onclick = function(){
        selectTextEl.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIconEl.classList.toggle("rotate");
    };
};