const userInput = document.getElementById("userInput");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining")


userInput.addEventListener("input",()=>{
    charactersCounter();
})

// Set max limit
let maxLimit = 100; 
function charactersCounter(){
    // Total Characters
    let value = userInput.value; 
    const totalCharacters = value.length;
    const remainingCharacters = maxLimit - totalCharacters;
    total.textContent = `Total characters: ${totalCharacters}`;
    remaining.textContent = `Remaining: ${remainingCharacters}`; 
}


charactersCounter();