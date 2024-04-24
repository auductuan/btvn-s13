interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(): void {
        this.speed += 10;
        console.log("xe tăng", this.speed);
    }
    slowDown(): void {
        this.speed -= 10;
        console.log("xe giảm", this.speed);
    }

    stop(): void {
        this.speed = 0;
        console.log("Xe dừng lại.");
    }
}

const bike = new Vehicle(50);
bike.speedUp(); 
bike.slowDown(); 
bike.stop(); 
