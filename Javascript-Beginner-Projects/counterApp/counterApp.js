// Counter App

const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const resetButton = document.getElementById("resetBtn");
const display = document.getElementById("display");


let counter = 0;

function updateDisplay(){
    display.textContent = counter;
}

// Plus Button
plusButton.addEventListener("click",()=>{
    counter++;
    updateDisplay();
})
// Minus Button
minusButton.addEventListener("click",()=>{
    if(counter === 0)return;
    counter--;
    updateDisplay();
})
// Reset Button
resetButton.addEventListener("click",()=>{
    counter = 0;
    updateDisplay();
});

updateDisplay();
