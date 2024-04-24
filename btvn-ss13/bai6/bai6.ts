//Phân biệt abstract class và interface:

// Abstract class:
// Abstract class có thể chứa cả các phương thức có cơ thể và các phương thức trừu tượng.
// Các lớp con kế thừa từ abstract class bằng từ khóa extends.
// Một lớp con chỉ có thể kế thừa từ một abstract class.

// Interface:
// Interface chỉ chứa các phương thức trừu tượng (method signatures) mà các lớp implement (triển khai).
// Các lớp implement interface bằng từ khóa implements.
// Một lớp có thể implement nhiều interface cùng một lúc.

//Ví dụ minh họa:

//Abstract:
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu");
    }
}

//Interface:
interface Printable {
    print(): void;
}

class Rectangle implements Printable {
    print(): void {
        console.log("This is a rectangle");
    }
}
