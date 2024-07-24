const monthlypaymentEl = document.getElementById("monthly-payment");
const loanAmountEl = document.getElementById("loan-amount");
const interestRateEl = document.getElementById("interest-rate");
const durationEl = document.getElementById("duration");


function calculateLoan() {
    const amount = loanAmountEl.value;
    const rate = interestRateEl.value;
    const time = durationEl.value;

    const simInt = (amount * ((rate / 100) + 1) / time).toFixed(2);
    monthlypaymentEl.innerText = `Monthly Payments: ${simInt}`;
};