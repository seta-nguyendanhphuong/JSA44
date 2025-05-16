// array: mảng dùng để lưu nhiều giá trị có chung thể loại với nhau
// let tên_mảng = [value1, value2, value3, ...]
/**
 * - Cách để truy cập vào từng phần tử nằm trong mảng: tên_mảng[index]
 * + Note: 0 <= index < chiều dài mảng - 1
 *
 * - Chiều dài của mảng: tên_mảng.length
 * - Tips truy cập vào phần tử cuối trong mảng: tên_mảng[tên_mảng.length - 1]
 * - Thêm 1 giá trị mới vào cuối mảng: tên_mảng.push(giá trị mới)
 */

let cars = ["Toyota", "Honda", "Kia", "Mazda", "Vinfast"];
console.log(cars);

// Chiều dai mảng:
console.log(cars.length);

// Truy cap theo index:ß
console.log("Giá trị cuối trong mảng: " + cars[cars.length - 1]);

// Them gia tri vao cuoi
cars.push("Tesla");
console.log(cars);

// Xoa gía trị ở cuối mảng
cars.pop();
cars.pop();
console.log(cars);

// console.log("42 + 2 + ");
// car.push('')
