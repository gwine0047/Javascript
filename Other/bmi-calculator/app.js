const bntEl = document.getElementById("btn");
const bmiResultEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    const heightEl = document.getElementById("height");
    const weightEl = document.getElementById("weight");

    const heightValue = heightEl.value / 100;
    const weightValue = weightEl.value;

    const bmiValue = (weightValue / (heightValue **2));

    bmiResultEl.value = bmiValue;

    // alert("weight = "+weightValue + "\nheight = "+heightValue + "\nbmi = "+bmiValue);
    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight";
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal Weight";
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over weight";
    }
    else if(bmiValue >= 30){
        weightConditionEl.innerText = "Obesity";
    }
}

bntEl.addEventListener("click", calculateBMI);