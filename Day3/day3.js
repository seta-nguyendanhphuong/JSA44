// Console.log() => cách để ta có thể in ra giá trị nào đấy bảng console
//   console.log("Hello World");

//   Kiểu dữ liệu trong Javascript:
// - Chuỗi(String): chứa nhiều ký tự lại với nhau và được để trong "", '', ``
// console.log(typeof "Toi ten la Nguyen Danh Phuong");
// console.log("123123!@#$%^&*$#%^&*&");
// console.log('"abc"');
// console.log("'xzy'");
// console.log(`Phuong dzai`);
// console.log("I" + " Love" + " Mindx");
// console.log("I" + ` Love` + " Mindx ");

// - Số(Number),
// console.log("My age is: " + 123);
// console.log(typeof -10);
// console.log(8.9);

// - true/false(Boolean),
// console.log("true");
// console.log(typeof true);
// console.log("false");
// console.log(false);

// - Undefined
// - null
// - object

// Cách để kiểu dữ liệu
// typeof

// 3. Khai báo biến trong JS:
// - Biến là đại diện cho 1 trường dữ liệu nào đó và nó sẽ giúp người đọc dễ hiểu hơn
// về dữ liệu
// - Các ký tự để khai báo biến là let, var, const
// - Công thức: let/const/var tên_biến = giá trị nào đó
// - camal case: viết hoa chữ cái đầu từ từ thứ 2 trở đi. VD: myShoolAddress
// - snake case: các từ được ngăn cách bở dấu _ => VD: my_school_address
// const address = `272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội`;

// Update gia tri cua bien
// address = "New York";
// address = "Tay ho";

// console.log("Toi dang o " + address + ". Nha cua toi rat dep");
// console.log(`Toi dang o ${address}. Nha cua toi rat dep`);

// let name = "Danh Phuong";
// let age = 30;
// let schoolAddress = "Mindx";
// let member = 10;

// console.log(
//   "Tên tôi là " +
//     name +
//     " tôi năm nay " +
//     age +
//     " tuổi. Tôi đang học ở trường " +
//     schoolAddress +
//     ". Tôi có " +
//     member +
//     " người bạn thân"
// );

// 4. Hàm prompt("Lời dẫn") trong JS: Cho phép người dùng khai báo giá trị từ trình duyệt
// - Hàm alert("Lời dẫn") => Thông báo ra ngoài trình duyệt

// let input = prompt("Enter something here");
// console.log("output: " + input);
// alert("Danh Phuong dzai");

// 5. Phép tính trong JS:
// Phép tính cơ bản trong JS: +, -, *, /, **
// Dấu căn bậc 2: Math.sqrt()

// let a = Number();
// let b = Number(prompt("Enter b: "));

// let count = a + b;
// console.log("count = " + count);

// "10" + 10 => "1010"
