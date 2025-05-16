/**
 * Vòng for: dùng để thực thi 1 đoạn code lặp đi lặp lại nhiều lần với cùng 1 quy tắc, logic
 * for (vị trí khởi tạo; điều kiện để vòng lặp chạy; sự thay đổi của vòng lặp) {
 *
 * }
 */

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0 && (i + 4) % 6 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 10; i >= 0; i--) {
//   if (i >= 5) {
//     console.log(i);
//   } else {
//     console.log(10 - i);
//   }
// }

// "1 2 3 4 5 6 7";
// let s = "";
// // s = s + 1 + " " // s = "" + 1 + " " = "1 "
// // s = s + 2 + " " // s = "1 " + 2 + " " = "1 2 "
// // s = s + 3 + " " // s = "1 2 " + 3 + " " = "1 2 3 "

// for (let i = 1; i <= 10; i++) {
//   s = s + i + " ";
// }

// console.log(s);

// let a = 5;
// let b = 15;

// let sum = 0;
// sum = sum + 5; // sum = 5
// sum = sum + 6; // sum = 11
// sum = sum + 7; // sum = 18

// for (let i = a; i <= b; i++) {
//   sum = sum + i;
// }

// console.log(sum);
let line = "";
for (let i = 1; i <= 9; i++) {
  line = line + i + " ";
  if (i % 3 === 0) {
    console.log(line);
    line = "";
  }
}

let userInfor = [
  {
    name: "abc",
    email: "abc@gmail.com",
    password: 123,
  },

  {
    name: "phuong",
    email: "phuong@gmail.com",
    password: 890,
  },
];

let list_product = [
  {
    name: "San pham 1",
    author: "abc@gmail.com",
    price: "123",
    description: "jnhasdkajnkjansdd",
  },

  {
    name: "San pham 1",
    author: "abc@gmail.com",
    price: "123",
    description: "jnhasdkajnkjansdd",
  },
];
