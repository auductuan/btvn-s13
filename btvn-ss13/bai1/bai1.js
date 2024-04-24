"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("Chiều rộng:", this.width);
        console.log("Chiều cao:", this.height);
    }
}
const a = new Rectangle("Hình chữ nhật", 5, 10);
console.log("Tên:", a.getName());
console.log("Kích thước:");
a.getSize();
