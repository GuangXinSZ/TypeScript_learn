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


// let passcode = "secret passcode";

// class Employees {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employees();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }
// readonly 修饰符
class Grid {
    //默认
    constructor (public scale: number) {

    }
    static origin = { x:0,y:0 };
    //传值
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        //Grid.origin.x 访问对象的静态变量
        let xDist = ( point.x - Grid.origin.x );
        let yDist = ( point.y - Grid.origin.y );
        return (xDist * xDist + yDist * yDist) / this.scale;
    }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:50,y:50}));
//抽象类
abstract class AnimalDog {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earch")
    }
}
//抽象类的继承
abstract class Department {
    thenName: string;
    constructor ( public name: string  ){
        this.thenName = name
    };
    printName(): void {
        console.log('Department name'+ this.thenName)
    }
    //穿件一个抽象类
    abstract printMetting(): void;//此方法必须在派生的类中去实现 也就是说定义了规范
}
class AccountingDepartment extends Department {
    constructor () {
        super("Acconuting ad Audting"); // 在派生类的构造函数中必须调用 super()
    }
    //实现抽象方法的类
    printMetting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}
let department: Department; //定义对抽象类型的引用
// department = new Department()
department = new  AccountingDepartment();
department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//高级技巧 构造函数
class Greeters {
    greeting: string;
    constructor( message: string ) {
        this.greeting = message;
    }
    //获取greeting
    greet () {
        return 'hello,'+ this.greeting
    }
}
let gretter: Greeters;
gretter = new Greeters(" world ");
console.log(gretter.greet());

//最后一节把类当做接口使用
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
console.log(point3d.x)
