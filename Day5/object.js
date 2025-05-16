// 5. Object
// let ten_object = {
//     ten_key1: value1,
//     ten_key2: value2,
//     ten_keyN: valueN,
//     ...
// }
/**
 * - Truy cập vào giá trị của thuộc tính:
 * + console.log(ten_object.ten_key)
 *
 * - Khai báo thêm cặp key và value:
 * ten_object.new_key = new value
 *
 * - Thay đổi giá trị của 1 thuộc tính
 * ten_object.key_da_ton_tai = new value
 */

let person1_name = "Bao Huy";
person1_name = "ABC";
let person1_age = 12;
let person1_address = "HCM";

let person1 = {
  name: "Bao Huy",
  age: 11,
  address: "HCM",
  isHandsome: true,
  class: {
    name: "Lomonoxop",
    members: 52,
  },
};

console.log(person1.class.members);

// Khai báo thêm:
person1.favourite = "Choi da bong";

// Thay doi
person1.age = 100;
console.log(person1);

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

let person2 = {
  name: "Tung Anh",
  age: 16,
  address: "Ha Noi",
};

// Tính tổng age của 2 person
// Dùng thuộc tính age để so sánh và in ra tên
// của người có tuổi lớn hơn
