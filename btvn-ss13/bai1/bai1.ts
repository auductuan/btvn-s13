abstract class Shape {
    constructor(protected name: string){}
    abstract getSize(): void;
    getName(): string {
        return this.name;
    }
}

class Rectangle extends Shape {
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }

    getSize(): void {
        console.log("Chiều rộng:", this.width);
        console.log("Chiều cao:", this.height);
    }
}

const a = new Rectangle("Hình chữ nhật", 5, 10);
console.log("Tên:", a.getName());
console.log("Kích thước:");
a.getSize();
