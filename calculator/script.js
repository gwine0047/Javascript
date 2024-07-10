const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++)
    {
        buttonsEl[i].addEventListener("click", () =>{
            const buttonValue = buttonsEl[i].textContent;
            if(buttonValue === "C")
            {
                inputFieldEl.value = "";
            }
            else if(buttonValue === "=")
            {
                // calls the built-n function evaluate which does all the arithmetic
                inputFieldEl.value = eval(inputFieldEl.value);
            }
            else if(buttonValue === "x")
            {
                inputFieldEl.value = inputFieldEl.value.slice(0, -1);
            }
            else
            {
                inputFieldEl.value += buttonValue;
            }
        });
    }

    // function clearResult()
    // {

    // }

    // function calculateResult()
    // {
    //     inputFieldEl.value = eval(inputFieldEl.value);
    // }

    // function appendValue(buttonValue)
    // {
    //     inputFieldEl.value += buttonValue;
    // }