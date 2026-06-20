const display = document.getElementById("input")
const buttons = document.querySelectorAll(".buttons button");
const historyList=document.getElementById("history-list")
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const value = button.textContent;
        console.log(value);
         
        if(value ==="="){
            try{
                
                const expression = display.value;
                  const result = eval(
                   expression.replace(/÷/g,"/"));

                display.value=result;

                const li = document.createElement("li");
                li.textContent = `${expression} = ${result}`;
                historyList.prepend(li);
            }
            catch{
                display.value="Error";
            }
        }

        else if(value === "AC"){
            display.value="";
        }

        else if (value === "⌫"){
            display.value = display.value.slice(0,-1);
        }
        else {
            display.value += value;
        }
    });
});



document.addEventListener("keydown",(e)=>{
     if(e.key ==="Enter"){
            try{
                const expression = display.value;

                const result = eval(
                expression.replace(/÷/g,"/")
            );

            display.value = result;
 
           const li = document.createElement("li");
 
            li.textContent =`${expression} = ${result}`;

            historyList.prepend(li);

            }
            catch{
                display.value="Error";
            }
        }

        else if(e.key=== "Escape"){
            display.value ="";
        }

        else if (e.key === "Backspace"){
            display.value = display.value.slice(0,-1);
        }
        else if ("0123456789+-*/.".includes(e.key)){
            display.value += e.key;
        }

});

const historyBtn =
document.getElementById("history-btn");

const historyPanel =
document.getElementById("history-panel");

const closeHistory =
document.getElementById("close-history");

historyBtn.addEventListener("click",()=>{

    historyPanel.classList.add("show");

});

closeHistory.addEventListener("click",()=>{

    historyPanel.classList.remove("show");

});
document.getElementById("clear-history").addEventListener("click",()=>{

    historyList.innerHTML = "";

});