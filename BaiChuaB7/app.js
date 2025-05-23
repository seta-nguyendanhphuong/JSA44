// gọi tên
let box2Element = document.getElementById("box2");
console.log(box2Element);

let contentElement = document.getElementById("content");
console.log(contentElement);

let buttonElement = document.getElementById("button");
console.log(buttonElement);

let moreElement = document.getElementById("more");
console.log(moreElement);

let box3Element = document.getElementById("box3");
console.log(box3Element);

let allElement = document.getElementById("all");
console.log(allElement);

let dressElement = document.getElementById("dress");
console.log(dressElement);

// design
box2.style.width = "600px";
box2.style.margin = "50px auto";
box2.style.backgroundColor = "white";
box2.style.padding = "30px 40px";
box2.style.borderRadius = "8px";
box2.style.boxShadow =
  "0px 10px 36px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)";

contentElement.querySelector("h1").style.fontSize = "22px";
contentElement.querySelector("h1").style.color = "#333";
contentElement.querySelector("h3").style.color = "#666";
contentElement.querySelector("h3").style.fontWeight = "normal";

buttonElement.style.backgroundColor = "blue";
buttonElement.style.width = "170px";
buttonElement.style.textAlign = "center";
buttonElement.style.marginLeft = "32%";
buttonElement.style.height = "50px";
buttonElement.style.lineHeight = "50px";
buttonElement.style.color = "white";
buttonElement.style.borderRadius = "10px";

moreElement.querySelectorAll("h4").forEach((h4) => (h4.style.color = "#666"));

box3Element.style.textAlign = "center";
box3Element.style.marginTop = "30px";

dressElement.style.display = "flex";
dressElement.style.justifyContent = "center";

moreElement
  .querySelectorAll("h5")
  .forEach((h5) => (h4.style.fontSize = "13px"));
moreElement.querySelectorAll("h5").forEach((h5) => (h4.style.color = "#999"));
moreElement
  .querySelectorAll("h5")
  .forEach((h5) => (h4.style.display = "inline-block"));
moreElement.querySelectorAll("h5").forEach((h5) => (h4.style.margin = "0 5px"));
