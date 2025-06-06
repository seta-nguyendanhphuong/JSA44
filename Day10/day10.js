/**
 * Để lấy ra giá trị ở trong thẻ input thì:
 * Bước 1: Dùng DOM lấy ra thẻ input trước
 * Bước 2: tên_thẻ.value => giá trị nằm trong input
 * 
 * querySelector(value): Lấy thẻ giống cách lấy trong CSS:
 * value: # + tên id, . + tên class, tên thẻ, ...
 */

let my_input = document.getElementById("my_input")

// Có 2 cách để gán sự kiện vào 1 nút

// Cách 1: 
// - 1. Viết hàm trực tiếp vào trong thẻ mở của thẻ muốn gán sự kiện:
// - 2. định nghĩa tên hàm đó trong file JS

function printValueInput() {
    // console.log("Hello");
    console.log(my_input.value);
}



// Cách 2:
// - 1. Lấy ra thẻ input và nút thực thi sự kiện thông qua DOM

let my_input2 = document.getElementById("my_input2")
let buttonAddEvent = document.getElementById("buttonAddEvent")

// - 2. tên_nut.addEventListener("click", function(){ ... })
buttonAddEvent.addEventListener("click", function() {
    console.log(my_input2.value);
})

// NOTE: Mỗi khi thực kiểu sự kiện được gán trong addEventListener
// Thì function ở vế sau được thực thi