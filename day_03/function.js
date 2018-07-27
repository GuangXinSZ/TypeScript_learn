// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(1, 2));
//函数的测试方式
function adda(x, y) {
    return x + y;
}
//命名函数
var myAdda = function (x, y) {
    return x + y;
};
//书写完整函数类型
var myAddb = function (x, y) {
    return x + y;
};
var myAddc = function (x, y) {
    return x + y;
};
//第3遍
var myaddD = function (x, y) {
    return x + y;
};
//ts 里面传递的参数必须是一致的 不能少 比如
function buildName(firstName, lastName) {
    return firstName + lastName;
}
// let result1 = buildName("Xin");Expected 2 arguments, but got 1
var result2 = buildName("liu", "guang");
// console.log(result2) liuguang
//如果说想让你的函数变得可选是否 想打人 可选否加上 (?)
function buildNameA(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
var result3 = buildNameA("Xin", "love");
console.log(result3); //输出 result
//必须填的函数类型
function buildNameB(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Shimt'; }
    return firstName + lastName;
}
function buildNameC(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result4 = buildName("Bob", "Adams");
console.log(result4);
//ts剩余的参数
function buildNameD(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(restOfName);
    return firstName + '添加' + restOfName.join(" ");
}
var emplyoyeeName = buildNameD("1", "2", "3");
console.log(emplyoyeeName);
