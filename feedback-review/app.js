const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingsEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you</strong> for your feedback!
        <br>
        <br>
        <strong>Feedback: </strong>${selectedRating}
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
});
function removeActive(){
    ratingsEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    });
}