// bài 1

var n = 13;
if (n <= 1 || n % 1 !== 0) {
  document.write("<p>Bài 1: mời nhập lại n</p>");
} else {
  for (var i = n; i > 0; i++) {
    var primeNumber = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primeNumber = false;
        break;
      }
    }
    var toStr = i.toString();
    var check = toStr.split("").reverse().join("");
    if (primeNumber && toStr === check) {
      document.write(
        "<p>Bài 1: số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng <span>" +
          n +
          "</span> là: <span>" +
          i +
          "</span></p>"
      );
      break;
    }
  }
}

// bài 2
var nums1 = [1, 3];
var nums2 = [2, 7];
var mergeArr = nums1.concat(nums2);
mergeArr.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
});
var position = Math.floor(mergeArr.length / 2);
if (mergeArr.length % 2 !== 0) {
  var median = mergeArr[position];
} else {
  var median = (mergeArr[position - 1] + mergeArr[position]) / 2;
}

document.write(
  "<p>Bài 2: Trung vị của 2 mảng <span>[" +
    nums1.join(", ") +
    "]</span> và <span>[" +
    nums2.join(", ") +
    "]</span> là <span>" +
    median +
    "</span></p>"
);

// bài 3
// ý tưởng: mặc định số nguyên dương nhỏ nhất là n = 1
// tạo 1 hàm kiểm tra n có trong mảng hay không
// nếu có thì gọi lại hàm với n+=1 nếu không thì in ra n
var nums = [7, 8, 9, 11, 12];
function findNum(n) {
  if (nums.includes(n)) {
    findNum((n += 1));
  } else {
    document.write(
      "<p>Bài 3: số nguyên dương nhỏ nhất không có trong mảng <span>[" +
        nums.join(", ") +
        "]</span> là <span>" +
        n +
        "</span></p>"
    );
  }
}
findNum(1);
