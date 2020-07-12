"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var name1 = "Noëlle";
function add(num1, num2) {
    if (num1 === 3) {
        throw new Error('oh no!');
    }
    return num1 + num2;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
