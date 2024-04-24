// Phân biệt
// Abstract method là một phương thức trong một lớp trừu tượng (abstract class) mà không có cơ thể (body) của nó được triển khai trong lớp đó. 
// Thay vào đó, các lớp con kế thừa từ lớp trừu tượng đó phải cung cấp triển khai cho phương thức abstract. 
// Abstract method định nghĩa giao diện (interface) cho các lớp con và đảm bảo rằng chúng cung cấp triển khai cụ thể cho phương thức đó.

// Method là một phương thức có cơ thể (body) cụ thể được triển khai trong một lớp. 
// Các lớp con không cần phải cung cấp triển khai mới cho method này, nhưng chúng có thể ghi đè (override) nó nếu cần.

// Lớp trừu tượng Animal với abstract method makeSound()


//  Ví dụ về abstract method:
abstract class Animal {
    constructor(protected name: string) {}
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu");
    }
}
const dog = new Dog("Chihuahua");
dog.makeSound(); 

// Ví dụ về method:
class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}
console.log("Tổng:", Calculator.add(5, 3)); 
console.log("Hiệu:", Calculator.subtract(10, 4));


