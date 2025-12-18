const preview = document.getElementById("preview");
const userInput = document.getElementById("userInput");


userInput.addEventListener("input",()=>{
    if(userInput.value === ""){
        preview.textContent = "Start typing"
    }else{
        preview.textContent = userInput.value.trim();
    }
})

