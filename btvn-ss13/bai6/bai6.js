"use strict";
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
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log("Gâu gâu");
    }
}
class Rectangle {
    print() {
        console.log("This is a rectangle");
    }
}
