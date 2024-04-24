"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log("xe tăng", this.speed);
    }
    slowDown() {
        this.speed -= 10;
        console.log("xe giảm", this.speed);
    }
    stop() {
        this.speed = 0;
        console.log("Xe dừng lại.");
    }
}
const bike = new Vehicle(50);
bike.speedUp();
bike.slowDown();
bike.stop();
