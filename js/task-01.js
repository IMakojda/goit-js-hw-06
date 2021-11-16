const GetListLi = document.querySelectorAll("li.item");

console.log("Number of categories:",GetListLi.length);

GetListLi.forEach((Element)=>{
  
  console.log('Category:',Element.firstElementChild.textContent);
  
  console.log('Elements:',Element.lastElementChild.childElementCount);

});
