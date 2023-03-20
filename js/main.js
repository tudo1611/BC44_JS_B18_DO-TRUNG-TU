var arrayNum = [];
var inputNum = document.querySelector("#inputNumber");
var result = document.querySelector("#result");
var result1 = document.querySelector("#result1");
var result2 = document.querySelector("#result2");
var result3 = document.querySelector("#result3");
var result4 = document.querySelector("#result4");
var result5 = document.querySelector("#result5");
var result6 = document.querySelector("#result6");
var result7 = document.querySelector("#result7");
var result8 = document.querySelector("#result8");
var result9 = document.querySelector("#result9");
var inputNum9 = document.querySelector("#inputNum9");
var resultInput9 = document.querySelector("#resultInput9");
var result10 = document.querySelector("#result10");



document.querySelector("#btnInput").addEventListener("click", function () {
  arrayNum.push(inputNum.value.trim());
  result.innerHTML = arrayNum;
});

//1- tính tổng số dương
document.querySelector("#btnTinhTong").addEventListener("click", function () {
  var sum = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      sum += Number(arrayNum[i]);
    }
  }
  result1.innerHTML = sum;
});
//2- đếm số dương
document.querySelector("#btnDemSo").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      count++;
    }
  }
  result2.innerHTML = " Có " + count + " số dương";
});

//3- tìm số nhỏ nhất
document
  .querySelector("#btnTimSoNhoNhat")
  .addEventListener("click", function () {
    var min = Math.min.apply(Math, arrayNum);
    result3.innerHTML = "Số nhỏ nhất: " + min;
  });

// 4- tìm số dương nhỏ nhất
document
  .querySelector("#btnTimSoDuongNhoNhat")
  .addEventListener("click", function () {
    var soDuong = [];
    for (var i = 0; i < arrayNum.length; i++) {
      if (arrayNum[i] > 0) {
        soDuong.push(arrayNum[i]);
      }
    }
    if (soDuong.length > 0) {
      var min = Math.min.apply(Math, soDuong);
      result4.innerHTML = "Số dương nhỏ nhất: " + min;
    } else {
      result4.innerHTML = "Not found";
    }
  });

// 5- tìm số chẵn cuối cùng

//hàm check chẵn lẻ
function check_chan_le(n) {
  //flag = 1 : số lẻ
  //flag = 0 : số chẵn
  var flag = 1;
  if (n % 2 == 0) flag = 0;
  return flag;
}

function find_last_even(arrayNum) {
  for (var i = arrayNum.length - 1; i >= 0; i--) {
    if (check_chan_le(arrayNum[i]) == 0) return arrayNum[i];
  }
}
document
  .querySelector("#btnTimSoChanCuoiCung")
  .addEventListener("click", function () {
    result5.innerHTML = "Số chẵn cuối cùng: " + find_last_even(arrayNum);
  });

//6 - Đổi chỗ
function swap(array, position1, position2) {
  //cách 1
  var temp = array[position1];
  array[position1] = array[position2];
  array[position2] = temp;
  return array;
  //cách 2
  //   [array[position1], array[position2]] = [array[position2]], [array[position1]]
  //   return array;
}

document.querySelector("#btnDoiCho").addEventListener("click", function () {
  var viTri1 = document.querySelector("#viTri1").value * 1;
  var viTri2 = document.querySelector("#viTri2").value * 1;
  result6.innerHTML = "Mảng sau khi đổi: " + swap(arrayNum, viTri1, viTri2);
});

//7- sắp xếp tăng dần
function compareNumbers(a, b) {
  return a - b;
}
document
  .querySelector("#btnSapXepTangDan")
  .addEventListener("click", function () {
    result7.innerHTML =
      "Mảng sau khi sắp xếp: " + arrayNum.sort(compareNumbers);
  });

//8- tìm số nguyên tố đầu tiên
function kiemTraSoNguyenTo(number) {
  var checkSNT = true;
  if (number < 2) {
    checkSNT = false;
  } else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        checkSNT = false;
        break;
      }
    }
  }
  return checkSNT;
}
document
  .querySelector("#btnTimSoNguyenToDauTien")
  .addEventListener("click", function () {
    let soNguyenToDauTien;
    for (var i = 0; i < arrayNum.length; i++) {
      if (kiemTraSoNguyenTo(arrayNum[i])) {
        soNguyenToDauTien = arrayNum[i];
        break;
      }
    }
    result8.innerHTML = "Số nguyên tố đầu tiên: " + soNguyenToDauTien;
  });

//9 - Đếm số nguyên
// hàm check số nguyên
function check_real_leteger_number(n) {
  let flag = 1;
  if (Math.ceil(n) != Math.floor(n)) flag = 0;
  return flag;
}

document.querySelector("#btnInput9").addEventListener("click", function () {
  arrayNum.push(inputNum9.value.trim());
  resultInput9.innerHTML = arrayNum;
});

document
  .querySelector("#btnDemSoNguyen")
  .addEventListener("click", function () {
    var count = 0;
    for (var i = 0; i < arrayNum.length; i++) {
      if (check_real_leteger_number(arrayNum[i])) {
        count++;
      }
    }
    result9.innerHTML = "Có: " + count + " số nguyên";
  });

//10 - so sánh số âm và số dương

// function check_negative_positive_number(n) {
//   //flag = -1 => số âm
//   //flag =  0 =>  số 0
//   //flag =  1 => số dương

//   let flag = 0;
//   if (n > 0) flag = 1;
//   else if (n < 0) flag = -1;
//   return flag;
// }

document.querySelector("#btnSoSanh").addEventListener('click', function () {
  var soAm = [];
  var soDuong = [];
  for ( var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      soDuong.push(arrayNum[i]);
    }
    if (arrayNum[i] < 0) {
      soAm.push(arrayNum[i]);
    }
  }
  if ( soAm.length == soDuong.length) {
    result10.innerHTML = 'số âm = số dương';
  } else if ( soAm.length > soDuong.length) {
    result10.innerHTML = 'số âm > số dương';
  } else {
    result10.innerHTML = 'số âm < số dương';
  }
});