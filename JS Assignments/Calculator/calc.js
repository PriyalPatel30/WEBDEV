let displayValue = "";
const display = document.querySelector(".upper");
const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        let value = button.textContent;
      
        if (value === "="){
            displayValue = eval(displayValue) || "Error";
           
        } 
        else if (value === "C"){
            displayValue = "";
        } 
        else{
            displayValue += value;
        }

        display.textContent = displayValue || 0;
    });
});