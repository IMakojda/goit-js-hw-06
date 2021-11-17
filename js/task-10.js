function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector(`[type="number"]`);

const btnCreate=document.querySelector(`[data-create]`);

const btndataDestroy=document.querySelector(`[data-destroy]`);

const box=document.getElementById("boxes");

const colection =[];

let amountBox=0;

input.addEventListener("input", (event)=>{
  amountBox=event.target.value;
});

btnCreate.addEventListener("click", () =>{

  for(let i = 1; i <=amountBox; i+=1){
  const elementDiv=document.createElement("div");
  elementDiv.classList.add(`${`box`+i}`);
  box.append(elementDiv);
  document.querySelector(`.${`box`+i}`).textContent=i;
  document.querySelector(`.${`box`+i}`).style.background=`${getRandomHexColor()}`;
  document.querySelector(`.${`box`+i}`).style.width= `${20 +(i*10)}px`;
  document.querySelector(`.${`box`+i}`).style.height= `${20 +(i*10)}px`;
  }
});

btndataDestroy.addEventListener("click", () =>{
  for(let i = 1; i <=amountBox; i+=1){
    document.querySelector(`.${`box`+i}`).remove();
  }
  input.value=0;
});





