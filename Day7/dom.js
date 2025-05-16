let firstNameElement = document.getElementById("firstName");
console.log(firstNameElement);

// Có 3 cách để 1 thay đổi nội dung của 1 thẻ:
/**
 * innerText
 * innerHTML
 * textContent
 */

// firstNameElement.innerText = "Thay phuong dzai"

firstNameElement.style.backgroundColor = "yellow";
firstNameElement.style.fontSize = "100px";

let container = document.getElementById("container");
container.style.borderRadius = "50%";
container.style.backgroundColor = "brown";
container.style.width = "200px";
container.style.height = "200px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";

// Thêm 1 thẻ bât kỳ vào trong html
let newDiv = document.createElement("div");
newDiv.innerText = "This is new Div";
newDiv.style.border = "2px dashed green";

// Đây là nội dung cần nhớ khi thêm 1 thẻ mới vào body:
// document.body.appendChild(element)
document.body.appendChild(newDiv);

let newDiv2 = document.createElement("div");
newDiv2.innerText = "This is new Div";
newDiv2.style.border = "2px dashed green";

container.appendChild(newDiv2);
