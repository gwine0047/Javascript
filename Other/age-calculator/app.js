const buttonEl = document.getElementById("button")
const birthdateEl = document.getElementById("birthdate");
const resultEl = document.getElementById("result");

function caculateAge(){
    const birthdayValue =  birthdateEl.value;
    if (birthdayValue === "")
        alert("Please enter your birthday");
    else
    {
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `You are ${age} ${age > 1 ? "years" : "year"} old.`;
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)

    let age = (currentDate.getFullYear() - birthdayDate.getFullYear());
    const months = (currentDate.getMonth() - birthdayDate.getMonth())

    if (months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

buttonEl.addEventListener("click", () =>{
    caculateAge();
});