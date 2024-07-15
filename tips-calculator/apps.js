const buttonEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalEl = document.getElementById("total");

buttonEl.addEventListener("click", ()=>{
    const totalAmount = calculateTotal();
    // console.log(totalAmount);
    totalEl.innerHTML = totalAmount.toFixed(2);
});

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;

    return billValue * (1 + tipValue / 100)
    // console.log(totalValue);
    // // alert(tipValue)
}