let elementClassNameLine1 = document.getElementsByClassName("line1");
console.log(elementClassNameLine1);

console.log(elementClassNameLine1[0].innerText);
console.log(elementClassNameLine1[1].innerText);
console.log(elementClassNameLine1[2].innerText);

// querySelector(value): Lấy thẻ giống cách lấy trong CSS:
// value: tên id, tên class, tên thẻ, ...
// Lấy ra thẻ đầu tiên được phát hiện

// querySelectorAll(value)

let h1 = document.querySelectorAll("h1");
console.log(h1);

let classElement = document.querySelectorAll(".line1");
console.log(classElement);
