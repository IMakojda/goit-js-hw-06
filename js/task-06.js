const input =document.getElementById("validation-input");

const dataValue=input.dataset.length;

let inputLength=0;

    input.addEventListener("input", (event)=>{

      inputLength=event.target.value.length;

    });

    input.addEventListener("blur", () => {
    
    if ( inputLength < dataValue || dataValue<inputLength ){
        input.classList.add("invalid");
        } 

        else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        }
     
    });