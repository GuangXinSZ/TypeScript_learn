var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//使用类类似java 
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    return Greeter;
}());
var greet = new Greeter("xin");
console.log(greet.greet());
//继承 写了3个类 public 
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
//继承animal
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var anm = new Snake("Sammy the Python");
var tom = new Horse("hello world");
// console.log(anm.move())
// console.log(tom.move())
var Persion = /** @class */ (function () {
    function Persion(thenNane) {
        this.name = thenNane;
    }
    return Persion;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    //能够被函数访问
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Persion));
var hardword = new Employee("Howard", "Sales");
console.log(hardword.getElevatorPitch());
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
var Grid = /** @class */ (function () {
    //默认
    function Grid(scale) {
        this.scale = scale;
    }
    //传值
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        //Grid.origin.x 访问对象的静态变量
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return (xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 50, y: 50 }));
//抽象类
var AnimalDog = /** @class */ (function () {
    function AnimalDog() {
    }
    AnimalDog.prototype.move = function () {
        console.log("roaming the earch");
    };
    return AnimalDog;
}());
//抽象类的继承
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.thenName = name;
    }
    ;
    Department.prototype.printName = function () {
        console.log('Department name' + this.thenName);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Acconuting ad Audting") || this;
    }
    //实现抽象方法的类
    AccountingDepartment.prototype.printMetting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; //定义对抽象类型的引用
// department = new Department()
department = new AccountingDepartment();
department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//高级技巧 构造函数
var Greeters = /** @class */ (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    //获取greeting
    Greeters.prototype.greet = function () {
        return 'hello,' + this.greeting;
    };
    return Greeters;
}());
var gretter;
gretter = new Greeters(" world ");
console.log(gretter.greet());
//最后一节把类当做接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d.x);
