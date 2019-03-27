let inputWidth;
let inputHeight;
let s;
inputWidth = prompt("Nhập chiều rộng");
inputHeight = prompt("Nhập chiều dài");

let Width = parseInt(inputWidth);
let Height = parseInt(inputHeight);

s = Width*Height;
document.write("Chiều dài bạn nhập là: " +Width);
document.write("<br>Chiều dài bạn nhập là: " +Height);
document.write("<br>Diện tích = " +s);
