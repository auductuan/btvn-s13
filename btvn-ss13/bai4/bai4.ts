interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.calculateArea());
console.log("Chu vi hình tròn:", circle.calculatePerimeter());

