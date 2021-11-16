const input=document.getElementById("name-input");

const output=document.getElementById("name-output");

console.log(input.textContent);

input.addEventListener("input", (event)=>{

    if (event.target.value ===""){
    output.textContent="Anonymous"
    } 

    else {
    output.textContent=event.target.value;
    }
    
});