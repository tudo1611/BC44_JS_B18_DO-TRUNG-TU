var arrayNum = [];
var inputNum = document.querySelector("#inputNumber");
var result = document.querySelector("#reSult");
var result1 = document.querySelector("#reSult1");

document.querySelector("#btnInput").addEventListener("click", function () {
  arrayNum.push(inputNum.value.trim());
  result.innerHTML = arrayNum;
});

//1- tính tổng số dương
document.querySelector("#btnTinhTong").addEventListener("click", function () {
  var sum = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    sum += Number(arrayNum[i])
}
result1.innerHTML = sum;
});
