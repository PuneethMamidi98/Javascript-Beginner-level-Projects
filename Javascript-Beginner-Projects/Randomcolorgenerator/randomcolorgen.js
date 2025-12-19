const generateBtn = document.getElementById("generateBtn");
const colorContainer = document.getElementById("color-container");

// event when button click -> Generate 30 random colors in 30 boxes

// Function for random color generator
function generateRandomColors(){
    for(let i = 0 ; i < 30; i++){
     
        // Box creation
        const box = document.createElement("div");  
        box.className = "colorBox";
        const randColors = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0");
        console.log(randColors);
        box.textContent = randColors;
        box.style.backgroundColor = randColors; 
        const copyIcon = document.createElement("img");
        copyIcon.className = "copy-icon";
        copyIcon.src = "paste.png";
        copyIcon.alt = "Copy";
        box.appendChild(copyIcon);
        colorContainer.appendChild(box);
        
    }
    
}

generateBtn.addEventListener("click",()=>{
        colorContainer.innerHTML = "";
        generateRandomColors();
})

colorContainer.addEventListener("click",(e)=>{
            if(e.target.classList.contains("copy-icon")){
                const box = e.target.closest(".colorBox");
                const color = box.textContent.trim();    
                navigator.clipboard.writeText(color);
                alert("Copied to clipboard Successfully!!")
        }
    });





