//使用类类似java 
class Greeter {
    //定义类型
    greeting: string;
    constructor( message: string ) {
        this.greeting = message
    }
    greet () {
        return "hello" + this.greeting
    }
}
let greet = new Greeter("xin");
console.log(greet.greet())
//继承 写了3个类 public 
class Animal {
    public name: string;
    public constructor ( theName: string) {
        this.name = theName
    }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//继承animal
class Snake extends Animal {
    constructor ( name: string ) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor ( name: string ) {
        super(name)
    }
    move(distanceInMeters = 45) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
let anm = new Snake("Sammy the Python");
let tom: Animal = new Horse("hello world");

// console.log(anm.move())
// console.log(tom.move())
class Persion {
    protected name: string;
    protected constructor (thenNane: string ) {
        this.name = thenNane;
    }
}
class Employee extends Persion {
    private department: string;
    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }
    //能够被函数访问
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let hardword = new Employee("Howard", "Sales");

console.log(hardword.getElevatorPitch())
