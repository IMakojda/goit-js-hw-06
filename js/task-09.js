function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorNumber = document.querySelector(".color");

const btbChangeColor=document.querySelector(".change-color");

btbChangeColor.addEventListener("click", () => {

  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  
  colorNumber.textContent =`${getRandomHexColor()}`;

});
