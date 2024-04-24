abstract class Job{
    protected type:string
    constructor(type:string){
        this.type=type
    }
    printType():any{
        return `Loại công việc: ${this.type}`;
    }
    abstract calculateSalary():any;
}
class PartimeJob extends Job{
    protected workingHour:number
    constructor(workingHour:number){
        super("Part time")
        this.workingHour=workingHour
    }
    calculateSalary():any {
        return `Lương: ${this.workingHour*30000} đ`;
    }
}
class FulltimeJob extends Job{
    constructor(){
        super("Full time")
    }
    calculateSalary():any {
        return `Lương của bạn: 10.000.000 đ`;
    }
}
let job1 = new PartimeJob(30);
let job2 = new FulltimeJob();


console.log(job1.printType());
console.log(job1.calculateSalary());

console.log(job2.printType());
console.log(job2.calculateSalary());
