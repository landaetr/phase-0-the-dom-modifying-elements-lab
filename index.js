// Write your code here!
//const newHeader = document.createElement("h1");
//newHeader.id = "victory";
//newHeader.textContent = "Richard is the champion";

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Richard is the champion";

document.body.appendChild(newHeader);
