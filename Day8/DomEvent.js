// Function trong JS: Tạo ra 1 chức năng ở trong JS để thực thi 1 khối câu lệnh nào đó
// Công thức:
// function tên () {
//      Code sẽ được chạy ở đây nếu tên function được gọi
//}

// Bước gọi tên function: tên()
//Note: Funtion chỉ chạy khi được gọi tên
function printMyName() {
  console.log("Hello toi ten la Phuong");
}

// Gọi tên:
// printMyName();

/**
 * 1. Khi bấm vào nut click me thì sẽ hiện dòng "Hello toi ten la Phuong" ra ngoài màn hình
 * 2. Bấm nút changeName sẽ đổi tên của 1 ai đó thành 1 khác, tên sẽ được hiện ra thẻ h1 nằm bên dứoi
 * 3. Bấm 1 lần nữa tên về như cũ
 * 4. Tạo 1 sự kiện ẩn hiện modal
 * 5. Xử lý các chức năng đóng mở modal
 */

// Bước 1 tạo chức năng đổi màu chữ
let textColor = document.querySelector("#textColor");
function changeColor() {
  textColor.style.color = "red";
}

// changeColor();
