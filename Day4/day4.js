/**
 * >
 * <
 * >=
 * <=
 * == : chỉ so sánh về dữ liệu và k quan tâm đến kiểu dữ liệu
 * === : so sánh cả kiểu dữ liệu và dữ liệu
 * !=
 */

/**
 * &&: ký hiệu "và" sẽ trả về nếu vế trước và sau dấu && đều là đúng
 * ||: ký hiệu "hoặc" sả trả về đúng nếu 1 trong 2 đúng hoặc cả 2 cùng đúng
 */

// let a = "20";
// let b = 20;
// let c = 100

// let result = a === b || b < c;
// console.log(result);

/**
 * if(dieu_kien) {
 *     code sẽ được thực thi nếu dieu_kien là đúng
 * } else if(dieu_kien1) {
 *     code đây được thực thi nếu dieu_kien1 là dung
 * } else {
 *      code đây được thực thi nếu dieu_kien là sai
 * }
 */

// Đạt đã từng yêu 3 người: "Lan", "Chi", "Hoa"

// let ny_cua_Dat = "Bao Huy";

// if (ny_cua_Dat === "Lan") {
//   console.log(`Ny thứ 1 của Đạt là: ${ny_cua_Dat}`);
// } else if (ny_cua_Dat === "Chi") {
//   console.log(`Ny thứ 2 của Đạt là: ${ny_cua_Dat}`);
// } else if (ny_cua_Dat === "Hoa") {
//   console.log(`Ny thứ 3 của Đạt là: ${ny_cua_Dat}`);
// } else {
//   console.log("Đạt chưa từng yêu ai tên là: " + ny_cua_Dat);
// }

// a = 3;
// b = 2;
// c = 1;

// min = 0;
// if (a > b) {
//   min = b;
// } else {
//   min = a;
// }

// if (min > c) {
//   min = c;
// }

// max = 0;
// min = 0;

// if (a > b && a > c) {
//   max = a;
// } else if (b > a && b > c) {
//   max = b;
// } else if (c > b && c > a) {
//   max = c;
// }

// if (a < b && a < c) {
//     min = a;
// } else if (b < a && b < c) {
//     min = b;
// } else if (c < b && c < a) {
//     min = c;
// }

// if (a === b && b === c) {
//     max = a
//     min = a
// }

// console.log("Max = " + max);
// console.log("Min = " + min);

let check_hinh_vuong = false;

let a = 8;
let b = 10;
let c = 6;
if (a ** 2 + b ** 2 === c ** 2) {
  check_hinh_vuong = true;
} else if (a ** 2 + c ** 2 === b ** 2) {
  check_hinh_vuong = true;
} else if (b ** 2 + c ** 2 === c ** 2) {
  check_hinh_vuong = true;
} else {
  check_hinh_vuong = false;
}

if (check_hinh_vuong === true) {
  console.log("yes");
} else {
  console.log("no");
}
