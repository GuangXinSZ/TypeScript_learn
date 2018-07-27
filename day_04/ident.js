//不使用泛型的情况下 
function indentity(arg) {
    return arg;
}
console.log(indentity(1));
//使用泛型
function indentitya(arg) {
    return arg;
}
console.log(indentitya("xin"));
//表示类型传什么类型返回什么类型 T 代表捕获用户传入的类型 接收什么 返回什么
function indentityb(arg) {
    return arg;
}
console.log(indentityb(222));
//使用泛型变量
function loggingIdentity(arg) {
    //console.log(arg.length); T 函数并没有.length
    return arg;
}
//整体实现
function loggingIdentitya(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = indentityb;
console.log(loggingIdentitya(["string"]));
function indentityc(arg) {
    return arg;
}
//正确的选择
var myIndentFnSan = indentityc;
//泛型的指定方式 写在类上面
//定义一个类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
var src = myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(src);
console.log('====================================');
console.log(myGenericNumber.add(1, 2));
console.log('====================================');
