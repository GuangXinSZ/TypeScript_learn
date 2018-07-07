//下载 typescript cnpm install -g typescript
//创建一个类
var Student = /** @class */ (function () {
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
