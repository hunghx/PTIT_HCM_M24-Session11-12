"use strict";
class Shape {
    constructor(_chuVi, _dienTich) {
        this.chuVi = _chuVi;
        this.dienTich = _dienTich;
    }
    showInfo() {
        console.log("đây là hình học");
    }
}
/*
    * Lớp hình vuông kế thừa lopwps hình học
*/
class Square extends Shape {
    constructor(_canh) {
        super(0, 0);
        this.canh = _canh;
    }
    // override là từ khóa chú thích đây là phương thức ghi đè phương thức của lớp cha
    showInfo() {
        console.log("đây là hình vuông");
    }
    calArea() {
        this.dienTich = this.canh * this.canh;
    }
}
/*
    * Tạo lớp tam giác kế thừa hình học
*/
class Triangle extends Shape {
    constructor(_a, _b, _c) {
        super(0, 0);
        this.a = _a;
        this.b = _b;
        this.c = _c;
    }
    showInfo() {
        console.log("đây là hình tam giác");
    }
}
/*
    * Tạo đối tượng hình học
*/
let shape = new Shape(0, 0);
let square = new Square(5);
let triangle = new Triangle(3, 4, 5);
/*
    * Gọi phương thức showInfo()
*/
// tính đa hình 
shape.showInfo();
square.showInfo(); // kiểm tra thằng này 
triangle.showInfo();
// chú ý
// kiểu khai báo : kiểu dữ liệu lúc khai báo biến 
// kiểu thực tế  : kiểu khởi tạo đối tượng
// muốn gọi phương thức calArea() của đối tượng square 
// let squareCopy = <Square> square;
let squareCopy = square;
squareCopy.calArea();
console.log(squareCopy.dienTich);
