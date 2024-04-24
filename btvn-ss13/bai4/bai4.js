"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.calculateArea());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());
