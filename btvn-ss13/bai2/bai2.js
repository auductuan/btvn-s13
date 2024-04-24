"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return `Loại công việc: ${this.type}`;
    }
}
class PartimeJob extends Job {
    constructor(workingHour) {
        super("Part time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return `Lương: ${this.workingHour * 30000} đ`;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full time");
    }
    calculateSalary() {
        return `Lương của bạn: 10.000.000 đ`;
    }
}
let job1 = new PartimeJob(30);
let job2 = new FulltimeJob();
console.log(job1.printType());
console.log(job1.calculateSalary());
console.log(job2.printType());
console.log(job2.calculateSalary());
