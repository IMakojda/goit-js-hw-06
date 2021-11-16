const btnPlus=document.querySelector(`[data-action = "increment"]`);

const btnMinus=document.querySelector(`[data-action = "decrement"]`);

let valueSpan=document.getElementById("value");

let counter = 0;


    btnPlus.addEventListener("click", () => {
    counter += 1;
    valueSpan.textContent=counter;   
    });

    btnMinus.addEventListener("click", () => {
    counter -= 1;
    valueSpan.textContent=counter;
    });