//下载 typescript cnpm install -g typescript
//创建一个类
var Student = /** @class */ (function () {
    // constructor就类似数据初始化 类似php
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        //闭包使用this
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function gretter(person) {
    return "hello" + person.firstName + 'lastname' + person.lastName;
}
// let user = { firstName: "liu",lastName: "xin" }
var user = new Student("Jane", "xin", "liu");
document.body.innerHTML = gretter(user);
//定义基本类型 以及其他的进制类似
var isDone = false;
var decLiteral = 123;
var names = "bob";
//使用字符号 (`) 或者 ${}
var nowname = "cheng'";
var age = 12;
//成功
var sent = "hello welcome here " + nowname;
//ts操作数组
var list = [1, 2, 3];
//第二种方法 Array<数据类型>
var listMain = [1, 2, 3];
//枚举 可举例的样式
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var notSure = 4;
notSure = "I am doctor";
function wranUser() {
    alert(" This is my wraning message ");
}
wranUser();
console.log(c);
